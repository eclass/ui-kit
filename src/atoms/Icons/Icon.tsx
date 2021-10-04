import React from 'react'
import { Icon as IconChakra } from '@chakra-ui/react'

export interface BaseProps {
  w?: string
  h?: string
  color?: string
}
interface IconProps extends BaseProps {
  viewBox?: string
  children: React.ReactChild | React.ReactChild[]
}

export function Icon({
  w = '1rem',
  h = '1rem',
  color = 'main.ziggurat',
  viewBox = '0 0 16 16',
  children,
}: IconProps): JSX.Element {
  return (
    <IconChakra w={w} h={h} viewBox={viewBox} color={color}>
      {children}
    </IconChakra>
  )
}
