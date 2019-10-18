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
    <div>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <div className="logo-container">
          <Image
            data={useStaticQuery(graphql`
              query {
                placeholderImage: file(relativePath: { eq: "logo.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                    }
                  }
                }
              }
            `)}
            className="logo"
            alt="Bad Possum"
          />
        </div>
      </Link>
      {/* <nav className="nav">
        <ul className="nav-list">
          <li>Música</li>
          <li>Conciertos</li>
          <li>Media</li>
          <li>Bio</li>
          <li>Prensa</li>
          <li>Blog</li>
          <li>Contacto</li>
        </ul>
      </nav> */}
    </div>
  </header>
)

export default Header
