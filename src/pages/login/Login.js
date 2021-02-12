import React from 'react'
import PropTypes from 'prop-types'
import RegisterTemplate from '../../components/templates/register-template/RegisterTemplate'

const Login = ({ setUserData }) => {
  //TODO: Form Validate
  function submitForm(data) {
    const { values } = data
    console.log(values)

    if (values?.username) {
      setUserData(values)
    }
  }
  return <RegisterTemplate submitForm={submitForm} />
}

Login.propTypes = {
  setUserData: PropTypes.func.isRequired,
}

export default Login
