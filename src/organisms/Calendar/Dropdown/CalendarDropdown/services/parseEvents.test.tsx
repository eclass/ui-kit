import { act, fireEvent, render, screen } from '@testing-library/react'

import { useParseEvents } from './parseEvents'

// Fechas en hora local para que los grupos no dependan de la zona horaria
const NOW = '2026-03-10T10:00:00'

const event = (id: number, start: string): { id: number; start: string } => ({ id, start })

const TODAY = [event(1, '2026-03-10T08:00:00'), event(2, '2026-03-10T18:00:00')]
const TOMORROW = [event(3, '2026-03-11T09:00:00')]
const PAST = [event(4, '2026-03-09T23:00:00')]

const nextEvents = (count: number): Array<{ id: number; start: string }> =>
  Array.from({ length: count }, (_, i) => event(100 + i, `2026-03-${12 + i}T12:00:00`))

// Componente de prueba: muestra lo que devuelve el hook
const Harness = ({ events, now = NOW }: { events: any[]; now?: string }): JSX.Element => {
  const { today, tomorrow, next, hasNew, hasMoreNext, empty, closeAndMarkSeen } = useParseEvents(
    events,
    now
  )

  return (
    <>
      <output aria-label="hoy">
        {today.map((e) => `${String(e.id)}${e.isNew ? '*' : ''}`).join(',')}
      </output>
      <output aria-label="mañana">{tomorrow.map((e) => e.id).join(',')}</output>
      <output aria-label="próximos">{next.map((e) => e.id).join(',')}</output>
      <output aria-label="hasNew">{String(hasNew)}</output>
      <output aria-label="hasMoreNext">{String(hasMoreNext)}</output>
      <output aria-label="empty">{String(empty)}</output>
      <button type="button" onClick={closeAndMarkSeen}>
        Cerrar
      </button>
    </>
  )
}

const value = (name: string): string => screen.getByLabelText(name).textContent ?? ''

const storageJSON = (key: string): unknown => JSON.parse(localStorage.getItem(key) ?? 'null')

describe('useParseEvents', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  test('agrupa los eventos en hoy, mañana y próximos según now', () => {
    render(<Harness events={[...TODAY, ...TOMORROW, ...nextEvents(2)]} />)

    expect(value('hoy')).toBe('1*,2*')
    expect(value('mañana')).toBe('3')
    expect(value('próximos')).toBe('100,101')
    expect(value('empty')).toBe('false')
  })

  test('ignora los eventos anteriores a hoy', () => {
    render(<Harness events={[...PAST, ...TOMORROW]} />)

    expect(value('hoy')).toBe('')
    expect(value('mañana')).toBe('3')
    expect(value('próximos')).toBe('')
  })

  test('muestra como máximo 5 próximos eventos y avisa que hay más', () => {
    render(<Harness events={nextEvents(7)} />)

    expect(value('próximos')).toBe('100,101,102,103,104')
    expect(value('hasMoreNext')).toBe('true')
  })

  test('con 5 próximos eventos o menos no avisa que hay más', () => {
    render(<Harness events={nextEvents(5)} />)

    expect(value('próximos')).toBe('100,101,102,103,104')
    expect(value('hasMoreNext')).toBe('false')
  })

  test('marca como nuevos los eventos de hoy no vistos y lo guarda en localStorage', () => {
    render(<Harness events={TODAY} />)

    expect(value('hasNew')).toBe('true')
    expect(storageJSON('todayEvents')).toEqual([1, 2])
    expect(storageJSON('hasNewEvents')).toBe(true)
  })

  test('los eventos de hoy ya vistos no son nuevos', () => {
    localStorage.setItem('seenEvents', JSON.stringify([1, 2]))

    render(<Harness events={TODAY} />)

    expect(value('hoy')).toBe('1,2')
    expect(value('hasNew')).toBe('false')
    expect(storageJSON('hasNewEvents')).toBe(false)
  })

  test('no duplica en todayEvents los ids que ya estaban guardados', () => {
    localStorage.setItem('todayEvents', JSON.stringify([1]))

    render(<Harness events={TODAY} />)

    expect(storageJSON('todayEvents')).toEqual([1, 2])
  })

  test('closeAndMarkSeen marca como vistos los eventos de hoy y quita el aviso de nuevo', () => {
    vi.useFakeTimers()
    localStorage.setItem('seenEvents', JSON.stringify([50]))
    render(<Harness events={TODAY} />)

    fireEvent.click(screen.getByRole('button', { name: 'Cerrar' }))

    expect(value('hasNew')).toBe('false')
    expect(storageJSON('seenEvents')).toEqual([50, 1, 2])
    expect(storageJSON('hasNewEvents')).toBe(false)
    // El indicador de cada evento se quita después de 300 ms
    expect(value('hoy')).toBe('1*,2*')

    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(value('hoy')).toBe('1,2')
  })

  test.each([
    ['JSON inválido', '{no-es-json'],
    ['un valor que no es arreglo', '{"id":1}'],
  ])('si localStorage tiene %s lo trata como vacío', (_, stored) => {
    localStorage.setItem('seenEvents', stored)

    render(<Harness events={TODAY} />)

    expect(value('hoy')).toBe('1*,2*')
  })

  test('sigue funcionando si no puede escribir en localStorage', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError')
    })

    render(<Harness events={TODAY} />)

    expect(value('hoy')).toBe('1*,2*')
    expect(value('hasNew')).toBe('true')
  })
})
