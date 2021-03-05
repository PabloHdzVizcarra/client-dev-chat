import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import styled from 'styled-components'

InfoUser.propTypes = {
  userName: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
}

const ContainerInfoUser = styled.div`
  display: flex;
  padding: 4px 0 4px 15px;
  align-items: center;
  background-color: #9cb8f0;
  margin: 2px 0;
  border-radius: 4px;
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

const CircleOff = styled.span`
  height: 8px;
  width: 8px;
  background-color: #ee0808;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`

function InfoUser({ userName, status }) {
  return (
    <ContainerInfoUser>
      {status ? <Circle /> : <CircleOff />}

      <Paragraph
        text={userName}
        styles={{
          margin: '0 5px 0 0',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
      />
    </ContainerInfoUser>
  )
}

export default InfoUser
