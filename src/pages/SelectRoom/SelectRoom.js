import React from 'react'
import PropTypes from 'prop-types'
import SelectRoomTemplate from '../../components/templates/selectRoomTemplate'

function SelectRoom({ listChatRooms }) {
  return <SelectRoomTemplate listChatRooms={listChatRooms} />
}

SelectRoom.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
}

export default SelectRoom
