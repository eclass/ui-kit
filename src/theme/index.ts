import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/300.css'
import '@fontsource/lora/400.css'

import { colors } from './colors'
import { styles } from './styles'

export const theme = extendTheme({
  colors,
  fonts: {
    body: 'roboto',
  },
  styles: styles,
})
