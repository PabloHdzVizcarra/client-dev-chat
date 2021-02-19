import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../molecules/Select'
import FormAndInfo from '../FormAndInfo'
import './MessageOrList.css'

function MessageOrList({ listChatRooms, chatRoom, setChatRoom, handleSubmit }) {
  const [haveRoom, setHaveRoom] = React.useState(false)

  React.useEffect(() => {
    if (listChatRooms.length === 0) return
    setHaveRoom(true)
  }, [listChatRooms])

  return (
    <div>
      {haveRoom ? (
        <Select data={listChatRooms} />
      ) : (
        <FormAndInfo
          setChatRoom={setChatRoom}
          chatRoom={chatRoom}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

MessageOrList.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
  chatRoom: PropTypes.string.isRequired,
  setChatRoom: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
export default MessageOrList
