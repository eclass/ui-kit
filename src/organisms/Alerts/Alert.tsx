import { Box, HStack } from '@chakra-ui/react'

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
  onClick,
  state,
  m,
}: IAlertProps): JSX.Element {
  return (
    <Box
      backgroundColor={alertStates[state].bg}
      borderRadius="8px"
      padding={canDismiss ? '16px 28px 16px 16px' : '16px'}
      width="max-content"
      maxWidth="796px"
      margin={m}
      position="relative"
    >
      <HStack
        sx={{
          '.linkButton': {
            fontSize: '16px',
          },
        }}
      >
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
          {buttonText && onClick && buttonLink && <BtnLink onClick={onClick}>{buttonText}</BtnLink>}
        </Box>
        {buttonText && onClick && !buttonLink && (
          <BtnPrimary leftIcon={buttonIcon} onClick={onClick}>
            {buttonText}
          </BtnPrimary>
        )}
        {canDismiss && (
          <Box
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
      </HStack>
    </Box>
  )
}
