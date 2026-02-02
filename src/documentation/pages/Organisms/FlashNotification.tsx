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
        La duración de la notificación depende de su estado y la longitud del mensaje. El sistema
        calcula el tiempo necesario para leer el contenido basado en una velocidad promedio de{' '}
        <b>150 palabras por minuto</b>:
        <li>
          <b>Estado Success:</b> Se cierra automáticamente tras el tiempo calculado (con un mínimo
          de 3 segundos garantizados).
        </li>
        <li>
          <b>Otros Estados (Error, Warning, Info):</b> Permanecen visibles de forma persistente.
          Esto asegura que el usuario tenga tiempo suficiente para leer errores o advertencias
          críticas y requiere un cierre manual mediante la "X".
        </li>
      </MyText>

      <MyTitle>Ancho y Centrado</MyTitle>
      <MyText>
        Por defecto, la notificación toma un ancho de <b>max-content</b> (se ajusta al texto) y se
        mantiene perfectamente centrada en la parte superior de la pantalla. Si deseas un control
        más específico, puedes pasar un ancho fijo mediante la propiedad <b>width</b>.
      </MyText>
      <ListComponent>
        <FlashNotificationDemo
          state="error"
          message="<strong>El grupo ya está completo</strong><br/>Lo sentimos, no es posible unirte porque el grupo acaba de alcanzar su límite de integrantes."
        />
        <FlashNotificationDemo
          state="info"
          message="Notificación con ancho fijo de 600px"
          width="600px"
        />
      </ListComponent>
      <Code
        text={`// Notificación con ancho automático (max-content)
<FlashNotification
  state="error"
  show={show}
  message="Mensaje con ancho automático..."
/>

// Notificación con ancho fijo
<FlashNotification
  state="info"
  show={show}
  width="600px"
  message="Mensaje con ancho fijo de 600px"
/>`}
      />

      <MyTitle>Implementación Singleton</MyTitle>
      <MyText>
        No es necesario añadir un contenedor de <i>Toaster</i> manualmente en tu aplicación. El
        componente <b>FlashNotification</b> gestiona automáticamente una única instancia global
        (Singleton), asegurando que las notificaciones no se dupliquen ni se pisen, incluso si el
        componente se usa en múltiples lugares de tu proyecto.
      </MyText>

      <Code
        text={`import { FlashNotification, useFlashNotification } from '@eclass/ui-kit'

const MyComponent = () => {
  const { show, active, config } = useFlashNotification({
    state: 'success',
    message: '¡Cambios guardados con éxito!',
  })

  return (
    <>
      <Button onClick={active}>Guardar</Button>
      <FlashNotification {...config} show={show} />
    </>
  )
}`}
      />

      <MyTitle>Estados</MyTitle>
      <MyText>Existen 4 posibles estados que definen el ícono y color de la notificación.</MyText>
      <ListComponent>
        <FlashNotificationDemo
          state="info"
          message="<b>¡Grupo creado!</b><br />Tu grupo ha sido creado. Ahora puedes invitar a tus compañeros."
        />
        <FlashNotificationDemo state="success" message="Mensaje de éxito (Auto-cerrado)" />
        <FlashNotificationDemo state="error" message="Mensaje de error (Persistente)" />
        <FlashNotificationDemo state="warning" message="Mensaje de advertencia (Persistente)" />
      </ListComponent>
    </>
  )
}

export default ViewFlashNotification
