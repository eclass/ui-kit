import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{t}from"./ListComponent-BSNp0HG4.js";import{Nt as n,c as r,i,r as a,t as o,u as s}from"./Typography-Db7ZPykY.js";import{t as c}from"./Code-Bgr_Rzly.js";import{n as l}from"./alertStates-D81tiB9G.js";import{t as u}from"./Alert-DiU0xlSJ.js";import{n as d}from"./index-hZ7nWMrB.js";import{t as f}from"./chakra-ui-button.esm-BOgywY2x.js";var ee={data:``},te=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||ee},ne=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,h=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?h(o,a):a+`{`+h(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=h(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=a[1]==`-`?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=h.p?h.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},g={},_=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+_(e[n]);return t}return e},v=(e,t,n,r,i)=>{let a=_(e),o=g[a]||(g[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!g[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=ne.exec(e.replace(p,``));)t[4]?r.shift():t[3]?(n=t[3].replace(m,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(m,` `).trim();return r[0]})(e):e;g[o]=h(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&g.g;return n&&(g.g=g[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(g[o],t,r,s),o},y=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:h(e,``):!1===e?``:e}return e+r+(a==null?``:a)},``);function b(e){let t=this||{},n=e.call?e(t.p):e;return v(n.unshift?n.raw?y(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,te(t.target),t.g,t.o,t.k)}var x,S,C;b.bind({g:1});var w=b.bind({k:1});function re(e,t,n,r){h.p=t,x=e,S=n,C=r}function T(e,t){let n=this||{};return function(){let r=arguments;function i(a,o){let s=Object.assign({},a),c=s.className||i.className;n.p=Object.assign({theme:S&&S()},s),n.o=/go\d/.test(c),s.className=b.apply(n,r)+(c?` `+c:``),t&&(s.ref=o);let l=e;return e[0]&&(l=s.as||e,delete s.as),C&&l[0]&&C(s),x(l,s)}return t?t(i):i}}var E=e(n(),1),ie=e=>typeof e==`function`,D=(e,t)=>ie(e)?e(t):e,ae=(()=>{let e=0;return()=>(++e).toString()})(),O=(()=>{let e;return()=>{if(e===void 0&&typeof window<`u`){let t=matchMedia(`(prefers-reduced-motion: reduce)`);e=!t||t.matches}return e}})(),oe=20,k=new Map,se=1e3,A=e=>{if(k.has(e))return;let t=setTimeout(()=>{k.delete(e),F({type:4,toastId:e})},se);k.set(e,t)},j=e=>{let t=k.get(e);t&&clearTimeout(t)},M=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,oe)};case 1:return t.toast.id&&j(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return e.toasts.find(e=>e.id===n.id)?M(e,{type:1,toast:n}):M(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?A(r):e.toasts.forEach(e=>{A(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||r===void 0?{...e,visible:!1}:e)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},N=[],P={toasts:[],pausedAt:void 0},F=e=>{P=M(P,e),N.forEach(e=>{e(P)})},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},L=(e={})=>{let[t,n]=(0,E.useState)(P);(0,E.useEffect)(()=>(N.push(n),()=>{let e=N.indexOf(n);e>-1&&N.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||((n=e[t.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||I[t.type],style:{...e.style,...(r=e[t.type])==null?void 0:r.style,...t.style}}});return{...t,toasts:r}},R=(e,t=`blank`,n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:`status`,"aria-live":`polite`},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||ae()}),z=e=>(t,n)=>{let r=R(t,e,n);return F({type:2,toast:r}),r.id},B=(e,t)=>z(`blank`)(e,t);B.error=z(`error`),B.success=z(`success`),B.loading=z(`loading`),B.custom=z(`custom`),B.dismiss=e=>{F({type:3,toastId:e})},B.remove=e=>F({type:4,toastId:e}),B.promise=(e,t,n)=>{let r=B.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(e=>(B.success(D(t.success,e),{id:r,...n,...n==null?void 0:n.success}),e)).catch(e=>{B.error(D(t.error,e),{id:r,...n,...n==null?void 0:n.error})}),e};var V=(e,t)=>{F({type:1,toast:{id:e,height:t}})},H=()=>{F({type:5,time:Date.now()})},U=e=>{let{toasts:t,pausedAt:n}=L(e);return(0,E.useEffect)(()=>{if(n)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(n<0)t.visible&&B.dismiss(t.id);else return setTimeout(()=>B.dismiss(t.id),n)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,n]),{toasts:t,handlers:{updateHeight:V,startPause:H,endPause:(0,E.useCallback)(()=>{n&&F({type:6,time:Date.now()})},[n]),calculateOffset:(0,E.useCallback)((e,n)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:a}=n||{},o=t.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=o.findIndex(t=>t.id===e.id),c=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[c+1]:[0,c]).reduce((e,t)=>e+(t.height||0)+i,0)},[t])}}},W=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,G=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=T(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#ff4b4b`};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||`#fff`};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${K} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ce=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,le=T(`div`)`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||`#e0e0e0`};
  border-right-color: ${e=>e.primary||`#616161`};
  animation: ${ce} 1s linear infinite;
`,ue=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,fe=T(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#61d345`};
  position: relative;
  transform: rotate(45deg);

  animation: ${ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||`#fff`};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,pe=T(`div`)`
  position: absolute;
`,me=T(`div`)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,he=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ge=T(`div`)`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${he} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,_e=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t===void 0?n===`blank`?null:E.createElement(me,null,E.createElement(le,{...r}),n!==`loading`&&E.createElement(pe,null,n===`error`?E.createElement(q,{...r}):E.createElement(fe,{...r}))):typeof t==`string`?E.createElement(ge,null,t):t},ve=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ye=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,be=`0%{opacity:0;} 100%{opacity:1;}`,xe=`0%{opacity:1;} 100%{opacity:0;}`,Se=T(`div`)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ce=T(`div`)`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,we=(e,t)=>{let n=e.includes(`top`)?1:-1,[r,i]=O()?[be,xe]:[ve(n),ye(n)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Te=E.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?we(e.position||t||`top-center`,e.visible):{opacity:0},a=E.createElement(_e,{toast:e}),o=E.createElement(Ce,{...e.ariaProps},D(e.message,e));return E.createElement(Se,{className:e.className,style:{...i,...n,...e.style}},typeof r==`function`?r({icon:a,message:o}):E.createElement(E.Fragment,null,a,o))});re(E.createElement);var Ee=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let a=E.useCallback(t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;r(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return E.createElement(`div`,{ref:a,className:t,style:n},i)},De=(e,t)=>{let n=e.includes(`top`),r=n?{top:0}:{bottom:0},i=e.includes(`center`)?{justifyContent:`center`}:e.includes(`right`)?{justifyContent:`flex-end`}:{};return{left:0,right:0,display:`flex`,position:`absolute`,transition:O()?void 0:`all 230ms cubic-bezier(.21,1.02,.73,1)`,transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},Oe=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,J=16,ke=({reverseOrder:e,position:t=`top-center`,toastOptions:n,gutter:r,children:i,containerStyle:a,containerClassName:o})=>{let{toasts:s,handlers:c}=U(n);return E.createElement(`div`,{style:{position:`fixed`,zIndex:9999,top:J,left:J,right:J,bottom:J,pointerEvents:`none`,...a},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},s.map(n=>{let a=n.position||t,o=De(a,c.calculateOffset(n,{reverseOrder:e,gutter:r,defaultPosition:t}));return E.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:c.updateHeight,className:n.visible?Oe:``,style:o},n.type===`custom`?D(n.message,n):i?i(n):E.createElement(Te,{toast:n,position:a}))}))},Y=e=>{if(!e)return 3e3;let t=e.trim().split(/\s+/).length/150,n=Math.round(t*60*1e3);return Math.max(3e3,n)},X=r(),Z=`_eclass_ui_kit_toaster_mounted`;function Ae({message:e,state:t,show:n,m:r}){let[i,a]=(0,E.useState)(!1),[o]=d(`(max-width: 440px)`);(0,E.useEffect)(()=>{typeof window<`u`&&!window[Z]&&(window[Z]=!0,a(!0))},[]);let s=(0,E.useCallback)(()=>{B(n=>(0,X.jsx)(u,{isFlash:!0,state:t,canDismiss:!0,onClick:()=>B.dismiss(n.id),m:r,sx:{w:`initial`,maxWidth:`initial`,...o&&{margin:`-4px -10px`,borderRadius:0,w:`100vw!important`}},children:e}),{duration:[`success`,`info`].includes(t)?Y(e):1/0,id:l[t].id})},[e,t,r,o]);return(0,E.useEffect)(()=>{n&&s()},[n,s]),(0,X.jsx)(X.Fragment,{children:i&&(0,X.jsx)(ke,{position:`top-center`,toastOptions:{className:`toastContainer`,style:{background:`transparent`,boxShadow:`none`,maxWidth:`100vw`,padding:0,margin:0}},containerStyle:{left:0,right:0,...o&&{top:0},padding:0,margin:0}})})}var je=({state:e,message:t})=>{let[n,r]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(n){let n=e===`success`?Y(t):1e3,i=setTimeout(()=>{r(!1)},n);return()=>clearTimeout(i)}},[t,n,e]),{show:n,active:()=>{n||r(!0)},config:{state:e,message:t}}};function Q({state:e,message:t}){let{show:n,active:r,config:i}=je({state:e,message:t});return(0,X.jsxs)(s,{children:[(0,X.jsx)(f,{onClick:r,children:e}),(0,X.jsx)(Ae,{show:n,state:i.state,message:i.message})]})}var $=()=>(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(o,{children:`Flash Notifications`}),(0,X.jsxs)(a,{children:[`Las notificaciones flash se utilizan para entregar feedback desde el sistema, inmediatamente después de un evento accionado por el usuario`,` `,(0,X.jsx)(`i`,{children:`(Ej: luego de agendar una clase en vivo, luego ingresar una pregunta sobre el curso, etc)`}),` `,`o accionado por el mismo sistema`,` `,(0,X.jsx)(`i`,{children:`(Ej: Problemas de conexión, fallos al guardar o cargar datos, etc.)`})]}),(0,X.jsxs)(a,{children:[(0,X.jsx)(`b`,{children:`Tiempo de permanencia y auto-cerrado:`}),(0,X.jsx)(`br`,{}),`La duración de la notificación depende de su estado y la longitud del mensaje. El sistema calcula el tiempo necesario para leer el contenido basado en una velocidad promedio de`,` `,(0,X.jsx)(`b`,{children:`150 palabras por minuto`}),`:`,(0,X.jsxs)(`li`,{children:[(0,X.jsx)(`b`,{children:`Estado Success e Info:`}),` Se cierra automáticamente tras el tiempo calculado (con un mínimo de 3 segundos garantizados).`]}),(0,X.jsxs)(`li`,{children:[(0,X.jsx)(`b`,{children:`Otros Estados (Error, Warning, Info):`}),` Permanecen visibles de forma persistente. Esto asegura que el usuario tenga tiempo suficiente para leer errores o advertencias críticas y requiere un cierre manual mediante la "X".`]})]}),(0,X.jsx)(i,{children:`Soporte HTML`}),(0,X.jsxs)(a,{children:[`La propiedad `,(0,X.jsx)(`b`,{children:`message`}),` admite etiquetas HTML básicas para dar formato al contenido, como `,(0,X.jsx)(`b`,{children:`<b>`}),`, `,(0,X.jsx)(`b`,{children:`<strong>`}),`, `,(0,X.jsx)(`b`,{children:`<i>`}),` y `,(0,X.jsx)(`b`,{children:`<br />`}),`. El contenido es sanitizado automáticamente antes de ser renderizado.`]}),(0,X.jsx)(t,{children:(0,X.jsx)(Q,{state:`info`,message:`Puedes usar <b>negritas</b>, <i>itálicas</i> y<br/>saltos de línea.`})}),(0,X.jsx)(c,{text:`<FlashNotification
  state="info"
  show={show}
  message="Uso de <b>HTML</b> para mejorar el <i>feedback</i>."
/>`}),(0,X.jsx)(i,{children:`Implementación Singleton`}),(0,X.jsxs)(a,{children:[`No es necesario añadir un contenedor de `,(0,X.jsx)(`i`,{children:`Toaster`}),` manualmente en tu aplicación. El componente `,(0,X.jsx)(`b`,{children:`FlashNotification`}),` gestiona automáticamente una única instancia global (Singleton), asegurando que las notificaciones no se dupliquen ni se pisen, incluso si el componente se usa en múltiples lugares de tu proyecto.`]}),(0,X.jsx)(c,{text:`import { FlashNotification, useFlashNotification } from '@eclass/ui-kit'

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
}`}),(0,X.jsx)(i,{children:`Estados`}),(0,X.jsx)(a,{children:`Existen 4 posibles estados que definen el ícono y color de la notificación.`}),(0,X.jsxs)(t,{children:[(0,X.jsx)(Q,{state:`info`,message:`<b>¡Grupo creado!</b><br />Tu grupo ha sido creado. Ahora puedes invitar a tus compañeros.`}),(0,X.jsx)(Q,{state:`success`,message:`Mensaje de éxito (Auto-cerrado)`}),(0,X.jsx)(Q,{state:`error`,message:`Mensaje de error (Persistente)`}),(0,X.jsx)(Q,{state:`warning`,message:`Mensaje de advertencia (Persistente)`})]}),(0,X.jsx)(i,{children:`Propiedades`}),(0,X.jsxs)(a,{children:[`El componente `,(0,X.jsx)(`b`,{children:`FlashNotification`}),` acepta las siguientes propiedades:`]}),(0,X.jsx)(t,{children:(0,X.jsx)(`div`,{style:{width:`100%`,overflowX:`auto`},children:(0,X.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,textAlign:`left`},children:[(0,X.jsx)(`thead`,{children:(0,X.jsxs)(`tr`,{style:{borderBottom:`1px solid #E2E8F0`},children:[(0,X.jsx)(`th`,{style:{padding:`8px`},children:`Propiedad`}),(0,X.jsx)(`th`,{style:{padding:`8px`},children:`Tipo`}),(0,X.jsx)(`th`,{style:{padding:`8px`},children:`Descripción`})]})}),(0,X.jsxs)(`tbody`,{children:[(0,X.jsxs)(`tr`,{style:{borderBottom:`1px solid #EDF2F7`},children:[(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`state`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`'success' | 'error' | 'info' | 'warning'`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:`Define el color, icono y comportamiento.`})]}),(0,X.jsxs)(`tr`,{style:{borderBottom:`1px solid #EDF2F7`},children:[(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`message`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`string`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:`El texto o HTML que se mostrará.`})]}),(0,X.jsxs)(`tr`,{style:{borderBottom:`1px solid #EDF2F7`},children:[(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`show`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`boolean`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:`Controla la visibilidad.`})]}),(0,X.jsxs)(`tr`,{style:{borderBottom:`1px solid #EDF2F7`},children:[(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`width`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`string`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:`Ancho fijo (ej: '400px').`})]}),(0,X.jsxs)(`tr`,{style:{borderBottom:`1px solid #EDF2F7`},children:[(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`m`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:(0,X.jsx)(`code`,{children:`string`})}),(0,X.jsx)(`td`,{style:{padding:`8px`},children:`Margen CSS adicional.`})]})]})]})})})]});export{$ as ViewFlashNotification,$ as default};
//# sourceMappingURL=FlashNotification-DKZCqhVX.js.map