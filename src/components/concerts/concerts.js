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
              }
            }
          }
        }
      `}
      render={data => (
        <ul>
          {data.allConcertsJson.edges.map(item =>
            <li key={item.node.date}>
              {item.node.date} {item.node.place}
            </li>
          )}
        </ul>
      )}
    />
  </div>
)

export default Concerts;