import { SimpleGrid, Box, BoxProps } from '@chakra-ui/react'

import { colors } from '../../theme/colors'
import { Color } from './Color'

type ColorsType = keyof typeof colors

export interface ColorsProps extends BoxProps {
  type: ColorsType
}

export function Colors({ type, ...styles }: ColorsProps): JSX.Element {
  return (
    <Box {...styles}>
      <SimpleGrid columns={6} spacing={5} minChildWidth="8rem">
        {Object.keys(colors[type]).map((color: string, index) => (
          <Color
            key={index}
            type={type}
            color={color}
            // @ts-expect-error
            hexa={colors[type][color]}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

Colors.displayName = 'Colors'
