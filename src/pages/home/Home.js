import React from 'react'
import PropTypes from 'prop-types'
import HomeTemplate from '../../components/templates/home_template/HomeTemplate'

const Home = ({ userData }) => {
  function closeSession() {
    window.location.href = window.origin
  }

  console.log(userData)
  return (
    <HomeTemplate
      roomID={userData.room}
      username={userData.username}
      handleCloseSession={closeSession}
      userColor={userData.colorUser}
    />
  )
}

Home.propTypes = {
  userData: PropTypes.object.isRequired,
}

export default Home
