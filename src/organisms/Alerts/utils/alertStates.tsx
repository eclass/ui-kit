import { ErrorWhite, InfoWhite, SuccessWhite, WarningWhite } from '@/atoms/Icons'
import { vars } from '@/theme'

export const alertStates = {
  success: {
    icon: <SuccessWhite />,
    bg: vars('colors-alert-ice'),
    id: 'success',
  },
  error: {
    icon: <ErrorWhite />,
    bg: vars('colors-alert-veryLightPinkThree'),
    id: 'error',
  },
  info: {
    icon: <InfoWhite />,
    bg: vars('colors-alert-veryLightBlue'),
    id: 'info',
  },
  warning: {
    icon: <WarningWhite />,
    bg: vars('colors-alert-pale'),
    id: 'warning',
  },
}
