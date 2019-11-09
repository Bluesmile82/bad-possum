import React from "react"
import Layout from "../components/layout"
import Section from "../components/section/section"
import allTogether from "../images/alltogether.jpg"
import "./index.scss"

import { ParallaxBanner } from "react-scroll-parallax"

const IndexPage = () => (
  <Layout disableFooter>
    <ParallaxBanner
      layers={[
        {
          image: allTogether,
          amount: 0.2,
        },
      ]}
    />
    <Section>
      <div className="container">
        <div className="contact">
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
      </div>
    </Section>
  </Layout>
)

export default IndexPage
