import { render, screen } from '@testing-library/react'
import { HelloWorld } from './HelloWorld'

test('Esto es una prueba del componente <HelloWorld />', () => {
  const name = 'World'
  render(<HelloWorld name={name} />)

  // screen.debug()

  expect(screen.getByText(`Hello ${name}`)).toBeInTheDocument()
})
