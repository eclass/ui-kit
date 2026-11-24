import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Documentation } from './documentation'
import { Playground } from './Playground'

import { theme } from './theme'

const isPlaygroundMode = import.meta.env.VITE_APP_MODE === 'playground'

// Si existe `src/Playground.local.tsx` (ignorado por git), se usa en vez del Playground vacío
const localPlayground = import.meta.glob<{ Playground: () => JSX.Element }>(
  './Playground.local.tsx',
  { eager: true }
)
const PlaygroundView = localPlayground['./Playground.local.tsx']?.Playground ?? Playground

if (import.meta.env.VITE_REACT_DEPLOY_DOCUMENTATION === 'DOCUMENTATION') {
  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        {isPlaygroundMode ? <PlaygroundView /> : <Documentation />}
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
} else {
  import('./index')
}
