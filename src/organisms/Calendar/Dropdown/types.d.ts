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

interface ICalendarDropdown {
  courseColors?: Record<string, string>
  events: any
  loading?: boolean
  now: string
  redirectToCalendar: () => void
  t?: Function
}
