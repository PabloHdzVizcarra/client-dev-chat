import React from 'react'
import PropTypes from 'prop-types'
import HomeTemplate from '../../components/templates/home_template/HomeTemplate'

const Home = ({ username, roomID }) => {
  return <HomeTemplate roomID={roomID} username={username} />
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
  roomID: PropTypes.string.isRequired,
}

export default Home
