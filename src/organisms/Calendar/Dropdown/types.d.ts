interface AssociatedResource {
  id: number
}

interface Course {
  id: number
  name: string
}

interface FormattedDate {
  start: string
  hours: string
}

interface Event {
  id: number
  course_id: number
  start: string
  end: string
  associated_resource: AssociatedResource
  course: Course
  formatedDate: FormattedDate
}

export type Events = Event[]

export interface Text {
  buttonCalendar: string
  course: string
  empty: string
  events: {
    today: string
    tomorrow: string
    next: string
  }
  header: string
  loading: string
  tooltip: string
}

interface ICalendarDropdown {
  courseColors?: Record<string, string>
  events: any
  loading?: boolean
  now: string
  redirectToCalendar: () => void
  text: Text
}
