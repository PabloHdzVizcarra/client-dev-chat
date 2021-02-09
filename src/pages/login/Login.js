import React from 'react'
import PropTypes from 'prop-types'
import RegisterTemplate from '../../components/templates/RegisterTemplate/RegisterTemplate'

const Login = ({ setUsername, setRoom, setColorUser, setUserData }) => {
  //TODO: Form Validate
  function submitForm(data) {
    const { values } = data
    console.log(values)

    if (values?.username) {
      setUsername(values.username)
      setRoom(values.room)
      setUserData(values)
    }
  }
  return (
    <RegisterTemplate submitForm={submitForm} setColorUser={setColorUser} />
  )
}

Login.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setRoom: PropTypes.func.isRequired,
  setColorUser: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
}

export default Login
