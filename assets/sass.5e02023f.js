function u(a,e){return e.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(r){if(r!=="default"&&!(r in a)){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(a,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}})}),Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var o=n;n.displayName="sass";n.aliases=[];function n(a){(function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete e.languages.sass.atrule;var t=/\$[-\w]+|#\{\$[-\w]+\}/,r=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:t,operator:r}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:t,operator:r,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})})(a)}var l=u({__proto__:null,default:o},[o]);export{l as s};
//# sourceMappingURL=sass.5e02023f.js.map
