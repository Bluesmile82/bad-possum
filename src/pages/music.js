import React from "react"
import Layout from "../components/layout"
import Section from "../components/section/section"
import Checkout from "../components/checkout/checkout"
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
        <span className="grunge little">
          Fire on the jukejoint es el primer disco de Bad Possum
        </span>
        <Checkout />
      </div>
    </Section>
  </Layout>
)

export default IndexPage
