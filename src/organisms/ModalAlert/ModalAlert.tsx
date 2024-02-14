// import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  useMediaQuery,
  Divider,
} from '@chakra-ui/react'
import { alertStates } from '../Alerts/utils/alertStates'
import { ModalAlertProps } from './types'
import { BtnLink } from '@/molecules'

export function ModalAlert({
  showModal,
  typeAlert,
  title,
  description,
  optionsButton,
}: ModalAlertProps): JSX.Element {
  // const [isOpen, setIsOpen] = useState(showModal)
  const [isDesktop] = useMediaQuery('(min-width: 650px)')

  const showBorder = optionsButton.length > 1
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {}}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      size={isDesktop ? 'xl' : 'sm'}
    >
      <ModalOverlay />
      <ModalContent>
        <Box alignItems="center" justifyContent="center" textAlign="center" py={8}>
          <Box display="flex" justifyContent="center">
            {alertStates[typeAlert].icon}
          </Box>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>{description}</ModalBody>
        </Box>
        <Divider colorScheme="E6E6E6" size="2" opacity="1" />
        <ModalFooter justifyContent="center" padding="0">
          {optionsButton.map((option, index) => {
            return (
              <Box
                key={index}
                width="99%"
                textAlign="center"
                padding="4"
                borderLeftWidth={showBorder && option.id === optionsButton[1].id ? '1px' : '0'}
                borderLeftColor="#E6E6E6"
              >
                <BtnLink textDecorationLine={false} fontSize="1rem" onClick={() => option.action()}>
                  {option.label}
                </BtnLink>
              </Box>
            )
          })}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

ModalAlert.displayName = 'ModalAlert'
