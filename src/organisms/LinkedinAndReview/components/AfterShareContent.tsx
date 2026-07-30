import { Text, TextProps, Flex, FlexProps, Image, ImageProps } from '@chakra-ui/react'

import { BtnLink, BtnPrimary } from '@molecules'
import { vars } from '@theme'

import { Star } from '@/atoms/Icons'

const StyledImage = Image as React.FC<ImageProps>
const StyledFlex = Flex as React.FC<FlexProps>
const StyledText = Text as React.FC<TextProps>

export interface AfterShareContentProps {
  onClose: () => void
  onLeaveReview?: () => void
}

export const AfterShareContent = ({
  onClose,
  onLeaveReview,
}: AfterShareContentProps): JSX.Element => {
  return (
    <StyledFlex
      flexDir="column"
      alignItems="center"
      gap="16px"
      sx={{
        button: {
          svg: {
            m: '0',
          },
        },
        '.linkButton': {
          p: '0',
        },
      }}
    >
      <StyledImage
        w="70px"
        h="70px"
        alt="cotillón de celebración"
        src="https://cdn.eclass.com/vendors/apps/front_v8/assets/Common/celebration.webp"
      />
      <StyledText
        as="h6"
        fontSize="xl"
        fontWeight="bold"
        color={vars('colors-neutral-darkCharcoal')}
        m="0"
      >
        ¿Ya lo compartiste en LinkedIn?
      </StyledText>
      <StyledText
        fontSize="md"
        fontWeight="400"
        color={vars('colors-neutral-darkCharcoal')}
        p="0"
        m="0"
      >
        <strong>Ahora cuéntanos qué tal fue aprender con nosotros.</strong> Tu opinión ayuda a otros
        como tú a dar el primer paso.
      </StyledText>
      <BtnPrimary onClick={onLeaveReview} leftIcon={<Star color={vars('colors-neutral-white')} />}>
        Dejar mi opinión
      </BtnPrimary>
      <BtnLink as="button" onClick={onClose}>
        Quizás más tarde
      </BtnLink>
    </StyledFlex>
  )
}
