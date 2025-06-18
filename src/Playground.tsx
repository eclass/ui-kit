import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'
import { Modal } from './organisms/Modals/Modal/Modal'
import { ModalAlert } from './organisms'

export function Playground(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()
  const { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3 } = useDisclosure()
  return (
    <Box p="5rem 1rem">
      <Heading as="h1" size="sm">
        eClass Design System Playground
      </Heading>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Confirmación"
        buttons={[
          { action: () => {}, text: 'Guardar' },
          { type: 'secondary', action: () => onClose(), text: 'Cancelar' },
        ]}
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
          http://cursos.eclass.cl 2) Las credenciales de acceso que recibe el alumno para ingresar a
          su programa de estudio, son personales e intransferibles. 3) Al aceptar estos términos y
          condiciones, el alumno se compromete a realizar el programa en el que se encuentra
          inscrito y a revisar los siguientes documentos: Reglamento Académico, Manual del Alumno e
          Información del Programa.Estos documentos estarán disponibles en la plataforma de estudio,
          y contienen toda la información académica del programa. 4) El alumno se compromete a
          utilizar los materiales y medios tecnológicos de eClass exclusivamente con fines
          educativos en el marco del programa de estudio. Se deja constancia que la
        </p>
      </Modal>

      <Button onClick={onOpen2}>Open ModalAlert</Button>
      <ModalAlert
        isOpen={isOpen2}
        onClose={onClose2}
        type="info"
        status="success"
        title="¿Seguro que deseas borrar esta pregunta?"
        description="Por favor escoge otro horario."
        buttons={[
          { action: () => {}, text: 'Opciones más largas' },
          { action: () => onClose2(), text: 'Cancelar' },
        ]}
      />
      <Button onClick={onOpen3}>Open ModalAlert loading</Button>
      <ModalAlert
        isOpen={isOpen3}
        onClose={onClose3}
        type="loading"
        title="Descargando documento"
        description="Se está preparando el archivo. Esto podría tardar un momento."
      />
    </Box>
  )
}
