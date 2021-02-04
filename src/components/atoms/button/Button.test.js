import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('test a Button component', () => {
  test('should render component correctly', () => {
    render(<Button textButton={'save'} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  test('should display the text passed as prop textButton inside the button element', () => {
    render(<Button textButton={'save'} />)
    expect(screen.getByRole('button')).toHaveTextContent('save')
  })
  test('must call the handleClick function passed as prop when the button is pressed', () => {
    const handleClick = jest.fn()
    render(<Button textButton={'save'} handleClick={handleClick} />)

    // click button
    userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
