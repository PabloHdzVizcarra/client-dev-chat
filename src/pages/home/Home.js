import React from 'react'
import PropTypes from 'prop-types'
import HomeTemplate from '../../components/templates/home_template/HomeTemplate'

const Home = ({ userData }) => {
  console.log(userData)
  return <HomeTemplate userData={userData} />
}

Home.propTypes = {
  userData: PropTypes.object.isRequired,
}

export default Home
