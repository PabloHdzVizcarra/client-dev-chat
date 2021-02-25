import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../molecules/Select'

OptionalChatRoom.propTypes = {
  infoMessage: PropTypes.string.isRequired,
  children: PropTypes.element,
  roomList: PropTypes.array.isRequired,
  handleSetRoom: PropTypes.func.isRequired,
}

function OptionalChatRoom({ infoMessage, roomList, handleSetRoom }) {
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

  function handleClick() {
    handleSetRoom(valueSelect)
  }
  return (
    <div>
      <p>{infoMessage}</p>
      <Select
        valueSelect={valueSelect}
        handleChange={handleSelectOption}
        data={roomList}
      />
      {isButton ? <button onClick={handleClick}>Ingresar</button> : null}
    </div>
  )
}

export default OptionalChatRoom
