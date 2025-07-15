import { useDisclosure } from '@chakra-ui/react'

import { BtnLink, BtnPrimary, BtnSecondary } from '@/molecules'
import {
  Modal,
  ModalAlertNew,
  ModalAlertButtons,
  ModalButtons,
  ModalContent,
} from '@/organisms/Modals/'

export const ModalDemo = ({
  type,
}: {
  type?:
    | 'withoutButtons'
    | 'inside'
    | 'buttonsOutside'
    | 'buttonsCenter'
    | 'buttonsColumn'
    | 'fixedSubtitle'
    | 'withoutMargin'
    | 'closeOnOverlayClick'
}): JSX.Element => {
  if (type === 'withoutButtons') return <ModalDemoWithoutButtons />
  if (type === 'inside') return <ModalDemoInside />
  if (type === 'buttonsOutside') return <ModalDemoButtonsOutside />
  if (type === 'buttonsCenter') return <ModalDemoButtonsCenter />
  if (type === 'buttonsColumn') return <ModalDemoButtonsColumn />
  if (type === 'fixedSubtitle') return <ModalDemoFixedSubtitle />
  if (type === 'withoutMargin') return <ModalDemoWithoutMargin />
  if (type === 'closeOnOverlayClick') return <ModalDemoCloseOnOverlayClick />

  return <ModalDemoDefault />
}

const text = `alumnos, además de definir el uso de la plataforma de estudio. 1) El material del
              programa de estudio estará disponible en una plataforma tecnológica a la que cada
              alumno podrá acceder en la siguiente dirección: http://cursos.eclass.cl 2) Las
              credenciales de acceso que recibe el alumno para ingresar a su programa de estudio,
              son personales e intransferibles. 3) Al aceptar estos términos y condiciones, el
              alumno se compromete a realizar el programa en el que se encuentra inscrito y a
              revisar los siguientes documentos: Reglamento Académico, Manual del Alumno e
              Información del Programa.Estos documentos estarán disponibles en la plataforma de
              estudio, y contienen toda la información académica del programa. 4) El alumno se
              compromete a utilizar los materiales y medios tecnológicos de eClass exclusivamente
              con fines educativos en el marco del programa de estudio. Se deja constancia que la
              alumnos, además de definir el uso de la plataforma de estudio. 5) El material del
              programa de estudio estará disponible en una plataforma tecnológica a la que cada
              alumno podrá acceder en la siguiente dirección: http://cursos.eclass.cl`

const ModalDemoDefault = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>Open Modal</BtnPrimary>
      <Modal isOpen={isOpen} onClose={onClose} title="Confirmación">
        <ModalContent>
          <p>{text}</p>
          <ModalButtons>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
            <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  )
}

const ModalDemoWithoutButtons = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>Sin botones</BtnPrimary>
      <Modal isOpen={isOpen} onClose={onClose} title="Confirmación">
        <ModalContent>
          <p>{text}</p>
        </ModalContent>
      </Modal>
    </>
  )
}

const ModalDemoInside = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>scroll dentro</BtnPrimary>
      <Modal isOpen={isOpen} onClose={onClose} title="Confirmación">
        <ModalContent>
          <p>
            {text} 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de
            estudio, son personales e intransferibles. 3) Al aceptar estos términos y condiciones,
            el alumno se compromete a realizar el programa en el que se encuentra inscrito y a
            revisar los siguientes documentos: Reglamento Académico, Manual del Alumno e Información
            del Programa.Estos documentos estarán disponibles en la plataforma de estudio, y
            contienen toda la información académica del programa. 4) El alumno se compromete a
            utilizar los materiales y medios tecnológicos de eClass exclusivamente con fines
            educativos en el marco del programa de estudio. Se deja constancia que la
          </p>
          <ModalButtons>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
            <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  )
}

