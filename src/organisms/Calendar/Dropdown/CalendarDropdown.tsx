import { CalendarDropdownContainer } from './CalendarDropdown/CalendarDropdownContainer'
import { ICalendarDropdown } from './types'

export const CalendarDropdown = ({
  courseColors,
  events,
  loading,
  m,
  now,
  onlyToCalendar = false,
  redirectToCalendar,
  text,
  alert = false,
}: ICalendarDropdown): JSX.Element => {
  const date = new Date(now)
  const isoDate = date.toISOString()

  return (
    <CalendarDropdownContainer
      courseColors={courseColors}
      events={events}
      loading={loading}
      m={m}
      now={isoDate}
      onlyToCalendar={onlyToCalendar}
      redirectToCalendar={redirectToCalendar}
      text={text}
      alert={alert}
    />
  )
}
