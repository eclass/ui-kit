function l(e,i){return i.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(o){if(o!=="default"&&!(o in e)){var a=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:function(){return t[o]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n=r;r.displayName="roboconf";r.aliases=[];function r(e){e.languages.roboconf={comment:/#.*/,keyword:{pattern:/(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,lookbehind:!0},component:{pattern:/[\w-]+(?=[ \t]*\{)/,alias:"variable"},property:/[\w.-]+(?=[ \t]*:)/,value:{pattern:/(=[ \t]*(?![ \t]))[^,;]+/,lookbehind:!0,alias:"attr-value"},optional:{pattern:/\(optional\)/,alias:"builtin"},wildcard:{pattern:/(\.)\*/,lookbehind:!0,alias:"operator"},punctuation:/[{},.;:=]/}}var c=l({__proto__:null,default:n},[n]);export{c as r};
//# sourceMappingURL=roboconf.8c7ed171.js.map