import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import LoginTemplate from './LoginTemplate'

describe('test in LoginTemplate', () => {
  test('should display an alert message when the email field is not correctly filled in', async () => {
    render(
      <MemoryRouter>
        <LoginTemplate />
      </MemoryRouter>,
    )
    const inputUsername = screen.getAllByRole('textbox')[0]
    const submit = screen.getByRole('button')

    userEvent.type(inputUsername, '')
    userEvent.click(submit)

    const alert = await screen.findByText(/email que ingresaste/)
    expect(alert).toBeInTheDocument()
  })

  test('should display an alert message when the password field is not correctly filled in', async () => {
    render(
      <MemoryRouter>
        <LoginTemplate />
      </MemoryRouter>,
    )
    const inputUsername = screen.getByRole('textbox')
    const inputPassword = screen.getByTestId('input-password')
    const submit = screen.getByRole('button')

    userEvent.type(inputUsername, 'data@example.com')
    userEvent.type(inputPassword, '')
    userEvent.click(submit)

    const alert = await screen.findByText(/la password/i)
    expect(alert).toBeInTheDocument()
  })

  test('the alert should not appear when the 2 fields are filled successfully', async () => {
    render(
      <MemoryRouter>
        <LoginTemplate />
      </MemoryRouter>,
    )
    const inputUsername = screen.getByRole('textbox')
    const inputPassword = screen.getByTestId('input-password')
    const submit = screen.getByRole('button')

    userEvent.type(inputUsername, 'test@example.com')
    userEvent.type(inputPassword, '')
    userEvent.click(submit)

    const alert = await screen.findByText(/la password/i)
    expect(alert).toBeInTheDocument()

    userEvent.type(inputPassword, 'admin123')
    userEvent.click(submit)

    expect(screen.queryByText(/la password/)).not.toBeInTheDocument()
  })
})
