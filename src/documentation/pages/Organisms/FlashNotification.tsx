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

      <MyTitle>Soporte HTML</MyTitle>
      <MyText>
        La propiedad <b>message</b> admite etiquetas HTML básicas para dar formato al contenido,
        como <b>&lt;b&gt;</b>, <b>&lt;strong&gt;</b>, <b>&lt;i&gt;</b> y <b>&lt;br /&gt;</b>. El
        contenido es sanitizado automáticamente antes de ser renderizado.
      </MyText>
      <ListComponent>
        <FlashNotificationDemo
          state="info"
          message="Puedes usar <b>negritas</b>, <i>itálicas</i> y<br/>saltos de línea."
        />
      </ListComponent>
      <Code
        text={`<FlashNotification
  state="info"
  show={show}
  message="Uso de <b>HTML</b> para mejorar el <i>feedback</i>."
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

      <MyTitle>Propiedades</MyTitle>
      <MyText>
        El componente <b>FlashNotification</b> acepta las siguientes propiedades:
      </MyText>
      <ListComponent>
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                <th style={{ padding: '8px' }}>Propiedad</th>
                <th style={{ padding: '8px' }}>Tipo</th>
                <th style={{ padding: '8px' }}>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #EDF2F7' }}>
                <td style={{ padding: '8px' }}>
                  <code>state</code>
                </td>
                <td style={{ padding: '8px' }}>
                  <code>'success' | 'error' | 'info' | 'warning'</code>
                </td>
                <td style={{ padding: '8px' }}>Define el color, icono y comportamiento.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #EDF2F7' }}>
                <td style={{ padding: '8px' }}>
                  <code>message</code>
                </td>
                <td style={{ padding: '8px' }}>
                  <code>string</code>
                </td>
                <td style={{ padding: '8px' }}>El texto o HTML que se mostrará.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #EDF2F7' }}>
                <td style={{ padding: '8px' }}>
                  <code>show</code>
                </td>
                <td style={{ padding: '8px' }}>
                  <code>boolean</code>
                </td>
                <td style={{ padding: '8px' }}>Controla la visibilidad.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #EDF2F7' }}>
                <td style={{ padding: '8px' }}>
                  <code>width</code>
                </td>
                <td style={{ padding: '8px' }}>
                  <code>string</code>
                </td>
                <td style={{ padding: '8px' }}>Ancho fijo (ej: '400px').</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #EDF2F7' }}>
                <td style={{ padding: '8px' }}>
                  <code>m</code>
                </td>
                <td style={{ padding: '8px' }}>
                  <code>string</code>
                </td>
                <td style={{ padding: '8px' }}>Margen CSS adicional.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ListComponent>
    </>
  )
}

export default ViewFlashNotification
