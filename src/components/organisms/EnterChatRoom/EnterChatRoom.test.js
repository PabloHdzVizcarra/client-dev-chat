import React from 'react'
import { render, screen } from '@testing-library/react'
import EnterChatRoom from './EnterChatRoom'
import userEvent from '@testing-library/user-event'

describe('test in EnterChatRoom component', () => {
  test('should call handleSelect function when change value', () => {
    const handler = jest.fn()
    render(
      <EnterChatRoom
        listChatRooms={[
          { name: 'developer' },
          { name: 'nodejs' },
          { name: 'amazon' },
        ]}
        handleSelect={handler}
      />,
    )

    userEvent.selectOptions(screen.getByRole('combobox'), 'nodejs')
    expect(handler).toHaveBeenCalled()
  })

  test('show display button when change select option', () => {
    const handler = jest.fn()
    render(
      <EnterChatRoom
        listChatRooms={[
          { name: 'developer' },
          { name: 'nodejs' },
          { name: 'amazon' },
        ]}
        handleSelect={handler}
      />,
    )

    userEvent.selectOptions(screen.getByRole('combobox'), 'nodejs')
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
