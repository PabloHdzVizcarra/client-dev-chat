import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementButton = styled.button`
  background-color: ${(props) => props.backgroundColor || '#dedede'};
  border: none;
  color: ${(props) => props.color || '#000000'};
  width: 10%;
  margin: 0 2px;
  height: 100%;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.HBColor || '#fff'};
  }
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
