import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  ContainerMessages,
  ContainerUsers,
  Message,
  WrapperMessage,
} from '../../templates/home_template/styles'
import { v4 as uuidv4 } from 'uuid'
import checkAdminUser from '../../templates/home_template/helpers/check_admim_user'
import ListItem from '../../atoms/ListItem/ListItem'

const Container = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  background-color: #f0f0f0;
`

const MessagesArea = ({ messages, users, adminUser }) => {
  return (
    <Container>
      <ContainerMessages>
        {messages.map((message) => (
          <WrapperMessage
            key={uuidv4()}
            admin={checkAdminUser(adminUser, message.user)}
          >
            <Message key={uuidv4()}>{message.text}</Message>
          </WrapperMessage>
        ))}
      </ContainerMessages>
      <ContainerUsers>
        {users.map((user) => (
          <ListItem key={uuidv4()} text={user.name} />
        ))}
      </ContainerUsers>
    </Container>
  )
}

MessagesArea.propTypes = {
  messages: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  adminUser: PropTypes.string.isRequired,
}

export default MessagesArea
