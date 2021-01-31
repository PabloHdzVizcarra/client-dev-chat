import React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import InfoMessage from './InfoMessage'

describe('Test in InfoMessage component', () => {
  test('the component must be rendered correctly', () => {
    const message = 'some message'
    render(<InfoMessage text={message} />)
    expect(screen.getByText(message)).toBeInTheDocument()
  })
  test('the component should disappear after the time elapsed as prop displayTime', async () => {
    const message = 'example message'
    const time = 1000
    render(<InfoMessage text={message} displayTime={time} />)

    // verify that the component is rendered correctly
    expect(screen.getByText(message)).toBeInTheDocument()

    // we verify that the component disappears after the time has passed
    await waitForElementToBeRemoved(screen.getByText(message))
    expect(screen.queryByText(message)).not.toBeInTheDocument()
  })
})
