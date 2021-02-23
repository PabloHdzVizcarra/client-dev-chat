import React from 'react'
import PropTypes from 'prop-types'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import AlertError from '../../molecules/AlertError'
import Disappear from '../../atoms/disappear/Disappear'
import ParagraphTwo from '../../molecules/ParagraphTwo'
import AddChatRoom from '../../organisms/AddChatRoom'
import Select from '../../molecules/Select'
import { errorMessage, message1, message2 } from './utils'
import Button from '../../atoms/button/Button'

function SelectRoomTemplate({ listChatRooms, setNameChatRoom }) {
  const [chatRoom, setChatRoom] = React.useState('')
  const [showAlert, setShowAlert] = React.useState(false)
  const [showMessage, setShowMessage] = React.useState(false)
  const [selectRoom, setSelectRoom] = React.useState(false)
  console.log(setSelectRoom)
  const nodeRef = React.useRef(null)

  React.useEffect(() => {
    if (listChatRooms.length === 0) return
    setShowMessage(true)
  }, [listChatRooms])

  function handleSubmit(event) {
    event.preventDefault()
    if (chatRoom.length < 5) {
      setShowAlert(true)
      return
    }
    setNameChatRoom(chatRoom)
    setChatRoom('')
    setShowAlert(false)
  }

  return (
    <div>
      <IconAndHeader />
      <Disappear valueOf={null} in={showAlert} nodeRef={nodeRef}>
        <AlertError text={errorMessage} nodeRef={nodeRef} />
      </Disappear>
      <ParagraphTwo show={showMessage} textOne={message1} textTwo={message2} />
      {listChatRooms.length !== 0 ? <Select data={listChatRooms} /> : null}
      {selectRoom ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '15px',
          }}
        >
          <Button
            textButton='Ingresar'
            styles={{
              backgroundColor: 'rgb(47,153,12)',
              height: '40px',
              color: '#ffffff',
              fontWeight: 'bold',
              margin: '10px 0 0 0',
              width: '10%',
              hoverBColor: 'rgb(51,166,13)',
              fontSize: '1.2rem',
            }}
          />
        </div>
      ) : null}
      {listChatRooms.length !== 0 ? <p>o puedes crear una nueva</p> : null}
      <AddChatRoom
        chatRoom={chatRoom}
        setChatRoom={setChatRoom}
        handleSubmit={handleSubmit}
      />
      <p>o puedes unirte a una sala existente</p>
    </div>
  )
}

SelectRoomTemplate.propTypes = {
  listChatRooms: PropTypes.array.isRequired,
  setNameChatRoom: PropTypes.func.isRequired,
}

export default SelectRoomTemplate
