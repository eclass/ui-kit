import{a as u}from"./yaml.4fdbdc00.js";function l(t,i){return i.forEach(function(a){a&&typeof a!="string"&&!Array.isArray(a)&&Object.keys(a).forEach(function(e){if(e!=="default"&&!(e in t)){var n=Object.getOwnPropertyDescriptor(a,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return a[e]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s=u,o=r;r.displayName="tap";r.aliases=[];function r(t){t.register(s),t.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:t.languages.yaml,alias:"language-yaml"}}}var c=l({__proto__:null,default:o},[o]);export{c as t};
//# sourceMappingURL=tap.33c68cdd.js.map
