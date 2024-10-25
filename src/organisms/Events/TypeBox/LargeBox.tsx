import { FC } from 'react'
import { Box, Flex, Text, Link } from '@chakra-ui/react'
import { ItemsEventsProps } from '../EventsTypes'
import { vars } from '@/theme'
import { Calendar, Clock } from '../Icons'

export const LargeBox: FC<ItemsEventsProps> = ({
  id,
  eventTitle,
  startDate,
  startTime,
  buttonInfo,
  redirect,
  eventImage,
  targetBlank,
  isMobile,
}) => {
  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars('colors-neutral-silverSand')}`,
  }
  return (
    <Link
      key={id}
      href={redirect}
      _hover={{ textDecoration: 'none' }}
      target={targetBlank ? '_blank' : '_self'}
      rel={targetBlank ? 'noopener noreferrer' : undefined}
      display="contents"
    >
      <Flex
        cursor="pointer"
        transition="box-shadow .3s"
        _active={cssActive}
        _hover={cssActive}
        _focus={cssActive}
        w="fit-content"
        borderRadius={vars('radii-big')}
        display={isMobile ? 'block' : 'flex'}
      >
        <Box
          width="285px"
          height={isMobile ? '140px' : '168px'}
          bgImage={`linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,1) 100%), url(${eventImage})`}
          backgroundSize="cover"
          borderRadius={isMobile ? '8px 8px 0px 0px' : '8px 0 0 8px'}
        />
        <Box
          width={isMobile ? '285px' : '305px'}
          minHeight={isMobile ? '160px' : '168px'}
          borderRadius={isMobile ? '0 0 8px 8px' : '0 8px 8px 0'}
          border={vars('borders-light')}
          display="flex"
          flexDirection="column"
          cursor="pointer"
        >
          <Box width="inherit" height="100%" padding="4" color="#555555" gap="16px" display="grid">
            <Text fontWeight="700">{eventTitle}</Text>
            <Box display="flex" alignItems="center" gap="4px">
              <Calendar color={vars('colors-main-ziggurat')} />
              <Text fontWeight="400">{startDate}</Text>
              <Text color={vars('borders-light')}>|</Text>
              <Clock color={vars('colors-main-ziggurat')} />
              <Text>{startTime}</Text>
            </Box>
          </Box>
          <Box
            borderTop={`${vars('borders-light')}`}
            width="100%"
            height="50px"
            padding="12px"
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
      </Flex>
    </Link>
  )
}
