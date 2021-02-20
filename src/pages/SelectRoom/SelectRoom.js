import React from 'react'
import PropTypes from 'prop-types'
import SelectRoomTemplate from '../../components/templates/selectRoomTemplate'

function SelectRoom({ listChatRooms }) {
  const [nameChatRoom, setNameChatRoom] = React.useState('')
  React.useEffect(() => {
    if (nameChatRoom === '') return
    console.log(nameChatRoom)
  })
  return (
    <SelectRoomTemplate
      listChatRooms={listChatRooms}
      setNameChatRoom={setNameChatRoom}
    />
  )
}

SelectRoom.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
}

export default SelectRoom
