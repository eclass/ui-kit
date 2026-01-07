import { render, screen, fireEvent } from '@testing-library/react'

import { Alert } from './Alert'

describe('Alert Component', () => {
  it('renders right message', () => {
    render(<Alert state="info">Test message</Alert>)

    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  it('displays a button and calls onClick callback when clicked', () => {
    const onClickMock = jest.fn()
    render(
      <Alert state="info" buttonText="Button text" onClick={onClickMock}>
        Test message
      </Alert>
    )
    expect(screen.getByText('Button text')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Button text'))
    expect(onClickMock).toHaveBeenCalled()
  })

  it('displays a button with an icon', () => {
    render(
      <Alert
        state="info"
        buttonText="Button text"
        onClick={() => {}}
        buttonIcon={<svg data-testid="icon" />}
      >
        Test message
      </Alert>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('calls onClick callback when dismiss button is clicked', () => {
    const onClickMock = jest.fn()
    render(
      <Alert state="info" canDismiss onClick={onClickMock}>
        Test message
      </Alert>
    )

    fireEvent.click(screen.getByTestId('closeButton'))
    expect(onClickMock).toHaveBeenCalled()
  })
})
