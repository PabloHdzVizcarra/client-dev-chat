import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  margin: 5px;
  border-radius: 10px;
  border: 0.5px solid #ededed;
  width: max-content;
  list-style: none;
  background-color: #436fc7;
  padding: 10px;
  color: #fff;
`

function Message({ text }) {
  return <Container>{text}</Container>
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Message
