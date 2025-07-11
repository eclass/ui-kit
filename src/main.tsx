import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Documentation } from './documentation'
import { Playground } from './Playground'

import { theme } from './theme'

const isPlaygroundMode = import.meta.env.VITE_APP_MODE === 'playground'

if (import.meta.env.VITE_REACT_DEPLOY_DOCUMENTATION === 'DOCUMENTATION') {
  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        {isPlaygroundMode ? <Playground /> : <Documentation />}
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
} else {
  import('./index')
}
