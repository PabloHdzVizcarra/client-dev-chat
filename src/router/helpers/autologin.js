async function autologin(token) {
  if (!token) return

  const response = await fetch('/api/user/auth')
  const data_user = await response.json()
  if (response.status !== 200) return
  return data_user
}

export default autologin
