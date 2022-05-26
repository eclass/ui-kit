import * as React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react'

import { vars } from '@theme'
import { AlertInfo } from '@/atoms/Icons'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  showOverlay: boolean
}

export function PaymentModal({
  isOpen,
  onClose,
  showOverlay,
}: PaymentModalProps): JSX.Element | null {
  const cssButton = {
    backgroundColor: 'transparent',
  }

  function OverlayTwo(): any {
    return <ModalOverlay bg="#ffffffc2" opacity=".8" backdropBlur="2px" />
  }

  const [overlay, setOverlay] = React.useState(<OverlayTwo />)

  React.useEffect(() => {
    if (showOverlay) {
      setOverlay(<OverlayTwo />)
    }
  }, [showOverlay])

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
      {overlay}
      <ModalContent marginTop="0" marginBottom="10.75rem">
        <ModalHeader
          justifyContent="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p="2rem 2rem 0 2rem"
        >
          <AlertInfo w="52" h="45" viewBox="0 0 45 52" />
          Curso congelado por pagos pendientes
        </ModalHeader>
        <ModalCloseButton
          size="md"
          color={vars('colors-main-blueGrey')}
          _hover={cssButton}
          _focus={cssButton}
          _active={cssButton}
        />
        <ModalBody p="1rem 2rem 2rem 2rem">
          <Text>
            Para regularizar esta situación y continuar estudiando, comunícate cuanto antes con
            regularizacion@eclass.com, de lo contrario tu curso será deshabilitado.
          </Text>
        </ModalBody>
        <ModalFooter
          justifyContent="center"
          borderTop="1px solid"
          borderTopColor={vars('colors-neutral-platinum')}
          p="1rem"
        >
          <Button
            onClick={onClose}
            color={vars('colors-main-deepSkyBlue')}
            backgroundColor="transparent"
            fontWeight="500"
            height="auto"
            lineHeight="1.172rem"
            _hover={cssButton}
            _focus={cssButton}
            _active={cssButton}
          >
            Entendido
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

Modal.displayName = 'Modal'
