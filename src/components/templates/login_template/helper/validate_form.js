function validateForm({ email, password = '' }) {
  const regex = /\S+@\S+\.\S+/
  const errors = {}

  if (!regex.test(email)) {
    errors.email = 'El email que ingresaste no es valido'
  }

  if (password.length < 8) {
    errors.password = 'La password que ingresaste no es valida'
  }

  if (Object.keys(errors).length !== 0) return errors

  return false
}

export default validateForm
