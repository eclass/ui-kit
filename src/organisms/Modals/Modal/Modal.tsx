import {
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
  children,
  closeOnOverlayClick = true,
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
            paddingY={px}
            textAlign="center"
          >
            {title}
          </ModalHeader>
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
          {children && (
            <ModalBody px={withoutMargin ? 0 : px} pt={py} pb={0}>
              {children}
            </ModalBody>
          )}

          <ModalButtons
            px={px}
            py={py}
            buttons={buttons}
            buttonsCenter={buttonsCenter}
            buttonsColumn={buttonsColumn}
            isDesktop={isDesktop}
          />
        </ModalContent>
      </ChakraModal>
    </>
  )
}
