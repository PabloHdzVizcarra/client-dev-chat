import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const ContainerUserInfo = styled.div`
  display: flex;
  background-color: #e4eaf7;
  border-radius: 4px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function UserInfo({ username, userColor }) {
  function shortName(username) {
    return username.slice(0, 2)
  }
  return (
    <ContainerUserInfo>
      <h2
        style={{
          backgroundColor: userColor,
          padding: '20px',
          borderRadius: '100%',
          textTransform: 'capitalize',
          fontSize: '3rem',
          margin: '5px 0 10px 0',
          color: '#fff',
        }}
      >
        {shortName(username)}
      </h2>
      <Paragraph
        text={username}
        styles={{
          fontSize: '2rem',
        }}
      />
    </ContainerUserInfo>
  )
}

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  userColor: PropTypes.string.isRequired,
}

export default UserInfo
