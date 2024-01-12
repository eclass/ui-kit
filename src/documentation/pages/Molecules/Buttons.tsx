import { ListComponent, MyHeading, MyText, MyTittle, Code } from '@/documentation/components'
import { BtnPrimary, BtnSecondary, BtnTertiary, BtnLink } from '@/molecules'
import { GoAhead, Password } from '@/atoms/Icons'

export const Buttons = (): JSX.Element => {
  return (
    <>
      <MyHeading>Buttons</MyHeading>
      <MyText>
        Botones personalizados para acciones, cuadros de diálogo y más con soporte para múltiples
        tamaños, estados y más.
      </MyText>
      <Code text="import { BtnPrimary } from '@eclass/ui-kit'" />

      <MyTittle>Tipos definidos</MyTittle>
      <MyText>
        Se liberan estos cuatro tipos de botones, de los cuales dos visualmente son botones y los
        otros son como tipo links{' '}
      </MyText>
      <ListComponent>
        <BtnPrimary>Primary</BtnPrimary>
        <BtnSecondary>Secondary</BtnSecondary>
        <BtnTertiary>Tertiary</BtnTertiary>
        <BtnLink>Link</BtnLink>
      </ListComponent>
      <Code
        text="<BtnPrimary>Primary</BtnPrimary>
<BtnSecondary>Secondary</BtnSecondary>
<BtnTertiary>Tertiary</BtnTertiary>
<BtnLink>Link</BtnLink>"
      />

      <MyTittle>Estados</MyTittle>
      <MyText>
        Listado con los tipos de estados que puede tener el botón bajo ciertas condiciones.
      </MyText>
      <ListComponent>
        <BtnPrimary>Base</BtnPrimary>
        <BtnPrimary rightIcon={<Password />}>Base</BtnPrimary>
        <BtnPrimary leftIcon={<Password />}>Base</BtnPrimary>
        <BtnPrimary isLoading>Loading</BtnPrimary>
        <BtnPrimary disabled>Disabled</BtnPrimary>
      </ListComponent>
      <Code
        text="<BtnPrimary>Base</BtnPrimary>
<BtnPrimary rightIcon={<Password />}>Base</BtnPrimary>
<BtnPrimary leftIcon={<Password />}>Base</BtnPrimary>
<BtnPrimary isLoading>Loading</BtnPrimary>
<BtnPrimary disabled>Disabled</BtnPrimary>"
      />

      <MyTittle>Tamaños</MyTittle>
      <MyText>
        Por defecto el tamaño del botón es <code>regular</code> pero tienes las siguientes opciones
        de tamaño.
      </MyText>
      <ListComponent m="0 0 1rem">
        <BtnPrimary>Base</BtnPrimary>
        <BtnPrimary size="small">Small</BtnPrimary>
      </ListComponent>
      <BtnPrimary isFullWidth>isFullWidth</BtnPrimary>
      <Code
        text="<BtnPrimary>Base</BtnPrimary>
<BtnPrimary isLoading>Loading</BtnPrimary>
<BtnPrimary isFullWidth>isFullWidth</BtnPrimary>"
      />

      <MyTittle>Tipos Tertiary</MyTittle>
      <MyText>
        El <code>BtnTertiary</code> tiene tipos definidos que son los siguientes:
      </MyText>
      <ListComponent>
        <BtnTertiary>Tertiary</BtnTertiary>
        <BtnTertiary iconStatus="ahead">ahead</BtnTertiary>
        <BtnTertiary iconStatus="answer">answer</BtnTertiary>
        <BtnTertiary iconStatus="back">back</BtnTertiary>
        <BtnTertiary iconStatus="edit">edit</BtnTertiary>
        <BtnTertiary iconStatus="delete">delete</BtnTertiary>
        <BtnTertiary iconStatus="more">more</BtnTertiary>
        <BtnTertiary iconStatus="password">password</BtnTertiary>
        <BtnTertiary iconStatus="multimedia">multimedia</BtnTertiary>
        <BtnTertiary iconStatus="record">record</BtnTertiary>
        <BtnTertiary iconStatus="download">download</BtnTertiary>
        <BtnTertiary iconStatus="noIcon">noIcon</BtnTertiary>
      </ListComponent>
      <Code
        text="<BtnTertiary iconStatus='ahead'>ahead</BtnTertiary>
<BtnTertiary iconStatus='answer'>answer</BtnTertiary>
<BtnTertiary iconStatus='back'>back</BtnTertiary>
<BtnTertiary iconStatus='edit'>edit</BtnTertiary>
<BtnTertiary iconStatus='delete'>delete</BtnTertiary>
<BtnTertiary iconStatus='more'>more</BtnTertiary>
<BtnTertiary iconStatus='password'>password</BtnTertiary>
<BtnTertiary iconStatus='multimedia'>multimedia</BtnTertiary>
<BtnTertiary iconStatus='record'>record</BtnTertiary>
<BtnTertiary iconStatus='download'>download</BtnTertiary>
<BtnTertiary iconStatus='noIcon'>noIcon</BtnTertiary>"
      />
      <MyTittle>Iconos Custom</MyTittle>
      <ListComponent>
        <BtnTertiary iconCustom={<GoAhead />}>custom</BtnTertiary>
      </ListComponent>
      <Code text="<BtnTertiary iconCustom={<GoAhead />} >custom</BtnTertiary>" />
      <MyTittle>Activo al presionar</MyTittle>
      <MyText>
        El <code>BtnTertiary</code> puede tener una propiedad <code>activeWhenPress</code> booleano
        el cual indica que al presionar o mantener focus queda azul brillante o activo:
      </MyText>
      <ListComponent>
        <BtnTertiary activeWhenPress iconCustom={<GoAhead />}>
          custom
        </BtnTertiary>
      </ListComponent>
      <Code text="<BtnTertiary activeWhenPress iconCustom={<GoAhead />} >custom</BtnTertiary>" />

      <MyTittle>BtnLink</MyTittle>
      <MyText>
        El <code>BtnLink</code> tiene la opción de ser un elemento (<code>button</code>) o un
        elemento (<code>a</code>), si la elección es esto último es necesario pasarle la url que
        desea abrir con (<code>href</code>), por defecto en una pestaña nueva.
      </MyText>
      <ListComponent>
        <BtnLink>Button</BtnLink>
        <BtnLink as="a" href="https://ui-kit.eclass.com/">
          Enlace ui-kit
        </BtnLink>
      </ListComponent>
      <Code text="<BtnLink>Button</BtnLink>" />
      <Code
        text={`<BtnLink as="a" href="https://ui-kit.eclass.com/">
  Enlace ui-kit
</BtnLink>`}
      />
    </>
  )
}

export default Buttons
