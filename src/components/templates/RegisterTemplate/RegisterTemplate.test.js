import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterTemplate from './RegisterTemplate'

describe('Test RegisterTemplate component', () => {
  test('should show correctly', () => {
    const submitForm = jest.fn()
    const setColorUser = jest.fn()
    render(
      <RegisterTemplate setColorUser={setColorUser} submitForm={submitForm} />,
    )

    // HTML elements that must be present
    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getAllByRole('textbox')).toHaveLength(3)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should display alert when first input not insert data correctly', () => {
    const submitForm = jest.fn()
    const setColorUser = jest.fn()
    render(
      <RegisterTemplate setColorUser={setColorUser} submitForm={submitForm} />,
    )
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
  test('if the length of the value inserted in the input username is not correct it should display the AlertError component', () => {
    const submitForm = jest.fn()
    const setColorUser = jest.fn()
    render(
      <RegisterTemplate setColorUser={setColorUser} submitForm={submitForm} />,
    )
    userEvent.type(screen.getAllByRole('textbox')[0], 'ia')
    userEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(submitForm).toHaveBeenCalled()
  })
  test('if the length of the value inserted in the input room name is not correct it should display the AlertError component', () => {
    const submitForm = jest.fn()
    const setColorUser = jest.fn()
    render(
      <RegisterTemplate setColorUser={setColorUser} submitForm={submitForm} />,
    )
    userEvent.type(screen.getAllByRole('textbox')[0], 'john')
    userEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('alert')).toBeInTheDocument()

    userEvent.type(screen.getAllByRole('textbox')[1], 'dat')
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(submitForm).toHaveBeenCalled()
  })
  test('should display the AlertError component when no color is chosen in the color palette', () => {
    const submitForm = jest.fn()
    const setColorUser = jest.fn()
    render(
      <RegisterTemplate setColorUser={setColorUser} submitForm={submitForm} />,
    )
    userEvent.type(screen.getAllByRole('textbox')[0], 'john')
    userEvent.type(screen.getAllByRole('textbox')[1], 'devs')
    userEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
