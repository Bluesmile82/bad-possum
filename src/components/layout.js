/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.scss"

const Layout = ({ hero, children, disableFooter }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} hero={hero}/>
      <main>{children}</main>
      {!disableFooter && <Footer />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  disableFooter: PropTypes.bool
}

export default Layout
