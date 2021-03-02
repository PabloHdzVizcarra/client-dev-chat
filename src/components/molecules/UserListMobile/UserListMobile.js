import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

UserListMobile.propTypes = {
  listOfConnectedUsers: PropTypes.array.isRequired,
}

function UserListMobile({ listOfConnectedUsers }) {
  return (
    <div>
      {listOfConnectedUsers.map((user) => (
        <p key={uuidv4()}>{user.name}</p>
      ))}
    </div>
  )
}

export default UserListMobile
