import React from 'react'
import { render, screen } from '@testing-library/react'
import Message from './Message'

describe('tests in Message component', () => {
  const user = 'iron man'
  const text = 'hello world'
  const adminUser = 'iron man'
  const color = 'rgb(0, 0, 0)'
  test('should render correctly', () => {
    render(
      <Message user='iron' text='hello world' adminUser='iron' color={color} />,
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
  test('the value of the text prop should be displayed as content of the html p element', () => {
    render(
      <Message user={user} text={text} adminUser={adminUser} color={color} />,
    )

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text).nodeName).toBe('P')
  })
})
