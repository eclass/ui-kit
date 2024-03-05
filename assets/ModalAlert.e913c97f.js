import{r as l,j as o,F as n,a as e,M as d,b as r,c as i,C as a}from"./index.28438010.js";import{M as p}from"./ModalAlert.908f5bc3.js";import"./Close.b50decb8.js";import"./TinyAlert.32e3135a.js";import{B as c}from"./BtnLink.e91407f0.js";import"./Label.28036d31.js";import"./Progress.dbd3fbd2.js";import"./Ripples.3b6a91fc.js";import"./index.547db4e6.js";function m(){const[s,t]=l.exports.useState(!1);return o(n,{children:[e(c,{onClick:()=>t(!0),children:"Ejemplo modal"}),e(p,{...{showModal:s,typeAlert:"success",title:"\xBFSeguro que deseas borrar esta pregunta?",description:"Por favor escoge otro horario.",optionsButton:[{id:"1",label:"Opcion 1",action:()=>{t(!1)}},{id:"2",label:"Opcion 2",action:()=>{t(!1)}}]}})]})}const A=()=>o(n,{children:[e(d,{children:"ModalAlert"}),o(r,{children:["Componente que muestra una alerta en forma de modal, se puede mostrar con un 1 o 2 botones y contiene 4 tipos de alertas:",e("code",{children:" warning, error, success e info"}),".",e("br",{}),e("br",{}),"El modal se pegara al provider de ",e("code",{children:"Chakra-ui"})," de la aplicacion, de tal modo que hara el portal desde el root de la aplicacion, asegurando que siempre se muestre por encima de cualquier componente"]}),e(i,{children:"Types definidos"}),e(r,{children:"La modal se comporta bajo los siguientes types:"}),e(a,{text:`//Propiedades del modal
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
//# sourceMappingURL=ModalAlert.e913c97f.js.map
