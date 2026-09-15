import * as React from 'react'
import { LinkBox, Box, Flex, LinkOverlay } from '@chakra-ui/react'

import { Header, Section, Footer } from '../components'
import { Ripples } from '@atoms'
import { vars } from '@theme'
import { isCourseActive } from '../utils'
import * as Type from '../types'
import { useEnterNavigate } from '../utils/useEnterNavigate'

export const CourseBoxContext = React.createContext<Partial<Type.ExtendAcademicList>>({})

interface WithRipplesProps {
  enabled: boolean
  children: React.ReactNode
}
function WithRipples({ enabled, children }: WithRipplesProps): JSX.Element {
  return enabled ? <Ripples>{children}</Ripples> : <>{children}</>
}
interface IBoxTraditional {
  data: Type.ExtendAcademicList
  modalPaymentText?: Type.PaymentText
}

export function BoxTraditional({ data, modalPaymentText }: IBoxTraditional): JSX.Element {
  const hasCustomClick = data.onClick !== undefined
  const isClickable =
    hasCustomClick || isCourseActive(data.action?.enabled ?? false, data.Profile?.id)
  const hasHref = !hasCustomClick && !!data.action?.href

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault()
    data.onClick?.(data)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      data.onClick?.(data)
    }
  }

  useEnterNavigate()

  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars('colors-neutral-silverSand')}`,
  }

  return (
    <CourseBoxContext.Provider value={data}>
      <LinkBox
        as="article"
        className="focusable-link"
        border={vars('borders-light')}
        borderRadius={vars('radii-big')}
        cursor={isClickable ? 'pointer' : 'default'}
        transition="box-shadow .3s"
        overflow="hidden"
        _hover={cssActive}
        _focusVisible={{
          boxShadow: `0 0 0 3px ${vars('colors-alert-deepSkyBlue')} inset`,
        }}
        tabIndex={0}
        role={hasHref ? 'link' : hasCustomClick ? 'button' : undefined}
        data-href={hasHref ? data.action?.href : undefined}
        onKeyDown={hasCustomClick ? handleKeyDown : undefined}
      >
        <WithRipples enabled={isClickable}>
          <Flex direction="column" justify="space-between" h="100%">
            <Box className="CourseList-TraditionalBox">
              {isClickable && (hasHref || hasCustomClick) && (
                <LinkOverlay
                  className="course-link-overlay"
                  data-testid="course-link-overlay"
                  bg="gray"
                  href={hasHref ? data.action?.href : undefined}
                  isExternal={hasHref && data.action?.targetBlank}
                  onClick={hasCustomClick ? handleClick : undefined}
                  tabIndex={-1}
                />
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
