import React from 'react'
import LoginTemplate from '../../components/templates/login_template/LoginTemplate'

const Login = () => {
  async function onSubmit({ email, password }) {
    const response = await fetch('http://localhost:3100/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    console.log(await response.json())
  }
  return <LoginTemplate onSubmit={onSubmit} />
}

export default Login
