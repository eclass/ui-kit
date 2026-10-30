/* eslint-disable testing-library/no-container, testing-library/no-node-access -- los ids de
   clipPath y mask son internos del SVG y no tienen consulta accesible */
import { render } from '@testing-library/react'

import { ArrowRight } from './ArrowRight'

describe('ArrowRight', () => {
  test('renderiza el SVG con su clip y su máscara enlazados', () => {
    const { container } = render(<ArrowRight />)

    const clipPath = container.querySelector('clipPath')
    const mask = container.querySelector('mask')
    expect(clipPath).toBeInTheDocument()
    expect(container.querySelector(`[clip-path="url(#${clipPath?.id ?? ''})"]`)).toBeInTheDocument()
    expect(container.querySelector(`[mask="url(#${mask?.id ?? ''})"]`)).toBeInTheDocument()
  })

  test('cada instancia usa ids únicos para no mezclar clips entre íconos', () => {
    const { container } = render(
      <>
        <ArrowRight />
        <ArrowRight />
      </>
    )

    const ids = Array.from(container.querySelectorAll('clipPath, mask')).map((el) => el.id)
    expect(new Set(ids).size).toBe(4)
  })
})
