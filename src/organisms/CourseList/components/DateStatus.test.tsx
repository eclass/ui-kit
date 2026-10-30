import { render, screen } from '@testing-library/react'

import { DateStatus } from './DateStatus'

describe('DateStatus', () => {
  test('muestra la fecha recibida', () => {
    render(<DateStatus date="Inicia el 12 de marzo" />)

    expect(screen.getByText('Inicia el 12 de marzo')).toBeInTheDocument()
  })

  test('no renderiza nada sin fecha', () => {
    const { container } = render(<DateStatus />)

    expect(container).toBeEmptyDOMElement()
  })

  test('no renderiza nada con una fecha vacía', () => {
    const { container } = render(<DateStatus date="" />)

    expect(container).toBeEmptyDOMElement()
  })
})
