import React from 'react'
import PropTypes from 'prop-types'
import { io } from 'socket.io-client'
import Expire from '../../atoms/Expire/Expire'
import UsersArea from '../../organisms/users-area/UsersArea'
import MessagesArea from '../../organisms/messages-area/MessagesArea'
import AlertInfo from '../../molecules/alert-info/AlertInfo'
import Button from '../../atoms/button/Button'
import { BtnContainer, ContainerBtn } from './styles'

let socket

const HomeTemplate = ({ userData }) => {
  const host = 'http://localhost:3100'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [infoMessage, setInfoMessage] = React.useState('')
  const [appear, setAppear] = React.useState(false)
  const [usersConnected, setUsersConnected] = React.useState([])
  const { name, room, color } = userData

  React.useEffect(() => {
    socket = io(host)

    socket.emit('user_join', { name, room, color }, (error) => {
      if (error) {
        alert(error)
      }
    })
    return () => {
      socket.close()
    }
  }, [room, name, color])

  React.useEffect(() => {
    socket.on('new_user', (user) => {
      console.log(user.name)
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
      if (!data.users_connected) {
        return
      }
      setUsersConnected(data.users_connected)
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

  function closeSession() {
    console.log('cerrar session')
    socket.emit('exit-room', userData)
  }

  return (
    <ContainerBtn>
      <BtnContainer>
        <Button
          textButton='Salir'
          styles={{
            width: 'max-content',
            backgroundColor: '#FE2C34',
            fontWeight: 'bold',
            height: '100%',
            color: '#fff',
            padding: '0 1rem',
            margin: '5px 0 0 0',
            borderRadius: '4px',
            hoverBColor: '#e6272d',
            scale: 'scale(1.2)',
          }}
          handleClick={closeSession}
        />
      </BtnContainer>
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
    </ContainerBtn>
  )
}

HomeTemplate.propTypes = {
  userData: PropTypes.object.isRequired,
}

export default HomeTemplate
