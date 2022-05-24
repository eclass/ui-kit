import { Box } from '@chakra-ui/react'

import { CourseBox } from './CourseBox'
import * as Type from './types'

export const columnGap = 1.25 // 20px
export const wCourse = 17.8125 // 285px

/**
 * Retorna listado de cursos.
 * @example
 *  <CourseList courses={courses} />
 *
 * Tener en cuenta el width del padre donde se pondra este componente, utilizar método maxWidthCoursesList
 * @see src/organisms/CourseList/maxWidthCoursesList.ts
 */
export function CourseList({
  courses,
  m = '0 auto',
  onClick,
}: Type.WrapperCoursesProps): JSX.Element | null {
  if (courses === undefined) {
    return null
  }

  return (
    <Box
      display="grid"
      gridColumnGap={`${columnGap}rem`}
      gridRowGap="1.75rem"
      gridTemplateColumns={`repeat(auto-fill, minmax(${wCourse}rem, 1fr))`}
      m={m}
      w="100%"
    >
      {courses?.map((course: Type.AcademicList) => (
        <CourseBox key={course.id} data={course} onClick={onClick} />
      ))}
    </Box>
  )
}

CourseList.displayName = 'CourseList'
