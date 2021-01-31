import React from 'react'
import PropTypes from 'prop-types'
// import { v4 as uuidv4 } from 'uuid'
import { io } from 'socket.io-client'
import {
  Button,
  Container,
  ContainerMessages,
  FlexContainer,
  InputText,
  // Message,
  Paragraph,
} from './styles'

let socket
let countRender = 0

const HomeTemplate = ({ roomID, username }) => {
  const host = 'http://localhost:3010'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  // const [users, setUsers] = React.useState('')
  console.log(`El componente se renderiza ${(countRender += 1)} vez`)

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
    socket.on('message', (msg) => {
      console.log(msg)
      setMessages((messages) => [...messages, msg])
    })

    socket.on('roomData', ({ users }) => {
      console.log(users)
      // setUsers(users)
    })

    socket.on('info', (data) => {
      console.log(data)
    })
    return () => {}
  }, [])

  const sendMessage = () => {
    if (message) {
      console.log(message)
      socket.emit('sendMessage', message, () => {
        setMessage('')
      })
    }
  }

  console.log(messages)

  return (
    <Container>
      <FlexContainer>
        <Paragraph>{`Room: ${roomID}`}</Paragraph>
      </FlexContainer>
      <ContainerMessages>
        {/*{messages.map((message) => (*/}
        {/*  <Message key={uuidv4()}>{message}</Message>*/}
        {/*))}*/}
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
