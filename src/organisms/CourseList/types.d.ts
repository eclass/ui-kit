import { AcademicBox } from '@eclass/api'

export type AcademicList = AcademicBox

export interface WrapperCoursesProps {
  courses: AcademicList[]
  m?: string
}
