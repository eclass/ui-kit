import { ModalFooter, ModalFooterProps } from '@chakra-ui/react'

import { BtnPrimary, BtnSecondary } from '@/molecules'
import { IModalButtons } from '../types'

const StyledModalFooter = ModalFooter as React.FC<ModalFooterProps>

export const ModalButtons = ({
  buttons,
  buttonsCenter,
  buttonsColumn,
  buttonsInside,
  isDesktop,
  px,
  py,
}: IModalButtons): JSX.Element => {
  if (!buttons || (buttons && buttons.length === 0)) {
    return <></>
  }

  const buttonFull = !isDesktop && buttonsColumn

  const hasLoading = buttons.some((button) => button.isLoading)

  return (
    <StyledModalFooter
      as="footer"
      flexDirection={buttonFull ? 'column' : 'row'}
      gap="24px"
      justifyContent={buttonsCenter ? 'center' : 'flex-start'}
      pb={buttonsInside ? 0 : py}
      pt={py}
      px={buttonsInside ? 0 : px}
    >
      {buttons.map((button, index) => {
        if (button?.type === 'secondary') {
          return (
            <BtnSecondary
              key={index}
              onClick={() => button.action()}
              isFullWidth={buttonFull}
              isLoading={button.isLoading}
              disabled={button.isDisabled ?? hasLoading}
            >
              {button.text}
            </BtnSecondary>
          )
        }
        return (
          <BtnPrimary
            key={index}
            onClick={() => button.action()}
            isFullWidth={buttonFull}
            isLoading={button.isLoading}
            disabled={button.isDisabled ?? hasLoading}
          >
            {button.text}
          </BtnPrimary>
        )
      })}
    </StyledModalFooter>
  )
}
