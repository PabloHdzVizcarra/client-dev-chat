import React from 'react'
import { useHistory } from 'react-router-dom'
import RegisterTemplate from '../../components/templates/register-template/RegisterTemplate'

function Register() {
  let history = useHistory()
  async function handleSubmit(data) {
    const { username, password, email, colorUser } = data

    const response = await fetch('/api/user', {
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
    if (response.status === 400) {
      return
    }
    history.push('/login')
  }
  return <RegisterTemplate submitForm={handleSubmit} />
}

export default Register
