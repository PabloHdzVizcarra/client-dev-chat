import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../../atoms/Paragraph/Paragraph'

function MessageOrList({ roomName }) {
  const [haveRoom, setHaveRoom] = React.useState(false)

  React.useEffect(() => {
    if (roomName) {
      setHaveRoom(roomName)
    }
  }, [roomName])

  return (
    <>
      {' '}
      {haveRoom ? (
        <p>lista de salas</p>
      ) : (
        <Paragraph text='Ups al parecer no haz creado ninguna sala de chat' />
      )}
    </>
  )
}

MessageOrList.propTypes = {
  roomName: PropTypes.string.isRequired,
}
export default MessageOrList
