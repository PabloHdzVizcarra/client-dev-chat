import React from 'react'
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react'
import HomeTemplate from '../HomeTemplate'
import userEvent from '@testing-library/user-event'

describe('test in HomeTemplate', () => {
  test('should display an information message, when the user enters the chat room, with his or her chosen username', async () => {
    const username = 'john'
    const { findByText } = render(
      <HomeTemplate roomID='developer' username={username} />,
    )
    expect(
      await findByText(/john, welcome to room developer/),
    ).toBeInTheDocument()
  })

  test('the user information message should disappear after 1.5 seconds when entering the HomePage', async () => {
    jest.setTimeout(6000)
    const username = 'john'
    const room = 'developer'
    render(<HomeTemplate roomID={room} username={username} />)

    const infoMessage = await screen.findByText(
      /john, welcome to room developer/,
    )
    expect(infoMessage).toBeInTheDocument()

    await waitForElementToBeRemoved(screen.queryByText(/welcome to room/), {
      timeout: 6000,
    })
    expect(screen.queryByText(/welcome/)).not.toBeInTheDocument()
  })

  test('the input to send messages should be cleared, when the message is successfully sent to the server', async () => {
    const username = 'john'
    const room = 'developer'
    render(<HomeTemplate roomID={room} username={username} />)

    // change input value
    userEvent.type(screen.getByRole('textbox'), 'hello world')
    userEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('textbox')).toHaveTextContent('')
  })

  test('the names of the users connected to the chat room should be displayed on the screen', async () => {
    render(<HomeTemplate roomID='devs' username='john' />)

    // the user's welcome message is displayed
    expect(await screen.findByText(/welcome to room/)).toBeInTheDocument()

    // the user name connected display on the screen
    expect(await screen.findByText('john')).toBeInTheDocument()
  })
})
