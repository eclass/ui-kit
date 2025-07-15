import{j as i,F as c,a as e,M as s,b as o,C as n,c as a,U as r}from"./index.8aea307b.js";import{L as l}from"./ListComponent.d68af833.js";import{A as t}from"./Alert.3ea1c969.js";import"./alertStates.9977724a.js";const b=()=>i(c,{children:[e(s,{children:"Alert"}),i(o,{children:["Las alertas embebidas se utiliza en contextos en los que es necesario que el usuario pueda visualizar cada vez que lo necesite el feedback o estado de una solicitud al sistema",e("i",{children:"(Ej: El estado de una clase en vivo ya agendada, alertar sobre condiciones para repetir una evaluaci\xF3n, etc)"})]}),e(n,{text:"import { Alert } from '@eclass/ui-kit'"}),e(a,{children:"Estados"}),e(o,{children:"Existen 4 posibles estados que definen el \xEDcono y color de la alerta."}),i(l,{children:[e(t,{state:"info",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e(t,{state:"success",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e(t,{state:"error",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e(t,{state:"warning",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e(n,{text:`<Alert state="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
<Alert state="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
<Alert state="error">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
<Alert state="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>`}),e(a,{children:"Alertas con bot\xF3n primario"}),i(o,{children:["Las alertas embebidas con bot\xF3n se utilizan en contextos en los que adem\xE1s de que el usuario pueda visualizar cada vez que lo necesite el feedback o estado de una solicitud al sistema, deba realizar una acci\xF3n determinada con respecto a lo que se le informa en dicha alerta",e("i",{children:"(Ej: para alertar sobre la necesidad de repetir de una evaluaci\xF3n y as\xED cumplir los criterios del curso)"})," ","Para esto, la alerta debe recibir los argumentos de:",e("li",{children:"buttonText: texto del bot\xF3n"}),e("li",{children:"buttonIcon: \xEDcono opcional del bot\xF3n"}),e("li",{children:"onClick: funci\xF3n del bot\xF3n"})]}),i(l,{children:[e(t,{state:"info",buttonText:"Click me",onClick:()=>{},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e(t,{state:"success",buttonText:"Click me",onClick:()=>{},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e(t,{state:"error",buttonIcon:e(r,{}),buttonText:"Click me",onClick:()=>{},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e(t,{state:"warning",buttonIcon:e(r,{}),buttonText:"Click me",onClick:()=>{},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e(n,{text:`<Alert state="info" buttonText="Click me" onClick={() => {}}> Texto </Alert>
<Alert state="success" buttonText="Click me" onClick={() => {}}> Texto </Alert>
<Alert state="error" buttonText="Click me" onClick={() => {}}> Texto </Alert>
<Alert state="warning" buttonText="Click me" onClick={() => {}}> Texto </Alert>`}),e(a,{children:"Alertas con bot\xF3n link"}),i(o,{children:["Opcionalmente, el bot\xF3n puede ser del tipo link.Para esto, la alerta debe recibir los argumentos de:",e("li",{children:"buttonLink: booleano que determina que el bot\xF3n sea tipo link y no primario"}),e("li",{children:"buttonText: texto del bot\xF3n"}),e("li",{children:"onClick: funci\xF3n del bot\xF3n"})]}),i(l,{m:"0 0 1rem",children:[e(t,{state:"info",buttonLink:!0,buttonText:"More",onClick:()=>{},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e(t,{state:"success",buttonLink:!0,buttonText:"More",onClick:()=>{},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e(t,{state:"error",buttonLink:!0,buttonText:"More",onClick:()=>{},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e(t,{state:"warning",buttonLink:!0,buttonText:"More",onClick:()=>{},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e(a,{children:"Alertas con bot\xF3n link y boton primario,"}),i(o,{children:["Esta alerta recibe un state de alerta entre: ",e("code",{children:"warning, error, success, info "}),". Adicionalmente recibe un link al final del texto y un bot\xF3n primario. si se quiere que el componente ocupe todo el ancho de la pantalla se debe agregar el ",e("code",{children:"fullWidth"})," ","mencionado en los types."]}),i(l,{children:[i(t,{state:"info",buttonText:"Register",onClick:()=>{},onClickLink:()=>{},endTextLink:"Second link",fullWidth:!0,children:["Lorem ",e("b",{children:"ipsum dolor"}),", sit amet consectetur adipisicing elit. Quia nemo vel facere itaque, molestiae expedita quidem ",e("b",{children:"provident cumque voluptas accusamus"})," explicabo iure aspernatur optio amet illo maxime, totam incidunt maiores."]}),i(t,{state:"success",buttonText:"Register",onClick:()=>{},onClickLink:()=>{},endTextLink:"Second link",fullWidth:!0,children:["Lorem ",e("b",{children:"ipsum dolor"}),", sit amet consectetur adipisicing elit. Quia nemo vel facere itaque, molestiae expedita quidem ",e("b",{children:"provident cumque voluptas accusamus"})," explicabo iure aspernatur optio amet illo maxime, totam incidunt maiores."]}),i(t,{state:"error",buttonText:"Register",onClick:()=>{},onClickLink:()=>{},endTextLink:"Second link",fullWidth:!0,children:["Lorem ",e("b",{children:"ipsum dolor"}),", sit amet consectetur adipisicing elit. Quia nemo vel facere itaque, molestiae expedita quidem ",e("b",{children:"provident cumque voluptas accusamus"})," explicabo iure aspernatur optio amet illo maxime, totam incidunt maiores."]}),i(t,{state:"warning",buttonText:"Register",onClick:()=>{},onClickLink:()=>{},endTextLink:"Second link",fullWidth:!0,children:["Lorem ",e("b",{children:"ipsum dolor"}),", sit amet consectetur adipisicing elit. Quia nemo vel facere itaque, molestiae expedita quidem ",e("b",{children:"provident cumque voluptas accusamus"})," explicabo iure aspernatur optio amet illo maxime, totam incidunt maiores."]})]}),e(n,{text:`<Alert
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
        </Alert>`}),e(a,{children:"Types de Alert"}),e(o,{children:"Tipos implementados en el Alert"}),e(n,{text:`interface IAlertProps {
          children?: React.ReactChild | React.ReactChild[]
          canDismiss?: boolean // Muestra el bot\xF3n para cerrar
          buttonText?: string // Texto del bot\xF3n
          buttonIcon?: React.ReactElement // \xCDcono del bot\xF3n
          buttonLink?: boolean // Boolean que determina si el bot\xF3n es tipo link
          fullWidth?: boolean // Ancho al 100% del contenedot
          isFlash?: boolean // Para notificaci\xF3n flash
          
          onClick?: () => void // Funcion del boton estandard
          // Estado que define color e \xEDcono de la alerta
          state: 'error' | 'info' | 'success' | 'warning'
          m?: string // Margen
        
          // agrega el link al final del texto
          endTextLink?: string
          onClickLink?: () => void
        }`})]});export{b as ViewAlert,b as default};
//# sourceMappingURL=Alerts.05f94f0f.js.map
