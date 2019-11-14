import React, { useEffect } from "react"
import Layout from "../components/layout"
import Section from "../components/section/section"
import allTogether from "../images/alltogether.jpg"
import fire from "../audios/fire.mp3"
import take from "../audios/take.mp3"
import broken from "../audios/broken.mp3"
import fix from "../audios/fix.mp3"
import rolls from "../audios/rolls.mp3"
import mybabe from "../audios/mybabe.mp3"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"
import "./index.scss"
import ReactAudioPlayer from "react-audio-player"

import { ParallaxBanner } from "react-scroll-parallax"

const renderTrack = (title, track) => (
  <div className="track">
    <div className="track-name">{title}</div>
    <div className="audioPlayer">
      <ReactAudioPlayer src={track} controls controlsList="nodownload" />
    </div>
  </div>
)

const IndexPage = () => {
  useEffect(
    () => {
      const script = document.createElement("script");

      script.src =
        "https://app-cdn.simplegoods.co/assets/external/embed-485d19e15c0d820b38f2851a2490d28cacbb489e8ec728bb882843aaf50c14f0.js"
      script.async = true;

      document.body.appendChild(script);
    }, []
  );

  useEffect(
    () => {
      const pauseOnSecondPlay = (e) => {
          var audios = document.getElementsByTagName("audio")
          for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != e.target) {
              audios[i].pause()
            }
          }
        };
      document.addEventListener(
        "play",
        pauseOnSecondPlay,
        true
      )
      return () => document.removeEventListener("play", pauseOnSecondPlay)
    }, []
  );

  return (
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
          <div className="disc">
            <Image
              className="img-disco"
              data={useStaticQuery(graphql`
                query {
                  placeholderImage: file(relativePath: { eq: "baddisco.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                      }
                    }
                  }
                }
              `)}
              alt="Fire on the jukejoint album"
            />
            <div className="disc-description">
              <div className="album-title">
                Fire on the jukejoint
              </div>
              <div className="grunge little">
                <div className="tracks">
                  {renderTrack("01 - Fire on the jukejoint (Bad Possum)", fire)}
                  {renderTrack(
                    "02 - Take it back to the bridge (Asie Payton)",
                    take
                  )}
                  {renderTrack("03 - Broken down (Bad Possum)", broken)}
                  {renderTrack("04 - My babe (Willie Dixon)", mybabe)}
                  {renderTrack("05 - When she rolls (Bad Possum)", rolls)}
                  {renderTrack("06 - Fix the fucking world (Bad Possum)", fix)}
                </div>
              </div>
              <p>El disco está a la venta en formato digital.</p>
              <p>
                En caso de querer el CD físico primero compra el disco en
                digital y sigue las instrucciones que se detallan.
              </p>
              <a
                href="https://app.simplegoods.co/i/DQDWHFUW"
                className="simple-goods-btn"
              >
                COMPRAR
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
};

export default IndexPage
