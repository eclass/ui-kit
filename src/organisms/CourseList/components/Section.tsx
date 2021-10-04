import React from 'react'
import {
  Box,
  Heading,
  StackDivider,
  Link,
  List,
  HStack,
  Text,
  ListItem,
  Flex,
} from '@chakra-ui/react'

import { CourseBoxContext } from '../CourseBox'
import { DateStatus } from './DateStatus'
import { IconSelection } from './IconSelection'
import { Label } from '../../../atoms'

export function Section(): JSX.Element | null {
  const { name, dateStatus, information, progress } = React.useContext(CourseBoxContext)

  // eslint-disable-next-line
  if (!progress) {
    return null
  }
  return (
    <Box marginTop="1.875rem" as="section" p="0 .9375rem">
      {/* eslint-disable-next-line */}
      {dateStatus?.hasDates && (
        <HStack
          direction="row"
          divider={
            dateStatus.init.length > 0 && dateStatus.end.length > 0 ? (
              <StackDivider h=".5rem" borderColor="neutral.silverSand" alignSelf="center" />
            ) : (
              <></>
            )
          }>
          <DateStatus date={dateStatus.init} />
          <DateStatus date={dateStatus.end} />
        </HStack>
      )}
      <Heading as="h2" size="sm" mt=".3125rem">
        {name}
      </Heading>
      <Flex mt="1rem" justify="space-between">
        <Flex>
          <IconSelection type={progress.icon} progressValue={progress.progress} />
          <Text m="0" ml=".625rem" fontSize=".875rem" lineHeight="1.125rem">
            {progress?.label}
          </Text>
        </Flex>
        {progress?.finalGrade.length > 0 && (
          <Label size="sm" bg={progress?.isApproved ? 'alert.jadeGreen' : 'alert.red'} color="#fff">
            {progress?.finalGrade}
          </Label>
        )}
      </Flex>
      {/* eslint-disable-next-line */}
      {information && information?.length > 0 && (
        <List
          spacing=".625rem"
          paddingInlineStart="0"
          pt=".625rem"
          mt=".625rem"
          lineHeight=".875rem"
          borderTop="1px solid"
          borderTopColor="neutral.platinum">
          {/* eslint-disable-next-line */}
          {information.map((item, index) => (
            <ListItem key={index} display="flex">
              <IconSelection type={item.icon} />
              <Box display="inline-block" ml=".625rem" fontSize=".75rem">
                {item.href.length > 0 ? (
                  <Link
                    isExternal
                    href={item.href}
                    color="main.deepSkyBlue"
                    textDecor="underline"
                    fontWeight="500">
                    {item.text}
                  </Link>
                ) : (
                  <Text m="0" color="neutral.gray">
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
