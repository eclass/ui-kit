import{c as h,B as k}from"./BtnLink.2a46bdcd.js";import{ac as b,j as r,B as e,v as i,a as o}from"./index.c1464e53.js";import{a as u}from"./ModalAlert.e21aa667.js";import{r as v}from"./DiagonalArrow.de788ad3.js";function I({children:g,canDismiss:s=!1,buttonText:t,buttonIcon:y,buttonLink:B=!1,fullWidth:c=!1,isFlash:p=!1,onClick:l,state:d,m:C,endTextLink:f,onClickLink:m}){const[a]=b("(max-width: 425px)"),x=()=>{l&&l()};let n;return t&&(n=B?"link":"normal"),r(e,{className:p?"flashNotification":"e_alert",alignItems:a?"unset":"center",backgroundColor:u[d].bg,borderRadius:"8px",display:"flex",flexFlow:a?"column":"row",gap:p?"":"16px",justifyContent:a?"":"space-between",margin:C,width:c?"100%":"fit-content",maxWidth:c?"none":"796px",p:"1rem",pr:s?"1.75rem":"1rem",position:"relative",children:[r(e,{display:"flex",gap:"10px",className:"alertContent",sx:{".linkButton":{fontSize:"16px"},a:{fontWeight:"500",color:i("colors-main-deepSkyBlue"),textDecoration:"underline"},"a:hover":{color:i("colors-neutral-darkCharcoal")}},children:[o(e,{className:"iconContainer",sx:{svg:{width:"auto"}},children:u[d].icon}),r(e,{display:"flex",alignItems:"center",children:[r(e,{as:"p",alignSelf:"center",fontFamily:"Roboto",fontSize:"16px",fontWeight:"400",lineHeight:"28px",color:i("colors-neutral-darkCharcoal"),children:[g,f&&m&&o(h,{onClick:m,children:f})]}),n==="link"&&o(h,{onClick:x,children:t})]})]}),n==="normal"&&o(k,{isFullWidth:!!a,leftIcon:y,onClick:x,children:t}),s&&o(e,{"data-testid":"closeButton",cursor:"pointer",marginLeft:"12px",sx:{svg:{position:"absolute",top:"16px",right:"12px"}},onClick:l,children:o(v,{})})]})}export{I as A};
//# sourceMappingURL=Alert.cc435a40.js.map
