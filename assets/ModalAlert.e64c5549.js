import{r as s,j as o,F as n,a as e,M as d,b as r,c as i,C as a}from"./index.4ef79ccb.js";import{M as p}from"./ModalAlert.457e56de.js";import"./Close.04a78798.js";import"./TinyAlert.735bfad9.js";import{B as c}from"./BtnLink.a517bd15.js";import"./Label.438bf963.js";import"./Progress.a2192a53.js";import"./Ripples.4b5e75d5.js";import"./index.7827c9f1.js";function m(){const[l,t]=s.exports.useState(!1);return o(n,{children:[e(c,{onClick:()=>t(!0),children:"Ejemplo modal"}),e(p,{...{showModal:l,typeAlert:"info",title:"\xBFSeguro que deseas borrar esta pregunta?",description:"Por favor escoge otro horario.",optionsButton:[{id:"1",label:"Opcion 1",action:()=>{t(!1)}},{id:"2",label:"Opcion 2",action:()=>{t(!1)}}]}})]})}const A=()=>o(n,{children:[e(d,{children:"ModalAlert"}),o(r,{children:["Componente que muestra una alerta en forma de modal, se puede mostrar con un 1 o 2 botones y contiene 4 tipos de alertas:",e("code",{children:" warning, error, success e info"}),".",e("br",{}),e("br",{}),"El modal se pegara al provider de ",e("code",{children:"Chakra-ui"})," de la aplicacion, de tal modo que hara el portal desde el root de la aplicacion, asegurando que siempre se muestre por encima de cualquier componente"]}),e(i,{children:"Types definidos"}),e(r,{children:"La modal se comporta bajo los siguientes types:"}),e(a,{text:`//Propiedades del modal
export interface ModalAlertProps {
  showModal: boolean // Muestra/Oculta el modal
  typeAlert: 'success' | 'error' | 'warning' | 'info' // Tipos de alerta
  title?: string // Titulo del modal
  description?: string // Mensaje del modal
  optionsButton: optionsButton[] // Boton del modal en array
}
// Propiedades del boton
interface optionsButton {
  id: string // Identifica el boton para mostrar el divider
  label: string // Texto del boton
  action: () => void // Funcion que dispara el boton
}
`}),"El componente se importa de la siguiente manera:",e(a,{text:"import { ModalAlert } from '@eclass/ui-kit'"}),e(i,{children:"Modo de uso"}),o(r,{children:["El modal tipo ",e("code",{children:"info"})," con 2 opciones"]}),e(m,{}),e(a,{text:`//Importar el modal
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
}`})]});export{A as ViewModalAlert,A as default};
//# sourceMappingURL=ModalAlert.e64c5549.js.map
