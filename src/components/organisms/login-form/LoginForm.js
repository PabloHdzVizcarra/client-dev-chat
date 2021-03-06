import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import Label from '../../atoms/label/Label'
import Input from '../../atoms/input/Input'
import Button from '../../atoms/button/Button'
import { Link } from 'react-router-dom'
import { device } from '../../../utils/size'

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 5px;
  margin-top: 10%;

  @media only screen and ${device.tablet} {
    height: 40px;
  }
  @media only screen and ${device.laptop} {
    width: 60%;
    margin-top: 0;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
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

function LoginForm({ handleChange, handleSubmit, values }) {
  return (
    <FormLogin onSubmit={(event) => handleSubmit(event)}>
      <HeaderH1
        text='Inicia Sesion'
        styles={{
          textAlign: 'center',
          color: '#181818',
          fontWeight: 'bold',
          fontSize: '2rem',
        }}
      />
      <FlexContainer>
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
      </FlexContainer>

      <FlexContainer>
        <Label text={`Password`} />
        <Input
          name='password'
          type='password'
          value={values.password}
          handleChange={handleChange}
          styles={{
            height: '30px',
            color: '#212121',
            width: '100%',
            border: '1px solid rgb(0, 0, 0, 0.2)',
          }}
          testid='input-password'
        />
      </FlexContainer>
      <FlexContainer>
        <Button
          textButton='Login'
          styles={{
            backgroundColor: 'rgb(65,199,199)',
            height: '40px',
            color: '#ffffff',
            fontWeight: 'bold',
            width: '100%',
            margin: '10px 0 0 0',
            hoverBColor: 'rgb(62,189,189)',
            fontSize: '1.2rem',
          }}
        />
      </FlexContainer>
      <FlexContainer>
        <LinkStyled to='/register'>No tienes cuenta?</LinkStyled>
      </FlexContainer>
    </FormLogin>
  )
}

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
}

export default LoginForm
