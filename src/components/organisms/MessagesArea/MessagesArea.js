import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputAndButtonForm from '../input-button-form/InputAndButtonForm'
import MessageList from '../message-list/MessageList'
import { device } from '../../../utils/size'

const ContainerMessagesArea = styled.div`
  display: grid;
  grid-column: 1/3;
  grid-template-rows: 90% 10%;
  padding: 20px 10px;
  background-color: #c9d6ef;
  margin: 10px 10px 30px 0;
  border-radius: 4px;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    grid-column: 2/3;
  }
`

const MessagesArea = ({
  messages,
  username,
  setMessage,
  message,
  handleSubmitForm,
}) => {
  return (
    <ContainerMessagesArea>
      <MessageList messages={messages} username={username} />

      <InputAndButtonForm
        handleChange={setMessage}
        valueInput={message}
        handleSubmit={handleSubmitForm}
      />
    </ContainerMessagesArea>
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
