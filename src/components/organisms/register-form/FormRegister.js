import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TwitterPicker } from 'react-color'
import Input from '../../atoms/input/Input'
import Label from '../../atoms/label/Label'
import Button from '../../atoms/button/Button'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import { Link } from 'react-router-dom'

const Form = styled.form`
  padding: 16px;
  width: 30%;
  border-radius: 8px;
  height: 50%;
  align-self: center;
  justify-self: center;
`

const Container = styled.div`
  display: grid;
  height: 100%;
  gap: 2px;
  grid-auto-rows: min-content;
`

const ColorPickerContainer = styled.div`
  display: flex;
`
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #181818;
  font-weight: normal;
  text-align: end;

  &:hover {
    font-weight: bold;
  }
`

const FormRegister = ({
  values,
  handleChange,
  handleSubmit,
  handleChangeOneValue,
}) => {
  const [color, setColor] = React.useState('#41C7C7')

  function handleChangeComplete(color) {
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
            margin: '0 0 30px 0',
            fontSize: '2rem',
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
        <Label text={`Email`} />
        <Input
          name='email'
          type='email'
          value={values.email}
          handleChange={handleChange}
          styles={{
            height: '30px',
            color: '#212121',
            width: '100%',
            border: '1px solid rgb(0, 0, 0, 0.2)',
          }}
        />
        <Label text='Password' />

        <Input
          name='password'
          type='password'
          value={values.password}
          handleChange={handleChange}
          styles={{
            color: '#212121',
            height: '30px',
            width: '100%',
            border: '1px solid rgb(0, 0, 0, 0.2)',
          }}
        />
        <Label text='Confirma tu password' />

        <Input
          name='password2'
          type='password'
          value={values.password2}
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
        <Paragraph
          text='tienes que escoger un color de usuario, no te preocupes podrás cambiarlo una vez creada tu cuenta'
          styles={{
            color: '#555454',
            fontSize: '.7rem',
          }}
        />
        <Button
          textButton='Registrar'
          styles={{
            backgroundColor: 'rgb(65,199,199)',
            height: '40px',
            color: '#ffffff',
            fontWeight: 'bold',
            width: '100%',
            margin: '10px 0 0 0',
            hoverBColor: 'rgb(62,189,189)',
          }}
        />
        <LinkStyled to='/login'>Ya tienes una cuenta?</LinkStyled>
      </Container>
    </Form>
  )
}

FormRegister.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  handleChangeOneValue: PropTypes.func.isRequired,
}

export default FormRegister
