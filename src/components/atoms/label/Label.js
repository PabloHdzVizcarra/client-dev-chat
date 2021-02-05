import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementLabel = styled.label`
  color: #000411;
  margin: 10px 0 0 0;
  font-size: 1.2rem;
  font-weight: normal;
`

const Label = ({ text }) => {
  return <ElementLabel>{text}</ElementLabel>
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Label
