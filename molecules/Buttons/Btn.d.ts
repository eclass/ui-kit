/// <reference types="react" />
interface colorScheme {
    main: string;
    hover: string;
}
export interface propsBaseBtns {
    children?: React.ReactNode;
    disabled?: boolean;
    isFullWidth?: boolean;
    leftIcon?: React.ReactElement;
    m?: string;
    isLoading?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    rightIcon?: React.ReactElement;
    size?: 'regular' | 'small';
    type?: 'button' | 'submit' | 'reset';
    tabIndex?: number;
    id?: string;
}
interface props extends propsBaseBtns {
    bg?: colorScheme;
    /** Colores para el efecto del :active son necesarios dos */
    borderColorActive?: string[];
    color?: string;
    fillLoader?: string;
    rounded?: boolean;
    touchDark?: boolean;
}
/**
 * Componente Btn
 *
 * Dibuja un boton base que posee todo lo estipulado en
 * @see https://zeroheight.com/15698077d/p/358e93-buttons
 *
 * @example <Btn>Lorem</Btn>
 */
export declare function Btn({ bg, borderColorActive, children, color, disabled, fillLoader, isFullWidth, leftIcon, m, isLoading, onClick, rightIcon, rounded, size, touchDark, type, tabIndex, id, }: props): JSX.Element;
export declare namespace Btn {
    var displayName: string;
}
export {};
