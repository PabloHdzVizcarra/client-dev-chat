import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TwitterPicker } from 'react-color'
import Input from '../../atoms/input/Input'
import Label from '../../atoms/label/Label'
import Button from '../../atoms/button/Button'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const Form = styled.form`
  padding: 16px;
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

const ColorPickerContainer = styled.div`
  display: flex;
`

const FormRegister = ({
  values,
  handleChange,
  handleSubmit,
  setColorUser,
  handleChangeOneValue,
}) => {
  const [color, setColor] = React.useState('#41C7C7')

  function handleChangeComplete(color) {
    setColorUser(color.hex)
    setColor(color)
    handleChangeOneValue(color)
  }
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
            height: '30px',
            color: '#212121',
            width: '100%',
            border: '1px solid rgb(0, 0, 0, 0.2)',
          }}
        />
        <Label text='Nombre de la sala de chat' />

        <Input
          name='room'
          type='text'
          value={values.room}
          handleChange={handleChange}
          styles={{
            color: '#212121',
            height: '30px',
            width: '100%',
            border: '1px solid rgb(0, 0, 0, 0.2)',
            margin: '0 0 20px 0',
          }}
        />
        <ColorPickerContainer>
          <TwitterPicker
            onChangeComplete={handleChangeComplete}
            color={color}
          />
          <Paragraph
            text='Escoge tu color de usuario'
            styles={{
              fontSize: '1.2rem',
            }}
          />
        </ColorPickerContainer>
        <Button
          textButton='Registrar'
          buttonStyles={{
            backgroundColor: 'rgb(65,199,199)',
            height: '40px',
            color: '#ffffff',
            fontWeight: 'bold',
            width: '100%',
            margin: '10px 0 0 0',
            hoverBColor: 'rgb(62,189,189)',
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
  setColorUser: PropTypes.func.isRequired,
  handleChangeOneValue: PropTypes.func.isRequired,
}

export default FormRegister
