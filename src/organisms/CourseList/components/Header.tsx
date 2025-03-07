import * as React from 'react'
import { Box, Stack, Image, Center, Flex } from '@chakra-ui/react'

import { CourseBoxContext } from '../Boxes/BoxTraditional'
import { Label } from '@atoms'
import { vars } from '@theme'
import { Profile } from '@icons'

const STUDENT = 4

export function Header(): JSX.Element {
  const {
    background,
    labels,
    logo,
    logoAlt,
    Profile: profile,
    soonCourse,
  } = React.useContext(CourseBoxContext)

  return (
    <Box
      as="header"
      height="8.75rem"
      borderBottom={vars('borders-light')}
      pos="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${background ?? ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: soonCourse?.show ?? false ? 0.3 : 1,
        zIndex: 0,
      }}
    >
      <Box p="1rem" display="flex" gap="0.625rem" position="absolute" zIndex={2}>
        {profile?.id !== STUDENT && (
          <Label bg={vars('colors-neutral-white')} m="0 0 .625rem 0">
            <Flex>
              <Profile m="0 .25rem 0 0" />
              {profile?.name}
            </Flex>
          </Label>
        )}
        {labels !== undefined && labels.length > 0 && (
          <Stack direction="row" spacing=".625rem" wrap="wrap" zIndex={2}>
            {labels.map((item, index) => (
              <Label
                key={index}
                bg={item.id === 'NEW' ? vars('colors-secondary-pumpkin') : undefined}
              >
                {item.text}
              </Label>
            ))}
          </Stack>
        )}
        {soonCourse?.show && soonCourse?.text && (
          <Stack direction="row" spacing=".625rem" wrap="wrap" zIndex={2}>
            <Label>{soonCourse.text}</Label>
          </Stack>
        )}
      </Box>

      {logo !== undefined && logo.length > 0 && (
        <Center
          pos="absolute"
          bottom="0"
          left=".9375rem"
          transform="translateY(30%)"
          h="3.5rem"
          border={vars('borders-light')}
          bg={vars('colors-neutral-white')}
          overflow="hidden"
          borderRadius={vars('radii-small')}
          w="6.25rem"
          zIndex={2}
        >
          <Image src={logo} alt={logoAlt ?? 'logo'} maxHeight="3.5rem" maxWidth="6.25rem" />
        </Center>
      )}
    </Box>
  )
}

Header.displayName = 'Header'
