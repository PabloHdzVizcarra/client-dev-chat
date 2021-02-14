import validateForm from './validate_form'

describe('test in validateForm function', () => {
  test('should return an object with email property, when a valid email is not passed', () => {
    const result = validateForm({ email: '' })
    expect(result).toHaveProperty('email')
  })
})
