function s(r,a){return a.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(t){if(t!=="default"&&!(t in r)){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})}})}),Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i=n;n.displayName="$false";n.aliases=[];function n(r){(function(a){a.languages.false={comment:{pattern:/\{[^}]*\}/},string:{pattern:/"[^"]*"/,greedy:!0},"character-code":{pattern:/'(?:[^\r]|\r\n?)/,alias:"number"},"assembler-code":{pattern:/\d+`/,alias:"important"},number:/\d+/,operator:/[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,punctuation:/\[|\]/,variable:/[a-z]/,"non-standard":{pattern:/[()<BDO®]/,alias:"bold"}}})(r)}var l=s({__proto__:null,default:i},[i]);export{l as _};
//# sourceMappingURL=false.e6c3549b.js.map