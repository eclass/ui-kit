import * as Type from '../types';
interface ImageBoxProps {
    backgroundImg: string;
    title: string;
    data?: Type.AcademicList;
    size?: 'large' | 'small';
    m?: string;
}
export declare function BoxImage({ backgroundImg, title, data, size, m, }: ImageBoxProps): JSX.Element;
export declare namespace BoxImage {
    var displayName: string;
}
export {};
