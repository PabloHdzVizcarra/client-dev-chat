import React from 'react'
import styled from 'styled-components'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import Button from '../../atoms/button/Button'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  background-color: #fff;
  padding: 5px;
  color: #12a8ff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
`

const H1AndButton = ({ room, handleClick }) => {
  return (
    <Container>
      <HeaderH1 text={`Chat Room: ${room}`} />
      <Button
        textButton={'close'}
        buttonStyles={{
          backgroundColor: '#e62c2c',
          color: '#ffffff',
          HBColor: '#b32222',
          fontSize: '.9rem',
        }}
        handleClick={handleClick}
      />
    </Container>
  )
}

H1AndButton.propTypes = {
  room: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
}

export default H1AndButton
