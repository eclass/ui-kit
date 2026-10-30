import{t as e}from"./ListComponent-BSNp0HG4.js";import{c as t,i as n,r,t as i}from"./Typography-Db7ZPykY.js";import{t as a}from"./Code-Bgr_Rzly.js";import{t as o}from"./Alert-DiU0xlSJ.js";import{t as s}from"./Profile-DIU3vIzi.js";var c=t(),l=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{children:`Alert`}),(0,c.jsxs)(r,{children:[`Las alertas embebidas se utiliza en contextos en los que es necesario que el usuario pueda visualizar cada vez que lo necesite el feedback o estado de una solicitud al sistema`,(0,c.jsx)(`i`,{children:`(Ej: El estado de una clase en vivo ya agendada, alertar sobre condiciones para repetir una evaluación, etc)`})]}),(0,c.jsx)(a,{text:`import { Alert } from '@eclass/ui-kit'`}),(0,c.jsx)(n,{children:`Estados`}),(0,c.jsx)(r,{children:`Existen 4 posibles estados que definen el ícono y color de la alerta.`}),(0,c.jsxs)(e,{children:[(0,c.jsx)(o,{state:`info`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,c.jsx)(o,{state:`success`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,c.jsx)(o,{state:`error`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,c.jsx)(o,{state:`warning`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]}),(0,c.jsx)(a,{text:`<Alert state="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
<Alert state="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
<Alert state="error">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
<Alert state="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>`}),(0,c.jsx)(n,{children:`Alertas con botón primario`}),(0,c.jsxs)(r,{children:[`Las alertas embebidas con botón se utilizan en contextos en los que además de que el usuario pueda visualizar cada vez que lo necesite el feedback o estado de una solicitud al sistema, deba realizar una acción determinada con respecto a lo que se le informa en dicha alerta`,(0,c.jsx)(`i`,{children:`(Ej: para alertar sobre la necesidad de repetir de una evaluación y así cumplir los criterios del curso)`}),` `,`Para esto, la alerta debe recibir los argumentos de:`,(0,c.jsx)(`li`,{children:`buttonText: texto del botón`}),(0,c.jsx)(`li`,{children:`buttonIcon: ícono opcional del botón`}),(0,c.jsx)(`li`,{children:`onClick: función del botón`})]}),(0,c.jsxs)(e,{children:[(0,c.jsx)(o,{state:`info`,buttonText:`Click me`,onClick:()=>{},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,c.jsx)(o,{state:`success`,buttonText:`Click me`,onClick:()=>{},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,c.jsx)(o,{state:`error`,buttonIcon:(0,c.jsx)(s,{}),buttonText:`Click me`,onClick:()=>{},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,c.jsx)(o,{state:`warning`,buttonIcon:(0,c.jsx)(s,{}),buttonText:`Click me`,onClick:()=>{},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]}),(0,c.jsx)(a,{text:`<Alert state="info" buttonText="Click me" onClick={() => {}}> Texto </Alert>
<Alert state="success" buttonText="Click me" onClick={() => {}}> Texto </Alert>
<Alert state="error" buttonText="Click me" onClick={() => {}}> Texto </Alert>
<Alert state="warning" buttonText="Click me" onClick={() => {}}> Texto </Alert>`}),(0,c.jsx)(n,{children:`Alertas con botón link`}),(0,c.jsxs)(r,{children:[`Opcionalmente, el botón puede ser del tipo link.Para esto, la alerta debe recibir los argumentos de:`,(0,c.jsx)(`li`,{children:`buttonLink: booleano que determina que el botón sea tipo link y no primario`}),(0,c.jsx)(`li`,{children:`buttonText: texto del botón`}),(0,c.jsx)(`li`,{children:`onClick: función del botón`})]}),(0,c.jsxs)(e,{m:`0 0 1rem`,children:[(0,c.jsx)(o,{state:`info`,buttonLink:!0,buttonText:`More`,onClick:()=>{},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,c.jsx)(o,{state:`success`,buttonLink:!0,buttonText:`More`,onClick:()=>{},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,c.jsx)(o,{state:`error`,buttonLink:!0,buttonText:`More`,onClick:()=>{},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,c.jsx)(o,{state:`warning`,buttonLink:!0,buttonText:`More`,onClick:()=>{},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]}),(0,c.jsx)(n,{children:`Alertas con botón link y boton primario,`}),(0,c.jsxs)(r,{children:[`Esta alerta recibe un state de alerta entre: `,(0,c.jsx)(`code`,{children:`warning, error, success, info `}),`. Adicionalmente recibe un link al final del texto y un botón primario. si se quiere que el componente ocupe todo el ancho de la pantalla se debe agregar el `,(0,c.jsx)(`code`,{children:`fullWidth`}),` `,`mencionado en los types.`]}),(0,c.jsxs)(e,{children:[(0,c.jsxs)(o,{state:`info`,buttonText:`Register`,onClick:()=>{},onClickLink:()=>{},endTextLink:`Second link`,fullWidth:!0,children:[`Lorem `,(0,c.jsx)(`b`,{children:`ipsum dolor`}),`, sit amet consectetur adipisicing elit. Quia nemo vel facere itaque, molestiae expedita quidem `,(0,c.jsx)(`b`,{children:`provident cumque voluptas accusamus`}),` explicabo iure aspernatur optio amet illo maxime, totam incidunt maiores.`]}),(0,c.jsxs)(o,{state:`success`,buttonText:`Register`,onClick:()=>{},onClickLink:()=>{},endTextLink:`Second link`,fullWidth:!0,children:[`Lorem `,(0,c.jsx)(`b`,{children:`ipsum dolor`}),`, sit amet consectetur adipisicing elit. Quia nemo vel facere itaque, molestiae expedita quidem `,(0,c.jsx)(`b`,{children:`provident cumque voluptas accusamus`}),` explicabo iure aspernatur optio amet illo maxime, totam incidunt maiores.`]}),(0,c.jsxs)(o,{state:`error`,buttonText:`Register`,onClick:()=>{},onClickLink:()=>{},endTextLink:`Second link`,fullWidth:!0,children:[`Lorem `,(0,c.jsx)(`b`,{children:`ipsum dolor`}),`, sit amet consectetur adipisicing elit. Quia nemo vel facere itaque, molestiae expedita quidem `,(0,c.jsx)(`b`,{children:`provident cumque voluptas accusamus`}),` explicabo iure aspernatur optio amet illo maxime, totam incidunt maiores.`]}),(0,c.jsxs)(o,{state:`warning`,buttonText:`Register`,onClick:()=>{},onClickLink:()=>{},endTextLink:`Second link`,fullWidth:!0,children:[`Lorem `,(0,c.jsx)(`b`,{children:`ipsum dolor`}),`, sit amet consectetur adipisicing elit. Quia nemo vel facere itaque, molestiae expedita quidem `,(0,c.jsx)(`b`,{children:`provident cumque voluptas accusamus`}),` explicabo iure aspernatur optio amet illo maxime, totam incidunt maiores.`]})]}),(0,c.jsx)(a,{text:`<Alert
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
        </Alert>`}),(0,c.jsx)(n,{children:`Types de Alert`}),(0,c.jsx)(r,{children:`Tipos implementados en el Alert`}),(0,c.jsx)(a,{text:`interface IAlertProps {
          children?: React.ReactNode
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
        }`})]});export{l as ViewAlert,l as default};
//# sourceMappingURL=Alerts-CYcKe1-4.js.map