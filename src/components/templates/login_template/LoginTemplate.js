import React from 'react'
import styled from 'styled-components'
import LoginForm from '../../organisms/login-form/LoginForm'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
`

function LoginTemplate() {
  return (
    <>
      <IconAndHeader />
      <Container>
        <LoginForm />
      </Container>
    </>
  )
}

export default LoginTemplate
