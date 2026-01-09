import { Modal as ChakraModal, ModalOverlay } from '@chakra-ui/react'

import { IModal } from '../types'
import { ModalContentBase } from './ModalContentBase'

export const uiKitModalIsDesktop = 641

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

  return (
    <>
      <ChakraModal
        closeOnOverlayClick={closeOnOverlayClick}
        closeOnEsc={closeOnOverlayClick}
        isOpen={isOpen}
        motionPreset="scale"
        onClose={onClose}
        scrollBehavior={isInside ? 'inside' : 'outside'}
        autoFocus={autoFocus}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContentBase
          isInside={isInside}
          fixedButtons={fixedButtons}
          withoutMargin={withoutMargin}
          title={title}
          closeOnOverlayClick={closeOnOverlayClick}
          fixedSubtitle={fixedSubtitle}
          children={children}
        />
      </ChakraModal>
    </>
  )
}
