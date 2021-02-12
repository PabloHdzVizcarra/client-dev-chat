import React from 'react'
import RegisterTemplate from '../../components/templates/register-template/RegisterTemplate'

function Register() {
  function handleSubmit(data) {
    console.log(data)
  }
  return <RegisterTemplate submitForm={handleSubmit} />
}

export default Register
