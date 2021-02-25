import React from 'react'
import PropTypes from 'prop-types'
import LoginTemplate from '../../components/templates/login_template/LoginTemplate'

const Login = ({ setToken, setDataUser }) => {
  function onSubmit({ email, password }) {
    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((result) => result.json())
      .then(({ document, message, token }) => {
        if (!message || !document || !token) return
        setToken(token)
        setDataUser(document)
      })
      .catch(console.log)
  }
  return <LoginTemplate onSubmit={onSubmit} />
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setDataUser: PropTypes.func.isRequired,
}

export default Login
