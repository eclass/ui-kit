import * as React from 'react'
import { Box, Stack, Image, Center } from '@chakra-ui/react'

import { Label } from '../../../atoms'
import { CourseBoxContext } from '../CourseBox'

export function Header(): JSX.Element {
  const { background, labels, logo, logoAlt } = React.useContext(CourseBoxContext)

  return (
    <Box
      as="header"
      bgImg={background}
      bgPos="center"
      bgSize="cover"
      height="8.75rem"
      pos="relative">
      {labels !== undefined && labels.length > 0 && (
        <Stack direction="row" p="1rem" spacing=".625rem" wrap="wrap">
          {labels.map((item, index) => (
            <Label key={index} bg={item.id === 'NEW' ? '#FF7A14' : undefined}>
              {item.text}
            </Label>
          ))}
        </Stack>
      )}

      {logo !== undefined && logo.length > 0 && (
        <Center
          pos="absolute"
          bottom="0"
          left=".9375rem"
          transform="translateY(30%)"
          h="3.5rem"
          border="1px solid #e6e6e6"
          bg="#fff"
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
