import { ModalFooter, ModalFooterProps, ModalBody, useMediaQuery } from '@chakra-ui/react'

import { IModalButtons } from '../types'
import { uiKitModalIsDesktop } from './Modal'

const StyledModalFooter = ModalFooter as React.FC<ModalFooterProps>

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
      px={isDesktop && (!buttonsCenter || !buttonsColumn) ? '24px' : '0'}
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

export const ModalContent = ({ children, withoutMargin, px, py, pb = '32px' }: any) => {
  return (
    <ModalBody pt={0} pb={pb} className="uikit-modalContent">
      {children}
    </ModalBody>
  )
}
