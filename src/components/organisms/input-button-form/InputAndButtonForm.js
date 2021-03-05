import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Input from '../../atoms/input/Input'
import { FiChevronRight } from 'react-icons/fi'
import IconAndButton from '../../molecules/icon-and-button/IconAndButton'
import { device } from '../../../utils/size'

const Form = styled.form`
  display: flex;
  padding: 15px;
  background-color: #fff;
  border-radius: 4px;
  align-items: center;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    padding: 20px;
    width: 90%;
    margin: auto;
  }
`

const InputAndButtonForm = ({ handleChange, valueInput, handleSubmit }) => {
  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <FiChevronRight
        style={{
          fontSize: '2rem',
          color: '#cccccc',
        }}
      />
      <Input
        handleChange={(event) => handleChange(event.target.value)}
        type='text'
        styles={{
          width: '100%',
          margin: '0 10px 0 0',
          padding: '0 5px',
          border: '2px solid #ededed',
          height: '30px',
        }}
        name='message'
        value={valueInput}
        placeholder='message'
      />

      <IconAndButton />
    </Form>
  )
}

InputAndButtonForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  valueInput: PropTypes.string.isRequired,
}

export default InputAndButtonForm
