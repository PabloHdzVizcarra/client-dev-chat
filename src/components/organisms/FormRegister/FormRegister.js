import React from 'react'
import styled from 'styled-components'
import Input from '../../atoms/input/Input'
import Label from '../../atoms/label/Label'
import Button from '../../atoms/button/Button'
import PropTypes from 'prop-types'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'

const Form = styled.form`
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 1rem 0 0 2rem;
  width: 40%;
  height: 50%;
  border-radius: 8px;
`

const Container = styled.div`
  display: grid;
  gap: 10px;
  height: 100%;
  grid-auto-rows: 1fr;
`

const FormRegister = ({ values, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <HeaderH1 text={'Registro de usuarios'} />
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
        <Button
          textButton='Registrar'
          buttonStyles={{
            backgroundColor: '#EFCB68',
            height: '45px',
          }}
        />
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
