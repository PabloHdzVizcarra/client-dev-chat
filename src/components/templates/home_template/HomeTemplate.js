import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { io } from 'socket.io-client'
import {
  Button,
  Container,
  ContainerData,
  ContainerMessages,
  ContainerUsers,
  FlexContainer,
  InputText,
  Message,
  Paragraph,
} from './styles'
import InfoMessage from '../../molecules/InfoMessage/InfoMessage'
import Expire from '../../atoms/Expire/Expire'
import ListItem from '../../atoms/ListItem/ListItem'

let socket

const HomeTemplate = ({ roomID, username }) => {
  const host = 'http://localhost:3100'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [infoMessage, setInfoMessage] = React.useState('')
  const [appear, setAppear] = React.useState(false)
  const [usersConnected, setUsersConnected] = React.useState([])

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
        setInfoMessage('')
        return
      }
      setInfoMessage('lo sentimos ocurrió un error al mandar el mensaje')
      setAppear(true)
    })

    socket.on('roomData', (data) => {
      setUsersConnected(data.users)
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
      setInfoMessage('')
    }
  }

  function handleKeyPress(event) {
    if (event.charCode === 13) {
      sendMessage(message)
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
        <Paragraph>{`Chat Room: ${roomID}`}</Paragraph>
      </FlexContainer>
      <ContainerData>
        <ContainerMessages>
          {messages.map((message) => (
            <Message key={uuidv4()}>{message.text}</Message>
          ))}
        </ContainerMessages>
        <ContainerUsers>
          {usersConnected.map((user) => (
            <ListItem key={uuidv4()} text={user.name} />
          ))}
        </ContainerUsers>
      </ContainerData>
      <FlexContainer>
        <InputText
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder='Write message...'
          onKeyPress={(event) => handleKeyPress(event)}
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
