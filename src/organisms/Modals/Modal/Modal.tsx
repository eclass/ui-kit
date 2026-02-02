import { Modal as ChakraModal, ModalOverlay, ModalContent } from '@chakra-ui/react'

import { IModal } from '../types'
import { ModalContentBase } from './ModalContentBase'
import { useModalConfig } from './useModalConfig'

export const uiKitModalIsDesktop = 641
export const ModalPadding = {
  py: '32px',
  px: '24px',
}

export const Modal = ({
  children,
  closeOnOverlayClick = true,
  fixedSubtitle,
  isOpen,
  onClose,
  title,
  withoutMargin = false,
  scrollBehavior = 'outside',
  fixedButtons = false,
  autoFocus = false,
}: IModal): JSX.Element => {
  const isInside = scrollBehavior === 'inside' || fixedButtons

  const modalConfig = useModalConfig({
    closeOnOverlayClick,
    scrollBehavior,
    fixedButtons,
    withoutMargin,
  })

  return (
    <ChakraModal
      closeOnOverlayClick={modalConfig.closeOnOverlayClick}
      closeOnEsc={modalConfig.closeOnEsc}
      isOpen={isOpen}
      motionPreset="scale"
      onClose={onClose}
      scrollBehavior={isInside ? 'inside' : 'outside'}
      autoFocus={autoFocus}
    >
      <ModalOverlay />
      <ModalContent {...modalConfig.contentProps}>
        <ModalContentBase
          fixedButtons={fixedButtons}
          withoutMargin={withoutMargin}
          title={title}
          closeOnOverlayClick={closeOnOverlayClick}
          fixedSubtitle={fixedSubtitle}
        >
          {children}
        </ModalContentBase>
      </ModalContent>
    </ChakraModal>
  )
}
