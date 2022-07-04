import { render, screen } from '@testing-library/react'

import { TinyAlert } from './TinyAlert'

describe('<TinyAlert />', () => {
  test('info label', () => {
    render(<TinyAlert status="info" />)

    expect(screen.getByText('Info')).toBeInTheDocument()
    expect(screen.queryByTestId('TinyAlert-Box')).toHaveStyle(
      'background: vars colors-neutral-darkCharcoal'
    )
  })
  test('error label', () => {
    render(<TinyAlert status="error" />)

    expect(screen.getByText('Error')).toBeInTheDocument()
    expect(screen.getByTestId('TinyAlert-Box')).toHaveStyle(
      'background: vars colors-alert-veryLightPinkThree'
    )
  })
  test('warning label', () => {
    render(<TinyAlert status="warning" />)

    expect(screen.getByText('Warning')).toBeInTheDocument()
    expect(screen.getByTestId('TinyAlert-Box')).toHaveStyle(
      'background: vars colors-neutral-darkCharcoal'
    )
  })
  test('success label', () => {
    render(<TinyAlert status="success" />)

    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByTestId('TinyAlert-Box')).toHaveStyle('background: vars colors-alert-ice')
  })
  test('with text', () => {
    render(<TinyAlert status="info" text="Hola" />)
    expect(screen.getByText('Hola')).toBeInTheDocument()
    expect(screen.queryByText('Info')).not.toBeInTheDocument()
  })
})
