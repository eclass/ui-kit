import * as React from 'react'
import { Box, Center, Text, useDisclosure } from '@chakra-ui/react'

import { CourseBoxContext } from '../CourseBox'
import { ArrowRight } from '@icons'
import { vars } from '@theme'
import { isCourseActive } from '../utils'
import { PaymentModal } from './Modal'
import * as Type from '../types'

export function Footer({ modalPaymentText }: Type.FooterProps): JSX.Element | null {
  const { action, Profile, hasFinanzeFreezed } = React.useContext(CourseBoxContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(false)

  const cssButton = {
    backgroundColor: 'transparent',
  }

  const handleClick = (): any => {
    setOverlay(true)
    onOpen()
  }

  if (action == null) {
    return null
  }

  return (
    <Center
      as="footer"
      mt="1rem"
      p="1rem"
      borderTop="1px solid"
      borderTopColor={vars('colors-neutral-platinum')}
    >
      {isCourseActive(action.enabled, Profile?.id) ? (
        <>
          {hasFinanzeFreezed ? (
            <Box
              color={vars('colors-main-deepSkyBlue')}
              backgroundColor="transparent"
              fontWeight="500"
              height="auto"
              mr={action.hasIcon ? '1.5rem' : '0'}
              lineHeight="1.172rem"
              p="0"
              zIndex="inherit !important"
              _hover={cssButton}
              _focus={cssButton}
              _active={cssButton}
              onClick={() => handleClick()}
            >
              {action.text}
            </Box>
          ) : (
            <Text
              color={vars('colors-main-deepSkyBlue')}
              fontWeight="500"
              mr={action.hasIcon ? '1.5rem' : '0'}
              lineHeight="1.172rem"
            >
              {action.text}
            </Text>
          )}
          {action.hasIcon && <ArrowRight color={vars('colors-main-deepSkyBlue')} />}
        </>
      ) : (
        <Text
          fontWeight="500"
          lineHeight="1.172rem"
          color={vars('colors-neutral-spanishGrey')}
          m="0"
        >
          {action.text}
        </Text>
      )}
      <PaymentModal
        isOpen={isOpen}
        onClose={onClose}
        showOverlay={overlay}
        onOpen={onOpen}
        modalPaymentText={modalPaymentText}
      />
    </Center>
  )
}

Footer.displayName = 'Footer'
