import React from "react"
import Img from "gatsby-image"

const Image = props => {
  let normalizedProps = { ...props };
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto",
      },
    }
  }
  return <Img fluid={props.data.placeholderImage.childImageSharp.fluid} {...normalizedProps} />
}

export default Image
