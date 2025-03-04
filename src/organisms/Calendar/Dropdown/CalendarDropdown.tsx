import { CalendarDropdownContainer } from './CalendarDropdown/CalendarDropdownContainer'
import { ICalendarDropdown } from './types'

export const CalendarDropdown = ({redirectToCalendar, t, courseColors, now, events, loading }: ICalendarDropdown) => {
  const date = new Date(now)
  const isoDate = date.toISOString()

  return (
    <CalendarDropdownContainer
      events={events}
      loading={loading}
      now={isoDate}
      courseColors={courseColors}
      redirectToCalendar={redirectToCalendar}
      t={t}
    />
  )
}
