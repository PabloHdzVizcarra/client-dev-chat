import React from 'react'
import styled from 'styled-components'
import LoginForm from '../../organisms/login-form/LoginForm'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import useFormV2 from '../../../hooks/useForm/useFormv2'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
`

function LoginTemplate() {
  const { values, errors, handleChange, handleSubmit } = useFormV2(
    { email: '', password: '' },
    (values) => console.log(values),
    (values) => ({ errors: values }),
  )
  console.log(errors)
  return (
    <>
      <IconAndHeader />
      <Container>
        <LoginForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
        />
      </Container>
    </>
  )
}

export default LoginTemplate
