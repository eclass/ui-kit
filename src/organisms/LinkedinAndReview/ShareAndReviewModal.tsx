import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalContentProps,
  IconButton,
  IconButtonProps,
  Flex,
  FlexProps,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { vars } from '@theme'

import { CustomCloseIcon } from './components/CustomCloseIcon'
import { InitialShareContent } from './components/InitialShareContent'
import { AfterShareContent } from './components/AfterShareContent'

const StyledModalContent = ModalContent as React.FC<ModalContentProps>
const StyledIconButton = IconButton as React.FC<IconButtonProps>
const StyledFlex = Flex as React.FC<FlexProps>

export interface ShareAndReviewProps {
  isOpen: boolean
  onClose: () => void
  onContinue?: () => void
  onLeaveReview?: () => void
}

export const ShareAndReviewModal = ({
  isOpen,
  onClose,
  onContinue,
  onLeaveReview,
}: ShareAndReviewProps) => {
  const [hasClickedLinkedin, setHasClickedLinkedin] = useState(false)

  // Resetear el estado cada vez que se abre o cierra la modal
  useEffect(() => {
    if (!isOpen) {
      setHasClickedLinkedin(false)
    }
  }, [isOpen])

  const handleLinkedinClick = () => {
    // 1. Ejecutamos la acción original de LinkedIn (abrir la nueva pestaña)
    if (onContinue) {
      onContinue()
    }

    // 2. Aplicamos un pequeño timeout (ej: 400ms) para reemplazar el botón por el texto
    // Esto da tiempo a que se registre la acción antes de cambiar la UI visualmente
    setTimeout(() => {
      setHasClickedLinkedin(true)
    }, 400)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} isCentered>
      <ModalOverlay />

      <StyledModalContent
        alignSelf="center"
        maxW="471px"
        marginInline="16px"
        borderRadius="8px"
        p="32px 16px"
        position="relative"
        alignItems="center"
      >
        <StyledIconButton
          aria-label="Cerrar"
          autoFocus={false}
          bg="transparent"
          icon={<CustomCloseIcon />}
          onClick={onClose}
          variant="ghost"
          size="sm"
          h="auto"
          minW="16px"
          position="absolute"
          top="16px"
          right="16px"
          _hover={{
            background: 'none',
          }}
          _focus={{
            boxShadow: 'none',
          }}
          _focusVisible={{
            boxShadow: `0 0 0 3px ${vars('colors-alert-deepSkyBlue')} inset`,
          }}
        />

        <StyledFlex direction="column" align="center" textAlign="center" gap="16px">
          {!hasClickedLinkedin ? (
            <InitialShareContent
              handleLinkedinClick={handleLinkedinClick}
              onLeaveReview={onLeaveReview}
            />
          ) : (
            <AfterShareContent onClose={onClose} onLeaveReview={onLeaveReview} />
          )}
        </StyledFlex>
      </StyledModalContent>
    </Modal>
  )
}
