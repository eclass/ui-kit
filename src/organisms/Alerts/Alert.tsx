import { Box, useMediaQuery } from '@chakra-ui/react'

import { BtnLink, BtnPrimary } from '@/molecules'
import { vars } from '@/theme'
import { IAlertProps } from './types.d'
import { alertStates } from './utils/alertStates'
import { Close } from '@/atoms/Icons'

/**
 * Componente de alerta embebida que puede tener 4 estados diferentes.
 * Opcionalmente puede llevar un botón. El botón puede mostrar sólo un texto
 * o un texto junto a un ícono.
 * @example Implementación de alerta con botón y margen
 * <Alert
 * state='info'
 * buttonName='Texto botón'
 * buttonIcon={<Multimedia />}
 * onClick={() => alert('hola')}
 * m='0 20px'>
 * Mensaje
 * </Alert>
 */

export function Alert({
  children,
  canDismiss = false,
  buttonText,
  buttonIcon,
  buttonLink = false,
  fullWidth = false,
  isFlash = false,
  onClick,
  state,
  m,
  endTextLink,
  onClickLink,
}: IAlertProps): JSX.Element {
  const [isMobile] = useMediaQuery('(max-width: 425px)')

  const handleClick = (): any => {
    if (onClick) {
      onClick()
    }
  }

  let buttonType: undefined | 'link' | 'normal'
  if (buttonText) {
    buttonType = buttonLink ? 'link' : 'normal'
  }

  return (
    <Box
      className={isFlash ? 'flashNotification' : 'e_alert'}
      alignItems={!isMobile ? 'center' : 'unset'}
      backgroundColor={alertStates[state].bg}
      borderRadius="8px"
      display="flex"
      flexFlow={isMobile ? 'column' : 'row'}
      gap={!isFlash ? '16px' : ''}
      justifyContent={!isMobile ? 'space-between' : ''}
      margin={m}
      width={fullWidth ? '100%' : 'fit-content'}
      maxWidth={fullWidth ? 'none' : '796px'}
      p="1rem"
      pr={canDismiss ? '1.75rem' : '1rem'}
      position="relative"
    >
      <Box
        display="flex"
        gap="10px"
        className="alertContent"
        sx={{
          '.linkButton': {
            fontSize: '16px',
          },
        }}
      >
        <Box
          className="iconContainer"
          sx={{
            svg: {
              width: 'auto',
            },
          }}
        >
          {alertStates[state].icon}
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            as="p"
            alignSelf="center"
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="400"
            lineHeight="28px"
            color={vars('colors-neutral-darkCharcoal')}
          >
            <p>
              {children}
              {endTextLink && onClickLink && <BtnLink onClick={onClickLink}>{endTextLink}</BtnLink>}
            </p>
          </Box>
          {buttonType === 'link' && <BtnLink onClick={handleClick}>{buttonText}</BtnLink>}
        </Box>
      </Box>

      {buttonType === 'normal' && (
        <BtnPrimary isFullWidth={!!isMobile} leftIcon={buttonIcon} onClick={handleClick}>
          {buttonText}
        </BtnPrimary>
      )}
      {canDismiss && (
        <Box
          data-testid="closeButton"
          cursor="pointer"
          marginLeft="12px"
          sx={{
            svg: {
              position: 'absolute',
              top: '16px',
              right: '12px',
            },
          }}
          onClick={onClick}
        >
          <Close />
        </Box>
      )}
    </Box>
  )
}
