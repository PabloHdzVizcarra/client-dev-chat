import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 30% 60%;
  padding: 30px;
`

const UsersArea = ({ nameChatRoom }) => {
  return (
    <Container>
      <HeaderH1 text={nameChatRoom} />

      <div>info user</div>

      <div>users connected</div>
    </Container>
  )
}

UsersArea.propTypes = {
  nameChatRoom: PropTypes.string.isRequired,
}

export default UsersArea
