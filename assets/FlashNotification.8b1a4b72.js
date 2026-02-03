import{x as l,a6 as p,a as e,F,a7 as w,j as s,B as N,a8 as j,M,b as d,c as h,C as f}from"./index.b8aab86f.js";import{L as x}from"./ListComponent.5039771a.js";import{a as y}from"./alertStates.ae1d8bea.js";import{A as v}from"./Alert.bfa781c1.js";const E=a=>{if(!a)return 3e3;const t=a.trim().split(/\s+/).length/150,o=Math.round(t*60*1e3);return Math.max(3e3,o)},g="_eclass_ui_kit_toaster_mounted";function T({message:a,state:n,show:i,m:t,width:o}){const[r,m]=l.exports.useState(!1);l.exports.useEffect(()=>{typeof window!="undefined"&&!window[g]&&(window[g]=!0,m(!0))},[]);const u=l.exports.useCallback(()=>{p(b=>e(v,{isFlash:!0,state:n,canDismiss:!0,onClick:()=>p.dismiss(b.id),width:o,maxContent:!o,m:t,children:a}),{duration:n==="success"?E(a):1/0,id:y[n].id})},[a,n,o,t]);return l.exports.useEffect(()=>{i&&u()},[i,u]),e(F,{children:r&&e(w,{position:"top-center",toastOptions:{className:"toastContainer",style:{background:"transparent",boxShadow:"none",maxWidth:o!=null?o:"max-content"}}})})}const A=({state:a,message:n,width:i})=>{const[t,o]=l.exports.useState(!1);return l.exports.useEffect(()=>{if(t){const m=a==="success"?E(n):1e3,u=setTimeout(()=>{o(!1)},m);return()=>clearTimeout(u)}},[n,t,a]),{show:t,active:()=>{t||o(!0)},config:{state:a,message:n,width:i}}};function c({state:a,message:n,width:i}){const{show:t,active:o,config:r}=A({state:a,message:n,width:i});return s(N,{children:[e(j,{onClick:o,children:a}),e(T,{show:t,state:r.state,message:r.message,width:r.width})]})}const D=()=>s(F,{children:[e(M,{children:"Flash Notifications"}),s(d,{children:["Las notificaciones flash se utilizan para entregar feedback desde el sistema, inmediatamente despu\xE9s de un evento accionado por el usuario"," ",e("i",{children:"(Ej: luego de agendar una clase en vivo, luego ingresar una pregunta sobre el curso, etc)"})," ","o accionado por el mismo sistema"," ",e("i",{children:"(Ej: Problemas de conexi\xF3n, fallos al guardar o cargar datos, etc.)"})]}),s(d,{children:[e("b",{children:"Tiempo de permanencia y auto-cerrado:"}),e("br",{}),"La duraci\xF3n de la notificaci\xF3n depende de su estado y la longitud del mensaje. El sistema calcula el tiempo necesario para leer el contenido basado en una velocidad promedio de"," ",e("b",{children:"150 palabras por minuto"}),":",s("li",{children:[e("b",{children:"Estado Success:"})," Se cierra autom\xE1ticamente tras el tiempo calculado (con un m\xEDnimo de 3 segundos garantizados)."]}),s("li",{children:[e("b",{children:"Otros Estados (Error, Warning, Info):"}),' Permanecen visibles de forma persistente. Esto asegura que el usuario tenga tiempo suficiente para leer errores o advertencias cr\xEDticas y requiere un cierre manual mediante la "X".']})]}),e(h,{children:"Ancho y Centrado"}),s(d,{children:["Por defecto, la notificaci\xF3n toma un ancho de ",e("b",{children:"max-content"})," (se ajusta al texto) y se mantiene perfectamente centrada en la parte superior de la pantalla. Si deseas un control m\xE1s espec\xEDfico, puedes pasar un ancho fijo mediante la propiedad ",e("b",{children:"width"}),"."]}),s(x,{children:[e(c,{state:"error",message:"<strong>El grupo ya est\xE1 completo</strong><br/>Lo sentimos, no es posible unirte porque el grupo acaba de alcanzar su l\xEDmite de integrantes."}),e(c,{state:"info",message:"Notificaci\xF3n con ancho fijo de 600px",width:"600px"})]}),e(f,{text:`// Notificaci\xF3n con ancho autom\xE1tico (max-content)
<FlashNotification
  state="error"
  show={show}
  message="Mensaje con ancho autom\xE1tico..."
/>

// Notificaci\xF3n con ancho fijo
<FlashNotification
  state="info"
  show={show}
  width="600px"
  message="Mensaje con ancho fijo de 600px"
/>`}),e(h,{children:"Implementaci\xF3n Singleton"}),s(d,{children:["No es necesario a\xF1adir un contenedor de ",e("i",{children:"Toaster"})," manualmente en tu aplicaci\xF3n. El componente ",e("b",{children:"FlashNotification"})," gestiona autom\xE1ticamente una \xFAnica instancia global (Singleton), asegurando que las notificaciones no se dupliquen ni se pisen, incluso si el componente se usa en m\xFAltiples lugares de tu proyecto."]}),e(f,{text:`import { FlashNotification, useFlashNotification } from '@eclass/ui-kit'

const MyComponent = () => {
  const { show, active, config } = useFlashNotification({
    state: 'success',
    message: '\xA1Cambios guardados con \xE9xito!',
  })

  return (
    <>
      <Button onClick={active}>Guardar</Button>
      <FlashNotification {...config} show={show} />
    </>
  )
}`}),e(h,{children:"Estados"}),e(d,{children:"Existen 4 posibles estados que definen el \xEDcono y color de la notificaci\xF3n."}),s(x,{children:[e(c,{state:"info",message:"<b>\xA1Grupo creado!</b><br />Tu grupo ha sido creado. Ahora puedes invitar a tus compa\xF1eros."}),e(c,{state:"success",message:"Mensaje de \xE9xito (Auto-cerrado)"}),e(c,{state:"error",message:"Mensaje de error (Persistente)"}),e(c,{state:"warning",message:"Mensaje de advertencia (Persistente)"})]})]});export{D as ViewFlashNotification,D as default};
//# sourceMappingURL=FlashNotification.8b1a4b72.js.map
