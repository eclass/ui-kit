import{R as y}from"./index.75ce3a4a.js";var m={exports:{}},R="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",C=R,k=C;function _(){}function v(){}v.resetWarningCache=_;var x=function(){function t(n,r,a,i,l,s){if(s!==k){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:v,resetWarningCache:_};return o.PropTypes=o,o};m.exports=x();var f=m.exports,j=globalThis&&globalThis.__extends||function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)r.hasOwnProperty(a)&&(n[a]=r[a])},t(e,o)};return function(e,o){t(e,o);function n(){this.constructor=e}e.prototype=o===null?Object.create(o):(n.prototype=o.prototype,new n)}}(),p=globalThis&&globalThis.__assign||function(){return p=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},p.apply(this,arguments)},N=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o},E={position:"relative",display:"inline-flex",overflow:"hidden"},W=function(t){t===void 0&&(t={});var e;return e=function(o){j(n,o);function n(r){var a=o.call(this,r)||this;return a.timer=0,a.onClick=function(i){var l=a.props,s=l.during,c=l.onClick,d=l.color;i.stopPropagation();var b=i.pageX,T=i.pageY,O=i.currentTarget,u=O.getBoundingClientRect(),S=b-(u.left+window.scrollX),P=T-(u.top+window.scrollY),w=Math.max(u.width,u.height);a.setState(function(g){return{rippleStyle:p({},g.rippleStyle,{left:S,top:P,opacity:1,transform:"translate(-50%, -50%)",transition:"initial",backgroundColor:d})}},function(){a.timer=setTimeout(function(){a.setState(function(g){return{rippleStyle:p({},g.rippleStyle,{opacity:0,transform:"scale("+w/9+")",transition:"all "+s+"ms"})}})},50)}),c&&c(i)},a.state={rippleStyle:{position:"absolute",borderRadius:"50%",opacity:0,width:35,height:35,transform:"translate(-50%, -50%)",pointerEvents:"none"}},a}return n.prototype.componentWillUnmount=function(){clearTimeout(this.timer)},n.prototype.render=function(){var r=this.props,a=r.children;r.during,r.color,r.onClick;var i=r.className,l=N(r,["children","during","color","onClick","className"]),s=this.state.rippleStyle;return y.createElement("div",p({},l,{className:("react-ripples "+i).trim(),style:E,onClick:this.onClick}),a,y.createElement("s",{style:s}))},n}(y.PureComponent),e.displayName="Ripples",e.propTypes={during:f.number,color:f.string,onClick:f.func,className:f.string},e.defaultProps=p({during:600,color:"rgba(0, 0, 0, .3)",className:"",onClick:function(){}},t),e},h=globalThis&&globalThis.__assign||function(){return h=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},h.apply(this,arguments)},I=function(t){return function(e){return y.createElement(t,h({},e))}},Y=I(W());export{Y as R};
//# sourceMappingURL=index.6edeb9dd.js.map
