import Form from './home/styles'
import useForm from '../hooks/useForm/useForm'

const Login = () => {
  const initialValues = {
    username: ''
  }
  const {
    values,
    handleChange,
    handleSubmit
  } = useForm({
    initialValues,
    onSubmit: values => console.log(values)
  })

  return (
    <div>
      <p>Crea un usuario</p>
      <Form onSubmit={handleSubmit} >
        <label htmlFor="">
          Username
        </label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={values.name}
        />
        <button type="submit"> comenzar</button>
      </Form>
    </div>

  )
}

export default Login