import * as React from 'react'
import { Box, Stack, Image, Center, Flex } from '@chakra-ui/react'

import { Label, vars } from '../../../'
import { CourseBoxContext } from '../CourseBox'
import { Profile } from '../../../atoms/Icons'

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
      pos="relative">
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
                bg={item.id === 'NEW' ? vars('colors-secondary-pumpkin') : undefined}>
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
          border={`1px solid ${vars('colors-neutral-platinum')}`}
          bg={vars('colors-neutral-white')}
          overflow="hidden"
          borderRadius="0.25em"
          w="6.25rem">
          <Image src={logo} alt={logoAlt} maxHeight="3.5rem" />
        </Center>
      )}
    </Box>
  )
}

Header.displayName = 'Header'
