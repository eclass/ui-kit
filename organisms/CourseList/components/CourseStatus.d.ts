import { ProgressCourse, StatusCourse } from '@eclass/api';
interface props {
    /** import { ProgressCourse } from '@eclass/api' */
    progress: ProgressCourse;
    /** import { StatusCourse } from '@eclass/api' */
    status?: StatusCourse;
}
/**
 * Devuelve estado en el que se encuentra el curso, por ejemplo:
 *
 * avance, inicio, curso aprovado, reprovado, finalizado
 */
export declare function CourseStatus({ progress, status }: props): JSX.Element;
export {};
