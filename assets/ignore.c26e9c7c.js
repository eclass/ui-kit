function i(r,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(t){if(t!=="default"&&!(t in r)){var a=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:function(){return n[t]}})}})}),Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o=g;g.displayName="ignore";g.aliases=["gitignore","hgignore","npmignore"];function g(r){(function(e){e.languages.ignore={comment:/^#.*/m,entry:{pattern:/\S(?:.*(?:(?:\\ )|\S))?/,alias:"string",inside:{operator:/^!|\*\*?|\?/,regex:{pattern:/(^|[^\\])\[[^\[\]]*\]/,lookbehind:!0},punctuation:/\//}}},e.languages.gitignore=e.languages.ignore,e.languages.hgignore=e.languages.ignore,e.languages.npmignore=e.languages.ignore})(r)}var u=i({__proto__:null,default:o},[o]);export{u as i};
//# sourceMappingURL=ignore.c26e9c7c.js.map