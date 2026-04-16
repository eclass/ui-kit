import{m as p,j as l,F as d,a as e,M as m,b as a,C as i,g as o,c as r}from"./index.49196d6a.js";import{L as n}from"./ListComponent.d1959722.js";import{N as t}from"./NewTooltip.c185db89.js";const b=()=>{const{isOpen:c,onToggle:s}=p();return l(d,{children:[e(m,{children:"Tooltip"}),e(a,{children:'Su funci\xF3n principal es proporcionar informaci\xF3n adicional de manera contextual y discreta cuando los usuarios interact\xFAan con elementos espec\xEDficos. El "Tooltip" mejorar la usabilidad y la claridad en tu aplicaci\xF3n web.'}),e(i,{text:"import { Label } from '@eclass/ui-kit'"}),e(t,{label:"Auto start",placement:"auto-start",children:e(o,{children:"Tooltip"})}),e(i,{text:`<NewTooltip label="Auto start" placement="auto-start">
  <BtnPrimary>Tooltip</BtnPrimary>
</NewTooltip>`}),e(r,{children:"Posiciones"}),l(a,{children:["Se ofrece posiciones predefinidos que se adaptan a tus necesidades de dise\xF1o y presentaci\xF3n, por defecto toma el valor de ",e("code",{children:"bottom"}),"."]}),l(n,{children:[e(t,{label:"Default",children:e(o,{children:"Default"})}),e(t,{label:"Top",placement:"top",children:e(o,{children:"Top"})}),e(t,{label:"Right",placement:"right",children:e(o,{children:"Right"})}),e(t,{label:"Bottom",placement:"bottom",children:e(o,{children:"Bottom"})}),e(t,{label:"Left",placement:"left",children:e(o,{children:"Left"})})]}),e(i,{text:`<NewTooltip label="Default">
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
</NewTooltip>`}),e(r,{children:"Activar al Click"}),l(a,{children:["El componente tiene un prop booleano ",e("code",{children:"isOpen"})," que se utiliza para mantener abierto o cerrado el tooltip en caso de utilizar ",e("code",{children:"onClick"}),", usando el hook"," ",e("code",{children:"useDisclosure()"})]}),e(n,{children:e(t,{label:"Default",isOpen:c,children:e(o,{onClick:s,children:"Presionar para mostrar"})})}),e(i,{text:`
        const { isOpen, onToggle } = useDisclosure()
        <NewTooltip label="Default" isOpen={isOpen}>
          <BtnPrimary onClick={onToggle}>Presionar para mostrar</BtnPrimary>
        </NewTooltip>`})]})};export{b as ViewTooltip,b as default};
//# sourceMappingURL=Tooltip.1c0fd67a.js.map
