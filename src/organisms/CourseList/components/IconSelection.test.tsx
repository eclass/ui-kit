import { render } from '@testing-library/react'

import { Progress } from '@atoms'
import { Certificate, CircularCheck, CircularInformation, Schedule } from '@icons'
import { IconSelection } from './IconSelection'

// Compara el HTML de IconSelection con el del ícono renderizado directamente
const htmlOf = (ui: JSX.Element): string => render(ui).container.innerHTML

describe('IconSelection', () => {
  test.each([
    ['schedule', <Schedule key="schedule" />],
    ['certificate', <Certificate key="certificate" />],
    ['circularCheck', <CircularCheck key="circularCheck" />],
    ['circularInformation', <CircularInformation key="circularInformation" />],
    ['info', <CircularInformation key="info" />],
  ])('el tipo %s renderiza su ícono', (type, icon) => {
    expect(htmlOf(<IconSelection type={type} />)).toBe(htmlOf(icon))
  })

  test('el tipo progress renderiza Progress con el valor recibido', () => {
    expect(htmlOf(<IconSelection type="progress" progressValue={40} />)).toBe(
      htmlOf(<Progress value={40} />)
    )
  })

  test('el tipo progress usa 0 si no recibe valor', () => {
    expect(htmlOf(<IconSelection type="progress" />)).toBe(htmlOf(<Progress value={0} />))
  })

  test('un tipo desconocido no renderiza nada', () => {
    const { container } = render(<IconSelection type="otro" />)

    expect(container).toBeEmptyDOMElement()
  })
})
