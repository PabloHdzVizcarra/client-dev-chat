import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: block;
  padding: 12px 10px;
  margin: 6px;
  border-radius: 3px;
  border: 1px solid rgb(214, 233, 198);
  background-color: rgb(223, 240, 216);
  position: fixed;
  right: 10px;
  top: 10px;
`

const Text = styled.p`
  margin: 0;
  color: rgb(42, 123, 6);
`

function AlertInfo({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}

AlertInfo.propTypes = {
  text: PropTypes.string.isRequired,
}

export default AlertInfo
