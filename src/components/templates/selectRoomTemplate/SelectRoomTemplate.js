import React from 'react'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import MessageOrList from '../../organisms/MessageOrList/MessageOrList'
import PropTypes from 'prop-types'

function SelectRoomTemplate({ listChatRooms }) {
  const [chatRoom, setChatRoom] = React.useState('')
  const [showAlert, setShowAlert] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setShowAlert(true)
    console.log(showAlert)

    console.log(chatRoom)
  }
  return (
    <div>
      <IconAndHeader />
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
