import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"
import "./header.scss"

const Header = () => (
  <header
    style={{
      backgroundColor: `black`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image data={
            useStaticQuery(graphql`
              query {
                placeholderImage: file(relativePath: {eq: "logo.png" }) {
                childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
                    presentationWidth
                }
              }
            }}`)
          }
          className="logo"
          alt="Bad Possum"
          />
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
