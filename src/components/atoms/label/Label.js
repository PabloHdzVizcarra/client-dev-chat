import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementLabel = styled.label`
  color: darkcyan;
  margin: 10px 0 0 0;
`

const Label = ({ text }) => {
  return <ElementLabel>{text}</ElementLabel>
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Label
