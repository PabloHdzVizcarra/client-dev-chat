async function autologin(token) {
  if (!token) return

  const response = await fetch('http://localhost:3100/api/user/auth')
  console.log(response)
}

export default autologin
