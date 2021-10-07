import * as React from 'react'
import { Center, LinkOverlay, Text } from '@chakra-ui/react'

import { CourseBoxContext } from '../CourseBox'
import { ArrowRight } from '../../../atoms/Icons'
import { vars } from '../../../'

export function Footer(): JSX.Element | null {
  const { action } = React.useContext(CourseBoxContext)
  if (action === undefined || (action?.enabled && action.href.length === 0)) {
    return null
  }
  return (
    <Center
      as="footer"
      mt="1rem"
      p="1rem"
      borderTop="1px solid"
      borderTopColor={vars('colors-neutral-platinum')}>
      {action.enabled ? (
        <>
          <LinkOverlay
            href={action.href}
            color={vars('colors-main-deepSkyBlue')}
            fontWeight="500"
            mr="1.5rem"
            lineHeight="1.172rem"
            isExternal={action.targetBlank}>
            {action.text}
          </LinkOverlay>
          {action.hasIcon && <ArrowRight color={vars('colors-main-deepSkyBlue')} />}
        </>
      ) : (
        <Text fontWeight="500" lineHeight="1.172rem" color={vars('colors-neutral-spanishGrey')}>
          {action.text}
        </Text>
      )}
    </Center>
  )
}

Footer.displayName = 'Footer'
