import { Modal as ChakraModal, ModalOverlay, ModalContent, Box } from '@chakra-ui/react'

import { vars } from '@/theme'
import { IModalCard } from '../types'
import { useModalConfig } from './useModalConfig'

export const ModalCard = ({
  children,
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  closeOnEsc = true,
}: IModalCard): JSX.Element => {
  const modalConfig = useModalConfig({
    closeOnOverlayClick,
    scrollBehavior: 'outside',
    fixedButtons: false,
    withoutMargin: false,
  })

  return (
    <ChakraModal
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEsc={closeOnEsc}
      isOpen={isOpen}
      motionPreset="scale"
      onClose={onClose}
      scrollBehavior="outside"
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent
        {...modalConfig.contentProps}
        maxW="355px"
        minW="355px"
        minH="auto"
        overflow="hidden"
        sx={{
          ...modalConfig.contentProps.sx,
          bgColor: vars('colors-neutral-white'),
          maxWidth: '355px',
        }}
      >
        <Box>{children}</Box>
      </ModalContent>
    </ChakraModal>
  )
}

export const ModalCardContent = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <Box p="32px">{children}</Box>
}
