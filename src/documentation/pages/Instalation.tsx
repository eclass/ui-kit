import { MyHeading, MyText, MyTittle, Code } from '../components'

export const Instalation = (): JSX.Element => {
  return (
    <>
      <MyHeading>Instalación</MyHeading>
      <MyText>Se debe instalar este repositorio más unas dependencias</MyText>

      <Code
        language="text"
        text="npm install @eclass/ui-kit @chakra-ui/react @emotion/react @emotion/styled framer-motion"
      />
      <MyTittle>Implementación</MyTittle>
      <MyText>Ejemplo de implementación en código.</MyText>
      <Code
        text={`import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@eclass/ui-kit'

const AppWrapper = () => (
<ChakraProvider theme={theme} resetCSS={false}>
  <App />
</ChakraProvider>
)`}
      />
    </>
  )
}

export default Instalation
