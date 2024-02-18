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
      isCentered={false}
    >
      <ModalOverlay
        bg="rgba(0, 0, 0, 0.5)"
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
      />
      <ModalContent>
        <Box alignItems="center" justifyContent="center" textAlign="center" py="2rem">
          <Box display="flex" justifyContent="center">
            {alertStates[typeAlert].icon}
          </Box>
          <ModalHeader py="1rem">{title}</ModalHeader>
          <ModalBody py="0.5rem" px="2rem">
            {description}
          </ModalBody>
        </Box>
        <Divider colorScheme="#E6E6E6" size="2" opacity="1" margin="0" padding="0" />
        <ModalFooter justifyContent="center" padding="0">
          {optionsButton.map((option, index) => {
            return (
              <Box
                key={index}
                width="99%"
                textAlign="center"
                padding="1rem"
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
