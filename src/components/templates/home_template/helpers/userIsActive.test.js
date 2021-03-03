import { userIsActive } from './userIsActive'

describe('test in userIsActive function', () => {
  test('should return false the user to have status false', () => {
    const userList = [
      {
        color: '#ffffff',
        email: 'example@email.com',
        name: 'yara',
        status: true,
      },
      {
        color: '#ffffff',
        email: 'example@email.com',
        name: 'arthur',
        status: false,
      },
      {
        color: '#ffffff',
        email: 'example@email.com',
        name: 'antony',
        status: false,
      },
    ]

    const username = 'arthur'
    const result = userIsActive(userList, username)
    expect(result).toBe(false)
  })
})
