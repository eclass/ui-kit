import { Box, ModalCloseButton, ModalHeader, useMediaQuery } from '@chakra-ui/react'

import { vars } from '@/theme'
import { IModalContentBase } from '../types'
import { uiKitModalIsDesktop } from './Modal'

export const ModalContentBase = ({
  children,
  closeOnOverlayClick,
  fixedSubtitle,
  title,
  withoutMargin,
}: IModalContentBase): JSX.Element => {
  const [isDesktop] = useMediaQuery(`(min-width: ${uiKitModalIsDesktop}px)`)
  const py = '32px'
  const px = '24px'

  return (
    <>
      <ModalHeader
        bg={vars('colors-main-deepSkyBlue')}
        borderTopRadius={isDesktop ? '8px' : 0}
        color={vars('colors-neutral-white')}
        fontFamily="Roboto"
        fontSize={isDesktop ? '20px' : '18px'}
        fontWeight={700}
        lineHeight={1}
        mb={withoutMargin ? 0 : '32px'}
        paddingY={px}
        textAlign="center"
      >
        {title}
      </ModalHeader>
      {closeOnOverlayClick && (
        <ModalCloseButton
          background="transparent!important"
          border="none"
          color={vars('colors-neutral-white')}
          h="12px"
          p="22px"
          right={0}
          top={0}
          w="12px"
          _focus={{
            boxShadow: 'none',
          }}
          _focusVisible={{
            boxShadow: `inset 0 0 0 2px ${vars('colors-alert-deepSkyBlue')}, inset 0 0 0 4px ${vars(
              'colors-neutral-white'
            )}`,
          }}
        />
      )}
      {fixedSubtitle?.trim() && (
        <Box as="p" fontSize="14px" lineHeight="19px" mb={py} textAlign="center" px={px}>
          {fixedSubtitle}
        </Box>
      )}
      {children}
    </>
  )
}
