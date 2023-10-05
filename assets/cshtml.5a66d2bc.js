import{a as b}from"./csharp.05ea41bd.js";function w(c,e){return e.forEach(function(s){s&&typeof s!="string"&&!Array.isArray(s)&&Object.keys(s).forEach(function(t){if(t!=="default"&&!(t in c)){var o=Object.getOwnPropertyDescriptor(s,t);Object.defineProperty(c,t,o.get?o:{enumerable:!0,get:function(){return s[t]}})}})}),Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var k=b,f=g;g.displayName="cshtml";g.aliases=["razor"];function g(c){c.register(k),function(e){var s=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,t=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function o(u,y){for(var p=0;p<y;p++)u=u.replace(/<self>/g,function(){return"(?:"+u+")"});return u.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+t+")").replace(/<comment>/g,"(?:"+s+")")}var a=o(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),d=o(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,2),r=o(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),h=o(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source,2),n=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source,l=/(?!\d)[^\s>\/=$<%]+/.source+n+/\s*\/?>/.source,m=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+n+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+l+"|"+o(/<\1/.source+n+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+l+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+l+")";e.languages.cshtml=e.languages.extend("markup",{});var v=e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(m),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})}),i={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:v};e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[r,/(?:code|functions)\s*/.source+r,/(?:for|foreach|lock|switch|using|while)\s*/.source+a+/\s*/.source+r,/do\s*/.source+r+/\s*while\s*/.source+a+/(?:\s*;)?/.source,/try\s*/.source+r+/\s*catch\s*/.source+a+/\s*/.source+r+/\s*finally\s*/.source+r,/if\s*/.source+a+/\s*/.source+r+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+a+")?"+/\s*/.source+r+")*"].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:i}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:i}},value:{pattern:RegExp(/(^|[^@])@/.source+/(?:await\b\s*)?/.source+"(?:"+/\w+\b/.source+"|"+a+")(?:"+/[?!]?\.\w+\b/.source+"|"+a+"|"+d+"|"+h+a+")*"),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:i}},"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml}(c)}var j=w({__proto__:null,default:f},[f]);export{j as c};
//# sourceMappingURL=cshtml.5a66d2bc.js.map
