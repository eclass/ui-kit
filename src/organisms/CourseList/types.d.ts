import { AcademicBox } from '@eclass/api'

export type AcademicList = AcademicBox

interface PaymentText {
  title: string
  body: string
}

export interface WrapperCoursesProps {
  courses: AcademicList[]
  m?: string
  modalPaymentText: PaymentText
}

export interface FooterProps {
  modalPaymentText: PaymentText
}
