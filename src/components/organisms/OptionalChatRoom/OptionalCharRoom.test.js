import { render, screen } from '@testing-library/react'
import React from 'react'
import OptionalChatRoom from './OptionalChatRoom'
import userEvent from '@testing-library/user-event'

describe('test in OptionalChatRoom component', () => {
  const roomList = [
    { name: 'javascript' },
    { name: 'nodejs' },
    { name: 'typescript' },
  ]
  const handleSetRoom = jest.fn(
    /**
     * @param {T} value
     */
    (value) => value,
  )
  test('should display button, when select option', async () => {
    render(
      <OptionalChatRoom
        roomList={roomList}
        infoMessage={'select room'}
        handleSetRoom={handleSetRoom}
      />,
    )

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

  test('hidden button when deselected option', () => {
    render(
      <OptionalChatRoom
        roomList={roomList}
        infoMessage={'select room'}
        handleSetRoom={handleSetRoom}
      />,
    )
    const select = screen.getByRole('combobox')
    // select option nodejs
    userEvent.selectOptions(select, 'nodejs')
    // we make sure that the selection is correct
    expect(screen.getByText('nodejs').selected).toBe(true)
    expect(screen.getByRole('combobox').value).toEqual('nodejs')

    // we remove the option
    userEvent.selectOptions(select, '-----')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  test('handleSetRoom function must be called with current value of the select', () => {
    const handleSetRoom = jest.fn(
      /**
       * @param {T} value
       */
      (value) => value,
    )
    render(
      <OptionalChatRoom
        roomList={roomList}
        infoMessage={'select room'}
        handleSetRoom={handleSetRoom}
      />,
    )
    const select = screen.getByRole('combobox')
    // select option nodejs
    userEvent.selectOptions(select, 'nodejs')

    //click button
    const button = screen.queryByRole('button')
    userEvent.click(button)

    expect(handleSetRoom).toHaveBeenCalledWith('nodejs')
  })
})
