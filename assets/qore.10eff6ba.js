function s(e,i){return i.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a=n;n.displayName="qore";n.aliases=[];function n(e){e.languages.qore=e.languages.extend("clike",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,lookbehind:!0},string:{pattern:/("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:bool|date|float|int|list|number|string)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,boolean:/\b(?:false|true)\b/i,function:/\$?\b(?!\d)\w+(?=\()/,number:/\b(?:0b[01]+|0x(?:[\da-f]*\.)?[\da-fp\-]+|(?:\d+(?:\.\d+)?|\.\d+)(?:e\d+)?[df]|(?:\d+(?:\.\d+)?|\.\d+))\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,lookbehind:!0},variable:/\$(?!\d)\w+\b/})}var l=s({__proto__:null,default:a},[a]);export{l as q};
//# sourceMappingURL=qore.10eff6ba.js.map