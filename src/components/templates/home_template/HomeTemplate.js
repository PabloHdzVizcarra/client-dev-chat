import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { io } from 'socket.io-client'
import {
  Container,
  ContainerData,
  ContainerMessages,
  ContainerUsers,
  FlexContainer,
  InputText,
  Message,
  WrapperMessage,
} from './styles'
import InfoMessage from '../../molecules/InfoMessage/InfoMessage'
import Expire from '../../atoms/Expire/Expire'
import ListItem from '../../atoms/ListItem/ListItem'
import checkAdminUser from './helpers/check_admim_user'
import Button from '../../atoms/button/Button'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'

let socket

const HomeTemplate = ({ roomID, username }) => {
  const host = 'http://localhost:3100'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [user, setUser] = React.useState('')
  const [infoMessage, setInfoMessage] = React.useState('')
  const [appear, setAppear] = React.useState(false)
  const [usersConnected, setUsersConnected] = React.useState([])

  React.useEffect(() => {
    socket = io(host)

    socket.emit('user_join', { username, roomID }, (error) => {
      if (error) {
        alert(error)
      }
    })
    return () => {}
  }, [roomID, username])

  React.useEffect(() => {
    socket.on('new_user', (user) => {
      setUser(user)
    })
    socket.on('message', (msg) => {
      console.log(msg)
      if (msg && msg?.text) {
        console.log(msg)
        setUser(msg.user)
        setMessages((messages) => [...messages, msg])
        setInfoMessage('')
        return
      }
      setInfoMessage('lo sentimos ocurrió un error al mandar el mensaje')
      setAppear(true)
    })

    socket.on('room_data', (data) => {
      console.log(data)
      setUsersConnected(data.users)
    })

    socket.on('info_message', (data) => {
      console.log(data)
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

  console.log(user)
  return (
    <Container>
      {appear ? (
        <Expire delay={1500}>
          <InfoMessage text={infoMessage} />
        </Expire>
      ) : null}
      <FlexContainer>
        <HeaderH1 text={`Chat Room: ${roomID}`} />
        <Button
          textButton={'close'}
          buttonStyles={{
            backgroundColor: '#e62c2c',
            color: '#ffffff',
            HBColor: '#b32222',
          }}
        />
      </FlexContainer>
      <ContainerData>
        <ContainerMessages>
          {messages.map((message) => (
            <WrapperMessage
              key={uuidv4()}
              admin={checkAdminUser(username, message.user)}
            >
              <Message key={uuidv4()}>{message.text}</Message>
            </WrapperMessage>
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
        <Button
          onClick={sendMessage}
          textButton={'Send'}
          buttonStyles={{
            width: '100%',
            margin: '1px',
            backgroundColor: '#0f91db',
            color: '#fff',
            HBColor: '#0e79b6',
          }}
        />
      </FlexContainer>
    </Container>
  )
}

HomeTemplate.propTypes = {
  roomID: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default HomeTemplate
