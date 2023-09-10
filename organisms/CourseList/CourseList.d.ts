import * as Type from './types';
export declare const columnGap = 1.25;
export declare const wCourse = 17.8125;
/**
 * Retorna listado de cursos.
 * @example
 *  <CourseList courses={courses} />
 *
 * Tener en cuenta el width del padre donde se pondra este componente, utilizar método maxWidthCoursesList
 * @see src/organisms/CourseList/maxWidthCoursesList.ts
 */
export declare function CourseList({ courses, modalPaymentText, m, typeBox, }: Type.WrapperCoursesProps): JSX.Element | null;
export declare namespace CourseList {
    var displayName: string;
}
