import * as React from 'react'
import { LinkBox, Box, Flex, LinkOverlay } from '@chakra-ui/react'

import { Header, Section, Footer } from '../components'
import { Ripples } from '@atoms'
import { vars } from '@theme'
import { isCourseActive } from '../utils'
import * as Type from '../types'

export const CourseBoxContext = React.createContext<Partial<Type.ExtendAcademicList>>({})

interface WithRipplesProps {
  enabled: boolean
  children: React.ReactChild
}
function WithRipples({ enabled, children }: WithRipplesProps): JSX.Element {
  return enabled ? <Ripples>{children}</Ripples> : <>{children}</>
}
interface IBoxTraditional {
  data: Type.ExtendAcademicList
  modalPaymentText?: Type.PaymentText
}

export function BoxTraditional({ data, modalPaymentText }: IBoxTraditional): JSX.Element {
  const isClickable = isCourseActive(data.action?.enabled ?? false, data.Profile?.id)
  const hasHref = !!data.action?.href

  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars('colors-neutral-silverSand')}`,
  }

  return (
    <CourseBoxContext.Provider value={data}>
      <LinkBox
        as="article"
        border={vars('borders-light')}
        borderRadius={vars('radii-big')}
        cursor={isClickable ? 'pointer' : 'default'}
        transition="box-shadow .3s"
        overflow="hidden"
        _hover={cssActive}
        _active={cssActive}
        _focusWithin={{
          boxShadow: `0 0 0 3px ${vars('colors-alert-deepSkyBlue')} inset`,
        }}
        tabIndex={!hasHref && isClickable ? 0 : undefined}
        role="link"
      >
        <WithRipples enabled={isCourseActive(data.action?.enabled ?? false, data.Profile?.id)}>
          <Flex direction="column" justify="space-between" h="100%">
            <Box className="CourseList-TraditionalBox">
              {isClickable && hasHref && (
                <LinkOverlay href={data.action?.href} isExternal={data.action?.targetBlank} />
              )}
              <Header />
              <Section />
            </Box>
            <Footer modalPaymentText={modalPaymentText} />
          </Flex>
        </WithRipples>
      </LinkBox>
    </CourseBoxContext.Provider>
  )
}

BoxTraditional.displayName = 'BoxTraditional'
