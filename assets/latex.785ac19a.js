function s(n,t){return t.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(a){if(a!=="default"&&!(a in n)){var i=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(n,a,i.get?i:{enumerable:!0,get:function(){return e[a]}})}})}),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var l=r;r.displayName="latex";r.aliases=["tex","context"];function r(n){(function(t){var e=/\\(?:[^a-z()[\]]|[a-z*]+)/i,a={"equation-command":{pattern:e,alias:"regex"}};t.languages.latex={comment:/%.*/,cdata:{pattern:/(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:a,alias:"string"},{pattern:/(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:a,alias:"string"}],keyword:{pattern:/(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0,alias:"class-name"},function:{pattern:e,alias:"selector"},punctuation:/[[\]{}&]/},t.languages.tex=t.languages.latex,t.languages.context=t.languages.latex})(n)}var u=s({__proto__:null,default:l},[l]);export{u as l};
//# sourceMappingURL=latex.785ac19a.js.map
