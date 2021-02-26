import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import { AiOutlineMessage } from 'react-icons/ai'
import UserInfo from '../../molecules/user-info/UserInfo'
import UserList from '../../molecules/user-list/UserList'

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 40% 50%;
  padding: 30px;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const UsersArea = ({ usersConnected, user }) => {
  if (Object.keys(user).length === 0 || !user) {
    return <p>Loading...</p>
  }
  const { color, name, room } = user
  return (
    <div>
      <Container>
        <FlexContainer>
          <AiOutlineMessage
            style={{
              fontSize: '3rem',
              color: '#41C7C7',
            }}
          />
          <HeaderH1
            text={room}
            styles={{
              textAlign: 'center',
              margin: '0 0 0 10px',
            }}
          />
        </FlexContainer>

        <UserInfo username={name || ''} userColor={color} />

        <UserList users={usersConnected} userColor={color} />
      </Container>
    </div>
  )
}

UsersArea.propTypes = {
  usersConnected: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
}

export default UsersArea
