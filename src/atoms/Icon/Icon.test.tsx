import { render, screen } from '@testing-library/react'

import { Icon } from './Icon'
import { icons, IconName } from './registry'

describe('<Icon>', () => {
  test.each(Object.keys(icons) as IconName[])('renderiza el ícono %s', (name) => {
    render(<Icon name={name} />)
    expect(screen.getByTestId(`icon-${name}`).tagName).toBe('svg')
  })

  test('usa el viewBox por defecto del ícono', () => {
    render(<Icon name="close" />)
    expect(screen.getByTestId('icon-close')).toHaveAttribute('viewBox', '0 0 12 12')
  })

  test('usa 0 0 16 16 si el ícono no define viewBox', () => {
    render(<Icon name="calendar" />)
    expect(screen.getByTestId('icon-calendar')).toHaveAttribute('viewBox', '0 0 16 16')
  })

  test('el viewBox por props sobrescribe el del ícono', () => {
    render(<Icon name="close" viewBox="0 0 24 24" />)
    expect(screen.getByTestId('icon-close')).toHaveAttribute('viewBox', '0 0 24 24')
  })

  test('el fill por props sobrescribe el color del ícono', () => {
    render(<Icon name="calendar" fill="rgb(255, 0, 0)" />)
    expect(screen.getByTestId('icon-calendar')).toHaveStyle({ color: 'rgb(255, 0, 0)' })
  })

  test('no renderiza nada con un nombre inexistente', () => {
    // @ts-expect-error nombre fuera del registro, como podría llegar desde JavaScript
    const { container } = render(<Icon name="noExiste" />)
    expect(container).toBeEmptyDOMElement()
  })
})
