import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Message, WrapperMessage } from '../../templates/home_template/styles'
import { v4 as uuidv4 } from 'uuid'
import checkAdminUser from '../../templates/home_template/helpers/check_admim_user'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

function MessageList({ messages, username }) {
  return (
    <Container>
      {messages.map((message) => (
        <WrapperMessage
          key={uuidv4()}
          admin={checkAdminUser(username, message.user)}
        >
          <Message>{message.text}</Message>
        </WrapperMessage>
      ))}
    </Container>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
}

export default MessageList
