import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BtnTertiary } from './BtnTertiary'
import { Multimedia } from '@/atoms/Icons'

const props = {
  onClick: jest.fn(),
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('BtnTertiary', () => {
  test('init', () => {
    render(
      <BtnTertiary leftIcon={<Multimedia />} {...props}>
        Lorem
      </BtnTertiary>
    )
    const button = screen.getByRole('button')
    expect(screen.getByText(/Lorem/)).toBeInTheDocument()
    expect(screen.getByTitle('icon-multimedia')).toBeInTheDocument()

    userEvent.click(button)
    expect(button).toHaveFocus()
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
