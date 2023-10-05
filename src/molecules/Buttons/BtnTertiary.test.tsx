import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BtnTertiary } from './BtnTertiary'

const props = {
  onClick: jest.fn(),
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('BtnTertiary', () => {
  const user = userEvent.setup()

  test('init', async () => {
    render(<BtnTertiary {...props}>Lorem</BtnTertiary>)
    const button = screen.getByRole('button')
    expect(screen.getByText(/Lorem/)).toBeInTheDocument()
    expect(screen.getByTitle('icon-multimedia')).toBeInTheDocument()

    await user.click(button)
    expect(button).toHaveFocus()
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
