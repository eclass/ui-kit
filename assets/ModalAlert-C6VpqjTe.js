import{c as e,i as t,r as n,t as r}from"./Typography-Db7ZPykY.js";import{t as i}from"./Code-Bgr_Rzly.js";var a=e();function o(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(`p`,{children:`Ejemplo modal`})})}var s=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{children:`ModalAlert`}),(0,a.jsxs)(n,{children:[`Componente que muestra una alerta en forma de modal, se puede mostrar con un 1 o 2 botones y contiene 4 tipos de alertas:`,(0,a.jsx)(`code`,{children:` warning, error, success e info`}),`.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`br`,{}),`El modal se pegara al provider de `,(0,a.jsx)(`code`,{children:`Chakra-ui`}),` de la aplicacion, de tal modo que hara el portal desde el root de la aplicacion, asegurando que siempre se muestre por encima de cualquier componente`]}),(0,a.jsx)(t,{children:`Types definidos`}),(0,a.jsx)(n,{children:`La modal se comporta bajo los siguientes types:`}),(0,a.jsx)(i,{text:`//Propiedades del modal
export interface ModalAlertProps {
  showModal: boolean // Muestra/Oculta el modal
  typeAlert: 'success' | 'error' | 'warning' | 'info' // Tipos de alerta
  title?: string // Titulo del modal
  description?: string // Mensaje del modal (admite etiquetas HTML básicas sanitizadas)
  optionsButton: optionsButton[] // Boton del modal en array
  top?: string // Posición del modal
}
// Propiedades del boton
interface optionsButton {
  id: string // Identifica el boton para mostrar el divider
  label: string // Texto del boton
  action: () => void // Funcion que dispara el boton
}
`}),`El componente se importa de la siguiente manera:`,(0,a.jsx)(i,{text:`import { ModalAlert } from '@eclass/ui-kit'`}),(0,a.jsx)(t,{children:`Modo de uso`}),(0,a.jsxs)(n,{children:[`El modal tipo `,(0,a.jsx)(`code`,{children:`info`}),` con 2 opciones`]}),(0,a.jsx)(o,{}),(0,a.jsx)(i,{text:`//Importar el modal
import { ModalAlert, BtnPrimary } from '@eclass/ui-kit'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

export function ModalAlertDoc(){
  const [isOpen, setIsOpen] = useState(false)
  const optionsModal = {
    showModal: isOpen,
    typeAlert: 'info',
    title: '¿Seguro que deseas borrar esta pregunta?',
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
}`})]});export{s as ViewModalAlert,s as default};
//# sourceMappingURL=ModalAlert-C6VpqjTe.js.map