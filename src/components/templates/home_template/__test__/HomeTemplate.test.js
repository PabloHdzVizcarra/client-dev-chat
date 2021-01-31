import React from 'react'
import { render } from '@testing-library/react'
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
})
