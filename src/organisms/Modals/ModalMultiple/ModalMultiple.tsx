import { Modal as ChakraModal, ModalOverlay, ModalContent } from '@chakra-ui/react'

import { ModalContentBase } from '../Modal/ModalContentBase'
import { ModalAlertContent } from '../ModalAlert/ModalAlertContent'
import { IModalAlert, IModal } from '../types'
import { useModalMultipleConfig } from './useModalMultipleConfig'

/* -------------------------------------------------------------------------- */
/*                                    TYPES                                   */
/* -------------------------------------------------------------------------- */

export interface ModalDefaultProps {
  closeOnOverlayClick?: IModal['closeOnOverlayClick']
  fixedSubtitle?: IModal['fixedSubtitle']
  withoutMargin?: IModal['withoutMargin']
  scrollBehavior?: IModal['scrollBehavior']
  fixedButtons?: IModal['fixedButtons']
}

type BaseProps = ModalDefaultProps & {
  isOpen: boolean
  onClose: () => void
  autoFocus?: boolean
}

type ModalProps = BaseProps & {
  type: 'modal'
  title?: string
  children: React.ReactNode
}

type ModalAlertProps = BaseProps & {
  type: 'modalAlert' | 'modalLoading'
  title?: string
  description?: string
  status?: IModalAlert['status']
  children?: React.ReactNode
}

export type ModalMultipleProps = ModalProps | ModalAlertProps

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */
/**
 * 
 * @example
 * <ModalMultiple
    type={type}
    isOpen={open}
    onClose={() => setOpen(false)}
    title={type === 'modal' ? 'Confirmación' : '¿Seguro que deseas borrar esta pregunta?'}
    status="info"
    description="Por favor escoge otro horario."
  >
    {type === 'modal' ? (
      <ModalContent>
        <p>
          alumnos, además de definir el uso de la plataforma de estudio. 
        </p>
        <ModalButtons>
          <BtnPrimary onClick={() => setType('modalAlert')}>Guardar</BtnPrimary>
          <BtnSecondary onClick={() => setOpen(false)}>Cancelar</BtnSecondary>
        </ModalButtons>
      </ModalContent>
    ) : (
      <ModalAlertButtons>
        <BtnLink as="button" onClick={() => setType('modal')}>
          Aceptar
        </BtnLink>
        <BtnLink as="button" onClick={() => setOpen(false)}>
          Cancelar
        </BtnLink>
      </ModalAlertButtons>
    )}
  </ModalMultiple>
 */
export const ModalMultiple = (props: ModalMultipleProps): JSX.Element => {
  const {
    type,
    isOpen,
    onClose,
    autoFocus = false,
    children,
    title,
    closeOnOverlayClick = true,
    fixedSubtitle,
    withoutMargin = false,
    scrollBehavior = 'outside',
    fixedButtons = false,
  } = props

  const modalConfig = useModalMultipleConfig({
    type,
    closeOnOverlayClick,
    scrollBehavior,
    fixedButtons,
    withoutMargin,
  })

  const renderContent = (): JSX.Element | null => {
    switch (type) {
      case 'modal':
        return (
          <ModalContentBase
            fixedButtons={fixedButtons}
            withoutMargin={withoutMargin}
            title={title}
            closeOnOverlayClick={closeOnOverlayClick}
            fixedSubtitle={fixedSubtitle}
          >
            {children}
          </ModalContentBase>
        )

      case 'modalAlert':
      case 'modalLoading': {
        const { description, status } = props

        return (
          <ModalAlertContent
            type={type === 'modalAlert' ? 'info' : 'loading'}
            title={title}
            description={description}
            status={status}
          >
            {children}
          </ModalAlertContent>
        )
      }
    }
  }

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale"
      autoFocus={autoFocus}
      closeOnOverlayClick={modalConfig.closeOnOverlayClick}
      closeOnEsc={modalConfig.closeOnEsc}
      scrollBehavior={modalConfig.scrollBehavior}
    >
      <ModalOverlay />
      <ModalContent {...modalConfig.contentProps}>{renderContent()}</ModalContent>
    </ChakraModal>
  )
}
