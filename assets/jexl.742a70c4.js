function i(u,o){return o.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(r){if(r!=="default"&&!(r in u)){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(u,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})}),Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var a=t;t.displayName="jexl";t.aliases=[];function t(u){u.languages.jexl={string:/(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,transform:{pattern:/(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,alias:"function",lookbehind:!0},function:/[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,number:/\b\d+(?:\.\d+)?\b|\B\.\d+\b/,operator:/[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,boolean:/\b(?:false|true)\b/,keyword:/\bin\b/,punctuation:/[{}[\](),.]/}}var l=i({__proto__:null,default:a},[a]);export{l as j};
//# sourceMappingURL=jexl.742a70c4.js.map
