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

  function handleClick() {
    console.log('click')
    setIsDisplay((state) => !state)
  }

  function handleClickClose() {}

  return (
    <ContainerUsersAreaMobile>
      <IconMessages onClick={handleClick} />
      {isDisplay ? <DataUsers handleClickClose={handleClickClose} /> : null}
    </ContainerUsersAreaMobile>
  )
}

export default UsersAreaMobile
