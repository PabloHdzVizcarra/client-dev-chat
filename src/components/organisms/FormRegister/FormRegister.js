import React from 'react'
import styled from 'styled-components'
import Input from '../../atoms/input/Input'
import Label from '../../atoms/label/Label'
import Button from '../../atoms/button/Button'
import PropTypes from 'prop-types'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'

const Form = styled.form`
  padding: 16px;
  margin: 10% 0;
  width: 40%;
  height: 50%;
  border-radius: 8px;
  align-self: center;
  justify-self: center;
`

const Container = styled.div`
  display: grid;
  height: 100%;
  gap: 5px;
  grid-auto-rows: min-content;
`

const FormRegister = ({ values, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <HeaderH1
          text={'Registro de usuarios'}
          styles={{
            textAlign: 'center',
            fontFamily: 'Arvo',
            margin: '0 0 30px 0',
          }}
        />
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
            backgroundColor: 'rgb(65,199,199)',
            height: '40px',
            color: '#ffffff',
            fontWeight: 'bold',
            width: '100%',
            margin: '10px 0 0 0',
            HBColor: 'rgb(62,189,189)',
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
