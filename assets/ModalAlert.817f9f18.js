import{r as s,j as o,F as n,a as e,M as b,b as a,c as l,C as r}from"./index.ffa94048.js";import{M as d}from"./ModalAlert.f52e94ec.js";import"./index.75e50dda.js";import"./TinyAlert.18b3df33.js";import"./Close.700c3970.js";import{B as p}from"./BtnLink.b609386c.js";import"./Label.e771be4c.js";import"./Progress.e12d9e66.js";import"./Ripples.c9d13c0a.js";import"./index.12555f4d.js";function x(){const[c,t]=s.exports.useState(!1),[u,i]=s.exports.useState(!1),m={showModal:c,typeAlert:"success",title:"\xBFSeguro que deseas borrar esta pregunta?",description:"Por favor escoge otro horario.",optionsButton:[{id:"1",label:"Opcion 1",action:()=>{t(!1)}},{id:"2",label:"Opcion 2",action:()=>{t(!1)}}]},f={showModal:u,typeAlert:"info",title:"Informaci\xF3n sobre tu nota",description:o(n,{children:["La raz\xF3n por la que tu nota baj\xF3 en la evaluaci\xF3n podr\xEDa ser que no entendiste completamente el tema. Esto sucede porque si no comprendes bien el contenido, es dif\xEDcil responder correctamente a las preguntas. Es importante dedicar tiempo a estudiar y practicar para asegurarte de tener un buen entendimiento del tema antes de la evaluaci\xF3n. ",e("br",{}),e("br",{}),"La raz\xF3n para la disminuci\xF3n de tu nota podr\xEDa ser que se detect\xF3 que copiaste en tus respuestas. Copiar no solo es deshonesto, sino que tambi\xE9n muestra una falta de comprensi\xF3n y habilidad para resolver problemas por tu cuenta. Es importante recordar que la integridad acad\xE9mica es fundamental y que es mejor esforzarse por entender y resolver los problemas por uno mismo, incluso si eso significa obtener una nota m\xE1s baja en el corto plazo."]}),optionsButton:[{id:"1",label:"Entendido",action:()=>{i(!1)}}]};return o(n,{children:[e(p,{onClick:()=>t(!0),children:"Ejemplo modal"}),e("br",{}),e(p,{onClick:()=>i(!0),children:"Ejemplo modal Info"}),e(d,{...m}),e(d,{...f})]})}const I=()=>o(n,{children:[e(b,{children:"ModalAlert"}),o(a,{children:["Componente que muestra una alerta en forma de modal, se puede mostrar con un 1 o 2 botones y contiene 4 tipos de alertas:",e("code",{children:" warning, error, success e info"}),".",e("br",{}),e("br",{}),"El modal se pegara al provider de ",e("code",{children:"Chakra-ui"})," de la aplicacion, de tal modo que hara el portal desde el root de la aplicacion, asegurando que siempre se muestre por encima de cualquier componente"]}),e(l,{children:"Types definidos"}),e(a,{children:"La modal se comporta bajo los siguientes types:"}),e(r,{text:`//Propiedades del modal
export interface ModalAlertProps {
  showModal: boolean // Muestra/Oculta el modal
  typeAlert: 'success' | 'error' | 'warning' | 'info' // Tipos de alerta
  title?: string // Titulo del modal
  description?: string // Mensaje del modal
  optionsButton: optionsButton[] // Boton del modal en array
  top?: string // Posici\xF3n del modal
}
// Propiedades del boton
interface optionsButton {
  id: string // Identifica el boton para mostrar el divider
  label: string // Texto del boton
  action: () => void // Funcion que dispara el boton
}
`}),"El componente se importa de la siguiente manera:",e(r,{text:"import { ModalAlert } from '@eclass/ui-kit'"}),e(l,{children:"Modo de uso"}),o(a,{children:["El modal tipo ",e("code",{children:"info"})," con 2 opciones"]}),e(x,{}),e(r,{text:`//Importar el modal
import { ModalAlert, BtnPrimary } from '@eclass/ui-kit'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

export function ModalAlertDoc(){
  const [isOpen, setIsOpen] = useState(false)
  const optionsModal = {
    showModal: isOpen,
    typeAlert: 'info',
    title: '\xBFSeguro que deseas borrar esta pregunta?',
    description: 'Por favor escoge otro horario.',
    optionsButton: [{
        id: '1',
        label: 'Opcion 1',
        action: () => { setIsOpen(false) }
        },{
        id: '2',
        label: 'Opcion 2',
        action: () => { setIsOpen(false) }
        }],
  }
  return (<>
      <BtnPrimary onClick={() => setIsOpen(true)}>Open Modal</BtnPrimary>
      <ModalAlert {...optionsModal} />
    </>)}
}`})]});export{I as ViewModalAlert,I as default};
//# sourceMappingURL=ModalAlert.817f9f18.js.map
