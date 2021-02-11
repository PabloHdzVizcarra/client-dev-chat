import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/button/Button'
import { IoSendOutline } from 'react-icons/io5'

const Container = styled.div`
  display: flex;
  background-color: #41c7c7;
  padding: 5px;
  height: 80%;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
`

const IconAndButton = () => {
  return (
    <Container>
      <Button
        textButton='Enviar'
        buttonStyles={{
          width: 'max-content',
          backgroundColor: 'inherit',
          fontWeight: 'bold',
          height: '100%',
          color: '#fff',
        }}
      />
      <IoSendOutline
        style={{
          fontSize: '1.2rem',
          color: '#fff',
        }}
      />
    </Container>
  )
}

export default IconAndButton
