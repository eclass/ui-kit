import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UserWay } from './UserWay'

describe('UserWay', () => {
  const user = userEvent.setup()

  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('renderiza el botón con id UserWayButton y el ícono de accesibilidad', () => {
    render(<UserWay />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('id', 'UserWayButton')
    // eslint-disable-next-line testing-library/no-node-access -- el ícono es aria-hidden
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  test('al hacer clic dispara el botón #userWayTrigger del consumidor', async () => {
    const trigger = document.createElement('button')
    trigger.id = 'userWayTrigger'
    trigger.textContent = 'Widget UserWay'
    const onTrigger = vi.fn()
    trigger.addEventListener('click', onTrigger)
    document.body.appendChild(trigger)

    render(<UserWay />)
    // El botón de UserWay no tiene nombre accesible: se busca por su id
    // eslint-disable-next-line testing-library/no-node-access
    await user.click(document.getElementById('UserWayButton') as HTMLElement)

    expect(onTrigger).toHaveBeenCalledTimes(1)
  })

  test('no falla al hacer clic si no existe #userWayTrigger', async () => {
    render(<UserWay />)

    await expect(user.click(screen.getByRole('button'))).resolves.toBeUndefined()
  })
})
