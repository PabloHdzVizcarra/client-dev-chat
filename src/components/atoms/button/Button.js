import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementButton = styled.button`
  padding: 5px;
`

const Button = ({ textButton }) => {
  return <ElementButton type='submit'>{textButton}</ElementButton>
}

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
}

export default Button
