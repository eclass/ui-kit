import { BoxColor } from 'documentation/components/Color/BoxColor'
import { colors } from 'theme/colors'
import { Box } from '@chakra-ui/react'

export const ColorsType = ({
  type,
}: {
  type: 'main' | 'secondary' | 'alert' | 'icon' | 'neutral'
}): JSX.Element => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fill,minmax(150px, 1fr))" gap="1rem">
      {Object.entries(colors[type]).map((pe, key) => {
        return <BoxColor key={key} bg={pe[1]} name={pe[0]} type={type} />
      })}
    </Box>
  )
}
