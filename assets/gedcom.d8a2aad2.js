function l(t,i){return i.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(r){if(r!=="default"&&!(r in t)){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o=a;a.displayName="gedcom";a.aliases=[];function a(t){t.languages.gedcom={"line-value":{pattern:/(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,lookbehind:!0,inside:{pointer:{pattern:/^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,alias:"variable"}}},tag:{pattern:/(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,lookbehind:!0,alias:"string"},level:{pattern:/(^[\t ]*)\d+/m,lookbehind:!0,alias:"number"},pointer:{pattern:/@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,alias:"variable"}}}var u=l({__proto__:null,default:o},[o]);export{u as g};
//# sourceMappingURL=gedcom.d8a2aad2.js.map
