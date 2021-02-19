import React from 'react'
import PropTypes from 'prop-types'
import Home from '../home/Home'
import SelectRoom from '../SelectRoom/SelectRoom'

function Main({ userData }) {
  const [toHaveRoom, setToHaveRoom] = React.useState(false)

  React.useEffect(() => {
    console.log(userData.room)
    if (userData.room) {
      setToHaveRoom(true)
    }
  }, [userData.room])

  return <>{toHaveRoom ? <Home userData={userData} /> : <SelectRoom />}</>
}

Main.propTypes = {
  userData: PropTypes.object.isRequired,
}

export default Main
