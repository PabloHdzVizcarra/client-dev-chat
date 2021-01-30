import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementInput = styled.input`
  height: 1rem;
  color: ${(props) => props.inputColor || 'black'};
  font-size: ${(props) => props.inputFontSize || '1rem'};
  padding: 5px;
  border-radius: 6px;
  border: none;
  background-color: antiquewhite;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px red;
  }
`

const Input = ({
  type,
  name,
  value,
  inputColor,
  inputFontSize,
  handleChange,
}) => {
  return (
    <ElementInput
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      inputColor={inputColor}
      inputFontSize={inputFontSize}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputColor: PropTypes.string,
  inputFontSize: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

export default Input
