import React from 'react'
import { render, screen } from '@testing-library/react'
import SelectRoomTemplate from './SelectRoomTemplate'
import userEvent from '@testing-library/user-event'

describe('test in SelectRoomTemplate component', () => {
  test('should display an informational text if the user does not have an assigned char room', async () => {
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

  test('should display an alert when the chat room name is invalid', async () => {
    render(<SelectRoomTemplate listChatRooms={[]} />)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    userEvent.type(input, 'dot')
    userEvent.click(button)

    await screen.findByText(/error/)
    screen.debug()
  })
})
