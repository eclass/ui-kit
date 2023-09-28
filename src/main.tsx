import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import { Documentation } from './documentation'
// import { Playground } from './Playground'

import { theme } from './theme'

if (import.meta.env.VITE_REACT_DEPLOY_DOCUMENTATION === 'DOCUMENTATION') {
  const contentRoot = document.getElementById('root') as HTMLElement
  ReactDOM.createRoot(contentRoot).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        {/* <Playground /> */}
        <Documentation />
      </ChakraProvider>
    </React.StrictMode>,
  )
} else {
  import('./index')
}
