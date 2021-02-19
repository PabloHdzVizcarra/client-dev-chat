import React from 'react'
import { render, screen } from '@testing-library/react'
import SelectRoomTemplate from './SelectRoomTemplate'

describe('test in SelectRoomTemplate component', () => {
  test('should display an informational text fi the user does not have an assigned char room', () => {
    render(<SelectRoomTemplate />)

    const messageNotChatRoom = screen.getByText(/no haz creado ninguna/i)

    expect(messageNotChatRoom).toBeInTheDocument()
  })
})
