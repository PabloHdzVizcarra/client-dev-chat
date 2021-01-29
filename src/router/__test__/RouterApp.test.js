import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import RouterApp from '../RouterApp'

describe('Test in RouterApp', () => {

  test('should render Login page when component state is empty', () => {
    const { getByRole, getAllByRole } = render(<RouterApp/>)
    expect(getByRole('heading')).toBeInTheDocument()
    expect(getAllByRole('textbox').length).toBe(2)
    expect(getByRole('button')).toBeInTheDocument()
  })

  test('should render the Home page, when the form is completed correctly', () => {
    const { getAllByRole, getByRole } = render(<RouterApp/>)
    const inputs = getAllByRole('textbox')
    const input_username = inputs[0]
    const input_room = inputs[1]
    const submit = getByRole('button')

    // the form is completed
    fireEvent.change(input_username, { target: { value: 'john' } })
    fireEvent.change(input_room, { target: { value: 'webs' } })
    fireEvent.click(submit)

    // with the completed form should display the Home page
    expect(getByRole('textbox'))
    expect(getByRole('button'))
  })
})