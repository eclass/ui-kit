import { Icon } from '@/atoms/Icon'
import { BtnLink } from '@/molecules'
import { vars } from '@/theme'
import { Box, Flex, FlexProps, Image, ImageProps, Text, TextProps } from '@chakra-ui/react'

const StyledFlex = Flex as React.FC<FlexProps>
const StyledImage = Image as React.FC<ImageProps>
const StyledText = Text as React.FC<TextProps>

interface PathCourseLinkProps {
  title: string
  finished?: boolean
  progress: number
  start: {
    level: string
    courseTitle: string
    courseHref: string
    thumbnail: string
    thumbnailAlt?: string
  }
}

export const PathCourseLink = ({
  title,
  finished,
  progress,
  start,
}: PathCourseLinkProps): JSX.Element => {
  const completedCourse = progress === 100
  const finishedCourse = progress < 100 && finished

  return (
    <StyledFlex flexDir="column" gap="4px" bg={vars('colors-neutral-cultured2')} p="16px">
      {completedCourse ? (
        <StyledFlex gap="8px">
          <Icon name="circleCheck" />
          <StyledText fontSize="14px" lineHeight="19px">
            ¡Has completado tu Ruta de aprendizaje!
          </StyledText>
        </StyledFlex>
      ) : finishedCourse ? (
        <StyledFlex gap="8px">
          <Icon name="info" />
          <StyledText fontSize="14px" lineHeight="19px">
            Tu Ruta de aprendizaje ha finalizado
          </StyledText>
        </StyledFlex>
      ) : (
        <>
          <StyledText fontSize="12px" color={vars('colors-neutral-gray')} lineHeight="100%">
            {title}
          </StyledText>
          <StyledFlex
            align="flex-start"
            gridGap="8px"
            sx={{
              a: {
                display: 'block',
              },
            }}
          >
            <StyledImage
              src={start.thumbnail}
              alt={start.thumbnailAlt ?? ''}
              w="40px"
              h="100%"
              flexShrink={0}
              borderRadius="4px"
              objectFit="cover"
              mt="2px"
            />
            <Box>
              <StyledText
                fontSize="14px"
                fontWeight="700"
                lineHeight="19px"
                color={vars('colors-neutral-darkCharcoal')}
              >
                {start.level}
              </StyledText>
              <Box position="relative" zIndex={2} w="fit-content">
                <BtnLink p="0" href={start.courseHref} target="_self">
                  {start.courseTitle}
                </BtnLink>
              </Box>
            </Box>
          </StyledFlex>
        </>
      )}
    </StyledFlex>
  )
}
