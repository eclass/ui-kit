import { Box } from '@chakra-ui/react'

import { vars } from '@theme'

export interface LabelProps {
  children: React.ReactChild
  bg?: string
  color?: string
  size?: 'md' | 'sm'
  m?: string
}

/**
 * Componente Label
 * @example <Label>Etiqueta</Label>
 */
export function Label({
  children,
  bg = vars('colors-icon-ripeMango'),
  color = vars('colors-neutral-darkCharcoal'),
  size = 'md',
  m = '0',
}: LabelProps): JSX.Element {
  const config = {
    md: {
      borderRadius: '0.25em',
      fontWeight: '400',
      p: '0.25em 0.84em',
    },
    sm: {
      borderRadius: '0.42em',
      fontWeight: '700',
      p: '0.17em 0.67em',
    },
  }

  return (
    <Box
      bg={bg}
      borderRadius={config[size].borderRadius}
      color={color}
      display="inline-block"
      fontSize="0.75rem"
      fontWeight={config[size].fontWeight}
      lineHeight=".875rem"
      m={m}
      p={config[size].p}
    >
      {children}
    </Box>
  )
}

Label.displayName = 'Label'
