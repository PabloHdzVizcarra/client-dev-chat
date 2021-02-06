import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  background-color: #ededed;
  border-radius: 10px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function UserInfo({ username }) {
  function shortName(name) {
    return name.slice(0, 2)
  }
  return (
    <Container>
      <h2
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '100%',
          textTransform: 'capitalize',
        }}
      >
        {shortName(username)}
      </h2>
      <p>{username}</p>
    </Container>
  )
}

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
}

export default UserInfo
