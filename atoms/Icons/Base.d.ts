/// <reference types="react" />
export interface BaseProps {
    w?: string;
    h?: string;
    color?: string;
    m?: string;
    viewBox?: string;
}
interface IconProps extends BaseProps {
    viewBox?: string;
    children: React.ReactChild | React.ReactChild[];
    title?: string;
}
export declare function Base({ w, h, color, m, viewBox, children, title, }: IconProps): JSX.Element;
export {};
