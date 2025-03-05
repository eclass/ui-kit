import { CalendarDropdownContainer } from './CalendarDropdown/CalendarDropdownContainer'
import { ICalendarDropdown } from './types'

export const CalendarDropdown = ({
  redirectToCalendar,
  text,
  courseColors,
  now,
  events,
  loading,
}: ICalendarDropdown): JSX.Element => {
  const date = new Date(now)
  const isoDate = date.toISOString()

  return (
    <CalendarDropdownContainer
      events={events}
      loading={loading}
      now={isoDate}
      courseColors={courseColors}
      redirectToCalendar={redirectToCalendar}
      text={text}
    />
  )
}
