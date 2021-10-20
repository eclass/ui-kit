import { ComponentStory, Meta } from '@storybook/react'

import { CourseList } from './CourseList'
import { dataFake, maxWidthCoursesList } from '.'

const Story: Meta = {
  title: 'organisms/CourseList',
  component: CourseList,
}

export default Story

const Template: ComponentStory<typeof CourseList> = (args) => (
  <div style={{ maxWidth: maxWidthCoursesList(4).rem }}>
    <CourseList {...args} />
  </div>
)

export const Simple = Template.bind({})
Simple.args = {
  courses: [dataFake[10]],
}

export const StatusPlatform = Template.bind({})
StatusPlatform.args = {
  courses: [
    dataFake[6],
    dataFake[7],
    dataFake[8],
    dataFake[9],
    dataFake[10],
    dataFake[11],
    dataFake[12],
    dataFake[13],
    dataFake[14],
    dataFake[15],
    dataFake[16],
    dataFake[17],
  ],
}

export const StatusCV = Template.bind({})
StatusCV.args = {
  courses: [
    dataFake[0],
    dataFake[1],
    dataFake[2],
    dataFake[3],
    dataFake[4],
    dataFake[5],
    dataFake[7],
    dataFake[8],
    dataFake[9],
    dataFake[10],
    dataFake[11],
    dataFake[12],
    dataFake[13],
  ],
}
