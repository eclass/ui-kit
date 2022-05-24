import * as React from 'react'
import { Button, Center, LinkOverlay, Text } from '@chakra-ui/react'

import { CourseBoxContext } from '../CourseBox'
import { ArrowRight } from '@icons'
import { vars } from '@theme'
import { isCourseActive } from '../utils'

interface FooterProps {
  onClick?: () => void
}
export function Footer({ onClick }: FooterProps): JSX.Element | null {
  const { action, Profile } = React.useContext(CourseBoxContext)

  const cssButton = {
    backgroundColor: 'transparent',
  }

  if (action == null || (action?.enabled && action.href?.length === 0)) {
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
          {onClick ? (
            <Button
              color={vars('colors-main-deepSkyBlue')}
              backgroundColor="transparent"
              fontWeight="500"
              height="auto"
              mr={action.hasIcon ? '1.5rem' : '0'}
              lineHeight="1.172rem"
              p="0"
              onClick={onClick}
              _hover={cssButton}
              _focus={cssButton}
              _active={cssButton}
            >
              {action.text}
            </Button>
          ) : (
            <LinkOverlay
              href={action.href}
              color={vars('colors-main-deepSkyBlue')}
              fontWeight="500"
              mr={action.hasIcon ? '1.5rem' : '0'}
              lineHeight="1.172rem"
              isExternal={action.targetBlank}
            >
              {action.text}
            </LinkOverlay>
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
    </Center>
  )
}

Footer.displayName = 'Footer'
