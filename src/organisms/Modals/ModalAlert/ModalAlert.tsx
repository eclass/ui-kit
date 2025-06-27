import {
  Box,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useMediaQuery,
} from '@chakra-ui/react'

import { IModalAlert } from '../types'
import { BtnLink } from '@/molecules'
import { Loading } from './Loading'
import { alertColorStates } from '@/organisms/Alerts/utils/alertStates'
import { vars } from '@/theme'

export const ModalAlertNew = ({
  type,
  isOpen,
  onClose,
  title,
  description,
  buttons,
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
              <Box as="p" fontWeight="700" fontSize={isDesktop ? '20px' : '18px'} lineHeight="24px">
                {title}
              </Box>
            )}
            {description && (
              <Box as="p" fontSize="16px" lineHeight="24px">
                {description}
              </Box>
            )}
          </ModalBody>
          {type === 'info' && buttons?.length && (
            <Box
              display="flex"
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
              {buttons.map((button, index) => (
                <BtnLink as="button" key={index} onClick={() => button.action()}>
                  {button.text}
                </BtnLink>
              ))}
            </Box>
          )}
        </ModalContent>
      </ChakraModal>
    </>
  )
}
