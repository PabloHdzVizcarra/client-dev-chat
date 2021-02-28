import React from 'react'
import PropTypes from 'prop-types'
import { io } from 'socket.io-client'
import Expire from '../../atoms/Expire/Expire'
import UsersArea from '../../organisms/users-area/UsersArea'
import MessagesArea from '../../organisms/MessagesArea/MessagesArea'
import AlertInfo from '../../molecules/alert-info/AlertInfo'
import Button from '../../atoms/button/Button'
import { BtnContainer, ContainerBtn } from './styles'

let socket

const HomeTemplate = ({ userData, setCurrentRoom }) => {
  const host = 'http://localhost:3100'
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const [infoMessage, setInfoMessage] = React.useState('')
  const [appear, setAppear] = React.useState(false)
  const [usersConnected, setUsersConnected] = React.useState([])
  const { name, room, color } = userData

  React.useEffect(() => {
    socket = io(host)
    socket.emit('user_join', { chatRoom: room, username: name }, (error) => {
      if (error) {
        alert(error)
      }
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
      console.log(data)
    })

    socket.on('room_data', (data) => {
      console.log(data)
      if (!data.users_connected.map((user) => user.name).includes(name)) {
        setCurrentRoom(false)
        return
      }
      setCurrentRoom(true)
      setUsersConnected(data.users_connected)
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
  }, [setCurrentRoom, name, room, setMessages])

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
  setCurrentRoom: PropTypes.func.isRequired,
}

export default HomeTemplate
