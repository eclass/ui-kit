import{r as h,x as Ie,g as Pe,m as St,n as Bt,o as $t,y as jt,z as Lt,A as Wt,D as Mt,E as zt,P as It,G as Nt,I as Ht,J as ot,K as xe,L as Ft,a as j,v as nt,j as Me,F as Vt,M as _t,b as at,C as ze,c as qt}from"./index.e8e91e45.js";import{L as Ut}from"./ListComponent.f01bed35.js";import{V as Xt,B as ue}from"./BtnLink.ea8f5663.js";import{m as Yt,A as Kt}from"./index.f382bce5.js";import"./Close.579e1288.js";var F="top",Y="bottom",K="right",V="left",Fe="auto",De=[F,Y,K,V],me="start",Ee="end",Gt="clippingParents",wt="viewport",Oe="popper",Jt="reference",it=De.reduce(function(t,e){return t.concat([e+"-"+me,e+"-"+Ee])},[]),yt=[].concat(De,[Fe]).reduce(function(t,e){return t.concat([e,e+"-"+me,e+"-"+Ee])},[]),Qt="beforeRead",Zt="read",er="afterRead",tr="beforeMain",rr="main",or="afterMain",nr="beforeWrite",ar="write",ir="afterWrite",sr=[Qt,Zt,er,tr,rr,or,nr,ar,ir];function re(t){return t?(t.nodeName||"").toLowerCase():null}function U(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ce(t){var e=U(t).Element;return t instanceof e||t instanceof Element}function X(t){var e=U(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ve(t){if(typeof ShadowRoot=="undefined")return!1;var e=U(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function lr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},n=e.attributes[r]||{},a=e.elements[r];!X(a)||!re(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(p){var i=n[p];i===!1?a.removeAttribute(p):a.setAttribute(p,i===!0?"":i)}))})}function pr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var n=e.elements[o],a=e.attributes[o]||{},p=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),i=p.reduce(function(s,f){return s[f]="",s},{});!X(n)||!re(n)||(Object.assign(n.style,i),Object.keys(a).forEach(function(s){n.removeAttribute(s)}))})}}var fr={name:"applyStyles",enabled:!0,phase:"write",fn:lr,effect:pr,requires:["computeStyles"]};function te(t){return t.split("-")[0]}var fe=Math.max,$e=Math.min,he=Math.round;function Ne(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function bt(){return!/^((?!chrome|android).)*safari/i.test(Ne())}function ge(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),n=1,a=1;e&&X(t)&&(n=t.offsetWidth>0&&he(o.width)/t.offsetWidth||1,a=t.offsetHeight>0&&he(o.height)/t.offsetHeight||1);var p=ce(t)?U(t):window,i=p.visualViewport,s=!bt()&&r,f=(o.left+(s&&i?i.offsetLeft:0))/n,l=(o.top+(s&&i?i.offsetTop:0))/a,w=o.width/n,y=o.height/a;return{width:w,height:y,top:l,right:f+w,bottom:l+y,left:f,x:f,y:l}}function _e(t){var e=ge(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function xt(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Ve(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ne(t){return U(t).getComputedStyle(t)}function cr(t){return["table","td","th"].indexOf(re(t))>=0}function se(t){return((ce(t)?t.ownerDocument:t.document)||window.document).documentElement}function je(t){return re(t)==="html"?t:t.assignedSlot||t.parentNode||(Ve(t)?t.host:null)||se(t)}function st(t){return!X(t)||ne(t).position==="fixed"?null:t.offsetParent}function ur(t){var e=/firefox/i.test(Ne()),r=/Trident/i.test(Ne());if(r&&X(t)){var o=ne(t);if(o.position==="fixed")return null}var n=je(t);for(Ve(n)&&(n=n.host);X(n)&&["html","body"].indexOf(re(n))<0;){var a=ne(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function Re(t){for(var e=U(t),r=st(t);r&&cr(r)&&ne(r).position==="static";)r=st(r);return r&&(re(r)==="html"||re(r)==="body"&&ne(r).position==="static")?e:r||ur(t)||e}function qe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ce(t,e,r){return fe(t,$e(e,r))}function dr(t,e,r){var o=Ce(t,e,r);return o>r?r:o}function Ot(){return{top:0,right:0,bottom:0,left:0}}function Pt(t){return Object.assign({},Ot(),t)}function Ct(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var vr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,Pt(typeof e!="number"?e:Ct(e,De))};function mr(t){var e,r=t.state,o=t.name,n=t.options,a=r.elements.arrow,p=r.modifiersData.popperOffsets,i=te(r.placement),s=qe(i),f=[V,K].indexOf(i)>=0,l=f?"height":"width";if(!(!a||!p)){var w=vr(n.padding,r),y=_e(a),c=s==="y"?F:V,P=s==="y"?Y:K,v=r.rects.reference[l]+r.rects.reference[s]-p[s]-r.rects.popper[l],d=p[s]-r.rects.reference[s],b=Re(a),C=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,x=v/2-d/2,u=w[c],g=C-y[l]-w[P],m=C/2-y[l]/2+x,E=Ce(u,m,g),k=s;r.modifiersData[o]=(e={},e[k]=E,e.centerOffset=E-m,e)}}function hr(t){var e=t.state,r=t.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!xt(e.elements.popper,n)||(e.elements.arrow=n))}var gr={name:"arrow",enabled:!0,phase:"main",fn:mr,effect:hr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function we(t){return t.split("-")[1]}var wr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function yr(t,e){var r=t.x,o=t.y,n=e.devicePixelRatio||1;return{x:he(r*n)/n||0,y:he(o*n)/n||0}}function lt(t){var e,r=t.popper,o=t.popperRect,n=t.placement,a=t.variation,p=t.offsets,i=t.position,s=t.gpuAcceleration,f=t.adaptive,l=t.roundOffsets,w=t.isFixed,y=p.x,c=y===void 0?0:y,P=p.y,v=P===void 0?0:P,d=typeof l=="function"?l({x:c,y:v}):{x:c,y:v};c=d.x,v=d.y;var b=p.hasOwnProperty("x"),C=p.hasOwnProperty("y"),x=V,u=F,g=window;if(f){var m=Re(r),E="clientHeight",k="clientWidth";if(m===U(r)&&(m=se(r),ne(m).position!=="static"&&i==="absolute"&&(E="scrollHeight",k="scrollWidth")),m=m,n===F||(n===V||n===K)&&a===Ee){u=Y;var R=w&&m===g&&g.visualViewport?g.visualViewport.height:m[E];v-=R-o.height,v*=s?1:-1}if(n===V||(n===F||n===Y)&&a===Ee){x=K;var T=w&&m===g&&g.visualViewport?g.visualViewport.width:m[k];c-=T-o.width,c*=s?1:-1}}var D=Object.assign({position:i},f&&wr),$=l===!0?yr({x:c,y:v},U(r)):{x:c,y:v};if(c=$.x,v=$.y,s){var S;return Object.assign({},D,(S={},S[u]=C?"0":"",S[x]=b?"0":"",S.transform=(g.devicePixelRatio||1)<=1?"translate("+c+"px, "+v+"px)":"translate3d("+c+"px, "+v+"px, 0)",S))}return Object.assign({},D,(e={},e[u]=C?v+"px":"",e[x]=b?c+"px":"",e.transform="",e))}function br(t){var e=t.state,r=t.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,p=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,f={placement:te(e.placement),variation:we(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,lt(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:p,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,lt(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var xr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:br,data:{}},Se={passive:!0};function Or(t){var e=t.state,r=t.instance,o=t.options,n=o.scroll,a=n===void 0?!0:n,p=o.resize,i=p===void 0?!0:p,s=U(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&f.forEach(function(l){l.addEventListener("scroll",r.update,Se)}),i&&s.addEventListener("resize",r.update,Se),function(){a&&f.forEach(function(l){l.removeEventListener("scroll",r.update,Se)}),i&&s.removeEventListener("resize",r.update,Se)}}var Pr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Or,data:{}},Cr={left:"right",right:"left",bottom:"top",top:"bottom"};function Be(t){return t.replace(/left|right|bottom|top/g,function(e){return Cr[e]})}var Ar={start:"end",end:"start"};function pt(t){return t.replace(/start|end/g,function(e){return Ar[e]})}function Ue(t){var e=U(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Xe(t){return ge(se(t)).left+Ue(t).scrollLeft}function Er(t,e){var r=U(t),o=se(t),n=r.visualViewport,a=o.clientWidth,p=o.clientHeight,i=0,s=0;if(n){a=n.width,p=n.height;var f=bt();(f||!f&&e==="fixed")&&(i=n.offsetLeft,s=n.offsetTop)}return{width:a,height:p,x:i+Xe(t),y:s}}function Tr(t){var e,r=se(t),o=Ue(t),n=(e=t.ownerDocument)==null?void 0:e.body,a=fe(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=fe(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),i=-o.scrollLeft+Xe(t),s=-o.scrollTop;return ne(n||r).direction==="rtl"&&(i+=fe(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:p,x:i,y:s}}function Ye(t){var e=ne(t),r=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function At(t){return["html","body","#document"].indexOf(re(t))>=0?t.ownerDocument.body:X(t)&&Ye(t)?t:At(je(t))}function Ae(t,e){var r;e===void 0&&(e=[]);var o=At(t),n=o===((r=t.ownerDocument)==null?void 0:r.body),a=U(o),p=n?[a].concat(a.visualViewport||[],Ye(o)?o:[]):o,i=e.concat(p);return n?i:i.concat(Ae(je(p)))}function He(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Dr(t,e){var r=ge(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function ft(t,e,r){return e===wt?He(Er(t,r)):ce(e)?Dr(e,r):He(Tr(se(t)))}function Rr(t){var e=Ae(je(t)),r=["absolute","fixed"].indexOf(ne(t).position)>=0,o=r&&X(t)?Re(t):t;return ce(o)?e.filter(function(n){return ce(n)&&xt(n,o)&&re(n)!=="body"}):[]}function kr(t,e,r,o){var n=e==="clippingParents"?Rr(t):[].concat(e),a=[].concat(n,[r]),p=a[0],i=a.reduce(function(s,f){var l=ft(t,f,o);return s.top=fe(l.top,s.top),s.right=$e(l.right,s.right),s.bottom=$e(l.bottom,s.bottom),s.left=fe(l.left,s.left),s},ft(t,p,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Et(t){var e=t.reference,r=t.element,o=t.placement,n=o?te(o):null,a=o?we(o):null,p=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(n){case F:s={x:p,y:e.y-r.height};break;case Y:s={x:p,y:e.y+e.height};break;case K:s={x:e.x+e.width,y:i};break;case V:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var f=n?qe(n):null;if(f!=null){var l=f==="y"?"height":"width";switch(a){case me:s[f]=s[f]-(e[l]/2-r[l]/2);break;case Ee:s[f]=s[f]+(e[l]/2-r[l]/2);break}}return s}function Te(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=o===void 0?t.placement:o,a=r.strategy,p=a===void 0?t.strategy:a,i=r.boundary,s=i===void 0?Gt:i,f=r.rootBoundary,l=f===void 0?wt:f,w=r.elementContext,y=w===void 0?Oe:w,c=r.altBoundary,P=c===void 0?!1:c,v=r.padding,d=v===void 0?0:v,b=Pt(typeof d!="number"?d:Ct(d,De)),C=y===Oe?Jt:Oe,x=t.rects.popper,u=t.elements[P?C:y],g=kr(ce(u)?u:u.contextElement||se(t.elements.popper),s,l,p),m=ge(t.elements.reference),E=Et({reference:m,element:x,strategy:"absolute",placement:n}),k=He(Object.assign({},x,E)),R=y===Oe?k:m,T={top:g.top-R.top+b.top,bottom:R.bottom-g.bottom+b.bottom,left:g.left-R.left+b.left,right:R.right-g.right+b.right},D=t.modifiersData.offset;if(y===Oe&&D){var $=D[n];Object.keys(T).forEach(function(S){var N=[K,Y].indexOf(S)>=0?1:-1,I=[F,Y].indexOf(S)>=0?"y":"x";T[S]+=$[I]*N})}return T}function Sr(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=r.boundary,a=r.rootBoundary,p=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,f=s===void 0?yt:s,l=we(o),w=l?i?it:it.filter(function(P){return we(P)===l}):De,y=w.filter(function(P){return f.indexOf(P)>=0});y.length===0&&(y=w);var c=y.reduce(function(P,v){return P[v]=Te(t,{placement:v,boundary:n,rootBoundary:a,padding:p})[te(v)],P},{});return Object.keys(c).sort(function(P,v){return c[P]-c[v]})}function Br(t){if(te(t)===Fe)return[];var e=Be(t);return[pt(t),e,pt(e)]}function $r(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,p=r.altAxis,i=p===void 0?!0:p,s=r.fallbackPlacements,f=r.padding,l=r.boundary,w=r.rootBoundary,y=r.altBoundary,c=r.flipVariations,P=c===void 0?!0:c,v=r.allowedAutoPlacements,d=e.options.placement,b=te(d),C=b===d,x=s||(C||!P?[Be(d)]:Br(d)),u=[d].concat(x).reduce(function(q,L){return q.concat(te(L)===Fe?Sr(e,{placement:L,boundary:l,rootBoundary:w,padding:f,flipVariations:P,allowedAutoPlacements:v}):L)},[]),g=e.rects.reference,m=e.rects.popper,E=new Map,k=!0,R=u[0],T=0;T<u.length;T++){var D=u[T],$=te(D),S=we(D)===me,N=[F,Y].indexOf($)>=0,I=N?"width":"height",W=Te(e,{placement:D,boundary:l,rootBoundary:w,altBoundary:y,padding:f}),M=N?S?K:V:S?Y:F;g[I]>m[I]&&(M=Be(M));var ae=Be(M),G=[];if(a&&G.push(W[$]<=0),i&&G.push(W[M]<=0,W[ae]<=0),G.every(function(q){return q})){R=D,k=!1;break}E.set(D,G)}if(k)for(var J=P?3:1,O=function(L){var ie=u.find(function(le){var oe=E.get(le);if(oe)return oe.slice(0,L).every(function(ye){return ye})});if(ie)return R=ie,"break"},A=J;A>0;A--){var _=O(A);if(_==="break")break}e.placement!==R&&(e.modifiersData[o]._skip=!0,e.placement=R,e.reset=!0)}}var jr={name:"flip",enabled:!0,phase:"main",fn:$r,requiresIfExists:["offset"],data:{_skip:!1}};function ct(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function ut(t){return[F,K,Y,V].some(function(e){return t[e]>=0})}function Lr(t){var e=t.state,r=t.name,o=e.rects.reference,n=e.rects.popper,a=e.modifiersData.preventOverflow,p=Te(e,{elementContext:"reference"}),i=Te(e,{altBoundary:!0}),s=ct(p,o),f=ct(i,n,a),l=ut(s),w=ut(f);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:w},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":w})}var Wr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Lr};function Mr(t,e,r){var o=te(t),n=[V,F].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,p=a[0],i=a[1];return p=p||0,i=(i||0)*n,[V,K].indexOf(o)>=0?{x:i,y:p}:{x:p,y:i}}function zr(t){var e=t.state,r=t.options,o=t.name,n=r.offset,a=n===void 0?[0,0]:n,p=yt.reduce(function(l,w){return l[w]=Mr(w,e.rects,a),l},{}),i=p[e.placement],s=i.x,f=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=f),e.modifiersData[o]=p}var Ir={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:zr};function Nr(t){var e=t.state,r=t.name;e.modifiersData[r]=Et({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Hr={name:"popperOffsets",enabled:!0,phase:"read",fn:Nr,data:{}};function Fr(t){return t==="x"?"y":"x"}function Vr(t){var e=t.state,r=t.options,o=t.name,n=r.mainAxis,a=n===void 0?!0:n,p=r.altAxis,i=p===void 0?!1:p,s=r.boundary,f=r.rootBoundary,l=r.altBoundary,w=r.padding,y=r.tether,c=y===void 0?!0:y,P=r.tetherOffset,v=P===void 0?0:P,d=Te(e,{boundary:s,rootBoundary:f,padding:w,altBoundary:l}),b=te(e.placement),C=we(e.placement),x=!C,u=qe(b),g=Fr(u),m=e.modifiersData.popperOffsets,E=e.rects.reference,k=e.rects.popper,R=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,T=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,$={x:0,y:0};if(!!m){if(a){var S,N=u==="y"?F:V,I=u==="y"?Y:K,W=u==="y"?"height":"width",M=m[u],ae=M+d[N],G=M-d[I],J=c?-k[W]/2:0,O=C===me?E[W]:k[W],A=C===me?-k[W]:-E[W],_=e.elements.arrow,q=c&&_?_e(_):{width:0,height:0},L=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ot(),ie=L[N],le=L[I],oe=Ce(0,E[W],q[W]),ye=x?E[W]/2-J-oe-ie-T.mainAxis:O-oe-ie-T.mainAxis,Le=x?-E[W]/2+J+oe+le+T.mainAxis:A+oe+le+T.mainAxis,be=e.elements.arrow&&Re(e.elements.arrow),B=be?u==="y"?be.clientTop||0:be.clientLeft||0:0,H=(S=D==null?void 0:D[u])!=null?S:0,ee=M+ye-H-B,Dt=M+Le-H,Ke=Ce(c?$e(ae,ee):ae,M,c?fe(G,Dt):G);m[u]=Ke,$[u]=Ke-M}if(i){var Ge,Rt=u==="x"?F:V,kt=u==="x"?Y:K,pe=m[g],ke=g==="y"?"height":"width",Je=pe+d[Rt],Qe=pe-d[kt],We=[F,V].indexOf(b)!==-1,Ze=(Ge=D==null?void 0:D[g])!=null?Ge:0,et=We?Je:pe-E[ke]-k[ke]-Ze+T.altAxis,tt=We?pe+E[ke]+k[ke]-Ze-T.altAxis:Qe,rt=c&&We?dr(et,pe,tt):Ce(c?et:Je,pe,c?tt:Qe);m[g]=rt,$[g]=rt-pe}e.modifiersData[o]=$}}var _r={name:"preventOverflow",enabled:!0,phase:"main",fn:Vr,requiresIfExists:["offset"]};function qr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Ur(t){return t===U(t)||!X(t)?Ue(t):qr(t)}function Xr(t){var e=t.getBoundingClientRect(),r=he(e.width)/t.offsetWidth||1,o=he(e.height)/t.offsetHeight||1;return r!==1||o!==1}function Yr(t,e,r){r===void 0&&(r=!1);var o=X(e),n=X(e)&&Xr(e),a=se(e),p=ge(t,n,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((re(e)!=="body"||Ye(a))&&(i=Ur(e)),X(e)?(s=ge(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):a&&(s.x=Xe(a))),{x:p.left+i.scrollLeft-s.x,y:p.top+i.scrollTop-s.y,width:p.width,height:p.height}}function Kr(t){var e=new Map,r=new Set,o=[];t.forEach(function(a){e.set(a.name,a)});function n(a){r.add(a.name);var p=[].concat(a.requires||[],a.requiresIfExists||[]);p.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&n(s)}}),o.push(a)}return t.forEach(function(a){r.has(a.name)||n(a)}),o}function Gr(t){var e=Kr(t);return sr.reduce(function(r,o){return r.concat(e.filter(function(n){return n.phase===o}))},[])}function Jr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Qr(t){var e=t.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var dt={placement:"bottom",modifiers:[],strategy:"absolute"};function vt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Zr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,n=e.defaultOptions,a=n===void 0?dt:n;return function(i,s,f){f===void 0&&(f=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},dt,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},w=[],y=!1,c={state:l,setOptions:function(b){var C=typeof b=="function"?b(l.options):b;v(),l.options=Object.assign({},a,l.options,C),l.scrollParents={reference:ce(i)?Ae(i):i.contextElement?Ae(i.contextElement):[],popper:Ae(s)};var x=Gr(Qr([].concat(o,l.options.modifiers)));return l.orderedModifiers=x.filter(function(u){return u.enabled}),P(),c.update()},forceUpdate:function(){if(!y){var b=l.elements,C=b.reference,x=b.popper;if(!!vt(C,x)){l.rects={reference:Yr(C,Re(x),l.options.strategy==="fixed"),popper:_e(x)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(T){return l.modifiersData[T.name]=Object.assign({},T.data)});for(var u=0;u<l.orderedModifiers.length;u++){if(l.reset===!0){l.reset=!1,u=-1;continue}var g=l.orderedModifiers[u],m=g.fn,E=g.options,k=E===void 0?{}:E,R=g.name;typeof m=="function"&&(l=m({state:l,options:k,name:R,instance:c})||l)}}}},update:Jr(function(){return new Promise(function(d){c.forceUpdate(),d(l)})}),destroy:function(){v(),y=!0}};if(!vt(i,s))return c;c.setOptions(f).then(function(d){!y&&f.onFirstUpdate&&f.onFirstUpdate(d)});function P(){l.orderedModifiers.forEach(function(d){var b=d.name,C=d.options,x=C===void 0?{}:C,u=d.effect;if(typeof u=="function"){var g=u({state:l,name:b,instance:c,options:x}),m=function(){};w.push(g||m)}})}function v(){w.forEach(function(d){return d()}),w=[]}return c}}var eo=[Pr,Hr,xr,fr,Ir,jr,_r,gr,Wr],to=Zr({defaultModifiers:eo});function ro(t,e){if(t==null)return{};var r={},o=Object.keys(t),n,a;for(a=0;a<o.length;a++)n=o[a],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function Q(){return Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Q.apply(this,arguments)}var de=function(e,r){return{var:e,varRef:r?"var("+e+", "+r+")":"var("+e+")"}},z={arrowShadowColor:de("--popper-arrow-shadow-color"),arrowSize:de("--popper-arrow-size","8px"),arrowSizeHalf:de("--popper-arrow-size-half"),arrowBg:de("--popper-arrow-bg"),transformOrigin:de("--popper-transform-origin"),arrowOffset:de("--popper-arrow-offset")};function oo(t){if(t.includes("top"))return"1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(t.includes("bottom"))return"-1px -1px 1px 0 var(--popper-arrow-shadow-color)";if(t.includes("right"))return"-1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(t.includes("left"))return"1px -1px 1px 0 var(--popper-arrow-shadow-color)"}var no={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},ao=function(e){return no[e]},mt={scroll:!0,resize:!0};function io(t){var e;return typeof t=="object"?e={enabled:!0,options:Q({},mt,t)}:e={enabled:t,options:mt},e}var so={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var r=e.state;r.styles.popper.width=r.rects.reference.width+"px"},effect:function(e){var r=e.state;return function(){var o=r.elements.reference;r.elements.popper.style.width=o.offsetWidth+"px"}}},lo={name:"transformOrigin",enabled:!0,phase:"write",fn:function(e){var r=e.state;ht(r)},effect:function(e){var r=e.state;return function(){ht(r)}}},ht=function(e){e.elements.popper.style.setProperty(z.transformOrigin.var,ao(e.placement))},po={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:function(e){var r=e.state;fo(r)}},fo=function(e){var r;if(!!e.placement){var o=co(e.placement);if((r=e.elements)!=null&&r.arrow&&o){var n,a;Object.assign(e.elements.arrow.style,(n={},n[o.property]=o.value,n.width=z.arrowSize.varRef,n.height=z.arrowSize.varRef,n.zIndex=-1,n));var p=(a={},a[z.arrowSizeHalf.var]="calc("+z.arrowSize.varRef+" / 2)",a[z.arrowOffset.var]="calc("+z.arrowSizeHalf.varRef+" * -1)",a);for(var i in p)e.elements.arrow.style.setProperty(i,p[i])}}},co=function(e){if(e.startsWith("top"))return{property:"bottom",value:z.arrowOffset.varRef};if(e.startsWith("bottom"))return{property:"top",value:z.arrowOffset.varRef};if(e.startsWith("left"))return{property:"right",value:z.arrowOffset.varRef};if(e.startsWith("right"))return{property:"left",value:z.arrowOffset.varRef}},uo={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:function(e){var r=e.state;gt(r)},effect:function(e){var r=e.state;return function(){gt(r)}}},gt=function(e){if(!!e.elements.arrow){var r=e.elements.arrow.querySelector("[data-popper-arrow-inner]");!r||Object.assign(r.style,{transform:"rotate(45deg)",background:z.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:oo(e.placement)})}},vo={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},mo={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function ho(t,e){var r,o;e===void 0&&(e="ltr");var n=((r=vo[t])==null?void 0:r[e])||t;return e==="ltr"?n:(o=mo[t])!=null?o:n}var go=["size","shadowColor","bg","style"];function wo(t){t===void 0&&(t={});var e=t,r=e.enabled,o=r===void 0?!0:r,n=e.modifiers,a=e.placement,p=a===void 0?"bottom":a,i=e.strategy,s=i===void 0?"absolute":i,f=e.arrowPadding,l=f===void 0?8:f,w=e.eventListeners,y=w===void 0?!0:w,c=e.offset,P=e.gutter,v=P===void 0?8:P,d=e.flip,b=d===void 0?!0:d,C=e.boundary,x=C===void 0?"clippingParents":C,u=e.preventOverflow,g=u===void 0?!0:u,m=e.matchWidth,E=e.direction,k=E===void 0?"ltr":E,R=h.exports.useRef(null),T=h.exports.useRef(null),D=h.exports.useRef(null),$=ho(p,k),S=h.exports.useRef(function(){}),N=h.exports.useCallback(function(){!o||!R.current||!T.current||(S.current==null||S.current(),D.current=to(R.current,T.current,{placement:$,modifiers:[uo,po,lo,Q({},so,{enabled:!!m}),Q({name:"eventListeners"},io(y)),{name:"arrow",options:{padding:l}},{name:"offset",options:{offset:c!=null?c:[0,v]}},{name:"flip",enabled:!!b,options:{padding:8}},{name:"preventOverflow",enabled:!!g,options:{boundary:x}}].concat(n!=null?n:[]),strategy:s}),D.current.forceUpdate(),S.current=D.current.destroy)},[$,o,n,m,y,l,c,v,b,g,x,s]);h.exports.useEffect(function(){return function(){if(!R.current&&!T.current){var O;(O=D.current)==null||O.destroy(),D.current=null}}},[]);var I=h.exports.useCallback(function(O){R.current=O,N()},[N]),W=h.exports.useCallback(function(O,A){return O===void 0&&(O={}),A===void 0&&(A=null),Q({},O,{ref:Ie(I,A)})},[I]),M=h.exports.useCallback(function(O){T.current=O,N()},[N]),ae=h.exports.useCallback(function(O,A){return O===void 0&&(O={}),A===void 0&&(A=null),Q({},O,{ref:Ie(M,A),style:Q({},O.style,{position:s,minWidth:"max-content",inset:"0 auto auto 0"})})},[s,M]),G=h.exports.useCallback(function(O,A){O===void 0&&(O={}),A===void 0&&(A=null);var _=O;_.size,_.shadowColor,_.bg,_.style;var q=ro(_,go);return Q({},q,{ref:A,"data-popper-arrow":"",style:yo(O)})},[]),J=h.exports.useCallback(function(O,A){return O===void 0&&(O={}),A===void 0&&(A=null),Q({},O,{ref:A,"data-popper-arrow-inner":""})},[]);return{update:function(){var A;(A=D.current)==null||A.update()},forceUpdate:function(){var A;(A=D.current)==null||A.forceUpdate()},transformOrigin:z.transformOrigin.varRef,referenceRef:I,popperRef:M,getPopperProps:ae,getArrowProps:G,getArrowInnerProps:J,getReferenceProps:W}}function yo(t){var e=t.size,r=t.shadowColor,o=t.bg,n=t.style,a=Q({},n,{position:"absolute"});return e&&(a["--popper-arrow-size"]=e),r&&(a["--popper-arrow-shadow-color"]=r),o&&(a["--popper-arrow-bg"]=o),a}function Z(){return Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Z.apply(this,arguments)}function Tt(t,e){if(t==null)return{};var r={},o=Object.keys(t),n,a;for(a=0;a<o.length;a++)n=o[a],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}var bo={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},xo=["openDelay","closeDelay","closeOnClick","closeOnMouseDown","closeOnEsc","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"];function Oo(t){t===void 0&&(t={});var e=t,r=e.openDelay,o=r===void 0?0:r,n=e.closeDelay,a=n===void 0?0:n,p=e.closeOnClick,i=p===void 0?!0:p,s=e.closeOnMouseDown,f=e.closeOnEsc,l=f===void 0?!0:f,w=e.onOpen,y=e.onClose,c=e.placement,P=e.id,v=e.isOpen,d=e.defaultIsOpen,b=e.arrowSize,C=b===void 0?10:b,x=e.arrowShadowColor,u=e.arrowPadding,g=e.modifiers,m=e.isDisabled,E=e.gutter,k=e.offset,R=e.direction,T=Tt(e,xo),D=Nt({isOpen:v,defaultIsOpen:d,onOpen:w,onClose:y}),$=D.isOpen,S=D.onOpen,N=D.onClose,I=wo({enabled:$,placement:c,arrowPadding:u,modifiers:g,gutter:E,offset:k,direction:R}),W=I.referenceRef,M=I.getPopperProps,ae=I.getArrowInnerProps,G=I.getArrowProps,J=Ht(P,"tooltip"),O=h.exports.useRef(null),A=h.exports.useRef(),_=h.exports.useRef(),q=h.exports.useCallback(function(){m||(A.current=window.setTimeout(S,o))},[m,S,o]),L=h.exports.useCallback(function(){A.current&&clearTimeout(A.current),_.current=window.setTimeout(N,a)},[a,N]),ie=h.exports.useCallback(function(){i&&L()},[i,L]),le=h.exports.useCallback(function(){s&&L()},[s,L]),oe=h.exports.useCallback(function(B){$&&B.key==="Escape"&&L()},[$,L]);ot("keydown",l?oe:void 0),h.exports.useEffect(function(){return function(){clearTimeout(A.current),clearTimeout(_.current)}},[]),ot("mouseleave",L,function(){return O.current});var ye=h.exports.useCallback(function(B,H){B===void 0&&(B={}),H===void 0&&(H=null);var ee=Z({},B,{ref:Ie(O,H,W),onMouseEnter:xe(B.onMouseEnter,q),onClick:xe(B.onClick,ie),onMouseDown:xe(B.onMouseDown,le),onFocus:xe(B.onFocus,q),onBlur:xe(B.onBlur,L),"aria-describedby":$?J:void 0});return ee},[q,L,le,$,J,ie,W]),Le=h.exports.useCallback(function(B,H){var ee;return B===void 0&&(B={}),H===void 0&&(H=null),M(Z({},B,{style:Z({},B.style,(ee={},ee[z.arrowSize.var]=C?Ft(C):void 0,ee[z.arrowShadowColor.var]=x,ee))}),H)},[M,C,x]),be=h.exports.useCallback(function(B,H){B===void 0&&(B={}),H===void 0&&(H=null);var ee=Z({ref:H},T,B,{id:J,role:"tooltip",style:Z({},B.style,{position:"relative",transformOrigin:z.transformOrigin.varRef})});return ee},[T,J]);return{isOpen:$,show:q,hide:L,getTriggerProps:ye,getTooltipProps:be,getTooltipPositionerProps:Le,getArrowProps:G,getArrowInnerProps:ae}}var Po=["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps","background","backgroundColor","bgColor"],Co=Pe(Yt.div),Ao=St(function(t,e){var r,o,n=Bt("Tooltip",t),a=$t(t),p=jt(),i=a.children,s=a.label,f=a.shouldWrapChildren,l=a["aria-label"],w=a.hasArrow,y=a.bg,c=a.portalProps,P=a.background,v=a.backgroundColor,d=a.bgColor,b=Tt(a,Po),C=(r=(o=P!=null?P:v)!=null?o:y)!=null?r:d;C&&(n.bg=C,n[z.arrowBg.var]=Lt(p,"colors",C));var x=Oo(Z({},b,{direction:p.direction})),u=Wt(i)||f,g;if(u)g=h.exports.createElement(Pe.span,Z({tabIndex:0},x.getTriggerProps()),i);else{var m=h.exports.Children.only(i);g=h.exports.cloneElement(m,x.getTriggerProps(m.props,m.ref))}var E=!!l,k=x.getTooltipProps({},e),R=E?Mt(k,["role","id"]):k,T=zt(k,["role","id"]);return s?h.exports.createElement(h.exports.Fragment,null,g,h.exports.createElement(Kt,null,x.isOpen&&h.exports.createElement(It,c,h.exports.createElement(Pe.div,Z({},x.getTooltipPositionerProps(),{__css:{zIndex:n.zIndex,pointerEvents:"none"}}),h.exports.createElement(Co,Z({variants:bo},R,{initial:"exit",animate:"enter",exit:"exit",__css:n}),s,E&&h.exports.createElement(Xt,T,l),w&&h.exports.createElement(Pe.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},h.exports.createElement(Pe.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:n.bg}}))))))):h.exports.createElement(h.exports.Fragment,null,i)});const ve=({children:t,className:e="tooltip",label:r,isDisabled:o=!1,m:n,maxWidth:a="200px",placement:p="bottom"})=>j(Ao,{sx:{bg:nt("colors-neutral-darkCharcoal"),borderRadius:"10px",color:"white !important",fontSize:"12px",fontWeight:"400",maxWidth:a,padding:"8px",".chakra-tooltip__arrow":{bg:`${nt("colors-neutral-darkCharcoal")} !important`}},className:e,closeOnClick:!0,label:r,m:n,hasArrow:!0,isDisabled:o,placement:p,children:j("span",{children:t})}),So=()=>Me(Vt,{children:[j(_t,{children:"Tooltip"}),j(at,{children:'Su funci\xF3n principal es proporcionar informaci\xF3n adicional de manera contextual y discreta cuando los usuarios interact\xFAan con elementos espec\xEDficos. El "Tooltip" mejorar la usabilidad y la claridad en tu aplicaci\xF3n web.'}),j(ze,{text:"import { Label } from '@eclass/ui-kit'"}),j(ve,{label:"Auto start",placement:"auto-start",children:j(ue,{children:"Tooltip"})}),j(ze,{text:`<NewTooltip label="Auto start" placement="auto-start">
  <BtnPrimary>Tooltip</BtnPrimary>
</NewTooltip>`}),j(qt,{children:"Posiciones"}),Me(at,{children:["Se ofrece posiciones predefinidos que se adaptan a tus necesidades de dise\xF1o y presentaci\xF3n, por defecto toma el valor de ",j("code",{children:"bottom"}),"."]}),Me(Ut,{children:[j(ve,{label:"Default",children:j(ue,{children:"Default"})}),j(ve,{label:"Top",placement:"top",children:j(ue,{children:"Top"})}),j(ve,{label:"Right",placement:"right",children:j(ue,{children:"Right"})}),j(ve,{label:"Bottom",placement:"bottom",children:j(ue,{children:"Bottom"})}),j(ve,{label:"Left",placement:"left",children:j(ue,{children:"Left"})})]}),j(ze,{text:`<NewTooltip label="Default">
  <BtnPrimary>Default</BtnPrimary>
</NewTooltip>
<NewTooltip label="Top" placement="top">
  <BtnPrimary>Top</BtnPrimary>
</NewTooltip>
<NewTooltip label="Right" placement="right">
  <BtnPrimary>Right</BtnPrimary>
</NewTooltip>
<NewTooltip label="Bottom" placement="bottom">
  <BtnPrimary>Bottom</BtnPrimary>
</NewTooltip>
<NewTooltip label="Left" placement="left">
  <BtnPrimary>Left</BtnPrimary>
</NewTooltip>`})]});export{So as ViewTooltip,So as default};
//# sourceMappingURL=Tooltip.84fcab91.js.map
