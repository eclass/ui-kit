function m(o,n){return n.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(r){if(r!=="default"&&!(r in o)){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}})}),Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var d=u;u.displayName="naniscript";u.aliases=[];function u(o){(function(n){var e=/\{[^\r\n\[\]{}]*\}/,r={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:e,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};n.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:e,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:r}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:e,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:r},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},n.languages.nani=n.languages.naniscript,n.hooks.add("after-tokenize",function(t){var c=t.tokens;c.forEach(function(a){if(typeof a!="string"&&a.type==="generic-text"){var i=l(a);s(i)||(a.type="bad-line",a.content=i)}})});function s(t){for(var c="[]{}",a=[],i=0;i<t.length;i++){var f=t[i],p=c.indexOf(f);if(p!==-1){if(p%2===0)a.push(p+1);else if(a.pop()!==p)return!1}}return a.length===0}function l(t){return typeof t=="string"?t:Array.isArray(t)?t.map(l).join(""):l(t.content)}})(o)}var g=m({__proto__:null,default:d},[d]);export{g as n};
//# sourceMappingURL=naniscript.9313c549.js.map
