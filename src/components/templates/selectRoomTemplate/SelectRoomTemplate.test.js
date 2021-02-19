import React from 'react'
import { render, screen } from '@testing-library/react'
import SelectRoomTemplate from './SelectRoomTemplate'

describe('test in SelectRoomTemplate component', () => {
  test('should display an informational text if the user does not have an assigned char room', () => {
    render(<SelectRoomTemplate listChatRooms={[]} />)

    const messageNotChatRoom = screen.getByText(/no haz creado ninguna/i)

    expect(messageNotChatRoom).toBeInTheDocument()
  })

  test('should display a list of items if the listChatRooms prop is not empty', () => {
    const list = ['test', 'some', 'chat', 'room']
    render(<SelectRoomTemplate listChatRooms={list} />)

    const elements = screen.getAllByRole(/option/)

    expect(elements).toHaveLength(list.length)
  })
})
