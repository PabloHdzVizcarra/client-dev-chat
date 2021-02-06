import React from 'react'
import PropTypes from 'prop-types'
import { io } from 'socket.io-client'
import InfoMessage from '../../molecules/InfoMessage/InfoMessage'
import Expire from '../../atoms/Expire/Expire'
import styled from 'styled-components'
import UsersArea from '../../organisms/users-area/UsersArea'
import MessagesArea from '../../organisms/messages-area/MessagesArea'

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  background-color: #ffffff;
  height: 100%;
`

let socket

const HomeTemplate = ({ roomID, username }) => {
  const host = 'http://localhost:3100'
  // const [message, setMessage] = React.useState('')
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

  /*React.useEffect(() => {
    setAppear(false)
  }, [message])*/

  // const sendMessage = () => {
  //   if (message) {
  //     socket.emit('text-message', message)
  //     setMessage('')
  //     setInfoMessage('')
  //   }
  // }

  // function handleKeyPress(event) {
  //   if (event.charCode === 13) {
  //     sendMessage(message)
  //   }
  // }

  console.log(user)
  return (
    <Container>
      {appear ? (
        <Expire delay={1500}>
          <InfoMessage text={infoMessage} />
        </Expire>
      ) : null}

      <UsersArea
        nameChatRoom={roomID}
        adminUserName={username}
        usersConnected={usersConnected}
      />

      <MessagesArea messages={messages} username={username} />
    </Container>
  )
}

HomeTemplate.propTypes = {
  roomID: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  handleCloseSession: PropTypes.func.isRequired,
}

export default HomeTemplate
