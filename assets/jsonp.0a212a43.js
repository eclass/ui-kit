import{a as u}from"./json.6b2da05d.js";function c(e,s){return s.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(t){if(t!=="default"&&!(t in e)){var o=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:function(){return n[t]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var f=u,a=r;r.displayName="jsonp";r.aliases=[];function r(e){e.register(f),e.languages.jsonp=e.languages.extend("json",{punctuation:/[{}[\]();,.]/}),e.languages.insertBefore("jsonp","punctuation",{function:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/})}var p=c({__proto__:null,default:a},[a]);export{p as j};
//# sourceMappingURL=jsonp.0a212a43.js.map
