import { useMediaQuery } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { NavBarButton } from './NavBarButton'

// Mock de useMediaQuery para poder simular mobile
vi.mock('@chakra-ui/react', async (importOriginal) => {
  const originalModule = await importOriginal<typeof import('@chakra-ui/react')>()
  return {
    ...originalModule,
    useMediaQuery: vi.fn(() => [false]),
  }
})

describe('NavBarButton', () => {
  const user = userEvent.setup()

  afterEach(() => {
    vi.mocked(useMediaQuery).mockReturnValue([false])
    document.body.innerHTML = ''
  })

  test.each([
    ['calendar', 'CALENDARIO'],
    ['help', 'AYUDA'],
    ['accessibility', 'ACCESIBILIDAD'],
  ] as const)('el tipo %s muestra el texto %s por defecto', (type, text) => {
    render(<NavBarButton type={type} />)

    expect(screen.getByRole('button', { name: text })).toBeInTheDocument()
  })

  test('muestra el buttonName recibido en lugar del texto por defecto', () => {
    render(<NavBarButton type="help" buttonName="Soporte" />)

    expect(screen.getByRole('button', { name: 'Soporte' })).toBeInTheDocument()
  })

  test('llama a onClick al hacer clic en calendar o help', async () => {
    const onClick = vi.fn()
    render(
      <>
        <NavBarButton type="calendar" onClick={onClick} />
        <NavBarButton type="help" onClick={onClick} />
      </>
    )

    await user.click(screen.getByRole('button', { name: 'CALENDARIO' }))
    await user.click(screen.getByRole('button', { name: 'AYUDA' }))

    expect(onClick).toHaveBeenCalledTimes(2)
  })

  test('accessibility usa el id UserWayButton y dispara #userWayTrigger en vez de onClick', async () => {
    const onClick = vi.fn()
    const onTrigger = vi.fn()
    const trigger = document.createElement('button')
    trigger.id = 'userWayTrigger'
    trigger.textContent = 'Widget UserWay'
    trigger.addEventListener('click', onTrigger)
    document.body.appendChild(trigger)

    render(<NavBarButton type="accessibility" onClick={onClick} />)
    const button = screen.getByRole('button', { name: 'ACCESIBILIDAD' })
    await user.click(button)

    expect(button).toHaveAttribute('id', 'UserWayButton')
    expect(onTrigger).toHaveBeenCalledTimes(1)
    expect(onClick).not.toHaveBeenCalled()
  })

  test('accessibility no falla si no existe #userWayTrigger', async () => {
    render(<NavBarButton type="accessibility" />)

    await expect(
      user.click(screen.getByRole('button', { name: 'ACCESIBILIDAD' }))
    ).resolves.toBeUndefined()
  })

  test('en mobile muestra solo el ícono, sin texto', () => {
    vi.mocked(useMediaQuery).mockReturnValue([true])

    render(<NavBarButton type="calendar" />)

    expect(screen.queryByText('CALENDARIO')).not.toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('se renderiza con el elemento indicado en as', () => {
    render(<NavBarButton as="div" type="help" />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getByText('AYUDA')).toBeInTheDocument()
  })
})
