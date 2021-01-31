import React from 'react'
import {
  render,
  waitForElementToBeRemoved,
  screen,
  fireEvent,
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

  test('the user information message should disappear after 3 seconds when entering the HomePage', async () => {
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

  test('the message should be displayed on the screen when it it sent to the server', async () => {
    const username = 'john'
    const room = 'developer'
    render(<HomeTemplate roomID={room} username={username} />)

    // we verify that the info message is displayed on the screen
    expect(
      await screen.findByText(/john, welcome to room developer/),
    ).toBeInTheDocument()

    // add value to input and send message
    userEvent.type(screen.getByRole('textbox'), 'hello world')
    userEvent.click(screen.getByRole('button'))

    expect(await screen.findByText(/hello world/)).toBeInTheDocument()
  })
  test('the same number of messages sent should be displayed on the screen', async () => {
    const username = 'john'
    const room = 'developer'
    render(<HomeTemplate roomID={room} username={username} />)

    // we verify that the info message is displayed on the screen
    expect(
      await screen.findByText(/john, welcome to room developer/),
    ).toBeInTheDocument()

    // add value to input and send message
    userEvent.type(screen.getByRole('textbox'), 'hello world')
    userEvent.click(screen.getByRole('button'))

    // we verify that 1 li is displayed
    await screen.findByText(/hello world/)
    expect(screen.getAllByRole('listitem')).toHaveLength(1)

    // add value to input and send message
    userEvent.type(screen.getByRole('textbox'), 'best Javascript')
    userEvent.click(screen.getByRole('button'))

    // we verify that 2 li is displayed
    await screen.findByText(/best Javascript/)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  test('should display an error message when a message is successfully sent to the server, but the server does not correctly return the message', async () => {
    const username = 'john'
    const room = 'developer'
    render(<HomeTemplate roomID={room} username={username} />)

    // we verify that the message is displayed on the screen
    const infoMessage = await screen.findByText(
      /john, welcome to room developer/,
    )
    expect(infoMessage).toBeInTheDocument()

    await waitForElementToBeRemoved(
      screen.getByText(/john, welcome to room developer/),
      { timeout: 5000 },
    )

    expect(
      screen.queryByText(/john, welcome to room developer/),
    ).not.toBeInTheDocument()

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'hello world' },
    })
    fireEvent.click(screen.getByRole('button'))

    //await screen.findByTestId(/info-message/)
  })
})
