import { render, screen } from '@testing-library/react'
import { Label } from './Label'

test('<Label>', () => {
  render(<Label>Obligatorio</Label>)
  expect(screen.getByText(/Obligatorio/)).toBeInTheDocument()
})
