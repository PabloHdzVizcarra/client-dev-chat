import React from 'react'
import PropTypes from 'prop-types'
import HomeTemplate from '../../components/templates/home_template/HomeTemplate'

const Home = ({ username, roomID }) => {
  function closeSession() {
    window.location.href = window.origin
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
}

export default Home
