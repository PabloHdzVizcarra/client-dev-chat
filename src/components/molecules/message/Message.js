import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import shortName from '../../templates/home_template/helpers/shortName'

const Container = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  flex-direction: ${(props) => (props.admin ? 'none' : 'row-reverse')};
`

const Paragraph = styled.p`
  font-weight: normal;
  font-size: ${(props) => (props.admin ? '1.2rem' : '1rem')};
  margin: 5px 15px;
  border-radius: 6px;
  width: max-content;
  list-style: none;
  background-color: ${(props) =>
    props.admin ? 'rgb(86,121,191)' : 'rgba(86,121,191, .8)'};
  padding: 15px 15px;
  color: #fff;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

function Message({ text, user, adminUser }) {
  function checkAdminUser(user, nameAdminUser) {
    return user === nameAdminUser
  }
  return (
    <Container admin={checkAdminUser(user, adminUser)}>
      <Paragraph admin={checkAdminUser(user, adminUser)}>{text}</Paragraph>
      <h2
        style={{
          alignItems: 'center',
          border: '1px solid rgb(0, 0, 0, 0.2)',
          borderRadius: '100%',
          display: 'flex',
          fontSize: '1.2rem',
          height: '35px',
          justifyContent: 'center',
          margin: '0 0 0 5px',
          padding: '5px',
          textTransform: 'capitalize',
          width: '35px',
          color: '#fff',
        }}
      >
        {user}
      </h2>
    </Container>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  adminUser: PropTypes.string.isRequired,
}

export default Message
