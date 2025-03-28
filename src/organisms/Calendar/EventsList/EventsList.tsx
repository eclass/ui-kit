import { Box } from '@chakra-ui/react'

import { Calendar } from '@/atoms/Icons/Calendar'
import { Clock } from '@/atoms/Icons/Clock'
import { vars } from '@theme'
import { NotificationIcon } from './NotificationIcon'
import { Ripples } from '@atoms'

export interface IEventList {
  hasNotification?: boolean
  isDropdown?: boolean
  name: string
  color?: string
  courseName?: string
  text: string
  date: string
  hours: string
  clickEvent?: () => void
}

export const EventsList = ({
  hasNotification,
  isDropdown,
  name,
  courseName,
  color,
  text,
  date,
  hours,
  clickEvent,
}: IEventList): JSX.Element => {
  const border = `1px solid ${vars('colors-neutral-platinum') ?? '#E8E8E8'}`

  const handleClick = (): void => clickEvent?.()

  return (
    <Ripples>
      <Box
        className="eventsList"
        borderTop={border}
        padding="16px 24px"
        onClick={handleClick}
        cursor="pointer"
        bg={vars('colors-neutral-white') ?? '#fff'}
        _hover={{
          bg: vars('colors-neutral-cultured2') ?? '#F8F8F8',
        }}
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
            <Box paddingRight="8px" borderRight={border}>
              <Calendar />
              <span>{date}</span>
            </Box>
            <Box paddingLeft="8px">
              <Clock />
              <span>{hours}</span>
            </Box>
          </Box>
          {isDropdown && (
            <Box display="flex" alignItems="center" gap="4px" lineHeight="19px">
              <Box
                alignSelf="flex-start"
                bg={color}
                borderRadius="50%"
                display="block"
                h="10px"
                mt="4px"
                maxH="10px"
                maxW="10px"
                minH="10px"
                minW="10px"
                w="10px"
              />
              <Box as="span" color={vars('colors-neutral-gray') ?? '#808080'} fontSize="14px">
                <strong>{text ?? 'Curso'}:</strong> {courseName}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Ripples>
  )
}
