import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../../atoms/Paragraph/Paragraph'

function MessageOrList({ listChatRooms }) {
  const [haveRoom, setHaveRoom] = React.useState(false)

  React.useEffect(() => {
    if (listChatRooms.length === 0) return
    setHaveRoom(true)
  }, [listChatRooms])

  return (
    <div>
      {haveRoom ? (
        <p>lista de salas</p>
      ) : (
        <Paragraph text='Ups al parecer no haz creado ninguna sala de chat' />
      )}
    </div>
  )
}

MessageOrList.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
}
export default MessageOrList
