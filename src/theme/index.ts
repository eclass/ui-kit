import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/300.css'
import '@fontsource/lora/400.css'

import { colors } from './colors'
import { styles } from './styles'
import { utils } from './utils'

export const theme = extendTheme({
  colors,
  ...utils,
  fonts: {
    body: 'roboto',
  },
  styles: styles,
})

export const vars = (value: string): string => `var(--chakra-${value})`
