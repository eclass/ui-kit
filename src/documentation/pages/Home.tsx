import { MyHeading, MyText, MyTittle, Code } from '../components'

export const Home = (): JSX.Element => {
  return (
    <>
      <MyHeading>Información</MyHeading>
      <MyText>
        Este repositorio es una librería de componentes que se pensó para unificar estilos en los
        desarrollos de Eclass. <br />
        La fuente de donde se basan los componentes se encuentran en este Sistema de diseño.
      </MyText>

      <MyTittle>Scripts</MyTittle>
      <MyText>
        Los componentes están al 100% en escritas en archivos typescript.
        <br />
        Además deben ser testeadas en donde el enfoque del testing es asegurarse de que se muestre
        todo lo que se promete.
      </MyText>

      <MyText>Para trabajar de manera local</MyText>
      <Code text="npm run dev" />
      <MyText>Ejecuta los test con jest</MyText>
      <Code text="npm run test" />
    </>
  )
}

export default Home
