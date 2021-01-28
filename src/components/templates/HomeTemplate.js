import HeaderH1 from '../atoms/HeaderH1/HeaderH1'
import useChat from '../../hooks/useChat/useChat'
import { useState } from 'react'

const HomeTemplate = ({ roomID}) => {

  const { messages, sendMessage} = useChat(roomID)
  const [newMessage, setNewMessage] = useState('')

  const handleNewMessage = event => {
    setNewMessage(event.target.value)
  }

  const handleSendMessage = () => {
    sendMessage(newMessage)
    setNewMessage('')
  }
  return (
    <div>
      <HeaderH1 text={`Room: ${roomID}`}/>
      <ol>
        {messages.map(message => (
          <li
            key={Math.random()}
          >
            {message.body}
          </li>
        ))}
      </ol>

      <textarea
        value={newMessage}
        onChange={handleNewMessage}
        placeholder='Write message...'
      />

      <button
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
    )
}

export default HomeTemplate