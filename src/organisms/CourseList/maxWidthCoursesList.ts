import { columnGap, wCourse } from './CourseList'

interface payload {
  px: string
  rem: string
  remValue: number
}

/**
 * Obtine max-width que debe tener el wrapper de CourseList
 * @param {number} nCols Por defecto es 4
 * @example
 * maxWidthCoursesList()
 */
export const maxWidthCoursesList = (nCols: number = 4): payload => {
  const maxWidth = nCols * wCourse + columnGap * (nCols - 1)
  return {
    px: `${maxWidth * 16}px`,
    rem: `${maxWidth}rem`,
    remValue: maxWidth,
  }
}
