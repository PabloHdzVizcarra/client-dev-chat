import React from 'react'
import PropTypes from 'prop-types'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import AlertError from '../../molecules/AlertError'
import Disappear from '../../atoms/disappear/Disappear'
import ParagraphTwo from '../../molecules/ParagraphTwo'
import AddChatRoom from '../../organisms/AddChatRoom'
import EnterChatRoom from '../../organisms/EnterChatRoom'
import OptionalChatRoom from '../../organisms/OptionalChatRoom'
import { errorMessage, message1, message2 } from './utils'
import {
  BtnCloseSession,
  ContainerBtnCloseSession,
  ContainerHeader,
} from './styles'

function SelectRoomTemplate({
  listChatRooms,
  setChatRoomInDatabase,
  roomList,
  callAPIToCreateChatRoom,
  closeSession,
}) {
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
    if (chatRoom.length < 5) {
      setShowAlert(true)
      return
    }
    callAPIToCreateChatRoom(chatRoom)
    setChatRoom('')
    setShowAlert(false)
  }

  return (
    <div>
      <ContainerHeader>
        <IconAndHeader />
        <ContainerBtnCloseSession>
          <BtnCloseSession onClick={closeSession}>Salir</BtnCloseSession>
        </ContainerBtnCloseSession>
      </ContainerHeader>
      <Disappear valueOf={null} in={showAlert} nodeRef={nodeRef}>
        <AlertError text={errorMessage} nodeRef={nodeRef} />
      </Disappear>
      <div
        style={{
          padding: '10px',
        }}
      >
        <ParagraphTwo
          show={showMessage}
          textOne={message1}
          textTwo={message2}
        />
        <EnterChatRoom
          handleSelect={setChatRoomInDatabase}
          listChatRooms={listChatRooms}
        />
        {listChatRooms.length !== 0 ? <p>o puedes crear una nueva</p> : null}
        <AddChatRoom
          chatRoom={chatRoom}
          setChatRoom={setChatRoom}
          handleSubmit={handleSubmit}
        />
        <OptionalChatRoom
          infoMessage={'o puedes unirte a una sala de chat existente'}
          roomList={roomList}
          handleSetRoom={setChatRoomInDatabase}
        />
      </div>
    </div>
  )
}

SelectRoomTemplate.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
  setChatRoomInDatabase: PropTypes.func.isRequired,
  roomList: PropTypes.array.isRequired,
  callAPIToCreateChatRoom: PropTypes.func.isRequired,
  closeSession: PropTypes.func.isRequired,
}

export default SelectRoomTemplate
