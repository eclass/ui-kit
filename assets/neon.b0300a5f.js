function s(t,d){return d.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(n){if(n!=="default"&&!(n in t)){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o=r;r.displayName="neon";r.aliases=[];function r(t){t.languages.neon={comment:{pattern:/#.*/,greedy:!0},datetime:{pattern:/(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,lookbehind:!0,alias:"number"},key:{pattern:/(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,lookbehind:!0,alias:"atrule"},number:{pattern:/(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,lookbehind:!0},boolean:{pattern:/(^|[[{(=:,\s])(?:false|no|true|yes)(?=$|[\]}),:=\s])/i,lookbehind:!0},null:{pattern:/(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,lookbehind:!0,alias:"keyword"},string:{pattern:/(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,lookbehind:!0,greedy:!0},literal:{pattern:/(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,lookbehind:!0,alias:"string"},punctuation:/[,:=[\]{}()-]/}}var i=s({__proto__:null,default:o},[o]);export{i as n};
//# sourceMappingURL=neon.b0300a5f.js.map