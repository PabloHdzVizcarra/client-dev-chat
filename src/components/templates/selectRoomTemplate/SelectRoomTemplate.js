import React from 'react'
import IconAndHeader from '../../molecules/IconAndHeader/IconAndHeader'
import MessageOrList from '../../organisms/MessageOrList/MessageOrList'

function SelectRoomTemplate() {
  return (
    <>
      <IconAndHeader />
      <MessageOrList roomName='' />
    </>
  )
}

export default SelectRoomTemplate
