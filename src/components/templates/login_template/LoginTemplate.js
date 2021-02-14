import React from 'react'
import styled from 'styled-components'
import LoginForm from '../../organisms/login-form/LoginForm'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import useFormV2 from '../../../hooks/useForm/useFormv2'
import Disappear from '../../atoms/disappear/Disappear'
import AlertError from '../../atoms/alert_error/AlertError'
import validateForm from './helper/validate_form'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
`

function LoginTemplate() {
  const { values, errors, handleChange, handleSubmit, showError } = useFormV2(
    { email: '', password: '' },
    (values) => console.log(values),
    () => validateForm(values),
  )
  return (
    <>
      <IconAndHeader />
      <Disappear valueOf={true} in={showError}>
        <AlertError message={errors.email || errors.password} />
      </Disappear>
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
