import{c as u,B as b}from"./BtnLink.836f7b6e.js";import{a as e,v as r,ah as y,j as s,B as i}from"./index.bc4db045.js";import{m as W,E as k,I as w,W as B,n as v}from"./Close.7a44354c.js";const f={success:{icon:e(W,{}),bg:r("colors-alert-ice"),id:"success"},error:{icon:e(k,{}),bg:r("colors-alert-veryLightPinkThree"),id:"error"},info:{icon:e(w,{}),bg:r("colors-alert-veryLightBlue"),id:"info"},warning:{icon:e(B,{}),bg:r("colors-alert-pale"),id:"warning"}};function L({children:h,canDismiss:l=!1,buttonText:a,buttonIcon:m,buttonLink:g=!1,isFlash:c=!1,onClick:n,state:p,m:x}){const[o]=y("(max-width: 425px)"),d=()=>{n&&n()};let t;return a&&(t=g?"link":"normal"),s(i,{className:c?"flashNotification":"e_alert",alignItems:o?"unset":"center",backgroundColor:f[p].bg,borderRadius:"8px",display:"flex",flexFlow:o?"column":"row",gap:c?"":"16px",justifyContent:o?"":"space-between",margin:x,width:"100%",maxWidth:"796px",p:"1rem",pr:l?"1.75rem":"1rem",position:"relative",children:[s(i,{gap:"10px",className:"alertContent",display:"flex",sx:{".linkButton":{fontSize:"16px"}},children:[e(i,{className:"iconContainer",sx:{svg:{width:"auto"}},children:f[p].icon}),s(i,{display:"flex",alignItems:"center",children:[e(i,{as:"p",fontFamily:"Roboto",fontSize:"16px",fontWeight:"400",lineHeight:"28px",color:r("colors-neutral-darkCharcoal"),children:h}),t==="link"&&e(u,{onClick:d,children:a})]})]}),t==="normal"&&e(b,{isFullWidth:!!o,leftIcon:m,onClick:d,children:a}),l&&e(i,{"data-testid":"closeButton",cursor:"pointer",marginLeft:"12px",sx:{svg:{position:"absolute",top:"16px",right:"12px"}},onClick:n,children:e(v,{})})]})}export{L as A,f as a};
//# sourceMappingURL=Alert.fda47118.js.map
