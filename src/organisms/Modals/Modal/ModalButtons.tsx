import {
  ModalFooter,
  ModalFooterProps,
  ModalBody,
  useMediaQuery,
  ModalBodyProps,
} from '@chakra-ui/react'

import { IModalButtons } from '../types'
import { uiKitModalIsDesktop } from './Modal'

const StyledModalFooter = ModalFooter as React.FC<ModalFooterProps>
const StyledModalBody = ModalBody as React.FC<ModalBodyProps>

/**
 * Componente que renderiza los botones de un modal.
 * @example
 * <ModalButtons>
 *  <BtnPrimary as="button" onClick={() => onClose()}>Aceptar</BtnPrimary>
 *  <BtnSecondary as="button" onClick={() => onClose()}>Cancelar</BtnSecondary>
 * </ModalButtons>
 */
export const ModalButtons = ({
  children,
  buttonsCenter,
  buttonsColumn,
}: IModalButtons): JSX.Element => {
  const [isDesktop] = useMediaQuery(`(min-width: ${uiKitModalIsDesktop}px)`)
  const buttonFull = !isDesktop && buttonsColumn

  return (
    <StyledModalFooter
      as="footer"
      flexDirection={buttonFull ? 'column' : 'row'}
      gap="24px"
      justifyContent={buttonsCenter ? 'center' : 'flex-start'}
      px={0}
      pt="32px"
      pb={0}
      className="uikit-modalButtons"
      sx={{
        '&>div, &>div>.react-ripples, &>div>.react-ripples>button': {
          width: isDesktop ? 'auto' : '100%',
        },
      }}
    >
      {children}
    </StyledModalFooter>
  )
}

export const ModalContent = ({
  children,
  pb = '32px',
}: {
  children: React.ReactNode
  pb?: string
}): JSX.Element => {
  return (
    <StyledModalBody pt={0} pb={pb} className="uikit-modalContent">
      {children}
    </StyledModalBody>
  )
}
