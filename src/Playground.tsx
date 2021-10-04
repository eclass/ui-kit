import { Box } from '@chakra-ui/react'

import { HelloWorld } from './components'
import { Colors } from './atoms/Colors/Colors'
import { dataFake } from './organisms/CourseList/dataFake'
import { CourseList } from './organisms'

export function Playground(): JSX.Element {
  return (
    <Box p="0 1rem">
      <h1>eClass Design System Playground</h1>
      <p>Aquí puedes agregar el componente que estas desarrollando para una prueba rápida</p>
      <HelloWorld name="" />
      <Colors type="main" />
      <CourseList courses={dataFake} m="1rem auto 0" />
    </Box>
  )
}
