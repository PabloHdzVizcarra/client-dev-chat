import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import shortName from '../../templates/home_template/helpers/shortName'

const ContainerUserList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e4eaf7;
  margin: 10px 0;
  border-radius: 5px;
  padding-top: 20px;
  height: 95%;
`

const User = styled.div`
  display: flex;
  align-items: center;
  height: min-content;
  background-color: white;
  margin: 0 10px 10px 10px;
  border-radius: 4px;

  opacity: ${(props) => (props.connect ? 'none' : '0.5')};
`

const UsersConnected = styled.p`
  font-size: 0.8rem;
  color: #4d4d4d;
  margin: 0;
`

const UsersDisconnect = styled.p`
  font-size: 0.8rem;
  color: #4d4d4d;
  margin: 0;
`

const ContainerUserInfo = styled.div`
  padding: 10px;
`

function UserList({ users }) {
  return (
    <ContainerUserList>
      <ContainerUserInfo>
        <UsersConnected>{`usuarios ${users.length}`}</UsersConnected>
        <UsersDisconnect>{`usuarios conectados ${
          users.filter((user) => user.status === true).length
        }`}</UsersDisconnect>
      </ContainerUserInfo>
      {users.map((user) => (
        <User key={uuidv4()} connect={user.status}>
          <h2
            style={{
              backgroundColor: user.color,
              padding: '7px',
              borderRadius: '100%',
              textTransform: 'capitalize',
              margin: '0 10px 0 0',
              color: '#fff',
            }}
          >
            {shortName(user.name)}
          </h2>
          <h3
            style={{
              margin: '0',
            }}
          >
            {user.name}
          </h3>
        </User>
      ))}
    </ContainerUserList>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  userColor: PropTypes.string.isRequired,
}

export default UserList
