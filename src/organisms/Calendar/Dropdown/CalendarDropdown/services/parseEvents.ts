import { useState, useEffect } from 'react'
import { isAfter, parseISO, startOfDay, isSameDay, addDays } from 'date-fns'

const STORAGE_TODAY_EVENT = 'todayEvents'
const STORAGE_SEEN_EVENT = 'seenEvents'
const STORAGE_HAS_NEW = 'hasNewEvents'

// El dropdown guarda estado en localStorage para recordar:
// - todayEvents: ids de eventos que aparecieron hoy
// - seenEvents: ids de eventos de hoy que el usuario ya vio
// - hasNewEvents: bandera para mostrar el indicador visual de "nuevo"
const getStorage = (): Storage | null => {
  if (typeof window === 'undefined') return null

  try {
    return window.localStorage
  } catch {
    return null
  }
}

const readStorageArray = (key: string): number[] => {
  const storage = getStorage()
  if (!storage) return []

  try {
    const value = storage.getItem(key)
    if (!value) return []

    const parsed = JSON.parse(value)

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const writeStorageValue = (key: string, value: unknown): void => {
  const storage = getStorage()
  if (!storage) return

  try {
    storage.setItem(key, JSON.stringify(value))
  } catch {
    // Ignore storage write failures so the dropdown remains usable.
  }
}

export const useParseEvents = (
  events: any[],
  now: string
): {
  today: any[]
  tomorrow: any[]
  next: any[]
  hasNew: boolean
  closeAndMarkSeen: () => void
  empty: boolean
  hasMoreNext: boolean
} => {
  const [todayEvents, setTodayEvents] = useState<any[]>([])
  const [tomorrowEvents, setTomorrowEvents] = useState<any[]>([])
  const [nextEvents, setNextEvents] = useState<any[]>([])
  const [hasNew, setHasNew] = useState(false)
  const [hasMoreNext, setHasMoreNext] = useState(false)

  useEffect(() => {
    const parseNow = parseISO(now)
    const today = startOfDay(parseNow)
    const tomorrow = addDays(today, 1)

    const storedTodayEvent = readStorageArray(STORAGE_TODAY_EVENT)
    const storedSeenEvent = readStorageArray(STORAGE_SEEN_EVENT)

    let newEvents = false
    // todayList: eventos que ocurren hoy y pueden marcarse como nuevos/no vistos.
    const todayList: any[] = []
    // tomorrowList: eventos del dia siguiente, solo para agruparlos en la UI.
    const tomorrowList: any[] = []
    // nextList: eventos posteriores a manana; luego se limita a 5 para el dropdown.
    const nextList: any[] = []

    events.forEach((event) => {
      const eventStart = parseISO(event.start)
      if (isSameDay(eventStart, today)) {
        const seen = storedSeenEvent.includes(event.id)
        if (!seen) {
          newEvents = true
          if (!storedTodayEvent.includes(event.id)) {
            storedTodayEvent.push(event.id)
          }
        }
        todayList.push({ ...event, isNew: !seen })
      } else if (isSameDay(eventStart, tomorrow)) {
        tomorrowList.push(event)
      } else if (isAfter(eventStart, today)) {
        nextList.push(event)
      }
    })

    setTodayEvents(todayList)
    setTomorrowEvents(tomorrowList)

    let next = [...nextList]
    if (nextList.length > 5) {
      setHasMoreNext(true)
      next = next.slice(0, 5)
    } else {
      setHasMoreNext(false)
    }
    setNextEvents(next)

    setHasNew(newEvents)

    writeStorageValue(STORAGE_TODAY_EVENT, storedTodayEvent)
    writeStorageValue(STORAGE_HAS_NEW, newEvents)
  }, [events, now])

  // Función para marcar todos los eventos de hoy como vistos
  const closeAndMarkSeen = (): void => {
    const storedSeenEvent = readStorageArray(STORAGE_SEEN_EVENT)
    const updatedSeenEvents = Array.from(
      new Set([...storedSeenEvent, ...todayEvents.map((e) => e.id)])
    )

    writeStorageValue(STORAGE_SEEN_EVENT, updatedSeenEvents)
    writeStorageValue(STORAGE_HAS_NEW, false)
    setTimeout(() => {
      setTodayEvents(todayEvents.map((el) => ({ ...el, isNew: false })))
    }, 300)
    setHasNew(false)
  }

  const empty = false

  return {
    today: todayEvents,
    tomorrow: tomorrowEvents,
    next: nextEvents,
    hasNew,
    closeAndMarkSeen,
    empty,
    hasMoreNext,
  }
}
