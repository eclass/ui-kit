import { Box } from '@chakra-ui/react'

import { vars } from '@theme'
import { HelpIcon } from '@/molecules/NavBarButtons/Icons/HelpIcon'
import { CalendarButtonIcon } from './Icons/CalendarButtonIcon'
import { Accessibility } from '@/atoms/Icons/Accessibility'

/**
 * Componente que muestra botones de la barra de navegación. Recibe los siguientes props:
 * @param {('button' | 'a' | 'div')} [as='button'] - Tipo de elemento HTML que se renderiza. Por defecto es un botón.
 * @param {string} [buttonName] - Nombre del botón. Si no se proporciona, se usa un valor predeterminado según el tipo de botón.
 * @param {boolean} [onlyLink] - Si es `true`, el botón no ejecuta ninguna acción al hacer clic, solo actúa como un enlace.
 * @param {function} onClick - Función que se ejecuta al hacer clic en el botón.
 * @param {'calendar' | 'help' | 'accessibility'} [type] - Tipo de botón que determina el icono y el texto a mostrar.
 */

export interface ButtonProps {
  as?: 'button' | 'a' | 'div'
  buttonName?: string
  onlyLink?: boolean
  onClick?: () => void
  type: 'calendar' | 'help' | 'accessibility'
}

export const NavBarButton = ({
  as = 'button',
  buttonName,
  onlyLink,
  onClick,
  type,
}: ButtonProps): JSX.Element => {
  const buttonType = {
    accessibility: {
      icon: <Accessibility />,
      text: buttonName ?? 'ACCESIBILIDAD',
    },
    calendar: {
      icon: <CalendarButtonIcon />,
      text: buttonName ?? 'CALENDARIO',
    },
    help: {
      icon: <HelpIcon />,
      text: buttonName ?? 'AYUDA',
    },
  }

  const triggerWidget = (): void => {
    const buttonB = document.getElementById('userWayTrigger')
    if (buttonB?.click) {
      buttonB.click() // Hace clic en el botón del archivo index.html
    }
  }

  const activeBg = vars('colors-main-deepSkyBlue') ?? '#0189FF'
  const hoverBg = 'rgba(96, 121, 142, 0.8)'
  const isAccessibility = type === 'accessibility'

  return (
    <Box
      as={as}
      className="nav-bar-button"
      id={isAccessibility ? 'UserWayButton' : ''}
      onClick={isAccessibility ? triggerWidget : onClick}
      sx={{
        display: 'flex',
        gap: '8px',
        h: '30px',
        maxH: '30px',

        _hover: {
          '.icon': {
            bg: hoverBg,
          },
          '.text': {
            color: vars('colors-neutral-white'),
          },
        },

        _active: {
          '.icon': {
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            bg: onlyLink || isAccessibility ? hoverBg : activeBg,
          },
          '.text': {
            color: vars('colors-neutral-white'),
          },
        },

        '.icon': {
          alignItems: 'center',
          bg: vars('colors-main-blueGrey'),
          borderRadius: '100%',
          border: '1px solid transparent',
          display: 'flex',
          height: '30px',
          justifyContent: 'center',
          type: 'button',
          role: 'button',
          width: '30px',
        },

        '.text': {
          alignContent: 'center',
          fontSize: '12px',
          fontWeight: '500',
          forntFamily: 'Roboto',
          color: vars('colors-neutral-silverSand'),
        },
      }}
    >
      <Box className="icon">{buttonType[type].icon}</Box>
      <Box as="span" className="text">
        {buttonType[type].text}
      </Box>
    </Box>
  )
}
