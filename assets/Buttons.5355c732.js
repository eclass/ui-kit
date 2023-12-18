import{j as r,F as l,a as e,M as m,b as a,C as i,c as o}from"./index.0b55739a.js";import{L as s}from"./ListComponent.1cdf11ad.js";import{B as n,a as B,b as t,c as y}from"./BtnLink.ed13879a.js";import{P as d,G as c}from"./Close.df4d627d.js";const P=()=>r(l,{children:[e(m,{children:"Buttons"}),e(a,{children:"Botones personalizados para acciones, cuadros de di\xE1logo y m\xE1s con soporte para m\xFAltiples tama\xF1os, estados y m\xE1s."}),e(i,{text:"import { BtnPrimary } from '@eclass/ui-kit'"}),e(o,{children:"Tipos definidos"}),r(a,{children:["Se liberan estos cuatro tipos de botones, de los cuales dos visualmente son botones y los otros son como tipo links"," "]}),r(s,{children:[e(n,{children:"Primary"}),e(B,{children:"Secondary"}),e(t,{children:"Tertiary"}),e(y,{children:"Link"})]}),e(i,{text:`<BtnPrimary>Primary</BtnPrimary>
<BtnSecondary>Secondary</BtnSecondary>
<BtnTertiary>Tertiary</BtnTertiary>
<BtnLink>Link</BtnLink>`}),e(o,{children:"Estados"}),e(a,{children:"Listado con los tipos de estados que puede tener el bot\xF3n bajo ciertas condiciones."}),r(s,{children:[e(n,{children:"Base"}),e(n,{rightIcon:e(d,{}),children:"Base"}),e(n,{leftIcon:e(d,{}),children:"Base"}),e(n,{isLoading:!0,children:"Loading"}),e(n,{disabled:!0,children:"Disabled"})]}),e(i,{text:`<BtnPrimary>Base</BtnPrimary>
<BtnPrimary rightIcon={<Password />}>Base</BtnPrimary>
<BtnPrimary leftIcon={<Password />}>Base</BtnPrimary>
<BtnPrimary isLoading>Loading</BtnPrimary>
<BtnPrimary disabled>Disabled</BtnPrimary>`}),e(o,{children:"Tama\xF1os"}),r(a,{children:["Por defecto el tama\xF1o del bot\xF3n es ",e("code",{children:"regular"})," pero tienes las siguientes opciones de tama\xF1o."]}),r(s,{m:"0 0 1rem",children:[e(n,{children:"Base"}),e(n,{size:"small",children:"Small"})]}),e(n,{isFullWidth:!0,children:"isFullWidth"}),e(i,{text:`<BtnPrimary>Base</BtnPrimary>
<BtnPrimary isLoading>Loading</BtnPrimary>
<BtnPrimary isFullWidth>isFullWidth</BtnPrimary>`}),e(o,{children:"Tipos Tertiary"}),r(a,{children:["El ",e("code",{children:"BtnTertiary"})," tiene tipos definidos que son los siguientes:"]}),r(s,{children:[e(t,{children:"Tertiary"}),e(t,{iconStatus:"ahead",children:"ahead"}),e(t,{iconStatus:"answer",children:"answer"}),e(t,{iconStatus:"back",children:"back"}),e(t,{iconStatus:"edit",children:"edit"}),e(t,{iconStatus:"delete",children:"delete"}),e(t,{iconStatus:"more",children:"more"}),e(t,{iconStatus:"password",children:"password"}),e(t,{iconStatus:"multimedia",children:"multimedia"}),e(t,{iconStatus:"record",children:"record"}),e(t,{iconStatus:"download",children:"download"}),e(t,{iconStatus:"noIcon",children:"noIcon"})]}),e(i,{text:`<BtnTertiary iconStatus='ahead'>ahead</BtnTertiary>
<BtnTertiary iconStatus='answer'>answer</BtnTertiary>
<BtnTertiary iconStatus='back'>back</BtnTertiary>
<BtnTertiary iconStatus='edit'>edit</BtnTertiary>
<BtnTertiary iconStatus='delete'>delete</BtnTertiary>
<BtnTertiary iconStatus='more'>more</BtnTertiary>
<BtnTertiary iconStatus='password'>password</BtnTertiary>
<BtnTertiary iconStatus='multimedia'>multimedia</BtnTertiary>
<BtnTertiary iconStatus='record'>record</BtnTertiary>
<BtnTertiary iconStatus='download'>download</BtnTertiary>
<BtnTertiary iconStatus='noIcon'>noIcon</BtnTertiary>`}),e(o,{children:"Iconos Custom"}),e(s,{children:e(t,{iconCustom:e(c,{}),children:"custom"})}),e(i,{text:"<BtnTertiary iconCustom={<GoAhead />} >custom</BtnTertiary>"}),e(o,{children:"Activo al presionar"}),r(a,{children:["El ",e("code",{children:"BtnTertiary"})," puede tener una propiedad ",e("code",{children:"activeWhenPress"})," booleano el cual indica que al presionar o mantener focus queda azul brillante o activo:"]}),e(s,{children:e(t,{activeWhenPress:!0,iconCustom:e(c,{}),children:"custom"})}),e(i,{text:"<BtnTertiary activeWhenPress iconCustom={<GoAhead />} >custom</BtnTertiary>"})]});export{P as Buttons,P as default};
//# sourceMappingURL=Buttons.5355c732.js.map
