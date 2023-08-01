import * as React from 'react'
import { Box, Stack, Image, Center, Flex } from '@chakra-ui/react'

import { CourseBoxContext } from '../Boxes/BoxTraditional'
import { Label } from '@atoms'
import { vars } from '@theme'
import { Profile } from '@icons'

const STUDENT = 4

export function Header(): JSX.Element {
  const { background, labels, logo, logoAlt, Profile: profile } = React.useContext(CourseBoxContext)

  return (
    <Box
      as="header"
      bgImg={background}
      bgPos="center"
      bgSize="cover"
      height="8.75rem"
      borderBottom={vars('borders-light')}
      pos="relative"
    >
      <Box p="1rem">
        {profile?.id !== STUDENT && (
          <Label bg={vars('colors-neutral-white')} m="0 0 .625rem 0">
            <Flex>
              <Profile m="0 .25rem 0 0" />
              {profile?.name}
            </Flex>
          </Label>
        )}
        {labels !== undefined && labels.length > 0 && (
          <Stack direction="row" spacing=".625rem" wrap="wrap">
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
        >
          <Image src={logo} alt={logoAlt ?? 'logo'} maxHeight="3.5rem" maxWidth="6.25rem" />
        </Center>
      )}
    </Box>
  )
}

Header.displayName = 'Header'
