import { Box, Flex, FlexProps, Image, ImageProps, Text, TextProps } from '@chakra-ui/react'
import { ArrowRight } from '@/atoms/Icons'

import { IconSelection } from '../CourseList/components/IconSelection'
import { vars } from '@theme'

interface SimpleCourseBoxProps {
  courseName: string
  img: string
  icon?: string
  label?: string
}

const StyledText = Text as React.FC<TextProps>
const StyledFlex = Flex as React.FC<FlexProps>
const StyledImage = Image as React.FC<ImageProps>

export const SimpleCourseBox = ({
  img,
  courseName,
  icon,
  label,
}: SimpleCourseBoxProps): JSX.Element => {
  return (
    <StyledFlex
      alignItems="center"
      justifyContent="space-between"
      p="16px 0"
      borderBottom={`1px solid ${vars('colors-neutral-platinum')}`}
    >
      <StyledFlex gap="24px" alignItems="center">
        <StyledImage src={img} w="150px" h="74px" borderRadius="10px" />
        <StyledFlex flexDirection="column" gap="8px" justifyContent="center">
          <strong>{courseName}</strong>

          {icon && label && (
            <StyledText
              m="0"
              fontSize="14px"
              lineHeight="19px"
              display="flex"
              gap="10px"
              maxW="395px"
              sx={{
                svg: {
                  verticalAlign: 'top',
                },
              }}
            >
              <IconSelection type={icon} /> {label}
            </StyledText>
          )}
        </StyledFlex>
      </StyledFlex>
      <Box>
        <ArrowRight color="#60798E" />
      </Box>
    </StyledFlex>
  )
}
