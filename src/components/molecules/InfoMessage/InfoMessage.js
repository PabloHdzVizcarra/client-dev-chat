import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: fixed;
  padding: 0.8rem;
  margin: 8px;
  right: 1px;
  top: 1px;
  border-radius: 8px;
  background-color: rgba(255, 186, 0, 0.4);
  width: auto;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const Paragraph = styled.p`
  margin: 0;
  color: #423f3f;
  font-size: 1rem;
`

function InfoMessage({ text, displayTime = 1000 }) {
  const [display, setDisplay] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setDisplay(false)
    }, displayTime)
    return () => {
      setDisplay(false)
    }
  }, [displayTime])

  if (!display) {
    return null
  }

  return (
    <Container>
      <Paragraph>{text}</Paragraph>
    </Container>
  )
}

InfoMessage.propTypes = {
  text: PropTypes.string.isRequired,
  displayTime: PropTypes.number,
}

export default InfoMessage
