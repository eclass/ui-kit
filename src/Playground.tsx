import { Box, Heading, HStack, VStack } from '@chakra-ui/react'
import { Btn } from './molecules/Buttons/Btn'
import { BtnPrimary } from './molecules/Buttons/BtnPrimary'
import { BtnSecondary } from './molecules/Buttons/BtnSecondary'
import { Profile } from './atoms/Icons'
import { vars } from './theme'

export function Playground(): JSX.Element {
  return (
    <Box p="5rem 1rem">
      <Heading as="h1" size="sm">
        eClass Design System Playground
      </Heading>
      <VStack>
        <Btn>BTN</Btn>

        <HStack>
          <BtnPrimary>BtnPrimary</BtnPrimary>
          <BtnPrimary isLoading>isLoading</BtnPrimary>
          <BtnPrimary leftIcon={<Profile />}>Icon</BtnPrimary>
          <BtnPrimary disabled>disabled</BtnPrimary>
        </HStack>
        <HStack>
          <BtnPrimary size="small">BtnPrimary</BtnPrimary>
          <BtnPrimary size="small" isLoading>
            isLoading
          </BtnPrimary>
          <BtnPrimary size="small" leftIcon={<Profile />}>
            Icon
          </BtnPrimary>
          <BtnPrimary size="small" disabled>
            disabled
          </BtnPrimary>
        </HStack>
        <HStack>
          <BtnSecondary>BtnSecondary </BtnSecondary>
          <BtnSecondary isLoading>isLoading</BtnSecondary>
          <BtnSecondary leftIcon={<Profile color={vars('colors-main-deepSkyBlue')} />}>
            Icon
          </BtnSecondary>
          <BtnSecondary disabled>disabled</BtnSecondary>
        </HStack>
        <HStack>
          <BtnSecondary size="small">BtnSecondary </BtnSecondary>
          <BtnSecondary size="small" isLoading>
            isLoading
          </BtnSecondary>
          <BtnSecondary size="small" leftIcon={<Profile color={vars('colors-main-deepSkyBlue')} />}>
            Icon
          </BtnSecondary>
          <BtnSecondary size="small" disabled>
            disabled
          </BtnSecondary>
        </HStack>
        <HStack>
          <Btn rounded>BtnPrimary</Btn>
        </HStack>
      </VStack>
    </Box>
  )
}
