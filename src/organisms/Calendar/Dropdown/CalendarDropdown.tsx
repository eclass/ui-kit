import { CalendarDropdownContainer } from './CalendarDropdown/CalendarDropdownContainer'
import { ICalendarDropdown } from './types'

export const CalendarDropdown = ({
  redirectToCalendar,
  text,
  courseColors,
  now,
  events,
  loading,
  onlyToCalendar = false,
  m,
}: ICalendarDropdown): JSX.Element => {
  const date = new Date(now)
  const isoDate = date.toISOString()

  return (
    <CalendarDropdownContainer
      m={m}
      events={events}
      loading={loading}
      now={isoDate}
      courseColors={courseColors}
      redirectToCalendar={redirectToCalendar}
      text={text}
      onlyToCalendar={onlyToCalendar}
    />
  )
}
