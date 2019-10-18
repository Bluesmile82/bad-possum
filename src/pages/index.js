import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section/section"
import SenderForm from "../components/sender-form/sender-form"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.scss';
import facebook from '../images/facebook.png';
import insta from '../images/insta.jpeg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
    <Section>
      <div className="videos">
        <div className="video-padding">
          <div className="video-container">
            <iframe
              title="bad possum video"
              className="video"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/CxuQhP9snrI?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              Adding
              allowfullscreen
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
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              Adding
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
    <Section color="white">
      <SenderForm />
    </Section>
    <Section color="brown">
      <div className="container">
        <p>
          <h1 className="inline">Bad Possum</h1> es un grupo con influencias que
          vienen del North Hill Mississippi Country Blues. En sus conciertos nos
          llevan a los Juke Joint del estado del Mississippi donde lo único que
          importaba era pasarlo bien, gritar, bailar y saltar. La banda formada
          en Madrid está compuesta por{" "}
          <h3 className="inline name">Elvira Sodalita</h3> a la batería,{" "}
          <h3 className="inline name">Gabi Torné</h3> a la guitarra,{" "}
          <h3 className="inline name">Víctor Barceló</h3> a la armónica y voz y{" "}
          <h3 className="inline name">Álvaro Leal </h3>a la guitarra y voz.
        </p>
        <p>
          En su repertorio se entremezclan canciones de músicos grabados por la
          discográfica Fat Possum como R.L Burnside, Junior Kimbrough, Asie
          Payton o T-Model Ford. También presentan sus propias composiciones
          claramente influidas por el género. El espectáculo derrocha energía de
          principio a fin con poco tiempo de aliento para la audiencia, que se
          verá obligada a bailar al ritmo de este blues con tendencias rock y
          punk del que bebieron otros artistas, como The Black Keys.
        </p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/BadPossum"
            target="_blank"
            title="facebook link"
          >
            <img className="social-link" src={facebook} title="facebook link" />
          </a>
          <a
            href="https://www.instagram.com/bad.possum/"
            target="_blank"
            title="instagram link"
          >
            <img className="social-link" src={insta} title="instagram link" />
          </a>
        </div>
      </div>
    </Section>
    <Section color="red">
      <div className="container contact">
        <form action="https://formspree.io/xjnqzvbx" method="POST">
          <h2>Contacta con nosotros</h2>
          <label>
            <input
              className="input"
              type="text"
              name="_replyto"
              placeholder="Tu email"
            />
          </label>
          <label>
            <textarea
              className="input"
              name="message"
              placeholder="Tu mensaje"
            ></textarea>
          </label>
          <button className="button white" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
