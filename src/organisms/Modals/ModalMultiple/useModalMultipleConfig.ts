import { BoxProps } from '@chakra-ui/react'

import { ModalMultipleProps } from './ModalMultiple'
import { useModalConfig } from '../Modal/useModalConfig'
import { useModalAlertConfig } from '../ModalAlert/useModalAlertConfig'

interface ModalConfig {
  closeOnOverlayClick: boolean
  closeOnEsc: boolean
  scrollBehavior?: 'outside' | 'inside'
  contentProps: BoxProps
}

interface UseModalMultipleConfigParams {
  type: ModalMultipleProps['type']
  closeOnOverlayClick: boolean
  scrollBehavior: 'outside' | 'inside'
  fixedButtons: boolean
  withoutMargin: boolean
}

export const useModalMultipleConfig = ({
  type,
  closeOnOverlayClick,
  scrollBehavior,
  fixedButtons,
  withoutMargin,
}: UseModalMultipleConfigParams): ModalConfig => {
  const modalConfig = useModalConfig({
    closeOnOverlayClick,
    scrollBehavior,
    fixedButtons,
    withoutMargin,
  })

  const modalAlertConfig = useModalAlertConfig()

  switch (type) {
    case 'modal':
      return modalConfig
    case 'modalAlert':
    case 'modalLoading':
      return modalAlertConfig
  }
}
