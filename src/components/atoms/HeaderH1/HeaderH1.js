import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const H1 = styled.h1`
  margin: 1rem 0 0 0;
  font-size: 2rem;
  font-weight: lighter;
  text-align: center;
`

const HeaderH1 = ({ text }) => {
  return <H1>{text}</H1>
}

HeaderH1.propTypes = {
  text: PropTypes.string.isRequired,
}

export default HeaderH1
