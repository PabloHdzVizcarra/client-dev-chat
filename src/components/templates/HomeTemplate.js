import useChat from '../../hooks/useChat/useChat'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 80% 5%;
  height: 100vh;
  background-color: #a0dbde;
`

const Paragraph = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 20px 0 0 0;
`

const FlexContainer = styled.div`
  display: flex;
  background-color: #32bdc4;
  padding: 5px;
`

const ContainerMessages = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0a8086;
  overflow: auto;
  padding: 10px;
`

const InputText = styled.input`
  height: 100%;
  width: 90%;
`

const Button = styled.button`
  width: 10%;
  height: 110%;
  border-radius: 6px;
  margin-left: 5px;
  padding: 0;
  border: none;
`

const Message = styled.div`
  padding: 5px;
  background-color: beige;
  margin: 2px 0;
  border-radius: 6px;
  width: max-content;
`

const HomeTemplate = ({ roomID }) => {

  const { messages, sendMessage } = useChat(roomID)
  const [newMessage, setNewMessage] = useState('')

  const handleNewMessage = event => {
    setNewMessage(event.target.value)
  }

  const handleSendMessage = () => {
    sendMessage(newMessage)
    setNewMessage('')
  }
  return (
    <Container>
      <FlexContainer>
        <Paragraph>{`Room: ${roomID}`}</Paragraph>
      </FlexContainer>
      <ContainerMessages>
        {messages.map(message => (
          <Message
            key={Date.now()}
          >
            {message.body}
          </Message>
        ))}
      </ContainerMessages>
      <FlexContainer>
        <InputText
          value={newMessage}
          onChange={handleNewMessage}
          placeholder='Write message...'
        />

        <Button
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </FlexContainer>
    </Container>
  )
}

export default HomeTemplate