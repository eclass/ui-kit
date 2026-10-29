import { Icon as IconChakra } from '@chakra-ui/react'

import { vars } from '@theme'

import { icons, IconDefinition, IconName } from './registry'

export interface IconProps {
  /** Nombre del ícono (ver la página Icons de la documentación). */
  name: IconName
  /** Ancho. Por defecto, el del ícono o '1rem'. */
  w?: string
  /** Alto. Por defecto, el del ícono o '1rem'. */
  h?: string
  /** viewBox del svg. Por defecto, el del ícono o '0 0 16 16'. */
  viewBox?: string
  /** Color de relleno principal. Por defecto, el del ícono o ziggurat. */
  fill?: string
  m?: string
}

/**
 * Muestra un ícono del ui-kit según su nombre. viewBox, fill y tamaño tienen un valor por
 * defecto en cada ícono que se puede sobrescribir por props. Los íconos multicolor (alertas)
 * mantienen sus colores propios.
 *
 * @example
 * <Icon name="calendar" />
 * <Icon name="calendar" fill={vars('colors-main-deepSkyBlue')} w="24px" h="24px" />
 */
export function Icon({ name, w, h, viewBox, fill, m = '0' }: IconProps): JSX.Element | null {
  const icon: IconDefinition | undefined = icons[name]
  if (!icon) return null
  const { Svg } = icon

  return (
    <IconChakra
      w={w ?? icon.w ?? '1rem'}
      h={h ?? icon.h ?? '1rem'}
      viewBox={viewBox ?? icon.viewBox ?? '0 0 16 16'}
      color={fill ?? icon.fill ?? vars('colors-main-ziggurat')}
      m={m}
      aria-hidden
      data-testid={`icon-${name}`}
    >
      <Svg />
    </IconChakra>
  )
}
