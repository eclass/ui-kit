import { FC } from 'react'
import { Box, Text, Link } from '@chakra-ui/react'
import { vars } from '@/theme'
import { ItemsEventsProps } from '../EventsTypes'
import { Calendar, Clock } from '../Icons'

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
  return (
    <Link
      key={id}
      href={redirect}
      _hover={{ textDecoration: 'none' }}
      target={targetBlank ? '_blank' : '_self'}
      rel={targetBlank ? 'noopener noreferrer' : undefined}
      display="inline-block"
    >
      <Box
        width="286px"
        height="247px"
        borderRadius="8px"
        border="1px"
        borderColor={vars('colors-neutral-platinum')}
        justifyContent="center"
        textAlign="center"
        display="flex"
        flexDirection="column"
        cursor="pointer"
        transition="box-shadow 0.3s ease-in-out"
        _hover={{ shadow: 'sm' }}
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
            <Text fontWeight="700">{eventTitle}</Text>
            <Box display="flex" alignItems="center" gap="4px">
              <Calendar />
              <Text fontWeight="400">{startDate}</Text>
              <Text>|</Text>
              <Clock />
              <Text>{startTime}</Text>
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
    </Link>
  )
}
