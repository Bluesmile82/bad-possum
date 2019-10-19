import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../image"
import "./header.scss"

const Header = ({ hero }) => (
  <header className="c-header">
    <div>
      <Link to="/">
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
      <div className="menu-container">
        <nav className="nav">
          <ul className="nav-list">
            <Link to="/">
              <li>Home</li>
            </Link>
            {/* <li>Música</li>
            <li>Conciertos</li>
            <li>Media</li>
            <li>Bio</li>
            <li>Prensa</li> */}
            {/* <Link to="/blog">
              <li>Blog</li>
            </Link> */}
            <Link to="/contact">
              <li>Contacto</li>
            </Link>
          </ul>
        </nav>
        {hero}
      </div>
    </div>
  </header>
)

export default Header
