import React from 'react'
import PropTypes from 'prop-types'
import Home from '../home/Home'
import SelectRoom from '../SelectRoom'

function Main({ userData, setDataUser, currentRoom, setCurrentRoom }) {
  const [toHaveRoom, setToHaveRoom] = React.useState(false)

  React.useEffect(() => {
    console.log(userData)

    if (userData.room && currentRoom) {
      setToHaveRoom(true)
      return
    }

    setToHaveRoom(false)
  }, [userData, currentRoom])

  return (
    <>
      {toHaveRoom ? (
        <Home userData={userData} setCurrentRoom={setCurrentRoom} />
      ) : (
        <SelectRoom
          listChatRooms={userData.chat_rooms_created}
          setDataUser={setDataUser}
          setCurrentRoom={setCurrentRoom}
        />
      )}
    </>
  )
}

Main.propTypes = {
  userData: PropTypes.object.isRequired,
  setDataUser: PropTypes.func.isRequired,
  currentRoom: PropTypes.bool.isRequired,
  setCurrentRoom: PropTypes.func.isRequired,
}

export default Main
