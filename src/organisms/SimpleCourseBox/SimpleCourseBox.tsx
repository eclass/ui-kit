import {
  Box,
  Flex,
  FlexProps,
  Image,
  ImageProps,
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  LinkOverlayProps,
  Text,
  TextProps,
} from '@chakra-ui/react'
import { ArrowRight } from '@/atoms/Icons'

import { IconSelection } from '../CourseList/components/IconSelection'
import { vars } from '@theme'

interface SimpleCourseBoxProps {
  courseName: string
  href?: string
  img: string
  icon?: string
  label?: string
  noLink?: boolean
}

const StyledText = Text as React.FC<TextProps>
const StyledFlex = Flex as React.FC<FlexProps>
const StyledImage = Image as React.FC<ImageProps>
const StyledLinkBox = LinkBox as React.FC<LinkBoxProps>
const StyledLinkOverlay = LinkOverlay as React.FC<LinkOverlayProps>

export const SimpleCourseBox = ({
  courseName,
  href,
  img,
  icon,
  label,
  noLink = false,
}: SimpleCourseBoxProps): JSX.Element => {
  const link = noLink || !href || href === '' ? undefined : href

  return (
    <StyledLinkBox
      p="16px"
      borderBottom={`1px solid ${vars('colors-neutral-platinum')}`}
      _hover={{
        backgroundColor: link ? vars('colors-neutral-cultured2') : 'none',
        cursor: link ? 'pointer' : 'default',
      }}
    >
      <StyledLinkOverlay
        href={link}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
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
        {link && (
          <Box>
            <ArrowRight color="#60798E" />
          </Box>
        )}
      </StyledLinkOverlay>
    </StyledLinkBox>
  )
}
