import useForm from '../../../hooks/useForm/useForm'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import FormRegister from '../../organisms/FormRegister/FormRegister'
import styled from 'styled-components'
import AlertError from '../../atoms/alert_error/AlertError'

const Container = styled.div`
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
`

const RegisterTemplate = ({ submitForm }) => {
  const initialValues = {
    username: '',
    room: ''
  }
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm({
    initialValues,
    onSubmit: submitForm
  })

  return (
    <Container>
      <HeaderH1 text={`Registro de Usuarios`}/>
      {Object.keys(errors).length !== 0
        ? <AlertError message={errors.username}/>
        : null
      }
      <FormRegister
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

export default RegisterTemplate