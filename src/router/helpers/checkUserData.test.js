import checkUserData from './checkUserData'

describe('test in checkUserData function', () => {
  test('must return true when all the properties of the object have some value', () => {
    const dataUser = {
      username: 'john',
      room: 'devs',
      colorUser: '#ffffff',
    }
    const result = checkUserData(dataUser)
    expect(result).toBeTruthy()
  })

  test('must return false when a property does not have any value', () => {
    const dataUser = {
      username: '',
      room: 'devs',
      colorUser: '#ffffff',
    }
    const result = checkUserData(dataUser)
    expect(result).toBeFalsy()

    const dataUser2 = {
      username: 'john',
      room: '',
      colorUser: '#ffffff',
    }
    const result2 = checkUserData(dataUser2)
    expect(result2).toBeFalsy()

    const dataUser3 = {
      username: 'john',
      room: 'developers',
      colorUser: '',
    }
    const result3 = checkUserData(dataUser3)
    expect(result3).toBeFalsy()
  })
})
