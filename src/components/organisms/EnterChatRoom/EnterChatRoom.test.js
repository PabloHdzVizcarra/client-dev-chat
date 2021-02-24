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

  test('button is hidden when deselected', () => {
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

    const select = screen.getByRole('combobox')

    userEvent.selectOptions(select, 'nodejs')
    expect(screen.getByRole('button')).toBeInTheDocument()

    userEvent.selectOptions(select, '-----')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  test('not change value to select', () => {
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
    expect(screen.getAllByRole('option')[2].selected).toBeTruthy()
    expect(screen.getAllByRole('option')[1].selected).toBeFalsy()
    expect(screen.getAllByRole('option')[0].selected).toBeFalsy()
    expect(screen.getAllByRole('option')[3].selected).toBeFalsy()
  })
})
