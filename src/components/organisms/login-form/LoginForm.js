import React from 'react'
import styled from 'styled-components'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import Label from '../../atoms/label/Label'
import Input from '../../atoms/input/Input'
import Button from '../../atoms/button/Button'
import { Link } from 'react-router-dom'

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 50%;
  padding: 20px;
  border: 2px solid #181818;
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

  &:hover {
    font-weight: bold;
  }
`

function LoginForm() {
  return (
    <FormLogin>
      <HeaderH1
        text='Inicia Sesion'
        styles={{
          textAlign: 'center',
          color: '#181818',
          fontWeight: 'bold',
          fontSize: '2.2rem',
        }}
      />
      <FlexContainer>
        <Label
          text='username'
          styles={{
            margin: '0 0 5px 0',
          }}
        />
        <Input
          handleChange={() => {}}
          type='text'
          styles={{
            width: '100%',
            border: '2px solid #181818',
            height: '25px',
          }}
          name='username'
          value=''
        />
      </FlexContainer>

      <FlexContainer>
        <Label
          text='password'
          styles={{
            margin: '0 0 5px 0',
          }}
        />
        <Input
          handleChange={() => {}}
          type='password'
          styles={{
            width: '100%',
            border: '2px solid #181818',
            height: '25px',
          }}
          name='password'
          value=''
        />
      </FlexContainer>
      <FlexContainer>
        <Button
          textButton='Login'
          styles={{
            backgroundColor: '#FCDC04',
            color: '#181818',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            borderRadius: '4px',
            padding: '4px',
            hoverBColor: '#f0d005',
          }}
        />
      </FlexContainer>
      <FlexContainer>
        <LinkStyled to='/register'>No tienes cuenta?</LinkStyled>
      </FlexContainer>
    </FormLogin>
  )
}

export default LoginForm
