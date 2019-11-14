import React from "react"
import Layout from "../components/layout"
import allTogether from "../images/alltogether.jpg"
import "./index.scss"

import { ParallaxBanner } from "react-scroll-parallax"
import Section from "../components/section/section"

const ThanksPage = () => (
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
      <div className="container min-height">
        <div className="grunge little">¡Gracias por comprar el disco!</div>
        <p>
          Pronto te llegará un email con la descarga. Si quieres el email en
          formato físico comunícanoslo a {' '}
          <a href="mailto:badpossumband@gmail.com?subject=Quiero un CD">
            badpossumband@gmail.com
          </a>
        </p>
      </div>
    </Section>
  </Layout>
)

export default ThanksPage
