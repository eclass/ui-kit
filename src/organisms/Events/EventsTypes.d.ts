export interface EventosProps {
  typeEvent: 'SMALL_EVENTS' | 'LARGE_EVENTS' | string
  isMobile?: boolean
  itemsEvent: ItemsEventsProps
}

export interface ItemsEventsProps {
  id: string
  eventTitle: string
  startDate: string
  startTime: string
  buttonInfo: string
  redirect: string
  eventImage: string
  targetBlank?: boolean
  isMobile?: boolean
}
