function l(e,u){return u.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(o){if(o!=="default"&&!(o in e)){var a=Object.getOwnPropertyDescriptor(r,o);Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:function(){return r[o]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n=t;t.displayName="goModule";t.aliases=[];function t(e){e.languages["go-mod"]=e.languages["go-module"]={comment:{pattern:/\/\/.*/,greedy:!0},version:{pattern:/(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,lookbehind:!0,alias:"number"},"go-version":{pattern:/((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,lookbehind:!0,alias:"number"},keyword:{pattern:/^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,lookbehind:!0},operator:/=>/,punctuation:/[()[\],]/}}var d=l({__proto__:null,default:n},[n]);export{d as g};
//# sourceMappingURL=go-module.8f66c04f.js.map