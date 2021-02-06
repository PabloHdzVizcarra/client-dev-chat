import React from 'react'
//import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../../atoms/input/Input'
import Button from '../../atoms/button/Button'
import { FiChevronRight } from 'react-icons/fi'

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
      <Button
        textButton='Enviar'
        buttonStyles={{
          width: 'max-content',
          color: '#ffffff',
          fontWeight: 'bold',
          backgroundColor: '#41C7C7',
          padding: '0 10px',
          height: '100%',
        }}
      />
    </Form>
  )
}

//InputAndButtonForm.propTypes = {}

export default InputAndButtonForm
