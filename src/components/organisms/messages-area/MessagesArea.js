import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputAndButtonForm from '../input-button-form/InputAndButtonForm'
import MessageList from '../message-list/MessageList'

const Container = styled.div`
  display: grid;
  grid-template-rows: 90% 10%;
  padding: 20px 10px;
  background-color: #c9d6ef;
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
      <MessageList messages={messages} username={username} />

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
