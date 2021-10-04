import { Box, useMediaQuery } from '@chakra-ui/react'

import { CourseBox } from './CourseBox'

interface WrapperCoursesProps {
  courses: any
  col?: number
  m?: string
  maxWContainer?: string
  wCourses?: string
}

export function CourseList({
  courses,
  col = 3,
  m = '0 auto',
  maxWContainer = '60rem',
  wCourses = '17.8125rem',
}: WrapperCoursesProps): JSX.Element | null {
  const ColumnGap = '1.875rem'
  const [col2, col3] = useMediaQuery([
    `(min-width: calc((${wCourses} * 2) + ${ColumnGap}))`,
    `(min-width: calc((${wCourses} * 3) + ${ColumnGap} * 2))`,
  ])
  const coursesNumber = courses.length

  let gridTemplateColumns = '1fr'
  if (col2 && !col3) {
    gridTemplateColumns = 'repeat(2, 1fr)'
  } else if (col3) {
    gridTemplateColumns = `repeat(auto-fit, minmax(${wCourses}, 1fr))`
    if (coursesNumber < col) {
      gridTemplateColumns = `repeat(3, 1fr)`
    }
  }

  if (coursesNumber === 0) {
    return null
  }

  return (
    <Box
      display="grid"
      gridColumnGap={ColumnGap}
      gridRowGap="2.5rem"
      gridTemplateColumns={gridTemplateColumns}
      m={m}
      maxW={maxWContainer}>
      {courses.map((course: any, index: number) => (
        <CourseBox key={index} data={course} />
      ))}
    </Box>
  )
}

CourseList.displayName = 'CourseList'
