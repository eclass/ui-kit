import { useDisclosure } from '@chakra-ui/react'
import { BtnPrimary } from '@/molecules'
import { Modal, ModalAlertNew } from '@/organisms'

export const ModalDemo = ({
  type,
}: {
  type?:
    | 'inside'
    | 'withoutButtons'
    | 'buttonsCenter'
    | 'buttonsColumn'
    | 'buttonsInside'
    | 'fixedSubtitle'
    | 'withoutMargin'
    | 'closeOnOverlayClick'
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const name = {
    default: 'Open Modal',
    withoutButtons: 'Sin botones (withoutButtons)',
    buttonsCenter: 'Con boton centrado (buttonsCenter)',
    buttonsColumn: 'Botones en mobile no pasan a columas (buttonsColumn)',
    buttonsInside: 'Botones dentro del contenido (buttonsInside)',
    fixedSubtitle: 'Subtitulo fijo (fixedSubtitle="")',
    withoutMargin: 'Sin margin (withoutMargin)',
    closeOnOverlayClick: 'Cerrar solo en botones (closeOnOverlayClick)',
    inside: 'Scroll dentro del modal (inside)',
  }

  return (
    <>
      <BtnPrimary onClick={onOpen}>{name[type ?? 'default']}</BtnPrimary>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Confirmación"
        fixedSubtitle={type === 'fixedSubtitle' ? 'Este es  un subtitulo que queda fijo' : ''}
        buttonsCenter={type === 'buttonsCenter'}
        buttonsColumn={type !== 'buttonsColumn'}
        buttonsInside={type === 'buttonsInside'}
        scrollBehavior={['buttonsInside', 'inside'].includes(type ?? '') ? 'inside' : 'outside'}
        withoutMargin={type === 'withoutMargin'}
        closeOnOverlayClick={type !== 'closeOnOverlayClick'}
        buttons={
          type === 'withoutButtons'
            ? []
            : type === 'buttonsCenter'
            ? [{ action: () => onClose(), text: 'Guardar' }]
            : [
                { action: () => onClose(), text: 'Guardar' },
                { type: 'secondary', action: () => onClose(), text: 'Cancelar' },
              ]
        }
      >
        <p>
          alumnos, además de definir el uso de la plataforma de estudio. 1) El material del programa
          de estudio estará disponible en una plataforma tecnológica a la que cada alumno podrá
          acceder en la siguiente dirección: http://cursos.eclass.cl 2) Las credenciales de acceso
          que recibe el alumno para ingresar a su programa de estudio, son personales e
          intransferibles. 3) Al aceptar estos términos y condiciones, el alumno se compromete a
          realizar el programa en el que se encuentra inscrito y a revisar los siguientes
          documentos: Reglamento Académico, Manual del Alumno e Información del Programa.Estos
          documentos estarán disponibles en la plataforma de estudio, y contienen toda la
          información académica del programa. 4) El alumno se compromete a utilizar los materiales y
          medios tecnológicos de eClass exclusivamente con fines educativos en el marco del programa
          de estudio. Se deja constancia que la alumnos, además de definir el uso de la plataforma
          de estudio. 5) El material del programa de estudio estará disponible en una plataforma
          tecnológica a la que cada alumno podrá acceder en la siguiente dirección:
          http://cursos.eclass.cl
          {['buttonsInside', 'inside'].includes(type ?? '') && (
            <>
              2) Las credenciales de acceso que recibe el alumno para ingresar a su programa de
              estudio, son personales e intransferibles. 3) Al aceptar estos términos y condiciones,
              el alumno se compromete a realizar el programa en el que se encuentra inscrito y a
              revisar los siguientes documentos: Reglamento Académico, Manual del Alumno e
              Información del Programa.Estos documentos estarán disponibles en la plataforma de
              estudio, y contienen toda la información académica del programa. 4) El alumno se
              compromete a utilizar los materiales y medios tecnológicos de eClass exclusivamente
              con fines educativos en el marco del programa de estudio. Se deja constancia que la
            </>
          )}
        </p>
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
        buttons={[
          { action: () => onClose(), text: 'Opciones más largas' },
          { action: () => onClose(), text: 'Cancelar' },
        ]}
      />
    </>
  )
}
