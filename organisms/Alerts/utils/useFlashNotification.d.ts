import { IFlashNotificationProps } from '../types';
/**
 * Hook que actúa como trigger del componente FlashNotification,
 * usando los siguientes parámetros:
 * show: boolean que indica si la notificación se está mostrando o no,
 * active: función que modifica el estado de show,
 * config: contiene los valores de 'state' y message'
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
export declare const useFlashNotification: ({ state, message }: IFlashNotificationProps) => any;
