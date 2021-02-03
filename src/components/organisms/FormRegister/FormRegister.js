import React from 'react'
import styled from 'styled-components'
import Input from '../../atoms/input/Input'
import Label from '../../atoms/label/Label'
import Button from '../../atoms/button/Button'
import PropTypes from 'prop-types'

const Form = styled.form`
  padding: 10px;
  background-color: aliceblue;
  margin-top: 1rem;
  width: 60%;
`

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;
`

const FormRegister = ({ values, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Label text={`Username`} />
        <Input
          name='username'
          type='text'
          value={values.username}
          handleChange={handleChange}
          styles={{
            height: '25px',
            inputColor: '#212121',
          }}
        />
        <Label text='Nombre de la sala de chat' />

        <Input
          name='room'
          type='text'
          value={values.room}
          handleChange={handleChange}
          styles={{
            height: '25px',
          }}
        />
        <Button textButton='Registrar' />
      </Container>
    </Form>
  )
}

FormRegister.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
}

export default FormRegister
