import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CalendarDropdown } from './CalendarDropdown'
import { Event, Text } from './types'

// Mock de useMediaQuery para poder simular mobile
vi.mock('@chakra-ui/react', async (importOriginal) => {
  const originalModule = await importOriginal<typeof import('@chakra-ui/react')>()
  return {
    ...originalModule,
    useMediaQuery: vi.fn(() => [false]),
  }
})

// Fechas en hora local para que los grupos no dependan de la zona horaria
const NOW = '2026-03-10T10:00:00'

const buildEvent = (id: number, start: string, title: string): Event => ({
  id,
  associated_resource: { id, name: title },
  course: { id: 1, name: 'Economía' },
  course_id: 1,
  start,
  end: start,
  formatedDate: { day: 'martes', date: '10 marzo', time: '23:59 hrs.' },
  translatedTitle: title,
  type: 'evaluation-release',
  url: null,
})

const EVENTS = [
  buildEvent(1, '2026-03-10T18:00:00', 'Evento de hoy'),
  buildEvent(2, '2026-03-11T09:00:00', 'Evento de mañana'),
  buildEvent(3, '2026-03-12T09:00:00', 'Evento próximo'),
]

const CUSTOM_TEXT: Text = {
  buttonCalendar: 'Go to my calendar',
  course: 'Course',
  empty: 'No events yet',
  events: { today: 'Today', tomorrow: 'Tomorrow', next: 'Upcoming' },
  header: 'Upcoming important dates',
  loading: 'Loading',
  seeMore: { see: 'See more in', link: 'My calendar' },
  tooltip: 'Calendar',
}

const renderDropdown = (
  props: Partial<React.ComponentProps<typeof CalendarDropdown>> = {}
): { redirectToCalendar: ReturnType<typeof vi.fn> } => {
  const redirectToCalendar = vi.fn()
  render(
    <ChakraProvider>
      <CalendarDropdown
        events={EVENTS}
        now={NOW}
        redirectToCalendar={redirectToCalendar}
        {...props}
      />
    </ChakraProvider>
  )
  return { redirectToCalendar }
}

// El botón que abre el menú es el único con aria-expanded
const menuButton = (): HTMLElement => screen.getByRole('button', { expanded: false })

