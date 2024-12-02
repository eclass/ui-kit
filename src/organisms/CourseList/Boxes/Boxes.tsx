import { ExtendAcademicList, WrapperCoursesProps } from '../types'
import { BoxTraditional } from './BoxTraditional'
import { BoxImage } from './BoxImage'

interface IBoxes {
  type: WrapperCoursesProps['typeBox']
  modalPaymentText: WrapperCoursesProps['modalPaymentText']
  data: ExtendAcademicList
  soonCourse?: WrapperCoursesProps['soonCourse']
}
export const Boxes = ({
  type = 'TRADITIONAL',
  data,
  modalPaymentText,
  soonCourse,
}: IBoxes): JSX.Element => {
  const common = { data, modalPaymentText, soonCourse }

  const commonImg = {
    data,
    backgroundImg: data.background ?? '',
    title: data.name ?? '',
  }

  const typeBox = {
    TRADITIONAL: <BoxTraditional {...common} />,
    TRADITIONAL_LANDSCAPE: <BoxTraditional {...common} />,
    IMAGE_LARGE: <BoxImage {...commonImg} />,
    IMAGE_SMALL: <BoxImage {...commonImg} size="small" />,
  }

  return typeBox[type]
}
