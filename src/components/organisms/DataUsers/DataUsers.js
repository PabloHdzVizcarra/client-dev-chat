import React from 'react'
import { CloseIcon, ContainerCloseIcon, ContainerDataUsers } from './styles'
import PropTypes from 'prop-types'

DataUsers.propTypes = {
  handleClickClose: PropTypes.func.isRequired,
}
function DataUsers({ handleClickClose }) {
  return (
    <ContainerDataUsers role='group'>
      <ContainerCloseIcon>
        <CloseIcon onClick={handleClickClose} />
      </ContainerCloseIcon>
      data user
    </ContainerDataUsers>
  )
}

export default DataUsers
