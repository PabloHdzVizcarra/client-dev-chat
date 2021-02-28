import React from 'react'
import PropTypes from 'prop-types'
import SelectRoomTemplate from '../../components/templates/selectRoomTemplate'

function SelectRoom({ listChatRooms, setDataUser, setCurrentRoom }) {
  const [nameChatRoom, setNameChatRoom] = React.useState('')
  const [roomsList, setRoomsList] = React.useState([])
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

  React.useEffect(() => {
    fetch('/api/room')
      .then((response) => response.json())
      .then(({ documents, error }) => {
        if (error || !documents) {
          console.log('ocurrió un error')
          return
        }
        setRoomsList(documents)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  function setChatRoomInDatabase(room) {
    fetch(`/api/room/${room}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then(({ document }) => {
        setDataUser(document)
        setCurrentRoom(true)
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
      roomList={roomsList}
    />
  )
}

SelectRoom.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
  setDataUser: PropTypes.func.isRequired,
  setCurrentRoom: PropTypes.func.isRequired,
}

export default SelectRoom
