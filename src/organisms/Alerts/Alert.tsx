import { Box, HStack } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css'

import { ErrorWhite, InfoWhite, SuccessWhite, WarningWhite } from '@/atoms/Icons'
import { BtnPrimary } from '@/molecules'
import { vars } from '@/theme'
import { IAlertProps } from './types.d'

export function Alert({
  children,
  buttonText,
  buttonIcon,
  onClick,
  state,
  m,
}: IAlertProps): JSX.Element {
  const alertStates = {
    success: {
      icon: <SuccessWhite />,
      bg: vars('colors-alert-ice'),
    },
    error: {
      icon: <ErrorWhite />,
      bg: vars('colors-alert-veryLightPinkThree'),
    },
    info: {
      icon: <InfoWhite />,
      bg: vars('colors-alert-veryLightBlue'),
    },
    warning: {
      icon: <WarningWhite />,
      bg: vars('colors-alert-pale'),
    },
  }

  return (
    <Box
      backgroundColor={alertStates[state].bg}
      borderRadius="8px"
      padding="16px"
      width="max-content"
      maxWidth="796px"
      margin={m}
      position="relative"
    >
      <HStack>
        <Box
          className="iconContainer"
          marginRight="10px"
          sx={{
            svg: {
              width: 'auto',
            },
          }}
        >
          {alertStates[state].icon}
        </Box>
        <Box
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          lineHeight="28px"
          color={vars('colors-neutral-darkCharcoal')}
        >
          {children}
        </Box>
        {buttonText && (
          <BtnPrimary leftIcon={buttonIcon} onClick={onClick}>
            {buttonText}
          </BtnPrimary>
        )}
      </HStack>
    </Box>
  )
}
