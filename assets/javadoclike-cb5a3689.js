var p,f;function l(){if(f)return p;f=1,p=i,i.displayName="javadoclike",i.aliases=[];function i(s){(function(c){var d=c.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};function v(r,n){var t="doc-comment",a=c.languages[r];if(a){var e=a[t];if(!e){var u={};u[t]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},a=c.languages.insertBefore(r,"comment",u),e=a[t]}if(e instanceof RegExp&&(e=a[t]={pattern:e}),Array.isArray(e))for(var o=0,k=e.length;o<k;o++)e[o]instanceof RegExp&&(e[o]={pattern:e[o]}),n(e[o]);else n(e)}}function m(r,n){typeof r=="string"&&(r=[r]),r.forEach(function(t){v(t,function(a){a.inside||(a.inside={}),a.inside.rest=n})})}Object.defineProperty(d,"addSupport",{value:m}),d.addSupport(["java","javascript","php"],d)})(s)}return p}export{l as r};
//# sourceMappingURL=javadoclike-cb5a3689.js.map
