function c(r,i){return i.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(t){if(t!=="default"&&!(t in r)){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})}),Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o=a;a.displayName="r";a.aliases=[];function a(r){r.languages.r={comment:/#.*/,string:{pattern:/(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"percent-operator":{pattern:/%[^%\s]*%/,alias:"operator"},boolean:/\b(?:FALSE|TRUE)\b/,ellipsis:/\.\.(?:\.|\d+)/,number:[/\b(?:Inf|NaN)\b/,/(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],keyword:/\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,operator:/->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,punctuation:/[(){}\[\],;]/}}var p=c({__proto__:null,default:o},[o]);export{p as r};
//# sourceMappingURL=r.2009dc3e.js.map
