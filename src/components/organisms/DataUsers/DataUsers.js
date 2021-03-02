import React from 'react'
import {
  CloseIcon,
  ContainerCloseIcon,
  ContainerDataUsers,
  NameChatRoom,
} from './styles'
import PropTypes from 'prop-types'
import NumberUsersConnected from '../../atoms/NumberUsersConnected'
import UserListMobile from '../../molecules/UserListMobile'

DataUsers.propTypes = {
  handleClickClose: PropTypes.func.isRequired,
  listOfConnectedUsers: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
  nodeRef: PropTypes.any,
}

function DataUsers({
  handleClickClose,
  listOfConnectedUsers,
  userData,
  nodeRef,
}) {
  return (
    <ContainerDataUsers role='group' ref={nodeRef}>
      <ContainerCloseIcon>
        <CloseIcon onClick={handleClickClose} />
      </ContainerCloseIcon>
      <NameChatRoom>{userData.room}</NameChatRoom>
      <NumberUsersConnected number={listOfConnectedUsers.length} />
      <UserListMobile listOfConnectedUsers={listOfConnectedUsers} />
    </ContainerDataUsers>
  )
}

export default DataUsers
