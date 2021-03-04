import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import InfoUser from './InfoUser'
import styled from 'styled-components'

UserListMobile.propTypes = {
  listOfConnectedUsers: PropTypes.array.isRequired,
}

const ContainerUserListMobile = styled.div`
  display: flex;
  flex-direction: column;
`

function UserListMobile({ listOfConnectedUsers }) {
  return (
    <ContainerUserListMobile>
      {listOfConnectedUsers.map((user) => (
        <InfoUser key={uuidv4()} userName={user.name} status={user.status} />
      ))}
    </ContainerUserListMobile>
  )
}

export default UserListMobile
