import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { styles } from './styles'
import { utils } from './utils'
import { typography } from './typography'

export const theme = extendTheme({
  colors,
  ...utils,
  ...typography,
  styles,
})

export const vars = (value: string): string => `var(--chakra-${value})`
