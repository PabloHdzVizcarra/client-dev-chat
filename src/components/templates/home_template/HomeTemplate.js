import React from 'react'
import PropTypes from 'prop-types'
import { io } from 'socket.io-client'
import Expire from '../../atoms/Expire/Expire'
import styled from 'styled-components'
import UsersArea from '../../organisms/users-area/UsersArea'
import MessagesArea from '../../organisms/messages-area/MessagesArea'
import AlertInfo from '../../molecules/alert-info/AlertInfo'

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  background-color: #ffffff;
  height: 100%;
`

let socket

const HomeTemplate = ({ userData }) => {
  const host = 'http://localhost:3100'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [user, setUser] = React.useState({})
  const [infoMessage, setInfoMessage] = React.useState('')
  const [appear, setAppear] = React.useState(false)
  const [usersConnected, setUsersConnected] = React.useState([])
  const { name, room: roomID, color: colorUser } = userData
  console.log(userData)

  React.useEffect(() => {
    socket = io(host)

    socket.emit('user_join', { name, roomID, colorUser }, (error) => {
      if (error) {
        alert(error)
      }
    })
    return () => {}
  }, [roomID, name, colorUser])

  React.useEffect(() => {
    socket.on('new_user', (user) => {
      setUser(user)
    })
    socket.on('message', (msg) => {
      if (msg && msg?.text) {
        setMessages((messages) => [...messages, msg])
        setInfoMessage('')
        return
      }
      setInfoMessage('lo sentimos ocurrió un error al mandar el mensaje')
      setAppear(true)
    })

    socket.on('room_data', (data) => {
      setUsersConnected(data.users)
    })

    socket.on('info_message', (data) => {
      const { text } = data
      setInfoMessage(text)
      setAppear(true)
    })
    return () => {
      setInfoMessage('')
    }
  }, [])

  function handleSubmitForm(event) {
    event.preventDefault()
    if (message) {
      socket.emit('text-message', message)
      setMessage('')
      setInfoMessage('')
    }
  }

  return (
    <Container>
      {appear ? (
        <Expire delay={1500}>
          <AlertInfo text={infoMessage} setAppear={setAppear} />
        </Expire>
      ) : null}

      <UsersArea
        usersConnected={usersConnected}
        userData={userData}
        user={user}
      />

      <MessagesArea
        messages={messages}
        username={name}
        setMessage={setMessage}
        message={message}
        handleSubmitForm={handleSubmitForm}
      />
    </Container>
  )
}

HomeTemplate.propTypes = {
  userData: PropTypes.object.isRequired,
}

export default HomeTemplate
