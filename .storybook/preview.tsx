import { ChakraProvider } from "@chakra-ui/react"

import { theme } from '../src/theme'

const withChakra = (StoryFn: Function) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [ withChakra ]