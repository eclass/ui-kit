/// <reference types="react" />
export interface propsTertiaryBtn {
    iconStatus?: 'answer' | 'ahead' | 'back' | 'edit' | 'delete' | 'more' | 'password' | 'multimedia' | 'record' | 'download' | 'noIcon';
    children?: React.ReactNode;
    rightIcon?: boolean;
    withoutColor?: boolean;
    m?: string;
    type?: 'button' | 'submit' | 'reset';
    tabIndex?: number;
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
export declare function BtnTertiary({ children, iconStatus, rightIcon, withoutColor, m, type, tabIndex, id, onClick, }: propsTertiaryBtn): JSX.Element;
export declare namespace BtnTertiary {
    var displayName: string;
}
