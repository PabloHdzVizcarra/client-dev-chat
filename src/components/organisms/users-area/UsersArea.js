import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import { AiOutlineMessage } from 'react-icons/ai'
import UserInfo from '../../molecules/user-info/UserInfo'
import UserList from '../../molecules/user-list/UserList'

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 30% 60%;
  padding: 30px;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const UsersArea = ({ usersConnected, userData }) => {
  const { colorUser, username, room } = userData
  return (
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

      <UserInfo username={username} userColor={colorUser} />

      <UserList users={usersConnected} userColor={colorUser} />
    </Container>
  )
}

UsersArea.propTypes = {
  usersConnected: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
}

export default UsersArea
