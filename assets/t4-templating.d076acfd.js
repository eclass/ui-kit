function l(r,s){return s.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(a){if(a!=="default"&&!(a in r)){var t=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(r,a,t.get?t:{enumerable:!0,get:function(){return e[a]}})}})}),Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var c=o;o.displayName="t4Templating";o.aliases=[];function o(r){(function(s){function e(t,n,i){return{pattern:RegExp("<#"+t+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+t+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:n,alias:i}}}}function a(t){var n=s.languages[t],i="language-"+t;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:e("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:e("=",n,i),"class-feature":e("\\+",n,i),standard:e("",n,i)}}}}s.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:a})})(r)}var u=l({__proto__:null,default:c},[c]);export{c as a,u as t};
//# sourceMappingURL=t4-templating.d076acfd.js.map