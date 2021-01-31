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
import InfoMessage from '../../molecules/InfoMessage/InfoMessage'

let socket
let countRender = 0

const HomeTemplate = ({ roomID, username }) => {
  const host = 'http://localhost:3010'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [infoMessage, setInfoMessage] = React.useState('')
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
      console.log('MESSAGE')
      console.log(msg)
      setMessages((messages) => [...messages, msg])
    })

    socket.on('roomData', (data) => {
      console.log('ROOMDATA')
      console.log(data)
      // setUsers(users)
    })

    socket.on('info', (data) => {
      const { text } = data
      setInfoMessage(text)
    })
    return () => {
      setInfoMessage('')
    }
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
      {infoMessage !== '' ? (
        <InfoMessage text={infoMessage} displayTime={3000} />
      ) : null}
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
