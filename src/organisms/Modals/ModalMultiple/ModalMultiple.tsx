import { Modal as ChakraModal, ModalOverlay } from '@chakra-ui/react'

import { ModalContentBase } from '../Modal/ModalContentBase'
import { ModalAlertContent } from '../ModalAlert/ModalAlertContent'
import { IModalAlert, IModal } from '../types'

export interface ModalDefaultProps {
  closeOnOverlayClick?: IModal['closeOnOverlayClick']
  fixedSubtitle?: IModal['fixedSubtitle']
  withoutMargin?: IModal['withoutMargin']
  scrollBehavior?: IModal['scrollBehavior']
  fixedButtons?: IModal['fixedButtons']
}

export interface ModalAlertProps {
  status?: IModalAlert['status']
  description?: IModalAlert['description']
}

export interface ModalMultipleProps extends ModalDefaultProps, ModalAlertProps {
  type: 'modal' | 'modalAlert' | 'modalLoading'
  isOpen: boolean
  onClose: () => void
  autoFocus?: boolean
  children?: React.ReactNode
  title?: string
}

export const ModalMultiple = ({
  autoFocus = false,
  type,
  isOpen,
  onClose,
  children,
  title,
  description,
  closeOnOverlayClick = true,
  fixedSubtitle,
  withoutMargin = false,
  scrollBehavior = 'outside',
  fixedButtons = false,
  status,
}: ModalMultipleProps): JSX.Element => {
  const isInside = scrollBehavior === 'inside' || fixedButtons

  const configDifferent: Record<
    'modal' | 'modalAlert' | 'modalLoading',
    {
      closeOnOverlayClick: boolean
      closeOnEsc: boolean
      scrollBehavior?: 'outside' | 'inside'
    }
  > = {
    modal: {
      closeOnOverlayClick,
      closeOnEsc: closeOnOverlayClick,
      scrollBehavior: isInside ? 'inside' : 'outside',
    },
    modalAlert: {
      closeOnOverlayClick: false,
      closeOnEsc: false,
      scrollBehavior: 'outside',
    },
    modalLoading: {
      closeOnOverlayClick: false,
      closeOnEsc: false,
      scrollBehavior: 'outside',
    },
  }

  return (
    <>
      <ChakraModal
        closeOnOverlayClick={configDifferent[type].closeOnOverlayClick}
        isOpen={isOpen}
        motionPreset="scale"
        onClose={onClose}
        closeOnEsc={configDifferent[type].closeOnEsc}
        scrollBehavior={configDifferent[type].scrollBehavior}
        autoFocus={autoFocus}
      >
        <ModalOverlay />
        {type === 'modal' ? (
          <ModalContentBase
            isInside={isInside}
            fixedButtons={fixedButtons}
            withoutMargin={withoutMargin}
            title={title}
            closeOnOverlayClick={closeOnOverlayClick}
            fixedSubtitle={fixedSubtitle}
            children={children}
          />
        ) : (
          <ModalAlertContent
            type={type === 'modalAlert' ? 'info' : 'loading'}
            title={title}
            description={description}
            status={status}
            children={children}
          />
        )}
      </ChakraModal>
    </>
  )
}
