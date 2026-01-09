import { Box, ModalBody, ModalContent, useMediaQuery } from '@chakra-ui/react'

import { IModalAlertContent } from '../types'

import { Loading } from './Loading'
import { alertColorStates } from '@/organisms/Alerts/utils/alertStates'

export const ModalAlertContent = ({
  type,
  title,
  description,
  status,
  children,
}: IModalAlertContent): JSX.Element => {
  const [isDesktop] = useMediaQuery('(min-width: 641px)')

  return (
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
  )
}
