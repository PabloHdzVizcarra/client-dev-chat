import { useState } from 'react'

function useToken() {
  function getToken() {
    const tokenString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    if (!userToken) return
    return userToken
  }
  const [token, setToken] = useState(getToken())

  function saveToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken))
    // document.cookie = `token=${userToken}`
    setToken(userToken.token)
  }

  return {
    setToken: saveToken,
    token,
  }
}

export default useToken
