import React from 'react'
import PropTypes from 'prop-types'
import Home from '../home/Home'
import SelectRoom from '../SelectRoom'

function Main({ userData }) {
  const [toHaveRoom, setToHaveRoom] = React.useState(false)

  React.useEffect(() => {
    console.log(userData)
    if (userData.room) {
      setToHaveRoom(true)
    }
  }, [userData])

  return (
    <>
      {toHaveRoom ? (
        <Home userData={userData} />
      ) : (
        <SelectRoom listChatRooms={userData.chat_rooms_created} />
      )}
    </>
  )
}

Main.propTypes = {
  userData: PropTypes.object.isRequired,
}

export default Main
