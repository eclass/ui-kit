import { BoxProps, useMediaQuery } from '@chakra-ui/react'

import { uiKitModalIsDesktop } from '../Modal/Modal'

interface ModalConfig {
  closeOnOverlayClick: boolean
  closeOnEsc: boolean
  scrollBehavior?: 'outside' | 'inside'
  contentProps: BoxProps
}

export const useModalAlertConfig = (): ModalConfig => {
  const [isDesktop] = useMediaQuery(`(min-width: ${uiKitModalIsDesktop}px)`)

  return {
    closeOnOverlayClick: false,
    closeOnEsc: false,
    scrollBehavior: 'outside',
    contentProps: {
      borderRadius: '8px',
      p: 0,
      m: '10vh auto 0',
      sx: {
        maxWidth: isDesktop ? '589px' : '343px',
      },
    },
  }
}
