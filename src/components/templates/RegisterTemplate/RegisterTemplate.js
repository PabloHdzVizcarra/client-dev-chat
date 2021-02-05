import React from 'react'
import PropTypes from 'prop-types'
import useForm from '../../../hooks/useForm/useForm'
import FormRegister from '../../organisms/FormRegister/FormRegister'
import styled from 'styled-components'
import AlertError from '../../atoms/alert_error/AlertError'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
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
      <HeaderH1
        text={'Solo Chatea'}
        styles={{
          fontFamily: 'Patrick Hand',
          fontSize: '4rem',
        }}
      />
      {Object.keys(errors).length !== 0 ? (
        <AlertError message={errors.username} />
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
