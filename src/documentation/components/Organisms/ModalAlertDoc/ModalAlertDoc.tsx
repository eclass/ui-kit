import { useState } from 'react'
import { ModalAlert } from '@/organisms'
import { BtnPrimary } from '@/molecules'
import { ModalAlertProps } from '@/organisms/ModalAlert/types'

export function ModalAlertDoc(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenInfo, setIsOpenInfo] = useState(false)
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

  const optionsModaInfol: ModalAlertProps = {
    showModal: isOpenInfo,
    typeAlert: 'info',
    title: 'Información sobre tu nota',
    description: (
      <>
        La razón por la que tu nota bajó en la evaluación podría ser que no entendiste completamente
        el tema. Esto sucede porque si no comprendes bien el contenido, es difícil responder
        correctamente a las preguntas. Es importante dedicar tiempo a estudiar y practicar para
        asegurarte de tener un buen entendimiento del tema antes de la evaluación. <br />
        <br />
        La razón para la disminución de tu nota podría ser que se detectó que copiaste en tus
        respuestas. Copiar no solo es deshonesto, sino que también muestra una falta de comprensión
        y habilidad para resolver problemas por tu cuenta. Es importante recordar que la integridad
        académica es fundamental y que es mejor esforzarse por entender y resolver los problemas por
        uno mismo, incluso si eso significa obtener una nota más baja en el corto plazo.
      </>
    ),
    optionsButton: [
      {
        id: '1',
        label: 'Entendido',
        action: () => {
          setIsOpenInfo(false)
        },
      },
    ],
  }
  return (
    <>
      <BtnPrimary onClick={() => setIsOpen(true)}>Ejemplo modal</BtnPrimary>
      <br />
      <BtnPrimary onClick={() => setIsOpenInfo(true)}>Ejemplo modal Info</BtnPrimary>
      <ModalAlert {...optionsModal} />
      <ModalAlert {...optionsModaInfol} />
    </>
  )
}

export default ModalAlertDoc
