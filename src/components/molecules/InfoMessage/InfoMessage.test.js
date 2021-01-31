import React from 'react'
import { render, screen } from '@testing-library/react'
import InfoMessage from './InfoMessage'

describe('Test in InfoMessage component', () => {
  test('the component must be rendered correctly', () => {
    const message = 'some message'
    render(<InfoMessage text={message} />)
    expect(screen.getByText(message)).toBeInTheDocument()
  })
})
