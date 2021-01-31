import React from 'react'
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react'
import HomeTemplate from '../HomeTemplate'

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
})