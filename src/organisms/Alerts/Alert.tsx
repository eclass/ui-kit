import { Close, ErrorWhite, InfoWhite, SuccessWhite, WarningWhite } from '@/atoms/Icons'
import { BtnPrimary } from '@/molecules'
import { vars } from '@/theme'
import { Box, HStack } from '@chakra-ui/react'

interface IAlertProps {
  children: React.ReactChild | React.ReactChild[]
  buttonText?: string
  buttonIcon?: React.ReactElement
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  state: 'error' | 'info' | 'success' | 'warning'
  type: 'flash' | 'static'
  m?: string
}

export function Alert({
  children,
  buttonText,
  buttonIcon,
  onClick,
  state,
  type,
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
      padding="24px 16px"
      width="max-content"
      maxWidth="796px"
      margin={m}
      position="relative"
    >
      {type === 'flash' && (
        <Box
          className="closeIcon"
          display="flex"
          position="absolute"
          top="16px"
          right="12px"
          cursor="pointer"
        >
          <Close />
        </Box>
      )}
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
        {children}
        {type === 'static' && buttonText && (
          <BtnPrimary leftIcon={buttonIcon} onClick={onClick}>
            {buttonText}
          </BtnPrimary>
        )}
      </HStack>
    </Box>
  )
}
