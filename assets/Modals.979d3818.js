import{X as w,j as i,F as u,a as e,ae as N,v as h,af as H,B as p,ag as F,ah as D,ai as P,aj as Y,ak as I,Y as Q,al as Z,Z as J,m as x,g as c,h as E,k as A,y as U,M as ee,b as m,c as v,C as y}from"./index.5b0dffd2.js";import{L as O}from"./ListComponent.9d061674.js";import{b as oe}from"./alertStates.8cbb0a6f.js";const G=({children:n,closeOnOverlayClick:t,fixedSubtitle:o,title:a,withoutMargin:r})=>{const[l]=w(`(min-width: ${T}px)`),s="32px",d="24px";return i(u,{children:[e(N,{bg:h("colors-main-deepSkyBlue"),borderTopRadius:l?"8px":0,color:h("colors-neutral-white"),fontFamily:"Roboto",fontSize:l?"20px":"18px",fontWeight:700,lineHeight:1,mb:r?0:"32px",paddingY:d,textAlign:"center",children:a}),t&&e(H,{background:"transparent!important",border:"none",color:h("colors-neutral-white"),h:"12px",p:"22px",right:0,top:0,w:"12px",_focus:{boxShadow:"none"},_focusVisible:{boxShadow:`inset 0 0 0 2px ${h("colors-alert-deepSkyBlue")}, inset 0 0 0 4px ${h("colors-neutral-white")}`}}),(o==null?void 0:o.trim())&&e(p,{as:"p",fontSize:"14px",lineHeight:"19px",mb:s,textAlign:"center",px:d,children:o}),n]})},_=({closeOnOverlayClick:n,scrollBehavior:t,fixedButtons:o,withoutMargin:a})=>{const[r]=w(`(min-width: ${T}px)`),d=t==="inside"||o;return{closeOnOverlayClick:n,closeOnEsc:n,scrollBehavior:d?"inside":"outside",contentProps:{maxH:d?"100dvh":"auto",minH:r?"300px":"100dvh",padding:0,width:"100%",animation:"none",sx:{bgColor:h("colors-neutral-white"),borderRadius:r?"8px":0,mt:r?"48px":0,mb:r?"48px":0,marginX:r?"auto":0,maxH:d?"calc(100dvh - 96px)":"auto",maxWidth:r?"690px":"100%",...o&&{".uikit-modalContent":{pb:0},".uikit-modalButtons":{...R}},...a&&{".uikit-modalContent":{pt:0,px:0},".uikit-modalButtons":{px:R.px}}}}}},T=641,R={py:"32px",px:"24px"},k=({children:n,closeOnOverlayClick:t=!0,fixedSubtitle:o,isOpen:a,onClose:r,title:l,withoutMargin:s=!1,scrollBehavior:d="outside",fixedButtons:C=!1,autoFocus:q=!1})=>{const z=d==="inside"||C,S=_({closeOnOverlayClick:t,scrollBehavior:d,fixedButtons:C,withoutMargin:s});return i(F,{closeOnOverlayClick:S.closeOnOverlayClick,closeOnEsc:S.closeOnEsc,isOpen:a,motionPreset:"scale",onClose:r,scrollBehavior:z?"inside":"outside",autoFocus:q,blockScrollOnMount:!1,children:[e(D,{}),e(p,{sx:{...z&&{".uikit-modalContent":{pb:"16px !important"},".uikit-modalButtons":{boxShadow:"0px 4px 16px 0px #5C5C5C33"}}},children:e(P,{...S.contentProps,children:e(G,{fixedButtons:C,withoutMargin:s,title:l,closeOnOverlayClick:t,fixedSubtitle:o,children:n})})})]})},ne=({children:n,isOpen:t,onClose:o,closeOnOverlayClick:a=!0,closeOnEsc:r=!0})=>{const l=_({closeOnOverlayClick:a,scrollBehavior:"outside",fixedButtons:!1,withoutMargin:!1});return i(F,{closeOnOverlayClick:a,closeOnEsc:r,isOpen:t,motionPreset:"scale",onClose:o,scrollBehavior:"outside",blockScrollOnMount:!1,children:[e(D,{}),e(P,{...l.contentProps,maxW:"355px",minW:"355px",minH:"auto",overflow:"hidden",sx:{...l.contentProps.sx,bgColor:h("colors-neutral-white"),maxWidth:"355px"},children:e(p,{children:n})})]})},te=({children:n})=>e(p,{p:"32px",children:n}),ie=({children:n,isOpen:t,onClose:o,closeOnOverlayClick:a=!0,closeOnEsc:r,withoutMargin:l=!1})=>{const s=_({closeOnOverlayClick:a,scrollBehavior:"outside",fixedButtons:!1,withoutMargin:l});return i(F,{closeOnOverlayClick:s.closeOnOverlayClick,closeOnEsc:r!=null?r:s.closeOnEsc,isOpen:t,motionPreset:"scale",onClose:o,scrollBehavior:"outside",blockScrollOnMount:!1,children:[e(D,{}),i(P,{...s.contentProps,children:[e(H,{background:"transparent !important",border:"none",color:h("colors-neutral-spanishGrey"),h:"12px",p:"22px",position:"absolute",right:0,top:0,w:"12px",zIndex:2,_focus:{boxShadow:"none"},_focusVisible:{boxShadow:`inset 0 0 0 2px ${h("colors-alert-deepSkyBlue")}, inset 0 0 0 4px ${h("colors-neutral-white")}`}}),e(p,{"data-testid":"modal-simple-content",px:l?0:"24px",py:l?0:"32px",children:n})]})]})},ae=Y,re=I,B=({children:n,buttonsCenter:t,buttonsColumn:o})=>{const[a]=w(`(min-width: ${T}px)`);return e(ae,{as:"footer",flexDirection:!a&&o?"column":"row",gap:"24px",justifyContent:t?"center":"flex-start",px:0,pt:"32px",pb:0,className:"uikit-modalButtons",sx:{"&>div, &>div>.react-ripples, &>div>.react-ripples>button":{width:a?"auto":"100%"}},children:n})},M=({children:n,pb:t="32px"})=>e(re,{pt:0,pb:t,className:"uikit-modalContent",children:n}),le=({fill:n=h("colors-main-deepSkyBlue")})=>i("svg",{"data-testid":"loading-svg",id:"prefix__eXySq0EBKm11",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 20",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",width:50,height:35,children:[e("style",{dangerouslySetInnerHTML:{__html:"@keyframes eXySq0EBKm12_f_o{0%,33.333333%,to{fill-opacity:.4}66.666667%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm13_f_o{0%,66.666667%,to{fill-opacity:.4}33.333333%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm14_f_o{0%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}33.333333%,66.666667%{fill-opacity:.4}to{fill-opacity:1}}"}}),e("circle",{r:2.502,transform:"translate(29.526 10)",fill:n,fillOpacity:.4,style:{animation:"eXySq0EBKm12_f_o 600ms linear infinite normal forwards"}}),e("circle",{r:2.502,transform:"translate(19 10)",fill:n,fillOpacity:.4,style:{animation:"eXySq0EBKm13_f_o 600ms linear infinite normal forwards"}}),e("circle",{r:2.053,transform:"matrix(1.21764 0 0 1.21764 8.562 10.002)",fill:n,style:{animation:"eXySq0EBKm14_f_o 600ms linear infinite normal forwards"}})]}),se=n=>{const t=J.sanitize(n,{ADD_ATTR:["target","rel"]}),o=new window.DOMParser().parseFromString(t,"text/html");return o.querySelectorAll('a[target="_blank"]').forEach(a=>{var s;const l=((s=a.getAttribute("rel"))!=null?s:"").split(/\s+/).filter(Boolean);l.includes("noopener")||l.push("noopener"),l.includes("noreferrer")||l.push("noreferrer"),a.setAttribute("rel",l.join(" "))}),o.body.innerHTML},W=({type:n,title:t,description:o,status:a,children:r})=>{const[l]=w("(min-width: 641px)"),s=typeof o=="string"?Q(se(o)):o;return i(u,{children:[i(I,{p:"32px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"16px",fontFamily:"Roboto",children:[n==="loading"?e(le,{}):e(p,{display:"flex",justifyContent:"center",children:oe[a!=null?a:"info"].icon}),t&&e(p,{as:"p",fontWeight:"700",fontSize:l?"20px":"18px",lineHeight:"24px",mb:0,children:t}),o&&e(p,{as:"p",fontSize:"16px",lineHeight:"24px",mb:0,sx:{a:{...Z}},children:s})]}),n!=="loading"&&r?r:e(u,{})]})},V=()=>{const[n]=w(`(min-width: ${T}px)`);return{closeOnOverlayClick:!1,closeOnEsc:!1,scrollBehavior:"outside",contentProps:{borderRadius:"8px",p:0,m:"10vh auto 0",sx:{maxWidth:n?"589px":"343px"}}}},ce=({autoFocus:n=!1,type:t,isOpen:o,onClose:a,children:r,title:l,description:s,status:d})=>{const C=V();return e(u,{children:i(F,{closeOnOverlayClick:!1,isOpen:o,motionPreset:"scale",onClose:a,closeOnEsc:t!=="loading",autoFocus:n,children:[e(D,{}),e(P,{...C.contentProps,children:e(W,{type:t,title:l,description:s,status:d,children:r})})]})})},j=({children:n})=>e(p,{autoFocus:!1,display:"flex",w:"100%",borderTop:`1px solid ${h("colors-neutral-platinum")}`,sx:{button:{borderRight:`1px solid ${h("colors-neutral-platinum")}`,fontFamily:"Roboto",fontSize:"16px",fontWeight:500,lineHeight:"21px",p:"16px",textDecor:"none",width:"100%","&:last-child":{borderRight:"none"}}},children:n}),de=({type:n,closeOnOverlayClick:t,scrollBehavior:o,fixedButtons:a,withoutMargin:r})=>{const l=_({closeOnOverlayClick:t,scrollBehavior:o,fixedButtons:a,withoutMargin:r}),s=V();switch(n){case"modal":return l;case"modalAlert":case"modalLoading":return s}},ue=n=>{const{type:t,isOpen:o,onClose:a,autoFocus:r=!1,children:l,title:s,closeOnOverlayClick:d=!0,fixedSubtitle:C,withoutMargin:q=!1,scrollBehavior:z="outside",fixedButtons:S=!1}=n,L=de({type:t,closeOnOverlayClick:d,scrollBehavior:z,fixedButtons:S,withoutMargin:q}),$=()=>{switch(t){case"modal":return e(G,{fixedButtons:S,withoutMargin:q,title:s,closeOnOverlayClick:d,fixedSubtitle:C,children:l});case"modalAlert":case"modalLoading":{const{description:X,status:K}=n;return e(W,{type:t==="modalAlert"?"info":"loading",title:s,description:X,status:K,children:l})}}};return i(F,{isOpen:o,onClose:a,motionPreset:"scale",autoFocus:r,closeOnOverlayClick:L.closeOnOverlayClick,closeOnEsc:L.closeOnEsc,scrollBehavior:L.scrollBehavior,children:[e(D,{}),e(P,{...L.contentProps,children:$()})]})},g=({type:n})=>n==="withoutButtons"?e(me,{}):n==="inside"?e(he,{}):n==="buttonsOutside"?e(xe,{}):n==="buttonsCenter"?e(fe,{}):n==="buttonsColumn"?e(Ce,{}):n==="fixedSubtitle"?e(ge,{}):n==="withoutMargin"?e(Me,{}):n==="closeOnOverlayClick"?e(be,{}):e(pe,{}),b=`alumnos, adem\xE1s de definir el uso de la plataforma de estudio. 1) El material del
              programa de estudio estar\xE1 disponible en una plataforma tecnol\xF3gica a la que cada
              alumno podr\xE1 acceder en la siguiente direcci\xF3n: http://cursos.eclass.cl 2) Las
              credenciales de acceso que recibe el alumno para ingresar a su programa de estudio,
              son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el
              alumno se compromete a realizar el programa en el que se encuentra inscrito y a
              revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e
              Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de
              estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se
              compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente
              con fines educativos en el marco del programa de estudio. Se deja constancia que la
              alumnos, adem\xE1s de definir el uso de la plataforma de estudio. 5) El material del
              programa de estudio estar\xE1 disponible en una plataforma tecnol\xF3gica a la que cada
              alumno podr\xE1 acceder en la siguiente direcci\xF3n: http://cursos.eclass.cl`,pe=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"Open Modal"}),e(k,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:i(M,{children:[e("p",{children:b}),i(B,{children:[e(c,{onClick:o,children:"Guardar"}),e(E,{onClick:o,children:"Cancelar"})]})]})})]})},me=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"Sin botones"}),e(k,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:e(M,{children:e("p",{children:b})})})]})},he=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"scroll dentro"}),e(k,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:i(M,{children:[i("p",{children:[b," 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de estudio, son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el alumno se compromete a realizar el programa en el que se encuentra inscrito y a revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente con fines educativos en el marco del programa de estudio. Se deja constancia que la"]}),i(B,{children:[e(c,{onClick:o,children:"Guardar"}),e(E,{onClick:o,children:"Cancelar"})]})]})})]})},xe=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"botones fuera"}),i(k,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",fixedButtons:!0,children:[e(M,{children:i("p",{children:[b," 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de estudio, son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el alumno se compromete a realizar el programa en el que se encuentra inscrito y a revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente con fines educativos en el marco del programa de estudio. Se deja constancia que la"]})}),i(B,{children:[e(c,{onClick:o,children:"Guardar"}),e(E,{onClick:o,children:"Cancelar"})]})]})]})},fe=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"boton centrado"}),e(k,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:i(M,{children:[e("p",{children:b}),e(B,{buttonsCenter:!0,children:e(c,{onClick:o,children:"Guardar"})})]})})]})},Ce=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"mobile en columna"}),e(k,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:i(M,{children:[e("p",{children:b}),i(B,{buttonsColumn:!0,children:[e(c,{onClick:o,children:"Guardar"}),e(E,{onClick:o,children:"Cancelar"})]})]})})]})},ge=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"Subtitulo"}),e(k,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",fixedSubtitle:"Este es  un subtitulo que queda fijo",fixedButtons:!0,children:i(M,{children:[i("p",{children:[b," 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de estudio, son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el alumno se compromete a realizar el programa en el que se encuentra inscrito y a revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente con fines educativos en el marco del programa de estudio. Se deja constancia que la"]}),i(B,{children:[e(c,{onClick:o,children:"Guardar"}),e(E,{onClick:o,children:"Cancelar"})]})]})})]})},Me=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"Sin margin"}),e(k,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",withoutMargin:!0,children:i(M,{children:[e("p",{children:b}),i(B,{children:[e(c,{onClick:o,children:"Guardar"}),e(E,{onClick:o,children:"Cancelar"})]})]})})]})},be=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"Cerrar solo en botones"}),e(k,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",closeOnOverlayClick:!1,children:i(M,{children:[e("p",{children:b}),i(B,{children:[e(c,{onClick:o,children:"Guardar"}),e(E,{onClick:o,children:"Cancelar"})]})]})})]})},f=({button:n,type:t,status:o,withoutTitle:a,withoutDescription:r})=>{const{isOpen:l,onOpen:s,onClose:d}=x(),C={info:{button:"ModalAlertNew",title:"\xBFSeguro que deseas borrar esta pregunta?",description:'Por favor escoge otro horario.  direcci\xF3n: <a href="http://cursos.eclass.cl" target="_blank" rel="noopener noreferrer">http://cursos.eclass.cl</a>'},loading:{button:"ModalAlertNew Loading",title:"Descargando documento",description:"Se est\xE1 preparando el archivo. Esto podr\xEDa tardar un momento."}};return i(u,{children:[e(c,{onClick:s,children:o!=null?o:n}),e(ce,{isOpen:l,onClose:d,type:t==="loading"?"loading":"info",status:o!=null?o:"success",title:a?"":C[t!=null?t:"info"].title,description:r?"":C[t!=null?t:"info"].description,children:i(j,{children:[e(A,{as:"button",onClick:()=>d(),children:"Aceptar"}),e(A,{as:"button",onClick:()=>d(),children:"Cancelar"})]})})]})},ye=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"ModalSimple"}),e(ie,{isOpen:n,onClose:o,children:e("p",{children:b})})]})},ke=()=>{const{isOpen:n,onOpen:t,onClose:o}=x();return i(u,{children:[e(c,{onClick:t,children:"ModalCard"}),i(ne,{isOpen:n,onClose:o,children:[e(te,{children:i(p,{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",children:[e(p,{as:"p",fontSize:"20px",fontWeight:700,lineHeight:"24px",mb:"16px",children:"!Has ganado una nueva medalla!"}),e(p,{w:"120px",h:"120px",borderRadius:"16px",bg:"#E0EEFA",mb:"16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:700,children:"Medal"}),e(p,{as:"p",fontSize:"16px",fontWeight:700,lineHeight:"24px",mb:"8px",children:"Blast off"}),e(p,{as:"p",fontSize:"16px",lineHeight:"24px",color:"#808080",mb:"16px",children:"\xA1Felicitaciones, has comenzado tu viaje de estudio!"}),e(A,{as:"button",onClick:o,children:"Ver mis medallas"})]})}),e(j,{children:e(A,{as:"button",onClick:o,children:"Entendido"})})]})]})},Be=()=>{const{isOpen:n,onOpen:t,onClose:o}=x(),[a,r]=U.exports.useState("modal");return i(u,{children:[e(c,{onClick:t,children:"ModalMultiple"}),e(ue,{type:a,isOpen:n,onClose:o,title:a==="modal"?"Confirmaci\xF3n":"\xBFSeguro que deseas borrar esta pregunta?",status:"info",description:"Por favor escoge otro horario.",children:a==="modal"?i(M,{children:[e("p",{children:"alumnos, adem\xE1s de definir el uso de la plataforma de estudio."}),i(B,{children:[e(c,{onClick:()=>r("modalAlert"),children:"Guardar"}),e(E,{onClick:()=>o(),children:"Cancelar"})]})]}):i(j,{children:[e(A,{as:"button",onClick:()=>r("modal"),children:"Aceptar"}),e(A,{as:"button",onClick:()=>o(),children:"Cancelar"})]})})]})},Se=()=>i(u,{children:[e(ee,{children:"Modales"}),i(m,{children:["Para los modales, tenemos dos tipos de componentes: Modal y ModalAlert. Cada uno tiene sus"," ",e("strong",{children:"variantes"})," que definen su apariencia y funcionalidad, y tambi\xE9n tienen",e("strong",{children:" tama\xF1os y paddings predefinidos"}),"."]}),i(O,{children:[e(g,{}),e(f,{button:"Open ModalAlert"})]}),e(v,{children:"Tipo Modal"}),i(m,{children:["Es el Modal tradicional para mostrar contenido, que incluye una cabecera, contenido y footer. En el componente ",e("strong",{children:"ModalContent"})," va todo lo que quieras visualizar en el modal este puede contener hasta los botones ",e("strong",{children:"ModalButtons"}),", igualmente lo botones pueden ir por fuera para cuando necesitas que no esten dentro del scroll."]}),e(m,{children:"El componente se importa de la siguiente manera:"}),e(y,{text:"import { Modal } from '@eclass/ui-kit'"}),e(O,{children:e(g,{})}),e(y,{text:`
import { Modal, ModalContent, ModalButtons } from '@eclass/ui-kit'

export function View(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Confirmaci\xF3n"
      >
        <ModalContent>
          <p>Contenido del modal...</p>
          <ModalButtons>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
            <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    )
}`}),e(v,{children:"Tipo ModalSimple"}),i(m,{children:["Es una variante m\xEDnima del modal para casos donde solo necesitas contenido libre y la acci\xF3n de cierre. No renderiza la banda azul ni t\xEDtulo, y mantiene la ",e("strong",{children:"X"})," como control principal junto con las props base del modal."]}),e(m,{children:"El componente se importa de la siguiente manera:"}),e(y,{text:"import { ModalSimple } from '@eclass/ui-kit'"}),e(O,{children:e(ye,{})}),e(y,{text:`
import { ModalSimple } from '@eclass/ui-kit'
import { useDisclosure } from '@chakra-ui/react'

export function View(){
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>Abrir ModalSimple</BtnPrimary>
      <ModalSimple
        isOpen={isOpen}
        onClose={onClose}
      >
        <p>Contenido libre del modal...</p>
      </ModalSimple>
    </>
  )
}`}),e(v,{children:"Tipo ModalCard"}),i(m,{children:["Es una variante pensada para contenido tipo card, como logros o medallas. No renderiza iconos ni encabezado por defecto, mantiene la ",e("strong",{children:"X"})," para cerrar y permite contenido completamente libre. Su ancho est\xE1 pensado para cards compactas."]}),e(m,{children:"El componente se importa de la siguiente manera:"}),e(y,{text:"import { ModalCard, ModalCardContent, ModalAlertButtons } from '@eclass/ui-kit'"}),e(O,{children:e(ke,{})}),e(y,{text:`
import { ModalCard, ModalCardContent, ModalAlertButtons, BtnLink } from '@eclass/ui-kit'
import { useDisclosure } from '@chakra-ui/react'

export function View(){
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>Abrir ModalCard</BtnPrimary>
      <ModalCard
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalCardContent>
          <div>Contenido libre del card...</div>
        </ModalCardContent>
        <ModalAlertButtons>
          <BtnLink as="button" onClick={onClose}>
            Entendido
          </BtnLink>
        </ModalAlertButtons>
      </ModalCard>
    </>
  )
}`}),e(v,{children:"Variantes del tipo Modal"}),i(m,{children:["Variantes del modal dependiendo de sus ",e("strong",{children:"props"}),". El valor de los props va definido en sus tipos."]}),i(O,{children:[e(g,{type:"withoutButtons"}),e(g,{type:"inside"}),e(g,{type:"buttonsOutside"}),e(g,{type:"closeOnOverlayClick"}),e(g,{type:"fixedSubtitle"}),e(g,{type:"withoutMargin"}),e(g,{type:"buttonsCenter"}),e(g,{type:"buttonsColumn"})]}),e(v,{children:"Tipo ModalAlert"}),e(m,{children:"Es el modal que se utiliza a modo de alerta para el usuario, el cual posee informaci\xF3n reducida y tambi\xE9n puede contar con botones. Este componente tiene dos visualizaciones principales."}),e(m,{children:"El componente se importa de la siguiente manera:"}),e(y,{text:"import { ModalAlert } from '@eclass/ui-kit'"}),i(O,{children:[e(f,{button:"Modal de Alerta"}),e(f,{button:"Modal de Alerta (Cargando)",type:"loading"})]}),e(y,{text:`
import { ModalAlert } from '@eclass/ui-kit'
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export function View(){
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Abrir Modal de Alerta</Button>
      <ModalAlert
        isOpen={isOpen}
        onClose={onClose}
        type="info"
        title="Confirmaci\xF3n"
        buttons={[
          { action: () => onClose(), text: 'Guardar' },
          { type: 'secondary', action: () => onClose(), text: 'Cancelar' },
        ]}
      >
        <p>Contenido de la alerta...</p>
      </ModalAlert>
    </>)
}`}),e(v,{children:"Variantes del tipo ModalAlert"}),i(m,{children:["Las variantes del modal son dos, como ejemplificamos m\xE1s arriba. Sin embargo, cada una tambi\xE9n puede variar; por ejemplo, se pueden ",e("strong",{children:"omitir los textos"})," pasados como props, y en el ModalAlert normal el icono var\xEDa seg\xFAn los estados definidos."]}),i(m,{children:["Si la prop ",e("strong",{children:"description"})," se env\xEDa como string, admite HTML sanitizado. En el caso de los enlaces con ",e("code",{children:'target="_blank"'}),", el componente preserva el target y agrega ",e("code",{children:'rel="noopener noreferrer"'})," para abrir links externos de forma segura."]}),i(O,{children:[e(f,{status:"success"}),e(f,{status:"error"}),e(f,{status:"warning"}),e(f,{status:"info"}),e(f,{button:"Modal de Alerta sin t\xEDtulo",withoutTitle:!0}),e(f,{button:"Modal de Alerta sin descripci\xF3n",withoutDescription:!0}),e(f,{button:"Modal de Alerta cargando (sin t\xEDtulo)",type:"loading",withoutTitle:!0}),e(f,{button:"Modal de Alerta cargando (sin descripci\xF3n)",type:"loading",withoutDescription:!0})]}),e(v,{children:"Tipo ModalMultiple"}),i(m,{children:["Es un componente unificador que permite renderizar dos tipos de modal distintos dentro de un mismo flujo: ",e("br",{}),e("br",{})," ",e("strong",{children:"modal"})," \u2192 Modal tradicional (contenido libre, cabecera, footer, botones, scroll).",e("br",{})," ",e("strong",{children:"modalAlert / modalLoading"})," \u2192 Modal de alerta o de carga, con contenido reducido y foco en la acci\xF3n del usuario. ",e("br",{}),e("br",{})," Est\xE1 pensado para casos donde el estado del modal cambia (por ejemplo, confirmaciones, advertencias o pasos intermedios) sin necesidad de cerrar y volver a abrir otro modal."]}),e(O,{children:e(Be,{})}),e(y,{text:`
import { 
  ModalMultiple, 
  ModalMultipleProps, 
  BtnPrimary, 
  BtnSecondary, 
  ModalContent, 
  ModalButtons, 
  ModalAlertButtons, 
  BtnLink 
} from '@eclass/ui-kit'
import { useDisclosure } from '@chakra-ui/react'

export function View(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [type, setType] = useState<ModalMultipleProps['type']>('modal')

  return (
    <>
      <BtnPrimary onClick={onOpen}>ModalMultiple</BtnPrimary>
      <ModalMultiple
        type={type}
        isOpen={isOpen}
        onClose={onClose}
        title={type === 'modal' ? 'Confirmaci\xF3n' : '\xBFSeguro que deseas borrar esta pregunta?'}
        status="info"
        description="Por favor escoge otro horario."
      >
        {type === 'modal' ? (
          <ModalContent>
            <p>alumnos, adem\xE1s de definir el uso de la plataforma de estudio.</p>
            <ModalButtons>
              <BtnPrimary onClick={() => setType('modalAlert')}>Guardar</BtnPrimary>
              <BtnSecondary onClick={() => onClose()}>Cancelar</BtnSecondary>
            </ModalButtons>
          </ModalContent>
        ) : (
          <ModalAlertButtons>
            <BtnLink as="button" onClick={() => setType('modal')}>
              Aceptar
            </BtnLink>
            <BtnLink as="button" onClick={() => onClose()}>
              Cancelar
            </BtnLink>
          </ModalAlertButtons>
        )}
      </ModalMultiple>
    </>)
}`})]});export{Se as ViewModals,Se as default};
//# sourceMappingURL=Modals.979d3818.js.map
