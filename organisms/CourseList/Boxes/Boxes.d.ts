import { AcademicList, WrapperCoursesProps } from '../types';
interface IBoxes {
    type: WrapperCoursesProps['typeBox'];
    modalPaymentText: WrapperCoursesProps['modalPaymentText'];
    data: AcademicList;
}
export declare const Boxes: ({ type, data, modalPaymentText }: IBoxes) => JSX.Element;
export {};
