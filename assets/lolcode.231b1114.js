function l(t,I){return I.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(r){if(r!=="default"&&!(r in t)){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a=o;o.displayName="lolcode";o.aliases=[];function o(t){t.languages.lolcode={comment:[/\bOBTW\s[\s\S]*?\sTLDR\b/,/\bBTW.+/],string:{pattern:/"(?::.|[^":])*"/,inside:{variable:/:\{[^}]+\}/,symbol:[/:\([a-f\d]+\)/i,/:\[[^\]]+\]/,/:[)>o":]/]},greedy:!0},number:/(?:\B-)?(?:\b\d+(?:\.\d*)?|\B\.\d+)/,symbol:{pattern:/(^|\s)(?:A )?(?:BUKKIT|NOOB|NUMBAR|NUMBR|TROOF|YARN)(?=\s|,|$)/,lookbehind:!0,inside:{keyword:/A(?=\s)/}},label:{pattern:/((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,lookbehind:!0,alias:"string"},function:{pattern:/((?:^|\s)(?:HOW IZ I|I IZ|IZ) )[a-zA-Z]\w*/,lookbehind:!0},keyword:[{pattern:/(^|\s)(?:AN|FOUND YR|GIMMEH|GTFO|HAI|HAS A|HOW IZ I|I HAS A|I IZ|IF U SAY SO|IM IN YR|IM OUTTA YR|IS NOW(?: A)?|ITZ(?: A)?|IZ|KTHX|KTHXBYE|LIEK(?: A)?|MAEK|MEBBE|MKAY|NERFIN|NO WAI|O HAI IM|O RLY\?|OIC|OMG|OMGWTF|R|SMOOSH|SRS|TIL|UPPIN|VISIBLE|WILE|WTF\?|YA RLY|YR)(?=\s|,|$)/,lookbehind:!0},/'Z(?=\s|,|$)/],boolean:{pattern:/(^|\s)(?:FAIL|WIN)(?=\s|,|$)/,lookbehind:!0},variable:{pattern:/(^|\s)IT(?=\s|,|$)/,lookbehind:!0},operator:{pattern:/(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:ALL|ANY|BIGGR|BOTH|DIFF|EITHER|MOD|PRODUKT|QUOSHUNT|SMALLR|SUM|WON) OF)(?=\s|,|$)/,lookbehind:!0},punctuation:/\.{3}|…|,|!/}}var s=l({__proto__:null,default:a},[a]);export{s as l};
//# sourceMappingURL=lolcode.231b1114.js.map