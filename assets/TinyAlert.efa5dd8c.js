import{j as c,B as a,a as l,v as r}from"./index.ad3fe227.js";import{T as t,a as s,b as d,c as g}from"./DiagonalArrow.83142357.js";function m({status:o,text:n,margin:i="0"}){const e={success:{icon:l(t,{}),text:"Success",bg:r("colors-alert-ice"),color:r("colors-neutral-darkCharcoal")},error:{icon:l(s,{}),text:"Error",bg:r("colors-alert-veryLightPinkThree"),color:r("colors-neutral-darkCharcoal")},info:{icon:l(d,{}),text:"Info",bg:r("colors-alert-veryLightBlue"),color:r("colors-neutral-darkCharcoal")},warning:{icon:l(g,{}),text:"Warning",bg:r("colors-alert-pale"),color:r("colors-neutral-darkCharcoal")},answered:{icon:void 0,text:"Answered",bg:r("colors-main-blueGrey"),color:r("colors-neutral-white")},omitted:{icon:void 0,text:"Omitted",bg:r("colors-main-ziggurat"),color:r("colors-neutral-darkCharcoal")},pending:{icon:void 0,text:"Pending",bg:r("colors-neutral-cultured"),color:r("colors-neutral-darkCharcoal")},new:{icon:void 0,text:"New answer",bg:"#FF7A14",color:r("colors-neutral-white")}};return e[o]?c(a,{margin:i,"data-testid":"TinyAlert-Box",backgroundColor:e[o].bg,display:"flex",flexDirection:"row",alignItems:"center",padding:".125em .25em",gap:".25rem",width:"fit-content",borderRadius:".25rem",className:"TinyAlert-Box",children:[e[o].icon&&l(a,{lineHeight:0,sx:{">svg":{margin:0}},children:e[o].icon}),l(a,{as:"span",color:e[o].color,fontSize:".75rem",fontStyle:"normal",fontWeight:"400",fontFamily:"Roboto",lineHeight:".875rem",margin:"0",children:n!=null?n:e[o].text})]}):null}m.displayName="TinyAlert";export{m as T};
//# sourceMappingURL=TinyAlert.efa5dd8c.js.map
