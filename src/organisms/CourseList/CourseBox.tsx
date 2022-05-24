import * as React from 'react'
import { LinkBox, Box, Flex } from '@chakra-ui/react'

import { Header, Section, Footer } from './components'
import { Ripples } from '@atoms'
import { vars } from '@theme'
import { isCourseActive } from './utils'
import * as Type from './types'

export const CourseBoxContext = React.createContext<Partial<Type.AcademicList>>({})

interface WithRipplesProps {
  enabled: boolean
  children: React.ReactChild
}
function WithRipples({ enabled, children }: WithRipplesProps): JSX.Element {
  return enabled ? <Ripples>{children}</Ripples> : <>{children}</>
}

interface CourseBoxProps {
  data: Type.AcademicList
  onClick?: () => void
}

export function CourseBox({ data, onClick }: CourseBoxProps): JSX.Element {
  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars('colors-neutral-silverSand')}`,
  }

  return (
    <CourseBoxContext.Provider value={data}>
      <LinkBox
        as="article"
        border={vars('borders-light')}
        borderRadius={vars('radii-big')}
        cursor="pointer"
        transition="box-shadow .3s"
        _active={cssActive}
        _hover={cssActive}
        _focus={cssActive}
        overflow="hidden"
      >
        <WithRipples enabled={isCourseActive(data.action?.enabled ?? false, data.Profile?.id)}>
          <Flex direction="column" justify="space-between" h="100%">
            <Box>
              <Header />
              <Section />
            </Box>
            <Footer onClick={onClick} />
          </Flex>
        </WithRipples>
      </LinkBox>
    </CourseBoxContext.Provider>
  )
}

CourseBox.displayName = 'CourseBox'
