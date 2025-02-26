import { Box } from '@chakra-ui/react'
import { NotificationIcon } from './NotificationIcon'
import { Ripples } from '@/atoms'
import { Calendar, Clock } from '../Events/Icons'
import { format, parseISO } from 'date-fns'

interface IEventList {
  hasNotification?: boolean
  isDropdown?: boolean
  name: string
  color?: string
  courseName: string
  courseTranslation: string
  courseid?: number
  start: any
}

export const EventsList = ({
  hasNotification,
  isDropdown,
  name,
  courseName,
  courseTranslation,
  color,
  start
}: IEventList) => {

  // Convertir la fecha sin ajustar zona horaria
  const parsedDate = typeof start === 'string' ? parseISO(start) : start

  // Formatos de fecha y hora
  const formattedDate = format(parsedDate, 'EEE d MMM')
  const formattedTime = format(parsedDate, 'h:mm a')

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
              <span>{formattedDate}</span>
            </Box>
            <Box paddingLeft="8px" sx={{
              'path': {
                fill: "#B0CFE0"
              }
            }}>
              <Clock /> 
              <span>{formattedTime}</span>
            </Box>
          </Box>
          {isDropdown && (
            <Box display="flex" alignItems="center" gap="4px" lineHeight="19px">
              <Box h="10px" w="10px" bg={color ? color : 'red'} borderRadius={'50%'} />
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

