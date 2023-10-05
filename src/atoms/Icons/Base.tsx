import { Icon as IconChakra } from '@chakra-ui/react'

import { vars } from '@theme'
import { type ReactElement } from 'react'

export interface BaseProps {
  w?: string
  h?: string
  color?: string
  m?: string
  viewBox?: string
}
interface IconProps extends BaseProps {
  viewBox?: string
  children: ReactElement | ReactElement[]
  title?: string
}

export function Base({
  w = '1rem',
  h = '1rem',
  color = vars('colors-main-ziggurat'),
  m = '0',
  viewBox = '0 0 16 16',
  children,
  title,
}: IconProps): JSX.Element {
  return (
    <IconChakra w={w} h={h} viewBox={viewBox} color={color} m={m}>
      <title>icon{title && `-${title}`}</title>
      {children}
    </IconChakra>
  )
}
