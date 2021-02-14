import validateForm from './validate_form'

describe('test in validateForm function', () => {
  test('should return an object with email property, when a valid email is not passed', () => {
    const result = validateForm({ email: '' })
    expect(result).toHaveProperty('email')
  })
  test('should return an object with password property, when a valid password is not passed', () => {
    const result = validateForm({ password: '' })
    expect(result).toHaveProperty('password')
  })
})
