import * as React from 'react'
import { LinkBox, Box, Flex } from '@chakra-ui/react'

import { Header, Section, Footer } from './components'
import { box } from './dataFake'
import { Ripples, vars } from '../../'

export const CourseBoxContext = React.createContext<Partial<box>>({})

interface WithRipplesProps {
  enabled: boolean
  children: React.ReactChild
}
function WithRipples({ enabled, children }: WithRipplesProps): JSX.Element {
  return enabled ? <Ripples>{children}</Ripples> : <>{children}</>
}

interface CourseBoxProps {
  data: any
}

export function CourseBox({ data }: CourseBoxProps): JSX.Element {
  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars('colors-neutral-silverSand')}`,
  }

  return (
    <CourseBoxContext.Provider value={data}>
      <LinkBox
        as="article"
        border={`1px solid ${vars('colors-neutral-platinum')}`}
        borderRadius={10}
        cursor="pointer"
        transition="box-shadow .3s"
        _active={cssActive}
        _hover={cssActive}
        _focus={cssActive}
        overflow="hidden">
        <WithRipples enabled={data.action.enabled}>
          <Flex direction="column" justify="space-between" h="100%">
            <Box>
              <Header />
              <Section />
            </Box>
            <Footer />
          </Flex>
        </WithRipples>
      </LinkBox>
    </CourseBoxContext.Provider>
  )
}

CourseBox.displayName = 'CourseBox'
