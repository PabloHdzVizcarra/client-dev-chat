export function userIsActive(userList, username) {
  let user = userList.filter((user) => user.name === username)[0]
  return user.status
}
