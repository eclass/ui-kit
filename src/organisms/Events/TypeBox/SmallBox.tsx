import { FC } from 'react'
import { Box, Text, Link } from '@chakra-ui/react'
import { vars } from '@/theme'
import { ItemsEventsProps } from '../EventsTypes'
import { Calendar, Clock } from '../Icons'
import { Ripples } from '@/atoms'

export const SmallBox: FC<ItemsEventsProps> = ({
  id,
  eventTitle,
  startDate,
  startTime,
  buttonInfo,
  redirect,
  eventImage,
  targetBlank,
}) => {
  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars('colors-neutral-silverSand')}`,
  }
  return (
    <Link
      key={id}
      href={redirect}
      target={targetBlank ? '_blank' : '_self'}
      rel={targetBlank ? 'noopener noreferrer' : undefined}
      transition="box-shadow .3s"
      _active={cssActive}
      _hover={cssActive}
      _focus={cssActive}
      width="286px"
      height="247px"
      borderRadius={vars('radii-big')}
    >
      <Ripples>
        <Box
          width="286px"
          height="247px"
          borderRadius={vars('radii-big')}
          border={vars('borders-light')}
          justifyContent="center"
          textAlign="center"
          display="flex"
          flexDirection="column"
          cursor="pointer"
        >
          <Box
            flex="1"
            bgImage={`linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,1) 100%), url(${eventImage})`}
            backgroundSize="cover"
            borderRadius="8px 8px 0 0"
            margin="0"
            display="grid"
            alignItems="flex-end"
          >
            <Box
              color={vars('colors-neutral-white')}
              padding="16px"
              textAlign="initial"
              fontFamily="Roboto"
              fontSize="16px"
              lineHeight="21px"
              display="grid"
              gap="8px"
            >
              <Text fontWeight="700" m="0px">
                {eventTitle}
              </Text>
              <Box display="flex" alignItems="center" gap="4px">
                <Calendar />
                <Text fontWeight="400" m="0px">
                  {startDate}
                </Text>
                <Text m="0px">|</Text>
                <Clock />
                <Text m="0px">{startTime}</Text>
              </Box>
            </Box>
          </Box>
          <Box
            width="100%"
            height="50px"
            backgroundColor="white"
            alignItems="center"
            display="flex"
            justifyContent="center"
            borderRadius=" 0 0 8px 8px"
            fontSize="16px"
            fontFamily="Roboto"
            color={vars('colors-main-deepSkyBlue')}
            fontWeight="500"
          >
            {buttonInfo}
          </Box>
        </Box>
      </Ripples>
    </Link>
  )
}
