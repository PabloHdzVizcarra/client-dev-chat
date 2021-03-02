import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import styled from 'styled-components'

InfoUser.propTypes = {
  userName: PropTypes.string.isRequired,
}

const ContainerInfoUser = styled.div`
  display: flex;
  padding: 2px 5px;
  align-items: center;
`

const Circle = styled.span`
  height: 8px;
  width: 8px;
  background-color: #3cb043;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 20px;

  box-shadow: 0 0 10px 4px greenyellow;
`

function InfoUser({ userName }) {
  return (
    <ContainerInfoUser>
      <Circle />
      <Paragraph
        text={userName}
        styles={{
          margin: '0 5px 0 0',
        }}
      />
    </ContainerInfoUser>
  )
}

export default InfoUser