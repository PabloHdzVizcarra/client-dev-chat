import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;
`

const User = styled.div`
  display: flex;
  padding: 0 20px 0 20px;
  align-items: center;
  height: min-content;
  margin-bottom: 10px;
`

function UserList({ users }) {
  function shortName(name) {
    return name.slice(0, 2)
  }
  return (
    <Container>
      {users.map((user) => (
        <User key={uuidv4()}>
          <h2
            style={{
              backgroundColor: '#ededed',
              padding: '5px',
              borderRadius: '100%',
              textTransform: 'capitalize',
              margin: '0 10px 0 0',
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
}

export default UserList
