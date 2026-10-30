import { columnGap, wCourse } from '../CourseList'
import { maxWidthCoursesList } from './maxWidthCoursesList'

describe('maxWidthCoursesList', () => {
  test('calcula el ancho para 4 columnas por defecto', () => {
    const expected = 4 * wCourse + 3 * columnGap

    expect(maxWidthCoursesList()).toEqual({
      px: `${expected * 16}px`,
      rem: `${expected}rem`,
      remValue: expected,
    })
  })

  test('calcula el ancho para el número de columnas recibido', () => {
    // 2 cursos de 17.8125rem + 1 separación de 1.25rem
    expect(maxWidthCoursesList(2)).toEqual({ px: '590px', rem: '36.875rem', remValue: 36.875 })
  })

  test('con una columna no suma separaciones', () => {
    expect(maxWidthCoursesList(1).remValue).toBe(wCourse)
  })
})
