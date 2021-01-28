import RegisterTemplate from '../../components/templates/RegisterTemplate/RegisterTemplate'

const Login = ({setUsername, setRoom}) => {
  function submitForm(data) {
    const {values} = data

    if (values?.username) {
      setUsername(values.username)
      setRoom(values.room)
    }
  }
  return (
    <RegisterTemplate submitForm={submitForm} />
  )
}

export default Login