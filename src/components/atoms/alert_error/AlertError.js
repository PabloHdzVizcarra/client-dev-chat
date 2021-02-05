import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Container = styled.div`
  padding: 15px;
  border-radius: 6px;
  background-color: #c73954;
  margin: 10px 0;
  position: fixed;
`

const Paragraph = styled.p`
  font-weight: normal;
  color: #ffffff;
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
