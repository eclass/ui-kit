/// <reference types="react" />
export interface props {
    children?: React.ReactNode;
    m?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    id?: string;
}
export declare function BtnLink({ children, m, onClick, id }: props): JSX.Element;
export declare namespace BtnLink {
    var displayName: string;
}
