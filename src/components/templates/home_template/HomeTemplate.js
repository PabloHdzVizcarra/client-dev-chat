import React from 'react'
import PropTypes from 'prop-types'
import { io } from 'socket.io-client'
import Expire from '../../atoms/Expire/Expire'
import UsersArea from '../../organisms/users-area/UsersArea'
import MessagesArea from '../../organisms/MessagesArea/MessagesArea'
import AlertInfo from '../../molecules/alert-info/AlertInfo'
import Button from '../../atoms/button/Button'
import {
  BtnContainer,
  ContainerHomeTemplate,
  ContainerUsersArea,
} from './styles'
import UsersAreaMobile from '../../organisms/UsersAreaMobile/UsersAreaMobile'
import { userIsActive } from './helpers/userIsActive'

let socket
//TODO: salir del home si el usuario se desconecta
//TODO: agregar button para eliminarte de la sala de chat
//TODO: version mobile usuario desconectado
const HomeTemplate = ({ userData, setCurrentRoom }) => {
  const host = 'http://localhost:3100'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [infoMessage, setInfoMessage] = React.useState('')
  const [appear, setAppear] = React.useState(false)
  const [usersConnected, setUsersConnected] = React.useState([])
  const [widthScreen, setWidthScreen] = React.useState(false)
  const { name, room, color } = userData

  React.useEffect(() => {
    if (window.innerWidth < 1024) {
      return setWidthScreen(true)
    }
    setWidthScreen(false)
  }, [])

  React.useEffect(() => {
    socket = io(host)
    socket.emit('user_join', { chatRoom: room, username: name }, (error) => {
      if (error) {
        alert(error)
      }
    })

    fetch(`/api/messages/${room}`)
      .catch(console.log)
      .then((response) => response.json())
      .then((data) => {
        const { documents } = data
        if (!documents) return

        setMessages(documents)
      })

    return () => {
      socket.close()
    }
  }, [room, name, color])

  React.useEffect(() => {
    socket.on('text-message', (data) => {
      if (!data.message) {
        return
      }

      setMessages((messages) => [...messages, data.message])
    })

    socket.on('room_data', (data) => {
      const { users_connected } = data
      console.log(users_connected)

      if (!userIsActive(users_connected, userData.name)) {
        console.log('usuario desconectado')
        setCurrentRoom(false)
        setUsersConnected(users_connected)
        return
      }
      setCurrentRoom(true)
      setUsersConnected(users_connected)
    })

    socket.on('info-message', (data) => {
      const { text } = data
      setInfoMessage(text)
      setAppear(true)
    })

    socket.on('delete-current-room', () => {
      setCurrentRoom(false)
    })
    return () => {
      setInfoMessage('')
    }
  }, [setCurrentRoom, name, room, setMessages, userData.name])

  function handleSubmitForm(event) {
    event.preventDefault()
    if (message) {
      socket.emit(
        'text-message',
        { chatRoom: room, username: name },
        { text: message },
      )
      setMessage('')
      setInfoMessage('')
    }
  }

  function closeSession() {
    socket.emit(
      'exit-room',
      { chatRoom: room, username: name },
      { email: userData.email },
    )
  }

  return (
    <ContainerHomeTemplate>
      <BtnContainer>
        <Button
          textButton='Salir'
          styles={{
            width: 'max-content',
            backgroundColor: '#FE2C34',
            fontWeight: 'bold',
            height: '30px',
            color: '#fff',
            padding: '0 1rem',
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

      <ContainerUsersArea>
        {widthScreen ? (
          <UsersAreaMobile
            listOfConnectedUsers={usersConnected}
            userData={userData}
          />
        ) : (
          <UsersArea usersConnected={usersConnected} user={userData} />
        )}
      </ContainerUsersArea>

      <MessagesArea
        messages={messages}
        username={name}
        setMessage={setMessage}
        message={message}
        handleSubmitForm={handleSubmitForm}
      />
    </ContainerHomeTemplate>
  )
}

HomeTemplate.propTypes = {
  userData: PropTypes.object.isRequired,
  setCurrentRoom: PropTypes.func.isRequired,
}

export default HomeTemplate
