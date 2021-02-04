import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeTemplate from '../HomeTemplate'

describe('when the HomeTemplate component is rendered for the first time', () => {
  it('should shows header and button elements in top', () => {
    render(<HomeTemplate roomID={'webs'} username={'developer'} />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getAllByRole('button')[0]).toBeInTheDocument()
  })
  it('the header must the chat room name passed as a prop to the component within its text content', () => {
    render(<HomeTemplate roomID={'webs'} username={'john'} />)
    expect(
      screen.getByRole('heading').textContent.includes('webs'),
    ).toBeTruthy()
  })
  it('must show list and div element in the middle of the component', () => {
    render(<HomeTemplate roomID={'webs'} username={'developer'} />)
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByRole('list').nextSibling.nodeName).toBe('DIV')
  })
  it('must have a button and an input at the bottom of the component', () => {
    render(<HomeTemplate roomID={'webs'} username={'developer'} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getAllByRole('button')[1]).toBeInTheDocument()
  })
})

describe('when the component successfully connects to the server and the chat room is created successfully', () => {
  it('should shows a info message when the username', async () => {
    render(<HomeTemplate roomID={'developers'} username={'john'} />)
    const alert = await screen.findByText(/john, welcome/)
    expect(alert).toBeInTheDocument()
    expect(alert.textContent.includes('john')).toBeTruthy()
    expect(alert.nodeName).toBe('P')
  })
})
