import { ChakraProvider } from '@chakra-ui/react'
import { fireEvent, render, screen } from '@testing-library/react'

import { CourseList } from './CourseList'
import { ExtendAcademicList, WrapperCoursesProps } from './types'
import { dataFake } from './utils'

const course = dataFake[0] as ExtendAcademicList

const renderCourseList = (
  courseData: ExtendAcademicList,
  typeBox: WrapperCoursesProps['typeBox'] = 'TRADITIONAL'
): ReturnType<typeof render> =>
  render(
    <ChakraProvider>
      <CourseList courses={[courseData]} typeBox={typeBox} />
    </ChakraProvider>
  )

describe.each(['TRADITIONAL', 'IMAGE_LARGE'] as const)('CourseList %s', (typeBox) => {
  it('calls the data onClick from the overlay with the full course and does not redirect', () => {
    const onClick = jest.fn()
    const courseWithOnClick = { ...course, onClick }
    renderCourseList(courseWithOnClick, typeBox)

    const overlay = screen.getByTestId('course-link-overlay')

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(overlay).not.toHaveAttribute('href')
    expect(fireEvent.click(overlay)).toBe(false)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(courseWithOnClick)
  })

  it('keeps the redirect href when the course does not provide onClick', () => {
    renderCourseList(course, typeBox)

    expect(screen.getByTestId('course-link-overlay')).toHaveAttribute('href', course.action?.href)
  })

  it('calls the custom action when the selectable box is activated with Enter', () => {
    const onClick = jest.fn()
    const courseWithOnClick = { ...course, onClick }
    renderCourseList(courseWithOnClick, typeBox)

    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' })

    expect(onClick).toHaveBeenCalledWith(courseWithOnClick)
  })
})
