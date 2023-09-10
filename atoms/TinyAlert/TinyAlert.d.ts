export interface props {
    status: 'success' | 'error' | 'info' | 'warning' | 'answered' | 'pending' | 'omitted' | 'new';
    text?: string;
    margin?: string;
}
/**
 * Componente que retorna un label con distintos tipos de estado y muestra un texto por defecto en caso de que el mensaje no se especifique.
 *
 * @example
 * <TinyAlert status="info" />
 */
export declare function TinyAlert({ status, text, margin }: props): JSX.Element | null;
export declare namespace TinyAlert {
    var displayName: string;
}
