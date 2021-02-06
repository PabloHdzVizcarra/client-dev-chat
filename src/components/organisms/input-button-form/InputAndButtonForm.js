import React from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types'
import Input from '../../atoms/input/Input'
import { FiChevronRight } from 'react-icons/fi'
import IconAndButton from '../../molecules/icon-and-button/IconAndButton'

const Form = styled.form`
  display: flex;
  padding: 17px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
`

const InputAndButtonForm = () => {
  return (
    <Form>
      <FiChevronRight
        style={{
          fontSize: '2rem',
          color: '#cccccc',
        }}
      />
      <Input
        handleChange={() => {}}
        type='text'
        styles={{
          width: '100%',
          margin: '0 10px 0 0',
          padding: '0 5px',
          border: '2px solid #ededed',
          height: '90%',
        }}
        name='message'
        value=''
        placeholder='message'
      />

      <IconAndButton />
    </Form>
  )
}

//InputAndButtonForm.propTypes = {}

export default InputAndButtonForm
