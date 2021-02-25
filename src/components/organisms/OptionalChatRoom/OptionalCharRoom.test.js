import { render, screen } from '@testing-library/react'
import React from 'react'
import OptionalChatRoom from './OptionalChatRoom'
import userEvent from '@testing-library/user-event'

describe('test in OptionalChatRoom component', () => {
  test('should display button, when select option', async () => {
    const roomList = [
      { name: 'javascript' },
      { name: 'nodejs' },
      { name: 'typescript' },
    ]
    render(<OptionalChatRoom roomList={roomList} infoMessage={'select room'} />)

    const select = screen.getByRole('combobox')
    // select option nodejs
    userEvent.selectOptions(select, 'nodejs')
    // we make sure that only one option is selected
    expect(screen.getByText('javascript').selected).toBe(false)
    // we make sure that the selection is correct
    expect(screen.getByText('nodejs').selected).toBe(true)
    expect(screen.getByRole('combobox').value).toEqual('nodejs')

    expect(screen.queryByRole('button')).toBeInTheDocument()
  })
})
