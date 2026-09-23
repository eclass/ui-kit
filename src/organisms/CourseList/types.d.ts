import { AcademicBox } from '@eclass/api'

export type CourseClickPayload = AcademicBox & {
  soonCourse?: {
    show?: true
    text?: string
  }
}

export type ExtendAcademicList = CourseClickPayload & {
  /**
   * Ejecuta una acción personalizada al seleccionar la caja en lugar de navegar a `action.href`.
   * Recibe el objeto completo que se utilizó para renderizar la caja.
   */
  onClick?: (course: CourseClickPayload) => void
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
}

export interface FooterProps {
  modalPaymentText?: PaymentText
}
