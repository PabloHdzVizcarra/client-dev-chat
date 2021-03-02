import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IconMessages } from '../../templates/home_template/styles'
import DataUsers from '../DataUsers'
import { CSSTransition } from 'react-transition-group'
import './animation.css'

const ContainerUsersAreaMobile = styled.div`
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
`

UsersAreaMobile.propTypes = {
  listOfConnectedUsers: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
}

function UsersAreaMobile({ listOfConnectedUsers, userData }) {
  const [isDisplay, setIsDisplay] = React.useState(false)
  const [showIcon, setShowIcon] = React.useState(true)
  const nodeRef = React.useRef(null)

  function handleAppearIcon() {
    setIsDisplay((state) => !state)
    setShowIcon((value) => !value)
  }

  function handleAppearMenu() {
    setIsDisplay((state) => !state)
    setShowIcon((value) => !value)
  }

  //TODO: animation enter component
  return (
    <ContainerUsersAreaMobile>
      {showIcon ? (
        <IconMessages onClick={handleAppearIcon} role='figure' />
      ) : null}
      <CSSTransition
        in={isDisplay}
        timeout={{ appear: 300, enter: 1000, exit: 500 }}
        classNames='my-node'
        unmountOnExit
        nodeRef={nodeRef}
      >
        <DataUsers
          handleClickClose={handleAppearMenu}
          userData={userData}
          listOfConnectedUsers={listOfConnectedUsers}
          nodeRef={nodeRef}
        />
      </CSSTransition>
    </ContainerUsersAreaMobile>
  )
}

export default UsersAreaMobile
