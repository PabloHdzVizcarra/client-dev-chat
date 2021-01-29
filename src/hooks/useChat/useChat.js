import { io } from 'socket.io-client'
import { useEffect, useRef, useState } from 'react'

const NEW_CHAT_MESSAGE_EVENT = 'newMessage'
const SOCKET_SERVER_URL = 'http://0.0.0.0:3002'

const useChat = (roomId) => {
  const [messages, setMessages] = useState([])
  const socket = useRef(io)

  useEffect(() => {
    socket.current = io(SOCKET_SERVER_URL, {
      query: { roomId }
    })

    socket.current.on(NEW_CHAT_MESSAGE_EVENT, message => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socket.current.id
      }
      setMessages(messages => [...messages, incomingMessage])
    })

  }, [roomId])

  const sendMessage = messageBody => {
    socket.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socket.current.id
    })
  }

  return { messages, sendMessage }
}

export default useChat