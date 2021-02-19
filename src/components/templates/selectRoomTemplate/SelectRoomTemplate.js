import React from 'react'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import PropTypes from 'prop-types'
import AlertError from '../../molecules/AlertError'
import Disappear from '../../atoms/disappear/Disappear'
import ParagraphTwo from '../../molecules/ParagraphTwo'
import { message1, message2 } from './utils'
import AddChatRoom from '../../organisms/AddChatRoom'

function SelectRoomTemplate({ listChatRooms }) {
  const [chatRoom, setChatRoom] = React.useState('')
  const [showAlert, setShowAlert] = React.useState(false)
  const [showMessage, setShowMessage] = React.useState(false)
  const nodeRef = React.useRef(null)

  React.useEffect(() => {
    if (listChatRooms.length === 0) return
    setShowMessage(true)
  }, [listChatRooms])

  function handleSubmit(event) {
    event.preventDefault()
    if (chatRoom.length === 4) {
      setShowAlert(true)
    }
    setShowAlert(true)
  }
  return (
    <div>
      <IconAndHeader />
      <Disappear valueOf={null} in={showAlert} nodeRef={nodeRef}>
        <AlertError
          text='el nombre de la sala de chat debe ser mayor a 4 caracteres'
          nodeRef={nodeRef}
        />
      </Disappear>
      <ParagraphTwo show={showMessage} textOne={message1} textTwo={message2} />
      <AddChatRoom
        chatRoom={chatRoom}
        setChatRoom={setChatRoom}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

SelectRoomTemplate.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
}

export default SelectRoomTemplate
