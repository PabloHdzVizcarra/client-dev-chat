import React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import HomeTemplate from './HomeTemplate'
import userEvent from '@testing-library/user-event'

describe('test in HomeTemplate component', () => {
  const userData = {
    username: 'john',
    room: 'developers',
    colorUser: '#ffffff',
  }
  test('should show the following items when the component is mounted', () => {
    render(<HomeTemplate userData={userData} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should show the following items when the info_message event completes successfully', async () => {
    render(<HomeTemplate userData={userData} />)
    const info = await screen.findByText(/welcome to room/)

    expect(info).toBeInTheDocument()
    expect(screen.getByText(userData.room)).toBeInTheDocument()
    expect(
      screen.getAllByText(userData.username.slice(0, 2))[0],
    ).toBeInTheDocument()
  })

  test('should disappear alert', async () => {
    render(<HomeTemplate userData={userData} />)
    const info = await screen.findByText(/welcome to room/)
    await waitForElementToBeRemoved(
      () => screen.queryByText(/welcome to room/),
      { timeout: 2000 },
    )
    expect(info).not.toBeInTheDocument()
  })
  test('error input, when write text in input AlertInfo componente is not should', async () => {
    render(<HomeTemplate userData={userData} />)
    await screen.findByText(/welcome to room/)
    await waitForElementToBeRemoved(
      () => screen.queryByText(/welcome to room/),
      { timeout: 2000 },
    )
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'hello')
    expect(screen.queryByText(/welcome/)).not.toBeInTheDocument()
  })
})
