import React from 'react'
import PropTypes from 'prop-types'
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
import { useHistory } from 'react-router-dom'
import { useListenEvents } from '../../../hooks/useListenEvents/useListenEvents'

//TODO: agregar button para eliminarte de la sala de chat
const HomeTemplate = ({ userData }) => {
  let history = useHistory()

  const [message, setMessage] = React.useState('')
  const [widthScreen, setWidthScreen] = React.useState(false)
  const {
    socket,
    messages,
    usersConnected,
    infoMessage,
    appear,
    setAppear,
    setInfoMessage,
  } = useListenEvents(userData)

  React.useEffect(() => {
    if (window.innerWidth < 1024) {
      return setWidthScreen(true)
    }
    setWidthScreen(false)
  }, [])

  function handleSubmitForm(event) {
    event.preventDefault()
    if (message) {
      socket.emit(
        'text-message',
        { chatRoom: userData.room, username: name },
        { text: message },
      )
      setMessage('')
      setInfoMessage('')
    }
  }

  function closeSession() {
    socket.emit(
      'exit-room',
      { chatRoom: userData.room, username: name },
      { email: userData.email },
    )
    history.replace('/select-room')
    console.log(history)
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
