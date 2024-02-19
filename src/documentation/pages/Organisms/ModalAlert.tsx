import { MyHeading, MyText, MyTittle, Code } from '@/documentation/components'
import { ModalAlertDoc } from '@/documentation/components/Organisms'
// import { ModalAlert } from '@/organisms'
// ModalAlertDoc
// import { dataFake } from '@/organisms/CourseList/utils'

export const ViewModalAlert = (): JSX.Element => {
  return (
    <>
      <MyHeading>ModalAlert</MyHeading>
      <MyText>
        Componente que muestra una alerta en forma de modal, se puede mostrar con un 1 o 2 botones y
        contiene 4 tipos de alertas:<code> warning, error, success e info</code>.
        <br />
        <br />
        El modal se pegara al provider de <code>Chakra-ui</code> de la aplicacion, de tal modo que
        hara el portal desde el root de la aplicacion, asegurando que siempre se muestre por encima
        de cualquier componente
      </MyText>
      <MyTittle>Types definidos</MyTittle>
      <MyText>La modal se comporta bajo los siguientes types:</MyText>
      <Code
        text={`//Propiedades del modal
export interface ModalAlertProps {
  showModal: boolean // Muestra/Oculta el modal
  typeAlert: 'success' | 'error' | 'warning' | 'info' // Tipos de alerta
  title?: string // Titulo del modal
  description?: string // Mensaje del modal
  optionsButton: optionsButton[] // Boton del modal en array
  top?: string // Posición del modal
}
// Propiedades del boton
interface optionsButton {
  id: string // Identifica el boton para mostrar el divider
  label: string // Texto del boton
  action: () => void // Funcion que dispara el boton
}
`}
      />
      El componente se importa de la siguiente manera:
      <Code text="import { ModalAlert } from '@eclass/ui-kit'" />
      <MyTittle>Modo de uso</MyTittle>
      <MyText>
        El modal tipo <code>info</code> con 2 opciones
      </MyText>
      <ModalAlertDoc />
      <Code
        text={`//Importar el modal
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
}`}
      />
    </>
  )
}

export default ViewModalAlert
