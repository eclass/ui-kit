import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { routes } from './utils/routes'
import { Home, NoMatch } from './pages'
import { Layout } from './components'
import { Box } from '@chakra-ui/react'

export const Documentation = (): JSX.Element => {
  React.useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      body.style.overflowY = 'scroll'
    }
  }, [])

  return (
    <Box w="100%" overflowX="hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {routes
              .filter((item) => item.component)
              .map(({ path, component, label }) => (
                <Route
                  key={label}
                  path={path}
                  element={<React.Suspense fallback={<>...</>}>{component}</React.Suspense>}
                />
              ))}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}
