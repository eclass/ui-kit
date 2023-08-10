import { ErrorWhite, InfoWhite, SuccessWhite, WarningWhite } from '@/atoms/Icons'
import { vars } from '@/theme'

export const alertStates = {
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
