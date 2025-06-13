import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { vars } from './theme'
import { BtnPrimary, BtnSecondary } from './molecules'

export function Playground(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box p="5rem 1rem">
      <Heading as="h1" size="sm">
        eClass Design System Playground
      </Heading>
      <Button onClick={onOpen}>Open Modal</Button>
      <Hola
        isOpen={isOpen}
        onClose={onClose}
        title="Confirmación"
        buttons={[
          { action: () => {}, text: 'Guardar' },
          { type: 'secondary', action: () => onClose(), text: 'Cancelar' },
        ]}
      >
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sed nam aspernatur dolores
            saepe laudantium dicta dignissimos assumenda accusamus expedita adipisci, ipsum vel
            exercitationem enim suscipit. Qui nihil quo quis.
          </p>
        </>
      </Hola>
    </Box>
  )
}

interface HolaProps extends React.FC {
  children: JSX.Element
  title?: string
  isOpen: boolean
  onClose: () => void
  /** Por defecto es false, si esta activo se quita el margin del contenido */
  withoutMargin?: boolean
  buttons?: Array<{ type?: 'primary' | 'secondary'; action: () => void; text: string }>
  /** Si es un solo botón tiene la opción de centrar este  */
  buttonsCenter?: boolean
  /** Por defecto esta activo y permite cerrar el modal haciendo click fuera del modal */
  closeOnOverlayClick?: boolean
}
const Hola = ({
  children,
  title,
  isOpen,
  onClose,
  withoutMargin = false,
  buttons,
  buttonsCenter,
  closeOnOverlayClick = true,
}: HolaProps): JSX.Element => {
  const px = '24px'
  const py = '32px'

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={closeOnOverlayClick}
        motionPreset="scale" // "slideInBottom" | "slideInRight" | "scale" | "none"
        scrollBehavior="inside" // este es el comportamiento del scroll al abrir el modal
        // size="full" // este es el tamaño del modal
      >
        <ModalOverlay bg={vars('colors-neutral-darkCharcoal')} opacity="0.3!important" />
        <ModalContent
          minH="300px"
          maxH="100dvh"
          boxShadow={vars('shadows-lg')}
          borderRadius="8px"
          mt="10vh" // con esto se puede ajustar la posición del modal desde la parte superior
        >
          <ModalHeader
            borderTopRadius="8px"
            bg={vars('colors-main-deepSkyBlue')}
            color={vars('colors-neutral-white')}
            paddingY={px}
            fontSize="20px"
            fontWeight={700}
            fontFamily="Roboto"
            lineHeight={1}
          >
            {title}
          </ModalHeader>
          <ModalCloseButton
            color={vars('colors-neutral-white')}
            w="12px"
            h="12px"
            top={0}
            right={0}
            p="22px"
            _focus={{
              boxShadow: 'none',
            }}
          />
          {children && (
            <ModalBody px={withoutMargin ? 0 : px} pt={py} pb={0}>
              {children}
            </ModalBody>
          )}

          <ModalButtons px={px} py={py} buttons={buttons} buttonsCenter={buttonsCenter} />
        </ModalContent>
      </Modal>
    </>
  )
}

interface IModalButtons {
  px: string
  py: string
  buttons: HolaProps['buttons']
  buttonsCenter?: HolaProps['buttonsCenter']
}
const ModalButtons = ({ px, py, buttons, buttonsCenter }: IModalButtons): JSX.Element => {
  if (!buttons || (buttons && buttons.length === 0)) {
    return <></>
  }
  return (
    <>
      <ModalFooter
        px={px}
        py={py}
        justifyContent={buttonsCenter ? 'center' : 'flex-start'}
        gap="24px"
      >
        {buttons.map((button, index) => {
          if (button?.type === 'secondary') {
            return (
              <BtnSecondary key={index} onClick={() => button.action()}>
                {button.text}
              </BtnSecondary>
            )
          }
          return (
            <BtnPrimary key={index} onClick={() => button.action()}>
              {button.text}
            </BtnPrimary>
          )
        })}
      </ModalFooter>
    </>
  )
}
