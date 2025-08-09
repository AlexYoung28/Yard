(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Nd={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function QA(){if(N_)return yl;N_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var g in o)g!=="key"&&(c[g]=o[g])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:c}}return yl.Fragment=t,yl.jsx=n,yl.jsxs=n,yl}var O_;function KA(){return O_||(O_=1,Nd.exports=QA()),Nd.exports}var j=KA(),Od={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function YA(){if(M_)return wt;M_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,J={};function K(D,Z,rt){this.props=D,this.context=Z,this.refs=J,this.updater=rt||U}K.prototype.isReactComponent={},K.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},K.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function st(){}st.prototype=K.prototype;function ut(D,Z,rt){this.props=D,this.context=Z,this.refs=J,this.updater=rt||U}var ct=ut.prototype=new st;ct.constructor=ut,F(ct,K.prototype),ct.isPureReactComponent=!0;var Bt=Array.isArray,Tt={H:null,A:null,T:null,S:null,V:null},xt=Object.prototype.hasOwnProperty;function O(D,Z,rt,tt,et,gt){return rt=gt.ref,{$$typeof:r,type:D,key:Z,ref:rt!==void 0?rt:null,props:gt}}function A(D,Z){return O(D.type,Z,void 0,void 0,void 0,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function M(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(rt){return Z[rt]})}var x=/\/+/g;function V(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):Z.toString(36)}function R(){}function ie(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Ft(D,Z,rt,tt,et){var gt=typeof D;(gt==="undefined"||gt==="boolean")&&(D=null);var at=!1;if(D===null)at=!0;else switch(gt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(D.$$typeof){case r:case t:at=!0;break;case E:return at=D._init,Ft(at(D._payload),Z,rt,tt,et)}}if(at)return et=et(D),at=tt===""?"."+V(D,0):tt,Bt(et)?(rt="",at!=null&&(rt=at.replace(x,"$&/")+"/"),Ft(et,Z,rt,"",function(Ne){return Ne})):et!=null&&(I(et)&&(et=A(et,rt+(et.key==null||D&&D.key===et.key?"":(""+et.key).replace(x,"$&/")+"/")+at)),Z.push(et)),1;at=0;var Pt=tt===""?".":tt+":";if(Bt(D))for(var Vt=0;Vt<D.length;Vt++)tt=D[Vt],gt=Pt+V(tt,Vt),at+=Ft(tt,Z,rt,gt,et);else if(Vt=C(D),typeof Vt=="function")for(D=Vt.call(D),Vt=0;!(tt=D.next()).done;)tt=tt.value,gt=Pt+V(tt,Vt++),at+=Ft(tt,Z,rt,gt,et);else if(gt==="object"){if(typeof D.then=="function")return Ft(ie(D),Z,rt,tt,et);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return at}function G(D,Z,rt){if(D==null)return D;var tt=[],et=0;return Ft(D,tt,"","",function(gt){return Z.call(rt,gt,et++)}),tt}function it(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(rt){(D._status===0||D._status===-1)&&(D._status=1,D._result=rt)},function(rt){(D._status===0||D._status===-1)&&(D._status=2,D._result=rt)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var ft=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function kt(){}return wt.Children={map:G,forEach:function(D,Z,rt){G(D,function(){Z.apply(this,arguments)},rt)},count:function(D){var Z=0;return G(D,function(){Z++}),Z},toArray:function(D){return G(D,function(Z){return Z})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},wt.Component=K,wt.Fragment=n,wt.Profiler=o,wt.PureComponent=ut,wt.StrictMode=s,wt.Suspense=p,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt,wt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return Tt.H.useMemoCache(D)}},wt.cache=function(D){return function(){return D.apply(null,arguments)}},wt.cloneElement=function(D,Z,rt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var tt=F({},D.props),et=D.key,gt=void 0;if(Z!=null)for(at in Z.ref!==void 0&&(gt=void 0),Z.key!==void 0&&(et=""+Z.key),Z)!xt.call(Z,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Z.ref===void 0||(tt[at]=Z[at]);var at=arguments.length-2;if(at===1)tt.children=rt;else if(1<at){for(var Pt=Array(at),Vt=0;Vt<at;Vt++)Pt[Vt]=arguments[Vt+2];tt.children=Pt}return O(D.type,et,void 0,void 0,gt,tt)},wt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},wt.createElement=function(D,Z,rt){var tt,et={},gt=null;if(Z!=null)for(tt in Z.key!==void 0&&(gt=""+Z.key),Z)xt.call(Z,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(et[tt]=Z[tt]);var at=arguments.length-2;if(at===1)et.children=rt;else if(1<at){for(var Pt=Array(at),Vt=0;Vt<at;Vt++)Pt[Vt]=arguments[Vt+2];et.children=Pt}if(D&&D.defaultProps)for(tt in at=D.defaultProps,at)et[tt]===void 0&&(et[tt]=at[tt]);return O(D,gt,void 0,void 0,null,et)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(D){return{$$typeof:g,render:D}},wt.isValidElement=I,wt.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:it}},wt.memo=function(D,Z){return{$$typeof:y,type:D,compare:Z===void 0?null:Z}},wt.startTransition=function(D){var Z=Tt.T,rt={};Tt.T=rt;try{var tt=D(),et=Tt.S;et!==null&&et(rt,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(kt,ft)}catch(gt){ft(gt)}finally{Tt.T=Z}},wt.unstable_useCacheRefresh=function(){return Tt.H.useCacheRefresh()},wt.use=function(D){return Tt.H.use(D)},wt.useActionState=function(D,Z,rt){return Tt.H.useActionState(D,Z,rt)},wt.useCallback=function(D,Z){return Tt.H.useCallback(D,Z)},wt.useContext=function(D){return Tt.H.useContext(D)},wt.useDebugValue=function(){},wt.useDeferredValue=function(D,Z){return Tt.H.useDeferredValue(D,Z)},wt.useEffect=function(D,Z,rt){var tt=Tt.H;if(typeof rt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return tt.useEffect(D,Z)},wt.useId=function(){return Tt.H.useId()},wt.useImperativeHandle=function(D,Z,rt){return Tt.H.useImperativeHandle(D,Z,rt)},wt.useInsertionEffect=function(D,Z){return Tt.H.useInsertionEffect(D,Z)},wt.useLayoutEffect=function(D,Z){return Tt.H.useLayoutEffect(D,Z)},wt.useMemo=function(D,Z){return Tt.H.useMemo(D,Z)},wt.useOptimistic=function(D,Z){return Tt.H.useOptimistic(D,Z)},wt.useReducer=function(D,Z,rt){return Tt.H.useReducer(D,Z,rt)},wt.useRef=function(D){return Tt.H.useRef(D)},wt.useState=function(D){return Tt.H.useState(D)},wt.useSyncExternalStore=function(D,Z,rt){return Tt.H.useSyncExternalStore(D,Z,rt)},wt.useTransition=function(){return Tt.H.useTransition()},wt.version="19.1.1",wt}var x_;function Dm(){return x_||(x_=1,Od.exports=YA()),Od.exports}var mt=Dm(),Md={exports:{}},_l={},xd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function XA(){return V_||(V_=1,function(r){function t(G,it){var ft=G.length;G.push(it);t:for(;0<ft;){var kt=ft-1>>>1,D=G[kt];if(0<o(D,it))G[kt]=it,G[ft]=D,ft=kt;else break t}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var it=G[0],ft=G.pop();if(ft!==it){G[0]=ft;t:for(var kt=0,D=G.length,Z=D>>>1;kt<Z;){var rt=2*(kt+1)-1,tt=G[rt],et=rt+1,gt=G[et];if(0>o(tt,ft))et<D&&0>o(gt,tt)?(G[kt]=gt,G[et]=ft,kt=et):(G[kt]=tt,G[rt]=ft,kt=rt);else if(et<D&&0>o(gt,ft))G[kt]=gt,G[et]=ft,kt=et;else break t}}return it}function o(G,it){var ft=G.sortIndex-it.sortIndex;return ft!==0?ft:G.id-it.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],y=[],E=1,S=null,C=3,U=!1,F=!1,J=!1,K=!1,st=typeof setTimeout=="function"?setTimeout:null,ut=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;function Bt(G){for(var it=n(y);it!==null;){if(it.callback===null)s(y);else if(it.startTime<=G)s(y),it.sortIndex=it.expirationTime,t(p,it);else break;it=n(y)}}function Tt(G){if(J=!1,Bt(G),!F)if(n(p)!==null)F=!0,xt||(xt=!0,V());else{var it=n(y);it!==null&&Ft(Tt,it.startTime-G)}}var xt=!1,O=-1,A=5,I=-1;function M(){return K?!0:!(r.unstable_now()-I<A)}function x(){if(K=!1,xt){var G=r.unstable_now();I=G;var it=!0;try{t:{F=!1,J&&(J=!1,ut(O),O=-1),U=!0;var ft=C;try{e:{for(Bt(G),S=n(p);S!==null&&!(S.expirationTime>G&&M());){var kt=S.callback;if(typeof kt=="function"){S.callback=null,C=S.priorityLevel;var D=kt(S.expirationTime<=G);if(G=r.unstable_now(),typeof D=="function"){S.callback=D,Bt(G),it=!0;break e}S===n(p)&&s(p),Bt(G)}else s(p);S=n(p)}if(S!==null)it=!0;else{var Z=n(y);Z!==null&&Ft(Tt,Z.startTime-G),it=!1}}break t}finally{S=null,C=ft,U=!1}it=void 0}}finally{it?V():xt=!1}}}var V;if(typeof ct=="function")V=function(){ct(x)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,ie=R.port2;R.port1.onmessage=x,V=function(){ie.postMessage(null)}}else V=function(){st(x,0)};function Ft(G,it){O=st(function(){G(r.unstable_now())},it)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(G){switch(C){case 1:case 2:case 3:var it=3;break;default:it=C}var ft=C;C=it;try{return G()}finally{C=ft}},r.unstable_requestPaint=function(){K=!0},r.unstable_runWithPriority=function(G,it){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ft=C;C=G;try{return it()}finally{C=ft}},r.unstable_scheduleCallback=function(G,it,ft){var kt=r.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?kt+ft:kt):ft=kt,G){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ft+D,G={id:E++,callback:it,priorityLevel:G,startTime:ft,expirationTime:D,sortIndex:-1},ft>kt?(G.sortIndex=ft,t(y,G),n(p)===null&&G===n(y)&&(J?(ut(O),O=-1):J=!0,Ft(Tt,ft-kt))):(G.sortIndex=D,t(p,G),F||U||(F=!0,xt||(xt=!0,V()))),G},r.unstable_shouldYield=M,r.unstable_wrapCallback=function(G){var it=C;return function(){var ft=C;C=it;try{return G.apply(this,arguments)}finally{C=ft}}}}(Vd)),Vd}var k_;function $A(){return k_||(k_=1,xd.exports=XA()),xd.exports}var kd={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function ZA(){if(P_)return Ke;P_=1;var r=Dm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,y,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,E)},Ke.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Ke.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Ke.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ke.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,S=g(E,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,U=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:C,fetchPriority:U}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:C,fetchPriority:U,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ke.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=g(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Ke.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,S=g(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ke.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=g(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Ke.requestFormReset=function(p){s.d.r(p)},Ke.unstable_batchedUpdates=function(p,y){return p(y)},Ke.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Ke.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ke.version="19.1.1",Ke}var U_;function JA(){if(U_)return kd.exports;U_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),kd.exports=ZA(),kd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function WA(){if(L_)return _l;L_=1;var r=$A(),t=Dm(),n=JA();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===l)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),st=Symbol.for("react.provider"),ut=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),Bt=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),xt=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case K:return"Profiler";case J:return"StrictMode";case Tt:return"Suspense";case xt:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case ct:return(e.displayName||"Context")+".Provider";case ut:return(e._context.displayName||"Context")+".Consumer";case Bt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ie(e.type)||"Memo";case A:i=e._payload,e=e._init;try{return ie(e(i))}catch{}}return null}var Ft=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},kt=[],D=-1;function Z(e){return{current:e}}function rt(e){0>D||(e.current=kt[D],kt[D]=null,D--)}function tt(e,i){D++,kt[D]=e.current,e.current=i}var et=Z(null),gt=Z(null),at=Z(null),Pt=Z(null);function Vt(e,i){switch(tt(at,i),tt(gt,e),tt(et,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?r_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=r_(i),e=s_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(et),tt(et,e)}function Ne(){rt(et),rt(gt),rt(at)}function nn(e){e.memoizedState!==null&&tt(Pt,e);var i=et.current,a=s_(i,e.type);i!==a&&(tt(gt,e),tt(et,a))}function rn(e){gt.current===e&&(rt(et),rt(gt)),Pt.current===e&&(rt(Pt),fl._currentValue=ft)}var Xr=Object.prototype.hasOwnProperty,$r=r.unstable_scheduleCallback,Zr=r.unstable_cancelCallback,lo=r.unstable_shouldYield,$l=r.unstable_requestPaint,En=r.unstable_now,Dh=r.unstable_getCurrentPriorityLevel,uo=r.unstable_ImmediatePriority,Ks=r.unstable_UserBlockingPriority,Jr=r.unstable_NormalPriority,Nh=r.unstable_LowPriority,Ys=r.unstable_IdlePriority,co=r.log,Zl=r.unstable_setDisableYieldValue,ue=null,Kt=null;function cn(e){if(typeof co=="function"&&Zl(e),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(ue,e)}catch{}}var Ge=Math.clz32?Math.clz32:Wr,Jl=Math.log,Oh=Math.LN2;function Wr(e){return e>>>=0,e===0?32:31-(Jl(e)/Oh|0)|0}var ts=256,es=4194304;function Un(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Un(l):(v&=T,v!==0?h=Un(v):a||(a=T&~e,a!==0&&(h=Un(a))))):(T=l&~d,T!==0?h=Un(T):v!==0?h=Un(v):a||(a=l&~e,a!==0&&(h=Un(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function ns(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ho(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fo(){var e=ts;return ts<<=1,(ts&4194048)===0&&(ts=256),e}function mo(){var e=es;return es<<=1,(es&62914560)===0&&(es=4194304),e}function Ti(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ei(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function go(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,w=e.expirationTimes,z=e.hiddenUpdates;for(a=v&~a;0<a;){var Q=31-Ge(a),X=1<<Q;T[Q]=0,w[Q]=-1;var B=z[Q];if(B!==null)for(z[Q]=null,Q=0;Q<B.length;Q++){var q=B[Q];q!==null&&(q.lane&=-536870913)}a&=~X}l!==0&&Yn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Yn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ge(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function po(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ge(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function er(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nr(){var e=it.p;return e!==0?e:(e=window.event,e===void 0?32:S_(e.type))}function Wl(e,i){var a=it.p;try{return it.p=e,i()}finally{it.p=a}}var re=Math.random().toString(36).slice(2),be="__reactFiber$"+re,pe="__reactProps$"+re,bn="__reactContainer$"+re,yo="__reactEvents$"+re,Mh="__reactListeners$"+re,ir="__reactHandles$"+re,tu="__reactResources$"+re,is="__reactMarker$"+re;function rr(e){delete e[be],delete e[pe],delete e[yo],delete e[Mh],delete e[ir]}function bi(e){var i=e[be];if(i)return i;for(var a=e.parentNode;a;){if(i=a[bn]||a[be]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[be])return a;e=u_(e)}return i}e=a,a=e.parentNode}return null}function Xn(e){if(e=e[be]||e[bn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function $n(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Je(e){var i=e[tu];return i||(i=e[tu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fe(e){e[is]=!0}var _o=new Set,Zs={};function Ln(e,i){Ai(e,i),Ai(e+"Capture",i)}function Ai(e,i){for(Zs[e]=i,e=0;e<i.length;e++)_o.add(i[e])}var eu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nu={},rs={};function iu(e){return Xr.call(rs,e)?!0:Xr.call(nu,e)?!1:eu.test(e)?rs[e]=!0:(nu[e]=!0,!1)}function sr(e,i,a){if(iu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Zn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ue(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var ss,ru;function Si(e){if(ss===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ss=i&&i[1]||"",ru=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ss+e+ru}var Js=!1;function Ws(e,i){if(!e||Js)return"";Js=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(q){var B=q}Reflect.construct(e,[],X)}else{try{X.call()}catch(q){B=q}e.call(X.prototype)}}else{try{throw Error()}catch(q){B=q}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(q){if(q&&B&&typeof q.stack=="string")return[q.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var w=v.split(`
`),z=T.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===z.length)for(l=w.length-1,h=z.length-1;1<=l&&0<=h&&w[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==z[h]){var Q=`
`+w[l].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=l&&0<=h);break}}}finally{Js=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Si(a):""}function vo(e){switch(e.tag){case 26:case 27:case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return Ws(e.type,!1);case 11:return Ws(e.type.render,!1);case 1:return Ws(e.type,!0);case 31:return Si("Activity");default:return""}}function ta(e){try{var i="";do i+=vo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function We(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function To(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xh(e){var i=To(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ea(e){e._valueTracker||(e._valueTracker=xh(e))}function Eo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=To(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function as(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vh=/[\n"\\]/g;function ye(e){return e.replace(Vh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hn(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+We(i)):e.value!==""+We(i)&&(e.value=""+We(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?ar(e,v,We(i)):a!=null?ar(e,v,We(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+We(T):e.removeAttribute("name")}function os(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+We(a):"",i=i!=null?""+We(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function ar(e,i,a){i==="number"&&as(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function wi(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+We(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function $t(e,i,a){if(i!=null&&(i=""+We(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+We(a):""}function ls(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Ft(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=We(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function An(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var us=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function su(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||us.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function bo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&su(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&su(e,d,i[d])}function Ao(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ph=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function na(e){return Ph.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ri=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,Ci=null;function So(e){var i=Xn(e);if(i&&(e=i.stateNode)){var a=e[pe]||null;t:switch(e=i.stateNode,i.type){case"input":if(hn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ye(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[pe]||null;if(!h)throw Error(s(90));hn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Eo(l)}break t;case"textarea":$t(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&wi(e,!!a.multiple,i,!1)}}}var Jn=!1;function au(e,i,a){if(Jn)return e(i,a);Jn=!0;try{var l=e(i);return l}finally{if(Jn=!1,(Ii!==null||Ci!==null)&&(Wu(),Ii&&(i=Ii,e=Ci,Ci=Ii=null,So(i),e)))for(i=0;i<e.length;i++)So(e[i])}}function cs(e,i){var a=e.stateNode;if(a===null)return null;var l=a[pe]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wn=!1;if(zn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){wn=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{wn=!1}var Wn=null,or=null,Di=null;function wo(){if(Di)return Di;var e,i=or,a=i.length,l,h="value"in Wn?Wn.value:Wn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Di=h.slice(e,1<l?1-l:void 0)}function ti(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function Ro(){return!1}function Oe(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ei:Ro,this.isPropagationStopped=Ro,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),i}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Oe(Gt),fs=E({},Gt,{view:0,detail:0}),ou=Oe(fs),ra,sa,ni,ds=E({},fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(ra=e.screenX-ni.screenX,sa=e.screenY-ni.screenY):sa=ra=0,ni=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),Rn=Oe(ds),lu=E({},ds,{dataTransfer:0}),Uh=Oe(lu),ms=E({},fs,{relatedTarget:0}),aa=Oe(ms),Io=E({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),oa=Oe(Io),uu=E({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),la=Oe(uu),Lh=E({},Gt,{data:0}),Co=Oe(Lh),gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Do(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=hu[e])?!!i[e]:!1}function ps(){return Do}var fu=E({},fs,{key:function(e){if(e.key){var i=gs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ua=Oe(fu),du=E({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),No=Oe(du),Ni=E({},fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),mu=Oe(Ni),gu=E({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),pu=Oe(gu),yu=E({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ca=Oe(yu),tn=E({},Gt,{newState:0,oldState:0}),_u=Oe(tn),vu=[9,13,27,32],ii=zn&&"CompositionEvent"in window,u=null;zn&&"documentMode"in document&&(u=document.documentMode);var m=zn&&"TextEvent"in window&&!u,_=zn&&(!ii||u&&8<u&&11>=u),b=" ",P=!1;function H(e,i){switch(e){case"keyup":return vu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Ae(e,i){switch(e){case"compositionend":return nt(i);case"keypress":return i.which!==32?null:(P=!0,b);case"textInput":return e=i.data,e===b&&P?null:e;default:return null}}function Lt(e,i){if(Ut)return e==="compositionend"||!ii&&H(e,i)?(e=wo(),Di=or=Wn=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Me={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Se(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Me[e.type]:i==="textarea"}function Oi(e,i,a,l){Ii?Ci?Ci.push(l):Ci=[l]:Ii=l,i=sc(i,"onChange"),0<i.length&&(a=new ia("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Le=null,ri=null;function Oo(e){Wy(e,0)}function Tu(e){var i=$n(e);if(Eo(i))return e}function Tg(e,i){if(e==="change")return i}var Eg=!1;if(zn){var zh;if(zn){var jh="oninput"in document;if(!jh){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),jh=typeof bg.oninput=="function"}zh=jh}else zh=!1;Eg=zh&&(!document.documentMode||9<document.documentMode)}function Ag(){Le&&(Le.detachEvent("onpropertychange",Sg),ri=Le=null)}function Sg(e){if(e.propertyName==="value"&&Tu(ri)){var i=[];Oi(i,ri,e,Sn(e)),au(Oo,i)}}function bb(e,i,a){e==="focusin"?(Ag(),Le=i,ri=a,Le.attachEvent("onpropertychange",Sg)):e==="focusout"&&Ag()}function Ab(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tu(ri)}function Sb(e,i){if(e==="click")return Tu(i)}function wb(e,i){if(e==="input"||e==="change")return Tu(i)}function Rb(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fn=typeof Object.is=="function"?Object.is:Rb;function Mo(e,i){if(fn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Xr.call(i,h)||!fn(e[h],i[h]))return!1}return!0}function wg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rg(e,i){var a=wg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=wg(a)}}function Ig(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ig(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Cg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=as(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=as(e.document)}return i}function Bh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Ib=zn&&"documentMode"in document&&11>=document.documentMode,ha=null,qh=null,xo=null,Hh=!1;function Dg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hh||ha==null||ha!==as(l)||(l=ha,"selectionStart"in l&&Bh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xo&&Mo(xo,l)||(xo=l,l=sc(qh,"onSelect"),0<l.length&&(i=new ia("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ha)))}function ys(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var fa={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},Fh={},Ng={};zn&&(Ng=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function _s(e){if(Fh[e])return Fh[e];if(!fa[e])return e;var i=fa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ng)return Fh[e]=i[a];return e}var Og=_s("animationend"),Mg=_s("animationiteration"),xg=_s("animationstart"),Cb=_s("transitionrun"),Db=_s("transitionstart"),Nb=_s("transitioncancel"),Vg=_s("transitionend"),kg=new Map,Gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gh.push("scrollEnd");function jn(e,i){kg.set(e,i),Ln(i,[e])}var Pg=new WeakMap;function In(e,i){if(typeof e=="object"&&e!==null){var a=Pg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ta(i)},Pg.set(e,i),i)}return{value:e,source:i,stack:ta(i)}}var Cn=[],da=0,Qh=0;function Eu(){for(var e=da,i=Qh=da=0;i<e;){var a=Cn[i];Cn[i++]=null;var l=Cn[i];Cn[i++]=null;var h=Cn[i];Cn[i++]=null;var d=Cn[i];if(Cn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Ug(a,h,d)}}function bu(e,i,a,l){Cn[da++]=e,Cn[da++]=i,Cn[da++]=a,Cn[da++]=l,Qh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Kh(e,i,a,l){return bu(e,i,a,l),Au(e)}function ma(e,i){return bu(e,null,null,i),Au(e)}function Ug(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ge(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Au(e){if(50<rl)throw rl=0,td=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ga={};function Ob(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,i,a,l){return new Ob(e,i,a,l)}function Yh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mi(e,i){var a=e.alternate;return a===null?(a=dn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Su(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Yh(e)&&(v=1);else if(typeof e=="string")v=xA(e,a,et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=dn(31,a,i,h),e.elementType=I,e.lanes=d,e;case F:return vs(a.children,h,d,i);case J:v=8,h|=24;break;case K:return e=dn(12,a,i,h|2),e.elementType=K,e.lanes=d,e;case Tt:return e=dn(13,a,i,h),e.elementType=Tt,e.lanes=d,e;case xt:return e=dn(19,a,i,h),e.elementType=xt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case st:case ct:v=10;break t;case ut:v=9;break t;case Bt:v=11;break t;case O:v=14;break t;case A:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=dn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function vs(e,i,a,l){return e=dn(7,e,l,i),e.lanes=a,e}function Xh(e,i,a){return e=dn(6,e,null,i),e.lanes=a,e}function $h(e,i,a){return i=dn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var pa=[],ya=0,wu=null,Ru=0,Dn=[],Nn=0,Ts=null,xi=1,Vi="";function Es(e,i){pa[ya++]=Ru,pa[ya++]=wu,wu=e,Ru=i}function zg(e,i,a){Dn[Nn++]=xi,Dn[Nn++]=Vi,Dn[Nn++]=Ts,Ts=e;var l=xi;e=Vi;var h=32-Ge(l)-1;l&=~(1<<h),a+=1;var d=32-Ge(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,xi=1<<32-Ge(i)+h|a<<h|l,Vi=d+e}else xi=1<<d|a<<h|l,Vi=e}function Zh(e){e.return!==null&&(Es(e,1),zg(e,1,0))}function Jh(e){for(;e===wu;)wu=pa[--ya],pa[ya]=null,Ru=pa[--ya],pa[ya]=null;for(;e===Ts;)Ts=Dn[--Nn],Dn[Nn]=null,Vi=Dn[--Nn],Dn[Nn]=null,xi=Dn[--Nn],Dn[Nn]=null}var en=null,ce=null,Ht=!1,bs=null,si=!1,Wh=Error(s(519));function As(e){var i=Error(s(418,""));throw Po(In(i,e)),Wh}function jg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[be]=e,i[pe]=l,a){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(a=0;a<al.length;a++)Dt(al[a],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":Dt("invalid",i),os(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ea(i);break;case"select":Dt("invalid",i);break;case"textarea":Dt("invalid",i),ls(i,l.value,l.defaultValue,l.children),ea(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||i_(i.textContent,a)?(l.popover!=null&&(Dt("beforetoggle",i),Dt("toggle",i)),l.onScroll!=null&&Dt("scroll",i),l.onScrollEnd!=null&&Dt("scrollend",i),l.onClick!=null&&(i.onclick=ac),i=!0):i=!1,i||As(e)}function Bg(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:si=!1;return;case 27:case 3:si=!0;return;default:en=en.return}}function Vo(e){if(e!==en)return!1;if(!Ht)return Bg(e),Ht=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||pd(e.type,e.memoizedProps)),a=!a),a&&ce&&As(e),Bg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){ce=qn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}ce=null}}else i===27?(i=ce,Ar(e.type)?(e=Td,Td=null,ce=e):ce=i):ce=en?qn(e.stateNode.nextSibling):null;return!0}function ko(){ce=en=null,Ht=!1}function qg(){var e=bs;return e!==null&&(on===null?on=e:on.push.apply(on,e),bs=null),e}function Po(e){bs===null?bs=[e]:bs.push(e)}var tf=Z(null),Ss=null,ki=null;function lr(e,i,a){tt(tf,i._currentValue),i._currentValue=a}function Pi(e){e._currentValue=tf.current,rt(tf)}function ef(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function nf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var w=0;w<i.length;w++)if(T.context===i[w]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),ef(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),ef(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Uo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;fn(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===Pt.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(fl):e=[fl])}h=h.return}e!==null&&nf(i,e,a,l),i.flags|=262144}function Iu(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ws(e){Ss=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Hg(Ss,e)}function Cu(e,i){return Ss===null&&ws(e),Hg(e,i)}function Hg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ki=ki.next=i;return a}var Mb=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},xb=r.unstable_scheduleCallback,Vb=r.unstable_NormalPriority,we={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new Mb,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&xb(Vb,function(){e.controller.abort()})}var zo=null,sf=0,_a=0,va=null;function kb(e,i){if(zo===null){var a=zo=[];sf=0,_a=od(),va={status:"pending",value:void 0,then:function(l){a.push(l)}}}return sf++,i.then(Fg,Fg),i}function Fg(){if(--sf===0&&zo!==null){va!==null&&(va.status="fulfilled");var e=zo;zo=null,_a=0,va=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Pb(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Gg=G.S;G.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&kb(e,i),Gg!==null&&Gg(e,i)};var Rs=Z(null);function af(){var e=Rs.current;return e!==null?e:ee.pooledCache}function Du(e,i){i===null?tt(Rs,Rs.current):tt(Rs,i.pool)}function Qg(){var e=af();return e===null?null:{parent:we._currentValue,pool:e}}var jo=Error(s(460)),Kg=Error(s(474)),Nu=Error(s(542)),of={then:function(){}};function Yg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ou(){}function Xg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Ou,Ou),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Zg(e),e;default:if(typeof i.status=="string")i.then(Ou,Ou);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Zg(e),e}throw Bo=i,jo}}var Bo=null;function $g(){if(Bo===null)throw Error(s(459));var e=Bo;return Bo=null,e}function Zg(e){if(e===jo||e===Nu)throw Error(s(483))}var ur=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Yt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Au(e),Ug(e,null,a),i}return bu(e,l,i,a),Au(e)}function qo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,po(e,a)}}function cf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var hf=!1;function Ho(){if(hf){var e=va;if(e!==null)throw e}}function Fo(e,i,a,l){hf=!1;var h=e.updateQueue;ur=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var w=T,z=w.next;w.next=null,v===null?d=z:v.next=z,v=w;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=z:T.next=z,Q.lastBaseUpdate=w))}if(d!==null){var X=h.baseState;v=0,Q=z=w=null,T=d;do{var B=T.lane&-536870913,q=B!==T.lane;if(q?(zt&B)===B:(l&B)===B){B!==0&&B===_a&&(hf=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Et=e,yt=T;B=i;var Wt=a;switch(yt.tag){case 1:if(Et=yt.payload,typeof Et=="function"){X=Et.call(Wt,X,B);break t}X=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=yt.payload,B=typeof Et=="function"?Et.call(Wt,X,B):Et,B==null)break t;X=E({},X,B);break t;case 2:ur=!0}}B=T.callback,B!==null&&(e.flags|=64,q&&(e.flags|=8192),q=h.callbacks,q===null?h.callbacks=[B]:q.push(B))}else q={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(z=Q=q,w=X):Q=Q.next=q,v|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;q=T,T=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);Q===null&&(w=X),h.baseState=w,h.firstBaseUpdate=z,h.lastBaseUpdate=Q,d===null&&(h.shared.lanes=0),vr|=v,e.lanes=v,e.memoizedState=X}}function Jg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Wg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jg(a[e],i)}var Ta=Z(null),Mu=Z(0);function tp(e,i){e=Hi,tt(Mu,e),tt(Ta,i),Hi=e|i.baseLanes}function ff(){tt(Mu,Hi),tt(Ta,Ta.current)}function df(){Hi=Mu.current,rt(Ta),rt(Mu)}var fr=0,Rt=null,Zt=null,_e=null,xu=!1,Ea=!1,Is=!1,Vu=0,Go=0,ba=null,Ub=0;function de(){throw Error(s(321))}function mf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!fn(e[a],i[a]))return!1;return!0}function gf(e,i,a,l,h,d){return fr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=e===null||e.memoizedState===null?Up:Lp,Is=!1,d=a(l,h),Is=!1,Ea&&(d=np(i,a,l,h)),ep(e),d}function ep(e){G.H=ju;var i=Zt!==null&&Zt.next!==null;if(fr=0,_e=Zt=Rt=null,xu=!1,Go=0,ba=null,i)throw Error(s(300));e===null||xe||(e=e.dependencies,e!==null&&Iu(e)&&(xe=!0))}function np(e,i,a,l){Rt=e;var h=0;do{if(Ea&&(ba=null),Go=0,Ea=!1,25<=h)throw Error(s(301));if(h+=1,_e=Zt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=Fb,d=i(a,l)}while(Ea);return d}function Lb(){var e=G.H,i=e.useState()[0];return i=typeof i.then=="function"?Qo(i):i,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function pf(){var e=Vu!==0;return Vu=0,e}function yf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function _f(e){if(xu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}xu=!1}fr=0,_e=Zt=Rt=null,Ea=!1,Go=Vu=0,ba=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Rt.memoizedState=_e=e:_e=_e.next=e,_e}function ve(){if(Zt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var i=_e===null?Rt.memoizedState:_e.next;if(i!==null)_e=i,Zt=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},_e===null?Rt.memoizedState=_e=e:_e=_e.next=e}return _e}function vf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var i=Go;return Go+=1,ba===null&&(ba=[]),e=Xg(ba,e,i),i=Rt,(_e===null?i.memoizedState:_e.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?Up:Lp),e}function ku(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===ct)return Qe(e)}throw Error(s(438,String(e)))}function Tf(e){var i=null,a=Rt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=vf(),Rt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=M;return i.index++,a}function Ui(e,i){return typeof i=="function"?i(e):i}function Pu(e){var i=ve();return Ef(i,Zt,e)}function Ef(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,w=null,z=i,Q=!1;do{var X=z.lane&-536870913;if(X!==z.lane?(zt&X)===X:(fr&X)===X){var B=z.revertLane;if(B===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),X===_a&&(Q=!0);else if((fr&B)===B){z=z.next,B===_a&&(Q=!0);continue}else X={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},w===null?(T=w=X,v=d):w=w.next=X,Rt.lanes|=B,vr|=B;X=z.action,Is&&a(d,X),d=z.hasEagerState?z.eagerState:a(d,X)}else B={lane:X,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},w===null?(T=w=B,v=d):w=w.next=B,Rt.lanes|=X,vr|=X;z=z.next}while(z!==null&&z!==i);if(w===null?v=d:w.next=T,!fn(d,e.memoizedState)&&(xe=!0,Q&&(a=va,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function bf(e){var i=ve(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(xe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function ip(e,i,a){var l=Rt,h=ve(),d=Ht;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn((Zt||h).memoizedState,a);v&&(h.memoizedState=a,xe=!0),h=h.queue;var T=ap.bind(null,l,h,e);if(Ko(2048,8,T,[e]),h.getSnapshot!==i||v||_e!==null&&_e.memoizedState.tag&1){if(l.flags|=2048,Aa(9,Uu(),sp.bind(null,l,h,a,i),null),ee===null)throw Error(s(349));d||(fr&124)!==0||rp(l,i,a)}return a}function rp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Rt.updateQueue,i===null?(i=vf(),Rt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function sp(e,i,a,l){i.value=a,i.getSnapshot=l,op(i)&&lp(e)}function ap(e,i,a){return a(function(){op(i)&&lp(e)})}function op(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!fn(e,a)}catch{return!0}}function lp(e){var i=ma(e,2);i!==null&&_n(i,e,2)}function Af(e){var i=sn();if(typeof e=="function"){var a=e;if(e=a(),Is){cn(!0);try{a()}finally{cn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},i}function up(e,i,a,l){return e.baseState=a,Ef(e,Zt,typeof l=="function"?l:Ui)}function zb(e,i,a,l,h){if(zu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};G.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,cp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function cp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=G.T,v={};G.T=v;try{var T=a(h,l),w=G.S;w!==null&&w(v,T),hp(e,i,T)}catch(z){Sf(e,i,z)}finally{G.T=d}}else try{d=a(h,l),hp(e,i,d)}catch(z){Sf(e,i,z)}}function hp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){fp(e,i,l)},function(l){return Sf(e,i,l)}):fp(e,i,a)}function fp(e,i,a){i.status="fulfilled",i.value=a,dp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,cp(e,a)))}function Sf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,dp(i),i=i.next;while(i!==l)}e.action=null}function dp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function mp(e,i){return i}function gp(e,i){if(Ht){var a=ee.formState;if(a!==null){t:{var l=Rt;if(Ht){if(ce){e:{for(var h=ce,d=si;h.nodeType!==8;){if(!d){h=null;break e}if(h=qn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ce=qn(h.nextSibling),l=h.data==="F!";break t}}As(l)}l=!1}l&&(i=a[0])}}return a=sn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mp,lastRenderedState:i},a.queue=l,a=Vp.bind(null,Rt,l),l.dispatch=a,l=Af(!1),d=Df.bind(null,Rt,!1,l.queue),l=sn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=zb.bind(null,Rt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function pp(e){var i=ve();return yp(i,Zt,e)}function yp(e,i,a){if(i=Ef(e,i,mp)[0],e=Pu(Ui)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Qo(i)}catch(v){throw v===jo?Nu:v}else l=i;i=ve();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Rt.flags|=2048,Aa(9,Uu(),jb.bind(null,h,a),null)),[l,d,e]}function jb(e,i){e.action=i}function _p(e){var i=ve(),a=Zt;if(a!==null)return yp(i,a,e);ve(),i=i.memoizedState,a=ve();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Aa(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=vf(),Rt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Uu(){return{destroy:void 0,resource:void 0}}function vp(){return ve().memoizedState}function Lu(e,i,a,l){var h=sn();l=l===void 0?null:l,Rt.flags|=e,h.memoizedState=Aa(1|i,Uu(),a,l)}function Ko(e,i,a,l){var h=ve();l=l===void 0?null:l;var d=h.memoizedState.inst;Zt!==null&&l!==null&&mf(l,Zt.memoizedState.deps)?h.memoizedState=Aa(i,d,a,l):(Rt.flags|=e,h.memoizedState=Aa(1|i,d,a,l))}function Tp(e,i){Lu(8390656,8,e,i)}function Ep(e,i){Ko(2048,8,e,i)}function bp(e,i){return Ko(4,2,e,i)}function Ap(e,i){return Ko(4,4,e,i)}function Sp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function wp(e,i,a){a=a!=null?a.concat([e]):null,Ko(4,4,Sp.bind(null,i,e),a)}function wf(){}function Rp(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&mf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Ip(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&mf(i,l[1]))return l[0];if(l=e(),Is){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l}function Rf(e,i,a){return a===void 0||(fr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Ny(),Rt.lanes|=e,vr|=e,a)}function Cp(e,i,a,l){return fn(a,i)?a:Ta.current!==null?(e=Rf(e,a,l),fn(e,i)||(xe=!0),e):(fr&42)===0?(xe=!0,e.memoizedState=a):(e=Ny(),Rt.lanes|=e,vr|=e,i)}function Dp(e,i,a,l,h){var d=it.p;it.p=d!==0&&8>d?d:8;var v=G.T,T={};G.T=T,Df(e,!1,i,a);try{var w=h(),z=G.S;if(z!==null&&z(T,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var Q=Pb(w,l);Yo(e,i,Q,yn(e))}else Yo(e,i,l,yn(e))}catch(X){Yo(e,i,{then:function(){},status:"rejected",reason:X},yn())}finally{it.p=d,G.T=v}}function Bb(){}function If(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Np(e).queue;Dp(e,h,i,ft,a===null?Bb:function(){return Op(e),a(l)})}function Np(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:ft},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Op(e){var i=Np(e).next.queue;Yo(e,i,{},yn())}function Cf(){return Qe(fl)}function Mp(){return ve().memoizedState}function xp(){return ve().memoizedState}function qb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=yn();e=cr(a);var l=hr(i,e,a);l!==null&&(_n(l,i,a),qo(l,i,a)),i={cache:rf()},e.payload=i;return}i=i.return}}function Hb(e,i,a){var l=yn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},zu(e)?kp(i,a):(a=Kh(e,i,a,l),a!==null&&(_n(a,e,l),Pp(a,i,l)))}function Vp(e,i,a){var l=yn();Yo(e,i,a,l)}function Yo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(zu(e))kp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,fn(T,v))return bu(e,i,h,0),ee===null&&Eu(),!1}catch{}finally{}if(a=Kh(e,i,h,l),a!==null)return _n(a,e,l),Pp(a,i,l),!0}return!1}function Df(e,i,a,l){if(l={lane:2,revertLane:od(),action:l,hasEagerState:!1,eagerState:null,next:null},zu(e)){if(i)throw Error(s(479))}else i=Kh(e,a,l,2),i!==null&&_n(i,e,2)}function zu(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function kp(e,i){Ea=xu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Pp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,po(e,a)}}var ju={readContext:Qe,use:ku,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de},Up={readContext:Qe,use:ku,useCallback:function(e,i){return sn().memoizedState=[e,i===void 0?null:i],e},useContext:Qe,useEffect:Tp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Lu(4194308,4,Sp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Lu(4194308,4,e,i)},useInsertionEffect:function(e,i){Lu(4,2,e,i)},useMemo:function(e,i){var a=sn();i=i===void 0?null:i;var l=e();if(Is){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=sn();if(a!==void 0){var h=a(i);if(Is){cn(!0);try{a(i)}finally{cn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Hb.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=sn();return e={current:e},i.memoizedState=e},useState:function(e){e=Af(e);var i=e.queue,a=Vp.bind(null,Rt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:wf,useDeferredValue:function(e,i){var a=sn();return Rf(a,e,i)},useTransition:function(){var e=Af(!1);return e=Dp.bind(null,Rt,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Rt,h=sn();if(Ht){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ee===null)throw Error(s(349));(zt&124)!==0||rp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Tp(ap.bind(null,l,d,e),[e]),l.flags|=2048,Aa(9,Uu(),sp.bind(null,l,d,a,i),null),a},useId:function(){var e=sn(),i=ee.identifierPrefix;if(Ht){var a=Vi,l=xi;a=(l&~(1<<32-Ge(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Vu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Ub++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Cf,useFormState:gp,useActionState:gp,useOptimistic:function(e){var i=sn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Df.bind(null,Rt,!0,a),a.dispatch=i,[e,i]},useMemoCache:Tf,useCacheRefresh:function(){return sn().memoizedState=qb.bind(null,Rt)}},Lp={readContext:Qe,use:ku,useCallback:Rp,useContext:Qe,useEffect:Ep,useImperativeHandle:wp,useInsertionEffect:bp,useLayoutEffect:Ap,useMemo:Ip,useReducer:Pu,useRef:vp,useState:function(){return Pu(Ui)},useDebugValue:wf,useDeferredValue:function(e,i){var a=ve();return Cp(a,Zt.memoizedState,e,i)},useTransition:function(){var e=Pu(Ui)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:Qo(e),i]},useSyncExternalStore:ip,useId:Mp,useHostTransitionStatus:Cf,useFormState:pp,useActionState:pp,useOptimistic:function(e,i){var a=ve();return up(a,Zt,e,i)},useMemoCache:Tf,useCacheRefresh:xp},Fb={readContext:Qe,use:ku,useCallback:Rp,useContext:Qe,useEffect:Ep,useImperativeHandle:wp,useInsertionEffect:bp,useLayoutEffect:Ap,useMemo:Ip,useReducer:bf,useRef:vp,useState:function(){return bf(Ui)},useDebugValue:wf,useDeferredValue:function(e,i){var a=ve();return Zt===null?Rf(a,e,i):Cp(a,Zt.memoizedState,e,i)},useTransition:function(){var e=bf(Ui)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:Qo(e),i]},useSyncExternalStore:ip,useId:Mp,useHostTransitionStatus:Cf,useFormState:_p,useActionState:_p,useOptimistic:function(e,i){var a=ve();return Zt!==null?up(a,Zt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:xp},Sa=null,Xo=0;function Bu(e){var i=Xo;return Xo+=1,Sa===null&&(Sa=[]),Xg(Sa,e,i)}function $o(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function qu(e,i){throw i.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function zp(e){var i=e._init;return i(e._payload)}function jp(e){function i(k,N){if(e){var L=k.deletions;L===null?(k.deletions=[N],k.flags|=16):L.push(N)}}function a(k,N){if(!e)return null;for(;N!==null;)i(k,N),N=N.sibling;return null}function l(k){for(var N=new Map;k!==null;)k.key!==null?N.set(k.key,k):N.set(k.index,k),k=k.sibling;return N}function h(k,N){return k=Mi(k,N),k.index=0,k.sibling=null,k}function d(k,N,L){return k.index=L,e?(L=k.alternate,L!==null?(L=L.index,L<N?(k.flags|=67108866,N):L):(k.flags|=67108866,N)):(k.flags|=1048576,N)}function v(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function T(k,N,L,Y){return N===null||N.tag!==6?(N=Xh(L,k.mode,Y),N.return=k,N):(N=h(N,L),N.return=k,N)}function w(k,N,L,Y){var lt=L.type;return lt===F?Q(k,N,L.props.children,Y,L.key):N!==null&&(N.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===A&&zp(lt)===N.type)?(N=h(N,L.props),$o(N,L),N.return=k,N):(N=Su(L.type,L.key,L.props,null,k.mode,Y),$o(N,L),N.return=k,N)}function z(k,N,L,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==L.containerInfo||N.stateNode.implementation!==L.implementation?(N=$h(L,k.mode,Y),N.return=k,N):(N=h(N,L.children||[]),N.return=k,N)}function Q(k,N,L,Y,lt){return N===null||N.tag!==7?(N=vs(L,k.mode,Y,lt),N.return=k,N):(N=h(N,L),N.return=k,N)}function X(k,N,L){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Xh(""+N,k.mode,L),N.return=k,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case C:return L=Su(N.type,N.key,N.props,null,k.mode,L),$o(L,N),L.return=k,L;case U:return N=$h(N,k.mode,L),N.return=k,N;case A:var Y=N._init;return N=Y(N._payload),X(k,N,L)}if(Ft(N)||V(N))return N=vs(N,k.mode,L,null),N.return=k,N;if(typeof N.then=="function")return X(k,Bu(N),L);if(N.$$typeof===ct)return X(k,Cu(k,N),L);qu(k,N)}return null}function B(k,N,L,Y){var lt=N!==null?N.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return lt!==null?null:T(k,N,""+L,Y);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case C:return L.key===lt?w(k,N,L,Y):null;case U:return L.key===lt?z(k,N,L,Y):null;case A:return lt=L._init,L=lt(L._payload),B(k,N,L,Y)}if(Ft(L)||V(L))return lt!==null?null:Q(k,N,L,Y,null);if(typeof L.then=="function")return B(k,N,Bu(L),Y);if(L.$$typeof===ct)return B(k,N,Cu(k,L),Y);qu(k,L)}return null}function q(k,N,L,Y,lt){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return k=k.get(L)||null,T(N,k,""+Y,lt);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case C:return k=k.get(Y.key===null?L:Y.key)||null,w(N,k,Y,lt);case U:return k=k.get(Y.key===null?L:Y.key)||null,z(N,k,Y,lt);case A:var It=Y._init;return Y=It(Y._payload),q(k,N,L,Y,lt)}if(Ft(Y)||V(Y))return k=k.get(L)||null,Q(N,k,Y,lt,null);if(typeof Y.then=="function")return q(k,N,L,Bu(Y),lt);if(Y.$$typeof===ct)return q(k,N,L,Cu(N,Y),lt);qu(N,Y)}return null}function Et(k,N,L,Y){for(var lt=null,It=null,dt=N,_t=N=0,ke=null;dt!==null&&_t<L.length;_t++){dt.index>_t?(ke=dt,dt=null):ke=dt.sibling;var qt=B(k,dt,L[_t],Y);if(qt===null){dt===null&&(dt=ke);break}e&&dt&&qt.alternate===null&&i(k,dt),N=d(qt,N,_t),It===null?lt=qt:It.sibling=qt,It=qt,dt=ke}if(_t===L.length)return a(k,dt),Ht&&Es(k,_t),lt;if(dt===null){for(;_t<L.length;_t++)dt=X(k,L[_t],Y),dt!==null&&(N=d(dt,N,_t),It===null?lt=dt:It.sibling=dt,It=dt);return Ht&&Es(k,_t),lt}for(dt=l(dt);_t<L.length;_t++)ke=q(dt,k,_t,L[_t],Y),ke!==null&&(e&&ke.alternate!==null&&dt.delete(ke.key===null?_t:ke.key),N=d(ke,N,_t),It===null?lt=ke:It.sibling=ke,It=ke);return e&&dt.forEach(function(Cr){return i(k,Cr)}),Ht&&Es(k,_t),lt}function yt(k,N,L,Y){if(L==null)throw Error(s(151));for(var lt=null,It=null,dt=N,_t=N=0,ke=null,qt=L.next();dt!==null&&!qt.done;_t++,qt=L.next()){dt.index>_t?(ke=dt,dt=null):ke=dt.sibling;var Cr=B(k,dt,qt.value,Y);if(Cr===null){dt===null&&(dt=ke);break}e&&dt&&Cr.alternate===null&&i(k,dt),N=d(Cr,N,_t),It===null?lt=Cr:It.sibling=Cr,It=Cr,dt=ke}if(qt.done)return a(k,dt),Ht&&Es(k,_t),lt;if(dt===null){for(;!qt.done;_t++,qt=L.next())qt=X(k,qt.value,Y),qt!==null&&(N=d(qt,N,_t),It===null?lt=qt:It.sibling=qt,It=qt);return Ht&&Es(k,_t),lt}for(dt=l(dt);!qt.done;_t++,qt=L.next())qt=q(dt,k,_t,qt.value,Y),qt!==null&&(e&&qt.alternate!==null&&dt.delete(qt.key===null?_t:qt.key),N=d(qt,N,_t),It===null?lt=qt:It.sibling=qt,It=qt);return e&&dt.forEach(function(GA){return i(k,GA)}),Ht&&Es(k,_t),lt}function Wt(k,N,L,Y){if(typeof L=="object"&&L!==null&&L.type===F&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case C:t:{for(var lt=L.key;N!==null;){if(N.key===lt){if(lt=L.type,lt===F){if(N.tag===7){a(k,N.sibling),Y=h(N,L.props.children),Y.return=k,k=Y;break t}}else if(N.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===A&&zp(lt)===N.type){a(k,N.sibling),Y=h(N,L.props),$o(Y,L),Y.return=k,k=Y;break t}a(k,N);break}else i(k,N);N=N.sibling}L.type===F?(Y=vs(L.props.children,k.mode,Y,L.key),Y.return=k,k=Y):(Y=Su(L.type,L.key,L.props,null,k.mode,Y),$o(Y,L),Y.return=k,k=Y)}return v(k);case U:t:{for(lt=L.key;N!==null;){if(N.key===lt)if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){a(k,N.sibling),Y=h(N,L.children||[]),Y.return=k,k=Y;break t}else{a(k,N);break}else i(k,N);N=N.sibling}Y=$h(L,k.mode,Y),Y.return=k,k=Y}return v(k);case A:return lt=L._init,L=lt(L._payload),Wt(k,N,L,Y)}if(Ft(L))return Et(k,N,L,Y);if(V(L)){if(lt=V(L),typeof lt!="function")throw Error(s(150));return L=lt.call(L),yt(k,N,L,Y)}if(typeof L.then=="function")return Wt(k,N,Bu(L),Y);if(L.$$typeof===ct)return Wt(k,N,Cu(k,L),Y);qu(k,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,N!==null&&N.tag===6?(a(k,N.sibling),Y=h(N,L),Y.return=k,k=Y):(a(k,N),Y=Xh(L,k.mode,Y),Y.return=k,k=Y),v(k)):a(k,N)}return function(k,N,L,Y){try{Xo=0;var lt=Wt(k,N,L,Y);return Sa=null,lt}catch(dt){if(dt===jo||dt===Nu)throw dt;var It=dn(29,dt,null,k.mode);return It.lanes=Y,It.return=k,It}finally{}}}var wa=jp(!0),Bp=jp(!1),On=Z(null),ai=null;function dr(e){var i=e.alternate;tt(Re,Re.current&1),tt(On,e),ai===null&&(i===null||Ta.current!==null||i.memoizedState!==null)&&(ai=e)}function qp(e){if(e.tag===22){if(tt(Re,Re.current),tt(On,e),ai===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ai=e)}}else mr()}function mr(){tt(Re,Re.current),tt(On,On.current)}function Li(e){rt(On),ai===e&&(ai=null),rt(Re)}var Re=Z(0);function Hu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||vd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Nf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Of={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=yn(),h=cr(l);h.payload=i,a!=null&&(h.callback=a),i=hr(e,h,l),i!==null&&(_n(i,e,l),qo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=yn(),h=cr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=hr(e,h,l),i!==null&&(_n(i,e,l),qo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=yn(),l=cr(a);l.tag=2,i!=null&&(l.callback=i),i=hr(e,l,a),i!==null&&(_n(i,e,a),qo(i,e,a))}};function Hp(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Mo(a,l)||!Mo(h,d):!0}function Fp(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Of.enqueueReplaceState(i,i.state,null)}function Cs(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Fu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Gp(e){Fu(e)}function Qp(e){console.error(e)}function Kp(e){Fu(e)}function Gu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Yp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Mf(e,i,a){return a=cr(a),a.tag=3,a.payload={element:null},a.callback=function(){Gu(e,i)},a}function Xp(e){return e=cr(e),e.tag=3,e}function $p(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Yp(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Yp(i,a,l),typeof h!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function Gb(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Uo(i,a,h,!0),a=On.current,a!==null){switch(a.tag){case 13:return ai===null?nd():a.alternate===null&&he===0&&(he=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===of?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),rd(e,l,h)),!1;case 22:return a.flags|=65536,l===of?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),rd(e,l,h)),!1}throw Error(s(435,a.tag))}return rd(e,l,h),nd(),!1}if(Ht)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Wh&&(e=Error(s(422),{cause:l}),Po(In(e,a)))):(l!==Wh&&(i=Error(s(423),{cause:l}),Po(In(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=In(l,a),h=Mf(e.stateNode,l,h),cf(e,h),he!==4&&(he=2)),!1;var d=Error(s(520),{cause:l});if(d=In(d,a),il===null?il=[d]:il.push(d),he!==4&&(he=2),i===null)return!0;l=In(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Mf(a.stateNode,l,e),cf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Tr===null||!Tr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Xp(h),$p(h,e,a,l),cf(a,h),!1}a=a.return}while(a!==null);return!1}var Zp=Error(s(461)),xe=!1;function ze(e,i,a,l){i.child=e===null?Bp(i,null,a,l):wa(i,e.child,a,l)}function Jp(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return ws(i),l=gf(e,i,a,v,d,h),T=pf(),e!==null&&!xe?(yf(e,i,h),zi(e,i,h)):(Ht&&T&&Zh(i),i.flags|=1,ze(e,i,l,h),i.child)}function Wp(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Yh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,ty(e,i,d,l,h)):(e=Su(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!jf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(v,l)&&e.ref===i.ref)return zi(e,i,h)}return i.flags|=1,e=Mi(d,l),e.ref=i.ref,e.return=i,i.child=e}function ty(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Mo(d,l)&&e.ref===i.ref)if(xe=!1,i.pendingProps=l=d,jf(e,h))(e.flags&131072)!==0&&(xe=!0);else return i.lanes=e.lanes,zi(e,i,h)}return xf(e,i,a,l,h)}function ey(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return ny(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Du(i,d!==null?d.cachePool:null),d!==null?tp(i,d):ff(),qp(i);else return i.lanes=i.childLanes=536870912,ny(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Du(i,d.cachePool),tp(i,d),mr(),i.memoizedState=null):(e!==null&&Du(i,null),ff(),mr());return ze(e,i,h,a),i.child}function ny(e,i,a,l){var h=af();return h=h===null?null:{parent:we._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Du(i,null),ff(),qp(i),e!==null&&Uo(e,i,l,!0),null}function Qu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function xf(e,i,a,l,h){return ws(i),a=gf(e,i,a,l,void 0,h),l=pf(),e!==null&&!xe?(yf(e,i,h),zi(e,i,h)):(Ht&&l&&Zh(i),i.flags|=1,ze(e,i,a,h),i.child)}function iy(e,i,a,l,h,d){return ws(i),i.updateQueue=null,a=np(i,l,a,h),ep(e),l=pf(),e!==null&&!xe?(yf(e,i,d),zi(e,i,d)):(Ht&&l&&Zh(i),i.flags|=1,ze(e,i,a,d),i.child)}function ry(e,i,a,l,h){if(ws(i),i.stateNode===null){var d=ga,v=a.contextType;typeof v=="object"&&v!==null&&(d=Qe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Of,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},lf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Qe(v):ga,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Nf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Of.enqueueReplaceState(d,d.state,null),Fo(i,l,d,h),Ho(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,w=Cs(a,T);d.props=w;var z=d.context,Q=a.contextType;v=ga,typeof Q=="object"&&Q!==null&&(v=Qe(Q));var X=a.getDerivedStateFromProps;Q=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==v)&&Fp(i,d,l,v),ur=!1;var B=i.memoizedState;d.state=B,Fo(i,l,d,h),Ho(),z=i.memoizedState,T||B!==z||ur?(typeof X=="function"&&(Nf(i,a,X,l),z=i.memoizedState),(w=ur||Hp(i,a,w,l,B,z,v))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),d.props=l,d.state=z,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,uf(e,i),v=i.memoizedProps,Q=Cs(a,v),d.props=Q,X=i.pendingProps,B=d.context,z=a.contextType,w=ga,typeof z=="object"&&z!==null&&(w=Qe(z)),T=a.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==X||B!==w)&&Fp(i,d,l,w),ur=!1,B=i.memoizedState,d.state=B,Fo(i,l,d,h),Ho();var q=i.memoizedState;v!==X||B!==q||ur||e!==null&&e.dependencies!==null&&Iu(e.dependencies)?(typeof T=="function"&&(Nf(i,a,T,l),q=i.memoizedState),(Q=ur||Hp(i,a,Q,l,B,q,w)||e!==null&&e.dependencies!==null&&Iu(e.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=w,l=Q):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Qu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=wa(i,e.child,null,h),i.child=wa(i,null,a,h)):ze(e,i,a,h),i.memoizedState=d.state,e=i.child):e=zi(e,i,h),e}function sy(e,i,a,l){return ko(),i.flags|=256,ze(e,i,a,l),i.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(e){return{baseLanes:e,cachePool:Qg()}}function Pf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Mn),e}function ay(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ht){if(h?dr(i):mr(),Ht){var T=ce,w;if(w=T){t:{for(w=T,T=si;w.nodeType!==8;){if(!T){T=null;break t}if(w=qn(w.nextSibling),w===null){T=null;break t}}T=w}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ts!==null?{id:xi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},w=dn(18,null,null,0),w.stateNode=T,w.return=i,i.child=w,en=i,ce=null,w=!0):w=!1}w||As(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return vd(T)?i.lanes=32:i.lanes=536870912,null;Li(i)}return T=l.children,l=l.fallback,h?(mr(),h=i.mode,T=Ku({mode:"hidden",children:T},h),l=vs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=kf(a),h.childLanes=Pf(e,v,a),i.memoizedState=Vf,l):(dr(i),Uf(i,T))}if(w=e.memoizedState,w!==null&&(T=w.dehydrated,T!==null)){if(d)i.flags&256?(dr(i),i.flags&=-257,i=Lf(e,i,a)):i.memoizedState!==null?(mr(),i.child=e.child,i.flags|=128,i=null):(mr(),h=l.fallback,T=i.mode,l=Ku({mode:"visible",children:l.children},T),h=vs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,wa(i,e.child,null,a),l=i.child,l.memoizedState=kf(a),l.childLanes=Pf(e,v,a),i.memoizedState=Vf,i=h);else if(dr(i),vd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var z=v.dgst;v=z,l=Error(s(419)),l.stack="",l.digest=v,Po({value:l,source:null,stack:null}),i=Lf(e,i,a)}else if(xe||Uo(e,i,a,!1),v=(a&e.childLanes)!==0,xe||v){if(v=ee,v!==null&&(l=a&-a,l=(l&42)!==0?1:er(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,ma(e,l),_n(v,e,l),Zp;T.data==="$?"||nd(),i=Lf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,ce=qn(T.nextSibling),en=i,Ht=!0,bs=null,si=!1,e!==null&&(Dn[Nn++]=xi,Dn[Nn++]=Vi,Dn[Nn++]=Ts,xi=e.id,Vi=e.overflow,Ts=i),i=Uf(i,l.children),i.flags|=4096);return i}return h?(mr(),h=l.fallback,T=i.mode,w=e.child,z=w.sibling,l=Mi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,z!==null?h=Mi(z,h):(h=vs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=kf(a):(w=T.cachePool,w!==null?(z=we._currentValue,w=w.parent!==z?{parent:z,pool:z}:w):w=Qg(),T={baseLanes:T.baseLanes|a,cachePool:w}),h.memoizedState=T,h.childLanes=Pf(e,v,a),i.memoizedState=Vf,l):(dr(i),a=e.child,e=a.sibling,a=Mi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Uf(e,i){return i=Ku({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ku(e,i){return e=dn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Lf(e,i,a){return wa(i,e.child,null,a),e=Uf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function oy(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ef(e.return,i,a)}function zf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function ly(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(ze(e,i,l.children,a),l=Re.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oy(e,a,i);else if(e.tag===19)oy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(tt(Re,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Hu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),zf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Hu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}zf(i,!0,a,null,d);break;case"together":zf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),vr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Uo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Mi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Mi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function jf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Iu(e)))}function Qb(e,i,a){switch(i.tag){case 3:Vt(i,i.stateNode.containerInfo),lr(i,we,e.memoizedState.cache),ko();break;case 27:case 5:nn(i);break;case 4:Vt(i,i.stateNode.containerInfo);break;case 10:lr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(dr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?ay(e,i,a):(dr(i),e=zi(e,i,a),e!==null?e.sibling:null);dr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Uo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return ly(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),tt(Re,Re.current),l)break;return null;case 22:case 23:return i.lanes=0,ey(e,i,a);case 24:lr(i,we,e.memoizedState.cache)}return zi(e,i,a)}function uy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)xe=!0;else{if(!jf(e,a)&&(i.flags&128)===0)return xe=!1,Qb(e,i,a);xe=(e.flags&131072)!==0}else xe=!1,Ht&&(i.flags&1048576)!==0&&zg(i,Ru,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Yh(l)?(e=Cs(l,e),i.tag=1,i=ry(null,i,l,e,a)):(i.tag=0,i=xf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===Bt){i.tag=11,i=Jp(null,i,l,e,a);break t}else if(h===O){i.tag=14,i=Wp(null,i,l,e,a);break t}}throw i=ie(l)||l,Error(s(306,i,""))}}return i;case 0:return xf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Cs(l,i.pendingProps),ry(e,i,l,h,a);case 3:t:{if(Vt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,uf(e,i),Fo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,lr(i,we,l),l!==d.cache&&nf(i,[we],a,!0),Ho(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=sy(e,i,l,a);break t}else if(l!==h){h=In(Error(s(424)),i),Po(h),i=sy(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ce=qn(e.firstChild),en=i,Ht=!0,bs=null,si=!0,a=Bp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ko(),l===h){i=zi(e,i,a);break t}ze(e,i,l,a)}i=i.child}return i;case 26:return Qu(e,i),e===null?(a=d_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ht||(a=i.type,e=i.pendingProps,l=oc(at.current).createElement(a),l[be]=i,l[pe]=e,Be(l,a,e),fe(l),i.stateNode=l):i.memoizedState=d_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return nn(i),e===null&&Ht&&(l=i.stateNode=c_(i.type,i.pendingProps,at.current),en=i,si=!0,h=ce,Ar(i.type)?(Td=h,ce=qn(l.firstChild)):ce=h),ze(e,i,i.pendingProps.children,a),Qu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ht&&((h=l=ce)&&(l=TA(l,i.type,i.pendingProps,si),l!==null?(i.stateNode=l,en=i,ce=qn(l.firstChild),si=!1,h=!0):h=!1),h||As(i)),nn(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,pd(h,d)?l=null:v!==null&&pd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=gf(e,i,Lb,null,null,a),fl._currentValue=h),Qu(e,i),ze(e,i,l,a),i.child;case 6:return e===null&&Ht&&((e=a=ce)&&(a=EA(a,i.pendingProps,si),a!==null?(i.stateNode=a,en=i,ce=null,e=!0):e=!1),e||As(i)),null;case 13:return ay(e,i,a);case 4:return Vt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=wa(i,null,l,a):ze(e,i,l,a),i.child;case 11:return Jp(e,i,i.type,i.pendingProps,a);case 7:return ze(e,i,i.pendingProps,a),i.child;case 8:return ze(e,i,i.pendingProps.children,a),i.child;case 12:return ze(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,lr(i,i.type,l.value),ze(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ws(i),h=Qe(h),l=l(h),i.flags|=1,ze(e,i,l,a),i.child;case 14:return Wp(e,i,i.type,i.pendingProps,a);case 15:return ty(e,i,i.type,i.pendingProps,a);case 19:return ly(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Ku(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Mi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return ey(e,i,a);case 24:return ws(i),l=Qe(we),e===null?(h=af(),h===null&&(h=ee,d=rf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},lf(i),lr(i,we,h)):((e.lanes&a)!==0&&(uf(e,i),Fo(i,null,null,a),Ho()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),lr(i,we,l)):(l=d.cache,lr(i,we,l),l!==h.cache&&nf(i,[we],a,!0))),ze(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ji(e){e.flags|=4}function cy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!__(i)){if(i=On.current,i!==null&&((zt&4194048)===zt?ai!==null:(zt&62914560)!==zt&&(zt&536870912)===0||i!==ai))throw Bo=of,Kg;e.flags|=8192}}function Yu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?mo():536870912,e.lanes|=i,Da|=i)}function Zo(e,i){if(!Ht)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ae(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function Kb(e,i,a){var l=i.pendingProps;switch(Jh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(i),null;case 1:return ae(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Pi(we),Ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vo(i)?ji(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qg())),ae(i),null;case 26:return a=i.memoizedState,e===null?(ji(i),a!==null?(ae(i),cy(i,a)):(ae(i),i.flags&=-16777217)):a?a!==e.memoizedState?(ji(i),ae(i),cy(i,a)):(ae(i),i.flags&=-16777217):(e.memoizedProps!==l&&ji(i),ae(i),i.flags&=-16777217),null;case 27:rn(i),a=at.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ae(i),null}e=et.current,Vo(i)?jg(i):(e=c_(h,l,a),i.stateNode=e,ji(i))}return ae(i),null;case 5:if(rn(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ae(i),null}if(e=et.current,Vo(i))jg(i);else{switch(h=oc(at.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[be]=i,e[pe]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Be(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(i)}}return ae(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=at.current,Vo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[be]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||i_(e.nodeValue,a)),e||As(i)}else e=oc(e).createTextNode(l),e[be]=i,i.stateNode=e}return ae(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Vo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[be]=i}else ko(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ae(i),h=!1}else h=qg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Li(i),i):(Li(i),null)}if(Li(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Yu(i,i.updateQueue),ae(i),null;case 4:return Ne(),e===null&&hd(i.stateNode.containerInfo),ae(i),null;case 10:return Pi(i.type),ae(i),null;case 19:if(rt(Re),h=i.memoizedState,h===null)return ae(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Zo(h,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Hu(e),d!==null){for(i.flags|=128,Zo(h,!1),e=d.updateQueue,i.updateQueue=e,Yu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Lg(a,e),a=a.sibling;return tt(Re,Re.current&1|2),i.child}e=e.sibling}h.tail!==null&&En()>Zu&&(i.flags|=128,l=!0,Zo(h,!1),i.lanes=4194304)}else{if(!l)if(e=Hu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Yu(i,e),Zo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ht)return ae(i),null}else 2*En()-h.renderingStartTime>Zu&&a!==536870912&&(i.flags|=128,l=!0,Zo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=En(),i.sibling=null,e=Re.current,tt(Re,l?e&1|2:e&1),i):(ae(i),null);case 22:case 23:return Li(i),df(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ae(i),i.subtreeFlags&6&&(i.flags|=8192)):ae(i),a=i.updateQueue,a!==null&&Yu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&rt(Rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Pi(we),ae(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Yb(e,i){switch(Jh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Pi(we),Ne(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return rn(i),null;case 13:if(Li(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ko()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return rt(Re),null;case 4:return Ne(),null;case 10:return Pi(i.type),null;case 22:case 23:return Li(i),df(),e!==null&&rt(Rs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Pi(we),null;case 25:return null;default:return null}}function hy(e,i){switch(Jh(i),i.tag){case 3:Pi(we),Ne();break;case 26:case 27:case 5:rn(i);break;case 4:Ne();break;case 13:Li(i);break;case 19:rt(Re);break;case 10:Pi(i.type);break;case 22:case 23:Li(i),df(),e!==null&&rt(Rs);break;case 24:Pi(we)}}function Jo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){te(i,i.return,T)}}function gr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var w=a,z=T;try{z()}catch(Q){te(h,w,Q)}}}l=l.next}while(l!==d)}}catch(Q){te(i,i.return,Q)}}function fy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Wg(i,a)}catch(l){te(e,e.return,l)}}}function dy(e,i,a){a.props=Cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){te(e,i,l)}}function Wo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){te(e,i,h)}}function oi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){te(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){te(e,i,h)}else a.current=null}function my(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){te(e,e.return,h)}}function Bf(e,i,a){try{var l=e.stateNode;gA(l,e.type,a,i),l[pe]=i}catch(h){te(e,e.return,h)}}function gy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ar(e.type)||e.tag===4}function qf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||gy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ac));else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Hf(e,i,a),e=e.sibling;e!==null;)Hf(e,i,a),e=e.sibling}function Xu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Xu(e,i,a),e=e.sibling;e!==null;)Xu(e,i,a),e=e.sibling}function py(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Be(i,l,a),i[be]=e,i[pe]=a}catch(d){te(e,e.return,d)}}var Bi=!1,me=!1,Ff=!1,yy=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Xb(e,i){if(e=e.containerInfo,md=dc,e=Cg(e),Bh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,w=-1,z=0,Q=0,X=e,B=null;e:for(;;){for(var q;X!==a||h!==0&&X.nodeType!==3||(T=v+h),X!==d||l!==0&&X.nodeType!==3||(w=v+l),X.nodeType===3&&(v+=X.nodeValue.length),(q=X.firstChild)!==null;)B=X,X=q;for(;;){if(X===e)break e;if(B===a&&++z===h&&(T=v),B===d&&++Q===l&&(w=v),(q=X.nextSibling)!==null)break;X=B,B=X.parentNode}X=q}a=T===-1||w===-1?null:{start:T,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(gd={focusedElem:e,selectionRange:a},dc=!1,Ve=i;Ve!==null;)if(i=Ve,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ve=e;else for(;Ve!==null;){switch(i=Ve,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Et=Cs(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(yt){te(a,a.return,yt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)_d(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_d(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ve=e;break}Ve=i.return}}function _y(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:pr(e,a),l&4&&Jo(5,a);break;case 1:if(pr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){te(a,a.return,v)}else{var h=Cs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){te(a,a.return,v)}}l&64&&fy(a),l&512&&Wo(a,a.return);break;case 3:if(pr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Wg(e,i)}catch(v){te(a,a.return,v)}}break;case 27:i===null&&l&4&&py(a);case 26:case 5:pr(e,a),i===null&&l&4&&my(a),l&512&&Wo(a,a.return);break;case 12:pr(e,a);break;case 13:pr(e,a),l&4&&Ey(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rA.bind(null,a),bA(e,a))));break;case 22:if(l=a.memoizedState!==null||Bi,!l){i=i!==null&&i.memoizedState!==null||me,h=Bi;var d=me;Bi=l,(me=i)&&!d?yr(e,a,(a.subtreeFlags&8772)!==0):pr(e,a),Bi=h,me=d}break;case 30:break;default:pr(e,a)}}function vy(e){var i=e.alternate;i!==null&&(e.alternate=null,vy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&rr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var se=null,an=!1;function qi(e,i,a){for(a=a.child;a!==null;)Ty(e,i,a),a=a.sibling}function Ty(e,i,a){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:me||oi(a,i),qi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:me||oi(a,i);var l=se,h=an;Ar(a.type)&&(se=a.stateNode,an=!1),qi(e,i,a),ll(a.stateNode),se=l,an=h;break;case 5:me||oi(a,i);case 6:if(l=se,h=an,se=null,qi(e,i,a),se=l,an=h,se!==null)if(an)try{(se.nodeType===9?se.body:se.nodeName==="HTML"?se.ownerDocument.body:se).removeChild(a.stateNode)}catch(d){te(a,i,d)}else try{se.removeChild(a.stateNode)}catch(d){te(a,i,d)}break;case 18:se!==null&&(an?(e=se,l_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pl(e)):l_(se,a.stateNode));break;case 4:l=se,h=an,se=a.stateNode.containerInfo,an=!0,qi(e,i,a),se=l,an=h;break;case 0:case 11:case 14:case 15:me||gr(2,a,i),me||gr(4,a,i),qi(e,i,a);break;case 1:me||(oi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&dy(a,i,l)),qi(e,i,a);break;case 21:qi(e,i,a);break;case 22:me=(l=me)||a.memoizedState!==null,qi(e,i,a),me=l;break;default:qi(e,i,a)}}function Ey(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(a){te(i,i.return,a)}}function $b(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new yy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new yy),i;default:throw Error(s(435,e.tag))}}function Gf(e,i){var a=$b(e);i.forEach(function(l){var h=sA.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function mn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Ar(T.type)){se=T.stateNode,an=!1;break t}break;case 5:se=T.stateNode,an=!1;break t;case 3:case 4:se=T.stateNode.containerInfo,an=!0;break t}T=T.return}if(se===null)throw Error(s(160));Ty(d,v,h),se=null,an=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)by(i,e),i=i.sibling}var Bn=null;function by(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(i,e),gn(e),l&4&&(gr(3,e,e.return),Jo(3,e),gr(5,e,e.return));break;case 1:mn(i,e),gn(e),l&512&&(me||a===null||oi(a,a.return)),l&64&&Bi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Bn;if(mn(i,e),gn(e),l&512&&(me||a===null||oi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[is]||d[be]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Be(d,l,a),d[be]=e,fe(d),l=d;break t;case"link":var v=p_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;case"meta":if(v=p_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[be]=e,fe(d),l=d}e.stateNode=l}else y_(h,e.type,e.stateNode);else e.stateNode=g_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?y_(h,e.type,e.stateNode):g_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:mn(i,e),gn(e),l&512&&(me||a===null||oi(a,a.return)),a!==null&&l&4&&Bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mn(i,e),gn(e),l&512&&(me||a===null||oi(a,a.return)),e.flags&32){h=e.stateNode;try{An(h,"")}catch(q){te(e,e.return,q)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Bf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Ff=!0);break;case 6:if(mn(i,e),gn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(q){te(e,e.return,q)}}break;case 3:if(cc=null,h=Bn,Bn=lc(i.containerInfo),mn(i,e),Bn=h,gn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{pl(i.containerInfo)}catch(q){te(e,e.return,q)}Ff&&(Ff=!1,Ay(e));break;case 4:l=Bn,Bn=lc(e.stateNode.containerInfo),mn(i,e),gn(e),Bn=l;break;case 12:mn(i,e),gn(e);break;case 13:mn(i,e),gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zf=En()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Gf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,z=Bi,Q=me;if(Bi=z||h,me=Q||w,mn(i,e),me=Q,Bi=z,gn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Bi||me||Ds(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=w.stateNode;var X=w.memoizedProps.style,B=X!=null&&X.hasOwnProperty("display")?X.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(q){te(w,w.return,q)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(q){te(w,w.return,q)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Gf(e,a))));break;case 19:mn(i,e),gn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Gf(e,l)));break;case 30:break;case 21:break;default:mn(i,e),gn(e)}}function gn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(gy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=qf(e);Xu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(An(v,""),a.flags&=-33);var T=qf(e);Xu(e,T,v);break;case 3:case 4:var w=a.stateNode.containerInfo,z=qf(e);Hf(e,z,w);break;default:throw Error(s(161))}}catch(Q){te(e,e.return,Q)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ay(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ay(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function pr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)_y(e,i.alternate,i),i=i.sibling}function Ds(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:gr(4,i,i.return),Ds(i);break;case 1:oi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&dy(i,i.return,a),Ds(i);break;case 27:ll(i.stateNode);case 26:case 5:oi(i,i.return),Ds(i);break;case 22:i.memoizedState===null&&Ds(i);break;case 30:Ds(i);break;default:Ds(i)}e=e.sibling}}function yr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:yr(h,d,a),Jo(4,d);break;case 1:if(yr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){te(l,l.return,z)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)Jg(w[h],T)}catch(z){te(l,l.return,z)}}a&&v&64&&fy(d),Wo(d,d.return);break;case 27:py(d);case 26:case 5:yr(h,d,a),a&&l===null&&v&4&&my(d),Wo(d,d.return);break;case 12:yr(h,d,a);break;case 13:yr(h,d,a),a&&v&4&&Ey(h,d);break;case 22:d.memoizedState===null&&yr(h,d,a),Wo(d,d.return);break;case 30:break;default:yr(h,d,a)}i=i.sibling}}function Qf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Lo(a))}function Kf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e))}function li(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Sy(e,i,a,l),i=i.sibling}function Sy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:li(e,i,a,l),h&2048&&Jo(9,i);break;case 1:li(e,i,a,l);break;case 3:li(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e)));break;case 12:if(h&2048){li(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){te(i,i.return,w)}}else li(e,i,a,l);break;case 13:li(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?li(e,i,a,l):tl(e,i):d._visibility&2?li(e,i,a,l):(d._visibility|=2,Ra(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Qf(v,i);break;case 24:li(e,i,a,l),h&2048&&Kf(i.alternate,i);break;default:li(e,i,a,l)}}function Ra(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,w=l,z=v.flags;switch(v.tag){case 0:case 11:case 15:Ra(d,v,T,w,h),Jo(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&2?Ra(d,v,T,w,h):tl(d,v):(Q._visibility|=2,Ra(d,v,T,w,h)),h&&z&2048&&Qf(v.alternate,v);break;case 24:Ra(d,v,T,w,h),h&&z&2048&&Kf(v.alternate,v);break;default:Ra(d,v,T,w,h)}i=i.sibling}}function tl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:tl(a,l),h&2048&&Qf(l.alternate,l);break;case 24:tl(a,l),h&2048&&Kf(l.alternate,l);break;default:tl(a,l)}i=i.sibling}}var el=8192;function Ia(e){if(e.subtreeFlags&el)for(e=e.child;e!==null;)wy(e),e=e.sibling}function wy(e){switch(e.tag){case 26:Ia(e),e.flags&el&&e.memoizedState!==null&&kA(Bn,e.memoizedState,e.memoizedProps);break;case 5:Ia(e);break;case 3:case 4:var i=Bn;Bn=lc(e.stateNode.containerInfo),Ia(e),Bn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=el,el=16777216,Ia(e),el=i):Ia(e));break;default:Ia(e)}}function Ry(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function nl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,Cy(l,e)}Ry(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Iy(e),e=e.sibling}function Iy(e){switch(e.tag){case 0:case 11:case 15:nl(e),e.flags&2048&&gr(9,e,e.return);break;case 3:nl(e);break;case 12:nl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,$u(e)):nl(e);break;default:nl(e)}}function $u(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,Cy(l,e)}Ry(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:gr(8,i,i.return),$u(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,$u(i));break;default:$u(i)}e=e.sibling}}function Cy(e,i){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:gr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else t:for(a=e;Ve!==null;){l=Ve;var h=l.sibling,d=l.return;if(vy(l),l===a){Ve=null;break t}if(h!==null){h.return=d,Ve=h;break t}Ve=d}}}var Zb={getCacheForType:function(e){var i=Qe(we),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},Jb=typeof WeakMap=="function"?WeakMap:Map,Yt=0,ee=null,Ct=null,zt=0,Xt=0,pn=null,_r=!1,Ca=!1,Yf=!1,Hi=0,he=0,vr=0,Ns=0,Xf=0,Mn=0,Da=0,il=null,on=null,$f=!1,Zf=0,Zu=1/0,Ju=null,Tr=null,je=0,Er=null,Na=null,Oa=0,Jf=0,Wf=null,Dy=null,rl=0,td=null;function yn(){if((Yt&2)!==0&&zt!==0)return zt&-zt;if(G.T!==null){var e=_a;return e!==0?e:od()}return nr()}function Ny(){Mn===0&&(Mn=(zt&536870912)===0||Ht?fo():536870912);var e=On.current;return e!==null&&(e.flags|=32),Mn}function _n(e,i,a){(e===ee&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Ma(e,0),br(e,zt,Mn,!1)),Ei(e,a),((Yt&2)===0||e!==ee)&&(e===ee&&((Yt&2)===0&&(Ns|=a),he===4&&br(e,zt,Mn,!1)),ui(e))}function Oy(e,i,a){if((Yt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||ns(e,i),h=l?eA(e,i):id(e,i,!0),d=l;do{if(h===0){Ca&&!l&&br(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!Wb(a)){h=id(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=il;var w=T.current.memoizedState.isDehydrated;if(w&&(Ma(T,v).flags|=256),v=id(T,v,!1),v!==2){if(Yf&&!w){T.errorRecoveryDisabledLanes|=d,Ns|=d,h=4;break t}d=on,on=h,d!==null&&(on===null?on=d:on.push.apply(on,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ma(e,0),br(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:br(l,i,Mn,!_r);break t;case 2:on=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Zf+300-En(),10<h)){if(br(l,i,Mn,!_r),Xs(l,0,!0)!==0)break t;l.timeoutHandle=a_(My.bind(null,l,a,on,Ju,$f,i,Mn,Ns,Da,_r,d,2,-0,0),h);break t}My(l,a,on,Ju,$f,i,Mn,Ns,Da,_r,d,0,-0,0)}}break}while(!0);ui(e)}function My(e,i,a,l,h,d,v,T,w,z,Q,X,B,q){if(e.timeoutHandle=-1,X=i.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(hl={stylesheets:null,count:0,unsuspend:VA},wy(i),X=PA(),X!==null)){e.cancelPendingCommit=X(zy.bind(null,e,i,d,a,l,h,v,T,w,Q,1,B,q)),br(e,d,v,!z);return}zy(e,i,d,a,l,h,v,T,w)}function Wb(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(e,i,a,l){i&=~Xf,i&=~Ns,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ge(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Yn(e,a,i)}function Wu(){return(Yt&6)===0?(sl(0),!1):!0}function ed(){if(Ct!==null){if(Xt===0)var e=Ct.return;else e=Ct,ki=Ss=null,_f(e),Sa=null,Xo=0,e=Ct;for(;e!==null;)hy(e.alternate,e),e=e.return;Ct=null}}function Ma(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ed(),ee=e,Ct=a=Mi(e.current,null),zt=i,Xt=0,pn=null,_r=!1,Ca=ns(e,i),Yf=!1,Da=Mn=Xf=Ns=vr=he=0,on=il=null,$f=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ge(l),d=1<<h;i|=e[h],l&=~d}return Hi=i,Eu(),a}function xy(e,i){Rt=null,G.H=ju,i===jo||i===Nu?(i=$g(),Xt=3):i===Kg?(i=$g(),Xt=4):Xt=i===Zp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,Ct===null&&(he=1,Gu(e,In(i,e.current)))}function Vy(){var e=G.H;return G.H=ju,e===null?ju:e}function ky(){var e=G.A;return G.A=Zb,e}function nd(){he=4,_r||(zt&4194048)!==zt&&On.current!==null||(Ca=!0),(vr&134217727)===0&&(Ns&134217727)===0||ee===null||br(ee,zt,Mn,!1)}function id(e,i,a){var l=Yt;Yt|=2;var h=Vy(),d=ky();(ee!==e||zt!==i)&&(Ju=null,Ma(e,i)),i=!1;var v=he;t:do try{if(Xt!==0&&Ct!==null){var T=Ct,w=pn;switch(Xt){case 8:ed(),v=6;break t;case 3:case 2:case 9:case 6:On.current===null&&(i=!0);var z=Xt;if(Xt=0,pn=null,xa(e,T,w,z),a&&Ca){v=0;break t}break;default:z=Xt,Xt=0,pn=null,xa(e,T,w,z)}}tA(),v=he;break}catch(Q){xy(e,Q)}while(!0);return i&&e.shellSuspendCounter++,ki=Ss=null,Yt=l,G.H=h,G.A=d,Ct===null&&(ee=null,zt=0,Eu()),v}function tA(){for(;Ct!==null;)Py(Ct)}function eA(e,i){var a=Yt;Yt|=2;var l=Vy(),h=ky();ee!==e||zt!==i?(Ju=null,Zu=En()+500,Ma(e,i)):Ca=ns(e,i);t:do try{if(Xt!==0&&Ct!==null){i=Ct;var d=pn;e:switch(Xt){case 1:Xt=0,pn=null,xa(e,i,d,1);break;case 2:case 9:if(Yg(d)){Xt=0,pn=null,Uy(i);break}i=function(){Xt!==2&&Xt!==9||ee!==e||(Xt=7),ui(e)},d.then(i,i);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:Yg(d)?(Xt=0,pn=null,Uy(i)):(Xt=0,pn=null,xa(e,i,d,7));break;case 5:var v=null;switch(Ct.tag){case 26:v=Ct.memoizedState;case 5:case 27:var T=Ct;if(!v||__(v)){Xt=0,pn=null;var w=T.sibling;if(w!==null)Ct=w;else{var z=T.return;z!==null?(Ct=z,tc(z)):Ct=null}break e}}Xt=0,pn=null,xa(e,i,d,5);break;case 6:Xt=0,pn=null,xa(e,i,d,6);break;case 8:ed(),he=6;break t;default:throw Error(s(462))}}nA();break}catch(Q){xy(e,Q)}while(!0);return ki=Ss=null,G.H=l,G.A=h,Yt=a,Ct!==null?0:(ee=null,zt=0,Eu(),he)}function nA(){for(;Ct!==null&&!lo();)Py(Ct)}function Py(e){var i=uy(e.alternate,e,Hi);e.memoizedProps=e.pendingProps,i===null?tc(e):Ct=i}function Uy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=iy(a,i,i.pendingProps,i.type,void 0,zt);break;case 11:i=iy(a,i,i.pendingProps,i.type.render,i.ref,zt);break;case 5:_f(i);default:hy(a,i),i=Ct=Lg(i,Hi),i=uy(a,i,Hi)}e.memoizedProps=e.pendingProps,i===null?tc(e):Ct=i}function xa(e,i,a,l){ki=Ss=null,_f(i),Sa=null,Xo=0;var h=i.return;try{if(Gb(e,h,i,a,zt)){he=1,Gu(e,In(a,e.current)),Ct=null;return}}catch(d){if(h!==null)throw Ct=h,d;he=1,Gu(e,In(a,e.current)),Ct=null;return}i.flags&32768?(Ht||l===1?e=!0:Ca||(zt&536870912)!==0?e=!1:(_r=e=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ly(i,e)):tc(i)}function tc(e){var i=e;do{if((i.flags&32768)!==0){Ly(i,_r);return}e=i.return;var a=Kb(i.alternate,i,Hi);if(a!==null){Ct=a;return}if(i=i.sibling,i!==null){Ct=i;return}Ct=i=e}while(i!==null);he===0&&(he=5)}function Ly(e,i){do{var a=Yb(e.alternate,e);if(a!==null){a.flags&=32767,Ct=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ct=e;return}Ct=e=a}while(e!==null);he=6,Ct=null}function zy(e,i,a,l,h,d,v,T,w){e.cancelPendingCommit=null;do ec();while(je!==0);if((Yt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Qh,go(e,a,d,v,T,w),e===ee&&(Ct=ee=null,zt=0),Na=i,Er=e,Oa=a,Jf=d,Wf=h,Dy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aA(Jr,function(){return Fy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,h=it.p,it.p=2,v=Yt,Yt|=4;try{Xb(e,i,a)}finally{Yt=v,it.p=h,G.T=l}}je=1,jy(),By(),qy()}}function jy(){if(je===1){je=0;var e=Er,i=Na,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var l=it.p;it.p=2;var h=Yt;Yt|=4;try{by(i,e);var d=gd,v=Cg(e.containerInfo),T=d.focusedElem,w=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Ig(T.ownerDocument.documentElement,T)){if(w!==null&&Bh(T)){var z=w.start,Q=w.end;if(Q===void 0&&(Q=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(Q,T.value.length);else{var X=T.ownerDocument||document,B=X&&X.defaultView||window;if(B.getSelection){var q=B.getSelection(),Et=T.textContent.length,yt=Math.min(w.start,Et),Wt=w.end===void 0?yt:Math.min(w.end,Et);!q.extend&&yt>Wt&&(v=Wt,Wt=yt,yt=v);var k=Rg(T,yt),N=Rg(T,Wt);if(k&&N&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==N.node||q.focusOffset!==N.offset)){var L=X.createRange();L.setStart(k.node,k.offset),q.removeAllRanges(),yt>Wt?(q.addRange(L),q.extend(N.node,N.offset)):(L.setEnd(N.node,N.offset),q.addRange(L))}}}}for(X=[],q=T;q=q.parentNode;)q.nodeType===1&&X.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<X.length;T++){var Y=X[T];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}dc=!!md,gd=md=null}finally{Yt=h,it.p=l,G.T=a}}e.current=i,je=2}}function By(){if(je===2){je=0;var e=Er,i=Na,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var l=it.p;it.p=2;var h=Yt;Yt|=4;try{_y(e,i.alternate,i)}finally{Yt=h,it.p=l,G.T=a}}je=3}}function qy(){if(je===4||je===3){je=0,$l();var e=Er,i=Na,a=Oa,l=Dy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?je=5:(je=0,Na=Er=null,Hy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Tr=null),$s(a),i=i.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(ue,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=G.T,h=it.p,it.p=2,G.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{G.T=i,it.p=h}}(Oa&3)!==0&&ec(),ui(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===td?rl++:(rl=0,td=e):rl=0,sl(0)}}function Hy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Lo(i)))}function ec(e){return jy(),By(),qy(),Fy()}function Fy(){if(je!==5)return!1;var e=Er,i=Jf;Jf=0;var a=$s(Oa),l=G.T,h=it.p;try{it.p=32>a?32:a,G.T=null,a=Wf,Wf=null;var d=Er,v=Oa;if(je=0,Na=Er=null,Oa=0,(Yt&6)!==0)throw Error(s(331));var T=Yt;if(Yt|=4,Iy(d.current),Sy(d,d.current,v,a),Yt=T,sl(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(ue,d)}catch{}return!0}finally{it.p=h,G.T=l,Hy(e,i)}}function Gy(e,i,a){i=In(a,i),i=Mf(e.stateNode,i,2),e=hr(e,i,2),e!==null&&(Ei(e,2),ui(e))}function te(e,i,a){if(e.tag===3)Gy(e,e,a);else for(;i!==null;){if(i.tag===3){Gy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Tr===null||!Tr.has(l))){e=In(a,e),a=Xp(2),l=hr(i,a,2),l!==null&&($p(a,l,i,e),Ei(l,2),ui(l));break}}i=i.return}}function rd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Jb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Yf=!0,h.add(a),e=iA.bind(null,e,i,a),i.then(e,e))}function iA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ee===e&&(zt&a)===a&&(he===4||he===3&&(zt&62914560)===zt&&300>En()-Zf?(Yt&2)===0&&Ma(e,0):Xf|=a,Da===zt&&(Da=0)),ui(e)}function Qy(e,i){i===0&&(i=mo()),e=ma(e,i),e!==null&&(Ei(e,i),ui(e))}function rA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Qy(e,a)}function sA(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Qy(e,a)}function aA(e,i){return $r(e,i)}var nc=null,Va=null,sd=!1,ic=!1,ad=!1,Os=0;function ui(e){e!==Va&&e.next===null&&(Va===null?nc=Va=e:Va=Va.next=e),ic=!0,sd||(sd=!0,lA())}function sl(e,i){if(!ad&&ic){ad=!0;do for(var a=!1,l=nc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Ge(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,$y(l,d))}else d=zt,d=Xs(l,l===ee?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ns(l,d)||(a=!0,$y(l,d));l=l.next}while(a);ad=!1}}function oA(){Ky()}function Ky(){ic=sd=!1;var e=0;Os!==0&&(pA()&&(e=Os),Os=0);for(var i=En(),a=null,l=nc;l!==null;){var h=l.next,d=Yy(l,i);d===0?(l.next=null,a===null?nc=h:a.next=h,h===null&&(Va=a)):(a=l,(e!==0||(d&3)!==0)&&(ic=!0)),l=h}sl(e)}function Yy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ge(d),T=1<<v,w=h[v];w===-1?((T&a)===0||(T&l)!==0)&&(h[v]=ho(T,i)):w<=i&&(e.expiredLanes|=T),d&=~T}if(i=ee,a=zt,a=Xs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Zr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ns(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Zr(l),$s(a)){case 2:case 8:a=Ks;break;case 32:a=Jr;break;case 268435456:a=Ys;break;default:a=Jr}return l=Xy.bind(null,e),a=$r(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Zr(l),e.callbackPriority=2,e.callbackNode=null,2}function Xy(e,i){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var l=zt;return l=Xs(e,e===ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Oy(e,l,i),Yy(e,En()),e.callbackNode!=null&&e.callbackNode===a?Xy.bind(null,e):null)}function $y(e,i){if(ec())return null;Oy(e,i,!0)}function lA(){_A(function(){(Yt&6)!==0?$r(uo,oA):Ky()})}function od(){return Os===0&&(Os=fo()),Os}function Zy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:na(""+e)}function Jy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function uA(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Zy((h[pe]||null).action),v=l.submitter;v&&(i=(i=v[pe]||null)?Zy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new ia("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Os!==0){var w=v?Jy(h,v):new FormData(h);If(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(T.preventDefault(),w=v?Jy(h,v):new FormData(h),If(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var ld=0;ld<Gh.length;ld++){var ud=Gh[ld],cA=ud.toLowerCase(),hA=ud[0].toUpperCase()+ud.slice(1);jn(cA,"on"+hA)}jn(Og,"onAnimationEnd"),jn(Mg,"onAnimationIteration"),jn(xg,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(Cb,"onTransitionRun"),jn(Db,"onTransitionStart"),jn(Nb,"onTransitionCancel"),jn(Vg,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function Wy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],w=T.instance,z=T.currentTarget;if(T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=z;try{d(h)}catch(Q){Fu(Q)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(T=l[v],w=T.instance,z=T.currentTarget,T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=z;try{d(h)}catch(Q){Fu(Q)}h.currentTarget=null,d=w}}}}function Dt(e,i){var a=i[yo];a===void 0&&(a=i[yo]=new Set);var l=e+"__bubble";a.has(l)||(t_(i,e,2,!1),a.add(l))}function cd(e,i,a){var l=0;i&&(l|=4),t_(a,e,l,i)}var rc="_reactListening"+Math.random().toString(36).slice(2);function hd(e){if(!e[rc]){e[rc]=!0,_o.forEach(function(a){a!=="selectionchange"&&(fA.has(a)||cd(a,!1,e),cd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[rc]||(i[rc]=!0,cd("selectionchange",!1,i))}}function t_(e,i,a,l){switch(S_(i)){case 2:var h=zA;break;case 8:h=jA;break;default:h=wd}a=h.bind(null,i,a,e),h=void 0,!wn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function fd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=bi(T),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}T=T.parentNode}}l=l.return}au(function(){var z=d,Q=Sn(a),X=[];t:{var B=kg.get(e);if(B!==void 0){var q=ia,Et=e;switch(e){case"keypress":if(ti(a)===0)break t;case"keydown":case"keyup":q=ua;break;case"focusin":Et="focus",q=aa;break;case"focusout":Et="blur",q=aa;break;case"beforeblur":case"afterblur":q=aa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=mu;break;case Og:case Mg:case xg:q=oa;break;case Vg:q=pu;break;case"scroll":case"scrollend":q=ou;break;case"wheel":q=ca;break;case"copy":case"cut":case"paste":q=la;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=No;break;case"toggle":case"beforetoggle":q=_u}var yt=(i&4)!==0,Wt=!yt&&(e==="scroll"||e==="scrollend"),k=yt?B!==null?B+"Capture":null:B;yt=[];for(var N=z,L;N!==null;){var Y=N;if(L=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||L===null||k===null||(Y=cs(N,k),Y!=null&&yt.push(ol(N,Y,L))),Wt)break;N=N.return}0<yt.length&&(B=new q(B,Et,null,a,Q),X.push({event:B,listeners:yt}))}}if((i&7)===0){t:{if(B=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",B&&a!==Ri&&(Et=a.relatedTarget||a.fromElement)&&(bi(Et)||Et[bn]))break t;if((q||B)&&(B=Q.window===Q?Q:(B=Q.ownerDocument)?B.defaultView||B.parentWindow:window,q?(Et=a.relatedTarget||a.toElement,q=z,Et=Et?bi(Et):null,Et!==null&&(Wt=c(Et),yt=Et.tag,Et!==Wt||yt!==5&&yt!==27&&yt!==6)&&(Et=null)):(q=null,Et=z),q!==Et)){if(yt=Rn,Y="onMouseLeave",k="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(yt=No,Y="onPointerLeave",k="onPointerEnter",N="pointer"),Wt=q==null?B:$n(q),L=Et==null?B:$n(Et),B=new yt(Y,N+"leave",q,a,Q),B.target=Wt,B.relatedTarget=L,Y=null,bi(Q)===z&&(yt=new yt(k,N+"enter",Et,a,Q),yt.target=L,yt.relatedTarget=Wt,Y=yt),Wt=Y,q&&Et)e:{for(yt=q,k=Et,N=0,L=yt;L;L=ka(L))N++;for(L=0,Y=k;Y;Y=ka(Y))L++;for(;0<N-L;)yt=ka(yt),N--;for(;0<L-N;)k=ka(k),L--;for(;N--;){if(yt===k||k!==null&&yt===k.alternate)break e;yt=ka(yt),k=ka(k)}yt=null}else yt=null;q!==null&&e_(X,B,q,yt,!1),Et!==null&&Wt!==null&&e_(X,Wt,Et,yt,!0)}}t:{if(B=z?$n(z):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var lt=Tg;else if(Se(B))if(Eg)lt=wb;else{lt=Ab;var It=bb}else q=B.nodeName,!q||q.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&Ao(z.elementType)&&(lt=Tg):lt=Sb;if(lt&&(lt=lt(e,z))){Oi(X,lt,a,Q);break t}It&&It(e,B,z),e==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&ar(B,"number",B.value)}switch(It=z?$n(z):window,e){case"focusin":(Se(It)||It.contentEditable==="true")&&(ha=It,qh=z,xo=null);break;case"focusout":xo=qh=ha=null;break;case"mousedown":Hh=!0;break;case"contextmenu":case"mouseup":case"dragend":Hh=!1,Dg(X,a,Q);break;case"selectionchange":if(Ib)break;case"keydown":case"keyup":Dg(X,a,Q)}var dt;if(ii)t:{switch(e){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else Ut?H(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(_&&a.locale!=="ko"&&(Ut||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Ut&&(dt=wo()):(Wn=Q,or="value"in Wn?Wn.value:Wn.textContent,Ut=!0)),It=sc(z,_t),0<It.length&&(_t=new Co(_t,e,null,a,Q),X.push({event:_t,listeners:It}),dt?_t.data=dt:(dt=nt(a),dt!==null&&(_t.data=dt)))),(dt=m?Ae(e,a):Lt(e,a))&&(_t=sc(z,"onBeforeInput"),0<_t.length&&(It=new Co("onBeforeInput","beforeinput",null,a,Q),X.push({event:It,listeners:_t}),It.data=dt)),uA(X,e,z,a,Q)}Wy(X,i)})}function ol(e,i,a){return{instance:e,listener:i,currentTarget:a}}function sc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=cs(e,a),h!=null&&l.unshift(ol(e,h,d)),h=cs(e,i),h!=null&&l.push(ol(e,h,d))),e.tag===3)return l;e=e.return}return[]}function ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function e_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,w=T.alternate,z=T.stateNode;if(T=T.tag,w!==null&&w===l)break;T!==5&&T!==26&&T!==27||z===null||(w=z,h?(z=cs(a,d),z!=null&&v.unshift(ol(a,z,w))):h||(z=cs(a,d),z!=null&&v.push(ol(a,z,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var dA=/\r\n?/g,mA=/\u0000|\uFFFD/g;function n_(e){return(typeof e=="string"?e:""+e).replace(dA,`
`).replace(mA,"")}function i_(e,i){return i=n_(i),n_(e)===i}function ac(){}function Jt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||An(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&An(e,""+l);break;case"className":Zn(e,"class",l);break;case"tabIndex":Zn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,l);break;case"style":bo(e,l,d);break;case"data":if(i!=="object"){Zn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=na(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Jt(e,i,"name",h.name,h,null),Jt(e,i,"formEncType",h.formEncType,h,null),Jt(e,i,"formMethod",h.formMethod,h,null),Jt(e,i,"formTarget",h.formTarget,h,null)):(Jt(e,i,"encType",h.encType,h,null),Jt(e,i,"method",h.method,h,null),Jt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=na(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ac);break;case"onScroll":l!=null&&Dt("scroll",e);break;case"onScrollEnd":l!=null&&Dt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=na(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Dt("beforetoggle",e),Dt("toggle",e),sr(e,"popover",l);break;case"xlinkActuate":Ue(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ue(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ue(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ue(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ue(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ue(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":sr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kh.get(a)||a,sr(e,a,l))}}function dd(e,i,a,l,h,d){switch(a){case"style":bo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?An(e,l):(typeof l=="number"||typeof l=="bigint")&&An(e,""+l);break;case"onScroll":l!=null&&Dt("scroll",e);break;case"onScrollEnd":l!=null&&Dt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ac);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[pe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):sr(e,a,l)}}}function Be(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",e),Dt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Jt(e,i,d,v,a,null)}}h&&Jt(e,i,"srcSet",a.srcSet,a,null),l&&Jt(e,i,"src",a.src,a,null);return;case"input":Dt("invalid",e);var T=d=v=h=null,w=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":h=Q;break;case"type":v=Q;break;case"checked":w=Q;break;case"defaultChecked":z=Q;break;case"value":d=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,i));break;default:Jt(e,i,l,Q,a,null)}}os(e,d,T,w,z,v,h,!1),ea(e);return;case"select":Dt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Jt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?wi(e,!!l,i,!1):a!=null&&wi(e,!!l,a,!0);return;case"textarea":Dt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Jt(e,i,v,T,a,null)}ls(e,l,h,d),ea(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(e,i,w,l,a,null)}return;case"dialog":Dt("beforetoggle",e),Dt("toggle",e),Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":Dt("load",e);break;case"video":case"audio":for(l=0;l<al.length;l++)Dt(al[l],e);break;case"image":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"embed":case"source":case"link":Dt("error",e),Dt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Jt(e,i,z,l,a,null)}return;default:if(Ao(i)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&dd(e,i,Q,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Jt(e,i,T,l,a,null))}function gA(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,w=null,z=null,Q=null;for(q in a){var X=a[q];if(a.hasOwnProperty(q)&&X!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":w=X;default:l.hasOwnProperty(q)||Jt(e,i,q,null,l,X)}}for(var B in l){var q=l[B];if(X=a[B],l.hasOwnProperty(B)&&(q!=null||X!=null))switch(B){case"type":d=q;break;case"name":h=q;break;case"checked":z=q;break;case"defaultChecked":Q=q;break;case"value":v=q;break;case"defaultValue":T=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:q!==X&&Jt(e,i,B,q,l,X)}}hn(e,v,T,w,z,Q,d,h);return;case"select":q=v=T=B=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":q=w;default:l.hasOwnProperty(d)||Jt(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":B=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==w&&Jt(e,i,h,d,l,w)}i=T,a=v,l=q,B!=null?wi(e,!!a,B,!1):!!l!=!!a&&(i!=null?wi(e,!!a,i,!0):wi(e,!!a,a?[]:"",!1));return;case"textarea":q=B=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Jt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":B=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Jt(e,i,v,h,l,d)}$t(e,B,q);return;case"option":for(var Et in a)if(B=a[Et],a.hasOwnProperty(Et)&&B!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Jt(e,i,Et,null,l,B)}for(w in l)if(B=l[w],q=a[w],l.hasOwnProperty(w)&&B!==q&&(B!=null||q!=null))switch(w){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Jt(e,i,w,B,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var yt in a)B=a[yt],a.hasOwnProperty(yt)&&B!=null&&!l.hasOwnProperty(yt)&&Jt(e,i,yt,null,l,B);for(z in l)if(B=l[z],q=a[z],l.hasOwnProperty(z)&&B!==q&&(B!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:Jt(e,i,z,B,l,q)}return;default:if(Ao(i)){for(var Wt in a)B=a[Wt],a.hasOwnProperty(Wt)&&B!==void 0&&!l.hasOwnProperty(Wt)&&dd(e,i,Wt,void 0,l,B);for(Q in l)B=l[Q],q=a[Q],!l.hasOwnProperty(Q)||B===q||B===void 0&&q===void 0||dd(e,i,Q,B,l,q);return}}for(var k in a)B=a[k],a.hasOwnProperty(k)&&B!=null&&!l.hasOwnProperty(k)&&Jt(e,i,k,null,l,B);for(X in l)B=l[X],q=a[X],!l.hasOwnProperty(X)||B===q||B==null&&q==null||Jt(e,i,X,B,l,q)}var md=null,gd=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function r_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function pd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yd=null;function pA(){var e=window.event;return e&&e.type==="popstate"?e===yd?!1:(yd=e,!0):(yd=null,!1)}var a_=typeof setTimeout=="function"?setTimeout:void 0,yA=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,_A=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(e){return o_.resolve(null).then(e).catch(vA)}:a_;function vA(e){setTimeout(function(){throw e})}function Ar(e){return e==="head"}function l_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&ll(v.documentElement),a&2&&ll(v.body),a&4)for(a=v.head,ll(a),v=a.firstChild;v;){var T=v.nextSibling,w=v.nodeName;v[is]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),pl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);pl(i)}function _d(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_d(a),rr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function TA(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[is])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=qn(e.nextSibling),e===null)break}return null}function EA(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=qn(e.nextSibling),e===null))return null;return e}function vd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function bA(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function qn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Td=null;function u_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function c_(e,i,a){switch(i=oc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ll(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);rr(e)}var xn=new Map,h_=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fi=it.d;it.d={f:AA,r:SA,D:wA,C:RA,L:IA,m:CA,X:NA,S:DA,M:OA};function AA(){var e=Fi.f(),i=Wu();return e||i}function SA(e){var i=Xn(e);i!==null&&i.tag===5&&i.type==="form"?Op(i):Fi.r(e)}var Pa=typeof document>"u"?null:document;function f_(e,i,a){var l=Pa;if(l&&typeof i=="string"&&i){var h=ye(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),h_.has(h)||(h_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Be(i,"link",e),fe(i),l.head.appendChild(i)))}}function wA(e){Fi.D(e),f_("dns-prefetch",e,null)}function RA(e,i){Fi.C(e,i),f_("preconnect",e,i)}function IA(e,i,a){Fi.L(e,i,a);var l=Pa;if(l&&e&&i){var h='link[rel="preload"][as="'+ye(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ye(a.imageSizes)+'"]')):h+='[href="'+ye(e)+'"]';var d=h;switch(i){case"style":d=Ua(e);break;case"script":d=La(e)}xn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),xn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ul(d))||i==="script"&&l.querySelector(cl(d))||(i=l.createElement("link"),Be(i,"link",e),fe(i),l.head.appendChild(i)))}}function CA(e,i){Fi.m(e,i);var a=Pa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ye(l)+'"][href="'+ye(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=La(e)}if(!xn.has(d)&&(e=E({rel:"modulepreload",href:e},i),xn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(d)))return}l=a.createElement("link"),Be(l,"link",e),fe(l),a.head.appendChild(l)}}}function DA(e,i,a){Fi.S(e,i,a);var l=Pa;if(l&&e){var h=Je(l).hoistableStyles,d=Ua(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(ul(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=xn.get(d))&&Ed(e,a);var w=v=l.createElement("link");fe(w),Be(w,"link",e),w._p=new Promise(function(z,Q){w.onload=z,w.onerror=Q}),w.addEventListener("load",function(){T.loading|=1}),w.addEventListener("error",function(){T.loading|=2}),T.loading|=4,uc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function NA(e,i){Fi.X(e,i);var a=Pa;if(a&&e){var l=Je(a).hoistableScripts,h=La(e),d=l.get(h);d||(d=a.querySelector(cl(h)),d||(e=E({src:e,async:!0},i),(i=xn.get(h))&&bd(e,i),d=a.createElement("script"),fe(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function OA(e,i){Fi.M(e,i);var a=Pa;if(a&&e){var l=Je(a).hoistableScripts,h=La(e),d=l.get(h);d||(d=a.querySelector(cl(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=xn.get(h))&&bd(e,i),d=a.createElement("script"),fe(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function d_(e,i,a,l){var h=(h=at.current)?lc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ua(a.href),a=Je(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ua(a.href);var d=Je(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(ul(e)))&&!d._p&&(v.instance=d,v.state.loading=5),xn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xn.set(e,a),d||MA(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=La(a),a=Je(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ua(e){return'href="'+ye(e)+'"'}function ul(e){return'link[rel="stylesheet"]['+e+"]"}function m_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function MA(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Be(i,"link",a),fe(i),e.head.appendChild(i))}function La(e){return'[src="'+ye(e)+'"]'}function cl(e){return"script[async]"+e}function g_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ye(a.href)+'"]');if(l)return i.instance=l,fe(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),fe(l),Be(l,"style",h),uc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ua(a.href);var d=e.querySelector(ul(h));if(d)return i.state.loading|=4,i.instance=d,fe(d),d;l=m_(a),(h=xn.get(h))&&Ed(l,h),d=(e.ownerDocument||e).createElement("link"),fe(d);var v=d;return v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),Be(d,"link",l),i.state.loading|=4,uc(d,a.precedence,e),i.instance=d;case"script":return d=La(a.src),(h=e.querySelector(cl(d)))?(i.instance=h,fe(h),h):(l=a,(h=xn.get(d))&&(l=E({},a),bd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),fe(h),Be(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,uc(l,a.precedence,e));return i.instance}function uc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Ed(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function bd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var cc=null;function p_(e,i,a){if(cc===null){var l=new Map,h=cc=new Map;h.set(a,l)}else h=cc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[is]||d[be]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function y_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function xA(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function __(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var hl=null;function VA(){}function kA(e,i,a){if(hl===null)throw Error(s(475));var l=hl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ua(a.href),d=e.querySelector(ul(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=hc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,fe(d);return}d=e.ownerDocument||e,a=m_(a),(h=xn.get(h))&&Ed(a,h),d=d.createElement("link"),fe(d);var v=d;v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),Be(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=hc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function PA(){if(hl===null)throw Error(s(475));var e=hl;return e.stylesheets&&e.count===0&&Ad(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Ad(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function hc(){if(this.count--,this.count===0){if(this.stylesheets)Ad(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function Ad(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,i.forEach(UA,e),fc=null,hc.call(e))}function UA(e,i){if(!(i.state.loading&4)){var a=fc.get(e);if(a)var l=a.get(null);else{a=new Map,fc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=hc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var fl={$$typeof:ct,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function LA(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ti(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.hiddenUpdates=Ti(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function v_(e,i,a,l,h,d,v,T,w,z,Q,X){return e=new LA(e,i,a,v,T,w,z,X),i=1,d===!0&&(i|=24),d=dn(3,null,null,i),e.current=d,d.stateNode=e,i=rf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},lf(d),e}function T_(e){return e?(e=ga,e):ga}function E_(e,i,a,l,h,d){h=T_(h),l.context===null?l.context=h:l.pendingContext=h,l=cr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=hr(e,l,i),a!==null&&(_n(a,e,i),qo(a,e,i))}function b_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Sd(e,i){b_(e,i),(e=e.alternate)&&b_(e,i)}function A_(e){if(e.tag===13){var i=ma(e,67108864);i!==null&&_n(i,e,67108864),Sd(e,67108864)}}var dc=!0;function zA(e,i,a,l){var h=G.T;G.T=null;var d=it.p;try{it.p=2,wd(e,i,a,l)}finally{it.p=d,G.T=h}}function jA(e,i,a,l){var h=G.T;G.T=null;var d=it.p;try{it.p=8,wd(e,i,a,l)}finally{it.p=d,G.T=h}}function wd(e,i,a,l){if(dc){var h=Rd(l);if(h===null)fd(e,i,l,mc,a),w_(e,l);else if(qA(h,e,i,a,l))l.stopPropagation();else if(w_(e,l),i&4&&-1<BA.indexOf(e)){for(;h!==null;){var d=Xn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Un(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var w=1<<31-Ge(v);T.entanglements[1]|=w,v&=~w}ui(d),(Yt&6)===0&&(Zu=En()+500,sl(0))}}break;case 13:T=ma(d,2),T!==null&&_n(T,d,2),Wu(),Sd(d,2)}if(d=Rd(l),d===null&&fd(e,i,l,mc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else fd(e,i,l,null,a)}}function Rd(e){return e=Sn(e),Id(e)}var mc=null;function Id(e){if(mc=null,e=bi(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return mc=e,null}function S_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dh()){case uo:return 2;case Ks:return 8;case Jr:case Nh:return 32;case Ys:return 268435456;default:return 32}default:return 32}}var Cd=!1,Sr=null,wr=null,Rr=null,dl=new Map,ml=new Map,Ir=[],BA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w_(e,i){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(i.pointerId)}}function gl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Xn(i),i!==null&&A_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function qA(e,i,a,l,h){switch(i){case"focusin":return Sr=gl(Sr,e,i,a,l,h),!0;case"dragenter":return wr=gl(wr,e,i,a,l,h),!0;case"mouseover":return Rr=gl(Rr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return dl.set(d,gl(dl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,ml.set(d,gl(ml.get(d)||null,e,i,a,l,h)),!0}return!1}function R_(e){var i=bi(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Wl(e.priority,function(){if(a.tag===13){var l=yn();l=er(l);var h=ma(a,l);h!==null&&_n(h,a,l),Sd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Rd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ri=l,a.target.dispatchEvent(l),Ri=null}else return i=Xn(a),i!==null&&A_(i),e.blockedOn=a,!1;i.shift()}return!0}function I_(e,i,a){gc(e)&&a.delete(i)}function HA(){Cd=!1,Sr!==null&&gc(Sr)&&(Sr=null),wr!==null&&gc(wr)&&(wr=null),Rr!==null&&gc(Rr)&&(Rr=null),dl.forEach(I_),ml.forEach(I_)}function pc(e,i){e.blockedOn===i&&(e.blockedOn=null,Cd||(Cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,HA)))}var yc=null;function C_(e){yc!==e&&(yc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Id(l||a)===null)continue;break}var d=Xn(a);d!==null&&(e.splice(i,3),i-=3,If(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function pl(e){function i(w){return pc(w,e)}Sr!==null&&pc(Sr,e),wr!==null&&pc(wr,e),Rr!==null&&pc(Rr,e),dl.forEach(i),ml.forEach(i);for(var a=0;a<Ir.length;a++){var l=Ir[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ir.length&&(a=Ir[0],a.blockedOn===null);)R_(a),a.blockedOn===null&&Ir.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[pe]||null;if(typeof d=="function")v||C_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[pe]||null)T=v.formAction;else if(Id(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),C_(a)}}}function Dd(e){this._internalRoot=e}_c.prototype.render=Dd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=yn();E_(a,l,e,i,null,null)},_c.prototype.unmount=Dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;E_(e.current,2,null,e,null,null),Wu(),i[bn]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var i=nr();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ir.length&&i!==0&&i<Ir[a].priority;a++);Ir.splice(a,0,e),a===0&&R_(e)}};var D_=t.version;if(D_!=="19.1.1")throw Error(s(527,D_,"19.1.1"));it.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var FA={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{ue=vc.inject(FA),Kt=vc}catch{}}return _l.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Gp,d=Qp,v=Kp,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=v_(e,1,!1,null,null,a,l,h,d,v,T,null),e[bn]=i.current,hd(e),new Dd(i)},_l.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Gp,v=Qp,T=Kp,w=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),i=v_(e,1,!0,i,a??null,l,h,d,v,T,w,z),i.context=T_(null),a=i.current,l=yn(),l=er(l),h=cr(l),h.callback=null,hr(a,h,l),a=l,i.current.lanes=a,Ei(i,a),ui(i),e[bn]=i.current,hd(e),new _c(i)},_l.version="19.1.1",_l}var z_;function tS(){if(z_)return Md.exports;z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Md.exports=WA(),Md.exports}var eS=tS();const nS=()=>{};var j_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},iS=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];t[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],f=r[n++],g=r[n++],p=((o&7)<<18|(c&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return t.join("")},A0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,g=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=c>>2,S=(c&3)<<4|g>>4;let C=(g&15)<<2|y>>6,U=y&63;p||(U=64,f||(C=64)),s.push(n[E],n[S],n[C],n[U])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(b0(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):iS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],g=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||g==null||y==null||S==null)throw new rS;const C=c<<2|g>>4;if(s.push(C),y!==64){const U=g<<4&240|y>>2;if(s.push(U),S!==64){const F=y<<6&192|S;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class rS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sS=function(r){const t=b0(r);return A0.encodeByteArray(t,!0)},zc=function(r){return sS(r).replace(/\./g,"")},S0=function(r){try{return A0.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=()=>aS().__FIREBASE_DEFAULTS__,lS=()=>{if(typeof process>"u"||typeof j_>"u")return;const r=j_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},uS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&S0(r[1]);return t&&JSON.parse(t)},oh=()=>{try{return nS()||oS()||lS()||uS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},w0=r=>oh()?.emulatorHosts?.[r],cS=r=>{const t=w0(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},R0=()=>oh()?.config,I0=r=>oh()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function C0(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[zc(JSON.stringify(n)),zc(JSON.stringify(f)),""].join(".")}const Sl={};function dS(){const r={prod:[],emulator:[]};for(const t of Object.keys(Sl))Sl[t]?r.emulator.push(t):r.prod.push(t);return r}function mS(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let B_=!1;function D0(r,t){if(typeof window>"u"||typeof document>"u"||!eo(window.location.host)||Sl[r]===t||Sl[r]||B_)return;Sl[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",c=dS().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function g(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function p(C,U){C.setAttribute("width","24"),C.setAttribute("id",U),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function y(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{B_=!0,f()},C}function E(C,U){C.setAttribute("id",U),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function S(){const C=mS(s),U=n("text"),F=document.getElementById(U)||document.createElement("span"),J=n("learnmore"),K=document.getElementById(J)||document.createElement("a"),st=n("preprendIcon"),ut=document.getElementById(st)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ct=C.element;g(ct),E(K,J);const Bt=y();p(ut,st),ct.append(ut,F,K,Bt),document.body.appendChild(ct)}c?(F.innerText="Preview backend disconnected.",ut.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ut.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function pS(){const r=oh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function N0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function _S(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vS(){const r=Ze();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function TS(){return!pS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O0(){try{return typeof indexedDB=="object"}catch{return!1}}function M0(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function ES(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="FirebaseError";class Kn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=bS,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,c=this.errors[t],f=c?AS(c,s):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new Kn(o,g,s)}}function AS(r,t){return r.replace(SS,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const SS=/\{\$([^}]+)}/g;function wS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Br(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const c=r[o],f=t[o];if(q_(c)&&q_(f)){if(!Br(c,f))return!1}else if(c!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function q_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function RS(r,t){const n=new IS(r,t);return n.subscribe.bind(n)}class IS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");CS(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Pd),o.error===void 0&&(o.error=Pd),o.complete===void 0&&(o.complete=Pd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Pd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1e3,NS=2,OS=14400*1e3,MS=.5;function H_(r,t=DS,n=NS){const s=t*Math.pow(n,r),o=Math.round(MS*s*(Math.random()-.5)*2);return Math.min(OS,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(r){return r&&r._delegate?r._delegate:r}class Qn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new hS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kS(t))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(t=Ms){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ms){return this.instances.has(t)}getOptions(t=Ms){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&f.resolve(o)}return o}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&t(c,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:VS(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ms){return this.component?this.component.multipleInstances?t:Ms:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VS(r){return r===Ms?void 0:r}function kS(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new xS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Nt||(Nt={}));const US={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},LS=Nt.INFO,zS={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},jS=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=zS[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lh{constructor(t){this.name=t,this._logLevel=LS,this._logHandler=jS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?US[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...t),this._logHandler(this,Nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...t),this._logHandler(this,Nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...t),this._logHandler(this,Nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...t),this._logHandler(this,Nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...t),this._logHandler(this,Nt.ERROR,...t)}}const BS=(r,t)=>t.some(n=>r instanceof n);let F_,G_;function qS(){return F_||(F_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HS(){return G_||(G_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x0=new WeakMap,em=new WeakMap,V0=new WeakMap,Ud=new WeakMap,Nm=new WeakMap;function FS(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(kr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&x0.set(n,r)}).catch(()=>{}),Nm.set(t,r),t}function GS(r){if(em.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});em.set(r,t)}let nm={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return em.get(r);if(t==="objectStoreNames")return r.objectStoreNames||V0.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function QS(r){nm=r(nm)}function KS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Ld(this),t,...n);return V0.set(s,t.sort?t.sort():[t]),kr(s)}:HS().includes(r)?function(...t){return r.apply(Ld(this),t),kr(x0.get(this))}:function(...t){return kr(r.apply(Ld(this),t))}}function YS(r){return typeof r=="function"?KS(r):(r instanceof IDBTransaction&&GS(r),BS(r,qS())?new Proxy(r,nm):r)}function kr(r){if(r instanceof IDBRequest)return FS(r);if(Ud.has(r))return Ud.get(r);const t=YS(r);return t!==r&&(Ud.set(r,t),Nm.set(t,r)),t}const Ld=r=>Nm.get(r);function k0(r,t,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const f=indexedDB.open(r,t),g=kr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(kr(f.result),p.oldVersion,p.newVersion,kr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const XS=["get","getKey","getAll","getAllKeys","count"],$S=["put","add","delete","clear"],zd=new Map;function Q_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(zd.get(t))return zd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=$S.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||XS.includes(n)))return;const c=async function(f,...g){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),o&&p.done]))[0]};return zd.set(t,c),c}QS(r=>({...r,get:(t,n,s)=>Q_(t,n)||r.get(t,n,s),has:(t,n)=>!!Q_(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function JS(r){return r.getComponent()?.type==="VERSION"}const im="@firebase/app",K_="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new lh("@firebase/app"),WS="@firebase/app-compat",t1="@firebase/analytics-compat",e1="@firebase/analytics",n1="@firebase/app-check-compat",i1="@firebase/app-check",r1="@firebase/auth",s1="@firebase/auth-compat",a1="@firebase/database",o1="@firebase/data-connect",l1="@firebase/database-compat",u1="@firebase/functions",c1="@firebase/functions-compat",h1="@firebase/installations",f1="@firebase/installations-compat",d1="@firebase/messaging",m1="@firebase/messaging-compat",g1="@firebase/performance",p1="@firebase/performance-compat",y1="@firebase/remote-config",_1="@firebase/remote-config-compat",v1="@firebase/storage",T1="@firebase/storage-compat",E1="@firebase/firestore",b1="@firebase/ai",A1="@firebase/firestore-compat",S1="firebase",w1="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="[DEFAULT]",R1={[im]:"fire-core",[WS]:"fire-core-compat",[e1]:"fire-analytics",[t1]:"fire-analytics-compat",[i1]:"fire-app-check",[n1]:"fire-app-check-compat",[r1]:"fire-auth",[s1]:"fire-auth-compat",[a1]:"fire-rtdb",[o1]:"fire-data-connect",[l1]:"fire-rtdb-compat",[u1]:"fire-fn",[c1]:"fire-fn-compat",[h1]:"fire-iid",[f1]:"fire-iid-compat",[d1]:"fire-fcm",[m1]:"fire-fcm-compat",[g1]:"fire-perf",[p1]:"fire-perf-compat",[y1]:"fire-rc",[_1]:"fire-rc-compat",[v1]:"fire-gcs",[T1]:"fire-gcs-compat",[E1]:"fire-fst",[A1]:"fire-fst-compat",[b1]:"fire-vertex","fire-js":"fire-js",[S1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Map,I1=new Map,sm=new Map;function Y_(r,t){try{r.container.addComponent(t)}catch(n){$i.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function yi(r){const t=r.name;if(sm.has(t))return $i.debug(`There were multiple attempts to register component ${t}.`),!1;sm.set(t,r);for(const n of jc.values())Y_(n,r);for(const n of I1.values())Y_(n,r);return!0}function qs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Hn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Bs("app","Firebase",C1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=w1;function P0(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:rm,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Pr.create("bad-app-name",{appName:String(o)});if(n||(n=R0()),!n)throw Pr.create("no-options");const c=jc.get(o);if(c){if(Br(n,c.options)&&Br(s,c.config))return c;throw Pr.create("duplicate-app",{appName:o})}const f=new PS(o);for(const p of sm.values())f.addComponent(p);const g=new D1(n,s,f);return jc.set(o,g),g}function Om(r=rm){const t=jc.get(r);if(!t&&r===rm&&R0())return P0();if(!t)throw Pr.create("no-app",{appName:r});return t}function Pn(r,t,n){let s=R1[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const f=[`Unable to register library "${s}" with version "${t}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&f.push("and"),c&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$i.warn(f.join(" "));return}yi(new Qn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="firebase-heartbeat-database",O1=1,Ol="firebase-heartbeat-store";let jd=null;function U0(){return jd||(jd=k0(N1,O1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Ol)}catch(n){console.warn(n)}}}}).catch(r=>{throw Pr.create("idb-open",{originalErrorMessage:r.message})})),jd}async function M1(r){try{const n=(await U0()).transaction(Ol),s=await n.objectStore(Ol).get(L0(r));return await n.done,s}catch(t){if(t instanceof Kn)$i.warn(t.message);else{const n=Pr.create("idb-get",{originalErrorMessage:t?.message});$i.warn(n.message)}}}async function X_(r,t){try{const s=(await U0()).transaction(Ol,"readwrite");await s.objectStore(Ol).put(t,L0(r)),await s.done}catch(n){if(n instanceof Kn)$i.warn(n.message);else{const s=Pr.create("idb-set",{originalErrorMessage:n?.message});$i.warn(s.message)}}}function L0(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=1024,V1=30;class k1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new U1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>V1){const o=L1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){$i.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$_(),{heartbeatsToSend:n,unsentEntries:s}=P1(this._heartbeatsCache.heartbeats),o=zc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return $i.warn(t),""}}}function $_(){return new Date().toISOString().substring(0,10)}function P1(r,t=x1){const n=[];let s=r.slice();for(const o of r){const c=n.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),Z_(n)>t){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Z_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class U1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O0()?M0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return X_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return X_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Z_(r){return zc(JSON.stringify({version:2,heartbeats:r})).length}function L1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(r){yi(new Qn("platform-logger",t=>new ZS(t),"PRIVATE")),yi(new Qn("heartbeat",t=>new k1(t),"PRIVATE")),Pn(im,K_,r),Pn(im,K_,"esm2020"),Pn("fire-js","")}z1("");var j1="firebase",B1="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(j1,B1,"app");function z0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q1=z0,j0=new Bs("auth","Firebase",z0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new lh("@firebase/auth");function H1(r,...t){Bc.logLevel<=Nt.WARN&&Bc.warn(`Auth (${no}): ${r}`,...t)}function Cc(r,...t){Bc.logLevel<=Nt.ERROR&&Bc.error(`Auth (${no}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(r,...t){throw Mm(r,...t)}function hi(r,...t){return Mm(r,...t)}function B0(r,t,n){const s={...q1(),[t]:n};return new Bs("auth","Firebase",s).create(t,{appName:r.name})}function Ur(r){return B0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return j0.create(r,...t)}function bt(r,t,...n){if(!r)throw Mm(t,...n)}function Qi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Cc(t),new Error(t)}function Ji(r,t){r||Qi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){return typeof self<"u"&&self.location?.href||""}function F1(){return J_()==="http:"||J_()==="https:"}function J_(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F1()||N0()||"connection"in navigator)?navigator.onLine:!0}function Q1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ji(n>t,"Short delay should be less than long delay!"),this.isMobile=gS()||_S()}get(){return G1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(r,t){Ji(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],X1=new ql(3e4,6e4);function uh(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function io(r,t,n,s,o={}){return H0(r,o,async()=>{let c={},f={};s&&(t==="GET"?f=s:c={body:JSON.stringify(s)});const g=Bl({key:r.config.apiKey,...f}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y={method:t,headers:p,...c};return yS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&eo(r.emulatorConfig.host)&&(y.credentials="include"),q0.fetch()(await G0(r,r.config.apiHost,n,g),y)})}async function H0(r,t,n){r._canInitEmulator=!1;const s={...K1,...t};try{const o=new $1(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw Tc(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const g=c.ok?f.errorMessage:f.error.message,[p,y]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Tc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw Tc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw B0(r,E,y);Zi(r,E)}}catch(o){if(o instanceof Kn)throw o;Zi(r,"network-request-failed",{message:String(o)})}}async function F0(r,t,n,s,o={}){const c=await io(r,t,n,s,o);return"mfaPendingCredential"in c&&Zi(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function G0(r,t,n,s){const o=`${t}${n}?${s}`,c=r,f=c.config.emulator?xm(r.config,o):`${r.config.apiScheme}://${o}`;return Y1.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}class $1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hi(this.auth,"network-request-failed")),X1.get())})}}function Tc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=hi(r,t,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(r,t){return io(r,"POST","/v1/accounts:delete",t)}async function qc(r,t){return io(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function J1(r,t=!1){const n=Tn(r),s=await n.getIdToken(t),o=Vm(s);bt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c?.sign_in_provider;return{claims:o,token:s,authTime:wl(Bd(o.auth_time)),issuedAtTime:wl(Bd(o.iat)),expirationTime:wl(Bd(o.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Bd(r){return Number(r)*1e3}function Vm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Cc("JWT malformed, contained fewer than 3 sections"),null;try{const o=S0(n);return o?JSON.parse(o):(Cc("Failed to decode base64 JWT payload"),null)}catch(o){return Cc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function W_(r){const t=Vm(r);return bt(t,"internal-error"),bt(typeof t.exp<"u","internal-error"),bt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Kn&&W1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function W1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wl(this.lastLoginAt),this.creationTime=wl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(r){const t=r.auth,n=await r.getIdToken(),s=await Ml(r,qc(t,{idToken:n}));bt(s?.users.length,t,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const c=o.providerUserInfo?.length?Q0(o.providerUserInfo):[],f=nw(r.providerData,c),g=r.isAnonymous,p=!(r.email&&o.passwordHash)&&!f?.length,y=g?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new om(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function ew(r){const t=Tn(r);await Hc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function nw(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function Q0(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(r,t){const n=await H0(r,{},async()=>{const s=Bl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,f=await G0(r,o,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:g,body:s};return r.emulatorConfig&&eo(r.emulatorConfig.host)&&(p.credentials="include"),q0.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rw(r,t){return io(r,"POST","/v2/accounts:revokeToken",uh(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){bt(t.idToken,"internal-error"),bt(typeof t.idToken<"u","internal-error"),bt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):W_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){bt(t.length!==0,"internal-error");const n=W_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(bt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await iw(t,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,f=new Fa;return s&&(bt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(bt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),c&&(bt(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Fa,this.toJSON())}_performRefresh(){return Qi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(r,t){bt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Fn{constructor({uid:t,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new om(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ml(this,this.stsTokenManager.getToken(this.auth,t));return bt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return J1(this,t)}reload(){return ew(this)}_assign(t){this!==t&&(bt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Fn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){bt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Hc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hn(this.auth.app))return Promise.reject(Ur(this.auth));const t=await this.getIdToken();return await Ml(this,Z1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,f=n.photoURL??void 0,g=n.tenantId??void 0,p=n._redirectEventId??void 0,y=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:S,emailVerified:C,isAnonymous:U,providerData:F,stsTokenManager:J}=n;bt(S&&J,t,"internal-error");const K=Fa.fromJSON(this.name,J);bt(typeof S=="string",t,"internal-error"),Dr(s,t.name),Dr(o,t.name),bt(typeof C=="boolean",t,"internal-error"),bt(typeof U=="boolean",t,"internal-error"),Dr(c,t.name),Dr(f,t.name),Dr(g,t.name),Dr(p,t.name),Dr(y,t.name),Dr(E,t.name);const st=new Fn({uid:S,auth:t,email:o,emailVerified:C,displayName:s,isAnonymous:U,photoURL:f,phoneNumber:c,tenantId:g,stsTokenManager:K,createdAt:y,lastLoginAt:E});return F&&Array.isArray(F)&&(st.providerData=F.map(ut=>({...ut}))),p&&(st._redirectEventId=p),st}static async _fromIdTokenResponse(t,n,s=!1){const o=new Fa;o.updateFromServerResponse(n);const c=new Fn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Hc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];bt(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Q0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!c?.length,g=new Fa;g.updateFromIdToken(s);const p=new Fn({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new om(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new Map;function Ki(r){Ji(r instanceof Function,"Expected a class definition");let t=tv.get(r);return t?(Ji(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,tv.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}K0.type="NONE";const ev=K0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ga{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=Dc(this.userKey,o.apiKey,c),this.fullPersistenceKey=Dc("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await qc(this.auth,{idToken:t}).catch(()=>{});return n?Fn._fromGetAccountInfoResponse(this.auth,n,t):null}return Fn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ga(Ki(ev),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||Ki(ev);const f=Dc(s,t.config.apiKey,t.name);let g=null;for(const y of n)try{const E=await y._get(f);if(E){let S;if(typeof E=="string"){const C=await qc(t,{idToken:E}).catch(()=>{});if(!C)break;S=await Fn._fromGetAccountInfoResponse(t,C,E)}else S=Fn._fromJSON(t,E);y!==c&&(g=S),c=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Ga(c,t,s):(c=p[0],g&&await c._set(f,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new Ga(c,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Z0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Y0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(W0(t))return"Blackberry";if(tT(t))return"Webos";if(X0(t))return"Safari";if((t.includes("chrome/")||$0(t))&&!t.includes("edge/"))return"Chrome";if(J0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function Y0(r=Ze()){return/firefox\//i.test(r)}function X0(r=Ze()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $0(r=Ze()){return/crios\//i.test(r)}function Z0(r=Ze()){return/iemobile/i.test(r)}function J0(r=Ze()){return/android/i.test(r)}function W0(r=Ze()){return/blackberry/i.test(r)}function tT(r=Ze()){return/webos/i.test(r)}function km(r=Ze()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function sw(r=Ze()){return km(r)&&!!window.navigator?.standalone}function aw(){return vS()&&document.documentMode===10}function eT(r=Ze()){return km(r)||J0(r)||tT(r)||W0(r)||/windows phone/i.test(r)||Z0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(r,t=[]){let n;switch(r){case"Browser":n=nv(Ze());break;case"Worker":n=`${nv(Ze())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${no}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((f,g)=>{try{const p=t(c);f(p)}catch(p){g(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(r,t={}){return io(r,"GET","/v2/passwordPolicy",uh(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=6;class cw{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??uw,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new ow(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ki(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ga.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await qc(this,{idToken:t}),s=await Fn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Hn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=s?._redirectEventId,g=await this.tryRedirectSignIn(t);(!c||c===f)&&g?.user&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return bt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Hc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Q1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Hn(this.app))return Promise.reject(Ur(this));const n=t?Tn(t):null;return n&&bt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&bt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Hn(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Hn(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ki(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await lw(this),n=new cw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Bs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await rw(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ki(t)||this._popupRedirectResolver;bt(n,this,"argument-error"),this.redirectPersistenceManager=await Ga.create(this,[Ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(bt(g,this,"internal-error"),g.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return bt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=nT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&H1(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ch(r){return Tn(r)}class iv{constructor(t){this.auth=t,this.observer=null,this.addObserver=RS(n=>this.observer=n)}get next(){return bt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fw(r){Pm=r}function dw(r){return Pm.loadJS(r)}function mw(){return Pm.gapiScript}function gw(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(r,t){const n=qs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(Br(c,t??{}))return o;Zi(o,"already-initialized")}return n.initialize({options:t})}function yw(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Ki);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function _w(r,t,n){const s=ch(r);bt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,c=iT(t),{host:f,port:g}=vw(t),p=g===null?"":`:${g}`,y={url:`${c}//${f}${p}/`},E=Object.freeze({host:f,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){bt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),bt(Br(y,s.config.emulator)&&Br(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,eo(f)?(C0(`${c}//${f}${p}`),D0("Auth",!0)):Tw()}function iT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function vw(r){const t=iT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:rv(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:rv(f)}}}function rv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function Tw(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Qi("not implemented")}_getIdTokenResponse(t){return Qi("not implemented")}_linkToIdToken(t,n){return Qi("not implemented")}_getReauthenticationResolver(t){return Qi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(r,t){return F0(r,"POST","/v1/accounts:signInWithIdp",uh(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="http://localhost";class Ps extends rT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ps(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Zi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...c}=n;if(!s||!o)return null;const f=new Ps(s,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Qa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Qa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Qa(t,n)}buildRequest(){const t={requestUri:Ew,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Bl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends sT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Hl{constructor(){super("facebook.com")}static credential(t){return Ps._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nr.credential(t.oauthAccessToken)}catch{return null}}}Nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ps._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Or.credential(n,s)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Hl{constructor(){super("github.com")}static credential(t){return Ps._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mr.credential(t.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Hl{constructor(){super("twitter.com")}static credential(t,n){return Ps._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xr.credentialFromTaggedObject(t)}static credentialFromError(t){return xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return xr.credential(n,s)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(r,t){return F0(r,"POST","/v1/accounts:signUp",uh(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const c=await Fn._fromIdTokenResponse(t,s,o),f=sv(s);return new qr({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=sv(s);return new qr({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function sv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(r){if(Hn(r.app))return Promise.reject(Ur(r));const t=ch(r);if(await t._initializationPromise,t.currentUser?.isAnonymous)return new qr({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await bw(t,{returnSecureToken:!0}),s=await qr._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Kn{constructor(t,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Fc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Fc(t,n,s,o)}}function aT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Fc._fromErrorAndOperation(r,c,t,s):c})}async function Sw(r,t,n=!1){const s=await Ml(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return qr._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(r,t,n=!1){const{auth:s}=r;if(Hn(s.app))return Promise.reject(Ur(s));const o="reauthenticate";try{const c=await Ml(r,aT(s,o,t,r),n);bt(c.idToken,s,"internal-error");const f=Vm(c.idToken);bt(f,s,"internal-error");const{sub:g}=f;return bt(r.uid===g,s,"user-mismatch"),qr._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&Zi(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(r,t,n=!1){if(Hn(r.app))return Promise.reject(Ur(r));const s="signIn",o=await aT(r,s,t),c=await qr._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}function Iw(r,t,n,s){return Tn(r).onIdTokenChanged(t,n,s)}function Cw(r,t,n){return Tn(r).beforeAuthStateChanged(t,n)}const Gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=1e3,Nw=10;class lT extends oT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);aw()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,Nw):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},Dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}lT.type="LOCAL";const Ow=lT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT extends oT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}uT.type="SESSION";const cT=uT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new hh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:c}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(f).map(async y=>y(n.origin,c)),p=await Mw(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((g,p)=>{const y=Um("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(E),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(C.data.response);break;default:clearTimeout(E),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(){return window}function Vw(r){fi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){return typeof fi().WorkerGlobalScope<"u"&&typeof fi().importScripts=="function"}async function kw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pw(){return navigator?.serviceWorker?.controller||null}function Uw(){return hT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="firebaseLocalStorageDb",Lw=1,Qc="firebaseLocalStorage",dT="fbase_key";class Fl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fh(r,t){return r.transaction([Qc],t?"readwrite":"readonly").objectStore(Qc)}function zw(){const r=indexedDB.deleteDatabase(fT);return new Fl(r).toPromise()}function lm(){const r=indexedDB.open(fT,Lw);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Qc,{keyPath:dT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Qc)?t(s):(s.close(),await zw(),t(await lm()))})})}async function av(r,t,n){const s=fh(r,!0).put({[dT]:t,value:n});return new Fl(s).toPromise()}async function jw(r,t){const n=fh(r,!1).get(t),s=await new Fl(n).toPromise();return s===void 0?null:s.value}function ov(r,t){const n=fh(r,!0).delete(t);return new Fl(n).toPromise()}const Bw=800,qw=3;class mT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>qw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(Uw()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await kw(),!this.activeServiceWorker)return;this.sender=new xw(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Pw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await lm();return await av(t,Gc,"1"),await ov(t,Gc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>av(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>jw(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ov(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=fh(o,!1).getAll();return new Fl(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mT.type="LOCAL";const Hw=mT;new ql(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(r,t){return t?Ki(t):(bt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends rT{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Qa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Qa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Gw(r){return Rw(r.auth,new Lm(r),r.bypassAuthState)}function Qw(r){const{auth:t,user:n}=r;return bt(n,t,"internal-error"),ww(n,new Lm(r),r.bypassAuthState)}async function Kw(r){const{auth:t,user:n}=r;return bt(n,t,"internal-error"),Sw(n,new Lm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(t,n,s,o,c=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:f,type:g}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Gw;case"linkViaPopup":case"linkViaRedirect":return Kw;case"reauthViaPopup":case"reauthViaRedirect":return Qw;default:Zi(this.auth,"internal-error")}}resolve(t){Ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=new ql(2e3,1e4);class Ha extends gT{constructor(t,n,s,o,c){super(t,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Ha.currentPopupAction&&Ha.currentPopupAction.cancel(),Ha.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return bt(t,this.auth,"internal-error"),t}async onExecution(){Ji(this.filter.length===1,"Popup operations only handle one event");const t=Um();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(hi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ha.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Yw.get())};t()}}Ha.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="pendingRedirect",Nc=new Map;class $w extends gT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Nc.get(this.auth._key());if(!t){try{const s=await Zw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Nc.set(this.auth._key(),t)}return this.bypassAuthState||Nc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zw(r,t){const n=tR(t),s=Ww(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function Jw(r,t){Nc.set(r._key(),t)}function Ww(r){return Ki(r._redirectPersistence)}function tR(r){return Dc(Xw,r.config.apiKey,r.name)}async function eR(r,t,n=!1){if(Hn(r.app))return Promise.reject(Ur(r));const s=ch(r),o=Fw(s,t),f=await new $w(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=600*1e3;class iR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!rR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!pT(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(hi(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=nR&&this.cachedEventUids.clear(),this.cachedEventUids.has(lv(t))}saveEventToCache(t){this.cachedEventUids.add(lv(t)),this.lastProcessedEventTime=Date.now()}}function lv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function pT({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function rR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pT(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(r,t={}){return io(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oR=/^https?/;async function lR(r){if(r.config.emulator)return;const{authorizedDomains:t}=await sR(r);for(const n of t)try{if(uR(n))return}catch{}Zi(r,"unauthorized-domain")}function uR(r){const t=am(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!oR.test(n))return!1;if(aR.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new ql(3e4,6e4);function uv(){const r=fi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function hR(r){return new Promise((t,n)=>{function s(){uv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uv(),n(hi(r,"network-request-failed"))},timeout:cR.get()})}if(fi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(fi().gapi?.load)s();else{const o=gw("iframefcb");return fi()[o]=()=>{gapi.load?s():n(hi(r,"network-request-failed"))},dw(`${mw()}?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw Oc=null,t})}let Oc=null;function fR(r){return Oc=Oc||hR(r),Oc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=new ql(5e3,15e3),mR="__/auth/iframe",gR="emulator/auth/iframe",pR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _R(r){const t=r.config;bt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?xm(t,gR):`https://${r.config.authDomain}/${mR}`,s={apiKey:t.apiKey,appName:r.name,v:no},o=yR.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Bl(s).slice(1)}`}async function vR(r){const t=await fR(r),n=fi().gapi;return bt(n,r,"internal-error"),t.open({where:document.body,url:_R(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pR,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const f=hi(r,"network-request-failed"),g=fi().setTimeout(()=>{c(f)},dR.get());function p(){fi().clearTimeout(g),o(s)}s.ping(p).then(p,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ER=500,bR=600,AR="_blank",SR="http://localhost";class cv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wR(r,t,n,s=ER,o=bR){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p={...TR,width:s.toString(),height:o.toString(),top:c,left:f},y=Ze().toLowerCase();n&&(g=$0(y)?AR:n),Y0(y)&&(t=t||SR,p.scrollbars="yes");const E=Object.entries(p).reduce((C,[U,F])=>`${C}${U}=${F},`,"");if(sw(y)&&g!=="_self")return RR(t||"",g),new cv(null);const S=window.open(t||"",g,E);bt(S,r,"popup-blocked");try{S.focus()}catch{}return new cv(S)}function RR(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="__/auth/handler",CR="emulator/auth/handler",DR=encodeURIComponent("fac");async function hv(r,t,n,s,o,c){bt(r.config.authDomain,r,"auth-domain-config-required"),bt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:no,eventId:o};if(t instanceof sT){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",wS(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,S]of Object.entries({}))f[E]=S}if(t instanceof Hl){const E=t.getScopes().filter(S=>S!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const E of Object.keys(g))g[E]===void 0&&delete g[E];const p=await r._getAppCheckToken(),y=p?`#${DR}=${encodeURIComponent(p)}`:"";return`${NR(r)}?${Bl(g).slice(1)}${y}`}function NR({config:r}){return r.emulator?xm(r,CR):`https://${r.authDomain}/${IR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="webStorageSupport";class OR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cT,this._completeRedirectFn=eR,this._overrideRedirectResult=Jw}async _openPopup(t,n,s,o){Ji(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await hv(t,n,s,am(),o);return wR(t,c,Um())}async _openRedirect(t,n,s,o){await this._originValidation(t);const c=await hv(t,n,s,am(),o);return Vw(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(Ji(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await vR(t),s=new iR(t);return n.register("authEvent",o=>(bt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(qd,{type:qd},o=>{const c=o?.[0]?.[qd];c!==void 0&&n(!!c),Zi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return eT()||X0()||km()}}const MR=OR;var fv="@firebase/auth",dv="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){bt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kR(r){yi(new Qn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;bt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nT(r)},y=new hw(s,o,c,p);return yw(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),yi(new Qn("auth-internal",t=>{const n=ch(t.getProvider("auth").getImmediate());return(s=>new xR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(fv,dv,VR(r)),Pn(fv,dv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=300,UR=I0("authIdTokenMaxAge")||PR;let mv=null;const LR=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>UR)return;const o=n?.token;mv!==o&&(mv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zR(r=Om()){const t=qs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=pw(r,{popupRedirectResolver:MR,persistence:[Hw,Ow,cT]}),s=I0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=LR(c.toString());Cw(n,f,()=>f(n.currentUser)),Iw(n,g=>f(g))}}const o=w0("auth");return o&&_w(n,`http://${o}`),n}function jR(){return document.getElementsByTagName("head")?.[0]??document}fw({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const c=hi("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",jR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kR("Browser");var gv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,yT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(O,A){function I(){}I.prototype=A.prototype,O.D=A.prototype,O.prototype=new I,O.prototype.constructor=O,O.C=function(M,x,V){for(var R=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)R[ie-2]=arguments[ie];return A.prototype[x].apply(M,R)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,A,I){I||(I=0);var M=Array(16);if(typeof A=="string")for(var x=0;16>x;++x)M[x]=A.charCodeAt(I++)|A.charCodeAt(I++)<<8|A.charCodeAt(I++)<<16|A.charCodeAt(I++)<<24;else for(x=0;16>x;++x)M[x]=A[I++]|A[I++]<<8|A[I++]<<16|A[I++]<<24;A=O.g[0],I=O.g[1],x=O.g[2];var V=O.g[3],R=A+(V^I&(x^V))+M[0]+3614090360&4294967295;A=I+(R<<7&4294967295|R>>>25),R=V+(x^A&(I^x))+M[1]+3905402710&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(I^V&(A^I))+M[2]+606105819&4294967295,x=V+(R<<17&4294967295|R>>>15),R=I+(A^x&(V^A))+M[3]+3250441966&4294967295,I=x+(R<<22&4294967295|R>>>10),R=A+(V^I&(x^V))+M[4]+4118548399&4294967295,A=I+(R<<7&4294967295|R>>>25),R=V+(x^A&(I^x))+M[5]+1200080426&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(I^V&(A^I))+M[6]+2821735955&4294967295,x=V+(R<<17&4294967295|R>>>15),R=I+(A^x&(V^A))+M[7]+4249261313&4294967295,I=x+(R<<22&4294967295|R>>>10),R=A+(V^I&(x^V))+M[8]+1770035416&4294967295,A=I+(R<<7&4294967295|R>>>25),R=V+(x^A&(I^x))+M[9]+2336552879&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(I^V&(A^I))+M[10]+4294925233&4294967295,x=V+(R<<17&4294967295|R>>>15),R=I+(A^x&(V^A))+M[11]+2304563134&4294967295,I=x+(R<<22&4294967295|R>>>10),R=A+(V^I&(x^V))+M[12]+1804603682&4294967295,A=I+(R<<7&4294967295|R>>>25),R=V+(x^A&(I^x))+M[13]+4254626195&4294967295,V=A+(R<<12&4294967295|R>>>20),R=x+(I^V&(A^I))+M[14]+2792965006&4294967295,x=V+(R<<17&4294967295|R>>>15),R=I+(A^x&(V^A))+M[15]+1236535329&4294967295,I=x+(R<<22&4294967295|R>>>10),R=A+(x^V&(I^x))+M[1]+4129170786&4294967295,A=I+(R<<5&4294967295|R>>>27),R=V+(I^x&(A^I))+M[6]+3225465664&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^I&(V^A))+M[11]+643717713&4294967295,x=V+(R<<14&4294967295|R>>>18),R=I+(V^A&(x^V))+M[0]+3921069994&4294967295,I=x+(R<<20&4294967295|R>>>12),R=A+(x^V&(I^x))+M[5]+3593408605&4294967295,A=I+(R<<5&4294967295|R>>>27),R=V+(I^x&(A^I))+M[10]+38016083&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^I&(V^A))+M[15]+3634488961&4294967295,x=V+(R<<14&4294967295|R>>>18),R=I+(V^A&(x^V))+M[4]+3889429448&4294967295,I=x+(R<<20&4294967295|R>>>12),R=A+(x^V&(I^x))+M[9]+568446438&4294967295,A=I+(R<<5&4294967295|R>>>27),R=V+(I^x&(A^I))+M[14]+3275163606&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^I&(V^A))+M[3]+4107603335&4294967295,x=V+(R<<14&4294967295|R>>>18),R=I+(V^A&(x^V))+M[8]+1163531501&4294967295,I=x+(R<<20&4294967295|R>>>12),R=A+(x^V&(I^x))+M[13]+2850285829&4294967295,A=I+(R<<5&4294967295|R>>>27),R=V+(I^x&(A^I))+M[2]+4243563512&4294967295,V=A+(R<<9&4294967295|R>>>23),R=x+(A^I&(V^A))+M[7]+1735328473&4294967295,x=V+(R<<14&4294967295|R>>>18),R=I+(V^A&(x^V))+M[12]+2368359562&4294967295,I=x+(R<<20&4294967295|R>>>12),R=A+(I^x^V)+M[5]+4294588738&4294967295,A=I+(R<<4&4294967295|R>>>28),R=V+(A^I^x)+M[8]+2272392833&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^I)+M[11]+1839030562&4294967295,x=V+(R<<16&4294967295|R>>>16),R=I+(x^V^A)+M[14]+4259657740&4294967295,I=x+(R<<23&4294967295|R>>>9),R=A+(I^x^V)+M[1]+2763975236&4294967295,A=I+(R<<4&4294967295|R>>>28),R=V+(A^I^x)+M[4]+1272893353&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^I)+M[7]+4139469664&4294967295,x=V+(R<<16&4294967295|R>>>16),R=I+(x^V^A)+M[10]+3200236656&4294967295,I=x+(R<<23&4294967295|R>>>9),R=A+(I^x^V)+M[13]+681279174&4294967295,A=I+(R<<4&4294967295|R>>>28),R=V+(A^I^x)+M[0]+3936430074&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^I)+M[3]+3572445317&4294967295,x=V+(R<<16&4294967295|R>>>16),R=I+(x^V^A)+M[6]+76029189&4294967295,I=x+(R<<23&4294967295|R>>>9),R=A+(I^x^V)+M[9]+3654602809&4294967295,A=I+(R<<4&4294967295|R>>>28),R=V+(A^I^x)+M[12]+3873151461&4294967295,V=A+(R<<11&4294967295|R>>>21),R=x+(V^A^I)+M[15]+530742520&4294967295,x=V+(R<<16&4294967295|R>>>16),R=I+(x^V^A)+M[2]+3299628645&4294967295,I=x+(R<<23&4294967295|R>>>9),R=A+(x^(I|~V))+M[0]+4096336452&4294967295,A=I+(R<<6&4294967295|R>>>26),R=V+(I^(A|~x))+M[7]+1126891415&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~I))+M[14]+2878612391&4294967295,x=V+(R<<15&4294967295|R>>>17),R=I+(V^(x|~A))+M[5]+4237533241&4294967295,I=x+(R<<21&4294967295|R>>>11),R=A+(x^(I|~V))+M[12]+1700485571&4294967295,A=I+(R<<6&4294967295|R>>>26),R=V+(I^(A|~x))+M[3]+2399980690&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~I))+M[10]+4293915773&4294967295,x=V+(R<<15&4294967295|R>>>17),R=I+(V^(x|~A))+M[1]+2240044497&4294967295,I=x+(R<<21&4294967295|R>>>11),R=A+(x^(I|~V))+M[8]+1873313359&4294967295,A=I+(R<<6&4294967295|R>>>26),R=V+(I^(A|~x))+M[15]+4264355552&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~I))+M[6]+2734768916&4294967295,x=V+(R<<15&4294967295|R>>>17),R=I+(V^(x|~A))+M[13]+1309151649&4294967295,I=x+(R<<21&4294967295|R>>>11),R=A+(x^(I|~V))+M[4]+4149444226&4294967295,A=I+(R<<6&4294967295|R>>>26),R=V+(I^(A|~x))+M[11]+3174756917&4294967295,V=A+(R<<10&4294967295|R>>>22),R=x+(A^(V|~I))+M[2]+718787259&4294967295,x=V+(R<<15&4294967295|R>>>17),R=I+(V^(x|~A))+M[9]+3951481745&4294967295,O.g[0]=O.g[0]+A&4294967295,O.g[1]=O.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,O.g[2]=O.g[2]+x&4294967295,O.g[3]=O.g[3]+V&4294967295}s.prototype.u=function(O,A){A===void 0&&(A=O.length);for(var I=A-this.blockSize,M=this.B,x=this.h,V=0;V<A;){if(x==0)for(;V<=I;)o(this,O,V),V+=this.blockSize;if(typeof O=="string"){for(;V<A;)if(M[x++]=O.charCodeAt(V++),x==this.blockSize){o(this,M),x=0;break}}else for(;V<A;)if(M[x++]=O[V++],x==this.blockSize){o(this,M),x=0;break}}this.h=x,this.o+=A},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var A=1;A<O.length-8;++A)O[A]=0;var I=8*this.o;for(A=O.length-8;A<O.length;++A)O[A]=I&255,I/=256;for(this.u(O),O=Array(16),A=I=0;4>A;++A)for(var M=0;32>M;M+=8)O[I++]=this.g[A]>>>M&255;return O};function c(O,A){var I=g;return Object.prototype.hasOwnProperty.call(I,O)?I[O]:I[O]=A(O)}function f(O,A){this.h=A;for(var I=[],M=!0,x=O.length-1;0<=x;x--){var V=O[x]|0;M&&V==A||(I[x]=V,M=!1)}this.g=I}var g={};function p(O){return-128<=O&&128>O?c(O,function(A){return new f([A|0],0>A?-1:0)}):new f([O|0],0>O?-1:0)}function y(O){if(isNaN(O)||!isFinite(O))return S;if(0>O)return K(y(-O));for(var A=[],I=1,M=0;O>=I;M++)A[M]=O/I|0,I*=4294967296;return new f(A,0)}function E(O,A){if(O.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(O.charAt(0)=="-")return K(E(O.substring(1),A));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=y(Math.pow(A,8)),M=S,x=0;x<O.length;x+=8){var V=Math.min(8,O.length-x),R=parseInt(O.substring(x,x+V),A);8>V?(V=y(Math.pow(A,V)),M=M.j(V).add(y(R))):(M=M.j(I),M=M.add(y(R)))}return M}var S=p(0),C=p(1),U=p(16777216);r=f.prototype,r.m=function(){if(J(this))return-K(this).m();for(var O=0,A=1,I=0;I<this.g.length;I++){var M=this.i(I);O+=(0<=M?M:4294967296+M)*A,A*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(F(this))return"0";if(J(this))return"-"+K(this).toString(O);for(var A=y(Math.pow(O,6)),I=this,M="";;){var x=Bt(I,A).g;I=st(I,x.j(A));var V=((0<I.g.length?I.g[0]:I.h)>>>0).toString(O);if(I=x,F(I))return V+M;for(;6>V.length;)V="0"+V;M=V+M}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function F(O){if(O.h!=0)return!1;for(var A=0;A<O.g.length;A++)if(O.g[A]!=0)return!1;return!0}function J(O){return O.h==-1}r.l=function(O){return O=st(this,O),J(O)?-1:F(O)?0:1};function K(O){for(var A=O.g.length,I=[],M=0;M<A;M++)I[M]=~O.g[M];return new f(I,~O.h).add(C)}r.abs=function(){return J(this)?K(this):this},r.add=function(O){for(var A=Math.max(this.g.length,O.g.length),I=[],M=0,x=0;x<=A;x++){var V=M+(this.i(x)&65535)+(O.i(x)&65535),R=(V>>>16)+(this.i(x)>>>16)+(O.i(x)>>>16);M=R>>>16,V&=65535,R&=65535,I[x]=R<<16|V}return new f(I,I[I.length-1]&-2147483648?-1:0)};function st(O,A){return O.add(K(A))}r.j=function(O){if(F(this)||F(O))return S;if(J(this))return J(O)?K(this).j(K(O)):K(K(this).j(O));if(J(O))return K(this.j(K(O)));if(0>this.l(U)&&0>O.l(U))return y(this.m()*O.m());for(var A=this.g.length+O.g.length,I=[],M=0;M<2*A;M++)I[M]=0;for(M=0;M<this.g.length;M++)for(var x=0;x<O.g.length;x++){var V=this.i(M)>>>16,R=this.i(M)&65535,ie=O.i(x)>>>16,Ft=O.i(x)&65535;I[2*M+2*x]+=R*Ft,ut(I,2*M+2*x),I[2*M+2*x+1]+=V*Ft,ut(I,2*M+2*x+1),I[2*M+2*x+1]+=R*ie,ut(I,2*M+2*x+1),I[2*M+2*x+2]+=V*ie,ut(I,2*M+2*x+2)}for(M=0;M<A;M++)I[M]=I[2*M+1]<<16|I[2*M];for(M=A;M<2*A;M++)I[M]=0;return new f(I,0)};function ut(O,A){for(;(O[A]&65535)!=O[A];)O[A+1]+=O[A]>>>16,O[A]&=65535,A++}function ct(O,A){this.g=O,this.h=A}function Bt(O,A){if(F(A))throw Error("division by zero");if(F(O))return new ct(S,S);if(J(O))return A=Bt(K(O),A),new ct(K(A.g),K(A.h));if(J(A))return A=Bt(O,K(A)),new ct(K(A.g),A.h);if(30<O.g.length){if(J(O)||J(A))throw Error("slowDivide_ only works with positive integers.");for(var I=C,M=A;0>=M.l(O);)I=Tt(I),M=Tt(M);var x=xt(I,1),V=xt(M,1);for(M=xt(M,2),I=xt(I,2);!F(M);){var R=V.add(M);0>=R.l(O)&&(x=x.add(I),V=R),M=xt(M,1),I=xt(I,1)}return A=st(O,x.j(A)),new ct(x,A)}for(x=S;0<=O.l(A);){for(I=Math.max(1,Math.floor(O.m()/A.m())),M=Math.ceil(Math.log(I)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),V=y(I),R=V.j(A);J(R)||0<R.l(O);)I-=M,V=y(I),R=V.j(A);F(V)&&(V=C),x=x.add(V),O=st(O,R)}return new ct(x,O)}r.A=function(O){return Bt(this,O).h},r.and=function(O){for(var A=Math.max(this.g.length,O.g.length),I=[],M=0;M<A;M++)I[M]=this.i(M)&O.i(M);return new f(I,this.h&O.h)},r.or=function(O){for(var A=Math.max(this.g.length,O.g.length),I=[],M=0;M<A;M++)I[M]=this.i(M)|O.i(M);return new f(I,this.h|O.h)},r.xor=function(O){for(var A=Math.max(this.g.length,O.g.length),I=[],M=0;M<A;M++)I[M]=this.i(M)^O.i(M);return new f(I,this.h^O.h)};function Tt(O){for(var A=O.g.length+1,I=[],M=0;M<A;M++)I[M]=O.i(M)<<1|O.i(M-1)>>>31;return new f(I,O.h)}function xt(O,A){var I=A>>5;A%=32;for(var M=O.g.length-I,x=[],V=0;V<M;V++)x[V]=0<A?O.i(V+I)>>>A|O.i(V+I+1)<<32-A:O.i(V+I);return new f(x,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,yT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Lr=f}).apply(typeof gv<"u"?gv:typeof self<"u"?self:typeof window<"u"?window:{});var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _T,Tl,vT,Mc,um,TT,ET,bT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ec=="object"&&Ec];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(u,m){if(m)t:{var _=s;u=u.split(".");for(var b=0;b<u.length-1;b++){var P=u[b];if(!(P in _))break t;_=_[P]}u=u[u.length-1],b=_[u],m=m(b),m!=b&&m!=null&&t(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,b=!1,P={next:function(){if(!b&&_<u.length){var H=_++;return{value:m(H,u[H]),done:!1}}return b=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}o("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function S(u,m,_){if(!u)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,b),u.apply(m,P)}}return function(){return u.apply(m,arguments)}}function C(u,m,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,C.apply(null,arguments)}function U(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var b=_.slice();return b.push.apply(b,arguments),u.apply(this,b)}}function F(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(b,P,H){for(var nt=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)nt[Ut-2]=arguments[Ut];return m.prototype[P].apply(b,nt)}}function J(u){const m=u.length;if(0<m){const _=Array(m);for(let b=0;b<m;b++)_[b]=u[b];return _}return[]}function K(u,m){for(let _=1;_<arguments.length;_++){const b=arguments[_];if(p(b)){const P=u.length||0,H=b.length||0;u.length=P+H;for(let nt=0;nt<H;nt++)u[P+nt]=b[nt]}else u.push(b)}}class st{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ut(u){return/^[\s\xa0]*$/.test(u)}function ct(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function Bt(u){return Bt[" "](u),u}Bt[" "]=function(){};var Tt=ct().indexOf("Gecko")!=-1&&!(ct().toLowerCase().indexOf("webkit")!=-1&&ct().indexOf("Edge")==-1)&&!(ct().indexOf("Trident")!=-1||ct().indexOf("MSIE")!=-1)&&ct().indexOf("Edge")==-1;function xt(u,m,_){for(const b in u)m.call(_,u[b],b,u)}function O(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function A(u){const m={};for(const _ in u)m[_]=u[_];return m}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(u,m){let _,b;for(let P=1;P<arguments.length;P++){b=arguments[P];for(_ in b)u[_]=b[_];for(let H=0;H<I.length;H++)_=I[H],Object.prototype.hasOwnProperty.call(b,_)&&(u[_]=b[_])}}function x(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function V(u){g.setTimeout(()=>{throw u},0)}function R(){var u=kt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ie{constructor(){this.h=this.g=null}add(m,_){const b=Ft.get();b.set(m,_),this.h?this.h.next=b:this.g=b,this.h=b}}var Ft=new st(()=>new G,u=>u.reset());class G{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let it,ft=!1,kt=new ie,D=()=>{const u=g.Promise.resolve(void 0);it=()=>{u.then(Z)}};var Z=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){V(_)}var m=Ft;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ft=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var et=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};g.addEventListener("test",_,m),g.removeEventListener("test",_,m)}catch{}return u}();function gt(u,m){if(tt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,b=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Tt){t:{try{Bt(m.nodeName);var P=!0;break t}catch{}P=!1}P||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:at[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&gt.aa.h.call(this)}}F(gt,tt);var at={2:"touch",3:"pen",4:"mouse"};gt.prototype.h=function(){gt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),Vt=0;function Ne(u,m,_,b,P){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!b,this.ha=P,this.key=++Vt,this.da=this.fa=!1}function nn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function rn(u){this.src=u,this.g={},this.h=0}rn.prototype.add=function(u,m,_,b,P){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var nt=$r(u,m,b,P);return-1<nt?(m=u[nt],_||(m.fa=!1)):(m=new Ne(m,this.src,H,!!b,P),m.fa=_,u.push(m)),m};function Xr(u,m){var _=m.type;if(_ in u.g){var b=u.g[_],P=Array.prototype.indexOf.call(b,m,void 0),H;(H=0<=P)&&Array.prototype.splice.call(b,P,1),H&&(nn(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function $r(u,m,_,b){for(var P=0;P<u.length;++P){var H=u[P];if(!H.da&&H.listener==m&&H.capture==!!_&&H.ha==b)return P}return-1}var Zr="closure_lm_"+(1e6*Math.random()|0),lo={};function $l(u,m,_,b,P){if(Array.isArray(m)){for(var H=0;H<m.length;H++)$l(u,m[H],_,b,P);return null}return _=Zl(_),u&&u[Pt]?u.K(m,_,y(b)?!!b.capture:!1,P):En(u,m,_,!1,b,P)}function En(u,m,_,b,P,H){if(!m)throw Error("Invalid event type");var nt=y(P)?!!P.capture:!!P,Ut=Ys(u);if(Ut||(u[Zr]=Ut=new rn(u)),_=Ut.add(m,_,b,nt,H),_.proxy)return _;if(b=Dh(),_.proxy=b,b.src=u,b.listener=_,u.addEventListener)et||(P=nt),P===void 0&&(P=!1),u.addEventListener(m.toString(),b,P);else if(u.attachEvent)u.attachEvent(Jr(m.toString()),b);else if(u.addListener&&u.removeListener)u.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Dh(){function u(_){return m.call(u.src,u.listener,_)}const m=Nh;return u}function uo(u,m,_,b,P){if(Array.isArray(m))for(var H=0;H<m.length;H++)uo(u,m[H],_,b,P);else b=y(b)?!!b.capture:!!b,_=Zl(_),u&&u[Pt]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],_=$r(H,_,b,P),-1<_&&(nn(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ys(u))&&(m=u.g[m.toString()],u=-1,m&&(u=$r(m,_,b,P)),(_=-1<u?m[u]:null)&&Ks(_))}function Ks(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Pt])Xr(m.i,u);else{var _=u.type,b=u.proxy;m.removeEventListener?m.removeEventListener(_,b,u.capture):m.detachEvent?m.detachEvent(Jr(_),b):m.addListener&&m.removeListener&&m.removeListener(b),(_=Ys(m))?(Xr(_,u),_.h==0&&(_.src=null,m[Zr]=null)):nn(u)}}}function Jr(u){return u in lo?lo[u]:lo[u]="on"+u}function Nh(u,m){if(u.da)u=!0;else{m=new gt(m,this);var _=u.listener,b=u.ha||u.src;u.fa&&Ks(u),u=_.call(b,m)}return u}function Ys(u){return u=u[Zr],u instanceof rn?u:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zl(u){return typeof u=="function"?u:(u[co]||(u[co]=function(m){return u.handleEvent(m)}),u[co])}function ue(){rt.call(this),this.i=new rn(this),this.M=this,this.F=null}F(ue,rt),ue.prototype[Pt]=!0,ue.prototype.removeEventListener=function(u,m,_,b){uo(this,u,m,_,b)};function Kt(u,m){var _,b=u.F;if(b)for(_=[];b;b=b.F)_.push(b);if(u=u.M,b=m.type||m,typeof m=="string")m=new tt(m,u);else if(m instanceof tt)m.target=m.target||u;else{var P=m;m=new tt(b,u),M(m,P)}if(P=!0,_)for(var H=_.length-1;0<=H;H--){var nt=m.g=_[H];P=cn(nt,b,!0,m)&&P}if(nt=m.g=u,P=cn(nt,b,!0,m)&&P,P=cn(nt,b,!1,m)&&P,_)for(H=0;H<_.length;H++)nt=m.g=_[H],P=cn(nt,b,!1,m)&&P}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],b=0;b<_.length;b++)nn(_[b]);delete u.g[m],u.h--}}this.F=null},ue.prototype.K=function(u,m,_,b){return this.i.add(String(u),m,!1,_,b)},ue.prototype.L=function(u,m,_,b){return this.i.add(String(u),m,!0,_,b)};function cn(u,m,_,b){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var P=!0,H=0;H<m.length;++H){var nt=m[H];if(nt&&!nt.da&&nt.capture==_){var Ut=nt.listener,Ae=nt.ha||nt.src;nt.fa&&Xr(u.i,nt),P=Ut.call(Ae,b)!==!1&&P}}return P&&!b.defaultPrevented}function Ge(u,m,_){if(typeof u=="function")_&&(u=C(u,_));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(u,m||0)}function Jl(u){u.g=Ge(()=>{u.g=null,u.i&&(u.i=!1,Jl(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Oh extends rt{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Jl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(u){rt.call(this),this.h=u,this.g={}}F(Wr,rt);var ts=[];function es(u){xt(u.g,function(m,_){this.g.hasOwnProperty(_)&&Ks(m)},u),u.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),es(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Un=g.JSON.stringify,Xs=g.JSON.parse,ns=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function ho(){}ho.prototype.h=null;function fo(u){return u.h||(u.h=u.i())}function mo(){}var Ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ei(){tt.call(this,"d")}F(Ei,tt);function go(){tt.call(this,"c")}F(go,tt);var Yn={},po=null;function er(){return po=po||new ue}Yn.La="serverreachability";function $s(u){tt.call(this,Yn.La,u)}F($s,tt);function nr(u){const m=er();Kt(m,new $s(m))}Yn.STAT_EVENT="statevent";function Wl(u,m){tt.call(this,Yn.STAT_EVENT,u),this.stat=m}F(Wl,tt);function re(u){const m=er();Kt(m,new Wl(m,u))}Yn.Ma="timingevent";function be(u,m){tt.call(this,Yn.Ma,u),this.size=m}F(be,tt);function pe(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},m)}function bn(){this.g=!0}bn.prototype.xa=function(){this.g=!1};function yo(u,m,_,b,P,H){u.info(function(){if(u.g)if(H)for(var nt="",Ut=H.split("&"),Ae=0;Ae<Ut.length;Ae++){var Lt=Ut[Ae].split("=");if(1<Lt.length){var Me=Lt[0];Lt=Lt[1];var Se=Me.split("_");nt=2<=Se.length&&Se[1]=="type"?nt+(Me+"="+Lt+"&"):nt+(Me+"=redacted&")}}else nt=null;else nt=H;return"XMLHTTP REQ ("+b+") [attempt "+P+"]: "+m+`
`+_+`
`+nt})}function Mh(u,m,_,b,P,H,nt){u.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+P+"]: "+m+`
`+_+`
`+H+" "+nt})}function ir(u,m,_,b){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+is(u,_)+(b?" "+b:"")})}function tu(u,m){u.info(function(){return"TIMEOUT: "+m})}bn.prototype.info=function(){};function is(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var b=_[u];if(!(2>b.length)){var P=b[1];if(Array.isArray(P)&&!(1>P.length)){var H=P[0];if(H!="noop"&&H!="stop"&&H!="close")for(var nt=1;nt<P.length;nt++)P[nt]=""}}}}return Un(_)}catch{return m}}var rr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function $n(){}F($n,ho),$n.prototype.g=function(){return new XMLHttpRequest},$n.prototype.i=function(){return{}},Xn=new $n;function Je(u,m,_,b){this.j=u,this.i=m,this.l=_,this.R=b||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}var _o={},Zs={};function Ln(u,m,_){u.L=1,u.v=ls(hn(m)),u.m=_,u.P=!0,Ai(u,null)}function Ai(u,m){u.F=Date.now(),rs(u),u.A=hn(u.v);var _=u.A,b=u.R;Array.isArray(b)||(b=[String(b)]),So(_.i,"t",b),u.C=0,_=u.j.J,u.h=new fe,u.g=pu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Oh(C(u.Y,u,u.g),u.O)),m=u.U,_=u.g,b=u.ca;var P="readystatechange";Array.isArray(P)||(P&&(ts[0]=P.toString()),P=ts);for(var H=0;H<P.length;H++){var nt=$l(_,P[H],b||m.handleEvent,!1,m.h||m);if(!nt)break;m.g[nt.key]=nt}m=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),nr(),yo(u.i,u.u,u.A,u.l,u.R,u.m)}Je.prototype.ca=function(u){u=u.target;const m=this.M;m&&Rn(u)==3?m.j():this.Y(u)},Je.prototype.Y=function(u){try{if(u==this.g)t:{const Se=Rn(this.g);var m=this.g.Ba();const Oi=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||lu(this.g)))){this.J||Se!=4||m==7||(m==8||0>=Oi?nr(3):nr(2)),sr(this);var _=this.g.Z();this.X=_;e:if(eu(this)){var b=lu(this.g);u="";var P=b.length,H=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),Zn(this);var nt="";break e}this.h.i=new g.TextDecoder}for(m=0;m<P;m++)this.h.h=!0,u+=this.h.i.decode(b[m],{stream:!(H&&m==P-1)});b.length=0,this.h.g+=u,this.C=0,nt=this.h.g}else nt=this.g.oa();if(this.o=_==200,Mh(this.i,this.u,this.A,this.l,this.R,Se,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Ut,Ae=this.g;if((Ut=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ut(Ut)){var Lt=Ut;break e}}Lt=null}if(_=Lt)ir(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ss(this,_);else{this.o=!1,this.s=3,re(12),Ue(this),Zn(this);break t}}if(this.P){_=!0;let Le;for(;!this.J&&this.C<nt.length;)if(Le=nu(this,nt),Le==Zs){Se==4&&(this.s=4,re(14),_=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==_o){this.s=4,re(15),ir(this.i,this.l,nt,"[Invalid Chunk]"),_=!1;break}else ir(this.i,this.l,Le,null),ss(this,Le);if(eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||nt.length!=0||this.h.h||(this.s=1,re(16),_=!1),this.o=this.o&&_,!_)ir(this.i,this.l,nt,"[Invalid Chunked Response]"),Ue(this),Zn(this);else if(0<nt.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+nt.length),ps(Me),Me.M=!0,re(11))}}else ir(this.i,this.l,nt,null),ss(this,nt);Se==4&&Ue(this),this.o&&!this.J&&(Se==4?du(this.j,this):(this.o=!1,rs(this)))}else Uh(this.g),_==400&&0<nt.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),Ue(this),Zn(this)}}}catch{}finally{}};function eu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function nu(u,m){var _=u.C,b=m.indexOf(`
`,_);return b==-1?Zs:(_=Number(m.substring(_,b)),isNaN(_)?_o:(b+=1,b+_>m.length?Zs:(m=m.slice(b,b+_),u.C=b+_,m)))}Je.prototype.cancel=function(){this.J=!0,Ue(this)};function rs(u){u.S=Date.now()+u.I,iu(u,u.I)}function iu(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=pe(C(u.ba,u),m)}function sr(u){u.B&&(g.clearTimeout(u.B),u.B=null)}Je.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(tu(this.i,this.A),this.L!=2&&(nr(),re(17)),Ue(this),this.s=2,Zn(this)):iu(this,this.S-u)};function Zn(u){u.j.G==0||u.J||du(u.j,u)}function Ue(u){sr(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,es(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ss(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||vo(_.h,u))){if(!u.K&&vo(_.h,u)&&_.G==3){try{var b=_.Da.g.parse(m)}catch{b=null}if(Array.isArray(b)&&b.length==3){var P=b;if(P[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ua(_),oa(_);else break t;Do(_),re(18)}}else _.za=P[1],0<_.za-_.T&&37500>P[2]&&_.F&&_.v==0&&!_.C&&(_.C=pe(C(_.Za,_),6e3));if(1>=Ws(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ni(_,11)}else if((u.K||_.g==u)&&ua(_),!ut(m))for(P=_.Da.g.parse(m),m=0;m<P.length;m++){let Lt=P[m];if(_.T=Lt[0],Lt=Lt[1],_.G==2)if(Lt[0]=="c"){_.K=Lt[1],_.ia=Lt[2];const Me=Lt[3];Me!=null&&(_.la=Me,_.j.info("VER="+_.la));const Se=Lt[4];Se!=null&&(_.Aa=Se,_.j.info("SVER="+_.Aa));const Oi=Lt[5];Oi!=null&&typeof Oi=="number"&&0<Oi&&(b=1.5*Oi,_.L=b,_.j.info("backChannelRequestTimeoutMs_="+b)),b=_;const Le=u.g;if(Le){const ri=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var H=b.h;H.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ta(H,H.h),H.h=null))}if(b.D){const Oo=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(b.ya=Oo,$t(b.I,b.D,Oo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),b=_;var nt=u;if(b.qa=gu(b,b.J?b.ia:null,b.W),nt.K){We(b.h,nt);var Ut=nt,Ae=b.L;Ae&&(Ut.I=Ae),Ut.B&&(sr(Ut),rs(Ut)),b.g=nt}else hu(b);0<_.i.length&&la(_)}else Lt[0]!="stop"&&Lt[0]!="close"||Ni(_,7);else _.G==3&&(Lt[0]=="stop"||Lt[0]=="close"?Lt[0]=="stop"?Ni(_,7):Io(_):Lt[0]!="noop"&&_.l&&_.l.ta(Lt),_.v=0)}}nr(4)}catch{}}var ru=class{constructor(u,m){this.g=u,this.map=m}};function Si(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Js(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ws(u){return u.h?1:u.g?u.g.size:0}function vo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ta(u,m){u.g?u.g.add(m):u.h=m}function We(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Si.prototype.cancel=function(){if(this.i=To(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function To(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return J(u.i)}function xh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,b=0;b<_;b++)m.push(u[b]);return m}m=[],_=0;for(b in u)m[_++]=u[b];return m}function ea(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const b in u)m[_++]=b;return m}}}function Eo(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=ea(u),b=xh(u),P=b.length,H=0;H<P;H++)m.call(void 0,b[H],_&&_[H],u)}var as=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var b=u[_].indexOf("="),P=null;if(0<=b){var H=u[_].substring(0,b);P=u[_].substring(b+1)}else H=u[_];m(H,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ye(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ye){this.h=u.h,os(this,u.j),this.o=u.o,this.g=u.g,ar(this,u.s),this.l=u.l;var m=u.i,_=new Ri;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),wi(this,_),this.m=u.m}else u&&(m=String(u).match(as))?(this.h=!1,os(this,m[1]||"",!0),this.o=An(m[2]||""),this.g=An(m[3]||"",!0),ar(this,m[4]),this.l=An(m[5]||"",!0),wi(this,m[6]||"",!0),this.m=An(m[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}ye.prototype.toString=function(){var u=[],m=this.j;m&&u.push(us(m,bo,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(us(m,bo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(us(_,_.charAt(0)=="/"?kh:Ao,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",us(_,na)),u.join("")};function hn(u){return new ye(u)}function os(u,m,_){u.j=_?An(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ar(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function wi(u,m,_){m instanceof Ri?(u.i=m,au(u.i,u.h)):(_||(m=us(m,Ph)),u.i=new Ri(m,u.h))}function $t(u,m,_){u.i.set(m,_)}function ls(u){return $t(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function An(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function us(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,su),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function su(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var bo=/[#\/\?@]/g,Ao=/[#\?:]/g,kh=/[#\?]/g,Ph=/[#\?@]/g,na=/#/g;function Ri(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Sn(u){u.g||(u.g=new Map,u.h=0,u.i&&Vh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Ri.prototype,r.add=function(u,m){Sn(this),this.i=null,u=Jn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Ii(u,m){Sn(u),m=Jn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ci(u,m){return Sn(u),m=Jn(u,m),u.g.has(m)}r.forEach=function(u,m){Sn(this),this.g.forEach(function(_,b){_.forEach(function(P){u.call(m,P,b,this)},this)},this)},r.na=function(){Sn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let b=0;b<m.length;b++){const P=u[b];for(let H=0;H<P.length;H++)_.push(m[b])}return _},r.V=function(u){Sn(this);let m=[];if(typeof u=="string")Ci(this,u)&&(m=m.concat(this.g.get(Jn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return Sn(this),this.i=null,u=Jn(this,u),Ci(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function So(u,m,_){Ii(u,m),0<_.length&&(u.i=null,u.g.set(Jn(u,m),J(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var b=m[_];const H=encodeURIComponent(String(b)),nt=this.V(b);for(b=0;b<nt.length;b++){var P=H;nt[b]!==""&&(P+="="+encodeURIComponent(String(nt[b]))),u.push(P)}}return this.i=u.join("&")};function Jn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function au(u,m){m&&!u.j&&(Sn(u),u.i=null,u.g.forEach(function(_,b){var P=b.toLowerCase();b!=P&&(Ii(this,b),So(this,P,_))},u)),u.j=m}function cs(u,m){const _=new bn;if(g.Image){const b=new Image;b.onload=U(wn,_,"TestLoadImage: loaded",!0,m,b),b.onerror=U(wn,_,"TestLoadImage: error",!1,m,b),b.onabort=U(wn,_,"TestLoadImage: abort",!1,m,b),b.ontimeout=U(wn,_,"TestLoadImage: timeout",!1,m,b),g.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=u}else m(!1)}function zn(u,m){const _=new bn,b=new AbortController,P=setTimeout(()=>{b.abort(),wn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:b.signal}).then(H=>{clearTimeout(P),H.ok?wn(_,"TestPingServer: ok",!0,m):wn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),wn(_,"TestPingServer: error",!1,m)})}function wn(u,m,_,b,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),b(_)}catch{}}function hs(){this.g=new ns}function Wn(u,m,_){const b=_||"";try{Eo(u,function(P,H){let nt=P;y(P)&&(nt=Un(P)),m.push(b+H+"="+encodeURIComponent(nt))})}catch(P){throw m.push(b+"type="+encodeURIComponent("_badmap")),P}}function or(u){this.l=u.Ub||null,this.j=u.eb||!1}F(or,ho),or.prototype.g=function(){return new Di(this.l,this.j)},or.prototype.i=function(u){return function(){return u}}({});function Di(u,m){ue.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(Di,ue),r=Di.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,ei(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function wo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ti(this):ei(this),this.readyState==3&&wo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,ti(this))},r.Qa=function(u){this.g&&(this.response=u,ti(this))},r.ga=function(){this.g&&ti(this)};function ti(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ei(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function ei(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ro(u){let m="";return xt(u,function(_,b){m+=b,m+=":",m+=_,m+=`\r
`}),m}function Oe(u,m,_){t:{for(b in _){var b=!1;break t}b=!0}b||(_=Ro(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):$t(u,m,_))}function Gt(u){ue.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Gt,ue);var ia=/^https?$/i,fs=["POST","PUT"];r=Gt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?fo(this.o):fo(Xn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){ou(this,H);return}if(u=_||"",_=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var P in b)_.set(P,b[P]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())_.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),P=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(fs,m,void 0))||b||P||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,nt]of _)this.g.setRequestHeader(H,nt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ds(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){ou(this,H)}};function ou(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ra(u),ni(u)}function ra(u){u.A||(u.A=!0,Kt(u,"complete"),Kt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Kt(this,"complete"),Kt(this,"abort"),ni(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),Gt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?sa(this):this.bb())},r.bb=function(){sa(this)};function sa(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Rn(u)!=4||u.Z()!=2)){if(u.u&&Rn(u)==4)Ge(u.Ea,0,u);else if(Kt(u,"readystatechange"),Rn(u)==4){u.h=!1;try{const nt=u.Z();t:switch(nt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var b;if(b=nt===0){var P=String(u.D).match(as)[1]||null;!P&&g.self&&g.self.location&&(P=g.self.location.protocol.slice(0,-1)),b=!ia.test(P?P.toLowerCase():"")}_=b}if(_)Kt(u,"complete"),Kt(u,"success");else{u.m=6;try{var H=2<Rn(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",ra(u)}}finally{ni(u)}}}}function ni(u,m){if(u.g){ds(u);const _=u.g,b=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Kt(u,"ready");try{_.onreadystatechange=b}catch{}}}function ds(u){u.I&&(g.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Rn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Xs(m)}};function lu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Uh(u){const m={};u=(u.g&&2<=Rn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<u.length;b++){if(ut(u[b]))continue;var _=x(u[b]);const P=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=m[P]||[];m[P]=H,H.push(_)}O(m,function(b){return b.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function aa(u){this.Aa=0,this.i=[],this.j=new bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,u),this.cb=ms("retryDelaySeedMs",1e4,u),this.Wa=ms("forwardChannelMaxRetries",2,u),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(u&&u.concurrentRequestLimit),this.Da=new hs,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=aa.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,b){re(0),this.W=u,this.H=m||{},_&&b!==void 0&&(this.H.OSID=_,this.H.OAID=b),this.F=this.X,this.I=gu(this,null,this.W),la(this)};function Io(u){if(uu(u),u.G==3){var m=u.U++,_=hn(u.I);if($t(_,"SID",u.K),$t(_,"RID",m),$t(_,"TYPE","terminate"),gs(u,_),m=new Je(u,u.j,m),m.L=2,m.v=ls(hn(_)),_=!1,g.navigator&&g.navigator.sendBeacon)try{_=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&g.Image&&(new Image().src=m.v,_=!0),_||(m.g=pu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),rs(m)}mu(u)}function oa(u){u.g&&(ps(u),u.g.cancel(),u.g=null)}function uu(u){oa(u),u.u&&(g.clearTimeout(u.u),u.u=null),ua(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function la(u){if(!Js(u.h)&&!u.s){u.s=!0;var m=u.Ga;it||D(),ft||(it(),ft=!0),kt.add(m,u),u.B=0}}function Lh(u,m){return Ws(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=pe(C(u.Ga,u,m),No(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const P=new Je(this,this.j,u);let H=this.o;if(this.S&&(H?(H=A(H),M(H,this.S)):H=this.S),this.m!==null||this.O||(P.H=H,H=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var b=this.i[_];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break e}b=void 0}if(b===void 0)break;if(m+=b,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=cu(this,P,m),_=hn(this.I),$t(_,"RID",u),$t(_,"CVER",22),this.D&&$t(_,"X-HTTP-Session-Id",this.D),gs(this,_),H&&(this.O?m="headers="+encodeURIComponent(String(Ro(H)))+"&"+m:this.m&&Oe(_,this.m,H)),ta(this.h,P),this.Ua&&$t(_,"TYPE","init"),this.P?($t(_,"$req",m),$t(_,"SID","null"),P.T=!0,Ln(P,_,null)):Ln(P,_,m),this.G=2}}else this.G==3&&(u?Co(this,u):this.i.length==0||Js(this.h)||Co(this))};function Co(u,m){var _;m?_=m.l:_=u.U++;const b=hn(u.I);$t(b,"SID",u.K),$t(b,"RID",_),$t(b,"AID",u.T),gs(u,b),u.m&&u.o&&Oe(b,u.m,u.o),_=new Je(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=cu(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ta(u.h,_),Ln(_,b,m)}function gs(u,m){u.H&&xt(u.H,function(_,b){$t(m,b,_)}),u.l&&Eo({},function(_,b){$t(m,b,_)})}function cu(u,m,_){_=Math.min(u.i.length,_);var b=u.l?C(u.l.Na,u.l,u):null;t:{var P=u.i;let H=-1;for(;;){const nt=["count="+_];H==-1?0<_?(H=P[0].g,nt.push("ofs="+H)):H=0:nt.push("ofs="+H);let Ut=!0;for(let Ae=0;Ae<_;Ae++){let Lt=P[Ae].g;const Me=P[Ae].map;if(Lt-=H,0>Lt)H=Math.max(0,P[Ae].g-100),Ut=!1;else try{Wn(Me,nt,"req"+Lt+"_")}catch{b&&b(Me)}}if(Ut){b=nt.join("&");break t}}}return u=u.i.splice(0,_),m.D=u,b}function hu(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;it||D(),ft||(it(),ft=!0),kt.add(m,u),u.v=0}}function Do(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=pe(C(u.Fa,u),No(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=pe(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,re(10),oa(this),fu(this))};function ps(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function fu(u){u.g=new Je(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=hn(u.qa);$t(m,"RID","rpc"),$t(m,"SID",u.K),$t(m,"AID",u.T),$t(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&$t(m,"TO",u.ja),$t(m,"TYPE","xmlhttp"),gs(u,m),u.m&&u.o&&Oe(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ls(hn(m)),_.m=null,_.P=!0,Ai(_,u)}r.Za=function(){this.C!=null&&(this.C=null,oa(this),Do(this),re(19))};function ua(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function du(u,m){var _=null;if(u.g==m){ua(u),ps(u),u.g=null;var b=2}else if(vo(u.h,m))_=m.D,We(u.h,m),b=1;else return;if(u.G!=0){if(m.o)if(b==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var P=u.B;b=er(),Kt(b,new be(b,_)),la(u)}else hu(u);else if(P=m.s,P==3||P==0&&0<m.X||!(b==1&&Lh(u,m)||b==2&&Do(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),P){case 1:Ni(u,5);break;case 4:Ni(u,10);break;case 3:Ni(u,6);break;default:Ni(u,2)}}}function No(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ni(u,m){if(u.j.info("Error code "+m),m==2){var _=C(u.fb,u),b=u.Xa;const P=!b;b=new ye(b||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||os(b,"https"),ls(b),P?cs(b.toString(),_):zn(b.toString(),_)}else re(2);u.G=0,u.l&&u.l.sa(m),mu(u),uu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function mu(u){if(u.G=0,u.ka=[],u.l){const m=To(u.h);(m.length!=0||u.i.length!=0)&&(K(u.ka,m),K(u.ka,u.i),u.h.i.length=0,J(u.i),u.i.length=0),u.l.ra()}}function gu(u,m,_){var b=_ instanceof ye?hn(_):new ye(_);if(b.g!="")m&&(b.g=m+"."+b.g),ar(b,b.s);else{var P=g.location;b=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;var H=new ye(null);b&&os(H,b),m&&(H.g=m),P&&ar(H,P),_&&(H.l=_),b=H}return _=u.D,m=u.ya,_&&m&&$t(b,_,m),$t(b,"VER",u.la),gs(u,b),b}function pu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Gt(new or({eb:_})):new Gt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function yu(){}r=yu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ca(){}ca.prototype.g=function(u,m){return new tn(u,m)};function tn(u,m){ue.call(this),this.g=new aa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ut(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ut(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ii(this)}F(tn,ue),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Io(this.g)},tn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Un(u),u=_);m.i.push(new ru(m.Ya++,u)),m.G==3&&la(m)},tn.prototype.N=function(){this.g.l=null,delete this.j,Io(this.g),delete this.g,tn.aa.N.call(this)};function _u(u){Ei.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const _ in m){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}F(_u,Ei);function vu(){go.call(this),this.status=1}F(vu,go);function ii(u){this.g=u}F(ii,yu),ii.prototype.ua=function(){Kt(this.g,"a")},ii.prototype.ta=function(u){Kt(this.g,new _u(u))},ii.prototype.sa=function(u){Kt(this.g,new vu)},ii.prototype.ra=function(){Kt(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,bT=function(){return new ca},ET=function(){return er()},TT=Yn,um={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rr.NO_ERROR=0,rr.TIMEOUT=8,rr.HTTP_ERROR=6,Mc=rr,bi.COMPLETE="complete",vT=bi,mo.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",ue.prototype.listen=ue.prototype.K,Tl=mo,Gt.prototype.listenOnce=Gt.prototype.L,Gt.prototype.getLastError=Gt.prototype.Ka,Gt.prototype.getLastErrorCode=Gt.prototype.Ba,Gt.prototype.getStatus=Gt.prototype.Z,Gt.prototype.getResponseJson=Gt.prototype.Oa,Gt.prototype.getResponseText=Gt.prototype.oa,Gt.prototype.send=Gt.prototype.ea,Gt.prototype.setWithCredentials=Gt.prototype.Ha,_T=Gt}).apply(typeof Ec<"u"?Ec:typeof self<"u"?self:typeof window<"u"?window:{});const pv="@firebase/firestore",yv="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new lh("@firebase/firestore");function za(){return Us.logLevel}function ot(r,...t){if(Us.logLevel<=Nt.DEBUG){const n=t.map(zm);Us.debug(`Firestore (${ro}): ${r}`,...n)}}function Wi(r,...t){if(Us.logLevel<=Nt.ERROR){const n=t.map(zm);Us.error(`Firestore (${ro}): ${r}`,...n)}}function Xa(r,...t){if(Us.logLevel<=Nt.WARN){const n=t.map(zm);Us.warn(`Firestore (${ro}): ${r}`,...n)}}function zm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,AT(r,s,n)}function AT(r,t,n){let s=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Wi(s),new Error(s)}function Qt(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||AT(t,o,s)}function St(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ht extends Kn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class BR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class qR{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HR{constructor(t){this.t=t,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Qt(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let c=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new zr,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},g=p=>{ot("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(ot("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new zr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(ot("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qt(typeof s.accessToken=="string",31837,{l:s}),new ST(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Qt(t===null||typeof t=="string",2055,{h:t}),new Xe(t)}}class FR{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class GR{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new FR(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _v{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QR{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Hn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Qt(this.o===void 0,3512);const s=c=>{c.error!=null&&ot("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,ot("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const o=c=>{ot("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):ot("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _v(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Qt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _v(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=KR(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=t.charAt(o[c]%62))}return s}}function Ot(r,t){return r<t?-1:r>t?1:0}function cm(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const o=r.charAt(s),c=t.charAt(s);if(o!==c)return Hd(o)===Hd(c)?Ot(o,c):Hd(o)?1:-1}return Ot(r.length,t.length)}const YR=55296,XR=57343;function Hd(r){const t=r.charCodeAt(0);return t>=YR&&t<=XR}function $a(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="__name__";class ci{constructor(t,n,s){n===void 0?n=0:n>t.length&&vt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&vt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ci.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ci?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const c=ci.compareSegments(t.get(o),n.get(o));if(c!==0)return c}return Ot(t.length,n.length)}static compareSegments(t,n){const s=ci.isNumericId(t),o=ci.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ci.extractNumericId(t).compare(ci.extractNumericId(n)):cm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Lr.fromString(t.substring(4,t.length-2))}}class oe extends ci{construct(t,n,s){return new oe(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new ht(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const $R=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends ci{construct(t,n,s){return new He(t,n,s)}static isValidIdentifier(t){return $R.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vv}static keyField(){return new He([vv])}static fromServerFormat(t){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new ht(W.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new ht(W.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ht(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(s+=g,o++):(c(),o++)}if(c(),f)throw new ht(W.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.path=t}static fromPath(t){return new pt(oe.fromString(t))}static fromName(t){return new pt(oe.fromString(t).popFirst(5))}static empty(){return new pt(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&oe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return oe.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pt(new oe(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(r,t,n){if(!n)throw new ht(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function JR(r,t,n,s){if(t===!0&&s===!0)throw new ht(W.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Tv(r){if(!pt.isDocumentKey(r))throw new ht(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function wT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Bm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":vt(12329,{type:typeof r})}function jr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ht(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bm(r);throw new ht(W.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r,t){const n={typeString:r};return t&&(n.value=t),n}function Gl(r,t){if(!wT(r))throw new ht(W.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,c="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&f!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new ht(W.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=-62135596800,bv=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(t){return ne.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*bv);return new ne(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ht(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ht(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Ev)throw new ht(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ht(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bv}_compareTo(t){return this.seconds===t.seconds?Ot(this.nanoseconds,t.nanoseconds):Ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Gl(t,ne._jsonSchema))return new ne(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ev;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:Ee("string",ne._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new ne(0,0))}static max(){return new At(new ne(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=-1;function WR(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=At.fromTimestamp(s===1e9?new ne(n+1,0):new ne(n,s));return new Hr(o,pt.empty(),t)}function tI(r){return new Hr(r.readTime,r.key,xl)}class Hr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Hr(At.min(),pt.empty(),xl)}static max(){return new Hr(At.max(),pt.empty(),xl)}}function eI(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=pt.comparator(r.documentKey,t.documentKey),n!==0?n:Ot(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==nI)throw r;ot("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&vt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):$.reject(n)}static resolve(t){return new $((n,s)=>{n(t)})}static reject(t){return new $((n,s)=>{s(t)})}static waitFor(t){return new $((n,s)=>{let o=0,c=0,f=!1;t.forEach(g=>{++o,g.next(()=>{++c,f&&c===o&&n()},p=>s(p))}),f=!0,c===o&&n()})}static or(t){let n=$.resolve(!1);for(const s of t)n=n.next(o=>o?$.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,c)=>{s.push(n.call(this,o,c))}),this.waitFor(s)}static mapArray(t,n){return new $((s,o)=>{const c=t.length,f=new Array(c);let g=0;for(let p=0;p<c;p++){const y=p;n(t[y]).next(E=>{f[y]=E,++g,g===c&&s(f)},E=>o(E))}})}static doWhile(t,n){return new $((s,o)=>{const c=()=>{t()===!0?n().next(()=>{c()},o):s()};c()})}}function rI(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ao(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}dh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=-1;function mh(r){return r==null}function Kc(r){return r===0&&1/r==-1/0}function sI(r){return typeof r=="number"&&Number.isInteger(r)&&!Kc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="";function aI(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Av(t)),t=oI(r.get(n),t);return Av(t)}function oI(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case RT:n+="";break;default:n+=c}}return n}function Av(r){return r+RT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Hs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function IT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,n){this.comparator=t,this.root=n||qe.EMPTY}insert(t,n){return new le(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new le(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bc(this.root,t,this.comparator,!1)}getReverseIterator(){return new bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bc(this.root,t,this.comparator,!0)}}class bc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&o&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,n,s,o,c){this.key=t,this.value=n,this.color=s??qe.RED,this.left=o??qe.EMPTY,this.right=c??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,c){return new qe(t??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const c=s(t,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(t,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return qe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw vt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw vt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw vt(27949);return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw vt(57766)}get value(){throw vt(16141)}get color(){throw vt(16727)}get left(){throw vt(29726)}get right(){throw vt(36894)}copy(t,n,s,o,c){return this}insert(t,n,s){return new qe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.comparator=t,this.data=new le(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new wv(this.data.getIterator())}getIteratorFrom(t){return new wv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof De)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new De(this.comparator);return n.data=t,n}}class wv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this.fields=t,t.sort(He.comparator)}static empty(){return new Gn([])}unionWith(t){let n=new De(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Gn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return $a(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new CT("Invalid base64 string: "+c):c}}(t);return new Fe(n)}static fromUint8Array(t){const n=function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c}(t);return new Fe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const lI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(r){if(Qt(!!r,39018),typeof r=="string"){let t=0;const n=lI.exec(r);if(Qt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:ge(r.seconds),nanos:ge(r.nanos)}}function ge(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Gr(r){return typeof r=="string"?Fe.fromBase64String(r):Fe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="server_timestamp",NT="__type__",OT="__previous_value__",MT="__local_write_time__";function Hm(r){return(r?.mapValue?.fields||{})[NT]?.stringValue===DT}function gh(r){const t=r.mapValue.fields[OT];return Hm(t)?gh(t):t}function Vl(r){const t=Fr(r.mapValue.fields[MT].timestampValue);return new ne(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(t,n,s,o,c,f,g,p,y,E){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E}}const Yc="(default)";class kl{constructor(t,n){this.projectId=t,this.database=n||Yc}static empty(){return new kl("","")}get isDefaultDatabase(){return this.database===Yc}isEqual(t){return t instanceof kl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="__type__",cI="__max__",Ac={mapValue:{}},VT="__vector__",Xc="value";function Qr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Hm(r)?4:fI(r)?9007199254740991:hI(r)?10:11:vt(28295,{value:r})}function _i(r,t){if(r===t)return!0;const n=Qr(r);if(n!==Qr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Vl(r).isEqual(Vl(t));case 3:return function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Fr(o.timestampValue),g=Fr(c.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,c){return Gr(o.bytesValue).isEqual(Gr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,c){return ge(o.geoPointValue.latitude)===ge(c.geoPointValue.latitude)&&ge(o.geoPointValue.longitude)===ge(c.geoPointValue.longitude)}(r,t);case 2:return function(o,c){if("integerValue"in o&&"integerValue"in c)return ge(o.integerValue)===ge(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=ge(o.doubleValue),g=ge(c.doubleValue);return f===g?Kc(f)===Kc(g):isNaN(f)&&isNaN(g)}return!1}(r,t);case 9:return $a(r.arrayValue.values||[],t.arrayValue.values||[],_i);case 10:case 11:return function(o,c){const f=o.mapValue.fields||{},g=c.mapValue.fields||{};if(Sv(f)!==Sv(g))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(g[p]===void 0||!_i(f[p],g[p])))return!1;return!0}(r,t);default:return vt(52216,{left:r})}}function Pl(r,t){return(r.values||[]).find(n=>_i(n,t))!==void 0}function Za(r,t){if(r===t)return 0;const n=Qr(r),s=Qr(t);if(n!==s)return Ot(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ot(r.booleanValue,t.booleanValue);case 2:return function(c,f){const g=ge(c.integerValue||c.doubleValue),p=ge(f.integerValue||f.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return Rv(r.timestampValue,t.timestampValue);case 4:return Rv(Vl(r),Vl(t));case 5:return cm(r.stringValue,t.stringValue);case 6:return function(c,f){const g=Gr(c),p=Gr(f);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const g=c.split("/"),p=f.split("/");for(let y=0;y<g.length&&y<p.length;y++){const E=Ot(g[y],p[y]);if(E!==0)return E}return Ot(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const g=Ot(ge(c.latitude),ge(f.latitude));return g!==0?g:Ot(ge(c.longitude),ge(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Iv(r.arrayValue,t.arrayValue);case 10:return function(c,f){const g=c.fields||{},p=f.fields||{},y=g[Xc]?.arrayValue,E=p[Xc]?.arrayValue,S=Ot(y?.values?.length||0,E?.values?.length||0);return S!==0?S:Iv(y,E)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===Ac.mapValue&&f===Ac.mapValue)return 0;if(c===Ac.mapValue)return 1;if(f===Ac.mapValue)return-1;const g=c.fields||{},p=Object.keys(g),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const C=cm(p[S],E[S]);if(C!==0)return C;const U=Za(g[p[S]],y[E[S]]);if(U!==0)return U}return Ot(p.length,E.length)}(r.mapValue,t.mapValue);default:throw vt(23264,{he:n})}}function Rv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Ot(r,t);const n=Fr(r),s=Fr(t),o=Ot(n.seconds,s.seconds);return o!==0?o:Ot(n.nanos,s.nanos)}function Iv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=Za(n[o],s[o]);if(c)return c}return Ot(n.length,s.length)}function Ja(r){return hm(r)}function hm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Fr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Gr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return pt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=hm(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const f of s)c?c=!1:o+=",",o+=`${f}:${hm(n.fields[f])}`;return o+"}"}(r.mapValue):vt(61005,{value:r})}function xc(r){switch(Qr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=gh(r);return t?16+xc(t):16;case 5:return 2*r.stringValue.length;case 6:return Gr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,c)=>o+xc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Hs(s.fields,(c,f)=>{o+=c.length+xc(f)}),o}(r.mapValue);default:throw vt(13486,{value:r})}}function fm(r){return!!r&&"integerValue"in r}function Fm(r){return!!r&&"arrayValue"in r}function Cv(r){return!!r&&"nullValue"in r}function Dv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Vc(r){return!!r&&"mapValue"in r}function hI(r){return(r?.mapValue?.fields||{})[xT]?.stringValue===VT}function Rl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Hs(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Rl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Rl(r.arrayValue.values[n]);return t}return{...r}}function fI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===cI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t){this.value=t}static empty(){return new Vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Vc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Rl(n)}setAll(t){let n=He.emptyPath(),s={},o=[];t.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=g.popLast()}f?s[g.lastSegment()]=Rl(f):o.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(t){const n=this.field(t.popLast());Vc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return _i(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Vc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Hs(n,(o,c)=>t[o]=c);for(const o of s)delete t[o]}clone(){return new Vn(Rl(this.value))}}function kT(r){const t=[];return Hs(r.fields,(n,s)=>{const o=new He([n]);if(Vc(s)){const c=kT(s.mapValue).fields;if(c.length===0)t.push(o);else for(const f of c)t.push(o.child(f))}else t.push(o)}),new Gn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,s,o,c,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=f,this.documentState=g}static newInvalidDocument(t){return new $e(t,0,At.min(),At.min(),At.min(),Vn.empty(),0)}static newFoundDocument(t,n,s,o){return new $e(t,1,n,At.min(),s,o,0)}static newNoDocument(t,n){return new $e(t,2,n,At.min(),At.min(),Vn.empty(),0)}static newUnknownDocument(t,n){return new $e(t,3,n,At.min(),At.min(),Vn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n){this.position=t,this.inclusive=n}}function Nv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const c=t[o],f=r.position[o];if(c.field.isKeyField()?s=pt.comparator(pt.fromName(f.referenceValue),n.key):s=Za(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ov(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!_i(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,n="asc"){this.field=t,this.dir=n}}function dI(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{}class Ie extends PT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new gI(t,n,s):n==="array-contains"?new _I(t,s):n==="in"?new vI(t,s):n==="not-in"?new TI(t,s):n==="array-contains-any"?new EI(t,s):new Ie(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new pI(t,s):new yI(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Za(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Za(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return vt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vi extends PT{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new vi(t,n)}matches(t){return UT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function UT(r){return r.op==="and"}function LT(r){return mI(r)&&UT(r)}function mI(r){for(const t of r.filters)if(t instanceof vi)return!1;return!0}function dm(r){if(r instanceof Ie)return r.field.canonicalString()+r.op.toString()+Ja(r.value);if(LT(r))return r.filters.map(t=>dm(t)).join(",");{const t=r.filters.map(n=>dm(n)).join(",");return`${r.op}(${t})`}}function zT(r,t){return r instanceof Ie?function(s,o){return o instanceof Ie&&s.op===o.op&&s.field.isEqual(o.field)&&_i(s.value,o.value)}(r,t):r instanceof vi?function(s,o){return o instanceof vi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((c,f,g)=>c&&zT(f,o.filters[g]),!0):!1}(r,t):void vt(19439)}function jT(r){return r instanceof Ie?function(n){return`${n.field.canonicalString()} ${n.op} ${Ja(n.value)}`}(r):r instanceof vi?function(n){return n.op.toString()+" {"+n.getFilters().map(jT).join(" ,")+"}"}(r):"Filter"}class gI extends Ie{constructor(t,n,s){super(t,n,s),this.key=pt.fromName(s.referenceValue)}matches(t){const n=pt.comparator(t.key,this.key);return this.matchesComparison(n)}}class pI extends Ie{constructor(t,n){super(t,"in",n),this.keys=BT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class yI extends Ie{constructor(t,n){super(t,"not-in",n),this.keys=BT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function BT(r,t){return(t.arrayValue?.values||[]).map(n=>pt.fromName(n.referenceValue))}class _I extends Ie{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Fm(n)&&Pl(n.arrayValue,this.value)}}class vI extends Ie{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Pl(this.value.arrayValue,n)}}class TI extends Ie{constructor(t,n){super(t,"not-in",n)}matches(t){if(Pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Pl(this.value.arrayValue,n)}}class EI extends Ie{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Fm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Pl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(t,n=null,s=[],o=[],c=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=f,this.endAt=g,this.Te=null}}function Mv(r,t=null,n=[],s=[],o=null,c=null,f=null){return new bI(r,t,n,s,o,c,f)}function Gm(r){const t=St(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>dm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),mh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ja(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ja(s)).join(",")),t.Te=n}return t.Te}function Qm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!dI(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!zT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ov(r.startAt,t.startAt)&&Ov(r.endAt,t.endAt)}function mm(r){return pt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,n=null,s=[],o=[],c=null,f="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=f,this.startAt=g,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function AI(r,t,n,s,o,c,f,g){return new ph(r,t,n,s,o,c,f,g)}function yh(r){return new ph(r)}function xv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function SI(r){return r.collectionGroup!==null}function Il(r){const t=St(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const c of t.explicitOrderBy)t.Ie.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new De(He.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(g=g.add(y.field))})}),g})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.Ie.push(new Zc(c,s))}),n.has(He.keyField().canonicalString())||t.Ie.push(new Zc(He.keyField(),s))}return t.Ie}function di(r){const t=St(r);return t.Ee||(t.Ee=wI(t,Il(r))),t.Ee}function wI(r,t){if(r.limitType==="F")return Mv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const c=o.dir==="desc"?"asc":"desc";return new Zc(o.field,c)});const n=r.endAt?new $c(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new $c(r.startAt.position,r.startAt.inclusive):null;return Mv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function gm(r,t,n){return new ph(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function _h(r,t){return Qm(di(r),di(t))&&r.limitType===t.limitType}function qT(r){return`${Gm(di(r))}|lt:${r.limitType}`}function ja(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>jT(o)).join(", ")}]`),mh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Ja(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Ja(o)).join(",")),`Target(${s})`}(di(r))}; limitType=${r.limitType})`}function vh(r,t){return t.isFoundDocument()&&function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):pt.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,o){for(const c of Il(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,g,p){const y=Nv(f,g,p);return f.inclusive?y<=0:y<0}(s.startAt,Il(s),o)||s.endAt&&!function(f,g,p){const y=Nv(f,g,p);return f.inclusive?y>=0:y>0}(s.endAt,Il(s),o))}(r,t)}function RI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function HT(r){return(t,n)=>{let s=!1;for(const o of Il(r)){const c=II(o,t,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function II(r,t,n){const s=r.field.isKeyField()?pt.comparator(t.key,n.key):function(c,f,g){const p=f.data.field(c),y=g.data.field(c);return p!==null&&y!==null?Za(p,y):vt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return vt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],t))return void(o[c]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Hs(this.inner,(n,s)=>{for(const[o,c]of s)t(o,c)})}isEmpty(){return IT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=new le(pt.comparator);function tr(){return CI}const FT=new le(pt.comparator);function El(...r){let t=FT;for(const n of r)t=t.insert(n.key,n);return t}function GT(r){let t=FT;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function xs(){return Cl()}function QT(){return Cl()}function Cl(){return new Fs(r=>r.toString(),(r,t)=>r.isEqual(t))}const DI=new le(pt.comparator),NI=new De(pt.comparator);function Mt(...r){let t=NI;for(const n of r)t=t.add(n);return t}const OI=new De(Ot);function MI(){return OI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kc(t)?"-0":t}}function KT(r){return{integerValue:""+r}}function xI(r,t){return sI(t)?KT(t):Km(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this._=void 0}}function VI(r,t,n){return r instanceof Jc?function(o,c){const f={fields:{[NT]:{stringValue:DT},[MT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&Hm(c)&&(c=gh(c)),c&&(f.fields[OT]=c),{mapValue:f}}(n,t):r instanceof Ul?XT(r,t):r instanceof Ll?$T(r,t):function(o,c){const f=YT(o,c),g=Vv(f)+Vv(o.Ae);return fm(f)&&fm(o.Ae)?KT(g):Km(o.serializer,g)}(r,t)}function kI(r,t,n){return r instanceof Ul?XT(r,t):r instanceof Ll?$T(r,t):n}function YT(r,t){return r instanceof Wc?function(s){return fm(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Jc extends Th{}class Ul extends Th{constructor(t){super(),this.elements=t}}function XT(r,t){const n=ZT(t);for(const s of r.elements)n.some(o=>_i(o,s))||n.push(s);return{arrayValue:{values:n}}}class Ll extends Th{constructor(t){super(),this.elements=t}}function $T(r,t){let n=ZT(t);for(const s of r.elements)n=n.filter(o=>!_i(o,s));return{arrayValue:{values:n}}}class Wc extends Th{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Vv(r){return ge(r.integerValue||r.doubleValue)}function ZT(r){return Fm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function PI(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Ul&&o instanceof Ul||s instanceof Ll&&o instanceof Ll?$a(s.elements,o.elements,_i):s instanceof Wc&&o instanceof Wc?_i(s.Ae,o.Ae):s instanceof Jc&&o instanceof Jc}(r.transform,t.transform)}class UI{constructor(t,n){this.version=t,this.transformResults=n}}class Yi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Yi}static exists(t){return new Yi(void 0,t)}static updateTime(t){return new Yi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Eh{}function JT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new tE(r.key,Yi.none()):new Ql(r.key,r.data,Yi.none());{const n=r.data,s=Vn.empty();let o=new De(He.comparator);for(let c of t.fields)if(!o.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),o=o.add(c)}return new Gs(r.key,s,new Gn(o.toArray()),Yi.none())}}function LI(r,t,n){r instanceof Ql?function(o,c,f){const g=o.value.clone(),p=Pv(o.fieldTransforms,c,f.transformResults);g.setAll(p),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):r instanceof Gs?function(o,c,f){if(!kc(o.precondition,c))return void c.convertToUnknownDocument(f.version);const g=Pv(o.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(WT(o)),p.setAll(g),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Dl(r,t,n,s){return r instanceof Ql?function(c,f,g,p){if(!kc(c.precondition,f))return g;const y=c.value.clone(),E=Uv(c.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Gs?function(c,f,g,p){if(!kc(c.precondition,f))return g;const y=Uv(c.fieldTransforms,p,f),E=f.data;return E.setAll(WT(c)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(S=>S.field))}(r,t,n,s):function(c,f,g){return kc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(r,t,n)}function zI(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),c=YT(s.transform,o||null);c!=null&&(n===null&&(n=Vn.empty()),n.set(s.field,c))}return n||null}function kv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&$a(s,o,(c,f)=>PI(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Ql extends Eh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Gs extends Eh{constructor(t,n,s,o,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function WT(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Pv(r,t,n){const s=new Map;Qt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const c=r[o],f=c.transform,g=t.data.field(c.field);s.set(c.field,kI(f,g,n[o]))}return s}function Uv(r,t,n){const s=new Map;for(const o of r){const c=o.transform,f=n.data.field(o.field);s.set(o.field,VI(c,f,t))}return s}class tE extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jI extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(t.key)&&LI(c,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Dl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Dl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=QT();return this.mutations.forEach(o=>{const c=t.get(o.key),f=c.overlayedDocument;let g=this.applyToLocalView(f,c.mutatedFields);g=n.has(o.key)?null:g;const p=JT(f,g);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Mt())}isEqual(t){return this.batchId===t.batchId&&$a(this.mutations,t.mutations,(n,s)=>kv(n,s))&&$a(this.baseMutations,t.baseMutations,(n,s)=>kv(n,s))}}class Ym{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Qt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let o=function(){return DI}();const c=t.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,s[f].version);return new Ym(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,jt;function FI(r){switch(r){case W.OK:return vt(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return vt(15467,{code:r})}}function eE(r){if(r===void 0)return Wi("GRPC error has no .code"),W.UNKNOWN;switch(r){case Te.OK:return W.OK;case Te.CANCELLED:return W.CANCELLED;case Te.UNKNOWN:return W.UNKNOWN;case Te.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Te.INTERNAL:return W.INTERNAL;case Te.UNAVAILABLE:return W.UNAVAILABLE;case Te.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Te.NOT_FOUND:return W.NOT_FOUND;case Te.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Te.ABORTED:return W.ABORTED;case Te.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Te.DATA_LOSS:return W.DATA_LOSS;default:return vt(39323,{code:r})}}(jt=Te||(Te={}))[jt.OK=0]="OK",jt[jt.CANCELLED=1]="CANCELLED",jt[jt.UNKNOWN=2]="UNKNOWN",jt[jt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jt[jt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jt[jt.NOT_FOUND=5]="NOT_FOUND",jt[jt.ALREADY_EXISTS=6]="ALREADY_EXISTS",jt[jt.PERMISSION_DENIED=7]="PERMISSION_DENIED",jt[jt.UNAUTHENTICATED=16]="UNAUTHENTICATED",jt[jt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jt[jt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jt[jt.ABORTED=10]="ABORTED",jt[jt.OUT_OF_RANGE=11]="OUT_OF_RANGE",jt[jt.UNIMPLEMENTED=12]="UNIMPLEMENTED",jt[jt.INTERNAL=13]="INTERNAL",jt[jt.UNAVAILABLE=14]="UNAVAILABLE",jt[jt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new Lr([4294967295,4294967295],0);function Lv(r){const t=GI().encode(r),n=new yT;return n.update(t),new Uint8Array(n.digest())}function zv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Lr([n,s],0),new Lr([o,c],0)]}class Xm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new bl(`Invalid padding: ${n}`);if(s<0)throw new bl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new bl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new bl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Lr.fromNumber(this.ge)}ye(t,n,s){let o=t.add(n.multiply(Lr.fromNumber(s)));return o.compare(QI)===1&&(o=new Lr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Lv(t),[s,o]=zv(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,o,c);if(!this.we(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new Xm(c,o,n);return s.forEach(g=>f.insert(g)),f}insert(t){if(this.ge===0)return;const n=Lv(t),[s,o]=zv(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,o,c);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class bl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,n,s,o,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Kl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new bh(At.min(),o,new le(Ot),tr(),Mt())}}class Kl{constructor(t,n,s,o,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Kl(s,n,Mt(),Mt(),Mt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,n,s,o){this.be=t,this.removedTargetIds=n,this.key=s,this.De=o}}class nE{constructor(t,n){this.targetId=t,this.Ce=n}}class iE{constructor(t,n,s=Fe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class jv{constructor(){this.ve=0,this.Fe=Bv(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Mt(),n=Mt(),s=Mt();return this.Fe.forEach((o,c)=>{switch(c){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:vt(38017,{changeType:c})}}),new Kl(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=Bv()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Qt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class KI{constructor(t){this.Ge=t,this.ze=new Map,this.je=tr(),this.Je=Sc(),this.He=Sc(),this.Ye=new le(Ot)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:vt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((s,o)=>{this.rt(o)&&n(o)})}st(t){const n=t.targetId,s=t.Ce.count,o=this.ot(n);if(o){const c=o.target;if(mm(c))if(s===0){const f=new pt(c.path);this.et(n,f,$e.newNoDocument(f,At.min()))}else Qt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const g=this.ut(t),p=g?this.ct(g,t,f):1;if(p!==0){this.it(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let f,g;try{f=Gr(s).toUint8Array()}catch(p){if(p instanceof CT)return Xa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new Xm(f,o,c)}catch(p){return Xa(p instanceof bl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.ge===0?null:g}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach(c=>{const f=this.Ge.ht(),g=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.et(n,c,null),o++)}),o}Tt(t){const n=new Map;this.ze.forEach((c,f)=>{const g=this.ot(f);if(g){if(c.current&&mm(g.target)){const p=new pt(g.target.path);this.It(p).has(f)||this.Et(f,p)||this.et(f,p,$e.newNoDocument(p,t))}c.Be&&(n.set(f,c.ke()),c.qe())}});let s=Mt();this.He.forEach((c,f)=>{let g=!0;f.forEachWhile(p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(s=s.add(c))}),this.je.forEach((c,f)=>f.setReadTime(t));const o=new bh(t,n,this.Ye,this.je,s);return this.je=tr(),this.Je=Sc(),this.He=Sc(),this.Ye=new le(Ot),o}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new jv,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new De(Ot),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new De(Ot),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||ot("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new jv),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Sc(){return new le(pt.comparator)}function Bv(){return new le(pt.comparator)}const YI={asc:"ASCENDING",desc:"DESCENDING"},XI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$I={and:"AND",or:"OR"};class ZI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function pm(r,t){return r.useProto3Json||mh(t)?t:{value:t}}function th(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rE(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function JI(r,t){return th(r,t.toTimestamp())}function mi(r){return Qt(!!r,49232),At.fromTimestamp(function(n){const s=Fr(n);return new ne(s.seconds,s.nanos)}(r))}function $m(r,t){return ym(r,t).canonicalString()}function ym(r,t){const n=function(o){return new oe(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function sE(r){const t=oe.fromString(r);return Qt(cE(t),10190,{key:t.toString()}),t}function _m(r,t){return $m(r.databaseId,t.path)}function Fd(r,t){const n=sE(t);if(n.get(1)!==r.databaseId.projectId)throw new ht(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ht(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new pt(oE(n))}function aE(r,t){return $m(r.databaseId,t)}function WI(r){const t=sE(r);return t.length===4?oe.emptyPath():oE(t)}function vm(r){return new oe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function oE(r){return Qt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function qv(r,t,n){return{name:_m(r,t),fields:n.value.mapValue.fields}}function t2(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:vt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],c=function(y,E){return y.useProto3Json?(Qt(E===void 0||typeof E=="string",58123),Fe.fromBase64String(E||"")):(Qt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Fe.fromUint8Array(E||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&function(y){const E=y.code===void 0?W.UNKNOWN:eE(y.code);return new ht(E,y.message||"")}(f);n=new iE(s,o,c,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Fd(r,s.document.name),c=mi(s.document.updateTime),f=s.document.createTime?mi(s.document.createTime):At.min(),g=new Vn({mapValue:{fields:s.document.fields}}),p=$e.newFoundDocument(o,c,f,g),y=s.targetIds||[],E=s.removedTargetIds||[];n=new Pc(y,E,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Fd(r,s.document),c=s.readTime?mi(s.readTime):At.min(),f=$e.newNoDocument(o,c),g=s.removedTargetIds||[];n=new Pc([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Fd(r,s.document),c=s.removedTargetIds||[];n=new Pc([],c,o,null)}else{if(!("filter"in t))return vt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,f=new HI(o,c),g=s.targetId;n=new nE(g,f)}}return n}function e2(r,t){let n;if(t instanceof Ql)n={update:qv(r,t.key,t.value)};else if(t instanceof tE)n={delete:_m(r,t.key)};else if(t instanceof Gs)n={update:qv(r,t.key,t.data),updateMask:c2(t.fieldMask)};else{if(!(t instanceof jI))return vt(16599,{Vt:t.type});n={verify:_m(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const g=f.transform;if(g instanceof Jc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Ul)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Ll)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Wc)return{fieldPath:f.field.canonicalString(),increment:g.Ae};throw vt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,c){return c.updateTime!==void 0?{updateTime:JI(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:vt(27497)}(r,t.precondition)),n}function n2(r,t){return r&&r.length>0?(Qt(t!==void 0,14353),r.map(n=>function(o,c){let f=o.updateTime?mi(o.updateTime):mi(c);return f.isEqual(At.min())&&(f=mi(c)),new UI(f,o.transformResults||[])}(n,t))):[]}function i2(r,t){return{documents:[aE(r,t.path)]}}function r2(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=aE(r,o);const c=function(y){if(y.length!==0)return uE(vi.create(y,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(E=>function(C){return{field:Ba(C.field),direction:o2(C.dir)}}(E))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=pm(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ft:n,parent:o}}function s2(r){let t=WI(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Qt(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let c=[];n.where&&(c=function(S){const C=lE(S);return C instanceof vi&&LT(C)?C.getFilters():[C]}(n.where));let f=[];n.orderBy&&(f=function(S){return S.map(C=>function(F){return new Zc(qa(F.field),function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(C))}(n.orderBy));let g=null;n.limit&&(g=function(S){let C;return C=typeof S=="object"?S.value:S,mh(C)?null:C}(n.limit));let p=null;n.startAt&&(p=function(S){const C=!!S.before,U=S.values||[];return new $c(U,C)}(n.startAt));let y=null;return n.endAt&&(y=function(S){const C=!S.before,U=S.values||[];return new $c(U,C)}(n.endAt)),AI(t,o,f,c,g,"F",p,y)}function a2(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return vt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function lE(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=qa(n.unaryFilter.field);return Ie.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=qa(n.unaryFilter.field);return Ie.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=qa(n.unaryFilter.field);return Ie.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=qa(n.unaryFilter.field);return Ie.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return vt(61313);default:return vt(60726)}}(r):r.fieldFilter!==void 0?function(n){return Ie.create(qa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return vt(58110);default:return vt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return vi.create(n.compositeFilter.filters.map(s=>lE(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return vt(1026)}}(n.compositeFilter.op))}(r):vt(30097,{filter:r})}function o2(r){return YI[r]}function l2(r){return XI[r]}function u2(r){return $I[r]}function Ba(r){return{fieldPath:r.canonicalString()}}function qa(r){return He.fromServerFormat(r.fieldPath)}function uE(r){return r instanceof Ie?function(n){if(n.op==="=="){if(Dv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ba(n.field),op:l2(n.op),value:n.value}}}(r):r instanceof vi?function(n){const s=n.getFilters().map(o=>uE(o));return s.length===1?s[0]:{compositeFilter:{op:u2(n.op),filters:s}}}(r):vt(54877,{filter:r})}function c2(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function cE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,n,s,o,c=At.min(),f=At.min(),g=Fe.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new Vr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(t){this.yt=t}}function f2(r){const t=s2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?gm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(){this.Cn=new m2}addToCollectionParentIndex(t,n){return this.Cn.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(Hr.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(Hr.min())}updateCollectionGroup(t,n,s){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class m2{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new De(oe.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new De(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hE=41943040;class ln{static withCacheSize(t){return new ln(t,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(hE,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Wa(0)}static cr(){return new Wa(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="LruGarbageCollector",g2=1048576;function Gv([r,t],[n,s]){const o=Ot(r,n);return o===0?Ot(t,s):o}class p2{constructor(t){this.Ir=t,this.buffer=new De(Gv),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Gv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class y2{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){ot(Fv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ao(n)?ot(Fv,"Ignoring IndexedDB error during garbage collection: ",n):await so(n)}await this.Vr(3e5)})}}class _2{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return $.resolve(dh.ce);const s=new p2(n);return this.mr.forEachTarget(t,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(t,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(ot("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Hv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(ot("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hv):this.yr(t,n))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,o,c,f,g,p,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ot("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(t,o))).next(S=>(s=S,g=Date.now(),this.removeTargets(t,s,n))).next(S=>(c=S,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(S=>(y=Date.now(),za()<=Nt.DEBUG&&ot("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${c} targets in `+(p-g)+`ms
	Removed ${S} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:S})))}}function v2(r,t){return new _2(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(){this.changes=new Fs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$e.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Dl(s.mutation,o,Gn.empty(),ne.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Mt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Mt()){const o=xs();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(c=>{let f=El();return c.forEach((g,p)=>{f=f.insert(g,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=xs();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Mt()))}populateOverlays(t,n,s){const o=[];return s.forEach(c=>{n.has(c)||o.push(c)}),this.documentOverlayCache.getOverlays(t,o).next(c=>{c.forEach((f,g)=>{n.set(f,g)})})}computeViews(t,n,s,o){let c=tr();const f=Cl(),g=function(){return Cl()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Gs)?c=c.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Dl(E.mutation,y,E.mutation.getFieldMask(),ne.now())):f.set(y.key,Gn.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>g.set(y,new E2(E,f.get(y)??null))),g))}recalculateAndSaveOverlays(t,n){const s=Cl();let o=new le((f,g)=>f-g),c=Mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const g of f)g.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||Gn.empty();E=g.applyToLocalView(y,E),s.set(p,E);const S=(o.get(g.batchId)||Mt()).add(p);o=o.insert(g.batchId,S)})}).next(()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),y=p.key,E=p.value,S=QT();E.forEach(C=>{if(!c.has(C)){const U=JT(n.get(C),s.get(C));U!==null&&S.set(C,U),c=c.add(C)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,S))}return $.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return pt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):SI(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-c.size):$.resolve(xs());let g=xl,p=c;return f.next(y=>$.forEach(y,(E,S)=>(g<S.largestBatchId&&(g=S.largestBatchId),c.get(E)?$.resolve():this.remoteDocumentCache.getEntry(t,E).next(C=>{p=p.insert(E,C)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,p,y,Mt())).next(E=>({batchId:g,changes:GT(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pt(n)).next(s=>{let o=El();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const c=n.collectionGroup;let f=El();return this.indexManager.getCollectionParents(t,c).next(g=>$.forEach(g,p=>{const y=function(S,C){return new ph(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(E=>{E.forEach((S,C)=>{f=f.insert(S,C)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,o))).next(f=>{c.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,$e.newInvalidDocument(E)))});let g=El();return f.forEach((p,y)=>{const E=c.get(p);E!==void 0&&Dl(E.mutation,y,Gn.empty(),ne.now()),vh(n,y)&&(g=g.insert(p,y))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:mi(o.createTime)}}(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,function(o){return{name:o.name,query:f2(o.bundledQuery),readTime:mi(o.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(){this.overlays=new le(pt.comparator),this.qr=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const s=xs();return $.forEach(n,o=>this.getOverlay(t,o).next(c=>{c!==null&&s.set(o,c)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,c)=>{this.St(t,n,c)}),$.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(c=>this.overlays=this.overlays.remove(c)),this.qr.delete(s)),$.resolve()}getOverlaysForCollection(t,n,s){const o=xs(),c=n.length+1,f=new pt(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const p=g.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&o.set(p.getKey(),p)}return $.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let c=new le((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=c.get(y.largestBatchId);E===null&&(E=xs(),c=c.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const g=xs(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>g.set(y,E)),!(g.size()>=o)););return $.resolve(g)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new qI(n,s));let c=this.qr.get(n);c===void 0&&(c=Mt(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.Qr=new De(Pe.$r),this.Ur=new De(Pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new Pe(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Gr(new Pe(t,n))}zr(t,n){t.forEach(s=>this.removeReference(s,n))}jr(t){const n=new pt(new oe([])),s=new Pe(n,t),o=new Pe(n,t+1),c=[];return this.Ur.forEachInRange([s,o],f=>{this.Gr(f),c.push(f.key)}),c}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new pt(new oe([])),s=new Pe(n,t),o=new Pe(n,t+1);let c=Mt();return this.Ur.forEachInRange([s,o],f=>{c=c.add(f.key)}),c}containsKey(t){const n=new Pe(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Pe{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return pt.comparator(t.key,n.key)||Ot(t.Yr,n.Yr)}static Kr(t,n){return Ot(t.Yr,n.Yr)||pt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new De(Pe.$r)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new BI(c,n,s,o);this.mutationQueue.push(f);for(const g of o)this.Zr=this.Zr.add(new Pe(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return $.resolve(f)}lookupMutationBatch(t,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ei(s),c=o<0?0:o;return $.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?qm:this.tr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Pe(n,0),o=new Pe(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,o],f=>{const g=this.Xr(f.Yr);c.push(g)}),$.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new De(Ot);return n.forEach(o=>{const c=new Pe(o,0),f=new Pe(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,f],g=>{s=s.add(g.Yr)})}),$.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let c=s;pt.isDocumentKey(c)||(c=c.child(""));const f=new Pe(new pt(c),0);let g=new De(Ot);return this.Zr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(g=g.add(p.Yr)),!0)},f),$.resolve(this.ti(g))}ti(t){const n=[];return t.forEach(s=>{const o=this.Xr(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Qt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return $.forEach(n.mutations,o=>{const c=new Pe(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Zr=s})}ir(t){}containsKey(t,n){const s=new Pe(n,0),o=this.Zr.firstAfterOrEqual(s);return $.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(t){this.ri=t,this.docs=function(){return new le(pt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(t,n){let s=tr();return n.forEach(o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():$e.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let c=tr();const f=n.path,g=new pt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||eI(tI(E),s)<=0||(o.has(E.key)||vh(n,E))&&(c=c.insert(E.key,E.mutableCopy()))}return $.resolve(c)}getAllFromCollectionGroup(t,n,s,o){vt(9500)}ii(t,n){return $.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new C2(this)}getSize(t){return $.resolve(this.size)}}class C2 extends T2{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(s)}),$.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(t){this.persistence=t,this.si=new Fs(n=>Gm(n),Qm),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.oi=0,this._i=new Zm,this.targetCount=0,this.ai=Wa.ur()}forEachTarget(t,n){return this.si.forEach((s,o)=>n(o)),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),$.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new Wa(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.Pr(n),$.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,s){let o=0;const c=[];return this.si.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.si.delete(f),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)}),$.waitFor(c).next(()=>o)}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return $.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),$.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach(f=>{c.push(o.markPotentiallyOrphaned(t,f))}),$.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return $.resolve(s)}containsKey(t,n){return $.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(t,n){this.ui={},this.overlays={},this.ci=new dh(0),this.li=!1,this.li=!0,this.hi=new w2,this.referenceDelegate=t(this),this.Pi=new D2(this),this.indexManager=new d2,this.remoteDocumentCache=function(o){return new I2(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new h2(n),this.Ii=new A2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new S2,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new R2(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){ot("MemoryPersistence","Starting transaction:",t);const o=new N2(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(c=>this.referenceDelegate.di(o).next(()=>c)).toPromise().then(c=>(o.raiseOnCommittedEvent(),c))}Ai(t,n){return $.or(Object.values(this.ui).map(s=>()=>s.containsKey(t,n)))}}class N2 extends iI{constructor(t){super(),this.currentSequenceNumber=t}}class Jm{constructor(t){this.persistence=t,this.Ri=new Zm,this.Vi=null}static mi(t){return new Jm(t)}get fi(){if(this.Vi)return this.Vi;throw vt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),$.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(c=>this.fi.add(c.toString()))}).next(()=>s.removeTargetData(t,n))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,s=>{const o=pt.fromPath(s);return this.gi(t,o).next(c=>{c||n.removeEntry(o,At.min())})}).next(()=>(this.Vi=null,n.apply(t)))}updateLimboDocument(t,n){return this.gi(t,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(t){return 0}gi(t,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class eh{constructor(t,n){this.persistence=t,this.pi=new Fs(s=>aI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=v2(this,n)}static mi(t,n){return new eh(t,n)}Ei(){}di(t){return $.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}wr(t){let n=0;return this.pr(t,s=>{n++}).next(()=>n)}pr(t,n){return $.forEach(this.pi,(s,o)=>this.br(t,s,o).next(c=>c?$.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.ii(t,f=>this.br(t,f,n).next(g=>{g||(s++,c.removeEntry(f,At.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),$.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),$.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),$.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),$.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=xc(t.data.value)),n}br(t,n,s){return $.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.pi.get(n);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=o}static As(t,n){let s=Mt(),o=Mt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Wm(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return TS()?8:rI(Ze())>0?6:4}()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,o){const c={result:null};return this.ys(t,n).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ws(t,n,o,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new O2;return this.Ss(t,n,f).next(g=>{if(c.result=g,this.Vs)return this.bs(t,n,f,g.size)})}).next(()=>c.result)}bs(t,n,s,o){return s.documentReadCount<this.fs?(za()<=Nt.DEBUG&&ot("QueryEngine","SDK will not create cache indexes for query:",ja(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(za()<=Nt.DEBUG&&ot("QueryEngine","Query:",ja(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(za()<=Nt.DEBUG&&ot("QueryEngine","The SDK decides to create cache indexes for query:",ja(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,di(n))):$.resolve())}ys(t,n){if(xv(n))return $.resolve(null);let s=di(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=gm(n,null,"F"),s=di(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Mt(...c);return this.ps.getDocuments(t,f).next(g=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.Ds(n,g);return this.Cs(n,y,f,p.readTime)?this.ys(t,gm(n,null,"F")):this.vs(t,y,n,p)}))})))}ws(t,n,s,o){return xv(n)||o.isEqual(At.min())?$.resolve(null):this.ps.getDocuments(t,s).next(c=>{const f=this.Ds(n,c);return this.Cs(n,f,s,o)?$.resolve(null):(za()<=Nt.DEBUG&&ot("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ja(n)),this.vs(t,f,n,WR(o,xl)).next(g=>g))})}Ds(t,n){let s=new De(HT(t));return n.forEach((o,c)=>{vh(t,c)&&(s=s.add(c))}),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(t,n,s){return za()<=Nt.DEBUG&&ot("QueryEngine","Using full collection scan to execute query:",ja(n)),this.ps.getDocumentsMatchingQuery(t,n,Hr.min(),s)}vs(t,n,s,o){return this.ps.getDocumentsMatchingQuery(t,s,o).next(c=>(n.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="LocalStore",x2=3e8;class V2{constructor(t,n,s,o){this.persistence=t,this.Fs=n,this.serializer=o,this.Ms=new le(Ot),this.xs=new Fs(c=>Gm(c),Qm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new b2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ms))}}function k2(r,t,n,s){return new V2(r,t,n,s)}async function dE(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(c=>(o=c,n.Bs(t),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],g=[];let p=Mt();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of c){g.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Ls:y,removedBatchIds:f,addedBatchIds:g}))})})}function P2(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return function(g,p,y,E){const S=y.batch,C=S.keys();let U=$.resolve();return C.forEach(F=>{U=U.next(()=>E.getEntry(p,F)).next(J=>{const K=y.docVersions.get(F);Qt(K!==null,48541),J.version.compareTo(K)<0&&(S.applyToRemoteDocument(J,y),J.isValidDocument()&&(J.setReadTime(y.commitVersion),E.addEntry(J)))})}),U.next(()=>g.mutationQueue.removeMutationBatch(p,S))}(n,s,t,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let p=Mt();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(p=p.add(g.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function mE(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Pi.getLastRemoteSnapshotVersion(n))}function U2(r,t){const n=St(r),s=t.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const g=[];t.targetChanges.forEach((E,S)=>{const C=o.get(S);if(!C)return;g.push(n.Pi.removeMatchingKeys(c,E.removedDocuments,S).next(()=>n.Pi.addMatchingKeys(c,E.addedDocuments,S)));let U=C.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(S)!==null?U=U.withResumeToken(Fe.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):E.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(E.resumeToken,s)),o=o.insert(S,U),function(J,K,st){return J.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=x2?!0:st.addedDocuments.size+st.modifiedDocuments.size+st.removedDocuments.size>0}(C,U,E)&&g.push(n.Pi.updateTargetData(c,U))});let p=tr(),y=Mt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(c,E))}),g.push(L2(c,f,t.documentUpdates).next(E=>{p=E.ks,y=E.qs})),!s.isEqual(At.min())){const E=n.Pi.getLastRemoteSnapshotVersion(c).next(S=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s));g.push(E)}return $.waitFor(g).next(()=>f.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,p,y)).next(()=>p)}).then(c=>(n.Ms=o,c))}function L2(r,t,n){let s=Mt(),o=Mt();return n.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=tr();return n.forEach((g,p)=>{const y=c.get(g);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(g)),p.isNoDocument()&&p.version.isEqual(At.min())?(t.removeEntry(g,p.readTime),f=f.insert(g,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(g,p)):ot(tg,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",p.version)}),{ks:f,qs:o}})}function z2(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=qm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function j2(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Pi.getTargetData(s,t).next(c=>c?(o=c,$.resolve(o)):n.Pi.allocateTargetId(s).next(f=>(o=new Vr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s})}async function Tm(r,t,n){const s=St(r),o=s.Ms.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!ao(f))throw f;ot(tg,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ms=s.Ms.remove(t),s.xs.delete(o.target)}function Qv(r,t,n){const s=St(r);let o=At.min(),c=Mt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const S=St(p),C=S.xs.get(E);return C!==void 0?$.resolve(S.Ms.get(C)):S.Pi.getTargetData(y,E)}(s,f,di(t)).next(g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,g.targetId).next(p=>{c=p})}).next(()=>s.Fs.getDocumentsMatchingQuery(f,t,n?o:At.min(),n?c:Mt())).next(g=>(B2(s,RI(t),g),{documents:g,Qs:c})))}function B2(r,t,n){let s=r.Os.get(t)||At.min();n.forEach((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Os.set(t,s)}class Kv{constructor(){this.activeTargetIds=MI()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class q2{constructor(){this.Mo=new Kv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Kv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="ConnectivityMonitor";class Xv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ot(Yv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){ot(Yv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc=null;function Em(){return wc===null?wc=function(){return 268435456+Math.round(2147483648*Math.random())}():wc++,"0x"+wc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="RestConnection",F2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class G2{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Yc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(t,n,s,o,c){const f=Em(),g=this.zo(t,n.toUriEncodedString());ot(Gd,`Sending RPC '${t}' ${f}:`,g,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,c);const{host:y}=new URL(g),E=eo(y);return this.Jo(t,g,p,s,E).then(S=>(ot(Gd,`Received RPC '${t}' ${f}: `,S),S),S=>{throw Xa(Gd,`RPC '${t}' ${f} failed with error: `,S,"url: ",g,"request:",s),S})}Ho(t,n,s,o,c,f){return this.Go(t,n,s,o,c)}jo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,c)=>t[c]=o),s&&s.headers.forEach((o,c)=>t[c]=o)}zo(t,n){const s=F2[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class K2 extends G2{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,c){const f=Em();return new Promise((g,p)=>{const y=new _T;y.setWithCredentials(!0),y.listenOnce(vT.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Mc.NO_ERROR:const S=y.getResponseJson();ot(Ye,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(S)),g(S);break;case Mc.TIMEOUT:ot(Ye,`RPC '${t}' ${f} timed out`),p(new ht(W.DEADLINE_EXCEEDED,"Request time out"));break;case Mc.HTTP_ERROR:const C=y.getStatus();if(ot(Ye,`RPC '${t}' ${f} failed with status:`,C,"response text:",y.getResponseText()),C>0){let U=y.getResponseJson();Array.isArray(U)&&(U=U[0]);const F=U?.error;if(F&&F.status&&F.message){const J=function(st){const ut=st.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ut)>=0?ut:W.UNKNOWN}(F.status);p(new ht(J,F.message))}else p(new ht(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ht(W.UNAVAILABLE,"Connection failed."));break;default:vt(9055,{l_:t,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ot(Ye,`RPC '${t}' ${f} completed.`)}});const E=JSON.stringify(o);ot(Ye,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)})}T_(t,n,s){const o=Em(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=bT(),g=ET(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=c.join("");ot(Ye,`Creating RPC '${t}' stream ${o}: ${E}`,p);const S=f.createWebChannel(E,p);this.I_(S);let C=!1,U=!1;const F=new Q2({Yo:K=>{U?ot(Ye,`Not sending because RPC '${t}' stream ${o} is closed:`,K):(C||(ot(Ye,`Opening RPC '${t}' stream ${o} transport.`),S.open(),C=!0),ot(Ye,`RPC '${t}' stream ${o} sending:`,K),S.send(K))},Zo:()=>S.close()}),J=(K,st,ut)=>{K.listen(st,ct=>{try{ut(ct)}catch(Bt){setTimeout(()=>{throw Bt},0)}})};return J(S,Tl.EventType.OPEN,()=>{U||(ot(Ye,`RPC '${t}' stream ${o} transport opened.`),F.o_())}),J(S,Tl.EventType.CLOSE,()=>{U||(U=!0,ot(Ye,`RPC '${t}' stream ${o} transport closed`),F.a_(),this.E_(S))}),J(S,Tl.EventType.ERROR,K=>{U||(U=!0,Xa(Ye,`RPC '${t}' stream ${o} transport errored. Name:`,K.name,"Message:",K.message),F.a_(new ht(W.UNAVAILABLE,"The operation could not be completed")))}),J(S,Tl.EventType.MESSAGE,K=>{if(!U){const st=K.data[0];Qt(!!st,16349);const ut=st,ct=ut?.error||ut[0]?.error;if(ct){ot(Ye,`RPC '${t}' stream ${o} received error:`,ct);const Bt=ct.status;let Tt=function(A){const I=Te[A];if(I!==void 0)return eE(I)}(Bt),xt=ct.message;Tt===void 0&&(Tt=W.INTERNAL,xt="Unknown error status: "+Bt+" with message "+ct.message),U=!0,F.a_(new ht(Tt,xt)),S.close()}else ot(Ye,`RPC '${t}' stream ${o} received:`,st),F.u_(st)}}),J(g,TT.STAT_EVENT,K=>{K.stat===um.PROXY?ot(Ye,`RPC '${t}' stream ${o} detected buffering proxy`):K.stat===um.NOPROXY&&ot(Ye,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.__()},0),F}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(n=>n===t)}}function Qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(r){return new ZI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t,n,s=1e3,o=1.5,c=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&ot("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="PersistentStream";class pE{constructor(t,n,s,o,c,f,g,p){this.Mi=t,this.S_=s,this.b_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new gE(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===n&&this.G_(s,o)},s=>{t(()=>{const o=new ht(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return ot($v,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget(()=>this.D_===t?n():(ot($v,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y2 extends pE{constructor(t,n,s,o,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=t2(this.serializer,t),s=function(c){if(!("targetChange"in c))return At.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?mi(f.readTime):At.min()}(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=vm(this.serializer),n.addTarget=function(c,f){let g;const p=f.target;if(g=mm(p)?{documents:i2(c,p)}:{query:r2(c,p).ft},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=rE(c,f.resumeToken);const y=pm(c,f.expectedCount);y!==null&&(g.expectedCount=y)}else if(f.snapshotVersion.compareTo(At.min())>0){g.readTime=th(c,f.snapshotVersion.toTimestamp());const y=pm(c,f.expectedCount);y!==null&&(g.expectedCount=y)}return g}(this.serializer,t);const s=a2(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=vm(this.serializer),n.removeTarget=t,this.q_(n)}}class X2 extends pE{constructor(t,n,s,o,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Qt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Qt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Qt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=n2(t.writeResults,t.commitTime),s=mi(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=vm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>e2(this.serializer,s))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{}class Z2 extends $2{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ht(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.Go(t,ym(n,s),o,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ht(W.UNKNOWN,c.toString())})}Ho(t,n,s,o,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Ho(t,ym(n,s),o,f,g,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ht(W.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class J2{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Wi(n),this.aa=!1):ot("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="RemoteStore";class W2{constructor(t,n,s,o,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo(f=>{s.enqueueAndForget(async()=>{Qs(this)&&(ot(Ls,"Restarting streams for network reachability change."),await async function(p){const y=St(p);y.Ea.add(4),await Yl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Sh(y)}(this))})}),this.Ra=new J2(s,o)}}async function Sh(r){if(Qs(r))for(const t of r.da)await t(!0)}async function Yl(r){for(const t of r.da)await t(!1)}function yE(r,t){const n=St(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),rg(n)?ig(n):oo(n).O_()&&ng(n,t))}function eg(r,t){const n=St(r),s=oo(n);n.Ia.delete(t),s.O_()&&_E(n,t),n.Ia.size===0&&(s.O_()?s.L_():Qs(n)&&n.Ra.set("Unknown"))}function ng(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}oo(r).Y_(t)}function _E(r,t){r.Va.Ue(t),oo(r).Z_(t)}function ig(r){r.Va=new KI({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),oo(r).start(),r.Ra.ua()}function rg(r){return Qs(r)&&!oo(r).x_()&&r.Ia.size>0}function Qs(r){return St(r).Ea.size===0}function vE(r){r.Va=void 0}async function tC(r){r.Ra.set("Online")}async function eC(r){r.Ia.forEach((t,n)=>{ng(r,t)})}async function nC(r,t){vE(r),rg(r)?(r.Ra.ha(t),ig(r)):r.Ra.set("Unknown")}async function iC(r,t,n){if(r.Ra.set("Online"),t instanceof iE&&t.state===2&&t.cause)try{await async function(o,c){const f=c.cause;for(const g of c.targetIds)o.Ia.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o.Ia.delete(g),o.Va.removeTarget(g))}(r,t)}catch(s){ot(Ls,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await nh(r,s)}else if(t instanceof Pc?r.Va.Ze(t):t instanceof nE?r.Va.st(t):r.Va.tt(t),!n.isEqual(At.min()))try{const s=await mE(r.localStore);n.compareTo(s)>=0&&await function(c,f){const g=c.Va.Tt(f);return g.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=c.Ia.get(y);E&&c.Ia.set(y,E.withResumeToken(p.resumeToken,f))}}),g.targetMismatches.forEach((p,y)=>{const E=c.Ia.get(p);if(!E)return;c.Ia.set(p,E.withResumeToken(Fe.EMPTY_BYTE_STRING,E.snapshotVersion)),_E(c,p);const S=new Vr(E.target,p,y,E.sequenceNumber);ng(c,S)}),c.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(s){ot(Ls,"Failed to raise snapshot:",s),await nh(r,s)}}async function nh(r,t,n){if(!ao(t))throw t;r.Ea.add(1),await Yl(r),r.Ra.set("Offline"),n||(n=()=>mE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ot(Ls,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await Sh(r)})}function TE(r,t){return t().catch(n=>nh(r,n,t))}async function wh(r){const t=St(r),n=Kr(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:qm;for(;rC(t);)try{const o=await z2(t.localStore,s);if(o===null){t.Ta.length===0&&n.L_();break}s=o.batchId,sC(t,o)}catch(o){await nh(t,o)}EE(t)&&bE(t)}function rC(r){return Qs(r)&&r.Ta.length<10}function sC(r,t){r.Ta.push(t);const n=Kr(r);n.O_()&&n.X_&&n.ea(t.mutations)}function EE(r){return Qs(r)&&!Kr(r).x_()&&r.Ta.length>0}function bE(r){Kr(r).start()}async function aC(r){Kr(r).ra()}async function oC(r){const t=Kr(r);for(const n of r.Ta)t.ea(n.mutations)}async function lC(r,t,n){const s=r.Ta.shift(),o=Ym.from(s,t,n);await TE(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await wh(r)}async function uC(r,t){t&&Kr(r).X_&&await async function(s,o){if(function(f){return FI(f)&&f!==W.ABORTED}(o.code)){const c=s.Ta.shift();Kr(s).B_(),await TE(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o)),await wh(s)}}(r,t),EE(r)&&bE(r)}async function Zv(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),ot(Ls,"RemoteStore received new credentials");const s=Qs(n);n.Ea.add(3),await Yl(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Sh(n)}async function cC(r,t){const n=St(r);t?(n.Ea.delete(2),await Sh(n)):t||(n.Ea.add(2),await Yl(n),n.Ra.set("Unknown"))}function oo(r){return r.ma||(r.ma=function(n,s,o){const c=St(n);return c.sa(),new Y2(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{Xo:tC.bind(null,r),t_:eC.bind(null,r),r_:nC.bind(null,r),H_:iC.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),rg(r)?ig(r):r.Ra.set("Unknown")):(await r.ma.stop(),vE(r))})),r.ma}function Kr(r){return r.fa||(r.fa=function(n,s,o){const c=St(n);return c.sa(),new X2(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:aC.bind(null,r),r_:uC.bind(null,r),ta:oC.bind(null,r),na:lC.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await wh(r)):(await r.fa.stop(),r.Ta.length>0&&(ot(Ls,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,n,s,o,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,c){const f=Date.now()+s,g=new sg(t,n,f,o,c);return g.start(s),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ht(W.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ag(r,t){if(Wi("AsyncQueue",`${t}: ${r}`),ao(r))return new ht(W.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{static emptySet(t){return new Ka(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||pt.comparator(n.key,s.key):(n,s)=>pt.comparator(n.key,s.key),this.keyedMap=El(),this.sortedSet=new le(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ka)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ka;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.ga=new le(pt.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):vt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,s)=>{t.push(s)}),t}}class to{constructor(t,n,s,o,c,f,g,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,c){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new to(t,n,Ka.emptySet(n),f,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_h(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class fC{constructor(){this.queries=Wv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=St(n),c=o.queries;o.queries=Wv(),c.forEach((f,g)=>{for(const p of g.Sa)p.onError(s)})})(this,new ht(W.ABORTED,"Firestore shutting down"))}}function Wv(){return new Fs(r=>qT(r),_h)}async function AE(r,t){const n=St(r);let s=3;const o=t.query;let c=n.queries.get(o);c?!c.ba()&&t.Da()&&(s=2):(c=new hC,s=t.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(o,!0);break;case 1:c.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=ag(f,`Initialization of query '${ja(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,c),c.Sa.push(t),t.va(n.onlineState),c.wa&&t.Fa(c.wa)&&og(n)}async function SE(r,t){const n=St(r),s=t.query;let o=3;const c=n.queries.get(s);if(c){const f=c.Sa.indexOf(t);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?o=t.Da()?0:1:!c.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function dC(r,t){const n=St(r);let s=!1;for(const o of t){const c=o.query,f=n.queries.get(c);if(f){for(const g of f.Sa)g.Fa(o)&&(s=!0);f.wa=o}}s&&og(n)}function mC(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(t)}function og(r){r.Ca.forEach(t=>{t.next()})}var bm,t0;(t0=bm||(bm={})).Ma="default",t0.Cache="cache";class wE{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new to(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=to.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==bm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(t){this.key=t}}class IE{constructor(t){this.key=t}}class gC{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Mt(),this.mutatedKeys=Mt(),this.eu=HT(t),this.tu=new Ka(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new Jv,o=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,S)=>{const C=o.get(E),U=vh(this.query,S)?S:null,F=!!C&&this.mutatedKeys.has(C.key),J=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let K=!1;C&&U?C.data.isEqual(U.data)?F!==J&&(s.track({type:3,doc:U}),K=!0):this.su(C,U)||(s.track({type:2,doc:U}),K=!0,(p&&this.eu(U,p)>0||y&&this.eu(U,y)<0)&&(g=!0)):!C&&U?(s.track({type:0,doc:U}),K=!0):C&&!U&&(s.track({type:1,doc:C}),K=!0,(p||y)&&(g=!0)),K&&(U?(f=f.add(U),c=J?c.add(E):c.delete(E)):(f=f.delete(E),c=c.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),c=c.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:g,mutatedKeys:c}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const c=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort((E,S)=>function(U,F){const J=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vt(20277,{Rt:K})}};return J(U)-J(F)}(E.type,S.type)||this.eu(E.doc,S.doc)),this.ou(s),o=o??!1;const g=n&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,y=p!==this.Za;return this.Za=p,f.length!==0||y?{snapshot:new to(this.query,t.tu,c,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Jv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Mt(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return t.forEach(s=>{this.Xa.has(s)||n.push(new IE(s))}),this.Xa.forEach(s=>{t.has(s)||n.push(new RE(s))}),n}cu(t){this.Ya=t.Qs,this.Xa=Mt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return to.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const lg="SyncEngine";class pC{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class yC{constructor(t){this.key=t,this.hu=!1}}class _C{constructor(t,n,s,o,c,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Fs(g=>qT(g),_h),this.Iu=new Map,this.Eu=new Set,this.du=new le(pt.comparator),this.Au=new Map,this.Ru=new Zm,this.Vu={},this.mu=new Map,this.fu=Wa.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vC(r,t,n=!0){const s=xE(r);let o;const c=s.Tu.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.lu()):o=await CE(s,t,n,!0),o}async function TC(r,t){const n=xE(r);await CE(n,t,!0,!1)}async function CE(r,t,n,s){const o=await j2(r.localStore,di(t)),c=o.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let g;return s&&(g=await EC(r,t,c,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&yE(r.remoteStore,o),g}async function EC(r,t,n,s,o){r.pu=(S,C,U)=>async function(J,K,st,ut){let ct=K.view.ru(st);ct.Cs&&(ct=await Qv(J.localStore,K.query,!1).then(({documents:O})=>K.view.ru(O,ct)));const Bt=ut&&ut.targetChanges.get(K.targetId),Tt=ut&&ut.targetMismatches.get(K.targetId)!=null,xt=K.view.applyChanges(ct,J.isPrimaryClient,Bt,Tt);return n0(J,K.targetId,xt.au),xt.snapshot}(r,S,C,U);const c=await Qv(r.localStore,t,!0),f=new gC(t,c.Qs),g=f.ru(c.documents),p=Kl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(g,r.isPrimaryClient,p);n0(r,n,y.au);const E=new pC(t,n,f);return r.Tu.set(t,E),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),y.snapshot}async function bC(r,t,n){const s=St(r),o=s.Tu.get(t),c=s.Iu.get(o.targetId);if(c.length>1)return s.Iu.set(o.targetId,c.filter(f=>!_h(f,t))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Tm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&eg(s.remoteStore,o.targetId),Am(s,o.targetId)}).catch(so)):(Am(s,o.targetId),await Tm(s.localStore,o.targetId,!0))}async function AC(r,t){const n=St(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),eg(n.remoteStore,s.targetId))}async function SC(r,t,n){const s=OC(r);try{const o=await function(f,g){const p=St(f),y=ne.now(),E=g.reduce((U,F)=>U.add(F.key),Mt());let S,C;return p.persistence.runTransaction("Locally write mutations","readwrite",U=>{let F=tr(),J=Mt();return p.Ns.getEntries(U,E).next(K=>{F=K,F.forEach((st,ut)=>{ut.isValidDocument()||(J=J.add(st))})}).next(()=>p.localDocuments.getOverlayedDocuments(U,F)).next(K=>{S=K;const st=[];for(const ut of g){const ct=zI(ut,S.get(ut.key).overlayedDocument);ct!=null&&st.push(new Gs(ut.key,ct,kT(ct.value.mapValue),Yi.exists(!0)))}return p.mutationQueue.addMutationBatch(U,y,st,g)}).next(K=>{C=K;const st=K.applyToLocalDocumentSet(S,J);return p.documentOverlayCache.saveOverlays(U,K.batchId,st)})}).then(()=>({batchId:C.batchId,changes:GT(S)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,g,p){let y=f.Vu[f.currentUser.toKey()];y||(y=new le(Ot)),y=y.insert(g,p),f.Vu[f.currentUser.toKey()]=y}(s,o.batchId,n),await Xl(s,o.changes),await wh(s.remoteStore)}catch(o){const c=ag(o,"Failed to persist write");n.reject(c)}}async function DE(r,t){const n=St(r);try{const s=await U2(n.localStore,t);t.targetChanges.forEach((o,c)=>{const f=n.Au.get(c);f&&(Qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Qt(f.hu,14607):o.removedDocuments.size>0&&(Qt(f.hu,42227),f.hu=!1))}),await Xl(n,s,t)}catch(s){await so(s)}}function e0(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach((c,f)=>{const g=f.view.va(t);g.snapshot&&o.push(g.snapshot)}),function(f,g){const p=St(f);p.onlineState=g;let y=!1;p.queries.forEach((E,S)=>{for(const C of S.Sa)C.va(g)&&(y=!0)}),y&&og(p)}(s.eventManager,t),o.length&&s.Pu.H_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function wC(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Au.get(t),c=o&&o.key;if(c){let f=new le(pt.comparator);f=f.insert(c,$e.newNoDocument(c,At.min()));const g=Mt().add(c),p=new bh(At.min(),new Map,new le(Ot),f,g);await DE(s,p),s.du=s.du.remove(c),s.Au.delete(t),ug(s)}else await Tm(s.localStore,t,!1).then(()=>Am(s,t,n)).catch(so)}async function RC(r,t){const n=St(r),s=t.batch.batchId;try{const o=await P2(n.localStore,t);OE(n,s,null),NE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xl(n,o)}catch(o){await so(o)}}async function IC(r,t,n){const s=St(r);try{const o=await function(f,g){const p=St(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,g).next(S=>(Qt(S!==null,37113),E=S.keys(),p.mutationQueue.removeMutationBatch(y,S))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,g)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,t);OE(s,t,n),NE(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Xl(s,o)}catch(o){await so(o)}}function NE(r,t){(r.mu.get(t)||[]).forEach(n=>{n.resolve()}),r.mu.delete(t)}function OE(r,t,n){const s=St(r);let o=s.Vu[s.currentUser.toKey()];if(o){const c=o.get(t);c&&(n?c.reject(n):c.resolve(),o=o.remove(t)),s.Vu[s.currentUser.toKey()]=o}}function Am(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(s=>{r.Ru.containsKey(s)||ME(r,s)})}function ME(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(eg(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),ug(r))}function n0(r,t,n){for(const s of n)s instanceof RE?(r.Ru.addReference(s.key,t),CC(r,s)):s instanceof IE?(ot(lg,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||ME(r,s.key)):vt(19791,{wu:s})}function CC(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(ot(lg,"New document in limbo: "+n),r.Eu.add(s),ug(r))}function ug(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new pt(oe.fromString(t)),s=r.fu.next();r.Au.set(s,new yC(n)),r.du=r.du.insert(n,s),yE(r.remoteStore,new Vr(di(yh(n.path)),s,"TargetPurposeLimboResolution",dh.ce))}}async function Xl(r,t,n){const s=St(r),o=[],c=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach((g,p)=>{f.push(s.pu(p,t,n).then(y=>{if((y||n)&&s.isPrimaryClient){const E=y?!y.fromCache:n?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Wm.As(p.targetId,y);c.push(E)}}))}),await Promise.all(f),s.Pu.H_(o),await async function(p,y){const E=St(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>$.forEach(y,C=>$.forEach(C.Es,U=>E.persistence.referenceDelegate.addReference(S,C.targetId,U)).next(()=>$.forEach(C.ds,U=>E.persistence.referenceDelegate.removeReference(S,C.targetId,U)))))}catch(S){if(!ao(S))throw S;ot(tg,"Failed to update sequence numbers: "+S)}for(const S of y){const C=S.targetId;if(!S.fromCache){const U=E.Ms.get(C),F=U.snapshotVersion,J=U.withLastLimboFreeSnapshotVersion(F);E.Ms=E.Ms.insert(C,J)}}}(s.localStore,c))}async function DC(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){ot(lg,"User change. New user:",t.toKey());const s=await dE(n.localStore,t);n.currentUser=t,function(c,f){c.mu.forEach(g=>{g.forEach(p=>{p.reject(new ht(W.CANCELLED,f))})}),c.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Xl(n,s.Ls)}}function NC(r,t){const n=St(r),s=n.Au.get(t);if(s&&s.hu)return Mt().add(s.key);{let o=Mt();const c=n.Iu.get(t);if(!c)return o;for(const f of c){const g=n.Tu.get(f);o=o.unionWith(g.view.nu)}return o}}function xE(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=DE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=NC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wC.bind(null,t),t.Pu.H_=dC.bind(null,t.eventManager),t.Pu.yu=mC.bind(null,t.eventManager),t}function OC(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=RC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=IC.bind(null,t),t}class ih{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ah(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return k2(this.persistence,new M2,t.initialUser,this.serializer)}Cu(t){return new fE(Jm.mi,this.serializer)}Du(t){return new q2}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ih.provider={build:()=>new ih};class MC extends ih{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Qt(this.persistence.referenceDelegate instanceof eh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new y2(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new fE(s=>eh.mi(s,n),this.serializer)}}class Sm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>e0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=DC.bind(null,this.syncEngine),await cC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fC}()}createDatastore(t){const n=Ah(t.databaseInfo.databaseId),s=function(c){return new K2(c)}(t.databaseInfo);return function(c,f,g,p){return new Z2(c,f,g,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,c,f,g){return new W2(s,o,c,f,g)}(this.localStore,this.datastore,t.asyncQueue,n=>e0(this.syncEngine,n,0),function(){return Xv.v()?new Xv:new H2}())}createSyncEngine(t,n){return function(o,c,f,g,p,y,E){const S=new _C(o,c,f,g,p,y);return E&&(S.gu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const s=St(n);ot(Ls,"RemoteStore shutting down."),s.Ea.add(5),await Yl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Sm.provider={build:()=>new Sm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Wi("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="FirestoreClient";class xC{constructor(t,n,s,o,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Xe.UNAUTHENTICATED,this.clientId=jm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{ot(Yr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ot(Yr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ag(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Kd(r,t){r.asyncQueue.verifyOperationInProgress(),ot(Yr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await dE(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function i0(r,t){r.asyncQueue.verifyOperationInProgress();const n=await VC(r);ot(Yr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Zv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Zv(t.remoteStore,o)),r._onlineComponents=t}async function VC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ot(Yr,"Using user provided OfflineComponentProvider");try{await Kd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Xa("Error using user provided cache. Falling back to memory cache: "+n),await Kd(r,new ih)}}else ot(Yr,"Using default OfflineComponentProvider"),await Kd(r,new MC(void 0));return r._offlineComponents}async function kE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ot(Yr,"Using user provided OnlineComponentProvider"),await i0(r,r._uninitializedComponentsProvider._online)):(ot(Yr,"Using default OnlineComponentProvider"),await i0(r,new Sm))),r._onlineComponents}function kC(r){return kE(r).then(t=>t.syncEngine)}async function wm(r){const t=await kE(r),n=t.eventManager;return n.onListen=vC.bind(null,t.syncEngine),n.onUnlisten=bC.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=TC.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=AC.bind(null,t.syncEngine),n}function PC(r,t,n={}){const s=new zr;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,g,p,y){const E=new VE({next:C=>{E.Nu(),f.enqueueAndForget(()=>SE(c,S));const U=C.docs.has(g);!U&&C.fromCache?y.reject(new ht(W.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&C.fromCache&&p&&p.source==="server"?y.reject(new ht(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(C)},error:C=>y.reject(C)}),S=new wE(yh(g.path),E,{includeMetadataChanges:!0,qa:!0});return AE(c,S)}(await wm(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="firestore.googleapis.com",s0=!0;class a0{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ht(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=UE,this.ssl=s0}else this.host=t.host,this.ssl=t.ssl??s0;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=hE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<g2)throw new ht(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}JR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PE(t.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ht(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ht(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ht(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class cg{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ht(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ht(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a0(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new BR;switch(s.type){case"firstParty":return new GR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ht(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=r0.get(n);s&&(ot("ComponentProvider","Removing Datastore"),r0.delete(n),s.terminate())}(this),Promise.resolve()}}function UC(r,t,n,s={}){r=jr(r,cg);const o=eo(t),c=r._getSettings(),f={...c,emulatorOptions:r._getEmulatorOptions()},g=`${t}:${n}`;o&&(C0(`https://${g}`),D0("Firestore",!0)),c.host!==UE&&c.host!==g&&Xa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...c,host:g,ssl:o,emulatorOptions:s};if(!Br(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=Xe.MOCK_USER;else{y=fS(s.mockUserToken,r._app?.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new ht(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Xe(S)}r._authCredentials=new qR(new ST(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Rh(this.firestore,t,this._query)}}class Ce{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ce(this.firestore,t,this._key)}toJSON(){return{type:Ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Gl(n,Ce._jsonSchema))return new Ce(t,s||null,new pt(oe.fromString(n.referencePath)))}}Ce._jsonSchemaVersion="firestore/documentReference/1.0",Ce._jsonSchema={type:Ee("string",Ce._jsonSchemaVersion),referencePath:Ee("string")};class zl extends Rh{constructor(t,n,s){super(t,n,yh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ce(this.firestore,null,new pt(t))}withConverter(t){return new zl(this.firestore,t,this._path)}}function Yd(r,t,...n){if(r=Tn(r),arguments.length===1&&(t=jm.newId()),ZR("doc","path",t),r instanceof cg){const s=oe.fromString(t,...n);return Tv(s),new Ce(r,null,new pt(s))}{if(!(r instanceof Ce||r instanceof zl))throw new ht(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(oe.fromString(t,...n));return Tv(s),new Ce(r.firestore,r instanceof zl?r.converter:null,new pt(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="AsyncQueue";class l0{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new gE(this,"async_queue_retry"),this._c=()=>{const s=Qd();s&&ot(o0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=Qd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new zr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ao(t))throw t;ot(o0,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(s=>{throw this.nc=s,this.rc=!1,Wi("INTERNAL UNHANDLED ERROR: ",u0(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=sg.createAndSchedule(this,t,n,s,c=>this.hc(c));return this.tc.push(o),o}uc(){this.nc&&vt(47125,{Pc:u0(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function u0(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(r){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const c of s)if(c in o&&typeof o[c]=="function")return!0;return!1}(r,["next","error","complete"])}class jl extends cg{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new l0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new l0(t),this._firestoreClient=void 0,await t}}}function LC(r,t){const n=typeof r=="object"?r:Om(),s=typeof r=="string"?r:Yc,o=qs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=cS("firestore");c&&UC(o,...c)}return o}function hg(r){if(r._terminated)throw new ht(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||zC(r),r._firestoreClient}function zC(r){const t=r._freezeSettings(),n=function(o,c,f,g){return new uI(o,c,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,PE(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new xC(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&function(o){const c=o?._online.build();return{_offline:o?._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kn(Fe.fromBase64String(t))}catch(n){throw new ht(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new kn(Fe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:kn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Gl(t,kn._jsonSchema))return kn.fromBase64String(t.bytes)}}kn._jsonSchemaVersion="firestore/bytes/1.0",kn._jsonSchema={type:Ee("string",kn._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ht(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ht(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ht(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ot(this._lat,t._lat)||Ot(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gi._jsonSchemaVersion}}static fromJSON(t){if(Gl(t,gi._jsonSchema))return new gi(t.latitude,t.longitude)}}gi._jsonSchemaVersion="firestore/geoPoint/1.0",gi._jsonSchema={type:Ee("string",gi._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0}(this._values,t._values)}toJSON(){return{type:pi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Gl(t,pi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new pi(t.vectorValues);throw new ht(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pi._jsonSchemaVersion="firestore/vectorValue/1.0",pi._jsonSchema={type:Ee("string",pi._jsonSchemaVersion),vectorValues:Ee("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=/^__.*__$/;class BC{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Gs(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ql(t,this.data,n,this.fieldTransforms)}}function zE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw vt(40011,{Ac:r})}}class dg{constructor(t,n,s,o,c,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new dg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return rh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(zE(this.Ac)&&jC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class qC{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Ah(t)}Cc(t,n,s,o=!1){return new dg({Ac:t,methodName:n,Dc:s,path:He.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function HC(r){const t=r._freezeSettings(),n=Ah(r._databaseId);return new qC(r._databaseId,!!t.ignoreUndefinedProperties,n)}function FC(r,t,n,s,o,c={}){const f=r.Cc(c.merge||c.mergeFields?2:0,t,n,o);HE("Data must be an object, but it was:",f,s);const g=BE(s,f);let p,y;if(c.merge)p=new Gn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const E=[];for(const S of c.mergeFields){const C=GC(t,S,n);if(!f.contains(C))throw new ht(W.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);KC(E,C)||E.push(C)}p=new Gn(E),y=f.fieldTransforms.filter(S=>p.covers(S.field))}else p=null,y=f.fieldTransforms;return new BC(new Vn(g),p,y)}function jE(r,t){if(qE(r=Tn(r)))return HE("Unsupported field value:",t,r),BE(r,t);if(r instanceof LE)return function(s,o){if(!zE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(s,o){const c=[];let f=0;for(const g of s){let p=jE(g,o.wc(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,o){if((s=Tn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return xI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=ne.fromDate(s);return{timestampValue:th(o.serializer,c)}}if(s instanceof ne){const c=new ne(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:th(o.serializer,c)}}if(s instanceof gi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof kn)return{bytesValue:rE(o.serializer,s._byteString)};if(s instanceof Ce){const c=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:$m(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof pi)return function(f,g){return{mapValue:{fields:{[xT]:{stringValue:VT},[Xc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw g.Sc("VectorValues must only contain numeric values.");return Km(g.serializer,y)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${Bm(s)}`)}(r,t)}function BE(r,t){const n={};return IT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Hs(r,(s,o)=>{const c=jE(o,t.mc(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function qE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ne||r instanceof gi||r instanceof kn||r instanceof Ce||r instanceof LE||r instanceof pi)}function HE(r,t,n){if(!qE(n)||!wT(n)){const s=Bm(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function GC(r,t,n){if((t=Tn(t))instanceof fg)return t._internalPath;if(typeof t=="string")return FE(r,t);throw rh("Field path arguments must be of type string or ",r,!1,void 0,n)}const QC=new RegExp("[~\\*/\\[\\]]");function FE(r,t,n){if(t.search(QC)>=0)throw rh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new fg(...t.split("."))._internalPath}catch{throw rh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function rh(r,t,n,s,o){const c=s&&!s.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new ht(W.INVALID_ARGUMENT,g+r+p)}function KC(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(t,n,s,o,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new YC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(QE("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YC extends GE{data(){return super.data()}}function QE(r,t){return typeof t=="string"?FE(r,t):t instanceof fg?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ht(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $C{convertValue(t,n="none"){switch(Qr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ge(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Gr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw vt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Hs(t,(o,c)=>{s[o]=this.convertValue(c,n)}),s}convertVectorValue(t){const n=t.fields?.[Xc].arrayValue?.values?.map(s=>ge(s.doubleValue));return new pi(n)}convertGeoPoint(t){return new gi(ge(t.latitude),ge(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=gh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Vl(t));default:return null}}convertTimestamp(t){const n=Fr(t);return new ne(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=oe.fromString(t);Qt(cE(s),9688,{name:t});const o=new kl(s.get(1),s.get(3)),c=new pt(s.popFirst(5));return o.isEqual(n)||Wi(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}class Al{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ks extends GE{constructor(t,n,s,o,c,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(QE("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ht(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=ks._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",ks._jsonSchema={type:Ee("string",ks._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Uc extends ks{data(t={}){return super.data(t)}}class Ya{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Al(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Uc(this._firestore,this._userDataWriter,s.key,s,new Al(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ht(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(g=>{const p=new Uc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new Al(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(g=>c||g.type!==3).map(g=>{const p=new Uc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new Al(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return g.type!==0&&(y=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),E=f.indexOf(g.doc.key)),{type:JC(g.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ht(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ya._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=jm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function JC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vt(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(r){r=jr(r,Ce);const t=jr(r.firestore,jl);return PC(hg(t),r._key).then(n=>YE(t,r,n))}Ya._jsonSchemaVersion="firestore/querySnapshot/1.0",Ya._jsonSchema={type:Ee("string",Ya._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class KE extends $C{constructor(t){super(),this.firestore=t}convertBytes(t){return new kn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ce(this.firestore,null,n)}}function Gi(r,t,n){r=jr(r,Ce);const s=jr(r.firestore,jl),o=ZC(r.converter,t,n);return WC(s,[FC(HC(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Yi.none())])}function Xd(r,...t){r=Tn(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||c0(t[s])||(n=t[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(c0(t[s])){const p=t[s];t[s]=p.next?.bind(p),t[s+1]=p.error?.bind(p),t[s+2]=p.complete?.bind(p)}let c,f,g;if(r instanceof Ce)f=jr(r.firestore,jl),g=yh(r._key.path),c={next:p=>{t[s]&&t[s](YE(f,r,p))},error:t[s+1],complete:t[s+2]};else{const p=jr(r,Rh);f=jr(p.firestore,jl),g=p._query;const y=new KE(f);c={next:E=>{t[s]&&t[s](new Ya(f,y,p,E))},error:t[s+1],complete:t[s+2]},XC(r._query)}return function(y,E,S,C){const U=new VE(C),F=new wE(E,U,S);return y.asyncQueue.enqueueAndForget(async()=>AE(await wm(y),F)),()=>{U.Nu(),y.asyncQueue.enqueueAndForget(async()=>SE(await wm(y),F))}}(hg(f),g,o,c)}function WC(r,t){return function(s,o){const c=new zr;return s.asyncQueue.enqueueAndForget(async()=>SC(await kC(s),o,c)),c.promise}(hg(r),t)}function YE(r,t,n){const s=n.docs.get(t._key),o=new KE(r);return new ks(r,o,t._key,s,new Al(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){ro=o})(no),yi(new Qn("firestore",(s,{instanceIdentifier:o,options:c})=>{const f=s.getProvider("app").getImmediate(),g=new jl(new HR(s.getProvider("auth-internal")),new QR(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ht(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kl(y.options.projectId,E)}(f,o),f);return c={useFetchStreams:n,...c},g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),Pn(pv,yv,t),Pn(pv,yv,"esm2020")})();const XE="@firebase/installations",mg="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=1e4,ZE=`w:${mg}`,JE="FIS_v2",tD="https://firebaseinstallations.googleapis.com/v1",eD=3600*1e3,nD="installations",iD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},zs=new Bs(nD,iD,rD);function WE(r){return r instanceof Kn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb({projectId:r}){return`${tD}/projects/${r}/installations`}function eb(r){return{token:r.token,requestStatus:2,expiresIn:aD(r.expiresIn),creationTime:Date.now()}}async function nb(r,t){const s=(await t.json()).error;return zs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ib({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function sD(r,{refreshToken:t}){const n=ib(r);return n.append("Authorization",oD(t)),n}async function rb(r){const t=await r();return t.status>=500&&t.status<600?r():t}function aD(r){return Number(r.replace("s","000"))}function oD(r){return`${JE} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lD({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=tb(r),o=ib(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:JE,appId:r.appId,sdkVersion:ZE},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await rb(()=>fetch(s,g));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:eb(y.authToken)}}else throw await nb("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=/^[cdef][\w-]{21}$/,Rm="";function hD(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=fD(r);return cD.test(n)?n:Rm}catch{return Rm}}function fD(r){return uD(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new Map;function ob(r,t){const n=Ih(r);lb(n,t),dD(n,t)}function lb(r,t){const n=ab.get(r);if(n)for(const s of n)s(t)}function dD(r,t){const n=mD();n&&n.postMessage({key:r,fid:t}),gD()}let Vs=null;function mD(){return!Vs&&"BroadcastChannel"in self&&(Vs=new BroadcastChannel("[Firebase] FID Change"),Vs.onmessage=r=>{lb(r.data.key,r.data.fid)}),Vs}function gD(){ab.size===0&&Vs&&(Vs.close(),Vs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="firebase-installations-database",yD=1,js="firebase-installations-store";let $d=null;function gg(){return $d||($d=k0(pD,yD,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(js)}}})),$d}async function sh(r,t){const n=Ih(r),o=(await gg()).transaction(js,"readwrite"),c=o.objectStore(js),f=await c.get(n);return await c.put(t,n),await o.done,(!f||f.fid!==t.fid)&&ob(r,t.fid),t}async function ub(r){const t=Ih(r),s=(await gg()).transaction(js,"readwrite");await s.objectStore(js).delete(t),await s.done}async function Ch(r,t){const n=Ih(r),o=(await gg()).transaction(js,"readwrite"),c=o.objectStore(js),f=await c.get(n),g=t(f);return g===void 0?await c.delete(n):await c.put(g,n),await o.done,g&&(!f||f.fid!==g.fid)&&ob(r,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(r){let t;const n=await Ch(r.appConfig,s=>{const o=_D(s),c=vD(r,o);return t=c.registrationPromise,c.installationEntry});return n.fid===Rm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function _D(r){const t=r||{fid:hD(),registrationStatus:0};return cb(t)}function vD(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(zs.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=TD(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ED(r)}:{installationEntry:t}}async function TD(r,t){try{const n=await lD(r,t);return sh(r.appConfig,n)}catch(n){throw WE(n)&&n.customData.serverCode===409?await ub(r.appConfig):await sh(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ED(r){let t=await h0(r.appConfig);for(;t.registrationStatus===1;)await sb(100),t=await h0(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await pg(r);return s||n}return t}function h0(r){return Ch(r,t=>{if(!t)throw zs.create("installation-not-found");return cb(t)})}function cb(r){return bD(r)?{fid:r.fid,registrationStatus:0}:r}function bD(r){return r.registrationStatus===1&&r.registrationTime+$E<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD({appConfig:r,heartbeatServiceProvider:t},n){const s=SD(r,n),o=sD(r,n),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:ZE,appId:r.appId}},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await rb(()=>fetch(s,g));if(p.ok){const y=await p.json();return eb(y)}else throw await nb("Generate Auth Token",p)}function SD(r,{fid:t}){return`${tb(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(r,t=!1){let n;const s=await Ch(r.appConfig,c=>{if(!hb(c))throw zs.create("not-registered");const f=c.authToken;if(!t&&ID(f))return c;if(f.requestStatus===1)return n=wD(r,t),c;{if(!navigator.onLine)throw zs.create("app-offline");const g=DD(c);return n=RD(r,g),g}});return n?await n:s.authToken}async function wD(r,t){let n=await f0(r.appConfig);for(;n.authToken.requestStatus===1;)await sb(100),n=await f0(r.appConfig);const s=n.authToken;return s.requestStatus===0?yg(r,t):s}function f0(r){return Ch(r,t=>{if(!hb(t))throw zs.create("not-registered");const n=t.authToken;return ND(n)?{...t,authToken:{requestStatus:0}}:t})}async function RD(r,t){try{const n=await AD(r,t),s={...t,authToken:n};return await sh(r.appConfig,s),n}catch(n){if(WE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ub(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await sh(r.appConfig,s)}throw n}}function hb(r){return r!==void 0&&r.registrationStatus===2}function ID(r){return r.requestStatus===2&&!CD(r)}function CD(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+eD}function DD(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function ND(r){return r.requestStatus===1&&r.requestTime+$E<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OD(r){const t=r,{installationEntry:n,registrationPromise:s}=await pg(t);return s?s.catch(console.error):yg(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(r,t=!1){const n=r;return await xD(n),(await yg(n,t)).token}async function xD(r){const{registrationPromise:t}=await pg(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(r){if(!r||!r.options)throw Zd("App Configuration");if(!r.name)throw Zd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Zd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Zd(r){return zs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="installations",kD="installations-internal",PD=r=>{const t=r.getProvider("app").getImmediate(),n=VD(t),s=qs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},UD=r=>{const t=r.getProvider("app").getImmediate(),n=qs(t,fb).getImmediate();return{getId:()=>OD(n),getToken:o=>MD(n,o)}};function LD(){yi(new Qn(fb,PD,"PUBLIC")),yi(new Qn(kD,UD,"PRIVATE"))}LD();Pn(XE,mg);Pn(XE,mg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="analytics",zD="firebase_id",jD="origin",BD=60*1e3,qD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_g="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new lh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vn=new Bs("analytics","Analytics",HD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(r){if(!r.startsWith(_g)){const t=vn.create("invalid-gtag-resource",{gtagURL:r});return un.warn(t.message),""}return r}function db(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function GD(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function QD(r,t){const n=GD("firebase-js-sdk-policy",{createScriptURL:FD}),s=document.createElement("script"),o=`${_g}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function KD(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function YD(r,t,n,s,o,c){const f=s[o];try{if(f)await t[f];else{const p=(await db(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(g){un.error(g)}r("config",o,c)}async function XD(r,t,n,s,o){try{let c=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const g=await db(n);for(const p of f){const y=g.find(S=>S.measurementId===p),E=y&&t[y.appId];if(E)c.push(E);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,o||{})}catch(c){un.error(c)}}function $D(r,t,n,s){async function o(c,...f){try{if(c==="event"){const[g,p]=f;await XD(r,t,n,g,p)}else if(c==="config"){const[g,p]=f;await YD(r,t,n,s,g,p)}else if(c==="consent"){const[g,p]=f;r("consent",g,p)}else if(c==="get"){const[g,p,y]=f;r("get",g,p,y)}else if(c==="set"){const[g]=f;r("set",g)}else r(c,...f)}catch(g){un.error(g)}}return o}function ZD(r,t,n,s,o){let c=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=$D(c,r,t,n),{gtagCore:c,wrappedGtag:window[o]}}function JD(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(_g)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=30,tN=1e3;class eN{constructor(t={},n=tN){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const mb=new eN;function nN(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function iN(r){const{appId:t,apiKey:n}=r,s={method:"GET",headers:nN(n)},o=qD.replace("{app-id}",t),c=await fetch(o,s);if(c.status!==200&&c.status!==304){let f="";try{const g=await c.json();g.error?.message&&(f=g.error.message)}catch{}throw vn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:f})}return c.json()}async function rN(r,t=mb,n){const{appId:s,apiKey:o,measurementId:c}=r.options;if(!s)throw vn.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:s};throw vn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new oN;return setTimeout(async()=>{g.abort()},BD),gb({appId:s,apiKey:o,measurementId:c},f,g,t)}async function gb(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=mb){const{appId:c,measurementId:f}=r;try{await sN(s,t)}catch(g){if(f)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:c,measurementId:f};throw g}try{const g=await iN(r);return o.deleteThrottleMetadata(c),g}catch(g){const p=g;if(!aN(p)){if(o.deleteThrottleMetadata(c),f)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:c,measurementId:f};throw g}const y=Number(p?.customData?.httpStatus)===503?H_(n,o.intervalMillis,WD):H_(n,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return o.setThrottleMetadata(c,E),un.debug(`Calling attemptFetch again in ${y} millis`),gb(r,E,s,o)}}function sN(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),c=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(c),s(vn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function aN(r){if(!(r instanceof Kn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class oN{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function lN(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const c=await t,f={...s,send_to:c};r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(){if(O0())try{await M0()}catch(r){return un.warn(vn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return un.warn(vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cN(r,t,n,s,o,c,f){const g=rN(r);g.then(C=>{n[C.measurementId]=C.appId,r.options.measurementId&&C.measurementId!==r.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>un.error(C)),t.push(g);const p=uN().then(C=>{if(C)return s.getId()}),[y,E]=await Promise.all([g,p]);JD(c)||QD(c,y.measurementId),o("js",new Date);const S=f?.config??{};return S[jD]="firebase",S.update=!0,E!=null&&(S[zD]=E),o("config",y.measurementId,S),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(t){this.app=t}_delete(){return delete Nl[this.app.options.appId],Promise.resolve()}}let Nl={},d0=[];const m0={};let Jd="dataLayer",fN="gtag",g0,pb,p0=!1;function dN(){const r=[];if(N0()&&r.push("This is a browser extension environment."),ES()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=vn.create("invalid-analytics-context",{errorInfo:t});un.warn(n.message)}}function mN(r,t,n){dN();const s=r.options.appId;if(!s)throw vn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vn.create("no-api-key");if(Nl[s]!=null)throw vn.create("already-exists",{id:s});if(!p0){KD(Jd);const{wrappedGtag:c,gtagCore:f}=ZD(Nl,d0,m0,Jd,fN);pb=c,g0=f,p0=!0}return Nl[s]=cN(r,d0,m0,t,g0,Jd,n),new hN(r)}function gN(r=Om()){r=Tn(r);const t=qs(r,ah);return t.isInitialized()?t.getImmediate():pN(r)}function pN(r,t={}){const n=qs(r,ah);if(n.isInitialized()){const o=n.getImmediate();if(Br(t,n.getOptions()))return o;throw vn.create("already-initialized")}return n.initialize({options:t})}function yN(r,t,n,s){r=Tn(r),lN(pb,Nl[r.app.options.appId],t,n,s).catch(o=>un.error(o))}const y0="@firebase/analytics",_0="0.10.18";function _N(){yi(new Qn(ah,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return mN(s,o,n)},"PUBLIC")),yi(new Qn("analytics-internal",r,"PRIVATE")),Pn(y0,_0),Pn(y0,_0,"esm2020");function r(t){try{const n=t.getProvider(ah).getImmediate();return{logEvent:(s,o,c)=>yN(n,s,o,c)}}catch(n){throw vn.create("interop-component-reg-failed",{reason:n})}}}_N();const vN={apiKey:"AIzaSyCZCXxPP1XGm1MRfGiSUOcsdVNR6Cwv1cY",authDomain:"yardjobs-b8e72.firebaseapp.com",projectId:"yardjobs-b8e72",storageBucket:"yardjobs-b8e72.firebasestorage.app",messagingSenderId:"682521902947",appId:"1:682521902947:web:bb56a0840912ffe9e81d56",measurementId:"G-QE2PYCGS9F"},vg=P0(vN),TN=zR(vg);gN(vg);const Wd=LC(vg);Aw(TN).catch(console.error);function EN(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function bN(){return/iphone|ipad|ipod/i.test(navigator.userAgent)}function AN(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function SN(){const[r,t]=mt.useState(null),[n,s]=mt.useState(EN()),[o,c]=mt.useState(!1);mt.useEffect(()=>{const g=y=>{y.preventDefault(),t(y),c(!0)},p=()=>{s(!0),c(!1)};return window.addEventListener("beforeinstallprompt",g),window.addEventListener("appinstalled",p),()=>{window.removeEventListener("beforeinstallprompt",g),window.removeEventListener("appinstalled",p)}},[]);const f=!n&&bN()&&AN();return n||!o&&!f?null:j.jsx("div",{className:"fixed bottom-3 left-1/2 -translate-x-1/2 z-50",children:j.jsxs("div",{className:"max-w-sm rounded-xl shadow-lg border bg-white/95 dark:bg-slate-800 dark:text-slate-100 p-3 text-sm",children:[o&&r&&j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsx("span",{children:"Install Paris Farm Barn?"}),j.jsx("button",{className:"ml-auto px-3 py-1 rounded-md bg-emerald-600 text-white hover:bg-emerald-500",onClick:async()=>{r.prompt();const{outcome:g}=await r.userChoice;console.log("[PWA] userChoice",g),t(null),c(!1)},children:"Install"}),j.jsx("button",{className:"px-2 py-1",onClick:()=>c(!1),children:"Not now"})]}),f&&j.jsxs("div",{children:[j.jsx("div",{className:"font-medium mb-1",children:"Add to Home Screen"}),j.jsxs("div",{children:["On iPhone/iPad: tap ",j.jsx("strong",{children:"Share"})," → ",j.jsx("strong",{children:"Add to Home Screen"}),"."]}),j.jsx("div",{className:"mt-2 text-right",children:j.jsx("button",{className:"px-2 py-1 border rounded",onClick:()=>c(!1),children:"OK"})})]})]})})}function v0({open:r,onClose:t,children:n,labelledById:s}){return mt.useEffect(()=>{if(!r)return;const o=c=>c.key==="Escape"&&t();return document.body.style.overflow="hidden",document.addEventListener("keydown",o),()=>{document.body.style.overflow="",document.removeEventListener("keydown",o)}},[r,t]),r?j.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur",onClick:t,role:"dialog","aria-modal":"true","aria-labelledby":s,children:j.jsxs("div",{className:"relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md",onClick:o=>o.stopPropagation(),children:[j.jsx("button",{onClick:t,"aria-label":"Close dialog",className:"absolute top-3 right-3 p-3 focus:outline-none",style:{minWidth:"44px",minHeight:"44px"},children:"✕"}),n]})}):null}function wN({open:r,onClose:t,children:n}){return j.jsxs("div",{className:`fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 dark:text-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${r?"translate-x-0":"-translate-x-full"}`,children:[j.jsx("div",{className:"p-4 flex justify-end",children:j.jsx("button",{onClick:t,"aria-label":"Close menu",children:"✕"})}),n]})}function tm({title:r,items:t,setItems:n,placeholder:s}){const[o,c]=mt.useState(t),[f,g]=mt.useState(!1),p=mt.useRef(null);mt.useEffect(()=>{f||c(t)},[t,f]);const y=J=>J.filter(K=>K.trim()!==""),E=(J,K)=>c(st=>st.map((ut,ct)=>ct===J?K:ut)),S=()=>c(J=>[...J,""]),C=J=>{const K=o[J]||"empty";window.confirm(`Delete "${K}"?`)&&c(st=>st.filter((ut,ct)=>ct!==J))},U=()=>{n(y(o)),g(!1)},F=()=>{c(t),g(!1)};return mt.useEffect(()=>{const J=p.current;if(!J)return;const K=st=>st.stopPropagation();return J.addEventListener("wheel",K),()=>J.removeEventListener("wheel",K)},[]),j.jsxs("div",{className:"mb-6",ref:p,children:[j.jsxs("h3",{className:"font-semibold mb-2 flex justify-between items-center",children:[r,f?null:j.jsx("button",{onClick:()=>g(!0),className:"text-sm text-emerald-600",children:"Edit"})]}),f?j.jsxs(j.Fragment,{children:[o.map((J,K)=>j.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[j.jsx("input",{className:"flex-1 border p-2 rounded",value:J,placeholder:s,onChange:st=>E(K,st.target.value)}),j.jsx("button",{onClick:()=>C(K),className:"px-2 text-red-600",children:"Delete"})]},K)),j.jsxs("div",{className:"flex gap-2 mt-2",children:[j.jsx("button",{onClick:S,className:"px-2 py-1 border rounded",children:"+ Add"}),j.jsx("button",{onClick:U,className:"px-2 py-1 bg-emerald-500 text-white rounded",children:"Save"}),j.jsx("button",{onClick:F,className:"px-2 py-1 border rounded",children:"Cancel"})]})]}):j.jsx("ul",{className:"list-disc pl-5",children:t.map((J,K)=>j.jsx("li",{children:J},K))})]})}const Xi=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],yb=(r=new Date)=>{const t=new Date(r);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t},T0=r=>new Date(r.getTime()-r.getTimezoneOffset()*6e4).toISOString().split("T")[0],RN=r=>{const t=new Date(r);t.setDate(t.getDate()+6);const n={month:"short",day:"numeric"};return`${r.toLocaleDateString(void 0,n)} – ${t.toLocaleDateString(void 0,n)}`};function IN({setWeekStart:r,openCopyConfirm:t}){return j.jsxs("div",{className:"sticky top-0 z-30 bg-white dark:bg-slate-900 backdrop-blur py-3 flex flex-wrap justify-center gap-2 shadow-sm transition-colors duration-300",children:[j.jsx("button",{className:"px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-700",onClick:()=>r(n=>new Date(n.getTime()-6048e5)),title:"Go to the previous week",children:"◀ Prev"}),j.jsx("button",{className:"px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-700",onClick:()=>r(yb()),title:"Jump to the current week",children:"Current"}),j.jsx("button",{className:"px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-700",onClick:()=>r(n=>new Date(n.getTime()+6048e5)),title:"Go to the next week",children:"Next ▶"}),j.jsx("button",{className:"px-3 py-1.5 rounded-md border border-emerald-600 bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500",onClick:t,title:"Copy last week’s duties into this week",children:"Copy Previous Week ↘"})]})}function CN({listsLoaded:r,feedingLoaded:t,dutiesLoaded:n,saveBusy:s}){const o=r&&t&&n;return j.jsx("span",{className:`ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs border ${o?"bg-emerald-50 border-emerald-300 text-emerald-700":"bg-amber-50 border-amber-300 text-amber-700"}`,title:s?"Saving changes to the cloud…":o?"Connected to cloud and up to date":"Connecting to cloud…",children:s?"Cloud: saving…":o?"Cloud: connected":"Cloud: loading"})}function Im(...r){return r.filter(Boolean).join(" ")}const DN=({children:r,className:t})=>j.jsx("div",{className:Im("mx-auto p-4 md:px-10 lg:px-24 xl:px-32 max-w-screen-xl",t),children:r});function _b({title:r,accent:t="amber",right:n,children:s,className:o}){const c=t==="emerald"?"text-emerald-700 dark:text-emerald-300":"text-amber-700 dark:text-amber-300";return j.jsxs("section",{className:Im("bg-white/95 dark:bg-slate-800 rounded-2xl shadow p-6 border border-slate-200 dark:border-slate-700 mb-12",o),children:[j.jsxs("div",{className:"flex items-baseline justify-between mb-4",children:[j.jsx("h2",{className:Im("text-2xl font-bold",c),children:r}),n]}),s]})}function NN(r){const t=()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia(r).matches,[n,s]=mt.useState(t);return mt.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const o=window.matchMedia(r),c=()=>s(o.matches);return o.addEventListener?o.addEventListener("change",c):o.addListener&&o.addListener(c),c(),()=>{o.removeEventListener?o.removeEventListener("change",c):o.removeListener&&o.removeListener(c)}},[r]),n}function vb(){const r=mt.useRef(null),[t,n]=mt.useState({left:!1,right:!1,top:!1,bottom:!1});return mt.useEffect(()=>{const s=r.current;if(!s)return;const o=()=>{const{scrollLeft:f,scrollTop:g,scrollWidth:p,scrollHeight:y,clientWidth:E,clientHeight:S}=s;n({left:f>0,right:f+E<p-1,top:g>0,bottom:g+S<y-1})};o(),s.addEventListener("scroll",o,{passive:!0});const c=new ResizeObserver(o);return c.observe(s),()=>{s.removeEventListener("scroll",o),c.disconnect()}},[]),{ref:r,...t}}function Tb({hook:r}){const{left:t,right:n,top:s,bottom:o}=r;return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:`pointer-events-none absolute inset-y-0 left-0 w-6 z-20 transition-opacity ${t?"opacity-100":"opacity-0"}`,"aria-hidden":!0,style:{background:"linear-gradient(90deg, var(--fade-bg, rgba(255,255,255,0.95)) 0%, rgba(255,255,255,0) 100%)"}}),j.jsx("div",{className:`pointer-events-none absolute inset-y-0 right-0 w-6 z-20 transition-opacity ${n?"opacity-100":"opacity-0"}`,"aria-hidden":!0,style:{background:"linear-gradient(270deg, var(--fade-bg, rgba(255,255,255,0.95)) 0%, rgba(255,255,255,0) 100%)"}}),j.jsx("div",{className:`pointer-events-none absolute inset-x-0 top-0 h-6 z-20 transition-opacity ${s?"opacity-100":"opacity-0"}`,"aria-hidden":!0,style:{background:"linear-gradient(180deg, var(--fade-bg, rgba(255,255,255,0.95)) 0%, rgba(255,255,255,0) 100%)"}}),j.jsx("div",{className:`pointer-events-none absolute inset-x-0 bottom-0 h-6 z-20 transition-opacity ${o?"opacity-100":"opacity-0"}`,"aria-hidden":!0,style:{background:"linear-gradient(0deg, var(--fade-bg, rgba(255,255,255,0.95)) 0%, rgba(255,255,255,0) 100%)"}}),j.jsx("div",{className:`pointer-events-none absolute top-1/2 -translate-y-1/2 left-1.5 z-20 text-xs select-none ${t?"":"opacity-0"}`,children:"←"}),j.jsx("div",{className:`pointer-events-none absolute top-1/2 -translate-y-1/2 right-1.5 z-20 text-xs select-none ${n?"":"opacity-0"}`,children:"→"}),j.jsx("div",{className:`pointer-events-none absolute left-1/2 -translate-x-1/2 top-1.5 z-20 text-xs select-none ${s?"":"opacity-0"}`,children:"↑"}),j.jsx("div",{className:`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1.5 z-20 text-xs select-none ${o?"":"opacity-0"}`,children:"↓"})]})}function ON({value:r,onChange:t,placeholder:n,className:s,onFocus:o}){const c="Enter a time as HH:MM (e.g., 07:30, 20:00) or type a note like ‘On Holiday’.";return mt.useRef(null),j.jsxs("div",{className:`flex items-stretch gap-1 ${s||""}`,children:[j.jsx("input",{type:"text",className:"flex-1 p-2 rounded bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-amber-400",value:r,onChange:f=>t(f.target.value),onFocus:o,placeholder:n,inputMode:"numeric",list:"timeHints",pattern:"^(?:\\\\d{1,2}:\\\\d{2}|On Holiday)?$",title:c,enterKeyHint:"done",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,onInvalid:f=>f.target.setCustomValidity("Use HH:MM (e.g., 07:30) or ‘On Holiday’"),onInput:f=>f.currentTarget.setCustomValidity(""),onBlur:f=>{const g=f.target.value.trim();if(!g)return;if(/^On Holiday$/i.test(g)){t("On Holiday");return}const p=g.match(/^(\d{1,2}):(\d{1,2})$/);if(!p)return;const y=Math.min(23,parseInt(p[1],10)),E=Math.min(59,parseInt(p[2],10)),S=`${String(y).padStart(2,"0")}:${String(E).padStart(2,"0")}`;S!==g&&t(S)}}),j.jsx("input",{type:"time",step:"60",className:"px-2 rounded border bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100",value:/^\d{2}:\d{2}$/.test(r)?r:"",onChange:f=>t(f.target.value),"aria-label":"Choose a time"}),j.jsxs("datalist",{id:"timeHints",children:[j.jsx("option",{value:"On Holiday"}),j.jsx("option",{value:"06:30"}),j.jsx("option",{value:"07:00"}),j.jsx("option",{value:"07:30"}),j.jsx("option",{value:"19:00"}),j.jsx("option",{value:"20:00"})]})]})}const Lc=[{label:"Earliest (am)",key:"earliest"},{label:"Latest (pm)",key:"latest"}],Eb=["Turnout","Bring In","Muck Out"],Cm=["Anna","Annabel","Lilly","Bev"],E0=["Lilly","Annabel","Anna","Bev","Lily","Swift","Tamar","Ronnie","Bruno"],MN=[...Cm],xN={earliest:"bg-emerald-200 dark:bg-emerald-700/60",latest:"bg-fuchsia-200 dark:bg-fuchsia-700/60"},Ic=r=>Object.fromEntries(r.map(t=>[t,Object.fromEntries(Lc.map(n=>[n.key,Object.fromEntries(Xi.map(s=>[s,""]))]))])),vl=r=>Object.fromEntries(r.map(t=>[t,Object.fromEntries(Eb.map(n=>[n,Object.fromEntries(Xi.map(s=>[s,""]))]))]));function VN({staffList:r,data:t,setData:n}){const s=NN("(max-width: 768px)"),[o,c]=mt.useState(null),[f,g]=mt.useState(Xi[(new Date().getDay()+6)%7]),p=vb(),y=mt.useRef(null),E=mt.useCallback(U=>{if(!U)return null;const F=U.match(/^([01]?\d|2[0-3]):([0-5]\d)$/);if(!F)return null;const J=Number(F[1]),K=Number(F[2]),st=J*60+K;return st<360||st>1260?null:st},[]),S=mt.useMemo(()=>{let U={m:1/0,staff:null,time:null},F={m:-1/0,staff:null,time:null};return r.forEach(J=>{Lc.forEach(({key:K})=>{const st=t[J]?.[K]?.[f],ut=E(st);ut!==null&&(ut<U.m&&(U={m:ut,staff:J,time:st}),ut>F.m&&(F={m:ut,staff:J,time:st}))})}),U.m<1/0&&F.m>-1/0?{first:U,last:F}:null},[r,t,f,E]),C=(U,F,J,K)=>{if(K&&/^([01]?\d|2[0-3]):([0-5]\d)$/.test(K)&&E(K)===null){const[ct,Bt]=K.split(":").map(Number),xt=ct*60+Bt<360?"06:00":"21:00";if(window.confirm(`"${K}" is outside the allowed range (06:00–21:00).
Use closest valid time: "${xt}"?`))K=xt;else return}n(st=>({...st,[U]:{...st[U]||{},[F]:{...(st[U]||{})[F]||{},[J]:K}}}))};return s?j.jsxs("section",{className:"space-y-4 p-4",children:[j.jsx("h2",{className:"text-xl font-bold text-amber-700 dark:text-amber-300",children:"Feeding Schedule"}),j.jsx("div",{className:"flex gap-1.5 mb-2 overflow-x-auto",children:Xi.map(U=>j.jsx("button",{className:`px-3 py-1 rounded-md text-sm ${U===f?"bg-emerald-600 text-white":"bg-gray-200 dark:bg-gray-700"}`,onClick:()=>g(U),children:U.slice(0,3)},U))}),S&&j.jsxs("div",{className:"px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded text-sm",children:["First: ",j.jsx("strong",{children:S.first.time})," by ",j.jsx("strong",{children:S.first.staff})," • Last:  ",j.jsx("strong",{children:S.last.time})," by ",j.jsx("strong",{children:S.last.staff})]}),r.flatMap(U=>Lc.map(F=>{const J=`${U}-${F.key}`,K=o===J;return j.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[j.jsxs("button",{className:"w-full flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800",onClick:()=>c(K?null:J),children:[j.jsx("span",{className:"font-medium text-base",children:`${U} ${F.label}`}),j.jsx("span",{children:K?"−":"+"})]}),K&&j.jsx("div",{className:"bg-white dark:bg-gray-700 p-4",children:j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsxs("span",{className:"w-20 text-sm",children:[f,":"]}),j.jsx("input",{type:"time",className:"flex-1 px-3 py-2 border rounded",value:t[U]?.[F.key]?.[f]||"",onChange:st=>C(U,F.key,f,st.target.value)})]})})]},J)}))]}):j.jsxs(_b,{title:"Feeding Schedule",accent:"amber",children:[j.jsx("div",{className:"flex gap-1.5 mb-3",children:Xi.map(U=>j.jsx("button",{className:`px-3 py-1 rounded-md text-sm ${U===f?"bg-emerald-600 text-white":"bg-gray-200 dark:bg-gray-700"}`,onClick:()=>g(U),children:U.slice(0,3)},U))}),S&&j.jsxs("div",{className:"mb-3 px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded text-sm",children:["First: ",j.jsx("strong",{children:S.first.time})," by ",j.jsx("strong",{children:S.first.staff})," • Last:  ",j.jsx("strong",{children:S.last.time})," by ",j.jsx("strong",{children:S.last.staff})]}),j.jsxs("div",{className:"relative",children:[j.jsx("div",{ref:p.ref,className:"overflow-auto max-h-[60vh] rounded-xl",children:j.jsxs("table",{className:"w-full border-collapse text-sm min-w-max",children:[j.jsx("thead",{children:j.jsxs("tr",{className:"bg-amber-100 dark:bg-amber-900 text-slate-800 dark:text-amber-100",children:[j.jsx("th",{className:"border p-2 sticky top-0 bg-inherit text-left font-semibold",children:"Staff / Time"}),j.jsx("th",{className:"border p-2 sticky top-0 bg-inherit font-semibold",children:f})]})}),j.jsx("tbody",{children:r.map(U=>Lc.map(F=>j.jsxs("tr",{className:"even:bg-amber-50/40 dark:even:bg-amber-900/30 hover:bg-slate-100 dark:hover:bg-slate-700",children:[j.jsxs("td",{className:"border p-1 font-medium whitespace-nowrap",children:[U," ",F.label]}),j.jsx("td",{className:"border p-1",children:j.jsx(ON,{value:t[U]?.[F.key]?.[f]||"",onChange:J=>C(U,F.key,f,J),placeholder:F.key==="earliest"?"06:00–21:00":"",className:xN[F.key],onFocus:()=>y.current={staff:U,typeKey:F.key,day:f}})})]},`${U}-${F.key}`)))})]})}),j.jsx(Tb,{hook:p})]})]})}function kN({horses:r,data:t,setData:n,weekLabel:s,dutyOptions:o}){const[c,f]=mt.useState(Xi[(new Date().getDay()+6)%7]),g=vb(),p=mt.useMemo(()=>Array.from(new Set(o)),[o]),y=(S,C,U,F)=>{n(J=>({...J,[S]:{...J[S]||{},[C]:{...(J[S]||{})[C]||{},[U]:F}}}))},E=mt.useMemo(()=>r.flatMap(S=>Eb.map(C=>j.jsxs("tr",{className:"group even:bg-emerald-50/40 dark:even:bg-emerald-900/30 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors",children:[j.jsxs("td",{className:"border p-1 sticky left-0 z-10 bg-white dark:bg-slate-800 font-medium whitespace-nowrap text-slate-900 dark:text-slate-100",children:[S," ",C]}),j.jsx("td",{className:"border p-1 min-w-[160px]",children:j.jsxs("select",{className:"w-full p-1 rounded bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-400",value:t[S]?.[C]?.[c]??"",onChange:U=>y(S,C,c,U.target.value),children:[j.jsx("option",{value:"",children:"—"}),p.map(U=>j.jsx("option",{value:U,children:U||"—"},U||"empty"))]})})]},`${S}-${C}-${c}`))),[r,c,t,p]);return j.jsxs(_b,{title:"Duties Rota",accent:"emerald",right:j.jsx("span",{className:"text-sm text-slate-700 dark:text-slate-300",children:s}),children:[j.jsx("div",{className:"flex gap-1.5 mb-3 overflow-x-auto",children:Xi.map(S=>j.jsx("button",{className:`px-3 py-1 rounded-md text-sm ${S===c?"bg-emerald-600 text-white":"bg-gray-200 dark:bg-gray-700"}`,onClick:()=>f(S),children:S.slice(0,3)},S))}),j.jsxs("div",{className:"relative",children:[j.jsx("div",{ref:g.ref,className:"overflow-auto max-h-[60vh] rounded-xl [-webkit-overflow-scrolling:touch]",children:j.jsxs("table",{className:"w-full border-collapse text-sm min-w-max",children:[j.jsx("thead",{children:j.jsxs("tr",{className:"bg-emerald-100 dark:bg-emerald-900 text-slate-800 dark:text-emerald-100",children:[j.jsx("th",{className:"border p-2 sticky top-0 bg-inherit text-left font-semibold",children:"Task"}),j.jsx("th",{className:"border p-2 sticky top-0 bg-inherit font-semibold",children:c})]})}),j.jsx("tbody",{children:E})]})}),j.jsx(Tb,{hook:g})]})]})}const PN=()=>typeof window<"u"&&window.matchMedia?.("(prefers-color-scheme: dark)").matches,UN=()=>localStorage.getItem("theme")||(PN()?"dark":"light");function LN(){const[r,t]=mt.useState(""),n=mt.useRef();return{show:o=>{clearTimeout(n.current),t(o),n.current=setTimeout(()=>t(""),1800)},Toast:r&&j.jsx("div",{className:"fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/80 text-white rounded-lg shadow-lg text-sm",children:r})}}function zN(){const[r,t]=mt.useState(UN);mt.useEffect(()=>{document.documentElement.classList.toggle("dark",r==="dark"),localStorage.setItem("theme",r)},[r]);const{Toast:n,show:s}=LN(),[o,c]=mt.useState(Cm),[f,g]=mt.useState(E0),[p,y]=mt.useState(MN),[E,S]=mt.useState(!1),C=mt.useMemo(()=>["",...o,...p],[o,p]),[U,F]=mt.useState(()=>Ic(Cm)),[J,K]=mt.useState(!1),[st,ut]=mt.useState(()=>vl(E0)),[ct,Bt]=mt.useState(!1),[Tt,xt]=mt.useState(yb()),O=T0(Tt),A=RN(Tt),[I,M]=mt.useState(!1),x=mt.useRef(),V=()=>{M(!0),clearTimeout(x.current),x.current=setTimeout(()=>M(!1),800)},R=mt.useMemo(()=>Yd(Wd,"schedules","lists"),[]),ie=mt.useMemo(()=>Yd(Wd,"schedules","feedingSchedule"),[]),Ft=mt.useCallback(et=>Yd(Wd,"schedules",`duties_${et}`),[]);mt.useEffect(()=>{let et;return(async()=>{try{const gt=await Rc(R);if(gt.exists()){const at=gt.data();at.staff&&c(at.staff),at.horses&&g(at.horses),at.dutyStaff&&y(at.dutyStaff)}else await Gi(R,{staff:o,horses:f,dutyStaff:p},{merge:!0});et=Xd(R,at=>{if(at.exists()){const Pt=at.data();Pt.staff&&c(Pt.staff),Pt.horses&&g(Pt.horses),Pt.dutyStaff&&y(Pt.dutyStaff),S(!0)}})}catch(gt){console.error(gt)}})(),()=>et&&et()},[R]),mt.useEffect(()=>{if(!E)return;const et=setTimeout(()=>{V(),Gi(R,{staff:o},{merge:!0}).catch(console.error)},400);return()=>clearTimeout(et)},[o,E,R]),mt.useEffect(()=>{if(!E)return;const et=setTimeout(()=>{V(),Gi(R,{horses:f},{merge:!0}).catch(console.error)},400);return()=>clearTimeout(et)},[f,E,R]),mt.useEffect(()=>{if(!E)return;const et=setTimeout(()=>{V(),Gi(R,{dutyStaff:p},{merge:!0}).catch(console.error)},400);return()=>clearTimeout(et)},[p,E,R]),mt.useEffect(()=>{let et;return(async()=>{try{const gt=await Rc(ie);gt.exists()?F(at=>({...Ic(o),...gt.data()})):await Gi(ie,Ic(o),{merge:!0}),et=Xd(ie,at=>{at.exists()&&(F(Pt=>({...Ic(o),...at.data()})),K(!0))})}catch(gt){console.error(gt)}})(),()=>et&&et()},[ie,o]),mt.useEffect(()=>{if(!J)return;const et=setTimeout(()=>{V(),Gi(ie,U,{merge:!0}).catch(console.error)},600);return()=>clearTimeout(et)},[U,J,ie]),mt.useEffect(()=>{const et=Ft(O);let gt;return(async()=>{try{const at=await Rc(et);at.exists()?ut({...vl(f),...at.data()}):await Gi(et,vl(f),{merge:!0}),Bt(!0),gt=Xd(et,()=>{},Pt=>console.error(Pt))}catch(at){console.error(at)}})(),()=>gt&&gt()},[Ft,O,f]),mt.useEffect(()=>{if(!ct)return;const et=setTimeout(()=>{Gi(Ft(O),st,{merge:!0}).catch(console.error)},600);return()=>clearTimeout(et)},[st,ct,Ft,O]);const[G,it]=mt.useState(!1),ft=()=>it(!0),kt=mt.useCallback(async et=>{it(!1);const gt=T0(new Date(Tt.getTime()-6048e5)),at=await Rc(Ft(gt));if(!at.exists())return s("No previous week");const Pt=at.data();let Vt={...vl(f),...st};if(et==="replace"&&(Vt={...vl(f),...Pt}),et==="fill"){Vt={...st};for(const Ne of Object.keys(Pt))for(const nn of Object.keys(Pt[Ne]))for(const rn of Xi)!Vt[Ne]?.[nn]?.[rn]&&Pt[Ne][nn][rn]&&(Vt[Ne]={...Vt[Ne]||{},[nn]:{...Vt[Ne]?.[nn]||{},[rn]:Pt[Ne][nn][rn]}})}ut(Vt),await Gi(Ft(O),Vt,{merge:!0}),s(et==="replace"?"Replaced week":"Filled blanks")},[st,f,O,Ft,s,Xi]),[D,Z]=mt.useState(!1),[rt,tt]=mt.useState(!1);return j.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-white via-rose-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200 transition-colors duration-300",children:[j.jsx(SN,{}),j.jsxs("header",{className:"flex items-center justify-between px-4 py-3 shadow bg-white/90 dark:bg-slate-900/90",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("button",{className:"md:hidden",onClick:()=>tt(!0),"aria-label":"Menu",children:"☰"}),j.jsx("span",{className:"text-2xl font-bold",children:"Stable Scheduler"})]}),j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("span",{className:"px-3 py-1.5 rounded-full border bg-white dark:bg-slate-800",children:A}),j.jsx(CN,{listsLoaded:E,feedingLoaded:J,dutiesLoaded:ct,saveBusy:I}),j.jsx("button",{onClick:()=>Z(!0),className:"hidden md:block px-3 py-2 border rounded-xl bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100",children:"Manage Names"}),j.jsx("button",{onClick:()=>t(et=>et==="dark"?"light":"dark"),"aria-label":"Toggle theme",className:"px-3 py-2 border rounded-xl bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-100",children:r==="dark"?"☀️":"🌙"})]})]}),j.jsxs(wN,{open:rt,onClose:()=>tt(!1),children:[j.jsx("button",{onClick:()=>{Z(!0),tt(!1)},className:"block px-3 py-2 border rounded-xl bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100",children:"Manage Names"}),j.jsx("button",{onClick:()=>t(et=>et==="dark"?"light":"dark"),className:"block px-3 py-2 border rounded-xl bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100",children:r==="dark"?"Light mode":"Dark mode"})]}),j.jsx(IN,{setWeekStart:xt,openCopyConfirm:ft}),j.jsxs(DN,{className:"space-y-10",children:[j.jsx(VN,{staffList:o,data:U,setData:F}),j.jsx(kN,{horses:f,data:st,setData:ut,weekLabel:A,dutyOptions:C})]}),j.jsxs(v0,{open:D,onClose:()=>Z(!1),children:[j.jsx("h2",{id:"edit-names-title",className:"text-xl font-bold mb-4",children:"Edit Names"}),j.jsx(tm,{title:"Owners",items:o,setItems:c,placeholder:"e.g., Alex"}),j.jsx(tm,{title:"Helpers",items:p,setItems:y,placeholder:"e.g., Bev"}),j.jsx(tm,{title:"Horses",items:f,setItems:g,placeholder:"e.g., Bella"})]}),j.jsxs(v0,{open:G,onClose:()=>it(!1),children:[j.jsx("h2",{id:"copy-week-title",className:"text-lg font-semibold mb-2",children:"Copy previous week?"}),j.jsx("p",{className:"text-sm text-slate-700 dark:text-slate-300 mb-4",children:"This can overwrite the current week’s duties."}),j.jsxs("div",{className:"flex flex-col gap-2",children:[j.jsx("button",{className:"px-3 py-2 rounded bg-emerald-600 text-white",onClick:()=>kt("replace"),children:"Replace current week"}),j.jsx("button",{className:"px-3 py-2 rounded border",onClick:()=>kt("fill"),children:"Fill empty cells only"}),j.jsx("button",{className:"px-3 py-2 rounded border",onClick:()=>it(!1),children:"Cancel"})]})]}),n]})}eS.createRoot(document.getElementById("root")).render(j.jsx(mt.StrictMode,{children:j.jsx(zN,{})}));
