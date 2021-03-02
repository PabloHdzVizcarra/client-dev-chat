import React from 'react'
import PropTypes from 'prop-types'
import { Paragraph } from './styles'
import styled from 'styled-components'

NumberUsersConnected.propTypes = {
  number: PropTypes.number.isRequired,
}

const ContainerNumberUsersConnected = styled.div`
  margin-bottom: 10px;
`

function NumberUsersConnected({ number }) {
  return (
    <ContainerNumberUsersConnected>
      <Paragraph>{`Usuarios ${number}`}</Paragraph>
    </ContainerNumberUsersConnected>
  )
}

export default NumberUsersConnected
