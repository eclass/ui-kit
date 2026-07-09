import{X as j,j as r,F as m,a as e,ae as U,v as x,af as Y,B as h,ag as R,ah as I,ai as G,aj as ee,ak as H,Y as oe,al as ne,Z as te,m as C,g as u,h as S,k as q,y as re,M as ae,b as f,c as w,C as k}from"./index.d358ea95.js";import{L as A}from"./ListComponent.6e95002a.js";import{b as ie}from"./alertStates.ad3c944c.js";const Q=({children:n,closeOnOverlayClick:t,fixedSubtitle:o,title:l,withoutMargin:s})=>{const[a]=j(`(min-width: ${X}px)`),c="32px",i="24px";return r(m,{children:[e(U,{bg:x("colors-main-deepSkyBlue"),borderTopRadius:a?"8px":0,color:x("colors-neutral-white"),fontFamily:"Roboto",fontSize:a?"20px":"18px",fontWeight:700,lineHeight:1,mb:s?0:"32px",paddingY:i,textAlign:"center",children:l}),t&&e(Y,{background:"transparent!important",border:"none",color:x("colors-neutral-white"),h:"12px",p:"22px",right:0,top:0,w:"12px",_focus:{boxShadow:"none"},_focusVisible:{boxShadow:`inset 0 0 0 2px ${x("colors-alert-deepSkyBlue")}, inset 0 0 0 4px ${x("colors-neutral-white")}`}}),(o==null?void 0:o.trim())&&e(h,{as:"p",fontSize:"14px",lineHeight:"19px",mb:c,textAlign:"center",px:i,children:o}),n]})},$=({closeOnOverlayClick:n,scrollBehavior:t,fixedButtons:o,withoutMargin:l,minWidth:s,maxWidth:a,minHeight:c,maxHeight:i,mobileCompact:d=!1})=>{const[p]=j(`(min-width: ${X}px)`),E=t==="inside",z=o,F=s!=null?s:"690px",L=a!=null?a:"690px",_=c!=null?c:"300px",D=i!=null?i:"calc(100% - 96px)",v=i!=null?i:"auto",P=a!=null?a:"calc(100vw - 32px)",K=a!=null?a:"375px",V=i!=null?i:"calc(100dvh - 32px)",T=E||z;return{closeOnOverlayClick:n,closeOnEsc:n,scrollBehavior:T?"inside":"outside",contentProps:{maxH:T?i!=null?i:"100%":d&&!p?V:v,minH:p?_:d?"auto":"100%",padding:0,width:p?"fit-content":d?P:"100%",animation:"none",sx:{bgColor:x("colors-neutral-white"),borderRadius:p?"8px":d?"10px":0,mt:p?"48px":d?"auto":0,mb:p?"48px":d?"auto":0,marginX:p||d?"auto":0,maxH:T?D:d&&!p?V:v,minWidth:p?F:d?"auto":void 0,maxWidth:p?L:d?K:"100%",overflow:d&&!p?"hidden":void 0,...o&&{".uikit-modalContent":{pb:0},".uikit-modalButtons":{...W}},...l&&{".uikit-modalContent":{pt:0,px:0},".uikit-modalButtons":{px:W.px}}}}}},X=641,W={py:"32px",px:"24px"},B=({children:n,closeOnOverlayClick:t=!0,fixedSubtitle:o,isOpen:l,onClose:s,title:a,withoutMargin:c=!1,scrollBehavior:i="outside",fixedButtons:d=!1,autoFocus:p=!1,returnFocusOnClose:E=!0,minWidth:z,maxWidth:F,minHeight:L,maxHeight:_})=>{const D=i==="inside"||d,v=$({closeOnOverlayClick:t,scrollBehavior:i,fixedButtons:d,withoutMargin:c,minWidth:z,maxWidth:F,minHeight:L,maxHeight:_});return r(R,{closeOnOverlayClick:v.closeOnOverlayClick,closeOnEsc:v.closeOnEsc,isOpen:l,motionPreset:"scale",onClose:s,scrollBehavior:D?"inside":"outside",autoFocus:p,returnFocusOnClose:E,blockScrollOnMount:!1,children:[e(I,{}),e(h,{sx:{...D&&{".uikit-modalContent":{pb:"16px !important"},".uikit-modalButtons":{boxShadow:"0px 4px 16px 0px #5C5C5C33"}}},children:e(G,{...v.contentProps,children:e(Q,{fixedButtons:d,withoutMargin:c,title:a,closeOnOverlayClick:t,fixedSubtitle:o,children:n})})})]})},le=({children:n,isOpen:t,onClose:o,closeOnOverlayClick:l=!0,closeOnEsc:s=!0})=>{const a=$({closeOnOverlayClick:l,scrollBehavior:"outside",fixedButtons:!1,withoutMargin:!1});return r(R,{closeOnOverlayClick:l,closeOnEsc:s,isOpen:t,motionPreset:"scale",onClose:o,scrollBehavior:"outside",blockScrollOnMount:!1,children:[e(I,{}),e(G,{...a.contentProps,maxW:"355px",minW:"355px",minH:"auto",overflow:"hidden",sx:{...a.contentProps.sx,bgColor:x("colors-neutral-white"),maxWidth:"355px"},children:e(h,{children:n})})]})},se=({children:n})=>e(h,{p:"32px",children:n}),ce=({children:n,isOpen:t,onClose:o,closeOnOverlayClick:l=!0,closeOnEsc:s,withoutMargin:a=!1,mobileCompact:c=!1})=>{const i=$({closeOnOverlayClick:l,scrollBehavior:"outside",fixedButtons:!1,withoutMargin:a,mobileCompact:c});return r(R,{closeOnOverlayClick:i.closeOnOverlayClick,closeOnEsc:s!=null?s:i.closeOnEsc,isOpen:t,motionPreset:"scale",onClose:o,scrollBehavior:"outside",isCentered:c,blockScrollOnMount:!1,children:[e(I,{}),r(G,{...i.contentProps,children:[e(Y,{background:"transparent !important",border:"none",color:x("colors-neutral-spanishGrey"),h:"12px",p:"22px",position:"absolute",right:0,top:0,w:"12px",zIndex:2,_focus:{boxShadow:"none"},_focusVisible:{boxShadow:`inset 0 0 0 2px ${x("colors-alert-deepSkyBlue")}, inset 0 0 0 4px ${x("colors-neutral-white")}`}}),e(h,{"data-testid":"modal-simple-content",px:a?0:"24px",py:a?0:"32px",children:n})]})]})},de=ee,ue=H,O=({children:n,buttonsCenter:t,buttonsColumn:o})=>{const[l]=j(`(min-width: ${X}px)`);return e(de,{as:"footer",flexDirection:!l&&o?"column":"row",gap:"24px",justifyContent:t?"center":"flex-start",px:0,pt:"32px",pb:0,className:"uikit-modalButtons",sx:{"&>div, &>div>.react-ripples, &>div>.react-ripples>button":{width:l?"auto":"100%"}},children:n})},b=({children:n,pb:t="32px"})=>e(ue,{pt:0,pb:t,className:"uikit-modalContent",children:n}),pe=({fill:n=x("colors-main-deepSkyBlue")})=>r("svg",{"data-testid":"loading-svg",id:"prefix__eXySq0EBKm11",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 20",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",width:50,height:35,children:[e("style",{dangerouslySetInnerHTML:{__html:"@keyframes eXySq0EBKm12_f_o{0%,33.333333%,to{fill-opacity:.4}66.666667%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm13_f_o{0%,66.666667%,to{fill-opacity:.4}33.333333%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm14_f_o{0%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}33.333333%,66.666667%{fill-opacity:.4}to{fill-opacity:1}}"}}),e("circle",{r:2.502,transform:"translate(29.526 10)",fill:n,fillOpacity:.4,style:{animation:"eXySq0EBKm12_f_o 600ms linear infinite normal forwards"}}),e("circle",{r:2.502,transform:"translate(19 10)",fill:n,fillOpacity:.4,style:{animation:"eXySq0EBKm13_f_o 600ms linear infinite normal forwards"}}),e("circle",{r:2.053,transform:"matrix(1.21764 0 0 1.21764 8.562 10.002)",fill:n,style:{animation:"eXySq0EBKm14_f_o 600ms linear infinite normal forwards"}})]}),me=n=>{const t=te.sanitize(n,{ADD_ATTR:["target","rel"]}),o=new window.DOMParser().parseFromString(t,"text/html");return o.querySelectorAll('a[target="_blank"]').forEach(l=>{var c;const a=((c=l.getAttribute("rel"))!=null?c:"").split(/\s+/).filter(Boolean);a.includes("noopener")||a.push("noopener"),a.includes("noreferrer")||a.push("noreferrer"),l.setAttribute("rel",a.join(" "))}),o.body.innerHTML},Z=({type:n,title:t,description:o,status:l,children:s})=>{const[a]=j("(min-width: 641px)"),c=typeof o=="string"?oe(me(o)):o;return r(m,{children:[r(H,{p:"32px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"16px",fontFamily:"Roboto",children:[n==="loading"?e(pe,{}):e(h,{display:"flex",justifyContent:"center",children:ie[l!=null?l:"info"].icon}),t&&e(h,{as:"p",fontWeight:"700",fontSize:a?"20px":"18px",lineHeight:"24px",mb:0,children:t}),o&&e(h,{as:"p",fontSize:"16px",lineHeight:"24px",mb:0,sx:{a:{...ne}},children:c})]}),n!=="loading"&&s?s:e(m,{})]})},J=()=>{const[n]=j(`(min-width: ${X}px)`);return{closeOnOverlayClick:!1,closeOnEsc:!1,scrollBehavior:"outside",contentProps:{borderRadius:"8px",p:0,m:"10vh auto 0",sx:{maxWidth:n?"589px":"calc(100vw - 32px)"}}}},he=({autoFocus:n=!1,type:t,returnFocusOnClose:o=!0,isOpen:l,onClose:s,children:a,title:c,description:i,status:d})=>{const p=J();return e(m,{children:r(R,{closeOnOverlayClick:!1,isOpen:l,motionPreset:"scale",onClose:s,closeOnEsc:t!=="loading",autoFocus:n,returnFocusOnClose:o,children:[e(I,{}),e(G,{...p.contentProps,children:e(Z,{type:t,title:c,description:i,status:d,children:a})})]})})},N=({children:n})=>e(h,{autoFocus:!1,display:"flex",w:"100%",borderTop:`1px solid ${x("colors-neutral-platinum")}`,sx:{button:{borderRight:`1px solid ${x("colors-neutral-platinum")}`,fontFamily:"Roboto",fontSize:"16px",fontWeight:500,lineHeight:"21px",p:"16px",textDecor:"none",width:"100%","&:last-child":{borderRight:"none"}}},children:n}),fe=({type:n,closeOnOverlayClick:t,scrollBehavior:o,fixedButtons:l,withoutMargin:s,minWidth:a,maxWidth:c,minHeight:i,maxHeight:d})=>{const p=$({closeOnOverlayClick:t,scrollBehavior:o,fixedButtons:l,withoutMargin:s,minWidth:a,maxWidth:c,minHeight:i,maxHeight:d}),E=J();switch(n){case"modal":return p;case"modalAlert":case"modalLoading":return E}},xe=n=>{const{type:t,isOpen:o,onClose:l,autoFocus:s=!1,returnFocusOnClose:a=!0,children:c,title:i,closeOnOverlayClick:d=!0,fixedSubtitle:p,withoutMargin:E=!1,scrollBehavior:z="outside",fixedButtons:F=!1,minWidth:L,maxWidth:_,minHeight:D,maxHeight:v}=n,P=fe({type:t,closeOnOverlayClick:d,scrollBehavior:z,fixedButtons:F,withoutMargin:E,minWidth:L,maxWidth:_,minHeight:D,maxHeight:v}),K=()=>{switch(t){case"modal":return e(Q,{fixedButtons:F,withoutMargin:E,title:i,closeOnOverlayClick:d,fixedSubtitle:p,children:c});case"modalAlert":case"modalLoading":{const{description:V,status:T}=n;return e(Z,{type:t==="modalAlert"?"info":"loading",title:i,description:V,status:T,children:c})}}};return r(R,{isOpen:o,onClose:l,motionPreset:"scale",autoFocus:s,returnFocusOnClose:a,closeOnOverlayClick:P.closeOnOverlayClick,closeOnEsc:P.closeOnEsc,scrollBehavior:P.scrollBehavior,children:[e(I,{}),e(G,{...P.contentProps,children:K()})]})},g=({type:n})=>n==="withoutButtons"?e(Me,{}):n==="inside"?e(ge,{}):n==="buttonsOutside"?e(be,{}):n==="buttonsCenter"?e(ye,{}):n==="buttonsColumn"?e(ke,{}):n==="fixedSubtitle"?e(Be,{}):n==="withoutMargin"?e(Oe,{}):n==="closeOnOverlayClick"?e(Ee,{}):e(Ce,{}),y=`alumnos, adem\xE1s de definir el uso de la plataforma de estudio. 1) El material del
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
              alumno podr\xE1 acceder en la siguiente direcci\xF3n: http://cursos.eclass.cl`,Ce=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"Open Modal"}),e(B,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:r(b,{children:[e("p",{children:y}),r(O,{children:[e(u,{onClick:o,children:"Guardar"}),e(S,{onClick:o,children:"Cancelar"})]})]})})]})},Me=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"Sin botones"}),e(B,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:e(b,{children:e("p",{children:y})})})]})},ge=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"scroll dentro"}),e(B,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:r(b,{children:[r("p",{children:[y," 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de estudio, son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el alumno se compromete a realizar el programa en el que se encuentra inscrito y a revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente con fines educativos en el marco del programa de estudio. Se deja constancia que la"]}),r(O,{children:[e(u,{onClick:o,children:"Guardar"}),e(S,{onClick:o,children:"Cancelar"})]})]})})]})},be=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"botones fuera"}),r(B,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",fixedButtons:!0,children:[e(b,{children:r("p",{children:[y," 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de estudio, son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el alumno se compromete a realizar el programa en el que se encuentra inscrito y a revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente con fines educativos en el marco del programa de estudio. Se deja constancia que la"]})}),r(O,{children:[e(u,{onClick:o,children:"Guardar"}),e(S,{onClick:o,children:"Cancelar"})]})]})]})},ye=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"boton centrado"}),e(B,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:r(b,{children:[e("p",{children:y}),e(O,{buttonsCenter:!0,children:e(u,{onClick:o,children:"Guardar"})})]})})]})},ke=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"mobile en columna"}),e(B,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:r(b,{children:[e("p",{children:y}),r(O,{buttonsColumn:!0,children:[e(u,{onClick:o,children:"Guardar"}),e(S,{onClick:o,children:"Cancelar"})]})]})})]})},Be=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"Subtitulo"}),e(B,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",fixedSubtitle:"Este es  un subtitulo que queda fijo",fixedButtons:!0,children:r(b,{children:[r("p",{children:[y," 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de estudio, son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el alumno se compromete a realizar el programa en el que se encuentra inscrito y a revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente con fines educativos en el marco del programa de estudio. Se deja constancia que la"]}),r(O,{children:[e(u,{onClick:o,children:"Guardar"}),e(S,{onClick:o,children:"Cancelar"})]})]})})]})},Oe=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"Sin margin"}),e(B,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",withoutMargin:!0,children:r(b,{children:[e("p",{children:y}),r(O,{children:[e(u,{onClick:o,children:"Guardar"}),e(S,{onClick:o,children:"Cancelar"})]})]})})]})},Ee=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"Cerrar solo en botones"}),e(B,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",closeOnOverlayClick:!1,children:r(b,{children:[e("p",{children:y}),r(O,{children:[e(u,{onClick:o,children:"Guardar"}),e(S,{onClick:o,children:"Cancelar"})]})]})})]})},M=({button:n,type:t,status:o,withoutTitle:l,withoutDescription:s})=>{const{isOpen:a,onOpen:c,onClose:i}=C(),d={info:{button:"ModalAlertNew",title:"\xBFSeguro que deseas borrar esta pregunta?",description:'Por favor escoge otro horario.  direcci\xF3n: <a href="http://cursos.eclass.cl" target="_blank" rel="noopener noreferrer">http://cursos.eclass.cl</a>'},loading:{button:"ModalAlertNew Loading",title:"Descargando documento",description:"Se est\xE1 preparando el archivo. Esto podr\xEDa tardar un momento."}};return r(m,{children:[e(u,{onClick:c,children:o!=null?o:n}),e(he,{isOpen:a,onClose:i,type:t==="loading"?"loading":"info",status:o!=null?o:"success",title:l?"":d[t!=null?t:"info"].title,description:s?"":d[t!=null?t:"info"].description,children:r(N,{children:[e(q,{as:"button",onClick:()=>i(),children:"Aceptar"}),e(q,{as:"button",onClick:()=>i(),children:"Cancelar"})]})})]})},ve=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"ModalSimple"}),e(ce,{isOpen:n,onClose:o,children:e("p",{children:y})})]})},Ae=()=>{const{isOpen:n,onOpen:t,onClose:o}=C();return r(m,{children:[e(u,{onClick:t,children:"ModalCard"}),r(le,{isOpen:n,onClose:o,children:[e(se,{children:r(h,{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",children:[e(h,{as:"p",fontSize:"20px",fontWeight:700,lineHeight:"24px",mb:"16px",children:"!Has ganado una nueva medalla!"}),e(h,{w:"120px",h:"120px",borderRadius:"16px",bg:"#E0EEFA",mb:"16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:700,children:"Medal"}),e(h,{as:"p",fontSize:"16px",fontWeight:700,lineHeight:"24px",mb:"8px",children:"Blast off"}),e(h,{as:"p",fontSize:"16px",lineHeight:"24px",color:"#808080",mb:"16px",children:"\xA1Felicitaciones, has comenzado tu viaje de estudio!"}),e(q,{as:"button",onClick:o,children:"Ver mis medallas"})]})}),e(N,{children:e(q,{as:"button",onClick:o,children:"Entendido"})})]})]})},Se=()=>{const{isOpen:n,onOpen:t,onClose:o}=C(),[l,s]=re.exports.useState("modal");return r(m,{children:[e(u,{onClick:t,children:"ModalMultiple"}),e(xe,{type:l,isOpen:n,onClose:o,title:l==="modal"?"Confirmaci\xF3n":"\xBFSeguro que deseas borrar esta pregunta?",status:"info",description:"Por favor escoge otro horario.",children:l==="modal"?r(b,{children:[e("p",{children:"alumnos, adem\xE1s de definir el uso de la plataforma de estudio."}),r(O,{children:[e(u,{onClick:()=>s("modalAlert"),children:"Guardar"}),e(S,{onClick:()=>o(),children:"Cancelar"})]})]}):r(N,{children:[e(q,{as:"button",onClick:()=>s("modal"),children:"Aceptar"}),e(q,{as:"button",onClick:()=>o(),children:"Cancelar"})]})})]})},Pe=()=>r(m,{children:[e(ae,{children:"Modales"}),r(f,{children:["Para los modales, tenemos dos tipos de componentes: Modal y ModalAlert. Cada uno tiene sus"," ",e("strong",{children:"variantes"})," que definen su apariencia y funcionalidad, y tambi\xE9n tienen",e("strong",{children:" tama\xF1os y paddings predefinidos"}),"."]}),r(A,{children:[e(g,{}),e(M,{button:"Open ModalAlert"})]}),e(w,{children:"Tipo Modal"}),r(f,{children:["Es el Modal tradicional para mostrar contenido, que incluye una cabecera, contenido y footer. En el componente ",e("strong",{children:"ModalContent"})," va todo lo que quieras visualizar en el modal este puede contener hasta los botones ",e("strong",{children:"ModalButtons"}),", igualmente lo botones pueden ir por fuera para cuando necesitas que no esten dentro del scroll."]}),e(f,{children:"El componente se importa de la siguiente manera:"}),e(k,{text:"import { Modal } from '@eclass/ui-kit'"}),e(A,{children:e(g,{})}),e(k,{text:`
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
}`}),e(w,{children:"Tipo ModalSimple"}),r(f,{children:["Es una variante m\xEDnima del modal para casos donde solo necesitas contenido libre y la acci\xF3n de cierre. No renderiza la banda azul ni t\xEDtulo, y mantiene la ",e("strong",{children:"X"})," como control principal junto con las props base del modal."]}),e(f,{children:"El componente se importa de la siguiente manera:"}),e(k,{text:"import { ModalSimple } from '@eclass/ui-kit'"}),e(A,{children:e(ve,{})}),e(k,{text:`
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
}`}),e(w,{children:"Tipo ModalCard"}),r(f,{children:["Es una variante pensada para contenido tipo card, como logros o medallas. No renderiza iconos ni encabezado por defecto, mantiene la ",e("strong",{children:"X"})," para cerrar y permite contenido completamente libre. Su ancho est\xE1 pensado para cards compactas."]}),e(f,{children:"El componente se importa de la siguiente manera:"}),e(k,{text:"import { ModalCard, ModalCardContent, ModalAlertButtons } from '@eclass/ui-kit'"}),e(A,{children:e(Ae,{})}),e(k,{text:`
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
}`}),e(w,{children:"Variantes del tipo Modal"}),r(f,{children:["Variantes del modal dependiendo de sus ",e("strong",{children:"props"}),". El valor de los props va definido en sus tipos."]}),r(A,{children:[e(g,{type:"withoutButtons"}),e(g,{type:"inside"}),e(g,{type:"buttonsOutside"}),e(g,{type:"closeOnOverlayClick"}),e(g,{type:"fixedSubtitle"}),e(g,{type:"withoutMargin"}),e(g,{type:"buttonsCenter"}),e(g,{type:"buttonsColumn"})]}),e(w,{children:"Tipo ModalAlert"}),e(f,{children:"Es el modal que se utiliza a modo de alerta para el usuario, el cual posee informaci\xF3n reducida y tambi\xE9n puede contar con botones. Este componente tiene dos visualizaciones principales."}),e(f,{children:"El componente se importa de la siguiente manera:"}),e(k,{text:"import { ModalAlert } from '@eclass/ui-kit'"}),r(A,{children:[e(M,{button:"Modal de Alerta"}),e(M,{button:"Modal de Alerta (Cargando)",type:"loading"})]}),e(k,{text:`
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
}`}),e(w,{children:"Variantes del tipo ModalAlert"}),r(f,{children:["Las variantes del modal son dos, como ejemplificamos m\xE1s arriba. Sin embargo, cada una tambi\xE9n puede variar; por ejemplo, se pueden ",e("strong",{children:"omitir los textos"})," pasados como props, y en el ModalAlert normal el icono var\xEDa seg\xFAn los estados definidos."]}),r(f,{children:["Si la prop ",e("strong",{children:"description"})," se env\xEDa como string, admite HTML sanitizado. En el caso de los enlaces con ",e("code",{children:'target="_blank"'}),", el componente preserva el target y agrega ",e("code",{children:'rel="noopener noreferrer"'})," para abrir links externos de forma segura."]}),r(A,{children:[e(M,{status:"success"}),e(M,{status:"error"}),e(M,{status:"warning"}),e(M,{status:"info"}),e(M,{button:"Modal de Alerta sin t\xEDtulo",withoutTitle:!0}),e(M,{button:"Modal de Alerta sin descripci\xF3n",withoutDescription:!0}),e(M,{button:"Modal de Alerta cargando (sin t\xEDtulo)",type:"loading",withoutTitle:!0}),e(M,{button:"Modal de Alerta cargando (sin descripci\xF3n)",type:"loading",withoutDescription:!0})]}),e(w,{children:"Tipo ModalMultiple"}),r(f,{children:["Es un componente unificador que permite renderizar dos tipos de modal distintos dentro de un mismo flujo: ",e("br",{}),e("br",{})," ",e("strong",{children:"modal"})," \u2192 Modal tradicional (contenido libre, cabecera, footer, botones, scroll).",e("br",{})," ",e("strong",{children:"modalAlert / modalLoading"})," \u2192 Modal de alerta o de carga, con contenido reducido y foco en la acci\xF3n del usuario. ",e("br",{}),e("br",{})," Est\xE1 pensado para casos donde el estado del modal cambia (por ejemplo, confirmaciones, advertencias o pasos intermedios) sin necesidad de cerrar y volver a abrir otro modal."]}),e(A,{children:e(Se,{})}),e(k,{text:`
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
}`})]});export{Pe as ViewModals,Pe as default};
//# sourceMappingURL=Modals.1cccd2cb.js.map
