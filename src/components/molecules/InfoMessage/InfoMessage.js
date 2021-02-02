import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: fixed;
  padding: 0.3rem 0.5rem;
  margin: 5px;
  right: 1px;
  top: 1px;
  background-color: #fff599;
  width: auto;
  text-align: center;
`

const Paragraph = styled.p`
  margin: 0;
  color: #423f3f;
  font-size: 1rem;
`

function InfoMessage({ text }) {
  return (
    <Container>
      <Paragraph>{text}</Paragraph>
    </Container>
  )
}

InfoMessage.propTypes = {
  text: PropTypes.string.isRequired,
}

export default InfoMessage
