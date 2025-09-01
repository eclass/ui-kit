import {
  Box,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useMediaQuery,
} from '@chakra-ui/react'

import { IModalAlert } from '../types'

import { Loading } from './Loading'
import { alertColorStates } from '@/organisms/Alerts/utils/alertStates'
import { vars } from '@/theme'

export const ModalAlertNew = ({
  type,
  isOpen,
  onClose,
  children,
  title,
  description,
  status,
}: IModalAlert): JSX.Element => {
  const [isDesktop] = useMediaQuery('(min-width: 641px)')

  return (
    <>
      <ChakraModal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        motionPreset="scale"
        onClose={onClose}
        closeOnEsc={type !== 'loading'}
        autoFocus={false}
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="8px"
          p={0}
          m="10vh auto 0"
          sx={{
            maxWidth: isDesktop ? '589px' : '343px',
          }}
        >
          <ModalBody
            p="32px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap="16px"
            fontFamily="Roboto"
          >
            {type === 'loading' ? (
              <Loading />
            ) : (
              <Box display="flex" justifyContent="center">
                {alertColorStates[status ?? 'info'].icon}
              </Box>
            )}
            {title && (
              <Box
                as="p"
                fontWeight="700"
                fontSize={isDesktop ? '20px' : '18px'}
                lineHeight="24px"
                mb={0}
              >
                {title}
              </Box>
            )}
            {description && (
              <Box as="p" fontSize="16px" lineHeight="24px" mb={0}>
                {description}
              </Box>
            )}
          </ModalBody>
          {type !== 'loading' && children ? children : <></>}
        </ModalContent>
      </ChakraModal>
    </>
  )
}

/**
 * Componente que renderiza los botones de un modal alert.
 * @example
 * <ModalAlertButtons>
 *  <BtnLink as="button" onClick={() => onClose()}>Cancelar</BtnLink>
 *  <BtnLink as="button" onClick={() => onClose()}>Aceptar</BtnLink>
 * </ModalAlertButtons>
 */
export const ModalAlertButtons = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Box
      autoFocus={false}
      display="flex"
      w="100%"
      borderTop={`1px solid ${vars('colors-neutral-platinum')}`}
      sx={{
        button: {
          borderRight: `1px solid ${vars('colors-neutral-platinum')}`,
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '21px',
          p: '16px',
          textDecor: 'none',
          width: '100%',
          '&:last-child': {
            borderRight: 'none',
          },
        },
      }}
    >
      {children}
    </Box>
  )
}
