import React from 'react'
import LoginTemplate from '../../components/templates/login_template/LoginTemplate'

const Login = () => {
  function onSubmit(data) {
    console.log(data)
  }
  return <LoginTemplate onSubmit={onSubmit} />
}

export default Login
