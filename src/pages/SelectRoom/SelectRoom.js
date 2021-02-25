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

  function setChatRoomInDatabase(room) {
    fetch(`/api/room/${room}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then(({ document }) => {
        setDataUser(document)
      })
      .catch((error) => {
        console.log(error)
      })
    return console.log('selecciona sala de chat ' + room)
  }

  return (
    <SelectRoomTemplate
      listChatRooms={listChatRooms}
      setNameChatRoom={setNameChatRoom}
      setChatRoomInDatabase={setChatRoomInDatabase}
    />
  )
}

SelectRoom.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
  setDataUser: PropTypes.func.isRequired,
}

export default SelectRoom
