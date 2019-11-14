import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../image"
import "./header.scss"
import facebook from "../../images/facebook.png"
import insta from "../../images/insta.jpeg"

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
            <Link to="/concerts">
              <li>Conciertos</li>
            </Link>
            <Link to="/music">
              <li>Música</li>
            </Link>
            <Link to="/contact">
              <li>Contacto</li>
            </Link>
            {/* <li>Media</li>
            <li>Bio</li>
            <li>Prensa</li> */}
            {/* <Link to="/blog">
              <li>Blog</li>
            </Link> */}
            <a
              href="https://www.facebook.com/BadPossum"
              target="_blank"
              rel="noopener noreferrer"
              title="facebook link"
              className="social-link"
            >
              <img src={facebook} title="facebook link" />
            </a>
            <a
              href="https://www.instagram.com/bad.possum/"
              target="_blank"
              rel="noopener noreferrer"
              title="instagram link"
              className="social-link"
            >
              <img src={insta} title="instagram link" />
            </a>
          </ul>
        </nav>
        {hero}
      </div>
    </div>
  </header>
)

export default Header
