import { render, screen } from '@testing-library/react'
import { Link } from './Link'

test('Esto es una prueba del componente <Link />', () => {
  const text = 'Ameizing Link'
  render(<Link>{text}</Link>)

  // screen.debug()

  expect(screen.getByText(text)).toBeInTheDocument()
})
