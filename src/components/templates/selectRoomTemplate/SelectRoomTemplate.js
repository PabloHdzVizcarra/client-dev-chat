import React from 'react'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import MessageOrList from '../../organisms/MessageOrList/MessageOrList'
import PropTypes from 'prop-types'
import AlertError from '../../molecules/AlertError'
import Disappear from '../../atoms/disappear/Disappear'

function SelectRoomTemplate({ listChatRooms }) {
  const [chatRoom, setChatRoom] = React.useState('')
  const [showAlert, setShowAlert] = React.useState(false)
  const nodeRef = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    setShowAlert(true)
    console.log(showAlert)
    console.log(chatRoom)
  }
  return (
    <div>
      <IconAndHeader />
      <Disappear valueOf={null} in={showAlert} nodeRef={nodeRef}>
        <AlertError text='ocurrió un error un error' nodeRef={nodeRef} />
      </Disappear>
      <MessageOrList
        listChatRooms={listChatRooms}
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
