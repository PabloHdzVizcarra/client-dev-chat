import React from 'react'
import { io } from 'socket.io-client'

let socket
export function useListenEvents(data) {
  const host = 'http://localhost:3100'
  const [messages, setMessages] = React.useState([])
  const [usersConnected, setUsersConnected] = React.useState([])
  const [infoMessage, setInfoMessage] = React.useState('')
  const [appear, setAppear] = React.useState(false)
  const { room, name } = data

  React.useEffect(() => {
    socket = io(host)
    socket.emit(
      'user-join',
      { chatRoom: room, username: name, email: data.email, color: data.color },
      (error) => {
        if (error) {
          alert(error)
        }
      },
    )

    fetch(`/api/messages/${room}`)
      .catch(console.log)
      .then((response) => response.json())
      .then((data) => {
        const { documents } = data
        if (!documents) return

        setMessages(documents)
      })

    return () => {
      socket.close()
    }
  }, [name, room, data])

  React.useEffect(() => {
    socket.on('text-message', (data) => {
      console.log('EVENTO text-message')
      if (!data.message) {
        return
      }
      setMessages((messages) => [...messages, data.message])
    })

    socket.on('room_data', (eventData) => {
      console.log('EVENTO room-data')
      const { users_connected } = eventData

      if (!room) {
        return
      }
      setUsersConnected(users_connected)
    })

    socket.on('info-message', (data) => {
      console.log('EVENTO info-message')
      const { text } = data
      setInfoMessage(text)
      setAppear(true)
    })

    socket.on('delete-current-room', () => {
      console.log('EVENTO delete-current-room')
    })
    socket.on('exit-room', () => {
      console.log('EVENTO exit-room   ')
    })

    return () => {
      setInfoMessage('')
    }
  }, [name, room, setMessages, data])

  return {
    socket,
    messages,
    usersConnected,
    infoMessage,
    appear,
    setAppear,
    setInfoMessage,
  }
}
