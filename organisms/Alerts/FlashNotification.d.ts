import { IFlashNotificationProps } from './types.d';
/**
 * Componente de notificación flash que se muestra centrada en la parte superior de la pantalla.
 * Para implementarlo, se usa en conjunto con el hook useFlashNotification.
 * @example Llamado useFlashNotification y asignación de props
 * const { show, active, config } = useFlashNotification({
 *  state: 'info',
 *   message: 'Respuesta guardada',
 *})
 * @example Definición de trigger que activa la notificación
 * <button onClick={() => { active()}}> Activar notificación </button>
 * @example Componente FlashNotification recibiendo argumentos
 * <FlashNotification {...config} show={show} />
 */
export declare function FlashNotification({ message, state, show, m, }: IFlashNotificationProps): JSX.Element;
