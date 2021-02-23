import React from 'react'
import PropTypes from 'prop-types'
import SelectRoomTemplate from '../../components/templates/selectRoomTemplate'

function SelectRoom({ listChatRooms, setDataUser }) {
  const [nameChatRoom, setNameChatRoom] = React.useState('')
  React.useEffect(() => {
    if (nameChatRoom === '') return

    fetch('/api/room/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name_room: nameChatRoom }),
    })
      .then((data) => data.json())
      .then((user) => {
        setDataUser(user.document)
        setNameChatRoom('')
      })
      .catch((e) => console.log(e))
  }, [nameChatRoom, setDataUser])
  return (
    <SelectRoomTemplate
      listChatRooms={listChatRooms}
      setNameChatRoom={setNameChatRoom}
    />
  )
}

SelectRoom.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
  setDataUser: PropTypes.func.isRequired,
}

export default SelectRoom
