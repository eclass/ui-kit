export function UserWayCookie(): void {
  const cookieName = 'userwayData'

  const userwayDataCookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split('=')[1]

  if (userwayDataCookie) {
    try {
      const userwayData = JSON.parse(decodeURIComponent(userwayDataCookie))
      for (const [key, value] of Object.entries(userwayData)) {
        localStorage.setItem(key, value as string)
      }
      console.log('UserWay data restored to localStorage:', userwayData)
    } catch (error) {
      console.error('Error parsing UserWay data from cookie:', error)
    }
  }

  window.addEventListener('beforeunload', () => {
    const userwayData: Record<string, string | null> = {}
    for (const key in localStorage) {
      if (key.startsWith('userway-')) {
        userwayData[key] = localStorage.getItem(key)
      }
    }

    const serializedData = JSON.stringify(userwayData)
    const expiryDate = new Date()
    expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000)

    document.cookie = `${cookieName}=${encodeURIComponent(
      serializedData
    )};expires=${expiryDate.toUTCString()};path=/`
  })
}