describe('CalendarDropdown', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    vi.mocked(useMediaQuery).mockReturnValue([false])
    document.body.innerHTML = ''
  })

  test('al abrir el menú muestra el encabezado y los eventos agrupados', async () => {
    renderDropdown()

    await user.click(screen.getByRole('button', { name: 'CALENDARIO' }))

    expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument()
    expect(screen.getByText('Próximas fechas importantes de tus cursos')).toBeInTheDocument()
    expect(screen.getByText('Hoy')).toBeInTheDocument()
    expect(screen.getByText('Mañana')).toBeInTheDocument()
    expect(screen.getByText('Próximos')).toBeInTheDocument()
    expect(screen.getByText('Evento de hoy')).toBeInTheDocument()
    expect(screen.getByText('Evento de mañana')).toBeInTheDocument()
    expect(screen.getByText('Evento próximo')).toBeInTheDocument()
  })

  test('el botón "Ir a Mi Calendario" llama a redirectToCalendar', async () => {
    const { redirectToCalendar } = renderDropdown()
    await user.click(menuButton())

    await user.click(screen.getByRole('button', { name: 'Ir a Mi Calendario' }))

    expect(redirectToCalendar).toHaveBeenCalledTimes(1)
  })

  test('abrir el menú no redirige al calendario', async () => {
    const { redirectToCalendar } = renderDropdown()

    await user.click(menuButton())

    expect(redirectToCalendar).not.toHaveBeenCalled()
  })

  test('mientras carga muestra el texto de carga', async () => {
    renderDropdown({ loading: true })
    await user.click(menuButton())

    expect(screen.getByText('Cargando')).toBeInTheDocument()
    expect(screen.queryByText('Evento de hoy')).not.toBeInTheDocument()
  })

  test('sin eventos muestra el mensaje de vacío', async () => {
    renderDropdown({ events: [] })
    await user.click(menuButton())

    expect(screen.getByText('Aún no tienes eventos en tu calendario')).toBeInTheDocument()
  })

  test('con más de 5 próximos eventos muestra el enlace a Mi calendario', async () => {
    const next = Array.from({ length: 6 }, (_, i) =>
      buildEvent(10 + i, `2026-03-${12 + i}T09:00:00`, `Próximo ${i + 1}`)
    )
    const { redirectToCalendar } = renderDropdown({ events: next })
    await user.click(menuButton())

    expect(screen.queryByText('Próximo 6')).not.toBeInTheDocument()
    expect(screen.getByText('Ver más fechas en')).toBeInTheDocument()
    await user.click(screen.getByText('Mi calendario'))
    expect(redirectToCalendar).toHaveBeenCalledTimes(1)
  })

  test('usa los textos recibidos por text', async () => {
    renderDropdown({ text: CUSTOM_TEXT })

    await user.click(screen.getByRole('button', { name: 'CALENDAR' }))

    expect(screen.getByText('Upcoming important dates')).toBeInTheDocument()
    expect(screen.getByText('Today')).toBeInTheDocument()
    expect(screen.getByText('Tomorrow')).toBeInTheDocument()
    expect(screen.getByText('Upcoming')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to my calendar' })).toBeInTheDocument()
  })

  test('usa los textos de carga y de vacío recibidos por text', async () => {
    renderDropdown({ text: CUSTOM_TEXT, loading: true })
    await user.click(menuButton())
    expect(screen.getByText('Loading')).toBeInTheDocument()

    document.body.innerHTML = ''
    renderDropdown({ text: CUSTOM_TEXT, events: [] })
    await user.click(menuButton())
    expect(screen.getByText('No events yet')).toBeInTheDocument()
  })

  test('con onlyToCalendar no abre el menú y el clic redirige al calendario', async () => {
    const { redirectToCalendar } = renderDropdown({ onlyToCalendar: true })

    await user.click(menuButton())

    expect(redirectToCalendar).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    expect(screen.queryByText('Evento de hoy')).not.toBeInTheDocument()
  })

  describe('indicador de eventos nuevos', () => {
    const container = (): HTMLElement =>
      // eslint-disable-next-line testing-library/no-node-access -- el indicador es un pseudo-elemento por clase
      document.querySelector('.calendarDropdown') as HTMLElement

    test('marca el botón con hasNew si hay eventos de hoy no vistos', () => {
      renderDropdown()

      expect(container()).toHaveClass('hasNew')
    })

    test('al cerrar el menú quita el indicador', async () => {
      renderDropdown()
      await user.click(menuButton())

      await user.keyboard('{Escape}')

      expect(container()).not.toHaveClass('hasNew')
      expect(JSON.parse(localStorage.getItem('seenEvents') ?? '[]')).toEqual([1])
    })

    test('no muestra el indicador con onlyToCalendar', () => {
      renderDropdown({ onlyToCalendar: true })

      expect(container()).not.toHaveClass('hasNew')
    })
  })

  describe('en mobile', () => {
    beforeEach(() => {
      vi.mocked(useMediaQuery).mockReturnValue([true])
    })

    test('oculta #ViewContainer mientras el menú está abierto', async () => {
      const viewContainer = document.createElement('div')
      viewContainer.id = 'ViewContainer'
      document.body.appendChild(viewContainer)
      renderDropdown()

      await user.click(menuButton())
      expect(viewContainer).toHaveStyle({ display: 'none' })

      await user.keyboard('{Escape}')
      expect(viewContainer).not.toHaveStyle({ display: 'none' })
    })

    test('sin #ViewContainer oculta el contenido que sigue al header dentro de .main', async () => {
      const main = document.createElement('div')
      main.className = 'main'
      main.innerHTML = '<div><header class="header"></header><section>Contenido</section></div>'
      document.body.appendChild(main)
      renderDropdown()

      await user.click(menuButton())
      expect(screen.getByText('Contenido')).toHaveStyle({ display: 'none' })

      await user.keyboard('{Escape}')
      expect(screen.getByText('Contenido')).not.toHaveStyle({ display: 'none' })
    })

    test('no falla si la página no tiene #ViewContainer ni .main', async () => {
      renderDropdown()

      await user.click(menuButton())

      expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument()
    })

    test('con onlyToCalendar no oculta el contenido de la página', async () => {
      const viewContainer = document.createElement('div')
      viewContainer.id = 'ViewContainer'
      document.body.appendChild(viewContainer)
      renderDropdown({ onlyToCalendar: true })

      await user.click(menuButton())

      expect(viewContainer).not.toHaveStyle({ display: 'none' })
    })
  })
})
