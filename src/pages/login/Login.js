import React from 'react'
import PropTypes from 'prop-types'
import RegisterTemplate from '../../components/templates/RegisterTemplate/RegisterTemplate'

const Login = ({ setUsername, setRoom }) => {
  function submitForm(data) {
    const { values } = data

    if (values?.username) {
      setUsername(values.username)
      setRoom(values.room)
    }
  }
  return <RegisterTemplate submitForm={submitForm} />
}

Login.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setRoom: PropTypes.func.isRequired,
}

export default Login
