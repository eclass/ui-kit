import { BoxProps, useMediaQuery } from '@chakra-ui/react'
import { vars } from '@/theme'
import { ModalPadding, uiKitModalIsDesktop } from '../Modal/Modal'

interface ModalConfig {
  closeOnOverlayClick: boolean
  closeOnEsc: boolean
  scrollBehavior?: 'outside' | 'inside'
  contentProps: BoxProps
}

interface UseModalConfigParams {
  closeOnOverlayClick: boolean
  scrollBehavior: 'outside' | 'inside'
  fixedButtons: boolean
  withoutMargin: boolean
}

export const useModalConfig = ({
  closeOnOverlayClick,
  scrollBehavior,
  fixedButtons,
  withoutMargin,
}: UseModalConfigParams): ModalConfig => {
  const [isDesktop] = useMediaQuery(`(min-width: ${uiKitModalIsDesktop}px)`)
  // fixedButtons requiere scroll interno
  const isInsideScroll = scrollBehavior === 'inside'
  const shouldForceInsideScroll = fixedButtons
  const isInside = isInsideScroll || shouldForceInsideScroll
  return {
    closeOnOverlayClick,
    closeOnEsc: closeOnOverlayClick,
    scrollBehavior: isInside ? 'inside' : 'outside',
    contentProps: {
      maxH: isInside ? '100dvh' : 'auto',
      minH: isDesktop ? '300px' : '100dvh',
      padding: 0,
      width: '100%',
      animation: 'none',
      sx: {
        bgColor: vars('colors-neutral-white'),
        borderRadius: isDesktop ? '8px' : 0,
        mt: isDesktop ? '48px' : 0,
        mb: isDesktop ? '48px' : 0,
        marginX: isDesktop ? 'auto' : 0,
        maxH: isInside ? 'calc(100dvh - 96px)' : 'auto',
        maxWidth: isDesktop ? '690px' : '100%',

        ...(fixedButtons && {
          '.uikit-modalContent': {
            pb: 0,
          },
          '.uikit-modalButtons': {
            ...ModalPadding,
          },
        }),
        ...(withoutMargin && {
          '.uikit-modalContent': {
            pt: 0,
            px: 0,
          },
          '.uikit-modalButtons': {
            px: ModalPadding.px,
          },
        }),
      },
    },
  }
}
