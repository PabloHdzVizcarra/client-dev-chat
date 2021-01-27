import Form from './home/styles'

const Login = () => {
  return (
    <div>
      <p>Crea un usuario</p>
      <Form>
        <label htmlFor="">
          Username
        </label>
        <input type="text"/>
        <button type="submit" > comenzar </button>
      </Form>
    </div>

  )
}

export default Login