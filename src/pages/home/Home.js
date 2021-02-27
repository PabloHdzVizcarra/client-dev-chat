import React from 'react'
import PropTypes from 'prop-types'
import HomeTemplate from '../../components/templates/home_template/HomeTemplate'

const Home = ({ userData, setCurrentRoom }) => {
  console.log(userData)
  return <HomeTemplate userData={userData} setCurrentRoom={setCurrentRoom} />
}

Home.propTypes = {
  userData: PropTypes.object.isRequired,
  setCurrentRoom: PropTypes.func.isRequired,
}

export default Home
