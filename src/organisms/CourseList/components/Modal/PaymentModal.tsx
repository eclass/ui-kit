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
import * as Type from '../../types'

interface PaymentModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  showOverlay: boolean
  modalPaymentText: Type.PaymentText
}

export function PaymentModal({
  isOpen,
  onOpen,
  onClose,
  showOverlay,
  modalPaymentText,
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
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl" blockScrollOnMount={false}>
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
          {modalPaymentText.title}
        </ModalHeader>
        <ModalCloseButton
          size="md"
          color={vars('colors-main-blueGrey')}
          _hover={cssButton}
          _focus={cssButton}
          _active={cssButton}
        />
        <ModalBody p="1rem 2rem 2rem 2rem">
          <Text>{modalPaymentText.body}</Text>
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
