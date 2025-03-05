import {
  ErrorWhite,
  InfoWhite,
  SuccessWhite,
  WarningWhite,
  ErrorColor,
  InfoColor,
  SuccessColor,
  WarningColor,
} from 'atoms/Icons'
import { vars } from 'theme'

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

export const alertColorStates = {
  success: {
    icon: <SuccessColor />,
    bg: vars('colors-alert-ice'),
    id: 'success',
  },
  error: {
    icon: <ErrorColor />,
    bg: vars('colors-alert-veryLightPinkThree'),
    id: 'error',
  },
  info: {
    icon: <InfoColor />,
    bg: vars('colors-alert-veryLightBlue'),
    id: 'info',
  },
  warning: {
    icon: <WarningColor />,
    bg: vars('colors-alert-pale'),
    id: 'warning',
  },
}
