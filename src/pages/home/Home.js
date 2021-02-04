import React from 'react'
import PropTypes from 'prop-types'
import HomeTemplate from '../../components/templates/home_template/HomeTemplate'

const Home = ({ username, roomID, setUsername, setRoom }) => {
  function closeSession() {
    setUsername('')
    setRoom('')
  }
  return (
    <HomeTemplate
      roomID={roomID}
      username={username}
      handleCloseSession={closeSession}
    />
  )
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
  roomID: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setRoom: PropTypes.func.isRequired,
}

export default Home
