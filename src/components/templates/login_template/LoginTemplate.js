import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

function LoginTemplate({ onSubmit, errorMessage }) {
  const { values, errors, handleChange, handleSubmit, showError } = useFormV2(
    { email: '', password: '' },
    onSubmit,
    validateForm,
  )
  return (
    <>
      <IconAndHeader />
      {errorMessage ? <AlertError message={errorMessage} /> : null}

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

LoginTemplate.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
}

export default LoginTemplate
