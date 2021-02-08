import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import shortName from '../../templates/home_template/helpers/shortName'

const Container = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  // flex-direction: row-reverse;
`

const Paragraph = styled.p`
  margin: 5px;
  border-radius: 10px;
  width: max-content;
  list-style: none;
  background-color: #436fc7;
  padding: 15px 15px;
  color: #fff;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

function Message({ text, user }) {
  return (
    <Container>
      <Paragraph>{text}</Paragraph>
      <h2
        style={{
          backgroundColor: '#ededed',
          padding: '5px',
          borderRadius: '100%',
          textTransform: 'capitalize',
          margin: '0 0 0 5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          width: '35px',
          height: '35px',
          border: '1px solid rgb(0, 0, 0, 0.2)',
        }}
      >
        {shortName(user)}
      </h2>
    </Container>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
}

export default Message
