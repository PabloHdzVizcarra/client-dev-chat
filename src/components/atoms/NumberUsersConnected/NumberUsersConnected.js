import React from 'react'
import PropTypes from 'prop-types'
import { Paragraph } from './styles'

NumberUsersConnected.propTypes = {
  number: PropTypes.number.isRequired,
}

function NumberUsersConnected({ number }) {
  return (
    <div>
      <Paragraph>{`Usuarios ${number}`}</Paragraph>
    </div>
  )
}

export default NumberUsersConnected
