import React from 'react'
import RegisterTemplate from '../../components/templates/register-template/RegisterTemplate'

function Register() {
  async function handleSubmit(data) {
    const { username, password, email, colorUser } = data

    const result = await fetch('http://localhost:3100/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
        color: colorUser,
      }),
    })

    console.log(await result.json())
  }
  return <RegisterTemplate submitForm={handleSubmit} />
}

export default Register
