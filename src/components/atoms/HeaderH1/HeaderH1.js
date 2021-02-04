import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const H1 = styled.h1`
  font-size: 1.7rem;
  font-weight: normal;
  text-align: center;
  margin: 0;
`

const HeaderH1 = ({ text }) => {
  return <H1>{text}</H1>
}

HeaderH1.propTypes = {
  text: PropTypes.string.isRequired,
}

export default HeaderH1
