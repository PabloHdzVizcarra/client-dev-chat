import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeTemplate from '../HomeTemplate'

describe('when the HomeTemplate component is rendered for the first time', () => {
  it('should shows header and button elements in top', () => {
    render(<HomeTemplate roomID={'webs'} username={'developer'} />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getAllByRole('button')[0]).toBeInTheDocument()
  })
  it('must show list and div element in the middle of the component', () => {
    render(<HomeTemplate roomID={'webs'} username={'developer'} />)
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByRole('list').nextSibling.nodeName).toBe('DIV')
  })
  it('must have a button and an inputat the bottom of the component', () => {
    render(<HomeTemplate roomID={'webs'} username={'developer'} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getAllByRole('button')[1]).toBeInTheDocument()
  })
})
