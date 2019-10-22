import React from "react"
import Layout from "../components/layout"
import Section from "../components/section/section"
import Concerts from "../components/concerts/concerts"
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
    <Section color="red">
      <Concerts all />
    </Section>
  </Layout>
)

export default IndexPage
