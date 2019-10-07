import React from "react"
import PropTypes from "prop-types"
import "./section.scss"
import cx from "classnames"

const Section = ({ children, color }) => {
  return (
    <section className={cx("c-section", {[`color-${color}`]: color })}>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}

export default Section
