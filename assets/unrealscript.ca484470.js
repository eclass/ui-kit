function s(e,i){return i.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(r){if(r!=="default"&&!(r in e)){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o=a;a.displayName="unrealscript";a.aliases=["uc","uscript"];function a(e){e.languages.unrealscript={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},category:{pattern:/(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,lookbehind:!0,greedy:!0,alias:"property"},metadata:{pattern:/(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,lookbehind:!0,greedy:!0,inside:{property:/\b\w+(?=\s*=)/,operator:/=/,punctuation:/[<>|]/}},macro:{pattern:/`\w+/,alias:"property"},"class-name":{pattern:/(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,lookbehind:!0},keyword:/\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/>>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:ClockwiseFrom|Cross|Dot)\b/,punctuation:/[()[\]{};,.]/},e.languages.uc=e.languages.uscript=e.languages.unrealscript}var c=s({__proto__:null,default:o},[o]);export{c as u};
//# sourceMappingURL=unrealscript.ca484470.js.map
