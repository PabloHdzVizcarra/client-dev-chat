import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import {
  CloseIcon,
  ContainerCloseIcon,
  ContainerDataUsers,
  IconMessages,
} from '../../templates/home_template/styles'

const ContainerUsersAreaMobile = styled.div`
  cursor: pointer;
`

UsersAreaMobile.propTypes = {}
function DataUsers() {
  return (
    <ContainerDataUsers>
      <ContainerCloseIcon>
        <CloseIcon />
      </ContainerCloseIcon>
      data user
    </ContainerDataUsers>
  )
}

function UsersAreaMobile() {
  const [isDisplay, setIsDisplay] = React.useState(false)

  function handleClick() {
    console.log('click')
    setIsDisplay((state) => !state)
  }
  return (
    <ContainerUsersAreaMobile>
      <IconMessages onClick={handleClick} />
      {isDisplay ? <DataUsers /> : null}
    </ContainerUsersAreaMobile>
  )
}

export default UsersAreaMobile
