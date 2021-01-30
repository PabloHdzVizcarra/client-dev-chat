import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { io } from 'socket.io-client'
import {
  Button,
  Container,
  ContainerMessages,
  FlexContainer,
  InputText,
  Message,
  Paragraph,
} from './styles'

let socket

const HomeTemplate = ({ roomID, username }) => {
  const host = 'http://localhost:3010'
  const NEW_CHAT_MESSAGE_EVENT = 'newMessage'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [users, setUsers] = React.useState('')
  console.log(users)

  React.useEffect(() => {
    socket = io(host)

    socket.emit('join', { username, roomID }, (error) => {
      if (error) {
        alert(error)
      }
    })
    return () => {}
  }, [roomID, username])

  React.useEffect(() => {
    socket.on('sendMessage', (msg) => {
      setMessages((messages) => [...messages, msg])
    })

    socket.on('roomData', ({ users }) => {
      console.log(users)
      setUsers(users)
    })
    return () => {}
  }, [])

  const sendMessage = () => {
    console.log(message)

    if (message) {
      socket.emit(NEW_CHAT_MESSAGE_EVENT, message, () => {
        setMessage('')
      })
      setMessage('')
    }
  }

  return (
    <Container>
      <FlexContainer>
        <Paragraph>{`Room: ${roomID}`}</Paragraph>
      </FlexContainer>
      <ContainerMessages>
        {messages.map((message) => (
          <Message key={uuidv4()}>{message}</Message>
        ))}
      </ContainerMessages>
      <FlexContainer>
        <InputText
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder='Write message...'
        />
        <Button onClick={sendMessage}>Send</Button>
      </FlexContainer>
    </Container>
  )
}

HomeTemplate.propTypes = {
  roomID: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default HomeTemplate
