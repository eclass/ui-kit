import{t as e}from"./ListComponent-BSNp0HG4.js";import{L as t,c as n,i as r,r as i,t as a}from"./Typography-Db7ZPykY.js";import{t as o}from"./Code-Bgr_Rzly.js";import{t as s}from"./NewTooltip-DzaQwICw.js";import{t as c}from"./BtnPrimary-DDo5Xwm-.js";var l=n(),u=()=>{let{isOpen:n,onToggle:u}=t();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{children:`Tooltip`}),(0,l.jsx)(i,{children:`Su función principal es proporcionar información adicional de manera contextual y discreta cuando los usuarios interactúan con elementos específicos. El "Tooltip" mejorar la usabilidad y la claridad en tu aplicación web.`}),(0,l.jsx)(o,{text:`import { Label } from '@eclass/ui-kit'`}),(0,l.jsx)(s,{label:`Auto start`,placement:`auto-start`,children:(0,l.jsx)(c,{children:`Tooltip`})}),(0,l.jsx)(o,{text:`<NewTooltip label="Auto start" placement="auto-start">
  <BtnPrimary>Tooltip</BtnPrimary>
</NewTooltip>`}),(0,l.jsx)(r,{children:`Posiciones`}),(0,l.jsxs)(i,{children:[`Se ofrece posiciones predefinidos que se adaptan a tus necesidades de diseño y presentación, por defecto toma el valor de `,(0,l.jsx)(`code`,{children:`bottom`}),`.`]}),(0,l.jsxs)(e,{children:[(0,l.jsx)(s,{label:`Default`,children:(0,l.jsx)(c,{children:`Default`})}),(0,l.jsx)(s,{label:`Top`,placement:`top`,children:(0,l.jsx)(c,{children:`Top`})}),(0,l.jsx)(s,{label:`Right`,placement:`right`,children:(0,l.jsx)(c,{children:`Right`})}),(0,l.jsx)(s,{label:`Bottom`,placement:`bottom`,children:(0,l.jsx)(c,{children:`Bottom`})}),(0,l.jsx)(s,{label:`Left`,placement:`left`,children:(0,l.jsx)(c,{children:`Left`})})]}),(0,l.jsx)(o,{text:`<NewTooltip label="Default">
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
</NewTooltip>`}),(0,l.jsx)(r,{children:`Activar al Click`}),(0,l.jsxs)(i,{children:[`El componente tiene un prop booleano `,(0,l.jsx)(`code`,{children:`isOpen`}),` que se utiliza para mantener abierto o cerrado el tooltip en caso de utilizar `,(0,l.jsx)(`code`,{children:`onClick`}),`, usando el hook`,` `,(0,l.jsx)(`code`,{children:`useDisclosure()`})]}),(0,l.jsx)(e,{children:(0,l.jsx)(s,{label:`Default`,isOpen:n,children:(0,l.jsx)(c,{onClick:u,children:`Presionar para mostrar`})})}),(0,l.jsx)(o,{text:`
        const { isOpen, onToggle } = useDisclosure()
        <NewTooltip label="Default" isOpen={isOpen}>
          <BtnPrimary onClick={onToggle}>Presionar para mostrar</BtnPrimary>
        </NewTooltip>`})]})};export{u as ViewTooltip,u as default};
//# sourceMappingURL=Tooltip-M2rxLEtN.js.map