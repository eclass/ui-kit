import { HelloWorld } from './components'
import { Colors } from './atoms/Colors/Colors'

export function Playground(): JSX.Element {
  return (
    <div>
      <h1>eClass Design System Playground</h1>
      <p>Aquí puedes agregar el componente que estas desarrollando para una prueba rápida</p>
      <HelloWorld name="" />
      <Colors type="main" />
    </div>
  )
}
