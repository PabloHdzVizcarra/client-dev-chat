import React from 'react'
import PropTypes from 'prop-types'

OptionalChatRoom.propTypes = {
  infoMessage: PropTypes.string.isRequired,
  children: PropTypes.element,
}

function OptionalChatRoom({ infoMessage, children }) {
  return (
    <div>
      <p>{infoMessage}</p>
      {children}
    </div>
  )
}

export default OptionalChatRoom
