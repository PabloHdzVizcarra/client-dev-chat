import React from 'react'
import { TiMessages } from 'react-icons/ti'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 50px 0 50px;
  align-self: self-start;
`

const IconAndHeader = () => {
  return (
    <Container>
      <TiMessages
        style={{
          color: '#41C7C7',
          fontSize: '2rem',
          marginRight: '10px',
        }}
      />
      <HeaderH1
        text={'ONLY TALK'}
        styles={{
          fontSize: '2rem',
        }}
      />
    </Container>
  )
}

export default IconAndHeader
