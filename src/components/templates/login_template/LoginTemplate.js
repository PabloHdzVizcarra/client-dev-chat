import React from 'react'
import styled from 'styled-components'
import LoginForm from '../../organisms/login-form/LoginForm'

const Container = styled.div`
  display: flex;
`

function LoginTemplate() {
  return (
    <Container>
      <LoginForm />
    </Container>
  )
}

export default LoginTemplate
