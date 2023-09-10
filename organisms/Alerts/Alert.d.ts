import { IAlertProps } from './types.d';
/**
 * Componente de alerta embebida que puede tener 4 estados diferentes.
 * Opcionalmente puede llevar un botón. El botón puede mostrar sólo un texto
 * o un texto junto a un ícono.
 * @example Implementación de alerta con botón y margen
 * <Alert
 * state='info'
 * buttonName='Texto botón'
 * buttonIcon={<Multimedia />}
 * onClick={() => alert('hola')}
 * m='0 20px'>
 * Mensaje
 * </Alert>
 */
export declare function Alert({ children, canDismiss, buttonText, buttonIcon, buttonLink, isFlash, onClick, state, m, }: IAlertProps): JSX.Element;
