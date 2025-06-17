import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { styles } from './styles'
import { utils } from './utils'
import { typography } from './typography'
import { dialog, overlay } from '@/organisms/Modals/resetStyleModal'

export const theme = extendTheme({
  colors,
  ...utils,
  ...typography,
  components: {
    Modal: {
      baseStyle: {
        overlay,
        dialog,
      },
    },
  },
  styles: styles,
})

export const vars = (value: string): string => `var(--chakra-${value})`
