import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  margin: 5px;
  border-radius: 10px;
  width: max-content;
  list-style: none;
  background-color: #436fc7;
  padding: 10px;
  color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

function Message({ text }) {
  return <Container>{text}</Container>
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Message
