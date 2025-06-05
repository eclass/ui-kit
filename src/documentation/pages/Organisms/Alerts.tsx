import { ListComponent, MyHeading, MyText, MyTitle, Code } from '@/documentation/components'
import { Alert } from '@/organisms'
import { Profile } from '@/atoms/Icons'

export const ViewAlert = (): JSX.Element => {
  return (
    <>
      <MyHeading>Alert</MyHeading>
      <MyText>
        Las alertas embebidas se utiliza en contextos en los que es necesario que el usuario pueda
        visualizar cada vez que lo necesite el feedback o estado de una solicitud al sistema
        <i>
          (Ej: El estado de una clase en vivo ya agendada, alertar sobre condiciones para repetir
          una evaluación, etc)
        </i>
      </MyText>
      <Code text="import { Alert } from '@eclass/ui-kit'" />

      <MyTitle>Estados</MyTitle>
      <MyText>Existen 4 posibles estados que definen el ícono y color de la alerta.</MyText>
      <ListComponent>
        <Alert state="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
        <Alert state="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
        <Alert state="error">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
        <Alert state="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
      </ListComponent>
      <Code
        text='<Alert state="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
<Alert state="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
<Alert state="error">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
<Alert state="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>'
      />

      <MyTitle>Alertas con botón primario</MyTitle>
      <MyText>
        Las alertas embebidas con botón se utilizan en contextos en los que además de que el usuario
        pueda visualizar cada vez que lo necesite el feedback o estado de una solicitud al sistema,
        deba realizar una acción determinada con respecto a lo que se le informa en dicha alerta
        <i>
          (Ej: para alertar sobre la necesidad de repetir de una evaluación y así cumplir los
          criterios del curso)
        </i>{' '}
        Para esto, la alerta debe recibir los argumentos de:
        <li>buttonText: texto del botón</li>
        <li>buttonIcon: ícono opcional del botón</li>
        <li>onClick: función del botón</li>
      </MyText>
      <ListComponent>
        <Alert state="info" buttonText="Click me" onClick={() => {}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert>
        <Alert state="success" buttonText="Click me" onClick={() => {}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert>
        <Alert state="error" buttonIcon={<Profile />} buttonText="Click me" onClick={() => {}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert>
        <Alert state="warning" buttonIcon={<Profile />} buttonText="Click me" onClick={() => {}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert>
      </ListComponent>
      <Code
        text='<Alert state="info" buttonText="Click me" onClick={() => {}}> Texto </Alert>
<Alert state="success" buttonText="Click me" onClick={() => {}}> Texto </Alert>
<Alert state="error" buttonText="Click me" onClick={() => {}}> Texto </Alert>
<Alert state="warning" buttonText="Click me" onClick={() => {}}> Texto </Alert>'
      />

      <MyTitle>Alertas con botón link</MyTitle>
      <MyText>
        Opcionalmente, el botón puede ser del tipo link.Para esto, la alerta debe recibir los
        argumentos de:
        <li>buttonLink: booleano que determina que el botón sea tipo link y no primario</li>
        <li>buttonText: texto del botón</li>
        <li>onClick: función del botón</li>
      </MyText>
      <ListComponent m="0 0 1rem">
        <Alert state="info" buttonLink buttonText="More" onClick={() => {}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert>
        <Alert state="success" buttonLink buttonText="More" onClick={() => {}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert>
        <Alert state="error" buttonLink buttonText="More" onClick={() => {}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert>
        <Alert state="warning" buttonLink buttonText="More" onClick={() => {}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert>
      </ListComponent>

      <MyTitle>Alertas con botón link y boton primario,</MyTitle>
      <MyText>
        Esta alerta recibe un state de alerta entre: <code>warning, error, success, info </code>.
        Adicionalmente recibe un link al final del texto y un botón primario. si se quiere que el
        componente ocupe todo el ancho de la pantalla se debe agregar el <code>fullWidth</code>{' '}
        mencionado en los types.
      </MyText>
      <ListComponent>
        <Alert
          state="info"
          buttonText="Register"
          onClick={() => {}}
          onClickLink={() => {}}
          endTextLink="Second link"
          fullWidth
        >
          Lorem <b>ipsum dolor</b>, sit amet consectetur adipisicing elit. Quia nemo vel facere
          itaque, molestiae expedita quidem <b>provident cumque voluptas accusamus</b> explicabo
          iure aspernatur optio amet illo maxime, totam incidunt maiores.
        </Alert>
        <Alert
          state="success"
          buttonText="Register"
          onClick={() => {}}
          onClickLink={() => {}}
          endTextLink="Second link"
          fullWidth
        >
          Lorem <b>ipsum dolor</b>, sit amet consectetur adipisicing elit. Quia nemo vel facere
          itaque, molestiae expedita quidem <b>provident cumque voluptas accusamus</b> explicabo
          iure aspernatur optio amet illo maxime, totam incidunt maiores.
        </Alert>
        <Alert
          state="error"
          buttonText="Register"
          onClick={() => {}}
          onClickLink={() => {}}
          endTextLink="Second link"
          fullWidth
        >
          Lorem <b>ipsum dolor</b>, sit amet consectetur adipisicing elit. Quia nemo vel facere
          itaque, molestiae expedita quidem <b>provident cumque voluptas accusamus</b> explicabo
          iure aspernatur optio amet illo maxime, totam incidunt maiores.
        </Alert>
        <Alert
          state="warning"
          buttonText="Register"
          onClick={() => {}}
          onClickLink={() => {}}
          endTextLink="Second link"
          fullWidth
        >
          Lorem <b>ipsum dolor</b>, sit amet consectetur adipisicing elit. Quia nemo vel facere
          itaque, molestiae expedita quidem <b>provident cumque voluptas accusamus</b> explicabo
          iure aspernatur optio amet illo maxime, totam incidunt maiores.
        </Alert>
      </ListComponent>
      <Code
        text={`<Alert
          state="info"
          buttonText="Register"
          onClick={() => {}}
          onClickLink={() => {}}
          endTextLink="Second link"
          fullWidth
        >
          Lorem <b>ipsum dolor</b>, sit amet consectetur adipisicing elit. Quia nemo vel facere
          itaque, molestiae expedita quidem <b>provident cumque voluptas accusamus</b> explicabo
          iure aspernatur optio amet illo maxime, totam incidunt maiores.
        </Alert>
        <Alert
          state="success"
          buttonText="Register"
          onClick={() => {}}
          onClickLink={() => {}}
          endTextLink="Second link"
          fullWidth
        >
          Lorem <b>ipsum dolor</b>, sit amet consectetur adipisicing elit. Quia nemo vel facere
          itaque, molestiae expedita quidem <b>provident cumque voluptas accusamus</b> explicabo
          iure aspernatur optio amet illo maxime, totam incidunt maiores.
        </Alert>
        <Alert
          state="error"
          buttonText="Register"
          onClick={() => {}}
          onClickLink={() => {}}
          endTextLink="Second link"
          fullWidth
        >
          Lorem <b>ipsum dolor</b>, sit amet consectetur adipisicing elit. Quia nemo vel facere
          itaque, molestiae expedita quidem <b>provident cumque voluptas accusamus</b> explicabo
          iure aspernatur optio amet illo maxime, totam incidunt maiores.
        </Alert>
        <Alert
          state="warning"
          buttonText="Register"
          onClick={() => {}}
          onClickLink={() => {}}
          endTextLink="Second link"
          fullWidth
        >
          Lorem <b>ipsum dolor</b>, sit amet consectetur adipisicing elit. Quia nemo vel facere
          itaque, molestiae expedita quidem <b>provident cumque voluptas accusamus</b> explicabo
          iure aspernatur optio amet illo maxime, totam incidunt maiores.
        </Alert>`}
      />
      <MyTitle>Types de Alert</MyTitle>
      <MyText>Tipos implementados en el Alert</MyText>
      <Code
        text={`interface IAlertProps {
          children?: React.ReactChild | React.ReactChild[]
          canDismiss?: boolean // Muestra el botón para cerrar
          buttonText?: string // Texto del botón
          buttonIcon?: React.ReactElement // Ícono del botón
          buttonLink?: boolean // Boolean que determina si el botón es tipo link
          fullWidth?: boolean // Ancho al 100% del contenedot
          isFlash?: boolean // Para notificación flash
          
          onClick?: () => void // Funcion del boton estandard
          // Estado que define color e ícono de la alerta
          state: 'error' | 'info' | 'success' | 'warning'
          m?: string // Margen
        
          // agrega el link al final del texto
          endTextLink?: string
          onClickLink?: () => void
        }`}
      />
    </>
  )
}

export default ViewAlert
