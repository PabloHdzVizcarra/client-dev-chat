import useForm from '../../../hooks/useForm/useForm'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import FormRegister from '../../organisms/FormRegister/FormRegister'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
`

const RegisterTemplate = ({submitForm}) => {
  const initialValues = {
    username: ''
  }
  const {
    values,
    handleChange,
    handleSubmit
  } = useForm({
    initialValues,
    onSubmit: submitForm
  })
  return (
    <Container>
      <HeaderH1 text={`Registro de Usuarios`} />
      <FormRegister
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

export default RegisterTemplate