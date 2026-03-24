import { Box, ModalBody, useMediaQuery } from '@chakra-ui/react'
import DOMPurifyLib from 'dompurify'
import ReactParser from 'html-react-parser'

import { IModalAlertContent } from '../types'

import { Loading } from './Loading'
import { alertColorStates } from '@/organisms/Alerts/utils/alertStates'
import { stylesBtnLink } from '@/molecules/Buttons/BtnLink'

const sanitizeModalDescription = (description: string): string => {
  const sanitizedDescription = DOMPurifyLib.sanitize(description, {
    ADD_ATTR: ['target', 'rel'],
  })

  const parsedDocument = new window.DOMParser().parseFromString(sanitizedDescription, 'text/html')

  parsedDocument.querySelectorAll('a[target="_blank"]').forEach((anchor) => {
    const currentRel = anchor.getAttribute('rel') ?? ''
    const relTokens = currentRel.split(/\s+/).filter(Boolean)

    if (!relTokens.includes('noopener')) {
      relTokens.push('noopener')
    }

    if (!relTokens.includes('noreferrer')) {
      relTokens.push('noreferrer')
    }

    anchor.setAttribute('rel', relTokens.join(' '))
  })

  return parsedDocument.body.innerHTML
}

export const ModalAlertContent = ({
  type,
  title,
  description,
  status,
  children,
}: IModalAlertContent): JSX.Element => {
  const [isDesktop] = useMediaQuery('(min-width: 641px)')

  const descriptionParsed =
    typeof description === 'string' ? ReactParser(sanitizeModalDescription(description)) : description

  return (
    <>
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
          <Box
            as="p"
            fontSize="16px"
            lineHeight="24px"
            mb={0}
            sx={{
              a: {
                ...stylesBtnLink,
              },
            }}
          >
            {descriptionParsed}
          </Box>
        )}
      </ModalBody>
      {type !== 'loading' && children ? children : <></>}
    </>
  )
}
