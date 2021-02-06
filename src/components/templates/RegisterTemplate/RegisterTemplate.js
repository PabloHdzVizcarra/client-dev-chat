import React from 'react'
import PropTypes from 'prop-types'
import useForm from '../../../hooks/useForm/useForm'
import FormRegister from '../../organisms/FormRegister/FormRegister'
import styled from 'styled-components'
import AlertError from '../../atoms/alert_error/AlertError'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import Disappear from '../../atoms/disappear/Disappear'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const RegisterTemplate = ({ submitForm }) => {
  const [entered, setEntered] = React.useState(false)
  const initialValues = {
    username: '',
    room: '',
  }
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: submitForm,
  })

  React.useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setEntered(true)
    }
  }, [errors])

  return (
    <Container>
      <IconAndHeader />
      <Disappear in={entered} valueOf={true}>
        <AlertError message={errors.username || errors.room} />
      </Disappear>
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
