import * as React from 'react'
import { Box, Heading, Link, List, HStack, Text, ListItem, Flex } from '@chakra-ui/react'

import { CourseBoxContext } from '../CourseBox'
import { DateStatus } from './DateStatus'
import { IconSelection } from './IconSelection'
import { vars } from '@theme'
import { CourseStatus } from './CourseStatus'

export function Section(): JSX.Element | null {
  const { name, dateStatus, information, progress, status } = React.useContext(CourseBoxContext)

  if (progress == null) {
    return null
  }

  return (
    <Box marginTop="1.875rem" as="section" p="0 .9375rem">
      {dateStatus?.hasDates && (
        <HStack
          direction="row"
          divider={
            dateStatus.init !== undefined &&
            dateStatus.init.length > 0 &&
            dateStatus.end !== undefined &&
            progress.icon !== null &&
            dateStatus.end.length > 0 ? (
              <Box h=".5rem" w="1px" bg={vars('colors-neutral-silverSand')} alignSelf="center" />
            ) : (
              <></>
            )
          }
        >
          <DateStatus date={dateStatus.init} />
          <DateStatus date={dateStatus.end} />
        </HStack>
      )}
      <Heading as="h2" fontSize="1rem" mt=".3125rem" fontWeight="700" lineHeight="1.3">
        {name}
      </Heading>
      <Flex mt="1rem" justify="space-between">
        <CourseStatus progress={progress} status={status} />
      </Flex>
      {information != null && information?.length > 0 && (
        <List
          spacing=".625rem"
          paddingInlineStart="0"
          pt=".625rem"
          m=".625rem 0 0"
          lineHeight=".875rem"
          borderTop={vars('borders-light')}
        >
          {information.map((item, index) => (
            <ListItem key={index} display="flex">
              <IconSelection type={item.icon} />
              <Box display="inline-block" ml=".625rem">
                {item.href !== undefined && item.href?.length > 0 ? (
                  <Link
                    isExternal
                    href={item.href}
                    color={vars('colors-main-deepSkyBlue')}
                    textDecor="underline"
                    fontWeight="500"
                    fontSize=".75rem"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <Text m="0" color={vars('colors-neutral-gray')} fontSize=".75rem">
                    {item.text}
                  </Text>
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}

Section.displayName = 'Section'
