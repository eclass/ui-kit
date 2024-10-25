import{j as o,Q as E,a as e,a7 as y,a2 as S,v as n,B as i,T as s,F as T,M as w,b as a,c as b,C as f}from"./index.ffa94048.js";const V=({color:t="white"})=>o(E,{width:"16px",height:"17px",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15 2.5H13V0.5H11V2.5H9V0.5H7V2.5H5V0.5H3V2.5H1C0.447 2.5 0 2.947 0 3.5V15.5C0 16.053 0.447 16.5 1 16.5H15C15.553 16.5 16 16.053 16 15.5V3.5C16 2.947 15.553 2.5 15 2.5ZM14 14.5H2V5.5H14V14.5Z",fill:t}),e("path",{d:"M6 7.5H4V9.5H6V7.5Z",fill:t}),e("path",{d:"M9 7.5H7V9.5H9V7.5Z",fill:t}),e("path",{d:"M6 10.5H4V12.5H6V10.5Z",fill:t}),e("path",{d:"M9 10.5H7V12.5H9V10.5Z",fill:t}),e("path",{d:"M12 7.5H10V9.5H12V7.5Z",fill:t}),e("path",{d:"M12 10.5H10V12.5H12V10.5Z",fill:t})]}),A=({color:t="white"})=>e(E,{width:"16px",height:"17px",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 8.5C0 4.1 3.6 0.5 8 0.5C12.4 0.5 16 4.1 16 8.5C16 12.9 12.4 16.5 8 16.5C3.6 16.5 0 12.9 0 8.5ZM7 9.5H12V7.5H9V4.5H7V9.5Z",fill:t})}),H=({id:t,eventTitle:l,startDate:h,startTime:g,buttonInfo:x,redirect:v,eventImage:u,targetBlank:d,isMobile:r})=>{const m={boxShadow:`0 2px 7px 0 ${n("colors-neutral-silverSand")}`};return e(y,{href:v,_hover:{textDecoration:"none"},target:d?"_blank":"_self",rel:d?"noopener noreferrer":void 0,display:"contents",children:o(S,{cursor:"pointer",transition:"box-shadow .3s",_active:m,_hover:m,_focus:m,w:"fit-content",borderRadius:n("radii-big"),display:r?"block":"flex",children:[e(i,{width:"285px",height:r?"140px":"168px",bgImage:`linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,1) 100%), url(${u})`,backgroundSize:"cover",borderRadius:r?"8px 8px 0px 0px":"8px 0 0 8px"}),o(i,{width:r?"285px":"305px",minHeight:r?"160px":"168px",borderRadius:r?"0 0 8px 8px":"0 8px 8px 0",border:n("borders-light"),display:"flex",flexDirection:"column",cursor:"pointer",children:[o(i,{width:"inherit",height:"100%",padding:"4",color:"#555555",gap:"16px",display:"grid",children:[e(s,{fontWeight:"700",children:l}),o(i,{display:"flex",alignItems:"center",gap:"4px",children:[e(V,{color:n("colors-main-ziggurat")}),e(s,{fontWeight:"400",children:h}),e(s,{color:n("borders-light"),children:"|"}),e(A,{color:n("colors-main-ziggurat")}),e(s,{children:g})]})]}),e(i,{borderTop:`${n("borders-light")}`,width:"100%",height:"50px",padding:"12px",backgroundColor:"white",alignItems:"center",display:"flex",justifyContent:"center",borderRadius:" 0 0 8px 8px",fontSize:"16px",fontFamily:"Roboto",color:n("colors-main-deepSkyBlue"),fontWeight:"500",children:x})]})]})},t)},C=({id:t,eventTitle:l,startDate:h,startTime:g,buttonInfo:x,redirect:v,eventImage:u,targetBlank:d})=>{const r={boxShadow:`0 2px 7px 0 ${n("colors-neutral-silverSand")}`};return e(y,{href:v,_hover:{textDecoration:"none"},target:d?"_blank":"_self",rel:d?"noopener noreferrer":void 0,display:"contents",children:o(i,{width:"286px",height:"247px",borderRadius:n("radii-big"),border:n("borders-light"),justifyContent:"center",textAlign:"center",display:"flex",flexDirection:"column",cursor:"pointer",transition:"box-shadow .3s",_active:r,_hover:r,_focus:r,children:[e(i,{flex:"1",bgImage:`linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,1) 100%), url(${u})`,backgroundSize:"cover",borderRadius:"8px 8px 0 0",margin:"0",display:"grid",alignItems:"flex-end",children:o(i,{color:n("colors-neutral-white"),padding:"16px",textAlign:"initial",fontFamily:"Roboto",fontSize:"16px",lineHeight:"21px",display:"grid",gap:"8px",children:[e(s,{fontWeight:"700",m:"0px",children:l}),o(i,{display:"flex",alignItems:"center",gap:"4px",children:[e(V,{}),e(s,{fontWeight:"400",m:"0px",children:h}),e(s,{m:"0px",children:"|"}),e(A,{}),e(s,{m:"0px",children:g})]})]})}),e(i,{width:"100%",height:"50px",backgroundColor:"white",alignItems:"center",display:"flex",justifyContent:"center",borderRadius:" 0 0 8px 8px",fontSize:"16px",fontFamily:"Roboto",color:n("colors-main-deepSkyBlue"),fontWeight:"500",children:x})]})},t)},p=({typeEvent:t,itemsEvent:l})=>t==="LARGE_EVENTS"?e(H,{...l}):e(C,{...l}),c=[{typeEvent:"LARGE_EVENTS",itemsEvent:{id:"1",eventTitle:"Resuelve tus dudas en vivo | Martes",startDate:"04/27/2024",startTime:"14:00 hrs",buttonInfo:"Ver informaci\xF3n del evento",redirect:"https://.....",eventImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU",isMobile:!1}},{typeEvent:"LARGE_EVENTS",itemsEvent:{id:"1",eventTitle:"Resuelve tus dudas en vivo | Martes",startDate:"04/27/2024",startTime:"14:00 hrs",buttonInfo:"Ver informaci\xF3n del evento",redirect:"https://.....",eventImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU",isMobile:!0}},{typeEvent:"SMALL_EVENTS",itemsEvent:{id:"1",eventTitle:"Resuelve tus dudas en vivo | Martes",startDate:"04/27/2024",startTime:"14:00 hrs",buttonInfo:"Ver informaci\xF3n del evento",redirect:"https://.....",eventImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU",isMobile:!0}}],M=()=>o(T,{children:[e(w,{children:"Eventos"}),o(a,{children:["Los eventos estan contenidos en una nueva caja, la cual cuenta con 3 disenios distintos agrupados en dos tipos",e("strong",{children:" LARGE_EVENTS"})," y ",e("strong",{children:" SMALL_EVENTS."}),"LARGE_EVENTS: contiene un responsive para mobile y desktop."]}),e(b,{children:"Types Definidos"}),e(a,{children:"El componente Eventos requiere el siguiente typado:"}),e(f,{text:`export interface EventosProps {
typeEvent: 'SMALL_EVENTS' | 'LARGE_EVENTS' | string // Tipo de caja
isMobile?: boolean // Si es mobile o no
itemsEvent: ItemsEventsProps // Objeto de eventos
}

export interface ItemsEventsProps {
id: string // Key para ordenar
eventTitle: string // Titulo del evento
startDate: string // Fecha de inicio del evento
startTime: string // Hora de inicio del evento
buttonInfo: string // Texto del boton
redirect: string // Link de redireccion
eventImage: string // Imagen del evento
targetBlank?: boolean // Si abre en nueva pesta\xF1a
isMobile?: boolean // Si es mobile o no
}

`}),e("i",{children:"Se deja en espanol debido a que Event es una funcion nativa"}),e(f,{text:"import { Eventos } from '@eclass/ui-kit'"}),e(p,{...c[2]}),e(b,{children:"Estados"}),e(a,{children:"Existen 3 posibles estados que definen el dise\xF1o del evento."}),o(i,{display:"grid",gap:"16px",children:[e(a,{children:e("strong",{children:"LARGE_EVENTS"})}),e(p,{...c[0]}),e(a,{children:e("strong",{children:"LARGE_EVENTS para Mobile"})}),e(p,{...c[1]}),e(a,{children:e("strong",{children:"SMALL_EVENTS o por defecto"})}),e(p,{...c[2]})]}),e(b,{children:"Modo de uso"}),e(a,{children:"El Evento se utiliza de manera bastante simple siguiendo el siguiente ejemplo:"}),e(f,{text:`// importamos el componente
import { Eventos } from '@eclass/ui-kit'
//Definimos las propieaddes para el Evento
const dataFakeEvents = {
{
typeEvent: 'LARGE_EVENTS',
itemsEvent: {
id: '1',
eventTitle: 'Resuelve tus dudas en vivo | Martes',
startDate: '04/27/2024',
startTime: '14:00 hrs',
buttonInfo: 'Ver informaci\xF3n del evento',
redirect: 'https://.....',
eventImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU',
isMobile: false,
},
}
} // Utilizamos el componente
<Eventos {...dataFakeEvents} />
`}),e(p,{...c[0]})]});export{M as default};
//# sourceMappingURL=Events.9f7b7830.js.map
