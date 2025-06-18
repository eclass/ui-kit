import {
  Box,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
} from '@chakra-ui/react'

import { vars } from '@/theme'
import { ModalButtons } from './ModalButtons'
import { IModal } from '../types'

export const Modal = ({
  buttons,
  buttonsCenter,
  buttonsColumn = true,
  buttonsInside,
  children,
  closeOnOverlayClick = true,
  fixedSubtitle,
  isOpen,
  onClose,
  title,
  withoutMargin = false,
}: IModal): JSX.Element => {
  const py = '32px'
  const px = '24px'

  const [isDesktop] = useMediaQuery('(min-width: 641px)')

  return (
    <>
      <ChakraModal
        closeOnOverlayClick={closeOnOverlayClick}
        isOpen={isOpen}
        motionPreset="scale"
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent
          maxH="100dvh"
          minH="300px"
          padding={0}
          width="100%"
          sx={{
            borderRadius: isDesktop ? '8px' : 0,
            height: isDesktop ? 'auto' : '100dvh',
            margin: isDesktop ? '10vh auto 0' : 0, // se debe que top tendrá el modal
            maxH: isDesktop ? '80dvh' : '100dvh',
            maxWidth: isDesktop ? '600px' : '100%',
          }}
        >
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
              color={vars('colors-neutral-white')}
              h="12px"
              p="22px"
              right={0}
              top={0}
              w="12px"
              _focus={{
                boxShadow: 'none',
              }}
            />
          )}
          {fixedSubtitle?.trim() && (
            <Box as="p" fontSize="14px" lineHeight="19px" mb={py} textAlign="center" px={px}>
              {fixedSubtitle}
            </Box>
          )}
          {children && (
            <ModalBody
              px={withoutMargin ? 0 : px}
              py={0}
              mb={buttons?.length === 0 ? py : buttonsInside ? py : 0}
            >
              {children}

              {buttonsInside && buttons && buttons.length > 0 && (
                <ModalButtons
                  buttons={buttons}
                  buttonsCenter={buttonsCenter}
                  buttonsColumn={buttonsColumn}
                  buttonsInside
                  isDesktop={isDesktop}
                  px={px}
                  py={py}
                />
              )}
            </ModalBody>
          )}

          {!buttonsInside && (
            <ModalButtons
              buttons={buttons}
              buttonsCenter={buttonsCenter}
              buttonsColumn={buttonsColumn}
              isDesktop={isDesktop}
              px={px}
              py={py}
            />
          )}
        </ModalContent>
      </ChakraModal>
    </>
  )
}
