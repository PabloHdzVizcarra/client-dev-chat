import React from 'react'
import { render, screen } from '@testing-library/react'
import UsersAreaMobile from './UsersAreaMobile'
import userEvent from '@testing-library/user-event'

describe('test in UsersAreaMobile Component', () => {
  test('should display menu when click icon', () => {
    render(<UsersAreaMobile />)

    const iconBtn = screen.getByRole('figure')
    userEvent.click(iconBtn)

    expect(screen.getByRole('group')).toBeInTheDocument()
    expect(screen.queryByRole('figure')).not.toBeInTheDocument()
  })
})
