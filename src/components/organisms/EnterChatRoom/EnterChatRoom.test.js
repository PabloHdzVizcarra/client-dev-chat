import React from 'react'
import { render, screen } from '@testing-library/react'
import EnterChatRoom from './EnterChatRoom'
import userEvent from '@testing-library/user-event'

describe('test in EnterChatRoom component', () => {
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

  test('should change value to selected option', () => {
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

  test('dont should call function with select', () => {
    const handler = jest.fn(
      /**
       * @param {T} value
       */
      (value) => {
        return value
      },
    )
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

    expect(handler).not.toHaveBeenCalled()
  })

  test('should call function when click to button', () => {
    const handler = jest.fn(
      /**
       * @param {T} value
       */
      (value) => {
        return value
      },
    )
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
    userEvent.click(screen.getByRole('button'))

    expect(handler).toHaveBeenCalledWith('nodejs')
  })
})
