import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementLabel = styled.label`
  color: ${(props) => props.color || '#000411'};
  margin: 10px 0 0 0;
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: normal;
`

const Label = ({ text, styles }) => {
  return <ElementLabel {...styles}>{text}</ElementLabel>
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

export default Label
