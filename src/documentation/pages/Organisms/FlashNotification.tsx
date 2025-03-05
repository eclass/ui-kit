import { ListComponent, MyHeading, MyText, MyTittle, Code } from 'documentation/components'
import FlashNotificationDemo from 'documentation/components/FlashNotificationDemo'

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
        Tiempo de permanencia en pantalla: Se recomienda <b>no exceder las 25 palabras</b> para
        alertas flash para una correcta lectura de la información.
      </MyText>
      <MyText>
        Según la cantidad de la palabras la duración será la siguiente:{' '}
        <li>
          <b>De 1 a 5 palabras:</b> 3 segundos.
        </li>{' '}
        <li>
          <b>De 11 a 25 palabras:</b> 6 segundos.
        </li>{' '}
        <br />
        El componente de FlashNotification se implementa en conjunto con el hook
        useFlashNotification
      </MyText>
      <Code text="import { FlashNotification, useFlashNotification } from '@eclass/ui-kit'" />

      <MyTittle>Estados</MyTittle>
      <MyText>Existen 4 posibles estados que definen el ícono y color de la notificación.</MyText>
      <ListComponent>
        <FlashNotificationDemo state="info" message="Mensaje informativo" />
        <FlashNotificationDemo state="success" message="Mensaje de éxito" />
        <FlashNotificationDemo state="error" message="Mensaje de error" />
        <FlashNotificationDemo state="warning" message="Mensaje de advertencia" />
      </ListComponent>
      <Code
        text="// Se define la constante que llama a useNotificationFlash y contiene el estado y mensaje
const { show, active, config } = useFlashNotification({
state: 'info',
message: 'Mensaje informativo',
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
