import{y as s,j as i,F as m,a as e,M as d,b as a,C as l,c as r}from"./index.cb320507.js";import{L as n}from"./ListComponent.e3b95058.js";import{N as o}from"./NewTooltip.7be5cfef.js";import{B as t}from"./BtnLink.6ab41d02.js";import"./index.6d885762.js";import"./DiagonalArrow.64d91e23.js";const B=()=>{const{isOpen:c,onToggle:p}=s();return i(m,{children:[e(d,{children:"Tooltip"}),e(a,{children:'Su funci\xF3n principal es proporcionar informaci\xF3n adicional de manera contextual y discreta cuando los usuarios interact\xFAan con elementos espec\xEDficos. El "Tooltip" mejorar la usabilidad y la claridad en tu aplicaci\xF3n web.'}),e(l,{text:"import { Label } from '@eclass/ui-kit'"}),e(o,{label:"Auto start",placement:"auto-start",children:e(t,{children:"Tooltip"})}),e(l,{text:`<NewTooltip label="Auto start" placement="auto-start">
  <BtnPrimary>Tooltip</BtnPrimary>
</NewTooltip>`}),e(r,{children:"Posiciones"}),i(a,{children:["Se ofrece posiciones predefinidos que se adaptan a tus necesidades de dise\xF1o y presentaci\xF3n, por defecto toma el valor de ",e("code",{children:"bottom"}),"."]}),i(n,{children:[e(o,{label:"Default",children:e(t,{children:"Default"})}),e(o,{label:"Top",placement:"top",children:e(t,{children:"Top"})}),e(o,{label:"Right",placement:"right",children:e(t,{children:"Right"})}),e(o,{label:"Bottom",placement:"bottom",children:e(t,{children:"Bottom"})}),e(o,{label:"Left",placement:"left",children:e(t,{children:"Left"})})]}),e(l,{text:`<NewTooltip label="Default">
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
</NewTooltip>`}),e(r,{children:"Activar al Click"}),i(a,{children:["El componente tiene un prop booleano ",e("code",{children:"isOpen"})," que se utiliza para mantener abierto o cerrado el tooltip en caso de utilizar ",e("code",{children:"onClick"}),", usando el hook"," ",e("code",{children:"useDisclosure()"})]}),e(n,{children:e(o,{label:"Default",isOpen:c,children:e(t,{onClick:p,children:"Presionar para mostrar"})})}),e(l,{text:`
        const { isOpen, onToggle } = useDisclosure()
        <NewTooltip label="Default" isOpen={isOpen}>
          <BtnPrimary onClick={onToggle}>Presionar para mostrar</BtnPrimary>
        </NewTooltip>`})]})};export{B as ViewTooltip,B as default};
//# sourceMappingURL=Tooltip.cd83ee5e.js.map
