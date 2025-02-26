import { Box } from '@chakra-ui/react'
import { NotificationIcon } from './NotificationIcon'
import { Ripples } from '@/atoms'
import { Calendar, Clock } from '../Events/Icons'

interface IEventList {
  hasNotification?: boolean
  isDropdown?: boolean
  name: string
  color?: string
  courseName: string
  courseTranslation: string
  courseid?: number
  eventDate: any
  eventTime: any
}

export const EventsList = ({
  hasNotification,
  isDropdown,
  name,
  courseName,
  courseTranslation,
  color,
  eventDate,
  eventTime,
}: IEventList) => {

  const border = `1px solid #E8E8E8` 

  return (
    <Ripples>
      <Box
        className="eventsList"
        borderTop={border}
        padding="16px 24px"
        cursor="pointer"
        _hover={{ background: '#F8F8F8' }} 
      >
        <Box display="flex" flexDirection="column" gap="8px">
          <Box
            lineHeight="21px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            fontSize="16px"
          >
            {name} {hasNotification && <NotificationIcon />}
          </Box>
          <Box
            display="flex"
            lineHeight="19px"
            fontSize="14px"
            sx={{
              svg: {
                marginRight: '4px',
              },
              span: {
                verticalAlign: 'middle',
              },
            }}
          >
            <Box paddingRight="8px" borderRight={border} sx={{
              'path': {
                fill: "#B0CFE0"
              }
            }}>
              <Calendar/>
              <span>{eventDate}</span>
            </Box>
            <Box paddingLeft="8px" sx={{
              'path': {
                fill: "#B0CFE0"
              }
            }}>
              <Clock /> 
              <span>{eventTime}</span>
            </Box>
          </Box>
          {isDropdown && (
            <Box display="flex" alignItems="center" gap="4px" lineHeight="19px">
              <Box h="10px" w="10px" bg={color} borderRadius={'50%'} />
              <Box as="span" color={'#808080'} fontSize="14px"> 
                <strong>{courseTranslation}</strong> {courseName}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Ripples>
  )
}
