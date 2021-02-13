import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementButton = styled.button`
  background-color: ${(props) => props.backgroundColor || 'none'};
  border: none;
  color: ${(props) => props.color || '#000000'};
  width: ${(props) => props.width || 'auto'};
  margin: ${(props) => props.margin || '0'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0'};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  cursor: pointer;

  transition: 300ms ease background-color;

  &:hover {
    background-color: ${(props) => props.hoverBColor || 'none'};
  }
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
