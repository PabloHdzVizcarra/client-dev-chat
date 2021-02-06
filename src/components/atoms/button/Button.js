import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementButton = styled.button`
  background-color: ${(props) => props.backgroundColor || 'none'};
  border: none;
  color: ${(props) => props.color || '#000000'};
  width: ${(props) => props.width || 'max-content'};
  margin: ${(props) => props.margin || '0'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || 'auto'};
  border-radius: 6px;
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  cursor: pointer;
`

const Button = ({ textButton, handleClick, buttonStyles }) => {
  return (
    <ElementButton onClick={handleClick} {...buttonStyles}>
      {textButton}
    </ElementButton>
  )
}

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  buttonStyles: PropTypes.object,
}

export default Button
