import React from 'react'
import { render, screen } from '@testing-library/react'
import MessagesArea from './MessagesArea'

describe('test in MessagesArea component', () => {
  test('should show the correct number of messages', () => {
    const fakeMessages = [
      {
        owner_user: 'kratos',
        text: 'messages example',
        _id: '625d5c48-bded-4a2b-bca1-c6ff2544f461',
        created_at: new Date(),
      },
    ]
    render(
      <MessagesArea
        message=''
        setMessage={() => {}}
        handleSubmitForm={() => {}}
        messages={fakeMessages}
        username={'arthur'}
      />,
    )

    const ul = screen.getByRole('list')

    expect(ul).toBeInTheDocument()
    expect(ul.childElementCount).toEqual(1)
    expect(screen.getByText(/messages example/)).toBeInTheDocument()
  })
})
