function a(t,s){return s.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(r){if(r!=="default"&&!(r in t)){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o=i;i.displayName="mizar";i.aliases=[];function i(t){t.languages.mizar={comment:/::.+/,keyword:/@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|end|environ|equals|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:ies|y)|when|where|with|wrt)\b/,parameter:{pattern:/\$(?:10|\d)/,alias:"variable"},variable:/\b\w+(?=:)/,number:/(?:\b|-)\d+\b/,operator:/\.\.\.|->|&|\.?=/,punctuation:/\(#|#\)|[,:;\[\](){}]/}}var c=a({__proto__:null,default:o},[o]);export{c as m};
//# sourceMappingURL=mizar.f7ddc7dd.js.map