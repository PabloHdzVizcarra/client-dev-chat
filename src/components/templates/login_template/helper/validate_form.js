function validateForm({ email }) {
  const regex = /\S+@\S+\.\S+/
  const errors = {}

  if (!regex.test(email)) {
    errors.email = 'El email que ingresaste no es valido'
  }

  if (Object.keys(errors).length !== 0) return errors
}

export default validateForm
