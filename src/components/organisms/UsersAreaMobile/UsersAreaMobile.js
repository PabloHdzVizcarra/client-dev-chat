import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { IconMessages } from '../../templates/home_template/styles'
import DataUsers from '../DataUsers'

const ContainerUsersAreaMobile = styled.div`
  cursor: pointer;
`

UsersAreaMobile.propTypes = {}

function UsersAreaMobile() {
  const [isDisplay, setIsDisplay] = React.useState(false)
  const [showIcon, setShowIcon] = React.useState(true)

  function handleAppearIcon() {
    setIsDisplay((state) => !state)
    setShowIcon((value) => !value)
  }

  function handleAppearMenu() {
    setIsDisplay((state) => !state)
    setShowIcon((value) => !value)
  }

  return (
    <ContainerUsersAreaMobile>
      {showIcon ? (
        <IconMessages onClick={handleAppearIcon} role='figure' />
      ) : null}
      {isDisplay ? <DataUsers handleClickClose={handleAppearMenu} /> : null}
    </ContainerUsersAreaMobile>
  )
}

export default UsersAreaMobile
