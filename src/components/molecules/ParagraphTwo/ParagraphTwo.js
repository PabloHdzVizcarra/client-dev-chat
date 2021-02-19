import React from 'react'
import PropTypes from 'prop-types'

ParagraphTwo.propTypes = {
  show: PropTypes.bool.isRequired,
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string.isRequired,
}

function ParagraphTwo({ show, textOne, textTwo }) {
  return <>{!show ? <p>{textOne}</p> : <p>{textTwo}</p>}</>
}

export default ParagraphTwo
