import React from 'react';
import { graphql, StaticQuery } from "gatsby"
import "./concerts.scss"

const query = graphql`
  query ConcertsQuery {
    allConcertsJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          date(formatString: "DD MMMM YY", locale: "es-ES")
          place
          link
          city
          upcoming
        }
      }
    }
  }
`

const Concerts = ({ all }) => (
  <div className="c-concerts">
    <StaticQuery
      query={query}
      render={data => (
        <div className="container">
          <ul>
            <h3 className="grunge white-color center">Próximos conciertos</h3>
            {data.allConcertsJson.edges
              .filter(i => i.node.upcoming)
              .map(item => (
                <li className="center" key={item.node.date}>
                  <span className="grunge little white-color">
                    {item.node.date}
                  </span>{" "}
                  <a
                    href={item.node.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grunge little"
                  >
                    {item.node.place}
                  </a>
                  <span className="grunge little"> - {item.node.city}</span>
                </li>
              ))}
          </ul>
          {all && (
            <ul className="past-concerts">
              <h3 className="grunge white-color center">
                Anteriores conciertos
              </h3>
              {data.allConcertsJson.edges
                .filter(i => !i.node.upcoming)
                .map(item => (
                  <li className="center" key={item.node.date}>
                    <span className="grunge little white-color">
                      {item.node.date}
                    </span>{" "}
                    <a
                      href={item.node.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grunge little"
                    >
                      {item.node.place}
                    </a>
                    <span className="grunge little"> - {item.node.city}</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      )}
    />
  </div>
)

export default Concerts;