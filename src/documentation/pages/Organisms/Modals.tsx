import { MyHeading, MyText, MyTitle, Code, ListComponent } from '@/documentation/components'
import { ModalAlertDemo, ModalDemo } from '@/documentation/components/Organisms/Modals'

export const ViewModals = (): JSX.Element => {
  return (
    <>
      <div>
        <p>ejemplo multiple</p>
      </div>
      <MyHeading>Modales</MyHeading>
      <MyText>
        Para los modales, tenemos dos tipos de componentes: Modal y ModalAlert. Cada uno tiene sus{' '}
        <strong>variantes</strong> que definen su apariencia y funcionalidad, y también tienen
        <strong> tamaños y paddings predefinidos</strong>.
      </MyText>
      <ListComponent>
        <ModalDemo />
        <ModalAlertDemo button="Open ModalAlert" />
      </ListComponent>

      <MyTitle>Tipo Modal</MyTitle>
      <MyText>
        Es el Modal tradicional para mostrar contenido, que incluye una cabecera, contenido y
        footer. En el componente <strong>ModalContent</strong> va todo lo que quieras visualizar en
        el modal este puede contener hasta los botones <strong>ModalButtons</strong>, igualmente lo
        botones pueden ir por fuera para cuando necesitas que no esten dentro del scroll.
      </MyText>
      <MyText>El componente se importa de la siguiente manera:</MyText>
      <Code text="import { Modal } from '@eclass/ui-kit'" />
      <ListComponent>
        <ModalDemo />
      </ListComponent>
      <Code
        text={`
import { Modal, ModalContent, ModalButtons } from '@eclass/ui-kit'

export function View(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Confirmación"
      >
        <ModalContent>
          <p>Contenido del modal...</p>
          <ModalButtons>
            <BtnPrimary onClick={onClose}>Guardar</BtnPrimary>
            <BtnSecondary onClick={onClose}>Cancelar</BtnSecondary>
          </ModalButtons>
        </ModalContent>
      </Modal>
    )
}`}
      />
      <MyTitle>Variantes del tipo Modal</MyTitle>
      <MyText>
        Variantes del modal dependiendo de sus <strong>props</strong>. El valor de los props va
        definido en sus tipos.
      </MyText>
      <ListComponent>
        <ModalDemo type="withoutButtons" />
        <ModalDemo type="inside" />
        <ModalDemo type="buttonsOutside" />
        <ModalDemo type="closeOnOverlayClick" />

        <ModalDemo type="fixedSubtitle" />
        <ModalDemo type="withoutMargin" />

        <ModalDemo type="buttonsCenter" />
        <ModalDemo type="buttonsColumn" />
      </ListComponent>

      <MyTitle>Tipo ModalAlert</MyTitle>
      <MyText>
        Es el modal que se utiliza a modo de alerta para el usuario, el cual posee información
        reducida y también puede contar con botones. Este componente tiene dos visualizaciones
        principales.
      </MyText>
      <MyText>El componente se importa de la siguiente manera:</MyText>
      <Code text="import { ModalAlert } from '@eclass/ui-kit'" />
      <ListComponent>
        <ModalAlertDemo button="Modal de Alerta" />
        <ModalAlertDemo button="Modal de Alerta (Cargando)" type="loading" />
      </ListComponent>
      <Code
        text={`
import { ModalAlert } from '@eclass/ui-kit'
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export function View(){
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Abrir Modal de Alerta</Button>
      <ModalAlert
        isOpen={isOpen}
        onClose={onClose}
        type="info"
        title="Confirmación"
        buttons={[
          { action: () => onClose(), text: 'Guardar' },
          { type: 'secondary', action: () => onClose(), text: 'Cancelar' },
        ]}
      >
        <p>Contenido de la alerta...</p>
      </ModalAlert>
    </>)
}`}
      />
      <MyTitle>Variantes del tipo ModalAlert</MyTitle>
      <MyText>
        Las variantes del modal son dos, como ejemplificamos más arriba. Sin embargo, cada una
        también puede variar; por ejemplo, se pueden <strong>omitir los textos</strong> pasados como
        props, y en el ModalAlert normal el icono varía según los estados definidos.
      </MyText>
      <ListComponent>
        <ModalAlertDemo status="success" />
        <ModalAlertDemo status="error" />
        <ModalAlertDemo status="warning" />
        <ModalAlertDemo status="info" />
        <ModalAlertDemo button="Modal de Alerta sin título" withoutTitle />
        <ModalAlertDemo button="Modal de Alerta sin descripción" withoutDescription />
        <ModalAlertDemo
          button="Modal de Alerta cargando (sin título)"
          type="loading"
          withoutTitle
        />
        <ModalAlertDemo
          button="Modal de Alerta cargando (sin descripción)"
          type="loading"
          withoutDescription
        />
      </ListComponent>
    </>
  )
}

export default ViewModals
