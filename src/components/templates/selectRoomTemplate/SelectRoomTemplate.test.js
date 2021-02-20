import React from 'react'
import { render, screen } from '@testing-library/react'
import SelectRoomTemplate from './SelectRoomTemplate'
import userEvent from '@testing-library/user-event'

describe('test in SelectRoomTemplate component', () => {
  test('should render correctly', () => {
    render(<SelectRoomTemplate listChatRooms={[]} setNameChatRoom={() => {}} />)

    const message1 = screen.getByText(/Ups al parecer/i)
    const message2 = screen.getByText(/puedes unirte a una sala existente/i)
    const buttonCreate = screen.getByRole('button', { name: /crear sala/i })

    expect(message1).toBeInTheDocument()
    expect(message2).toBeInTheDocument()
    expect(buttonCreate).toBeInTheDocument()
  })

  test('you must open a form by clicking on the button Crear Sala', () => {
    render(<SelectRoomTemplate listChatRooms={[]} setNameChatRoom={() => {}} />)

    const buttonCreate = screen.getByRole('button', { name: /crear sala/i })
    userEvent.click(buttonCreate)

    const input = screen.getByLabelText(/nombre de la sala/i)
    const buttonAdd = screen.getByRole('button', { name: /crear/i })
    const buttonClose = screen.getByRole('button', { name: /salir/i })

    expect(buttonCreate).not.toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(buttonAdd).toBeInTheDocument()
    expect(buttonClose).toBeInTheDocument()
  })
})
