import { Box } from '@chakra-ui/react'
import { vars } from '@theme'

import { TinyAlertInfo, TinyAlertError, TinyAlertWarning, TinyAlertSuccess } from '../Icons'

export interface props {
  status: 'success' | 'error' | 'info' | 'warning' | 'answered' | 'pending' | 'omitted' | 'new'
  text?: string
  margin?: string
}

/**
 * Componente que retorna un label con distintos tipos de estado y muestra un texto por defecto en caso de que el mensaje no se especifique.
 *
 * @example
 * <TinyAlert status="info" />
 */

export function TinyAlert({ status, text, margin = '0' }: props): JSX.Element | null {
  const alerts = {
    success: {
      icon: <TinyAlertSuccess />,
      text: 'Success',
      bg: vars('colors-alert-ice'),
      color: vars('colors-neutral-darkCharcoal'),
    },
    error: {
      icon: <TinyAlertError />,
      text: 'Error',
      bg: vars('colors-alert-veryLightPinkThree'),
      color: vars('colors-neutral-darkCharcoal'),
    },
    info: {
      icon: <TinyAlertInfo />,
      text: 'Info',
      bg: vars('colors-alert-veryLightBlue'),
      color: vars('colors-neutral-darkCharcoal'),
    },
    warning: {
      icon: <TinyAlertWarning />,
      text: 'Warning',
      bg: vars('colors-alert-pale'),
      color: vars('colors-neutral-darkCharcoal'),
    },
    answered: {
      icon: undefined,
      text: 'Answered',
      bg: vars('colors-main-blueGrey'),
      color: vars('colors-neutral-white'),
    },
    omitted: {
      icon: undefined,
      text: 'Omitted',
      bg: vars('colors-main-ziggurat'),
      color: vars('colors-neutral-darkCharcoal'),
    },
    pending: {
      icon: undefined,
      text: 'Pending',
      bg: vars('colors-neutral-cultured'),
      color: vars('colors-neutral-darkCharcoal'),
    },
    new: {
      icon: undefined,
      text: 'New answer',
      bg: '#FF7A14',
      color: vars('colors-neutral-white'),
    },
  }
  if (!alerts[status]) {
    return null
  }

  return (
    <Box
      margin={margin}
      data-testid="TinyAlert-Box"
      backgroundColor={alerts[status].bg}
      display="flex"
      flexDirection="row"
      alignItems="center"
      padding=".125em .25em"
      gap=".25rem"
      width="fit-content"
      borderRadius=".25rem"
      className="TinyAlert-Box"
    >
      {alerts[status].icon && (
        <Box
          lineHeight={0}
          sx={{
            '>svg': {
              margin: 0,
            },
          }}
        >
          {alerts[status].icon}
        </Box>
      )}

      <Box
        as="span"
        color={alerts[status].color}
        fontSize=".75rem"
        fontStyle="normal"
        fontWeight="400"
        fontFamily="Roboto"
        lineHeight=".875rem"
        margin="0"
      >
        {text ?? alerts[status].text}
      </Box>
    </Box>
  )
}

TinyAlert.displayName = 'TinyAlert'
