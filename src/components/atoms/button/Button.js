import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementButton = styled.button`
  padding: 5px;
`

const Button = ({ textButton, handleClick, styles }) => {
  return (
    <ElementButton onClick={handleClick} {...styles}>
      {textButton}
    </ElementButton>
  )
}

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  styles: PropTypes.object,
}

export default Button
