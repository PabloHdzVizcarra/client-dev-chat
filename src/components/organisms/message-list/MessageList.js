import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import checkAdminUser from '../../templates/home_template/helpers/check_admim_user'
import Message from '../../molecules/message/Message'

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: visible;
  max-height: 77vh;
  padding: 0;
  margin: 0;
`

const WrapperMessage = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.admin === true ? 'flex-end' : 'flex-start'};
`

function MessageList({ messages, username }) {
  const messagesRef = React.useRef(null)

  function scrollToBottom() {
    messagesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  React.useEffect(() => {
    scrollToBottom()
  }, [messages])
  return (
    <Container>
      {messages.reverse().map((message) => (
        <WrapperMessage
          key={uuidv4()}
          admin={checkAdminUser(username, message.owner_user)}
        >
          <Message
            text={message.text}
            user={message.owner_user}
            adminUser={username}
          />
          <div ref={messagesRef} />
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
