import { ListComponent, MyHeading, MyText, MyTittle, Code } from '@/documentation/components'
import { NewTooltip } from '../../../molecules/Tooltip/NewTooltip'
import { BtnPrimary } from '@/molecules'

export const ViewTooltip = (): JSX.Element => {
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
    </>
  )
}

export default ViewTooltip
