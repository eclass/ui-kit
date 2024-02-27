import { useState } from 'react'
import { ModalAlert } from '@/organisms'
import { BtnPrimary } from '@/molecules'
import { ModalAlertProps } from '@/organisms/ModalAlert/types'

export function ModalAlertDoc(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const optionsModal: ModalAlertProps = {
    showModal: isOpen,
    typeAlert: 'success',
    title: '¿Seguro que deseas borrar esta pregunta?',
    description: 'Por favor escoge otro horario.',
    optionsButton: [
      {
        id: '1',
        label: 'Opcion 1',
        action: () => {
          setIsOpen(false)
        },
      },
      {
        id: '2',
        label: 'Opcion 2',
        action: () => {
          setIsOpen(false)
        },
      },
    ],
  }
  return (
    <>
      <BtnPrimary onClick={() => setIsOpen(true)}>Ejemplo modal</BtnPrimary>
      <ModalAlert {...optionsModal} />
    </>
  )
}

export default ModalAlertDoc
