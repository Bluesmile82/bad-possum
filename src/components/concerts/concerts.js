import React from 'react';
import { graphql, StaticQuery } from "gatsby"
import moment from "moment-with-locales-es6"
import "./concerts.scss"

const query = graphql`
  query ConcertsQuery {
    allConcertsJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          date
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
              .filter(i => moment() < new moment(i.node.date))
              .reverse()
              .map(item => (
                <li className="center" key={item.node.date}>
                  <span className="grunge little white-color">
                    {moment(item.node.date)
                      .locale("es")
                      .format("LL")}
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
                .filter(i => moment() > new moment(i.node.date))
                .map(item => (
                  <li className="center" key={item.node.date}>
                    <span className="grunge little white-color">
                      {moment(item.node.date)
                        .locale("es")
                        .format("LL")}
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