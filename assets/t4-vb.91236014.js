import{a as f}from"./t4-templating.d076acfd.js";import{a as c}from"./vbnet.867553a7.js";function g(t,i){return i.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(r){if(r!=="default"&&!(r in t)){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var u=f,b=c,o=a;a.displayName="t4Vb";a.aliases=[];function a(t){t.register(u),t.register(b),t.languages["t4-vb"]=t.languages["t4-templating"].createT4("vbnet")}var s=g({__proto__:null,default:o},[o]);export{s as t};
//# sourceMappingURL=t4-vb.91236014.js.map
