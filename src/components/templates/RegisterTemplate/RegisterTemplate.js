import React from 'react'
import PropTypes from 'prop-types'
import useForm from '../../../hooks/useForm/useForm'
import FormRegister from '../../organisms/FormRegister/FormRegister'
import styled from 'styled-components'
import AlertError from '../../atoms/alert_error/AlertError'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const RegisterTemplate = ({ submitForm }) => {
  const initialValues = {
    username: '',
    room: '',
  }
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: submitForm,
  })

  return (
    <Container>
      <IconAndHeader />
      {Object.keys(errors).length !== 0 ? (
        <AlertError message={errors.username || errors.room} />
      ) : null}
      <FormRegister
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

RegisterTemplate.propTypes = {
  submitForm: PropTypes.func.isRequired,
}

export default RegisterTemplate
