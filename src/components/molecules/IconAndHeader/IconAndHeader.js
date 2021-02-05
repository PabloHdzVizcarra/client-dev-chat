import React from 'react'
import { TiMessages } from 'react-icons/ti'
import HeaderH1 from '../../atoms/HeaderH1/HeaderH1'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
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
          fontFamily: 'Arvo',
          fontSize: '1.7rem',
        }}
      />
    </Container>
  )
}

export default IconAndHeader
