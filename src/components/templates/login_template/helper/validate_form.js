function validateForm(data) {
  const { email } = data
  const regex = /\S+@\S+\.\S+/
  const errors = {}

  if (!regex.test(email)) {
    errors.email = 'El email que ingresaste no es valido'
    return errors
  }
}

export default validateForm
