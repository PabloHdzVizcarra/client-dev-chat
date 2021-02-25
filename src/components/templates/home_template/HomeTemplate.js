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
  const [infoMessage, setInfoMessage] = React.useState('')
  const [appear, setAppear] = React.useState(false)
  const [usersConnected, setUsersConnected] = React.useState([])
  const { name, room, color } = userData
  console.log(userData)

  React.useEffect(() => {
    socket = io(host)

    socket.emit('user_join', { name, room, color }, (error) => {
      if (error) {
        alert(error)
      }
    })
    return () => {}
  }, [room, name, color])

  React.useEffect(() => {
    socket.on('new_user', (user) => {
      console.log(user)
      console.log('EVENTO new_user')
    })
    socket.on('message', (msg) => {
      console.log('EVENTO message')
      if (msg && msg?.text) {
        setMessages((messages) => [...messages, msg])
        setInfoMessage('')
        return
      }
      setInfoMessage('lo sentimos ocurrió un error al mandar el mensaje')
      setAppear(true)
    })

    socket.on('room_data', (data) => {
      console.log('EVENTO room_data')
      setUsersConnected(data.users)
    })

    socket.on('info_message', (data) => {
      console.log('EVENTO info_message')
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

      <UsersArea usersConnected={usersConnected} user={userData} />

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
