import React from 'react'
import PropTypes from 'prop-types'
import { Container, Paragraph, UserName } from './styles'

function Message({ text, user, adminUser }) {
  function checkAdminUser(user, nameAdminUser) {
    return user === nameAdminUser
  }
  return (
    <Container admin={checkAdminUser(user, adminUser)}>
      <UserName admin={checkAdminUser(user, adminUser)}>{user} </UserName>
      <Paragraph admin={checkAdminUser(user, adminUser)}>{text}</Paragraph>
    </Container>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  adminUser: PropTypes.string.isRequired,
}

export default Message
