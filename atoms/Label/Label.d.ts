/// <reference types="react" />
export interface LabelProps {
    children: React.ReactChild;
    bg?: string;
    color?: string;
    size?: 'md' | 'sm';
    m?: string;
}
/**
 * Componente Label
 * @example <Label>Etiqueta</Label>
 */
export declare function Label({ children, bg, color, size, m, }: LabelProps): JSX.Element;
