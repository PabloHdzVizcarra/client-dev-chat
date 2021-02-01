import React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import Expire from './Expire'
import InfoMessage from '../../molecules/InfoMessage/InfoMessage'

describe('test in Expire component', () => {
  test('should render component correctly', async () => {
    render(
      <Expire delay={1500}>
        <InfoMessage text={'render component'} />
      </Expire>,
    )

    // we expect the component to disappear
    expect(screen.getByText('render component')).toBeInTheDocument()
    await waitForElementToBeRemoved(screen.queryByText(/render component/), {
      timeout: 5000,
    })

    expect(screen.queryByText(/render component/)).not.toBeInTheDocument()
  })
})
