import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section/section"
import Concerts from "../components/concerts/concerts"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.scss';
import allTogether from '../images/alltogether.jpg'
import { ParallaxBanner } from "react-scroll-parallax"

const IndexPage = () => (
  <Layout
    hero={
      <Image
        id="hero"
        alt="Bad Possum members"
        className="hero"
        data={useStaticQuery(graphql`
          query {
            placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
        `)}
      />
    }
  >
    <SEO title="Bad Possum" />
    <Section color="brown">
      <div className="container">
        <h1 className="grunge big action-color bad-possum-title">Bad Possum</h1>
        <div className="grunge right margin-bottom">
          es F*ckin Hill Country Blues
        </div>
        <div className="grunge little">
          En nuestros conciertos transportamos a los Juke Joint de la zona de Hill
          country en el estado de Mississippi donde lo único que importa es{" "}
          <span className="grunge action-color">
            pasarlo bien, gritar y saltar.
          </span>
        </div>
      </div>
    </Section>
    <Section color="black">
      <div className="videos">
        <div className="video-padding">
          <div className="video-container">
            <iframe
              title="bad possum video"
              className="video"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/CxuQhP9snrI?rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              adding="true"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-padding">
          <div className="video-container">
            <iframe
              title="bad possum video osi"
              className="video"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/xPAtSDn4BAE?rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              adding="true"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
    <Section color="red">
      <div className="container">
        <div className="grunge little center band-name">
          <h3 className="grunge inline black-color">Álvaro Leal </h3>{" "}
          <span>a la guitarra y voz</span>{" "}
        </div>
        <div className="grunge little center band-name">
          <span>a la armónica y voz </span>{" "}
          <h3 className="grunge inline right black-color">Víctor Barceló</h3>
        </div>
        <div className="grunge little center band-name">
          <h3 className="grunge inline black-color">Gabi Torné</h3>
          <span>a la guitarra </span>
        </div>
        <div className="grunge little center band-name">
          <span>A la batería </span>
          <h3 className="grunge inline black-color">Elvira Sodalita</h3>
        </div>
      </div>
    </Section>
    <ParallaxBanner
      layers={[
        {
          image: allTogether,
          amount: 0.2,
        },
      ]}
    />
    <Section color="brown">
      <div className="container">
        <div className="grunge little">
          En nuestro repertorio interpretamos a{" "}
          <span className="grunge little action-color">
            R.L Burnside, Junior Kimbrough, Asie Payton o T-Model Ford
          </span>{" "}
          además de nuestras propias canciones.
        </div>
        <div className="grunge center big action-color">Vas a bailar.</div>
      </div>
    </Section>
    <Section color="red">
      <Concerts />
    </Section>
  </Layout>
)

export default IndexPage
