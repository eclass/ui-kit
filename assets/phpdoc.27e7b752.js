import{a as c}from"./php.f7f1eb35.js";import{a as l}from"./javadoclike.f2d3a107.js";function i(a,r){return r.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(o){if(o!=="default"&&!(o in a)){var p=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(a,o,p.get?p:{enumerable:!0,get:function(){return e[o]}})}})}),Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var u=c,d=l,n=t;t.displayName="phpdoc";t.aliases=[];function t(a){a.register(u),a.register(d),function(r){var e=/(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;r.languages.phpdoc=r.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+e+"\\s+)?)\\$\\w+"),lookbehind:!0}}),r.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+e),lookbehind:!0,inside:{keyword:/\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,punctuation:/[|\\[\]()]/}}]}),r.languages.javadoclike.addSupport("php",r.languages.phpdoc)}(a)}var f=i({__proto__:null,default:n},[n]);export{f as p};
//# sourceMappingURL=phpdoc.27e7b752.js.map
