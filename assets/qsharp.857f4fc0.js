function w(t,a){return a.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(e){if(e!=="default"&&!(e in t)){var s=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,s.get?s:{enumerable:!0,get:function(){return r[e]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var f=u;u.displayName="qsharp";u.aliases=["qs"];function u(t){(function(a){function r(n,o){return n.replace(/<<(\d+)>>/g,function(i,q){return"(?:"+o[+q]+")"})}function e(n,o,i){return RegExp(r(n,o),i||"")}function s(n,o){for(var i=0;i<o;i++)n=n.replace(/<<self>>/g,function(){return"(?:"+n+")"});return n.replace(/<<self>>/g,"[^\\s\\S]")}var l={type:"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero",other:"Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within"};function y(n){return"\\b(?:"+n.trim().replace(/ /g,"|")+")\\b"}var p=RegExp(y(l.type+" "+l.other)),h=/\b[A-Za-z_]\w*\b/.source,c=r(/<<0>>(?:\s*\.\s*<<0>>)*/.source,[h]),g={keyword:p,punctuation:/[<>()?,.:[\]]/},d=/"(?:\\.|[^\\"])*"/.source;a.languages.qsharp=a.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[d]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source,[c]),lookbehind:!0,inside:g},{pattern:e(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source,[c]),lookbehind:!0,inside:g}],keyword:p,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),a.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var b=s(r(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source,[d]),2);a.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:e(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source,[b]),greedy:!0,inside:{interpolation:{pattern:e(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source,[b]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:a.languages.qsharp}}},string:/[\s\S]+/}}})})(t),t.languages.qs=t.languages.qsharp}var v=w({__proto__:null,default:f},[f]);export{v as q};
//# sourceMappingURL=qsharp.857f4fc0.js.map