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
  minWidth?: string | number
  maxWidth?: string | number
  minHeight?: string | number
  maxHeight?: string | number
  mobileCompact?: boolean
}

export const useModalConfig = ({
  closeOnOverlayClick,
  scrollBehavior,
  fixedButtons,
  withoutMargin,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  mobileCompact = false,
}: UseModalConfigParams): ModalConfig => {
  const [isDesktop] = useMediaQuery(`(min-width: ${uiKitModalIsDesktop}px)`)
  // fixedButtons requiere scroll interno
  const isInsideScroll = scrollBehavior === 'inside'
  const shouldForceInsideScroll = fixedButtons
  const desktopMinWidth = minWidth ?? '690px'
  const desktopMaxWidth = maxWidth ?? '690px'
  const desktopMinHeight = minHeight ?? '300px'
  const insideMaxHeight = maxHeight ?? 'calc(100% - 96px)'
  const outsideMaxHeight = maxHeight ?? 'auto'
  const compactMobileWidth = maxWidth ?? 'calc(100vw - 32px)'
  const compactMobileMaxWidth = maxWidth ?? '375px'
  const compactMobileMaxHeight = maxHeight ?? 'calc(100dvh - 32px)'
  const isInside = isInsideScroll || shouldForceInsideScroll
  return {
    closeOnOverlayClick,
    closeOnEsc: closeOnOverlayClick,
    scrollBehavior: isInside ? 'inside' : 'outside',
    contentProps: {
      maxH: isInside
        ? maxHeight ?? '100%'
        : mobileCompact && !isDesktop
        ? compactMobileMaxHeight
        : outsideMaxHeight,
      minH: isDesktop ? desktopMinHeight : mobileCompact ? 'auto' : '100%',
      padding: 0,
      width: isDesktop ? 'fit-content' : mobileCompact ? compactMobileWidth : '100%',
      animation: 'none',
      sx: {
        bgColor: vars('colors-neutral-white'),
        borderRadius: isDesktop ? '8px' : mobileCompact ? '10px' : 0,
        mt: isDesktop ? '48px' : mobileCompact ? 'auto' : 0,
        mb: isDesktop ? '48px' : mobileCompact ? 'auto' : 0,
        marginX: isDesktop ? 'auto' : mobileCompact ? 'auto' : 0,
        maxH: isInside
          ? insideMaxHeight
          : mobileCompact && !isDesktop
          ? compactMobileMaxHeight
          : outsideMaxHeight,
        minWidth: isDesktop ? desktopMinWidth : mobileCompact ? 'auto' : undefined,
        maxWidth: isDesktop ? desktopMaxWidth : mobileCompact ? compactMobileMaxWidth : '100%',
        overflow: mobileCompact && !isDesktop ? 'hidden' : undefined,

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
