import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormRegister from './FormRegister'

describe('test FormRegister component', () => {
  test('should contain the required HTML elements', () => {
    const values = {
      username: '',
      room: '',
    }
    const handleSubmit = jest.fn()
    const setColorUser = jest.fn()
    const handleChange = jest.fn()
    render(
      <FormRegister
        handleSubmit={handleSubmit}
        setColorUser={setColorUser}
        handleChange={handleChange}
        values={values}
      />,
    )

    expect(screen.getAllByRole('textbox')).toHaveLength(3)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('function handleChange must be called when the change event of inputs is triggered, because the user changes its value', () => {
    const values = {
      username: '',
      room: '',
    }
    const handleSubmit = jest.fn()
    const setColorUser = jest.fn()
    const handleChange = jest.fn()
    render(
      <FormRegister
        handleSubmit={handleSubmit}
        setColorUser={setColorUser}
        handleChange={handleChange}
        values={values}
      />,
    )

    const inputUserName = screen.getAllByRole('textbox')[0]
    userEvent.type(inputUserName, 'john')
    expect(handleChange).toHaveBeenCalled()

    handleChange.mockRestore()

    const inputRoomName = screen.getAllByRole('textbox')[1]
    userEvent.type(inputRoomName, 'devs')

    expect(handleChange).toHaveBeenCalled()
  })
  test('you must call handleSubmit function when you press the form button', () => {
    const values = {
      username: '',
      room: '',
    }
    const handleSubmit = jest.fn((e) => e.preventDefault())
    const setColorUser = jest.fn()
    const handleChange = jest.fn()
    render(
      <FormRegister
        handleSubmit={handleSubmit}
        setColorUser={setColorUser}
        handleChange={handleChange}
        values={values}
      />,
    )

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(handleSubmit).toHaveBeenCalled()
  })
})
