import { Box, Modal as ChakraModal, ModalOverlay } from '@chakra-ui/react'

import { IModalAlert } from '../types'

import { vars } from '@/theme'
import { ModalAlertContent } from './ModalAlertContent'

export const ModalAlertNew = ({
  autoFocus = false,
  type,
  isOpen,
  onClose,
  children,
  title,
  description,
  status,
}: IModalAlert): JSX.Element => {
  return (
    <>
      <ChakraModal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        motionPreset="scale"
        onClose={onClose}
        closeOnEsc={type !== 'loading'}
        autoFocus={autoFocus}
      >
        <ModalOverlay />
        <ModalAlertContent type={type} title={title} description={description} status={status}>
          {children}
        </ModalAlertContent>
      </ChakraModal>
    </>
  )
}

/**
 * Componente que renderiza los botones de un modal alert.
 * @example
 * <ModalAlertButtons>
 *  <BtnLink as="button" onClick={() => onClose()}>Cancelar</BtnLink>
 *  <BtnLink as="button" onClick={() => onClose()}>Aceptar</BtnLink>
 * </ModalAlertButtons>
 */
export const ModalAlertButtons = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Box
      autoFocus={false}
      display="flex"
      w="100%"
      borderTop={`1px solid ${vars('colors-neutral-platinum')}`}
      sx={{
        button: {
          borderRight: `1px solid ${vars('colors-neutral-platinum')}`,
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '21px',
          p: '16px',
          textDecor: 'none',
          width: '100%',
          '&:last-child': {
            borderRight: 'none',
          },
        },
      }}
    >
      {children}
    </Box>
  )
}
