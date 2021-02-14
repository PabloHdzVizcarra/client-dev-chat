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

  test('should return and object wit password and email properties, when not sending the correct parameters', () => {
    const result = validateForm({})
    expect(result).toHaveProperty('password')
    expect(result).toHaveProperty('email')

    const result2 = validateForm({ email: 'data', password: '123' })
    expect(result2).toHaveProperty('password')
    expect(result2).toHaveProperty('email')
  })

  test('must return void when all data are correct', () => {
    const result = validateForm({
      email: 'data@example.com',
      password: 'admin123',
    })
    expect(result).toBeFalsy()
  })
})
