function l(n,o){return o.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(t){if(t!=="default"&&!(t in n)){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})}),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i=a;a.displayName="jq";a.aliases=[];function a(n){(function(o){var e=/\\\((?:[^()]|\([^()]*\))*\)/.source,t=RegExp(/(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g,function(){return e})),r={interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+e),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},u=o.languages.jq={comment:/#.*/,property:{pattern:RegExp(t.source+/(?=\s*:(?!:))/.source),lookbehind:!0,greedy:!0,inside:r},string:{pattern:t,lookbehind:!0,greedy:!0,inside:r},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};r.interpolation.inside.content.inside=u})(n)}var p=l({__proto__:null,default:i},[i]);export{p as j};
//# sourceMappingURL=jq.30d6bdc3.js.map