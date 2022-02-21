import { colors } from './colors'

/**
 * Valores definidos en el sistema de diseños eclass.
 * @see https://zeroheight.com/15698077d/p/48fae4-eclass-sistema-de-diseo
 */
const base = 'solid .063rem'
export const borders = {
  normal: `${base} ${colors.neutral.darkCharcoal}`,
  light: `${base} ${colors.neutral.platinum}`,
  active: `${base} ${colors.main.deepSkyBlue}`,
  success: `${base} ${colors.alert.jadeGreen}`,
  error: `${base} ${colors.alert.red}`,
  white: `solid .125rem ${colors.neutral.white}`,
}

/**
 * Valores definidos en el sistema de diseños eclass.
 * @see https://zeroheight.com/15698077d/p/48fae4-eclass-sistema-de-diseo
 */
export const radii = {
  small: '.25rem',
  big: '.5rem',
  rounded: '50%',
}

/**
 * Valores definidos en el sistema de diseños eclass.
 * @see https://zeroheight.com/15698077d/p/787e81-shadows--elevation
 */
export const shadows = {
  sm: '0 .125rem .5rem 0 rgba(0,0,0,.20)',
  md: '0 .25rem 1rem 0 rgba(0,0,0,.20)',
  lg: '0 .5rem 2rem 0 rgba(0,0,0,.20)',
}

export const utils = {
  borders,
  radii,
  shadows,
}
