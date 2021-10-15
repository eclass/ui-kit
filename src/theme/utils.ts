import { colors } from './colors'

/**
 * Valores definidos en el sistema de diseños eclass.
 * @see https://zeroheight.com/15698077d/p/48fae4-eclass-sistema-de-diseo
 */
const base = 'solid 1px'
export const borders = {
  normal: `${base} ${colors.neutral.silverSand}`,
  light: `${base} ${colors.neutral.platinum}`,
  active: `${base} ${colors.main.deepSkyBlue}`,
  success: `${base} ${colors.alert.jadeGreen}`,
  error: `${base} ${colors.alert.red}`,
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

export const utils = {
  borders,
  radii,
}
