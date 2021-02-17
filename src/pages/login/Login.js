import React from 'react'
import PropTypes from 'prop-types'
import LoginTemplate from '../../components/templates/login_template/LoginTemplate'

const Login = ({ setToken, setDataUser }) => {
  async function onSubmit({ email, password }) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })

    const { message, user, token } = await response.json()

    if (!message || !user || !token) return

    setToken(token)
    setDataUser(user)
  }
  return <LoginTemplate onSubmit={onSubmit} />
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setDataUser: PropTypes.func.isRequired,
}

export default Login
