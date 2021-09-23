import { DocsContainer as StoryDocsContainer, DocsContextProps } from '@storybook/addon-docs'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../theme'

interface DocsContainerProps {
  children: React.ReactNode
  context: DocsContextProps
}

export const DocsContainer = (props: DocsContainerProps): JSX.Element => {
  return (
    <StoryDocsContainer context={props.context}>
      <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
    </StoryDocsContainer>
  )
}
