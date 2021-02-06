import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import { v4 as uuidv4 } from 'uuid'
import { AiOutlineMessage } from 'react-icons/ai'
import UserInfo from '../../molecules/user-info/UserInfo'

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

const UsersArea = ({ nameChatRoom, adminUserName, usersConnected }) => {
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
          text={nameChatRoom}
          styles={{
            textAlign: 'center',
            margin: '0 0 0 10px',
          }}
        />
      </FlexContainer>

      <UserInfo username={adminUserName} />

      <div>
        {usersConnected.map((user) => (
          <h3 key={uuidv4()}>{user.name}</h3>
        ))}
      </div>
    </Container>
  )
}

UsersArea.propTypes = {
  nameChatRoom: PropTypes.string.isRequired,
  adminUserName: PropTypes.string.isRequired,
  usersConnected: PropTypes.array.isRequired,
}

export default UsersArea
