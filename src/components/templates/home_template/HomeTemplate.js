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
import InfoMessage from '../../molecules/InfoMessage/InfoMessage'
import Expire from '../../atoms/Expire/Expire'

let socket

const HomeTemplate = ({ roomID, username }) => {
  const host = 'http://localhost:3010'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [infoMessage, setInfoMessage] = React.useState('')
  const [appear, setAppear] = React.useState(false)

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
      if (msg && msg?.text) {
        setMessages((messages) => [...messages, msg])
        return
      }
      console.log('no se recibio ningun mensaje')
      setInfoMessage('lo sentimos ocurrió un error al mandar el mensaje')
      setAppear(true)
    })

    socket.on('roomData', (data) => {
      console.log('ROOMDATA')
      console.log(data)
      // setUsers(users)
    })

    socket.on('info', (data) => {
      const { text } = data
      setInfoMessage(text)
      setAppear(true)
    })
    return () => {
      setInfoMessage('')
    }
  }, [])

  React.useEffect(() => {
    setAppear(false)
  }, [message])

  const sendMessage = () => {
    if (message) {
      socket.emit('text-message', message)
      setMessage('')
    }
  }

  return (
    <Container>
      {appear ? (
        <Expire delay={1500}>
          <InfoMessage text={infoMessage} />
        </Expire>
      ) : null}
      <FlexContainer>
        <Paragraph>{`Room: ${roomID}`}</Paragraph>
      </FlexContainer>
      <ContainerMessages>
        {messages.map((message) => (
          <Message key={uuidv4()}>{message.text}</Message>
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
