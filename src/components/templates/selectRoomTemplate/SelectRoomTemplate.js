import React from 'react'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import MessageOrList from '../../organisms/MessageOrList/MessageOrList'
import PropTypes from 'prop-types'

function SelectRoomTemplate({ listChatRooms }) {
  return (
    <div>
      <IconAndHeader />
      <MessageOrList listChatRooms={listChatRooms} />
    </div>
  )
}

SelectRoomTemplate.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
}

export default SelectRoomTemplate
