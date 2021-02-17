async function autologin(token) {
  if (!token) return

  const response = await fetch('/api/user/auth')
  console.log(response)
}

export default autologin
