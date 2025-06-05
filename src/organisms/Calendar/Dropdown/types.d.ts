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
  associated_resource: AssociatedResource
  course: Course
  course_id: number
  end: string
  start: string
  formatedDate: FormattedDate
  id: number
  isNew?: boolean
  translatedTitle: string
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
  courseColors?: Record<string, string>
  events: any
  loading?: boolean
  m?: string
  now: string
  onlyToCalendar?: boolean
  redirectToCalendar: () => void
  text?: Text
}
