import React from 'react'
import {
  CloseIcon,
  ContainerCloseIcon,
  ContainerDataUsers,
  NameChatRoom,
} from './styles'
import PropTypes from 'prop-types'
import NumberUsersConnected from '../../atoms/NumberUsersConnected'

DataUsers.propTypes = {
  handleClickClose: PropTypes.func.isRequired,
  listOfConnectedUsers: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
}

function DataUsers({ handleClickClose, listOfConnectedUsers, userData }) {
  console.log(listOfConnectedUsers)
  return (
    <ContainerDataUsers role='group'>
      <ContainerCloseIcon>
        <CloseIcon onClick={handleClickClose} />
      </ContainerCloseIcon>
      <NameChatRoom>{userData.room}</NameChatRoom>
      <NumberUsersConnected number={listOfConnectedUsers.length} />
    </ContainerDataUsers>
  )
}

export default DataUsers
