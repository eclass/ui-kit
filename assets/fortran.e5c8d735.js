function L(r,N){return N.forEach(function(E){E&&typeof E!="string"&&!Array.isArray(E)&&Object.keys(E).forEach(function(e){if(e!=="default"&&!(e in r)){var n=Object.getOwnPropertyDescriptor(E,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return E[e]}})}})}),Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var T=t;t.displayName="fortran";t.aliases=[];function t(r){r.languages.fortran={"quoted-number":{pattern:/[BOZ](['"])[A-F0-9]+\1/i,alias:"number"},string:{pattern:/(?:\b\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:[ \t]*!.*(?:\r\n?|\n)|(?![ \t]*!))|(?!\1).)*(?:\1|&)/,inside:{comment:{pattern:/(&(?:\r\n?|\n)\s*)!.*/,lookbehind:!0}}},comment:{pattern:/!.*/,greedy:!0},boolean:/\.(?:FALSE|TRUE)\.(?:_\w+)?/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,keyword:[/\b(?:CHARACTER|COMPLEX|DOUBLE ?PRECISION|INTEGER|LOGICAL|REAL)\b/i,/\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,/\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,/\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEIF|ELSEWHERE|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i],operator:[/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.[A-Z]+\./i,{pattern:/(^|(?!\().)\/(?!\))/,lookbehind:!0}],punctuation:/\(\/|\/\)|[(),;:&]/}}var O=L({__proto__:null,default:T},[T]);export{O as f};
//# sourceMappingURL=fortran.e5c8d735.js.map