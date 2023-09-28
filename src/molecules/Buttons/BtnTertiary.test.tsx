import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import { BtnTertiary } from './BtnTertiary'

const props = {
  onClick: jest.fn(),
  rightIcon: false,
  withoutColor: false,
  m: '0',
  tabIndex: 1,
  id: '1',
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('BtnTertiary', () => {
  const user = UserEvent.setup()

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
