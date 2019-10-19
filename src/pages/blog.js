import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section/section"
import SEO from "../components/seo"
import './index.scss';

const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                date
                path
              }
              html
            }
          }
        }
      }
    `
  )
  const { edges } = allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <Section color="brown">
        <div className="container blog-post">
          {edges.map(e =>
            <Link to={e.node.frontmatter.path}>
              <h2>{e.node.frontmatter.title}</h2>
              <h3>{e.node.frontmatter.date}</h3>
            </Link>
          )}
        </div>
      </Section>
    </Layout>
  )
};

export default BlogPage

