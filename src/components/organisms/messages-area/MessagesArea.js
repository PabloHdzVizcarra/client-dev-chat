import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Message, WrapperMessage } from '../../templates/home_template/styles'
import { v4 as uuidv4 } from 'uuid'
import checkAdminUser from '../../templates/home_template/helpers/check_admim_user'

const Container = styled.div`
  display: grid;
  grid-template-rows: 90% 10%;
`

const MessagesArea = ({ messages, username }) => {
  return (
    <Container>
      <p>messages</p>
      {messages.map((message) => (
        <WrapperMessage
          key={uuidv4()}
          admin={checkAdminUser(username, message.user)}
        >
          <Message key={uuidv4()}>{message.text}</Message>
        </WrapperMessage>
      ))}

      <p>form</p>
    </Container>
  )
}

MessagesArea.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
}

export default MessagesArea
