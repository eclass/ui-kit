import { ListComponent, MyHeading, MyText, MyTittle, Code } from '@/documentation/components'
import { NewTooltip } from '../../../molecules/Tooltip/NewTooltip'
import { BtnPrimary } from '@/molecules'
import { useDisclosure } from '@chakra-ui/react'

export const ViewTooltip = (): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <MyHeading>Tooltip</MyHeading>
      <MyText>
        Su función principal es proporcionar información adicional de manera contextual y discreta
        cuando los usuarios interactúan con elementos específicos. El "Tooltip" mejorar la
        usabilidad y la claridad en tu aplicación web.
      </MyText>
      <Code text="import { Label } from '@eclass/ui-kit'" />
      <NewTooltip label="Auto start" placement="auto-start">
        <BtnPrimary>Tooltip</BtnPrimary>
      </NewTooltip>
      <Code
        text={`<NewTooltip label="Auto start" placement="auto-start">
  <BtnPrimary>Tooltip</BtnPrimary>
</NewTooltip>`}
      />

      <MyTittle>Posiciones</MyTittle>
      <MyText>
        Se ofrece posiciones predefinidos que se adaptan a tus necesidades de diseño y presentación,
        por defecto toma el valor de <code>bottom</code>.
      </MyText>
      <ListComponent>
        <NewTooltip label="Default">
          <BtnPrimary>Default</BtnPrimary>
        </NewTooltip>
        <NewTooltip label="Top" placement="top">
          <BtnPrimary>Top</BtnPrimary>
        </NewTooltip>
        <NewTooltip label="Right" placement="right">
          <BtnPrimary>Right</BtnPrimary>
        </NewTooltip>
        <NewTooltip label="Bottom" placement="bottom">
          <BtnPrimary>Bottom</BtnPrimary>
        </NewTooltip>
        <NewTooltip label="Left" placement="left">
          <BtnPrimary>Left</BtnPrimary>
        </NewTooltip>
      </ListComponent>
      <Code
        text={`<NewTooltip label="Default">
  <BtnPrimary>Default</BtnPrimary>
</NewTooltip>
<NewTooltip label="Top" placement="top">
  <BtnPrimary>Top</BtnPrimary>
</NewTooltip>
<NewTooltip label="Right" placement="right">
  <BtnPrimary>Right</BtnPrimary>
</NewTooltip>
<NewTooltip label="Bottom" placement="bottom">
  <BtnPrimary>Bottom</BtnPrimary>
</NewTooltip>
<NewTooltip label="Left" placement="left">
  <BtnPrimary>Left</BtnPrimary>
</NewTooltip>`}
      />
      <MyTittle>Activar al Click</MyTittle>
      <MyText>
        El componente tiene un prop booleano <code>isOpen</code> que se utiliza para mantener
        abierto o cerrado el tooltip en caso de utilizar <code>onClick</code>, usando el hook{' '}
        <code>useDisclosure()</code>
      </MyText>
      <ListComponent>
        <NewTooltip label="Default" isOpen={isOpen}>
          <BtnPrimary onClick={onToggle}>Presionar para mostrar</BtnPrimary>
        </NewTooltip>
      </ListComponent>
      <Code
        text={`
        const { isOpen, onToggle } = useDisclosure()
        <NewTooltip label="Default" isOpen={isOpen}>
          <BtnPrimary onClick={onToggle}>Presionar para mostrar</BtnPrimary>
        </NewTooltip>`}
      />
    </>
  )
}

export default ViewTooltip
