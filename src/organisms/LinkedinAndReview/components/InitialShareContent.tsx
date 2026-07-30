import {
  Text,
  TextProps,
  Divider,
  DividerProps,
  Link,
  LinkProps,
  Flex,
  FlexProps,
  Image,
  ImageProps,
} from '@chakra-ui/react'

import { Star } from '@/atoms/Icons'
import { BtnPrimary } from '@/molecules'
import { vars } from '@theme'

const StyledImage = Image as React.FC<ImageProps>
const StyledFlex = Flex as React.FC<FlexProps>
const StyledText = Text as React.FC<TextProps>
const StyledDivider = Divider as React.FC<DividerProps>
const StyledLink = Link as React.FC<LinkProps>

interface InitialShareContentProps {
  handleLinkedinClick: () => void
  onLeaveReview?: () => void
}

export const InitialShareContent = ({
  handleLinkedinClick,
  onLeaveReview,
}: InitialShareContentProps) => {
  return (
    <>
      <StyledFlex direction="column" gap="16px" alignItems="center">
        <StyledImage
          w="70px"
          h="70px"
          alt="cotillón de celebración"
          src="https://cdn.eclass.com/vendors/apps/front_v8/assets/Common/celebration.webp"
        />
        <StyledFlex flexDir="column" gap="8px">
          <StyledText
            as="h6"
            fontSize="xl"
            fontWeight="bold"
            color={vars('colors-neutral-darkCharcoal')}
            m="0"
          >
            ¡Qué bueno que quieras compartirlo!
          </StyledText>
          <StyledText fontSize="md" color={vars('colors-neutral-darkCharcoal')} mb="0">
            Aprobaste tu curso. Vamos a mostrarlo en tu LinkedIn.
          </StyledText>
        </StyledFlex>
      </StyledFlex>
      <BtnPrimary onClick={handleLinkedinClick}>Continuar a LinkedIn</BtnPrimary>

      <StyledFlex align="center" width="100%" gap="16px">
        <StyledDivider borderColor={vars('colors-neutral-platinum')} m="0" />
        <StyledText fontSize="sm" color={vars('colors-neutral-gray')} whiteSpace="nowrap" m="0">
          Ya que estás aquí
        </StyledText>
        <StyledDivider borderColor={vars('colors-neutral-platinum')} m="0" />
      </StyledFlex>
      <StyledText
        as="p"
        fontSize="md"
        fontWeight="700"
        color={vars('colors-neutral-darkCharcoal')}
        mb="0"
      >
        ¿Qué tal fue aprender con nosotros?
      </StyledText>

      <StyledFlex
        align="center"
        justify="center"
        gap="8px"
        sx={{
          svg: {
            m: '0',
          },
        }}
      >
        <Star color={vars('colors-icon-ripeMango')} />
        <StyledLink
          fontSize="sm"
          fontWeight="500"
          color={vars('colors-neutral-gray')}
          textDecoration="underline"
          onClick={onLeaveReview}
        >
          Dejar mi opinión
        </StyledLink>
      </StyledFlex>
    </>
  )
}
