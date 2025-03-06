import { useState, useEffect } from 'react'
import { isAfter, parseISO, startOfDay, isSameDay, addDays } from 'date-fns'

const STORAGE_TODAY_EVENT = 'todayEvents'
const STORAGE_SEEN_EVENT = 'seenEvents'
const STORAGE_HAS_NEW = 'hasNewEvents'

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
} => {
  const [todayEvents, setTodayEvents] = useState<any[]>([])
  const [tomorrowEvents, setTomorrowEvents] = useState<any[]>([])
  const [nextEvents, setNextEvents] = useState<any[]>([])
  const [hasNew, setHasNew] = useState(false)

  useEffect(() => {
    const parseNow = parseISO(now)
    const today = startOfDay(parseNow)
    const tomorrow = addDays(today, 1)

    const storedTodayEvent: number[] = JSON.parse(localStorage.getItem(STORAGE_TODAY_EVENT) ?? '[]')
    const storedSeenEvent: number[] = JSON.parse(localStorage.getItem(STORAGE_SEEN_EVENT) ?? '[]')

    let newEvents = false
    const todayList: any[] = []
    const tomorrowList: any[] = []
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
      next = next.slice(0, 5)
    }
    setNextEvents(next)

    setHasNew(newEvents)

    localStorage.setItem(STORAGE_TODAY_EVENT, JSON.stringify(storedTodayEvent))
    localStorage.setItem(STORAGE_HAS_NEW, JSON.stringify(newEvents))
  }, [events, now])

  // Función para marcar todos los eventos de hoy como vistos
  const closeAndMarkSeen = (): void => {
    const storedSeenEvent: number[] = JSON.parse(localStorage.getItem(STORAGE_SEEN_EVENT) ?? '[]')
    const updatedSeenEvents = Array.from(
      new Set([...storedSeenEvent, ...todayEvents.map((e) => e.id)])
    )

    localStorage.setItem(STORAGE_SEEN_EVENT, JSON.stringify(updatedSeenEvents))
    localStorage.setItem(STORAGE_HAS_NEW, JSON.stringify(false))
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
  }
}
