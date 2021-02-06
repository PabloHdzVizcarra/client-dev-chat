import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Message, WrapperMessage } from '../../templates/home_template/styles'
import { v4 as uuidv4 } from 'uuid'
import checkAdminUser from '../../templates/home_template/helpers/check_admim_user'
import InputAndButtonForm from '../input-button-form/InputAndButtonForm'

const Container = styled.div`
  display: grid;
  grid-template-rows: 90% 10%;
  padding: 20px 10px;
  background-color: #ededed;
  margin: 30px 10px 30px 0;
  border-radius: 10px;
`

const MessagesArea = ({
  messages,
  username,
  setMessage,
  message,
  handleSubmitForm,
}) => {
  return (
    <Container>
      <p>messages</p>
      {messages.map((message) => (
        <WrapperMessage
          key={uuidv4()}
          admin={checkAdminUser(username, message.user)}
        >
          <Message key={uuidv4()}>{message.text}</Message>
        </WrapperMessage>
      ))}

      <InputAndButtonForm
        handleChange={setMessage}
        valueInput={message}
        handleSubmit={handleSubmitForm}
      />
    </Container>
  )
}

MessagesArea.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
}

export default MessagesArea
