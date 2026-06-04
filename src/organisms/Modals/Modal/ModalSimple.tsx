import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Box,
} from '@chakra-ui/react'

import { vars } from '@/theme'
import { IModalSimple } from '../types'
import { useModalConfig } from './useModalConfig'

export const ModalSimple = ({
  children,
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  closeOnEsc,
  withoutMargin = false,
}: IModalSimple): JSX.Element => {
  const modalConfig = useModalConfig({
    closeOnOverlayClick,
    scrollBehavior: 'outside',
    fixedButtons: false,
    withoutMargin,
  })

  return (
    <ChakraModal
      closeOnOverlayClick={modalConfig.closeOnOverlayClick}
      closeOnEsc={closeOnEsc ?? modalConfig.closeOnEsc}
      isOpen={isOpen}
      motionPreset="scale"
      onClose={onClose}
      scrollBehavior="outside"
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent {...modalConfig.contentProps}>
        <ModalCloseButton
          background="transparent !important"
          border="none"
          color={vars('colors-neutral-spanishGrey')}
          h="12px"
          p="22px"
          position="absolute"
          right={0}
          top={0}
          w="12px"
          zIndex={2}
          _focus={{
            boxShadow: 'none',
          }}
          _focusVisible={{
            boxShadow: `inset 0 0 0 2px ${vars('colors-alert-deepSkyBlue')}, inset 0 0 0 4px ${vars(
              'colors-neutral-white'
            )}`,
          }}
        />
        <Box
          data-testid="modal-simple-content"
          px={withoutMargin ? 0 : '24px'}
          py={withoutMargin ? 0 : '32px'}
        >
          {children}
        </Box>
      </ModalContent>
    </ChakraModal>
  )
}
