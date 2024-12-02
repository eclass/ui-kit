import { AcademicBox } from '@eclass/api'

export type ExtendAcademicList = AcademicBox & {
  show?: true
  text?: string
}

interface PaymentText {
  title: string
  body: string
  buttonName: string
}

export interface WrapperCoursesProps {
  /** Array de cursos a desplegar */
  courses: AcademicList[]

  /** Especificación de margen
   * @example m: '0 0 0 16px'
   */
  m?: string

  /** Objeto con información acerca del estado de pago del curso, que incluye 'title', 'body' y 'buttonName'.
   * @example
   *
   * modalPaymentTextArg = {
   * title: 'Curso congelado por pagos pendientes'
   * body: 'Para regularizar esta situación, comúnicate con ___'
   * buttonName: 'Entendido'
   * }
   */
  modalPaymentText?: PaymentText

  /** Especificación de tipo de caja curso a mostrar. Por default se muestra el tipo TRADITIONAL */
  typeBox?: 'TRADITIONAL' | 'TRADITIONAL_LANDSCAPE' | 'IMAGE_LARGE' | 'IMAGE_SMALL'
  soonCourse?: Sooncourse
}

export interface FooterProps {
  modalPaymentText?: PaymentText
}
