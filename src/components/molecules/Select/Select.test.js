import React from 'react'
import { render, screen } from '@testing-library/react'
import Select from './Select'
// import userEvent from '@testing-library/user-event'

describe('test in Select component', () => {
  test('should default display value', () => {
    render(<Select data={[]} />)
    const optionDefault = screen.getByRole('option')

    expect(optionDefault.selected).toEqual(true)
  })
  test('should display options same equal length to array passed as prop', () => {
    const rooms = ['developers', 'javascript', 'nodejs', 'typescript']
    render(<Select data={rooms} />)

    expect(screen.getAllByRole('option')).toHaveLength(rooms.length + 1)
  })
})
