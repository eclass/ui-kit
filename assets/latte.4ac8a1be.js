import{a as p}from"./markup-templating.f3431fb4.js";import{a as i}from"./php.f7f1eb35.js";function u(r,t){return t.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(a){if(a!=="default"&&!(a in r)){var n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(r,a,n.get?n:{enumerable:!0,get:function(){return e[a]}})}})}),Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s=p,g=i,o=l;l.displayName="latte";l.aliases=[];function l(r){r.register(s),r.register(g),function(t){t.languages.latte={comment:/^\{\*[\s\S]*/,"latte-tag":{pattern:/(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,lookbehind:!0,alias:"important"},delimiter:{pattern:/^\{\/?|\}$/,alias:"punctuation"},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:t.languages.php}};var e=t.languages.extend("markup",{});t.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:t.languages.php}}}}}},e.tag),t.hooks.add("before-tokenize",function(a){if(a.language==="latte"){var n=/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;t.languages["markup-templating"].buildPlaceholders(a,"latte",n),a.grammar=e}}),t.hooks.add("after-tokenize",function(a){t.languages["markup-templating"].tokenizePlaceholders(a,"latte")})}(r)}var d=u({__proto__:null,default:o},[o]);export{d as l};
//# sourceMappingURL=latte.4ac8a1be.js.map