import { AcademicBox } from '@eclass/api'

export type AcademicList = AcademicBox

interface PaymentText {
  title: string
  body: string
  buttonName: string
}

export interface WrapperCoursesProps {
  courses: AcademicList[]
  m?: string
  modalPaymentText?: PaymentText
  typeBox?: 'TRADITIONAL' | 'TRADITIONAL_LANDSCAPE' | 'IMAGE_LARGE' | 'IMAGE_SMALL'
}

export interface FooterProps {
  modalPaymentText?: PaymentText
}
