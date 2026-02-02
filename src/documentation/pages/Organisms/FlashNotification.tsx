import { ListComponent, MyHeading, MyText, MyTitle, Code } from '@/documentation/components'
import FlashNotificationDemo from '@/documentation/components/FlashNotificationDemo'

export const ViewFlashNotification = (): JSX.Element => {
  return (
    <>
      <MyHeading>Flash Notifications</MyHeading>
      <MyText>
        Las notificaciones flash se utilizan para entregar feedback desde el sistema, inmediatamente
        después de un evento accionado por el usuario{' '}
        <i>
          (Ej: luego de agendar una clase en vivo, luego ingresar una pregunta sobre el curso, etc)
        </i>{' '}
        o accionado por el mismo sistema{' '}
        <i>(Ej: Problemas de conexión, fallos al guardar o cargar datos, etc.)</i>
      </MyText>
      <MyText>
        <b>Tiempo de permanencia y auto-cerrado:</b>
        <br />
        La duración de la notificación depende de su estado y la longitud del mensaje (basado en una
        velocidad de lectura de 150 palabras por minuto):
        <li>
          <b>Estado Success:</b> Se cierra automáticamente tras el tiempo calculado para su lectura
          (mínimo 3 segundos).
        </li>
        <li>
          <b>Otros Estados (Error, Warning, Info):</b> Permanecen visibles de forma persistente y
          requieren que el usuario las cierre manualmente mediante la "X" integrada.
        </li>
      </MyText>

      <MyTitle>Ancho del Contenido y Centrado</MyTitle>
      <MyText>
        Mediante la propiedad <b>maxContent</b>, la notificación tomará exactamente el ancho de su
        contenido y se mantendrá perfectamente centrada en la pantalla. Alternativamente, puedes
        pasar un ancho fijo mediante <b>width</b>.
      </MyText>
      <ListComponent>
        <FlashNotificationDemo
          maxContent
          state="success"
          message="Notificación ajustada al ancho del contenido"
        />
        <FlashNotificationDemo
          state="info"
          message="Notificación con ancho fijo de 600px"
          width="600px"
        />
      </ListComponent>

      <MyTitle>Implementación</MyTitle>
      <MyText>
        El componente de FlashNotification se implementa en conjunto con el hook
        useFlashNotification:
      </MyText>
      <Code text="import { FlashNotification, useFlashNotification } from '@eclass/ui-kit'" />

      <MyTitle>Estados</MyTitle>
      <MyText>Existen 4 posibles estados que definen el ícono y color de la notificación.</MyText>
      <ListComponent>
        <FlashNotificationDemo
          maxContent
          state="info"
          message="<b>¡Grupo creado!</b><br />Tu grupo ha sido creado. Ahora puedes invitar a tus compañeros."
        />
        <FlashNotificationDemo state="success" message="Mensaje de éxito (Auto-cerrado)" />
        <FlashNotificationDemo state="error" message="Mensaje de error (Persistente)" />
        <FlashNotificationDemo state="warning" message="Mensaje de advertencia (Persistente)" />
      </ListComponent>
      <Code
        text="// Se define la constante que llama a useNotificationFlash y contiene el estado y mensaje
const { show, active, config } = useFlashNotification({
  state: 'info',
  message: 'Mensaje informativo',
  maxContent: true, // Se ajusta al ancho del texto
  width: '400px',   // Opcional: anula maxContent si se provee
})
// Se pasa la función active al elemento que activará la notificación
<Button onClick={ () => {active()} } > {state} </Button>
// Se le dan los argumentos de config al componente de FlashNotification
<FlashNotification {...config} show={show} />"
      />
    </>
  )
}

export default ViewFlashNotification
