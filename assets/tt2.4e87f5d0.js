import{a as u}from"./markup-templating.f3431fb4.js";function g(r,t){return t.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(a){if(a!=="default"&&!(a in r)){var o=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(r,a,o.get?o:{enumerable:!0,get:function(){return e[a]}})}})}),Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var l=u,i=n;n.displayName="tt2";n.aliases=[];function n(r){r.register(l),function(t){t.languages.tt2=t.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),t.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,variable:{pattern:/\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i}}),t.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%\]$/,alias:"punctuation"}}),t.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete t.languages.tt2.string,t.hooks.add("before-tokenize",function(e){var a=/\[%[\s\S]+?%\]/g;t.languages["markup-templating"].buildPlaceholders(e,"tt2",a)}),t.hooks.add("after-tokenize",function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"tt2")})}(r)}var d=g({__proto__:null,default:i},[i]);export{d as t};
//# sourceMappingURL=tt2.4e87f5d0.js.map