import React from 'react'
import PropTypes from 'prop-types'
import SelectRoomTemplate from '../../components/templates/selectRoomTemplate'

function SelectRoom({ listChatRooms, setDataUser, setCurrentRoom }) {
  const [roomsList, setRoomsList] = React.useState([])

  function callAPIToCreateChatRoom(name) {
    console.log(name)
    fetch('/api/room/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name_room: name }),
    })
      .then((data) => data.json())
      .then((user) => {
        console.log(user)
        setDataUser(user.document)
      })
      .catch((e) => console.log(e))
  }

  React.useEffect(() => {
    const abortCtrl = new AbortController()
    const opts = { signal: abortCtrl.signal }
    fetch('/api/room', opts)
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

    return () => abortCtrl.abort()
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
      setChatRoomInDatabase={setChatRoomInDatabase}
      roomList={roomsList}
      callAPIToCreateChatRoom={callAPIToCreateChatRoom}
    />
  )
}

SelectRoom.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
  setDataUser: PropTypes.func.isRequired,
  setCurrentRoom: PropTypes.func.isRequired,
}

export default SelectRoom
