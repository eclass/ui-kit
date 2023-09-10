import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Documentation } from './documentation'
// import { Playground } from './Playground'

import { theme } from './theme'

if (import.meta.env.VITE_REACT_DEPLOY_DOCUMENTATION === 'DOCUMENTATION') {
  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        {/* <Playground /> */}
        <Documentation />
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
} else {
  import('./index')
  // ReactDOM.render(
  //   // <React.StrictMode>
  //   //   <h1>HOLA</h1>
  //   // </React.StrictMode>,
  //   // document.getElementById('root')
  //   <React.StrictMode>
  //     <h1>HOLA</h1>
  //     {/* {modulesExports} */}
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // )
}
