interface payload {
    px: string;
    rem: string;
    remValue: number;
}
/**
 * Obtine max-width que debe tener el wrapper de CourseList
 * @param {number} nCols Por defecto es 4
 * @example
 * maxWidthCoursesList()
 */
export declare function maxWidthCoursesList(nCols?: number): payload;
export {};
