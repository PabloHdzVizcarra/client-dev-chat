import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../molecules/Select'

OptionalChatRoom.propTypes = {
  infoMessage: PropTypes.string.isRequired,
  children: PropTypes.element,
  roomList: PropTypes.array.isRequired,
}

function OptionalChatRoom({ infoMessage, roomList }) {
  return (
    <div>
      <p>{infoMessage}</p>
      <Select valueSelect='' handleChange={() => {}} data={roomList} />
    </div>
  )
}

export default OptionalChatRoom
