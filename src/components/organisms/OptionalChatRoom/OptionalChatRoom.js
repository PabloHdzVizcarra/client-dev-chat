import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../molecules/Select'

OptionalChatRoom.propTypes = {
  infoMessage: PropTypes.string.isRequired,
  children: PropTypes.element,
  roomList: PropTypes.array.isRequired,
}

function OptionalChatRoom({ infoMessage, roomList }) {
  const [isButton, setIsButton] = React.useState(false)
  const [valueSelect, setValueSelect] = React.useState('')

  function handleSelectOption(event) {
    if (event.target.value === '-----') {
      setValueSelect('-----')
      setIsButton(false)
      return
    }
    setValueSelect(event.target.value)
    setIsButton(true)
  }
  //TODO: set room with click button
  return (
    <div>
      <p>{infoMessage}</p>
      <Select
        valueSelect={valueSelect}
        handleChange={handleSelectOption}
        data={roomList}
      />
      {isButton ? <button>Ingresar</button> : null}
    </div>
  )
}

export default OptionalChatRoom
