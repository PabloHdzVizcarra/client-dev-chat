import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ElementInput = styled.input`
  color: ${(props) => props.inputColor || 'black'};
  font-size: ${(props) => props.inputFontSize || '1rem'};
  height: ${(props) => props.height || 'auto'};
  padding: 5px;
  border-radius: 6px;
  border: none;
  background-color: #ededed;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px cornflowerblue;
  }
`

const Input = ({ type, name, value, handleChange, styles }) => {
  return (
    <ElementInput
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      {...styles}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
}

export default Input
