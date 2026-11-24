import { Icons } from '@/atoms'
import { Flex, FlexProps, Heading, HeadingProps, Text, TextProps } from '@chakra-ui/react'

const StyledFlex = Flex as React.FC<FlexProps>
const StyledHeading = Heading as React.FC<HeadingProps>
const StyledText = Text as React.FC<TextProps>

interface PathHeaderProps {
  headerImage: string
  title: string
  coursesCount: number
}

export const PathHeader = ({ headerImage, title, coursesCount }: PathHeaderProps): JSX.Element => {
  return (
    <StyledFlex
      position="relative"
      direction="column"
      justify="flex-end"
      h="100%"
      minH="170px"
      px="16px"
      py="16px"
      color="white"
      bgImage={`linear-gradient(to bottom, rgba(0,0,0,0) -10%, rgba(0,0,0,1) 100%), url(${headerImage})`}
      bgSize="cover"
      bgPosition="center"
    >
      <StyledFlex position="relative" align="center" gridGap="8px" mb="12px">
        <Icons.LearningPath />
        <StyledText fontSize="14px" lineHeight="20px">
          Ruta de aprendizaje | {coursesCount} cursos
        </StyledText>
      </StyledFlex>

      <StyledHeading
        as="h3"
        fontFamily="Roboto"
        position="relative"
        fontSize="16px"
        lineHeight="1.3rem"
        fontWeight="700"
      >
        {title}
      </StyledHeading>
    </StyledFlex>
  )
}
