// import { AcademicBox } from '@eclass/api'
import { box } from './utils/dataFake'

export type AcademicList = box

export interface WrapperCoursesProps {
  courses: AcademicList[]
  m?: string
}