const ModalDemoButtonsOutside = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>botones fuera</BtnPrimary>
      <Modal isOpen={isOpen} onClose={onClose} title="Confirmación" fixedButtons>
        <ModalContent>
          <p>
            {text} 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de
            estudio, son personales e intransferibles. 3) Al aceptar estos términos y condiciones,
            el alumno se compromete a realizar el programa en el que se encuentra inscrito y a
            revisar los siguientes documentos: Reglamento Académico, Manual del Alumno e Información
            del Programa.Estos documentos estarán disponibles en la plataforma de estudio, y
            contienen toda la información académica del programa. 4) El alumno se compromete a
            utilizar los materiales y medios tecnológicos de eClass exclusivamente con fines
            educativos en el marco del programa de estudio. Se deja constancia que la
          </p>
        </ModalContent>
        <ModalButtons>
          <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
          <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
        </ModalButtons>
      </Modal>
    </>
  )
}

const ModalDemoButtonsCenter = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>boton centrado</BtnPrimary>
      <Modal isOpen={isOpen} onClose={onClose} title="Confirmación">
        <ModalContent>
          <p>{text}</p>
          <ModalButtons buttonsCenter>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  )
}

const ModalDemoButtonsColumn = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>mobile en columna</BtnPrimary>
      <Modal isOpen={isOpen} onClose={onClose} title="Confirmación">
        <ModalContent>
          <p>{text}</p>
          <ModalButtons buttonsColumn>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
            <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  )
}

const ModalDemoFixedSubtitle = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>Subtitulo</BtnPrimary>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Confirmación"
        fixedSubtitle="Este es  un subtitulo que queda fijo"
        fixedButtons
      >
        <ModalContent>
          <p>
            {text} 2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de
            estudio, son personales e intransferibles. 3) Al aceptar estos términos y condiciones,
            el alumno se compromete a realizar el programa en el que se encuentra inscrito y a
            revisar los siguientes documentos: Reglamento Académico, Manual del Alumno e Información
            del Programa.Estos documentos estarán disponibles en la plataforma de estudio, y
            contienen toda la información académica del programa. 4) El alumno se compromete a
            utilizar los materiales y medios tecnológicos de eClass exclusivamente con fines
            educativos en el marco del programa de estudio. Se deja constancia que la
          </p>
          <ModalButtons>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
            <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  )
}

const ModalDemoWithoutMargin = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>Sin margin</BtnPrimary>
      <Modal isOpen={isOpen} onClose={onClose} title="Confirmación" withoutMargin>
        <ModalContent>
          <p>{text}</p>
          <ModalButtons>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
            <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  )
}

const ModalDemoCloseOnOverlayClick = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <BtnPrimary onClick={onOpen}>Cerrar solo en botones</BtnPrimary>
      <Modal isOpen={isOpen} onClose={onClose} title="Confirmación" closeOnOverlayClick={false}>
        <ModalContent>
          <p>{text}</p>
          <ModalButtons>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
            <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  )
}

export const ModalAlertDemo = ({
  button,
  type,
  status,
  withoutTitle,
  withoutDescription,
}: {
  button?: string
  type?: 'loading' | 'info'
  status?: 'success' | 'error' | 'warning' | 'info'
  withoutTitle?: boolean
  withoutDescription?: boolean
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const text = {
    info: {
      button: 'ModalAlertNew',
      title: '¿Seguro que deseas borrar esta pregunta?',
      description: 'Por favor escoge otro horario.',
    },
    loading: {
      button: 'ModalAlertNew Loading',
      title: 'Descargando documento',
      description: 'Se está preparando el archivo. Esto podría tardar un momento.',
    },
  }
  return (
    <>
      <BtnPrimary onClick={onOpen}>{status ?? button}</BtnPrimary>
      <ModalAlertNew
        isOpen={isOpen}
        onClose={onClose}
        type={type === 'loading' ? 'loading' : 'info'}
        status={status ?? 'success'}
        title={withoutTitle ? '' : text[type ?? 'info'].title}
        description={withoutDescription ? '' : text[type ?? 'info'].description}
      >
        <ModalAlertButtons>
          <BtnLink as="button" onClick={() => onClose()}>
            Aceptar
          </BtnLink>
          <BtnLink as="button" onClick={() => onClose()}>
            Cancelar
          </BtnLink>
        </ModalAlertButtons>
      </ModalAlertNew>
    </>
  )
}
