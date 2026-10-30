import { render, screen } from '@testing-library/react'

import { Progress } from './Progress'

describe('Progress', () => {
  test.each([
    [35, '35'],
    [0, '0'],
    [100, '100'],
  ])('muestra el valor %i tal cual cuando está entre 0 y 100', (value, expected) => {
    render(<Progress value={value} />)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', expected)
  })

  test('limita a 100 los valores mayores', () => {
    render(<Progress value={150} />)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  test('limita a 0 los valores negativos', () => {
    render(<Progress value={-20} />)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })
})
