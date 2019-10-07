import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section/section"
import SenderForm from "../components/sender-form/sender-form"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image
      id="hero"
      alt="Bad Possum members"
      data={useStaticQuery(graphql`
        query {
          placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 100) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      `)}
    />
    <Section>
      <div className="video-padding">
        <div className="video-container">
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/CxuQhP9snrI?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="video-padding">
        <div className="video-container">
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/xPAtSDn4BAE?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Section>
    <Section color="white">
      <SenderForm />
    </Section>
  </Layout>
)

export default IndexPage
