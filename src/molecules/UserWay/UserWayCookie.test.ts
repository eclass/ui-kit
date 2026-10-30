import { UserWayCookie } from './UserWayCookie'

const COOKIE = 'userwayData'

const setCookie = (value: string): void => {
  document.cookie = `${COOKIE}=${value};path=/`
}

const readCookie = (): string | undefined =>
  document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${COOKIE}=`))
    ?.split('=')[1]

describe('UserWayCookie', () => {
  let unloadHandlers: EventListenerOrEventListenerObject[] = []

  beforeEach(() => {
    // Guarda los listeners de beforeunload para quitarlos al terminar cada prueba
    const addEventListener = window.addEventListener.bind(window)
    vi.spyOn(window, 'addEventListener').mockImplementation((type, listener, options) => {
      if (type === 'beforeunload') unloadHandlers.push(listener)
      addEventListener(type, listener, options)
    })
    vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    unloadHandlers.forEach((listener) => window.removeEventListener('beforeunload', listener))
    unloadHandlers = []
    vi.restoreAllMocks()
    localStorage.clear()
    document.cookie = `${COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  })

  test('restaura en localStorage los datos guardados en la cookie', () => {
    setCookie(encodeURIComponent(JSON.stringify({ 'userway-s1': 'on', 'userway-s2': '120' })))

    UserWayCookie()

    expect(localStorage.getItem('userway-s1')).toBe('on')
    expect(localStorage.getItem('userway-s2')).toBe('120')
  })

  test('sin cookie no toca localStorage', () => {
    UserWayCookie()

    expect(localStorage).toHaveLength(0)
  })

  test('con datos inválidos en la cookie registra el error y no falla', () => {
    setCookie('%7Bno-es-json')

    expect(() => UserWayCookie()).not.toThrow()
    expect(console.error).toHaveBeenCalled()
    expect(localStorage).toHaveLength(0)
  })

  test('antes de salir de la página guarda en la cookie solo las claves userway-*', () => {
    UserWayCookie()
    localStorage.setItem('userway-s1', 'on')
    localStorage.setItem('otra-clave', 'no')

    window.dispatchEvent(new Event('beforeunload'))

    const saved = JSON.parse(decodeURIComponent(readCookie() ?? ''))
    expect(saved).toEqual({ 'userway-s1': 'on' })
  })
})
