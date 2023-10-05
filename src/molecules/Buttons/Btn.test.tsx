import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Btn } from './Btn'
import { Profile } from '@icons'

const props = {
  onClick: jest.fn(),
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Btn', () => {
  const user = userEvent.setup()

  test('Btn can click', () => {
    const handleClick = jest.fn()
    render(<Btn onClick={handleClick}>Lorem</Btn>)
    const button = screen.getByText('Lorem')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('dafault', () => {
    render(<Btn />)
    expect(screen.getByText(/Button/)).toBeInTheDocument()
  })

  test('disabled', async () => {
    render(
      <Btn {...props} disabled>
        Lorem
      </Btn>,
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()

    await user.click(button)
    expect(props.onClick).toHaveBeenCalledTimes(0)
  })

  test('is loading', async () => {
    render(
      <Btn {...props} isLoading>
        Lorem
      </Btn>,
    )
    const button = screen.getByRole('button')
    expect(screen.getByTestId('loaderAsync')).toBeInTheDocument()
    expect(screen.queryByText(/Lorem/)).not.toBeVisible()

    await user.click(button)
    expect(props.onClick).toHaveBeenCalledTimes(0)
  })

  test('with icon', () => {
    render(<Btn leftIcon={<Profile />}>Lorem</Btn>)
    expect(screen.getByTitle('icon-profile')).toBeInTheDocument()
  })
})
