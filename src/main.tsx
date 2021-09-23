import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Playground } from './Playground'
import { theme } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Playground />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
