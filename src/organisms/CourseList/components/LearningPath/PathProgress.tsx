import { vars } from '@/theme'
import { Box, Progress, Text, TextProps } from '@chakra-ui/react'

const StyledText = Text as React.FC<TextProps>

interface PathProgressProps {
  progress: number
}

export const PathProgress = ({ progress }: PathProgressProps): JSX.Element => {
  return (
    <Box px="16px" pt="14px" pb="22px">
      <StyledText
        textAlign="right"
        fontSize="14px"
        fontWeight="700"
        mb="8px"
        color={vars('colors-neutral-darkCharcoal')}
      >
        {progress}% de avance
      </StyledText>
      <Progress
        value={progress}
        size="xs"
        bg="#CFD7DD"
        sx={{ '& > [role=progressbar]': { bg: vars('colors-main-blueGrey') } }}
        aria-label={`${progress}% de avance`}
      />
    </Box>
  )
}
