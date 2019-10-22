import React from 'react';
import { graphql, StaticQuery } from "gatsby"
import "./concerts.scss"

const Concerts = data => (
  <div className="c-concerts">
    <StaticQuery
      query={graphql`
        query ConcertsQuery {
          allConcertsJson {
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
      `}
      render={data => (
        <div className="container">
          <ul>
            <h3 className="grunge white-color center">Próximos conciertos</h3>
            {data.allConcertsJson.edges.filter(i => i.node.upcoming).map(item => (
              <li className="center" key={item.node.date}>
                <span className="grunge little white-color">
                  {item.node.date}
                </span>{" "}
                <a
                  href={item.node.link}
                  target="_blank"
                  className="grunge little"
                >
                  {item.node.place}
                </a>
                <span className="grunge little"> - {item.node.city}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  </div>
)

export default Concerts;