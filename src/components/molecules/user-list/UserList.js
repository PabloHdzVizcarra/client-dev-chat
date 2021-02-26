import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import shortName from '../../templates/home_template/helpers/shortName'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: #e4eaf7;
  border-radius: 4px;
  padding: 15px 0 0 0;
  height: 100%;
`

const User = styled.div`
  display: flex;
  padding: 0 20px 0 20px;
  align-items: center;
  height: min-content;
  margin-bottom: 10px;
`

function UserList({ users }) {
  return (
    <Container>
      {users.map((user) => (
        <User key={uuidv4()}>
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
    </Container>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  userColor: PropTypes.string.isRequired,
}

export default UserList
