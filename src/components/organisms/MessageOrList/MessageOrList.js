import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../molecules/Select'
import FormAndInfo from '../FormAndInfo'
import './MessageOrList.css'

function MessageOrList({ listChatRooms }) {
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
        <FormAndInfo text='Ups al parecer no haz creado ninguna sala de chat, pero no te preocupes puedes crear una' />
      )}
    </div>
  )
}

MessageOrList.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
}
export default MessageOrList
