import{j as t,F as h,a as e,M as u,b as a,C as r,c as o}from"./index.8e87f86e.js";import{L as s}from"./ListComponent.9cd43ba0.js";import{B as i,a as B,b as n,c as d}from"./BtnLink.07898d66.js";import{P as c,G as l}from"./DiagonalArrow.0e6a8fa7.js";const P=()=>t(h,{children:[e(u,{children:"Buttons"}),e(a,{children:"Botones personalizados para acciones, cuadros de di\xE1logo y m\xE1s con soporte para m\xFAltiples tama\xF1os, estados y m\xE1s."}),e(r,{text:"import { BtnPrimary } from '@eclass/ui-kit'"}),e(o,{children:"Tipos definidos"}),t(a,{children:["Se liberan estos cuatro tipos de botones, de los cuales dos visualmente son botones y los otros son como tipo links"," "]}),t(s,{children:[e(i,{children:"Primary"}),e(B,{children:"Secondary"}),e(n,{children:"Tertiary"}),e(d,{children:"Link"})]}),e(r,{text:`<BtnPrimary>Primary</BtnPrimary>
<BtnSecondary>Secondary</BtnSecondary>
<BtnTertiary>Tertiary</BtnTertiary>
<BtnLink>Link</BtnLink>`}),e(o,{children:"Estados"}),e(a,{children:"Listado con los tipos de estados que puede tener el bot\xF3n bajo ciertas condiciones."}),t(s,{children:[e(i,{children:"Base"}),e(i,{rightIcon:e(c,{}),children:"Base"}),e(i,{leftIcon:e(c,{}),children:"Base"}),e(i,{isLoading:!0,children:"Loading"}),e(i,{disabled:!0,children:"Disabled"})]}),e(r,{text:`<BtnPrimary>Base</BtnPrimary>
<BtnPrimary rightIcon={<Password />}>Base</BtnPrimary>
<BtnPrimary leftIcon={<Password />}>Base</BtnPrimary>
<BtnPrimary isLoading>Loading</BtnPrimary>
<BtnPrimary disabled>Disabled</BtnPrimary>`}),e(o,{children:"Tama\xF1os"}),t(a,{children:["Por defecto el tama\xF1o del bot\xF3n es ",e("code",{children:"regular"})," pero tienes las siguientes opciones de tama\xF1o."]}),t(s,{m:"0 0 1rem",children:[e(i,{children:"Base"}),e(i,{size:"small",children:"Small"})]}),e(i,{isFullWidth:!0,children:"isFullWidth"}),e(r,{text:`<BtnPrimary>Base</BtnPrimary>
<BtnPrimary isLoading>Loading</BtnPrimary>
<BtnPrimary isFullWidth>isFullWidth</BtnPrimary>`}),e(o,{children:"Tipos Tertiary"}),t(a,{children:["El ",e("code",{children:"BtnTertiary"})," tiene tipos definidos que son los siguientes:"]}),t(s,{children:[e(n,{children:"Tertiary"}),e(n,{iconStatus:"ahead",children:"ahead"}),e(n,{iconStatus:"answer",children:"answer"}),e(n,{iconStatus:"back",children:"back"}),e(n,{iconStatus:"edit",children:"edit"}),e(n,{iconStatus:"delete",children:"delete"}),e(n,{iconStatus:"more",children:"more"}),e(n,{iconStatus:"password",children:"password"}),e(n,{iconStatus:"multimedia",children:"multimedia"}),e(n,{iconStatus:"record",children:"record"}),e(n,{iconStatus:"download",children:"download"}),e(n,{iconStatus:"noIcon",children:"noIcon"})]}),e(r,{text:`<BtnTertiary iconStatus='ahead'>ahead</BtnTertiary>
<BtnTertiary iconStatus='answer'>answer</BtnTertiary>
<BtnTertiary iconStatus='back'>back</BtnTertiary>
<BtnTertiary iconStatus='edit'>edit</BtnTertiary>
<BtnTertiary iconStatus='delete'>delete</BtnTertiary>
<BtnTertiary iconStatus='more'>more</BtnTertiary>
<BtnTertiary iconStatus='password'>password</BtnTertiary>
<BtnTertiary iconStatus='multimedia'>multimedia</BtnTertiary>
<BtnTertiary iconStatus='record'>record</BtnTertiary>
<BtnTertiary iconStatus='download'>download</BtnTertiary>
<BtnTertiary iconStatus='noIcon'>noIcon</BtnTertiary>`}),e(o,{children:"Iconos Custom"}),e(s,{children:e(n,{iconCustom:e(l,{}),children:"custom"})}),e(r,{text:"<BtnTertiary iconCustom={<GoAhead />} >custom</BtnTertiary>"}),e(o,{children:"Activo al presionar"}),t(a,{children:["El ",e("code",{children:"BtnTertiary"})," puede tener una propiedad ",e("code",{children:"activeWhenPress"})," booleano el cual indica que al presionar o mantener focus queda azul brillante o activo:"]}),e(s,{children:e(n,{activeWhenPress:!0,iconCustom:e(l,{}),children:"custom"})}),e(r,{text:"<BtnTertiary activeWhenPress iconCustom={<GoAhead />} >custom</BtnTertiary>"}),e(o,{children:"BtnLink"}),t(a,{children:["El ",e("code",{children:"BtnLink"})," tiene la opci\xF3n de ser un elemento (",e("code",{children:"button"}),") o un elemento (",e("code",{children:"a"}),"), si la elecci\xF3n es esto \xFAltimo es necesario pasarle la url que desea abrir con (",e("code",{children:"href"}),"), por defecto en una pesta\xF1a nueva."]}),t(s,{children:[e(d,{children:"Button"}),e(d,{as:"a",href:"https://ui-kit.eclass.com/",children:"Enlace ui-kit"})]}),e(r,{text:"<BtnLink>Button</BtnLink>"}),e(r,{text:`<BtnLink as="a" href="https://ui-kit.eclass.com/">
  Enlace ui-kit
</BtnLink>`})]});export{P as Buttons,P as default};
//# sourceMappingURL=Buttons.047d0808.js.map
