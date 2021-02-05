import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: fixed;
  margin: 10px;
  border-radius: 3px;
  padding: 10px;
  right: 10px;
  border: 1px solid rgb(238, 211, 215);
  background-color: rgb(242, 222, 222);
`

const Paragraph = styled.p`
  font-weight: normal;
  color: rgb(185, 74, 72);
  margin: 0;
`

const AlertError = ({ message }) => {
  return (
    <Container>
      <Paragraph>{message}</Paragraph>
    </Container>
  )
}

AlertError.propTypes = {
  message: PropTypes.string.isRequired,
}

export default AlertError
