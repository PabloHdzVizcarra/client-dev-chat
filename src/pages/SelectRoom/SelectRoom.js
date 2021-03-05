import React from 'react'
import PropTypes from 'prop-types'
import SelectRoomTemplate from '../../components/templates/selectRoomTemplate'
import { useHistory } from 'react-router-dom'

function SelectRoom({ listChatRooms, setDataUser }) {
  const [roomsList, setRoomsList] = React.useState([])
  let history = useHistory()

  function callAPIToCreateChatRoom(name) {
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
        setDataUser(user.document)
      })
      .catch(console.log)
  }

  React.useEffect(() => {
    const abortCtrl = new AbortController()
    const opts = { signal: abortCtrl.signal }
    fetch('/api/room', opts)
      .then((response) => response.json())
      .then(({ documents, error }) => {
        if (error || !documents) {
          return
        }
        setRoomsList(documents)
      })
      .catch(console.log)

    return () => abortCtrl.abort()
  }, [])

  function setChatRoomInDatabase(room) {
    fetch(`/api/room/${room}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then(({ document }) => {
        setDataUser(document)
        history.push('/')
      })
      .catch(console.log)
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
}

export default SelectRoom
