import{W as F,j as i,F as d,a as e,ad as X,v as C,ae as N,B as A,af as z,ag as L,ah as _,ai as Q,aj as I,E as p,g as r,h as k,k as D,x as Y,M as J,b as y,c as B,C as v}from"./index.0ac1ece3.js";import{L as E}from"./ListComponent.93c7dfa7.js";import{b as U}from"./alertStates.1c000466.js";const R=({children:n,closeOnOverlayClick:a,fixedSubtitle:o,title:l,withoutMargin:t})=>{const[c]=F(`(min-width: ${q}px)`),u="32px",s="24px";return i(d,{children:[e(X,{bg:C("colors-main-deepSkyBlue"),borderTopRadius:c?"8px":0,color:C("colors-neutral-white"),fontFamily:"Roboto",fontSize:c?"20px":"18px",fontWeight:700,lineHeight:1,mb:t?0:"32px",paddingY:s,textAlign:"center",children:l}),a&&e(N,{background:"transparent!important",border:"none",color:C("colors-neutral-white"),h:"12px",p:"22px",right:0,top:0,w:"12px",_focus:{boxShadow:"none"},_focusVisible:{boxShadow:`inset 0 0 0 2px ${C("colors-alert-deepSkyBlue")}, inset 0 0 0 4px ${C("colors-neutral-white")}`}}),(o==null?void 0:o.trim())&&e(A,{as:"p",fontSize:"14px",lineHeight:"19px",mb:u,textAlign:"center",px:s,children:o}),n]})},T=({closeOnOverlayClick:n,scrollBehavior:a,fixedButtons:o,withoutMargin:l})=>{const[t]=F(`(min-width: ${q}px)`),s=a==="inside"||o;return{closeOnOverlayClick:n,closeOnEsc:n,scrollBehavior:s?"inside":"outside",contentProps:{maxH:s?"100dvh":"auto",minH:t?"300px":"100dvh",padding:0,width:"100%",animation:"none",sx:{bgColor:C("colors-neutral-white"),borderRadius:t?"8px":0,mt:t?"48px":0,mb:t?"48px":0,marginX:t?"auto":0,maxH:s?"calc(100dvh - 96px)":"auto",maxWidth:t?"690px":"100%",...o&&{".uikit-modalContent":{pb:0},".uikit-modalButtons":{...j}},...l&&{".uikit-modalContent":{pt:0,px:0},".uikit-modalButtons":{px:j.px}}}}}},q=641,j={py:"32px",px:"24px"},g=({children:n,closeOnOverlayClick:a=!0,fixedSubtitle:o,isOpen:l,onClose:t,title:c,withoutMargin:u=!1,scrollBehavior:s="outside",fixedButtons:h=!1,autoFocus:S=!1})=>{const P=s==="inside"||h,O=T({closeOnOverlayClick:a,scrollBehavior:s,fixedButtons:h,withoutMargin:u});return i(z,{closeOnOverlayClick:O.closeOnOverlayClick,closeOnEsc:O.closeOnEsc,isOpen:l,motionPreset:"scale",onClose:t,scrollBehavior:P?"inside":"outside",autoFocus:S,blockScrollOnMount:!1,children:[e(L,{}),e(_,{...O.contentProps,children:e(R,{fixedButtons:h,withoutMargin:u,title:c,closeOnOverlayClick:a,fixedSubtitle:o,children:n})})]})},Z=Q,ee=I,M=({children:n,buttonsCenter:a,buttonsColumn:o})=>{const[l]=F(`(min-width: ${q}px)`);return e(Z,{as:"footer",flexDirection:!l&&o?"column":"row",gap:"24px",justifyContent:a?"center":"flex-start",px:0,pt:"32px",pb:0,className:"uikit-modalButtons",sx:{"&>div, &>div>.react-ripples, &>div>.react-ripples>button":{width:l?"auto":"100%"}},children:n})},f=({children:n,pb:a="32px"})=>e(ee,{pt:0,pb:a,className:"uikit-modalContent",children:n}),oe=({fill:n=C("colors-main-deepSkyBlue")})=>i("svg",{"data-testid":"loading-svg",id:"prefix__eXySq0EBKm11",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38 20",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",width:50,height:35,children:[e("style",{dangerouslySetInnerHTML:{__html:"@keyframes eXySq0EBKm12_f_o{0%,33.333333%,to{fill-opacity:.4}66.666667%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm13_f_o{0%,66.666667%,to{fill-opacity:.4}33.333333%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm14_f_o{0%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}33.333333%,66.666667%{fill-opacity:.4}to{fill-opacity:1}}"}}),e("circle",{r:2.502,transform:"translate(29.526 10)",fill:n,fillOpacity:.4,style:{animation:"eXySq0EBKm12_f_o 600ms linear infinite normal forwards"}}),e("circle",{r:2.502,transform:"translate(19 10)",fill:n,fillOpacity:.4,style:{animation:"eXySq0EBKm13_f_o 600ms linear infinite normal forwards"}}),e("circle",{r:2.053,transform:"matrix(1.21764 0 0 1.21764 8.562 10.002)",fill:n,style:{animation:"eXySq0EBKm14_f_o 600ms linear infinite normal forwards"}})]}),G=({type:n,title:a,description:o,status:l,children:t})=>{const[c]=F("(min-width: 641px)");return i(d,{children:[i(I,{p:"32px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"16px",fontFamily:"Roboto",children:[n==="loading"?e(oe,{}):e(A,{display:"flex",justifyContent:"center",children:U[l!=null?l:"info"].icon}),a&&e(A,{as:"p",fontWeight:"700",fontSize:c?"20px":"18px",lineHeight:"24px",mb:0,children:a}),o&&e(A,{as:"p",fontSize:"16px",lineHeight:"24px",mb:0,children:o})]}),n!=="loading"&&t?t:e(d,{})]})},H=()=>{const[n]=F(`(min-width: ${q}px)`);return{closeOnOverlayClick:!1,closeOnEsc:!1,scrollBehavior:"outside",contentProps:{borderRadius:"8px",p:0,m:"10vh auto 0",sx:{maxWidth:n?"589px":"343px"}}}},ne=({autoFocus:n=!1,type:a,isOpen:o,onClose:l,children:t,title:c,description:u,status:s})=>{const h=H();return e(d,{children:i(z,{closeOnOverlayClick:!1,isOpen:o,motionPreset:"scale",onClose:l,closeOnEsc:a!=="loading",autoFocus:n,children:[e(L,{}),e(_,{...h.contentProps,children:e(G,{type:a,title:c,description:u,status:s,children:t})})]})})},$=({children:n})=>e(A,{autoFocus:!1,display:"flex",w:"100%",borderTop:`1px solid ${C("colors-neutral-platinum")}`,sx:{button:{borderRight:`1px solid ${C("colors-neutral-platinum")}`,fontFamily:"Roboto",fontSize:"16px",fontWeight:500,lineHeight:"21px",p:"16px",textDecor:"none",width:"100%","&:last-child":{borderRight:"none"}}},children:n}),ae=({type:n,closeOnOverlayClick:a,scrollBehavior:o,fixedButtons:l,withoutMargin:t})=>{const c=T({closeOnOverlayClick:a,scrollBehavior:o,fixedButtons:l,withoutMargin:t}),u=H();switch(n){case"modal":return c;case"modalAlert":case"modalLoading":return u}},ie=n=>{const{type:a,isOpen:o,onClose:l,autoFocus:t=!1,children:c,title:u,closeOnOverlayClick:s=!0,fixedSubtitle:h,withoutMargin:S=!1,scrollBehavior:P="outside",fixedButtons:O=!1}=n,w=ae({type:a,closeOnOverlayClick:s,scrollBehavior:P,fixedButtons:O,withoutMargin:S}),K=()=>{switch(a){case"modal":return e(R,{fixedButtons:O,withoutMargin:S,title:u,closeOnOverlayClick:s,fixedSubtitle:h,children:c});case"modalAlert":case"modalLoading":{const{description:V,status:W}=n;return e(G,{type:a==="modalAlert"?"info":"loading",title:u,description:V,status:W,children:c})}}};return i(z,{isOpen:o,onClose:l,motionPreset:"scale",autoFocus:t,closeOnOverlayClick:w.closeOnOverlayClick,closeOnEsc:w.closeOnEsc,scrollBehavior:w.scrollBehavior,children:[e(L,{}),e(_,{...w.contentProps,children:K()})]})},x=({type:n})=>n==="withoutButtons"?e(le,{}):n==="inside"?e(re,{}):n==="buttonsOutside"?e(se,{}):n==="buttonsCenter"?e(ce,{}):n==="buttonsColumn"?e(de,{}):n==="fixedSubtitle"?e(ue,{}):n==="withoutMargin"?e(me,{}):n==="closeOnOverlayClick"?e(pe,{}):e(te,{}),b=`alumnos, adem\xE1s de definir el uso de la plataforma de estudio. 1) El material del
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
              alumno podr\xE1 acceder en la siguiente direcci\xF3n: http://cursos.eclass.cl`,te=()=>{const{isOpen:n,onOpen:a,onClose:o}=p();return i(d,{children:[e(r,{onClick:a,children:"Open Modal"}),e(g,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:i(f,{children:[e("p",{children:b}),i(M,{children:[e(r,{onClick:o,children:"Guardar"}),e(k,{onClick:o,children:"Cancelar"})]})]})})]})},le=()=>{const{isOpen:n,onOpen:a,onClose:o}=p();return i(d,{children:[e(r,{onClick:a,children:"Sin botones"}),e(g,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:e(f,{children:e("p",{children:b})})})]})},re=()=>{const{isOpen:n,onOpen:a,onClose:o}=p();return i(d,{children:[e(r,{onClick:a,children:"scroll dentro"}),e(g,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:i(f,{children:[i("p",{children:[b," 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de estudio, son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el alumno se compromete a realizar el programa en el que se encuentra inscrito y a revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente con fines educativos en el marco del programa de estudio. Se deja constancia que la"]}),i(M,{children:[e(r,{onClick:o,children:"Guardar"}),e(k,{onClick:o,children:"Cancelar"})]})]})})]})},se=()=>{const{isOpen:n,onOpen:a,onClose:o}=p();return i(d,{children:[e(r,{onClick:a,children:"botones fuera"}),i(g,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",fixedButtons:!0,children:[e(f,{children:i("p",{children:[b," 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de estudio, son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el alumno se compromete a realizar el programa en el que se encuentra inscrito y a revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente con fines educativos en el marco del programa de estudio. Se deja constancia que la"]})}),i(M,{children:[e(r,{onClick:o,children:"Guardar"}),e(k,{onClick:o,children:"Cancelar"})]})]})]})},ce=()=>{const{isOpen:n,onOpen:a,onClose:o}=p();return i(d,{children:[e(r,{onClick:a,children:"boton centrado"}),e(g,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:i(f,{children:[e("p",{children:b}),e(M,{buttonsCenter:!0,children:e(r,{onClick:o,children:"Guardar"})})]})})]})},de=()=>{const{isOpen:n,onOpen:a,onClose:o}=p();return i(d,{children:[e(r,{onClick:a,children:"mobile en columna"}),e(g,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",children:i(f,{children:[e("p",{children:b}),i(M,{buttonsColumn:!0,children:[e(r,{onClick:o,children:"Guardar"}),e(k,{onClick:o,children:"Cancelar"})]})]})})]})},ue=()=>{const{isOpen:n,onOpen:a,onClose:o}=p();return i(d,{children:[e(r,{onClick:a,children:"Subtitulo"}),e(g,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",fixedSubtitle:"Este es  un subtitulo que queda fijo",fixedButtons:!0,children:i(f,{children:[i("p",{children:[b," 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de estudio, son personales e intransferibles. 3) Al aceptar estos t\xE9rminos y condiciones, el alumno se compromete a realizar el programa en el que se encuentra inscrito y a revisar los siguientes documentos: Reglamento Acad\xE9mico, Manual del Alumno e Informaci\xF3n del Programa.Estos documentos estar\xE1n disponibles en la plataforma de estudio, y contienen toda la informaci\xF3n acad\xE9mica del programa. 4) El alumno se compromete a utilizar los materiales y medios tecnol\xF3gicos de eClass exclusivamente con fines educativos en el marco del programa de estudio. Se deja constancia que la"]}),i(M,{children:[e(r,{onClick:o,children:"Guardar"}),e(k,{onClick:o,children:"Cancelar"})]})]})})]})},me=()=>{const{isOpen:n,onOpen:a,onClose:o}=p();return i(d,{children:[e(r,{onClick:a,children:"Sin margin"}),e(g,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",withoutMargin:!0,children:i(f,{children:[e("p",{children:b}),i(M,{children:[e(r,{onClick:o,children:"Guardar"}),e(k,{onClick:o,children:"Cancelar"})]})]})})]})},pe=()=>{const{isOpen:n,onOpen:a,onClose:o}=p();return i(d,{children:[e(r,{onClick:a,children:"Cerrar solo en botones"}),e(g,{isOpen:n,onClose:o,title:"Confirmaci\xF3n",closeOnOverlayClick:!1,children:i(f,{children:[e("p",{children:b}),i(M,{children:[e(r,{onClick:o,children:"Guardar"}),e(k,{onClick:o,children:"Cancelar"})]})]})})]})},m=({button:n,type:a,status:o,withoutTitle:l,withoutDescription:t})=>{const{isOpen:c,onOpen:u,onClose:s}=p(),h={info:{button:"ModalAlertNew",title:"\xBFSeguro que deseas borrar esta pregunta?",description:"Por favor escoge otro horario."},loading:{button:"ModalAlertNew Loading",title:"Descargando documento",description:"Se est\xE1 preparando el archivo. Esto podr\xEDa tardar un momento."}};return i(d,{children:[e(r,{onClick:u,children:o!=null?o:n}),e(ne,{isOpen:c,onClose:s,type:a==="loading"?"loading":"info",status:o!=null?o:"success",title:l?"":h[a!=null?a:"info"].title,description:t?"":h[a!=null?a:"info"].description,children:i($,{children:[e(D,{as:"button",onClick:()=>s(),children:"Aceptar"}),e(D,{as:"button",onClick:()=>s(),children:"Cancelar"})]})})]})},he=()=>{const{isOpen:n,onOpen:a,onClose:o}=p(),[l,t]=Y.exports.useState("modal");return i(d,{children:[e(r,{onClick:a,children:"ModalMultiple"}),e(ie,{type:l,isOpen:n,onClose:o,title:l==="modal"?"Confirmaci\xF3n":"\xBFSeguro que deseas borrar esta pregunta?",status:"info",description:"Por favor escoge otro horario.",children:l==="modal"?i(f,{children:[e("p",{children:"alumnos, adem\xE1s de definir el uso de la plataforma de estudio."}),i(M,{children:[e(r,{onClick:()=>t("modalAlert"),children:"Guardar"}),e(k,{onClick:()=>o(),children:"Cancelar"})]})]}):i($,{children:[e(D,{as:"button",onClick:()=>t("modal"),children:"Aceptar"}),e(D,{as:"button",onClick:()=>o(),children:"Cancelar"})]})})]})},ge=()=>i(d,{children:[e(J,{children:"Modales"}),i(y,{children:["Para los modales, tenemos dos tipos de componentes: Modal y ModalAlert. Cada uno tiene sus"," ",e("strong",{children:"variantes"})," que definen su apariencia y funcionalidad, y tambi\xE9n tienen",e("strong",{children:" tama\xF1os y paddings predefinidos"}),"."]}),i(E,{children:[e(x,{}),e(m,{button:"Open ModalAlert"})]}),e(B,{children:"Tipo Modal"}),i(y,{children:["Es el Modal tradicional para mostrar contenido, que incluye una cabecera, contenido y footer. En el componente ",e("strong",{children:"ModalContent"})," va todo lo que quieras visualizar en el modal este puede contener hasta los botones ",e("strong",{children:"ModalButtons"}),", igualmente lo botones pueden ir por fuera para cuando necesitas que no esten dentro del scroll."]}),e(y,{children:"El componente se importa de la siguiente manera:"}),e(v,{text:"import { Modal } from '@eclass/ui-kit'"}),e(E,{children:e(x,{})}),e(v,{text:`
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
}`}),e(B,{children:"Variantes del tipo Modal"}),i(y,{children:["Variantes del modal dependiendo de sus ",e("strong",{children:"props"}),". El valor de los props va definido en sus tipos."]}),i(E,{children:[e(x,{type:"withoutButtons"}),e(x,{type:"inside"}),e(x,{type:"buttonsOutside"}),e(x,{type:"closeOnOverlayClick"}),e(x,{type:"fixedSubtitle"}),e(x,{type:"withoutMargin"}),e(x,{type:"buttonsCenter"}),e(x,{type:"buttonsColumn"})]}),e(B,{children:"Tipo ModalAlert"}),e(y,{children:"Es el modal que se utiliza a modo de alerta para el usuario, el cual posee informaci\xF3n reducida y tambi\xE9n puede contar con botones. Este componente tiene dos visualizaciones principales."}),e(y,{children:"El componente se importa de la siguiente manera:"}),e(v,{text:"import { ModalAlert } from '@eclass/ui-kit'"}),i(E,{children:[e(m,{button:"Modal de Alerta"}),e(m,{button:"Modal de Alerta (Cargando)",type:"loading"})]}),e(v,{text:`
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
}`}),e(B,{children:"Variantes del tipo ModalAlert"}),i(y,{children:["Las variantes del modal son dos, como ejemplificamos m\xE1s arriba. Sin embargo, cada una tambi\xE9n puede variar; por ejemplo, se pueden ",e("strong",{children:"omitir los textos"})," pasados como props, y en el ModalAlert normal el icono var\xEDa seg\xFAn los estados definidos."]}),i(E,{children:[e(m,{status:"success"}),e(m,{status:"error"}),e(m,{status:"warning"}),e(m,{status:"info"}),e(m,{button:"Modal de Alerta sin t\xEDtulo",withoutTitle:!0}),e(m,{button:"Modal de Alerta sin descripci\xF3n",withoutDescription:!0}),e(m,{button:"Modal de Alerta cargando (sin t\xEDtulo)",type:"loading",withoutTitle:!0}),e(m,{button:"Modal de Alerta cargando (sin descripci\xF3n)",type:"loading",withoutDescription:!0})]}),e(B,{children:"Tipo ModalMultiple"}),i(y,{children:["Es un componente unificador que permite renderizar dos tipos de modal distintos dentro de un mismo flujo: ",e("br",{}),e("br",{})," ",e("strong",{children:"modal"})," \u2192 Modal tradicional (contenido libre, cabecera, footer, botones, scroll).",e("br",{})," ",e("strong",{children:"modalAlert / modalLoading"})," \u2192 Modal de alerta o de carga, con contenido reducido y foco en la acci\xF3n del usuario. ",e("br",{}),e("br",{})," Est\xE1 pensado para casos donde el estado del modal cambia (por ejemplo, confirmaciones, advertencias o pasos intermedios) sin necesidad de cerrar y volver a abrir otro modal."]}),e(E,{children:e(he,{})}),e(v,{text:`
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
}`})]});export{ge as ViewModals,ge as default};
//# sourceMappingURL=Modals.91758a8b.js.map
