interface AssociatedResource {
  id: number
  name: string
}

interface Course {
  id: number
  name: string
}

interface FormattedDate {
  day: string
  date: string
  time: string
}

export interface Event {
  id: number
  course_id: number
  start: string
  end: string
  associated_resource: AssociatedResource
  course: Course
  formatedDate: FormattedDate
  isNew?: boolean
  type: string
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
  seeMore: {
    see: string
    link: string
  }
  tooltip: string
}

interface ICalendarDropdown {
  m?: string
  courseColors?: Record<string, string>
  events: any
  loading?: boolean
  now: string
  redirectToCalendar: () => void
  text?: Text
  onlyToCalendar?: boolean
}
