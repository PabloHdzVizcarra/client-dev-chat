import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { IconMessages } from '../../templates/home_template/styles'

const ContainerUsersAreaMobile = styled.div`
  cursor: pointer;
`

UsersAreaMobile.propTypes = {}

function UsersAreaMobile() {
  return (
    <ContainerUsersAreaMobile>
      <IconMessages />
    </ContainerUsersAreaMobile>
  )
}

export default UsersAreaMobile
