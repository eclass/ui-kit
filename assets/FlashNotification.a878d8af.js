import{r as d,a as e,B as h,j as i,F as x,M as g,b as c,C as f,c as F}from"./index.8b485190.js";import{L as b}from"./ListComponent.0d8830f2.js";import{n as m,a as N,I as v}from"./ModalAlert.f8f53fc1.js";import"./Close.14209915.js";import"./TinyAlert.0961a192.js";import{d as j}from"./BtnLink.377e6c2e.js";import{A as w}from"./Alert.833a31d9.js";import"./Label.3c812301.js";import"./Progress.26cef3ef.js";import"./Ripples.d1990688.js";import"./index.b622eba8.js";const p=n=>{function t(o){var r,u;return(u=(r=o.match(/(\w+)/g))==null?void 0:r.length)!=null?u:0}let a=3e3;return n&&t(n)>5&&(a=6e3),a};function E({message:n,state:t,show:a,m:o}){const s=d.exports.useCallback(()=>{m(r=>e(w,{isFlash:!0,state:t,canDismiss:!0,onClick:()=>m.dismiss(r.id),children:n}),{duration:p(n),id:N[t].id})},[n,t]);return d.exports.useEffect(()=>{a&&s()},[a,s]),e(h,{children:e(v,{toastOptions:{className:"toastContainer",style:{background:"transparent",boxShadow:"none"}}})})}const C=({state:n,message:t})=>{const[a,o]=d.exports.useState(!1);return d.exports.useEffect(()=>{if(a){const r=setTimeout(()=>{o(!1)},p(t));return()=>clearTimeout(r)}},[t,a]),{show:a,active:()=>{a||o(!0)},config:{state:n,message:t}}};function l({state:n,message:t}){const{show:a,active:o,config:s}=C({state:n,message:t});return i(h,{children:[e(j,{onClick:()=>{o()},children:n}),e(E,{...s,show:a})]})}const O=()=>i(x,{children:[e(g,{children:"Flash Notifications"}),i(c,{children:["Las notificaciones flash se utilizan para entregar feedback desde el sistema, inmediatamente despu\xE9s de un evento accionado por el usuario"," ",e("i",{children:"(Ej: luego de agendar una clase en vivo, luego ingresar una pregunta sobre el curso, etc)"})," ","o accionado por el mismo sistema"," ",e("i",{children:"(Ej: Problemas de conexi\xF3n, fallos al guardar o cargar datos, etc.)"})]}),i(c,{children:["Tiempo de permanencia en pantalla: Se recomienda ",e("b",{children:"no exceder las 25 palabras"})," para alertas flash para una correcta lectura de la informaci\xF3n."]}),i(c,{children:["Seg\xFAn la cantidad de la palabras la duraci\xF3n ser\xE1 la siguiente:"," ",i("li",{children:[e("b",{children:"De 1 a 5 palabras:"})," 3 segundos."]})," ",i("li",{children:[e("b",{children:"De 11 a 25 palabras:"})," 6 segundos."]})," ",e("br",{}),"El componente de FlashNotification se implementa en conjunto con el hook useFlashNotification"]}),e(f,{text:"import { FlashNotification, useFlashNotification } from '@eclass/ui-kit'"}),e(F,{children:"Estados"}),e(c,{children:"Existen 4 posibles estados que definen el \xEDcono y color de la notificaci\xF3n."}),i(b,{children:[e(l,{state:"info",message:"Mensaje informativo"}),e(l,{state:"success",message:"Mensaje de \xE9xito"}),e(l,{state:"error",message:"Mensaje de error"}),e(l,{state:"warning",message:"Mensaje de advertencia"})]}),e(f,{text:`// Se define la constante que llama a useNotificationFlash y contiene el estado y mensaje
const { show, active, config } = useFlashNotification({
state: 'info',
message: 'Mensaje informativo',
})
// Se pasa la funci\xF3n active al elemento que activar\xE1 la notificaci\xF3n
<Button onClick={ () => {active()} } > {state} </Button>
// Se le dan los argumentos de config al componente de FlashNotification
<FlashNotification {...config} show={show} />`})]});export{O as ViewFlashNotification,O as default};
//# sourceMappingURL=FlashNotification.a878d8af.js.map
