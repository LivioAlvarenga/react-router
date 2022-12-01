function zf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),Af=Symbol.for("react.portal"),Nf=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),bf=Symbol.for("react.provider"),Lf=Symbol.for("react.context"),Ff=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),_f=Symbol.for("react.memo"),jf=Symbol.for("react.lazy"),nu=Symbol.iterator;function qf(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ld=Object.assign,sd={};function sr(e,n,t){this.props=e,this.context=n,this.refs=sd,this.updater=t||ad}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ud(){}ud.prototype=sr.prototype;function $l(e,n,t){this.props=e,this.context=n,this.refs=sd,this.updater=t||ad}var Wl=$l.prototype=new ud;Wl.constructor=$l;ld(Wl,sr.prototype);Wl.isPureReactComponent=!0;var tu=Array.isArray,cd=Object.prototype.hasOwnProperty,Jl={current:null},dd={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)cd.call(n,r)&&!dd.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:lo,type:e,key:i,ref:a,props:o,_owner:Jl.current}}function Rf(e,n){return{$$typeof:lo,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===lo}function Mf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ru=/\/+/g;function Xi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Mf(""+e.key):n.toString(36)}function _o(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case lo:case Af:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Xi(a,0):r,tu(o)?(t="",e!=null&&(t=e.replace(ru,"$&/")+"/"),_o(o,n,t,"",function(u){return u})):o!=null&&(Ql(o)&&(o=Rf(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ru,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",tu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Xi(i,l);a+=_o(i,n,t,s,o)}else if(s=qf(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Xi(i,l++),a+=_o(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function go(e,n,t){if(e==null)return e;var r=[],o=0;return _o(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Df(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},jo={transition:null},Bf={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:jo,ReactCurrentOwner:Jl};W.Children={map:go,forEach:function(e,n,t){go(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return go(e,function(){n++}),n},toArray:function(e){return go(e,function(n){return n})||[]},only:function(e){if(!Ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=sr;W.Fragment=Nf;W.Profiler=Of;W.PureComponent=$l;W.StrictMode=Tf;W.Suspense=If;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bf;W.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ld({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Jl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)cd.call(n,s)&&!dd.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:lo,type:e.type,key:o,ref:i,props:r,_owner:a}};W.createContext=function(e){return e={$$typeof:Lf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bf,_context:e},e.Consumer=e};W.createElement=pd;W.createFactory=function(e){var n=pd.bind(null,e);return n.type=e,n};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Ff,render:e}};W.isValidElement=Ql;W.lazy=function(e){return{$$typeof:jf,_payload:{_status:-1,_result:e},_init:Df}};W.memo=function(e,n){return{$$typeof:_f,type:e,compare:n===void 0?null:n}};W.startTransition=function(e){var n=jo.transition;jo.transition={};try{e()}finally{jo.transition=n}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,n){return _e.current.useCallback(e,n)};W.useContext=function(e){return _e.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};W.useEffect=function(e,n){return _e.current.useEffect(e,n)};W.useId=function(){return _e.current.useId()};W.useImperativeHandle=function(e,n,t){return _e.current.useImperativeHandle(e,n,t)};W.useInsertionEffect=function(e,n){return _e.current.useInsertionEffect(e,n)};W.useLayoutEffect=function(e,n){return _e.current.useLayoutEffect(e,n)};W.useMemo=function(e,n){return _e.current.useMemo(e,n)};W.useReducer=function(e,n,t){return _e.current.useReducer(e,n,t)};W.useRef=function(e){return _e.current.useRef(e)};W.useState=function(e){return _e.current.useState(e)};W.useSyncExternalStore=function(e,n,t){return _e.current.useSyncExternalStore(e,n,t)};W.useTransition=function(){return _e.current.useTransition()};W.version="18.2.0";(function(e){e.exports=W})(U);const Or=id(U.exports),ja=zf({__proto__:null,default:Or},[U.exports]);var qa={},md={exports:{}},Xe={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,j){var _=b.length;b.push(j);e:for(;0<_;){var y=_-1>>>1,x=b[y];if(0<o(x,j))b[y]=j,b[_]=x,_=y;else break e}}function t(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var j=b[0],_=b.pop();if(_!==j){b[0]=_;e:for(var y=0,x=b.length,mn=x>>>1;y<mn;){var $e=2*(y+1)-1,kn=b[$e],Y=$e+1,Le=b[Y];if(0>o(kn,_))Y<x&&0>o(Le,kn)?(b[y]=Le,b[Y]=_,y=Y):(b[y]=kn,b[$e]=_,y=$e);else if(Y<x&&0>o(Le,_))b[y]=Le,b[Y]=_,y=Y;else break e}}return j}function o(b,j){var _=b.sortIndex-j.sortIndex;return _!==0?_:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,p=null,m=3,h=!1,v=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var j=t(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=b)r(u),j.sortIndex=j.expirationTime,n(s,j);else break;j=t(u)}}function S(b){if(w=!1,g(b),!v)if(t(s)!==null)v=!0,Re(z);else{var j=t(u);j!==null&&be(S,j.startTime-b)}}function z(b,j){v=!1,w&&(w=!1,d(O),O=-1),h=!0;var _=m;try{for(g(j),p=t(s);p!==null&&(!(p.expirationTime>j)||b&&!F());){var y=p.callback;if(typeof y=="function"){p.callback=null,m=p.priorityLevel;var x=y(p.expirationTime<=j);j=e.unstable_now(),typeof x=="function"?p.callback=x:p===t(s)&&r(s),g(j)}else r(s);p=t(s)}if(p!==null)var mn=!0;else{var $e=t(u);$e!==null&&be(S,$e.startTime-j),mn=!1}return mn}finally{p=null,m=_,h=!1}}var k=!1,E=null,O=-1,R=5,M=-1;function F(){return!(e.unstable_now()-M<R)}function q(){if(E!==null){var b=e.unstable_now();M=b;var j=!0;try{j=E(!0,b)}finally{j?V():(k=!1,E=null)}}else k=!1}var V;if(typeof f=="function")V=function(){f(q)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,qe=he.port2;he.port1.onmessage=q,V=function(){qe.postMessage(null)}}else V=function(){A(q,0)};function Re(b){E=b,k||(k=!0,V())}function be(b,j){O=A(function(){b(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,Re(z))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var _=m;m=j;try{return b()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var _=m;m=b;try{return j()}finally{m=_}},e.unstable_scheduleCallback=function(b,j,_){var y=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?y+_:y):_=y,b){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=_+x,b={id:c++,callback:j,priorityLevel:b,startTime:_,expirationTime:x,sortIndex:-1},_>y?(b.sortIndex=_,n(u,b),t(s)===null&&b===t(u)&&(w?(d(O),O=-1):w=!0,be(S,_-y))):(b.sortIndex=x,n(s,b),v||h||(v=!0,Re(z))),b},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(b){var j=m;return function(){var _=m;m=j;try{return b.apply(this,arguments)}finally{m=_}}}})(hd);(function(e){e.exports=hd})(fd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=U.exports,Ye=fd.exports;function N(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vd=new Set,Vr={};function zt(e,n){nr(e,n),nr(e+"Capture",n)}function nr(e,n){for(Vr[e]=n,e=0;e<n.length;e++)vd.add(n[e])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ra=Object.prototype.hasOwnProperty,Vf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},iu={};function Uf(e){return Ra.call(iu,e)?!0:Ra.call(ou,e)?!1:Vf.test(e)?iu[e]=!0:(ou[e]=!0,!1)}function Hf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $f(e,n,t,r){if(n===null||typeof n>"u"||Hf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function je(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Pe[n]=new je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kl=/[\-:]([a-z])/g;function Gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Kl,Gl);Pe[n]=new je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Kl,Gl);Pe[n]=new je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Kl,Gl);Pe[n]=new je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yl(e,n,t,r){var o=Pe.hasOwnProperty(n)?Pe[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($f(n,t,o,r)&&(t=null),r||o===null?Uf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Vn=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),_t=Symbol.for("react.portal"),jt=Symbol.for("react.fragment"),Xl=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),xd=Symbol.for("react.context"),Zl=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Ba=Symbol.for("react.suspense_list"),es=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),wd=Symbol.for("react.offscreen"),au=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Zi;function zr(e){if(Zi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Zi=n&&n[1]||""}return`
`+Zi+e}var ea=!1;function na(e,n){if(!e||ea)return"";ea=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ea=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?zr(e):""}function Wf(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=na(e.type,!1),e;case 11:return e=na(e.type.render,!1),e;case 1:return e=na(e.type,!0),e;default:return""}}function Va(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jt:return"Fragment";case _t:return"Portal";case Ma:return"Profiler";case Xl:return"StrictMode";case Da:return"Suspense";case Ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xd:return(e.displayName||"Context")+".Consumer";case yd:return(e._context.displayName||"Context")+".Provider";case Zl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case es:return n=e.displayName||null,n!==null?n:Va(e.type)||"Memo";case Hn:n=e._payload,e=e._init;try{return Va(e(n))}catch{}}return null}function Jf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Va(n);case 8:return n===Xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function at(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qf(e){var n=kd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yo(e){e._valueTracker||(e._valueTracker=Qf(e))}function Sd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=kd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ua(e,n){var t=n.checked;return le({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function lu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=at(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Cd(e,n){n=n.checked,n!=null&&Yl(e,"checked",n,!1)}function Ha(e,n){Cd(e,n);var t=at(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?$a(e,n.type,t):n.hasOwnProperty("defaultValue")&&$a(e,n.type,at(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function su(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $a(e,n,t){(n!=="number"||Go(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ar=Array.isArray;function Jt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+at(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Wa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(N(91));return le({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(N(92));if(Ar(t)){if(1<t.length)throw Error(N(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:at(t)}}function Ed(e,n){var t=at(n.value),r=at(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function cu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ja(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xo,zd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ur(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kf=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){Kf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),br[n]=br[e]})});function Ad(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||br.hasOwnProperty(e)&&br[e]?(""+n).trim():n+"px"}function Nd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Ad(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Gf=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(e,n){if(n){if(Gf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(N(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(N(61))}if(n.style!=null&&typeof n.style!="object")throw Error(N(62))}}function Ka(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ga=null;function ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,Qt=null,Kt=null;function du(e){if(e=co(e)){if(typeof Ya!="function")throw Error(N(280));var n=e.stateNode;n&&(n=Ei(n),Ya(e.stateNode,e.type,n))}}function Td(e){Qt?Kt?Kt.push(e):Kt=[e]:Qt=e}function Od(){if(Qt){var e=Qt,n=Kt;if(Kt=Qt=null,du(e),n)for(e=0;e<n.length;e++)du(n[e])}}function bd(e,n){return e(n)}function Ld(){}var ta=!1;function Fd(e,n,t){if(ta)return e(n,t);ta=!0;try{return bd(e,n,t)}finally{ta=!1,(Qt!==null||Kt!==null)&&(Ld(),Od())}}function Hr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ei(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(N(231,n,typeof t));return t}var Xa=!1;if(Rn)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Xa=!1}function Yf(e,n,t,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var Lr=!1,Yo=null,Xo=!1,Za=null,Xf={onError:function(e){Lr=!0,Yo=e}};function Zf(e,n,t,r,o,i,a,l,s){Lr=!1,Yo=null,Yf.apply(Xf,arguments)}function eh(e,n,t,r,o,i,a,l,s){if(Zf.apply(this,arguments),Lr){if(Lr){var u=Yo;Lr=!1,Yo=null}else throw Error(N(198));Xo||(Xo=!0,Za=u)}}function At(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Id(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function pu(e){if(At(e)!==e)throw Error(N(188))}function nh(e){var n=e.alternate;if(!n){if(n=At(e),n===null)throw Error(N(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return pu(o),e;if(i===r)return pu(o),n;i=i.sibling}throw Error(N(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(N(189))}}if(t.alternate!==r)throw Error(N(190))}if(t.tag!==3)throw Error(N(188));return t.stateNode.current===t?e:n}function _d(e){return e=nh(e),e!==null?jd(e):null}function jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=jd(e);if(n!==null)return n;e=e.sibling}return null}var qd=Ye.unstable_scheduleCallback,mu=Ye.unstable_cancelCallback,th=Ye.unstable_shouldYield,rh=Ye.unstable_requestPaint,ce=Ye.unstable_now,oh=Ye.unstable_getCurrentPriorityLevel,ts=Ye.unstable_ImmediatePriority,Rd=Ye.unstable_UserBlockingPriority,Zo=Ye.unstable_NormalPriority,ih=Ye.unstable_LowPriority,Md=Ye.unstable_IdlePriority,wi=null,An=null;function ah(e){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:uh,lh=Math.log,sh=Math.LN2;function uh(e){return e>>>=0,e===0?32:31-(lh(e)/sh|0)|0}var wo=64,ko=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ei(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=Nr(l):(i&=a,i!==0&&(r=Nr(i)))}else a=t&~o,a!==0?r=Nr(a):i!==0&&(r=Nr(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&o)===0&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-yn(n),o=1<<t,r|=e[t],n&=~o;return r}function ch(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-yn(i),l=1<<a,s=o[a];s===-1?((l&t)===0||(l&r)!==0)&&(o[a]=ch(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function el(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dd(){var e=wo;return wo<<=1,(wo&4194240)===0&&(wo=64),e}function ra(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function so(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-yn(n),e[n]=t}function ph(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-yn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function rs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-yn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var Q=0;function Bd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vd,os,Ud,Hd,$d,nl=!1,So=[],Yn=null,Xn=null,Zn=null,$r=new Map,Wr=new Map,Wn=[],mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,n){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":$r.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(n.pointerId)}}function xr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=co(n),n!==null&&os(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function fh(e,n,t,r,o){switch(n){case"focusin":return Yn=xr(Yn,e,n,t,r,o),!0;case"dragenter":return Xn=xr(Xn,e,n,t,r,o),!0;case"mouseover":return Zn=xr(Zn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return $r.set(i,xr($r.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Wr.set(i,xr(Wr.get(i)||null,e,n,t,r,o)),!0}return!1}function Wd(e){var n=gt(e.target);if(n!==null){var t=At(n);if(t!==null){if(n=t.tag,n===13){if(n=Id(t),n!==null){e.blockedOn=n,$d(e.priority,function(){Ud(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=tl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ga=r,t.target.dispatchEvent(r),Ga=null}else return n=co(t),n!==null&&os(n),e.blockedOn=t,!1;n.shift()}return!0}function hu(e,n,t){qo(e)&&t.delete(n)}function hh(){nl=!1,Yn!==null&&qo(Yn)&&(Yn=null),Xn!==null&&qo(Xn)&&(Xn=null),Zn!==null&&qo(Zn)&&(Zn=null),$r.forEach(hu),Wr.forEach(hu)}function wr(e,n){e.blockedOn===n&&(e.blockedOn=null,nl||(nl=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,hh)))}function Jr(e){function n(o){return wr(o,e)}if(0<So.length){wr(So[0],e);for(var t=1;t<So.length;t++){var r=So[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Yn!==null&&wr(Yn,e),Xn!==null&&wr(Xn,e),Zn!==null&&wr(Zn,e),$r.forEach(n),Wr.forEach(n),t=0;t<Wn.length;t++)r=Wn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wn.length&&(t=Wn[0],t.blockedOn===null);)Wd(t),t.blockedOn===null&&Wn.shift()}var Gt=Vn.ReactCurrentBatchConfig,ni=!0;function gh(e,n,t,r){var o=Q,i=Gt.transition;Gt.transition=null;try{Q=1,is(e,n,t,r)}finally{Q=o,Gt.transition=i}}function vh(e,n,t,r){var o=Q,i=Gt.transition;Gt.transition=null;try{Q=4,is(e,n,t,r)}finally{Q=o,Gt.transition=i}}function is(e,n,t,r){if(ni){var o=tl(e,n,t,r);if(o===null)ma(e,n,r,ti,t),fu(e,r);else if(fh(o,e,n,t,r))r.stopPropagation();else if(fu(e,r),n&4&&-1<mh.indexOf(e)){for(;o!==null;){var i=co(o);if(i!==null&&Vd(i),i=tl(e,n,t,r),i===null&&ma(e,n,r,ti,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else ma(e,n,r,null,t)}}var ti=null;function tl(e,n,t,r){if(ti=null,e=ns(r),e=gt(e),e!==null)if(n=At(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Id(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ti=e,null}function Jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oh()){case ts:return 1;case Rd:return 4;case Zo:case ih:return 16;case Md:return 536870912;default:return 16}default:return 16}}var Qn=null,as=null,Ro=null;function Qd(){if(Ro)return Ro;var e,n=as,t=n.length,r,o="value"in Qn?Qn.value:Qn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return Ro=o.slice(e,1<r?1-r:void 0)}function Mo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function gu(){return!1}function Ze(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Co:gu,this.isPropagationStopped=gu,this}return le(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),n}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=Ze(ur),uo=le({},ur,{view:0,detail:0}),yh=Ze(uo),oa,ia,kr,ki=le({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(oa=e.screenX-kr.screenX,ia=e.screenY-kr.screenY):ia=oa=0,kr=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:ia}}),vu=Ze(ki),xh=le({},ki,{dataTransfer:0}),wh=Ze(xh),kh=le({},uo,{relatedTarget:0}),aa=Ze(kh),Sh=le({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Ch=Ze(Sh),Eh=le({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ph=Ze(Eh),zh=le({},ur,{data:0}),yu=Ze(zh),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Th[e])?!!n[e]:!1}function ss(){return Oh}var bh=le({},uo,{key:function(e){if(e.key){var n=Ah[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lh=Ze(bh),Fh=le({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Ze(Fh),Ih=le({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),_h=Ze(Ih),jh=le({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=Ze(jh),Rh=le({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mh=Ze(Rh),Dh=[9,13,27,32],us=Rn&&"CompositionEvent"in window,Fr=null;Rn&&"documentMode"in document&&(Fr=document.documentMode);var Bh=Rn&&"TextEvent"in window&&!Fr,Kd=Rn&&(!us||Fr&&8<Fr&&11>=Fr),wu=String.fromCharCode(32),ku=!1;function Gd(e,n){switch(e){case"keyup":return Dh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Vh(e,n){switch(e){case"compositionend":return Yd(n);case"keypress":return n.which!==32?null:(ku=!0,wu);case"textInput":return e=n.data,e===wu&&ku?null:e;default:return null}}function Uh(e,n){if(qt)return e==="compositionend"||!us&&Gd(e,n)?(e=Qd(),Ro=as=Qn=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kd&&n.locale!=="ko"?null:n.data;default:return null}}var Hh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Hh[e.type]:n==="textarea"}function Xd(e,n,t,r){Td(r),n=ri(n,"onChange"),0<n.length&&(t=new ls("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ir=null,Qr=null;function $h(e){up(e,0)}function Si(e){var n=Dt(e);if(Sd(n))return e}function Wh(e,n){if(e==="change")return n}var Zd=!1;if(Rn){var la;if(Rn){var sa="oninput"in document;if(!sa){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),sa=typeof Cu.oninput=="function"}la=sa}else la=!1;Zd=la&&(!document.documentMode||9<document.documentMode)}function Eu(){Ir&&(Ir.detachEvent("onpropertychange",ep),Qr=Ir=null)}function ep(e){if(e.propertyName==="value"&&Si(Qr)){var n=[];Xd(n,Qr,e,ns(e)),Fd($h,n)}}function Jh(e,n,t){e==="focusin"?(Eu(),Ir=n,Qr=t,Ir.attachEvent("onpropertychange",ep)):e==="focusout"&&Eu()}function Qh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Qr)}function Kh(e,n){if(e==="click")return Si(n)}function Gh(e,n){if(e==="input"||e==="change")return Si(n)}function Yh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:Yh;function Kr(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Ra.call(n,o)||!wn(e[o],n[o]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,n){var t=Pu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pu(t)}}function np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tp(){for(var e=window,n=Go();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Go(e.document)}return n}function cs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Xh(e){var n=tp(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&np(t.ownerDocument.documentElement,t)){if(r!==null&&cs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=zu(t,i);var a=zu(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zh=Rn&&"documentMode"in document&&11>=document.documentMode,Rt=null,rl=null,_r=null,ol=!1;function Au(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ol||Rt==null||Rt!==Go(r)||(r=Rt,"selectionStart"in r&&cs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&Kr(_r,r)||(_r=r,r=ri(rl,"onSelect"),0<r.length&&(n=new ls("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Rt)))}function Eo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Mt={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},ua={},rp={};Rn&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Mt.animationend.animation,delete Mt.animationiteration.animation,delete Mt.animationstart.animation),"TransitionEvent"in window||delete Mt.transitionend.transition);function Ci(e){if(ua[e])return ua[e];if(!Mt[e])return e;var n=Mt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in rp)return ua[e]=n[t];return e}var op=Ci("animationend"),ip=Ci("animationiteration"),ap=Ci("animationstart"),lp=Ci("transitionend"),sp=new Map,Nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function st(e,n){sp.set(e,n),zt(n,[e])}for(var ca=0;ca<Nu.length;ca++){var da=Nu[ca],eg=da.toLowerCase(),ng=da[0].toUpperCase()+da.slice(1);st(eg,"on"+ng)}st(op,"onAnimationEnd");st(ip,"onAnimationIteration");st(ap,"onAnimationStart");st("dblclick","onDoubleClick");st("focusin","onFocus");st("focusout","onBlur");st(lp,"onTransitionEnd");nr("onMouseEnter",["mouseout","mouseover"]);nr("onMouseLeave",["mouseout","mouseover"]);nr("onPointerEnter",["pointerout","pointerover"]);nr("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function Tu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,eh(r,n,void 0,e),e.currentTarget=null}function up(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Tu(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Tu(o,l,u),i=s}}}if(Xo)throw e=Za,Xo=!1,Za=null,e}function ne(e,n){var t=n[ul];t===void 0&&(t=n[ul]=new Set);var r=e+"__bubble";t.has(r)||(cp(n,e,2,!1),t.add(r))}function pa(e,n,t){var r=0;n&&(r|=4),cp(t,e,r,n)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Po]){e[Po]=!0,vd.forEach(function(t){t!=="selectionchange"&&(tg.has(t)||pa(t,!1,e),pa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Po]||(n[Po]=!0,pa("selectionchange",!1,n))}}function cp(e,n,t,r){switch(Jd(n)){case 1:var o=gh;break;case 4:o=vh;break;default:o=is}t=o.bind(null,n,t,e),o=void 0,!Xa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function ma(e,n,t,r,o){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=gt(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Fd(function(){var u=i,c=ns(t),p=[];e:{var m=sp.get(e);if(m!==void 0){var h=ls,v=e;switch(e){case"keypress":if(Mo(t)===0)break e;case"keydown":case"keyup":h=Lh;break;case"focusin":v="focus",h=aa;break;case"focusout":v="blur",h=aa;break;case"beforeblur":case"afterblur":h=aa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=_h;break;case op:case ip:case ap:h=Ch;break;case lp:h=qh;break;case"scroll":h=yh;break;case"wheel":h=Mh;break;case"copy":case"cut":case"paste":h=Ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=xu}var w=(n&4)!==0,A=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var f=u,g;f!==null;){g=f;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=Hr(f,d),S!=null&&w.push(Yr(f,S,g)))),A)break;f=f.return}0<w.length&&(m=new h(m,v,null,t,c),p.push({event:m,listeners:w}))}}if((n&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&t!==Ga&&(v=t.relatedTarget||t.fromElement)&&(gt(v)||v[Mn]))break e;if((h||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,h?(v=t.relatedTarget||t.toElement,h=u,v=v?gt(v):null,v!==null&&(A=At(v),v!==A||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=u),h!==v)){if(w=vu,S="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=xu,S="onPointerLeave",d="onPointerEnter",f="pointer"),A=h==null?m:Dt(h),g=v==null?m:Dt(v),m=new w(S,f+"leave",h,t,c),m.target=A,m.relatedTarget=g,S=null,gt(c)===u&&(w=new w(d,f+"enter",v,t,c),w.target=g,w.relatedTarget=A,S=w),A=S,h&&v)n:{for(w=h,d=v,f=0,g=w;g;g=Ft(g))f++;for(g=0,S=d;S;S=Ft(S))g++;for(;0<f-g;)w=Ft(w),f--;for(;0<g-f;)d=Ft(d),g--;for(;f--;){if(w===d||d!==null&&w===d.alternate)break n;w=Ft(w),d=Ft(d)}w=null}else w=null;h!==null&&Ou(p,m,h,w,!1),v!==null&&A!==null&&Ou(p,A,v,w,!0)}}e:{if(m=u?Dt(u):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var z=Wh;else if(Su(m))if(Zd)z=Gh;else{z=Qh;var k=Jh}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=Kh);if(z&&(z=z(e,u))){Xd(p,z,t,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&$a(m,"number",m.value)}switch(k=u?Dt(u):window,e){case"focusin":(Su(k)||k.contentEditable==="true")&&(Rt=k,rl=u,_r=null);break;case"focusout":_r=rl=Rt=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,Au(p,t,c);break;case"selectionchange":if(Zh)break;case"keydown":case"keyup":Au(p,t,c)}var E;if(us)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else qt?Gd(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(Kd&&t.locale!=="ko"&&(qt||O!=="onCompositionStart"?O==="onCompositionEnd"&&qt&&(E=Qd()):(Qn=c,as="value"in Qn?Qn.value:Qn.textContent,qt=!0)),k=ri(u,O),0<k.length&&(O=new yu(O,e,null,t,c),p.push({event:O,listeners:k}),E?O.data=E:(E=Yd(t),E!==null&&(O.data=E)))),(E=Bh?Vh(e,t):Uh(e,t))&&(u=ri(u,"onBeforeInput"),0<u.length&&(c=new yu("onBeforeInput","beforeinput",null,t,c),p.push({event:c,listeners:u}),c.data=E))}up(p,n)})}function Yr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ri(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Hr(e,t),i!=null&&r.unshift(Yr(e,i,o)),i=Hr(e,n),i!=null&&r.push(Yr(e,i,o))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Hr(t,i),s!=null&&a.unshift(Yr(t,s,l))):o||(s=Hr(t,i),s!=null&&a.push(Yr(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var rg=/\r\n?/g,og=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(rg,`
`).replace(og,"")}function zo(e,n,t){if(n=bu(n),bu(e)!==n&&t)throw Error(N(425))}function oi(){}var il=null,al=null;function ll(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sl=typeof setTimeout=="function"?setTimeout:void 0,ig=typeof clearTimeout=="function"?clearTimeout:void 0,Lu=typeof Promise=="function"?Promise:void 0,ag=typeof queueMicrotask=="function"?queueMicrotask:typeof Lu<"u"?function(e){return Lu.resolve(null).then(e).catch(lg)}:sl;function lg(e){setTimeout(function(){throw e})}function fa(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Jr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Jr(n)}function et(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),Pn="__reactFiber$"+cr,Xr="__reactProps$"+cr,Mn="__reactContainer$"+cr,ul="__reactEvents$"+cr,sg="__reactListeners$"+cr,ug="__reactHandles$"+cr;function gt(e){var n=e[Pn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[Pn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Fu(e);e!==null;){if(t=e[Pn])return t;e=Fu(e)}return n}e=t,t=e.parentNode}return null}function co(e){return e=e[Pn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ei(e){return e[Xr]||null}var cl=[],Bt=-1;function ut(e){return{current:e}}function re(e){0>Bt||(e.current=cl[Bt],cl[Bt]=null,Bt--)}function Z(e,n){Bt++,cl[Bt]=e.current,e.current=n}var lt={},Te=ut(lt),Ve=ut(!1),kt=lt;function tr(e,n){var t=e.type.contextTypes;if(!t)return lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function ii(){re(Ve),re(Te)}function Iu(e,n,t){if(Te.current!==lt)throw Error(N(168));Z(Te,n),Z(Ve,t)}function dp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(N(108,Jf(e)||"Unknown",o));return le({},t,r)}function ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||lt,kt=Te.current,Z(Te,e),Z(Ve,Ve.current),!0}function _u(e,n,t){var r=e.stateNode;if(!r)throw Error(N(169));t?(e=dp(e,n,kt),r.__reactInternalMemoizedMergedChildContext=e,re(Ve),re(Te),Z(Te,e)):re(Ve),Z(Ve,t)}var Fn=null,Pi=!1,ha=!1;function pp(e){Fn===null?Fn=[e]:Fn.push(e)}function cg(e){Pi=!0,pp(e)}function ct(){if(!ha&&Fn!==null){ha=!0;var e=0,n=Q;try{var t=Fn;for(Q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Fn=null,Pi=!1}catch(o){throw Fn!==null&&(Fn=Fn.slice(e+1)),qd(ts,ct),o}finally{Q=n,ha=!1}}return null}var Vt=[],Ut=0,li=null,si=0,nn=[],tn=0,St=null,In=1,_n="";function mt(e,n){Vt[Ut++]=si,Vt[Ut++]=li,li=e,si=n}function mp(e,n,t){nn[tn++]=In,nn[tn++]=_n,nn[tn++]=St,St=e;var r=In;e=_n;var o=32-yn(r)-1;r&=~(1<<o),t+=1;var i=32-yn(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,In=1<<32-yn(n)+o|t<<o|r,_n=i+e}else In=1<<i|t<<o|r,_n=e}function ds(e){e.return!==null&&(mt(e,1),mp(e,1,0))}function ps(e){for(;e===li;)li=Vt[--Ut],Vt[Ut]=null,si=Vt[--Ut],Vt[Ut]=null;for(;e===St;)St=nn[--tn],nn[tn]=null,_n=nn[--tn],nn[tn]=null,In=nn[--tn],nn[tn]=null}var Ge=null,Qe=null,oe=!1,vn=null;function fp(e,n){var t=on(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ju(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ge=e,Qe=et(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ge=e,Qe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=St!==null?{id:In,overflow:_n}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=on(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ge=e,Qe=null,!0):!1;default:return!1}}function dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(oe){var n=Qe;if(n){var t=n;if(!ju(e,n)){if(dl(e))throw Error(N(418));n=et(t.nextSibling);var r=Ge;n&&ju(e,n)?fp(r,t):(e.flags=e.flags&-4097|2,oe=!1,Ge=e)}}else{if(dl(e))throw Error(N(418));e.flags=e.flags&-4097|2,oe=!1,Ge=e}}}function qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Ao(e){if(e!==Ge)return!1;if(!oe)return qu(e),oe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ll(e.type,e.memoizedProps)),n&&(n=Qe)){if(dl(e))throw hp(),Error(N(418));for(;n;)fp(e,n),n=et(n.nextSibling)}if(qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Qe=et(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Qe=null}}else Qe=Ge?et(e.stateNode.nextSibling):null;return!0}function hp(){for(var e=Qe;e;)e=et(e.nextSibling)}function rr(){Qe=Ge=null,oe=!1}function ms(e){vn===null?vn=[e]:vn.push(e)}var dg=Vn.ReactCurrentBatchConfig;function hn(e,n){if(e&&e.defaultProps){n=le({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var ui=ut(null),ci=null,Ht=null,fs=null;function hs(){fs=Ht=ci=null}function gs(e){var n=ui.current;re(ui),e._currentValue=n}function ml(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yt(e,n){ci=e,fs=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Be=!0),e.firstContext=null)}function sn(e){var n=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(ci===null)throw Error(N(308));Ht=e,ci.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var vt=null;function vs(e){vt===null?vt=[e]:vt.push(e)}function gp(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,vs(n)):(t.next=o.next,o.next=t),n.interleaved=t,Dn(e,r)}function Dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var $n=!1;function ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function nt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(J&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Dn(e,t)}return o=r.interleaved,o===null?(n.next=n,vs(r)):(n.next=o.next,o.next=n),r.interleaved=n,Dn(e,t)}function Do(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,rs(e,t)}}function Ru(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function di(e,n,t,r){var o=e.updateQueue;$n=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;a=0,c=u=s=null,l=i;do{var m=l.lane,h=l.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(m=n,h=t,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(h,p,m);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(h,p,m):v,m==null)break e;p=le({},p,m);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else h={eventTime:h,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,s=p):c=c.next=h,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(c===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Et|=a,e.lanes=a,e.memoizedState=p}}function Mu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var yp=new gd.Component().refs;function fl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:le({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zi={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ie(),o=rt(e),i=qn(r,o);i.payload=n,t!=null&&(i.callback=t),n=nt(e,i,o),n!==null&&(xn(n,e,o,r),Do(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ie(),o=rt(e),i=qn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=nt(e,i,o),n!==null&&(xn(n,e,o,r),Do(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ie(),r=rt(e),o=qn(t,r);o.tag=2,n!=null&&(o.callback=n),n=nt(e,o,r),n!==null&&(xn(n,e,r,t),Do(n,e,r))}};function Du(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Kr(t,r)||!Kr(o,i):!0}function xp(e,n,t){var r=!1,o=lt,i=n.contextType;return typeof i=="object"&&i!==null?i=sn(i):(o=Ue(n)?kt:Te.current,r=n.contextTypes,i=(r=r!=null)?tr(e,o):lt),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Bu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&zi.enqueueReplaceState(n,n.state,null)}function hl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=yp,ys(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=sn(i):(i=Ue(n)?kt:Te.current,o.context=tr(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(fl(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&zi.enqueueReplaceState(o,o.state,null),di(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(N(309));var r=t.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;l===yp&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(N(284));if(!t._owner)throw Error(N(290,e))}return e}function No(e,n){throw e=Object.prototype.toString.call(n),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Vu(e){var n=e._init;return n(e._payload)}function wp(e){function n(d,f){if(e){var g=d.deletions;g===null?(d.deletions=[f],d.flags|=16):g.push(f)}}function t(d,f){if(!e)return null;for(;f!==null;)n(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function o(d,f){return d=ot(d,f),d.index=0,d.sibling=null,d}function i(d,f,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<f?(d.flags|=2,f):g):(d.flags|=2,f)):(d.flags|=1048576,f)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,f,g,S){return f===null||f.tag!==6?(f=Sa(g,d.mode,S),f.return=d,f):(f=o(f,g),f.return=d,f)}function s(d,f,g,S){var z=g.type;return z===jt?c(d,f,g.props.children,S,g.key):f!==null&&(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Hn&&Vu(z)===f.type)?(S=o(f,g.props),S.ref=Sr(d,f,g),S.return=d,S):(S=Wo(g.type,g.key,g.props,null,d.mode,S),S.ref=Sr(d,f,g),S.return=d,S)}function u(d,f,g,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ca(g,d.mode,S),f.return=d,f):(f=o(f,g.children||[]),f.return=d,f)}function c(d,f,g,S,z){return f===null||f.tag!==7?(f=wt(g,d.mode,S,z),f.return=d,f):(f=o(f,g),f.return=d,f)}function p(d,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Sa(""+f,d.mode,g),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vo:return g=Wo(f.type,f.key,f.props,null,d.mode,g),g.ref=Sr(d,null,f),g.return=d,g;case _t:return f=Ca(f,d.mode,g),f.return=d,f;case Hn:var S=f._init;return p(d,S(f._payload),g)}if(Ar(f)||vr(f))return f=wt(f,d.mode,g,null),f.return=d,f;No(d,f)}return null}function m(d,f,g,S){var z=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return z!==null?null:l(d,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vo:return g.key===z?s(d,f,g,S):null;case _t:return g.key===z?u(d,f,g,S):null;case Hn:return z=g._init,m(d,f,z(g._payload),S)}if(Ar(g)||vr(g))return z!==null?null:c(d,f,g,S,null);No(d,g)}return null}function h(d,f,g,S,z){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,l(f,d,""+S,z);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vo:return d=d.get(S.key===null?g:S.key)||null,s(f,d,S,z);case _t:return d=d.get(S.key===null?g:S.key)||null,u(f,d,S,z);case Hn:var k=S._init;return h(d,f,g,k(S._payload),z)}if(Ar(S)||vr(S))return d=d.get(g)||null,c(f,d,S,z,null);No(f,S)}return null}function v(d,f,g,S){for(var z=null,k=null,E=f,O=f=0,R=null;E!==null&&O<g.length;O++){E.index>O?(R=E,E=null):R=E.sibling;var M=m(d,E,g[O],S);if(M===null){E===null&&(E=R);break}e&&E&&M.alternate===null&&n(d,E),f=i(M,f,O),k===null?z=M:k.sibling=M,k=M,E=R}if(O===g.length)return t(d,E),oe&&mt(d,O),z;if(E===null){for(;O<g.length;O++)E=p(d,g[O],S),E!==null&&(f=i(E,f,O),k===null?z=E:k.sibling=E,k=E);return oe&&mt(d,O),z}for(E=r(d,E);O<g.length;O++)R=h(E,d,O,g[O],S),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?O:R.key),f=i(R,f,O),k===null?z=R:k.sibling=R,k=R);return e&&E.forEach(function(F){return n(d,F)}),oe&&mt(d,O),z}function w(d,f,g,S){var z=vr(g);if(typeof z!="function")throw Error(N(150));if(g=z.call(g),g==null)throw Error(N(151));for(var k=z=null,E=f,O=f=0,R=null,M=g.next();E!==null&&!M.done;O++,M=g.next()){E.index>O?(R=E,E=null):R=E.sibling;var F=m(d,E,M.value,S);if(F===null){E===null&&(E=R);break}e&&E&&F.alternate===null&&n(d,E),f=i(F,f,O),k===null?z=F:k.sibling=F,k=F,E=R}if(M.done)return t(d,E),oe&&mt(d,O),z;if(E===null){for(;!M.done;O++,M=g.next())M=p(d,M.value,S),M!==null&&(f=i(M,f,O),k===null?z=M:k.sibling=M,k=M);return oe&&mt(d,O),z}for(E=r(d,E);!M.done;O++,M=g.next())M=h(E,d,O,M.value,S),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?O:M.key),f=i(M,f,O),k===null?z=M:k.sibling=M,k=M);return e&&E.forEach(function(q){return n(d,q)}),oe&&mt(d,O),z}function A(d,f,g,S){if(typeof g=="object"&&g!==null&&g.type===jt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case vo:e:{for(var z=g.key,k=f;k!==null;){if(k.key===z){if(z=g.type,z===jt){if(k.tag===7){t(d,k.sibling),f=o(k,g.props.children),f.return=d,d=f;break e}}else if(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Hn&&Vu(z)===k.type){t(d,k.sibling),f=o(k,g.props),f.ref=Sr(d,k,g),f.return=d,d=f;break e}t(d,k);break}else n(d,k);k=k.sibling}g.type===jt?(f=wt(g.props.children,d.mode,S,g.key),f.return=d,d=f):(S=Wo(g.type,g.key,g.props,null,d.mode,S),S.ref=Sr(d,f,g),S.return=d,d=S)}return a(d);case _t:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(d,f.sibling),f=o(f,g.children||[]),f.return=d,d=f;break e}else{t(d,f);break}else n(d,f);f=f.sibling}f=Ca(g,d.mode,S),f.return=d,d=f}return a(d);case Hn:return k=g._init,A(d,f,k(g._payload),S)}if(Ar(g))return v(d,f,g,S);if(vr(g))return w(d,f,g,S);No(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(d,f.sibling),f=o(f,g),f.return=d,d=f):(t(d,f),f=Sa(g,d.mode,S),f.return=d,d=f),a(d)):t(d,f)}return A}var or=wp(!0),kp=wp(!1),po={},Nn=ut(po),Zr=ut(po),eo=ut(po);function yt(e){if(e===po)throw Error(N(174));return e}function xs(e,n){switch(Z(eo,n),Z(Zr,e),Z(Nn,po),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ja(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ja(n,e)}re(Nn),Z(Nn,n)}function ir(){re(Nn),re(Zr),re(eo)}function Sp(e){yt(eo.current);var n=yt(Nn.current),t=Ja(n,e.type);n!==t&&(Z(Zr,e),Z(Nn,t))}function ws(e){Zr.current===e&&(re(Nn),re(Zr))}var ie=ut(0);function pi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ga=[];function ks(){for(var e=0;e<ga.length;e++)ga[e]._workInProgressVersionPrimary=null;ga.length=0}var Bo=Vn.ReactCurrentDispatcher,va=Vn.ReactCurrentBatchConfig,Ct=0,ae=null,ge=null,xe=null,mi=!1,jr=!1,no=0,pg=0;function ze(){throw Error(N(321))}function Ss(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function Cs(e,n,t,r,o,i){if(Ct=i,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Bo.current=e===null||e.memoizedState===null?gg:vg,e=t(r,o),jr){i=0;do{if(jr=!1,no=0,25<=i)throw Error(N(301));i+=1,xe=ge=null,n.updateQueue=null,Bo.current=yg,e=t(r,o)}while(jr)}if(Bo.current=fi,n=ge!==null&&ge.next!==null,Ct=0,xe=ge=ae=null,mi=!1,n)throw Error(N(300));return e}function Es(){var e=no!==0;return no=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ae.memoizedState=xe=e:xe=xe.next=e,xe}function un(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=xe===null?ae.memoizedState:xe.next;if(n!==null)xe=n,ge=e;else{if(e===null)throw Error(N(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?ae.memoizedState=xe=e:xe=xe.next=e}return xe}function to(e,n){return typeof n=="function"?n(e):n}function ya(e){var n=un(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=ge,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((Ct&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,ae.lanes|=c,Et|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,wn(r,n.memoizedState)||(Be=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,Et|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xa(e){var n=un(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);wn(i,n.memoizedState)||(Be=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Cp(){}function Ep(e,n){var t=ae,r=un(),o=n(),i=!wn(r.memoizedState,o);if(i&&(r.memoizedState=o,Be=!0),r=r.queue,Ps(Ap.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||xe!==null&&xe.memoizedState.tag&1){if(t.flags|=2048,ro(9,zp.bind(null,t,r,o,n),void 0,null),we===null)throw Error(N(349));(Ct&30)!==0||Pp(t,n,o)}return o}function Pp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ae.updateQueue,n===null?(n={lastEffect:null,stores:null},ae.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function zp(e,n,t,r){n.value=t,n.getSnapshot=r,Np(n)&&Tp(e)}function Ap(e,n,t){return t(function(){Np(n)&&Tp(e)})}function Np(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function Tp(e){var n=Dn(e,1);n!==null&&xn(n,e,1,-1)}function Uu(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},n.queue=e,e=e.dispatch=hg.bind(null,ae,e),[n.memoizedState,e]}function ro(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ae.updateQueue,n===null?(n={lastEffect:null,stores:null},ae.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Op(){return un().memoizedState}function Vo(e,n,t,r){var o=Cn();ae.flags|=e,o.memoizedState=ro(1|n,t,void 0,r===void 0?null:r)}function Ai(e,n,t,r){var o=un();r=r===void 0?null:r;var i=void 0;if(ge!==null){var a=ge.memoizedState;if(i=a.destroy,r!==null&&Ss(r,a.deps)){o.memoizedState=ro(n,t,i,r);return}}ae.flags|=e,o.memoizedState=ro(1|n,t,i,r)}function Hu(e,n){return Vo(8390656,8,e,n)}function Ps(e,n){return Ai(2048,8,e,n)}function bp(e,n){return Ai(4,2,e,n)}function Lp(e,n){return Ai(4,4,e,n)}function Fp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ip(e,n,t){return t=t!=null?t.concat([e]):null,Ai(4,4,Fp.bind(null,n,e),t)}function zs(){}function _p(e,n){var t=un();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function jp(e,n){var t=un();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function qp(e,n,t){return(Ct&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=t):(wn(t,n)||(t=Dd(),ae.lanes|=t,Et|=t,e.baseState=!0),n)}function mg(e,n){var t=Q;Q=t!==0&&4>t?t:4,e(!0);var r=va.transition;va.transition={};try{e(!1),n()}finally{Q=t,va.transition=r}}function Rp(){return un().memoizedState}function fg(e,n,t){var r=rt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Mp(e))Dp(n,t);else if(t=gp(e,n,t,r),t!==null){var o=Ie();xn(t,e,r,o),Bp(t,n,r)}}function hg(e,n,t){var r=rt(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Mp(e))Dp(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,wn(l,a)){var s=n.interleaved;s===null?(o.next=o,vs(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=gp(e,n,o,r),t!==null&&(o=Ie(),xn(t,e,r,o),Bp(t,n,r))}}function Mp(e){var n=e.alternate;return e===ae||n!==null&&n===ae}function Dp(e,n){jr=mi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Bp(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,rs(e,t)}}var fi={readContext:sn,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},gg={readContext:sn,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:sn,useEffect:Hu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Vo(4194308,4,Fp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Vo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Vo(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Cn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=fg.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:Uu,useDebugValue:zs,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=Uu(!1),n=e[0];return e=mg.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ae,o=Cn();if(oe){if(t===void 0)throw Error(N(407));t=t()}else{if(t=n(),we===null)throw Error(N(349));(Ct&30)!==0||Pp(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Hu(Ap.bind(null,r,i,e),[e]),r.flags|=2048,ro(9,zp.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Cn(),n=we.identifierPrefix;if(oe){var t=_n,r=In;t=(r&~(1<<32-yn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=no++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=pg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},vg={readContext:sn,useCallback:_p,useContext:sn,useEffect:Ps,useImperativeHandle:Ip,useInsertionEffect:bp,useLayoutEffect:Lp,useMemo:jp,useReducer:ya,useRef:Op,useState:function(){return ya(to)},useDebugValue:zs,useDeferredValue:function(e){var n=un();return qp(n,ge.memoizedState,e)},useTransition:function(){var e=ya(to)[0],n=un().memoizedState;return[e,n]},useMutableSource:Cp,useSyncExternalStore:Ep,useId:Rp,unstable_isNewReconciler:!1},yg={readContext:sn,useCallback:_p,useContext:sn,useEffect:Ps,useImperativeHandle:Ip,useInsertionEffect:bp,useLayoutEffect:Lp,useMemo:jp,useReducer:xa,useRef:Op,useState:function(){return xa(to)},useDebugValue:zs,useDeferredValue:function(e){var n=un();return ge===null?n.memoizedState=e:qp(n,ge.memoizedState,e)},useTransition:function(){var e=xa(to)[0],n=un().memoizedState;return[e,n]},useMutableSource:Cp,useSyncExternalStore:Ep,useId:Rp,unstable_isNewReconciler:!1};function ar(e,n){try{var t="",r=n;do t+=Wf(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function wa(e,n,t){return{value:e,source:null,stack:t!=null?t:null,digest:n!=null?n:null}}function gl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var xg=typeof WeakMap=="function"?WeakMap:Map;function Vp(e,n,t){t=qn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){gi||(gi=!0,zl=r),gl(e,n)},t}function Up(e,n,t){t=qn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){gl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){gl(e,n),typeof r!="function"&&(tt===null?tt=new Set([this]):tt.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function $u(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new xg;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Fg.bind(null,e,n,t),n.then(e,e))}function Wu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ju(e,n,t,r,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qn(-1,1),n.tag=2,nt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var wg=Vn.ReactCurrentOwner,Be=!1;function Fe(e,n,t,r){n.child=e===null?kp(n,null,t,r):or(n,e.child,t,r)}function Qu(e,n,t,r,o){t=t.render;var i=n.ref;return Yt(n,o),r=Cs(e,n,t,r,i,o),t=Es(),e!==null&&!Be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Bn(e,n,o)):(oe&&t&&ds(n),n.flags|=1,Fe(e,n,r,o),n.child)}function Ku(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Is(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Hp(e,n,i,r,o)):(e=Wo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Kr,t(a,r)&&e.ref===n.ref)return Bn(e,n,o)}return n.flags|=1,e=ot(i,r),e.ref=n.ref,e.return=n,n.child=e}function Hp(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Kr(i,r)&&e.ref===n.ref)if(Be=!1,n.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Be=!0);else return n.lanes=e.lanes,Bn(e,n,o)}return vl(e,n,t,r,o)}function $p(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Wt,Je),Je|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Z(Wt,Je),Je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,Z(Wt,Je),Je|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,Z(Wt,Je),Je|=r;return Fe(e,n,o,t),n.child}function Wp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function vl(e,n,t,r,o){var i=Ue(t)?kt:Te.current;return i=tr(n,i),Yt(n,o),t=Cs(e,n,t,r,i,o),r=Es(),e!==null&&!Be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Bn(e,n,o)):(oe&&r&&ds(n),n.flags|=1,Fe(e,n,t,o),n.child)}function Gu(e,n,t,r,o){if(Ue(t)){var i=!0;ai(n)}else i=!1;if(Yt(n,o),n.stateNode===null)Uo(e,n),xp(n,t,r),hl(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=Ue(t)?kt:Te.current,u=tr(n,u));var c=t.getDerivedStateFromProps,p=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Bu(n,a,r,u),$n=!1;var m=n.memoizedState;a.state=m,di(n,r,a,o),s=n.memoizedState,l!==r||m!==s||Ve.current||$n?(typeof c=="function"&&(fl(n,t,c,r),s=n.memoizedState),(l=$n||Du(n,t,l,r,m,s,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,vp(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:hn(n.type,l),a.props=u,p=n.pendingProps,m=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=sn(s):(s=Ue(t)?kt:Te.current,s=tr(n,s));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||m!==s)&&Bu(n,a,r,s),$n=!1,m=n.memoizedState,a.state=m,di(n,r,a,o);var v=n.memoizedState;l!==p||m!==v||Ve.current||$n?(typeof h=="function"&&(fl(n,t,h,r),v=n.memoizedState),(u=$n||Du(n,t,u,r,m,v,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return yl(e,n,t,r,i,o)}function yl(e,n,t,r,o,i){Wp(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&_u(n,t,!1),Bn(e,n,i);r=n.stateNode,wg.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=or(n,e.child,null,i),n.child=or(n,null,l,i)):Fe(e,n,l,i),n.memoizedState=r.state,o&&_u(n,t,!0),n.child}function Jp(e){var n=e.stateNode;n.pendingContext?Iu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Iu(e,n.context,!1),xs(e,n.containerInfo)}function Yu(e,n,t,r,o){return rr(),ms(o),n.flags|=256,Fe(e,n,t,r),n.child}var xl={dehydrated:null,treeContext:null,retryLane:0};function wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qp(e,n,t){var r=n.pendingProps,o=ie.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(ie,o&1),e===null)return pl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Oi(a,r,0,null),e=wt(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=wl(t),n.memoizedState=xl,e):As(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return kg(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=ot(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=ot(l,i):(i=wt(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?wl(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=xl,r}return i=e.child,e=i.sibling,r=ot(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function As(e,n){return n=Oi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function To(e,n,t,r){return r!==null&&ms(r),or(n,e.child,null,t),e=As(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function kg(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=wa(Error(N(422))),To(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Oi({mode:"visible",children:r.children},o,0,null),i=wt(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&or(n,e.child,null,a),n.child.memoizedState=wl(a),n.memoizedState=xl,i);if((n.mode&1)===0)return To(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(N(419)),r=wa(i,r,void 0),To(e,n,a,r)}if(l=(a&e.childLanes)!==0,Be||l){if(r=we,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Dn(e,o),xn(r,e,o,-1))}return Fs(),r=wa(Error(N(421))),To(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Ig.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Qe=et(o.nextSibling),Ge=n,oe=!0,vn=null,e!==null&&(nn[tn++]=In,nn[tn++]=_n,nn[tn++]=St,In=e.id,_n=e.overflow,St=n),n=As(n,r.children),n.flags|=4096,n)}function Xu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ml(e.return,n,t)}function ka(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Kp(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(Fe(e,n,r.children,t),r=ie.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xu(e,t,n);else if(e.tag===19)Xu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ie,r),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&pi(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ka(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&pi(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ka(n,!0,t,null,i);break;case"together":ka(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Uo(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Et|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(N(153));if(n.child!==null){for(e=n.child,t=ot(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ot(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Sg(e,n,t){switch(n.tag){case 3:Jp(n),rr();break;case 5:Sp(n);break;case 1:Ue(n.type)&&ai(n);break;case 4:xs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;Z(ui,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Z(ie,ie.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Qp(e,n,t):(Z(ie,ie.current&1),e=Bn(e,n,t),e!==null?e.sibling:null);Z(ie,ie.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Kp(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(ie,ie.current),r)break;return null;case 22:case 23:return n.lanes=0,$p(e,n,t)}return Bn(e,n,t)}var Gp,kl,Yp,Xp;Gp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};kl=function(){};Yp=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,yt(Nn.current);var i=null;switch(t){case"input":o=Ua(e,o),r=Ua(e,r),i=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":o=Wa(e,o),r=Wa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oi)}Qa(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ne("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Xp=function(e,n,t,r){t!==r&&(n.flags|=4)};function Cr(e,n){if(!oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Cg(e,n,t){var r=n.pendingProps;switch(ps(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(n),null;case 1:return Ue(n.type)&&ii(),Ae(n),null;case 3:return r=n.stateNode,ir(),re(Ve),re(Te),ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ao(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vn!==null&&(Tl(vn),vn=null))),kl(e,n),Ae(n),null;case 5:ws(n);var o=yt(eo.current);if(t=n.type,e!==null&&n.stateNode!=null)Yp(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(N(166));return Ae(n),null}if(e=yt(Nn.current),Ao(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Pn]=n,r[Xr]=i,e=(n.mode&1)!==0,t){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<Tr.length;o++)ne(Tr[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":lu(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":uu(r,i),ne("invalid",r)}Qa(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,l,e),o=["children",""+l]):Vr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ne("scroll",r)}switch(t){case"input":yo(r),su(r,i,!0);break;case"textarea":yo(r),cu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oi)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Pn]=n,e[Xr]=r,Gp(e,n,!1,!1),n.stateNode=e;e:{switch(a=Ka(t,r),t){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<Tr.length;o++)ne(Tr[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":lu(e,r),o=Ua(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),ne("invalid",e);break;case"textarea":uu(e,r),o=Wa(e,r),ne("invalid",e);break;default:o=r}Qa(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Nd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&zd(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ur(e,s):typeof s=="number"&&Ur(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ne("scroll",e):s!=null&&Yl(e,i,s,a))}switch(t){case"input":yo(e),su(e,r,!1);break;case"textarea":yo(e),cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+at(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ae(n),null;case 6:if(e&&n.stateNode!=null)Xp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(N(166));if(t=yt(eo.current),yt(Nn.current),Ao(n)){if(r=n.stateNode,t=n.memoizedProps,r[Pn]=n,(i=r.nodeValue!==t)&&(e=Ge,e!==null))switch(e.tag){case 3:zo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Pn]=n,n.stateNode=r}return Ae(n),null;case 13:if(re(ie),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Qe!==null&&(n.mode&1)!==0&&(n.flags&128)===0)hp(),rr(),n.flags|=98560,i=!1;else if(i=Ao(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Pn]=n}else rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ae(n),i=!1}else vn!==null&&(Tl(vn),vn=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ie.current&1)!==0?ve===0&&(ve=3):Fs())),n.updateQueue!==null&&(n.flags|=4),Ae(n),null);case 4:return ir(),kl(e,n),e===null&&Gr(n.stateNode.containerInfo),Ae(n),null;case 10:return gs(n.type._context),Ae(n),null;case 17:return Ue(n.type)&&ii(),Ae(n),null;case 19:if(re(ie),i=n.memoizedState,i===null)return Ae(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Cr(i,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(a=pi(e),a!==null){for(n.flags|=128,Cr(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Z(ie,ie.current&1|2),n.child}e=e.sibling}i.tail!==null&&ce()>lr&&(n.flags|=128,r=!0,Cr(i,!1),n.lanes=4194304)}else{if(!r)if(e=pi(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!oe)return Ae(n),null}else 2*ce()-i.renderingStartTime>lr&&t!==1073741824&&(n.flags|=128,r=!0,Cr(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ce(),n.sibling=null,t=ie.current,Z(ie,r?t&1|2:t&1),n):(Ae(n),null);case 22:case 23:return Ls(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Je&1073741824)!==0&&(Ae(n),n.subtreeFlags&6&&(n.flags|=8192)):Ae(n),null;case 24:return null;case 25:return null}throw Error(N(156,n.tag))}function Eg(e,n){switch(ps(n),n.tag){case 1:return Ue(n.type)&&ii(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ir(),re(Ve),re(Te),ks(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ws(n),null;case 13:if(re(ie),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(N(340));rr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return re(ie),null;case 4:return ir(),null;case 10:return gs(n.type._context),null;case 22:case 23:return Ls(),null;case 24:return null;default:return null}}var Oo=!1,Ne=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,I=null;function $t(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){se(e,n,r)}else t.current=null}function Sl(e,n,t){try{t()}catch(r){se(e,n,r)}}var Zu=!1;function zg(e,n){if(il=ni,e=tp(),cs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,c=0,p=e,m=null;n:for(;;){for(var h;p!==t||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)m=p,p=h;for(;;){if(p===e)break n;if(m===t&&++u===o&&(l=a),m===i&&++c===r&&(s=a),(h=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=h}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(al={focusedElem:e,selectionRange:t},ni=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var v=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,A=v.memoizedState,d=n.stateNode,f=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:hn(n.type,w),A);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){se(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return v=Zu,Zu=!1,v}function qr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Sl(n,t,i)}o=o.next}while(o!==r)}}function Ni(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Cl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Zp(e){var n=e.alternate;n!==null&&(e.alternate=null,Zp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Pn],delete n[Xr],delete n[ul],delete n[sg],delete n[ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function em(e){return e.tag===5||e.tag===3||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function El(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=oi));else if(r!==4&&(e=e.child,e!==null))for(El(e,n,t),e=e.sibling;e!==null;)El(e,n,t),e=e.sibling}function Pl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pl(e,n,t),e=e.sibling;e!==null;)Pl(e,n,t),e=e.sibling}var Ce=null,gn=!1;function Un(e,n,t){for(t=t.child;t!==null;)nm(e,n,t),t=t.sibling}function nm(e,n,t){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(wi,t)}catch{}switch(t.tag){case 5:Ne||$t(t,n);case 6:var r=Ce,o=gn;Ce=null,Un(e,n,t),Ce=r,gn=o,Ce!==null&&(gn?(e=Ce,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ce.removeChild(t.stateNode));break;case 18:Ce!==null&&(gn?(e=Ce,t=t.stateNode,e.nodeType===8?fa(e.parentNode,t):e.nodeType===1&&fa(e,t),Jr(e)):fa(Ce,t.stateNode));break;case 4:r=Ce,o=gn,Ce=t.stateNode.containerInfo,gn=!0,Un(e,n,t),Ce=r,gn=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Sl(t,n,a),o=o.next}while(o!==r)}Un(e,n,t);break;case 1:if(!Ne&&($t(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){se(t,n,l)}Un(e,n,t);break;case 21:Un(e,n,t);break;case 22:t.mode&1?(Ne=(r=Ne)||t.memoizedState!==null,Un(e,n,t),Ne=r):Un(e,n,t);break;default:Un(e,n,t)}}function nc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Pg),n.forEach(function(r){var o=_g.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function fn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,gn=!1;break e;case 3:Ce=l.stateNode.containerInfo,gn=!0;break e;case 4:Ce=l.stateNode.containerInfo,gn=!0;break e}l=l.return}if(Ce===null)throw Error(N(160));nm(i,a,o),Ce=null,gn=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){se(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)tm(n,e),n=n.sibling}function tm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fn(n,e),Sn(e),r&4){try{qr(3,e,e.return),Ni(3,e)}catch(w){se(e,e.return,w)}try{qr(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:fn(n,e),Sn(e),r&512&&t!==null&&$t(t,t.return);break;case 5:if(fn(n,e),Sn(e),r&512&&t!==null&&$t(t,t.return),e.flags&32){var o=e.stateNode;try{Ur(o,"")}catch(w){se(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Cd(o,i),Ka(l,a);var u=Ka(l,i);for(a=0;a<s.length;a+=2){var c=s[a],p=s[a+1];c==="style"?Nd(o,p):c==="dangerouslySetInnerHTML"?zd(o,p):c==="children"?Ur(o,p):Yl(o,c,p,u)}switch(l){case"input":Ha(o,i);break;case"textarea":Ed(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Jt(o,!!i.multiple,h,!1):m!==!!i.multiple&&(i.defaultValue!=null?Jt(o,!!i.multiple,i.defaultValue,!0):Jt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Xr]=i}catch(w){se(e,e.return,w)}}break;case 6:if(fn(n,e),Sn(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){se(e,e.return,w)}}break;case 3:if(fn(n,e),Sn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jr(n.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:fn(n,e),Sn(e);break;case 13:fn(n,e),Sn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Os=ce())),r&4&&nc(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||c,fn(n,e),Ne=u):fn(n,e),Sn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(I=e,c=e.child;c!==null;){for(p=I=c;I!==null;){switch(m=I,h=m.child,m.tag){case 0:case 11:case 14:case 15:qr(4,m,m.return);break;case 1:$t(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(w){se(r,t,w)}}break;case 5:$t(m,m.return);break;case 22:if(m.memoizedState!==null){rc(p);continue}}h!==null?(h.return=m,I=h):rc(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ad("display",a))}catch(w){se(e,e.return,w)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){se(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fn(n,e),Sn(e),r&4&&nc(e);break;case 21:break;default:fn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(em(t)){var r=t;break e}t=t.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ur(o,""),r.flags&=-33);var i=ec(e);Pl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ec(e);El(e,l,a);break;default:throw Error(N(161))}}catch(s){se(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ag(e,n,t){I=e,rm(e)}function rm(e,n,t){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Oo;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Ne;l=Oo;var u=Ne;if(Oo=a,(Ne=s)&&!u)for(I=o;I!==null;)a=I,s=a.child,a.tag===22&&a.memoizedState!==null?oc(o):s!==null?(s.return=a,I=s):oc(o);for(;i!==null;)I=i,rm(i),i=i.sibling;I=o,Oo=l,Ne=u}tc(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,I=i):tc(e)}}function tc(e){for(;I!==null;){var n=I;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ne||Ni(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ne)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:hn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Mu(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Mu(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Jr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ne||n.flags&512&&Cl(n)}catch(m){se(n,n.return,m)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function rc(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function oc(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ni(4,n)}catch(s){se(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){se(n,o,s)}}var i=n.return;try{Cl(n)}catch(s){se(n,i,s)}break;case 5:var a=n.return;try{Cl(n)}catch(s){se(n,a,s)}}}catch(s){se(n,n.return,s)}if(n===e){I=null;break}var l=n.sibling;if(l!==null){l.return=n.return,I=l;break}I=n.return}}var Ng=Math.ceil,hi=Vn.ReactCurrentDispatcher,Ns=Vn.ReactCurrentOwner,an=Vn.ReactCurrentBatchConfig,J=0,we=null,fe=null,Ee=0,Je=0,Wt=ut(0),ve=0,oo=null,Et=0,Ti=0,Ts=0,Rr=null,De=null,Os=0,lr=1/0,Ln=null,gi=!1,zl=null,tt=null,bo=!1,Kn=null,vi=0,Mr=0,Al=null,Ho=-1,$o=0;function Ie(){return(J&6)!==0?ce():Ho!==-1?Ho:Ho=ce()}function rt(e){return(e.mode&1)===0?1:(J&2)!==0&&Ee!==0?Ee&-Ee:dg.transition!==null?($o===0&&($o=Dd()),$o):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Jd(e.type)),e)}function xn(e,n,t,r){if(50<Mr)throw Mr=0,Al=null,Error(N(185));so(e,t,r),((J&2)===0||e!==we)&&(e===we&&((J&2)===0&&(Ti|=t),ve===4&&Jn(e,Ee)),He(e,r),t===1&&J===0&&(n.mode&1)===0&&(lr=ce()+500,Pi&&ct()))}function He(e,n){var t=e.callbackNode;dh(e,n);var r=ei(e,e===we?Ee:0);if(r===0)t!==null&&mu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&mu(t),n===1)e.tag===0?cg(ic.bind(null,e)):pp(ic.bind(null,e)),ag(function(){(J&6)===0&&ct()}),t=null;else{switch(Bd(r)){case 1:t=ts;break;case 4:t=Rd;break;case 16:t=Zo;break;case 536870912:t=Md;break;default:t=Zo}t=dm(t,om.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function om(e,n){if(Ho=-1,$o=0,(J&6)!==0)throw Error(N(327));var t=e.callbackNode;if(Xt()&&e.callbackNode!==t)return null;var r=ei(e,e===we?Ee:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=yi(e,r);else{n=r;var o=J;J|=2;var i=am();(we!==e||Ee!==n)&&(Ln=null,lr=ce()+500,xt(e,n));do try{bg();break}catch(l){im(e,l)}while(1);hs(),hi.current=i,J=o,fe!==null?n=0:(we=null,Ee=0,n=ve)}if(n!==0){if(n===2&&(o=el(e),o!==0&&(r=o,n=Nl(e,o))),n===1)throw t=oo,xt(e,0),Jn(e,r),He(e,ce()),t;if(n===6)Jn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Tg(o)&&(n=yi(e,r),n===2&&(i=el(e),i!==0&&(r=i,n=Nl(e,i))),n===1))throw t=oo,xt(e,0),Jn(e,r),He(e,ce()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(N(345));case 2:ft(e,De,Ln);break;case 3:if(Jn(e,r),(r&130023424)===r&&(n=Os+500-ce(),10<n)){if(ei(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=sl(ft.bind(null,e,De,Ln),n);break}ft(e,De,Ln);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-yn(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ng(r/1960))-r,10<r){e.timeoutHandle=sl(ft.bind(null,e,De,Ln),r);break}ft(e,De,Ln);break;case 5:ft(e,De,Ln);break;default:throw Error(N(329))}}}return He(e,ce()),e.callbackNode===t?om.bind(null,e):null}function Nl(e,n){var t=Rr;return e.current.memoizedState.isDehydrated&&(xt(e,n).flags|=256),e=yi(e,n),e!==2&&(n=De,De=t,n!==null&&Tl(n)),e}function Tl(e){De===null?De=e:De.push.apply(De,e)}function Tg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!wn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~Ts,n&=~Ti,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-yn(n),r=1<<t;e[t]=-1,n&=~r}}function ic(e){if((J&6)!==0)throw Error(N(327));Xt();var n=ei(e,0);if((n&1)===0)return He(e,ce()),null;var t=yi(e,n);if(e.tag!==0&&t===2){var r=el(e);r!==0&&(n=r,t=Nl(e,r))}if(t===1)throw t=oo,xt(e,0),Jn(e,n),He(e,ce()),t;if(t===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ft(e,De,Ln),He(e,ce()),null}function bs(e,n){var t=J;J|=1;try{return e(n)}finally{J=t,J===0&&(lr=ce()+500,Pi&&ct())}}function Pt(e){Kn!==null&&Kn.tag===0&&(J&6)===0&&Xt();var n=J;J|=1;var t=an.transition,r=Q;try{if(an.transition=null,Q=1,e)return e()}finally{Q=r,an.transition=t,J=n,(J&6)===0&&ct()}}function Ls(){Je=Wt.current,re(Wt)}function xt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ig(t)),fe!==null)for(t=fe.return;t!==null;){var r=t;switch(ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:ir(),re(Ve),re(Te),ks();break;case 5:ws(r);break;case 4:ir();break;case 13:re(ie);break;case 19:re(ie);break;case 10:gs(r.type._context);break;case 22:case 23:Ls()}t=t.return}if(we=e,fe=e=ot(e.current,null),Ee=Je=n,ve=0,oo=null,Ts=Ti=Et=0,De=Rr=null,vt!==null){for(n=0;n<vt.length;n++)if(t=vt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}vt=null}return e}function im(e,n){do{var t=fe;try{if(hs(),Bo.current=fi,mi){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}mi=!1}if(Ct=0,xe=ge=ae=null,jr=!1,no=0,Ns.current=null,t===null||t.return===null){ve=1,oo=n,fe=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=Ee,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,p=c.tag;if((c.mode&1)===0&&(p===0||p===11||p===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Wu(a);if(h!==null){h.flags&=-257,Ju(h,a,l,i,n),h.mode&1&&$u(i,u,n),n=h,s=u;var v=n.updateQueue;if(v===null){var w=new Set;w.add(s),n.updateQueue=w}else v.add(s);break e}else{if((n&1)===0){$u(i,u,n),Fs();break e}s=Error(N(426))}}else if(oe&&l.mode&1){var A=Wu(a);if(A!==null){(A.flags&65536)===0&&(A.flags|=256),Ju(A,a,l,i,n),ms(ar(s,l));break e}}i=s=ar(s,l),ve!==4&&(ve=2),Rr===null?Rr=[i]:Rr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Vp(i,s,n);Ru(i,d);break e;case 1:l=s;var f=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tt===null||!tt.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=Up(i,l,n);Ru(i,S);break e}}i=i.return}while(i!==null)}sm(t)}catch(z){n=z,fe===t&&t!==null&&(fe=t=t.return);continue}break}while(1)}function am(){var e=hi.current;return hi.current=fi,e===null?fi:e}function Fs(){(ve===0||ve===3||ve===2)&&(ve=4),we===null||(Et&268435455)===0&&(Ti&268435455)===0||Jn(we,Ee)}function yi(e,n){var t=J;J|=2;var r=am();(we!==e||Ee!==n)&&(Ln=null,xt(e,n));do try{Og();break}catch(o){im(e,o)}while(1);if(hs(),J=t,hi.current=r,fe!==null)throw Error(N(261));return we=null,Ee=0,ve}function Og(){for(;fe!==null;)lm(fe)}function bg(){for(;fe!==null&&!th();)lm(fe)}function lm(e){var n=cm(e.alternate,e,Je);e.memoizedProps=e.pendingProps,n===null?sm(e):fe=n,Ns.current=null}function sm(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Cg(t,n,Je),t!==null){fe=t;return}}else{if(t=Eg(t,n),t!==null){t.flags&=32767,fe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,fe=null;return}}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);ve===0&&(ve=5)}function ft(e,n,t){var r=Q,o=an.transition;try{an.transition=null,Q=1,Lg(e,n,t,r)}finally{an.transition=o,Q=r}return null}function Lg(e,n,t,r){do Xt();while(Kn!==null);if((J&6)!==0)throw Error(N(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(ph(e,i),e===we&&(fe=we=null,Ee=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||bo||(bo=!0,dm(Zo,function(){return Xt(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=an.transition,an.transition=null;var a=Q;Q=1;var l=J;J|=4,Ns.current=null,zg(e,t),tm(t,e),Xh(al),ni=!!il,al=il=null,e.current=t,Ag(t),rh(),J=l,Q=a,an.transition=i}else e.current=t;if(bo&&(bo=!1,Kn=e,vi=o),i=e.pendingLanes,i===0&&(tt=null),ah(t.stateNode),He(e,ce()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(gi)throw gi=!1,e=zl,zl=null,e;return(vi&1)!==0&&e.tag!==0&&Xt(),i=e.pendingLanes,(i&1)!==0?e===Al?Mr++:(Mr=0,Al=e):Mr=0,ct(),null}function Xt(){if(Kn!==null){var e=Bd(vi),n=an.transition,t=Q;try{if(an.transition=null,Q=16>e?16:e,Kn===null)var r=!1;else{if(e=Kn,Kn=null,vi=0,(J&6)!==0)throw Error(N(331));var o=J;for(J|=4,I=e.current;I!==null;){var i=I,a=i.child;if((I.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:qr(8,c,i)}var p=c.child;if(p!==null)p.return=c,I=p;else for(;I!==null;){c=I;var m=c.sibling,h=c.return;if(Zp(c),c===u){I=null;break}if(m!==null){m.return=h,I=m;break}I=h}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}I=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:qr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,I=d;break e}I=i.return}}var f=e.current;for(I=f;I!==null;){a=I;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,I=g;else e:for(a=f;I!==null;){if(l=I,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Ni(9,l)}}catch(z){se(l,l.return,z)}if(l===a){I=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,I=S;break e}I=l.return}}if(J=o,ct(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(wi,e)}catch{}r=!0}return r}finally{Q=t,an.transition=n}}return!1}function ac(e,n,t){n=ar(t,n),n=Vp(e,n,1),e=nt(e,n,1),n=Ie(),e!==null&&(so(e,1,n),He(e,n))}function se(e,n,t){if(e.tag===3)ac(e,e,t);else for(;n!==null;){if(n.tag===3){ac(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tt===null||!tt.has(r))){e=ar(t,e),e=Up(n,e,1),n=nt(n,e,1),e=Ie(),n!==null&&(so(n,1,e),He(n,e));break}}n=n.return}}function Fg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ie(),e.pingedLanes|=e.suspendedLanes&t,we===e&&(Ee&t)===t&&(ve===4||ve===3&&(Ee&130023424)===Ee&&500>ce()-Os?xt(e,0):Ts|=t),He(e,n)}function um(e,n){n===0&&((e.mode&1)===0?n=1:(n=ko,ko<<=1,(ko&130023424)===0&&(ko=4194304)));var t=Ie();e=Dn(e,n),e!==null&&(so(e,n,t),He(e,t))}function Ig(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),um(e,t)}function _g(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(n),um(e,t)}var cm;cm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ve.current)Be=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Be=!1,Sg(e,n,t);Be=(e.flags&131072)!==0}else Be=!1,oe&&(n.flags&1048576)!==0&&mp(n,si,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Uo(e,n),e=n.pendingProps;var o=tr(n,Te.current);Yt(n,t),o=Cs(null,n,r,e,o,t);var i=Es();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ue(r)?(i=!0,ai(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ys(n),o.updater=zi,n.stateNode=o,o._reactInternals=n,hl(n,r,e,t),n=yl(null,n,r,!0,i,t)):(n.tag=0,oe&&i&&ds(n),Fe(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Uo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=qg(r),e=hn(r,e),o){case 0:n=vl(null,n,r,e,t);break e;case 1:n=Gu(null,n,r,e,t);break e;case 11:n=Qu(null,n,r,e,t);break e;case 14:n=Ku(null,n,r,hn(r.type,e),t);break e}throw Error(N(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:hn(r,o),vl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:hn(r,o),Gu(e,n,r,o,t);case 3:e:{if(Jp(n),e===null)throw Error(N(387));r=n.pendingProps,i=n.memoizedState,o=i.element,vp(e,n),di(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=ar(Error(N(423)),n),n=Yu(e,n,r,t,o);break e}else if(r!==o){o=ar(Error(N(424)),n),n=Yu(e,n,r,t,o);break e}else for(Qe=et(n.stateNode.containerInfo.firstChild),Ge=n,oe=!0,vn=null,t=kp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(rr(),r===o){n=Bn(e,n,t);break e}Fe(e,n,r,t)}n=n.child}return n;case 5:return Sp(n),e===null&&pl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ll(r,o)?a=null:i!==null&&ll(r,i)&&(n.flags|=32),Wp(e,n),Fe(e,n,a,t),n.child;case 6:return e===null&&pl(n),null;case 13:return Qp(e,n,t);case 4:return xs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=or(n,null,r,t):Fe(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:hn(r,o),Qu(e,n,r,o,t);case 7:return Fe(e,n,n.pendingProps,t),n.child;case 8:return Fe(e,n,n.pendingProps.children,t),n.child;case 12:return Fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,Z(ui,r._currentValue),r._currentValue=a,i!==null)if(wn(i.value,a)){if(i.children===o.children&&!Ve.current){n=Bn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=qn(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),ml(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),ml(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Fe(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Yt(n,t),o=sn(o),r=r(o),n.flags|=1,Fe(e,n,r,t),n.child;case 14:return r=n.type,o=hn(r,n.pendingProps),o=hn(r.type,o),Ku(e,n,r,o,t);case 15:return Hp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:hn(r,o),Uo(e,n),n.tag=1,Ue(r)?(e=!0,ai(n)):e=!1,Yt(n,t),xp(n,r,o),hl(n,r,o,t),yl(null,n,r,!0,e,t);case 19:return Kp(e,n,t);case 22:return $p(e,n,t)}throw Error(N(156,n.tag))};function dm(e,n){return qd(e,n)}function jg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,n,t,r){return new jg(e,n,t,r)}function Is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qg(e){if(typeof e=="function")return Is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zl)return 11;if(e===es)return 14}return 2}function ot(e,n){var t=e.alternate;return t===null?(t=on(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wo(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")Is(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case jt:return wt(t.children,o,i,n);case Xl:a=8,o|=8;break;case Ma:return e=on(12,t,n,o|2),e.elementType=Ma,e.lanes=i,e;case Da:return e=on(13,t,n,o),e.elementType=Da,e.lanes=i,e;case Ba:return e=on(19,t,n,o),e.elementType=Ba,e.lanes=i,e;case wd:return Oi(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yd:a=10;break e;case xd:a=9;break e;case Zl:a=11;break e;case es:a=14;break e;case Hn:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return n=on(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function wt(e,n,t,r){return e=on(7,e,r,n),e.lanes=t,e}function Oi(e,n,t,r){return e=on(22,e,r,n),e.elementType=wd,e.lanes=t,e.stateNode={isHidden:!1},e}function Sa(e,n,t){return e=on(6,e,null,n),e.lanes=t,e}function Ca(e,n,t){return n=on(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Rg(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _s(e,n,t,r,o,i,a,l,s){return e=new Rg(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=on(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ys(i),e}function Mg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function pm(e){if(!e)return lt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(N(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ue(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(N(171))}if(e.tag===1){var t=e.type;if(Ue(t))return dp(e,t,n)}return n}function mm(e,n,t,r,o,i,a,l,s){return e=_s(t,r,!0,e,o,i,a,l,s),e.context=pm(null),t=e.current,r=Ie(),o=rt(t),i=qn(r,o),i.callback=n!=null?n:null,nt(t,i,o),e.current.lanes=o,so(e,o,r),He(e,r),e}function bi(e,n,t,r){var o=n.current,i=Ie(),a=rt(o);return t=pm(t),n.context===null?n.context=t:n.pendingContext=t,n=qn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=nt(o,n,a),e!==null&&(xn(e,o,a,i),Do(e,o,a)),a}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function js(e,n){lc(e,n),(e=e.alternate)&&lc(e,n)}function Dg(){return null}var fm=typeof reportError=="function"?reportError:function(e){console.error(e)};function qs(e){this._internalRoot=e}Li.prototype.render=qs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(N(409));bi(e,n,null,null)};Li.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pt(function(){bi(null,e,null,null)}),n[Mn]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Wn.length&&n!==0&&n<Wn[t].priority;t++);Wn.splice(t,0,e),t===0&&Wd(e)}};function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function Bg(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=xi(a);i.call(u)}}var a=mm(n,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=a,e[Mn]=a.current,Gr(e.nodeType===8?e.parentNode:e),Pt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=xi(s);l.call(u)}}var s=_s(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=s,e[Mn]=s.current,Gr(e.nodeType===8?e.parentNode:e),Pt(function(){bi(n,s,t,r)}),s}function Ii(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=xi(a);l.call(s)}}bi(n,a,e,o)}else a=Bg(t,n,e,o,r);return xi(a)}Vd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Nr(n.pendingLanes);t!==0&&(rs(n,t|1),He(n,ce()),(J&6)===0&&(lr=ce()+500,ct()))}break;case 13:Pt(function(){var r=Dn(e,1);if(r!==null){var o=Ie();xn(r,e,1,o)}}),js(e,1)}};os=function(e){if(e.tag===13){var n=Dn(e,134217728);if(n!==null){var t=Ie();xn(n,e,134217728,t)}js(e,134217728)}};Ud=function(e){if(e.tag===13){var n=rt(e),t=Dn(e,n);if(t!==null){var r=Ie();xn(t,e,n,r)}js(e,n)}};Hd=function(){return Q};$d=function(e,n){var t=Q;try{return Q=e,n()}finally{Q=t}};Ya=function(e,n,t){switch(n){case"input":if(Ha(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Ei(r);if(!o)throw Error(N(90));Sd(r),Ha(r,o)}}}break;case"textarea":Ed(e,t);break;case"select":n=t.value,n!=null&&Jt(e,!!t.multiple,n,!1)}};bd=bs;Ld=Pt;var Vg={usingClientEntryPoint:!1,Events:[co,Dt,Ei,Td,Od,bs]},Er={findFiberByHostInstance:gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ug={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_d(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Dg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{wi=Lo.inject(Ug),An=Lo}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vg;Xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rs(n))throw Error(N(200));return Mg(e,n,null,t)};Xe.createRoot=function(e,n){if(!Rs(e))throw Error(N(299));var t=!1,r="",o=fm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=_s(e,1,!1,null,null,t,!1,r,o),e[Mn]=n.current,Gr(e.nodeType===8?e.parentNode:e),new qs(n)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=_d(n),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Pt(e)};Xe.hydrate=function(e,n,t){if(!Fi(n))throw Error(N(200));return Ii(null,e,n,!0,t)};Xe.hydrateRoot=function(e,n,t){if(!Rs(e))throw Error(N(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=fm;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=mm(n,null,e,1,t!=null?t:null,o,!1,i,a),e[Mn]=n.current,Gr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Li(n)};Xe.render=function(e,n,t){if(!Fi(n))throw Error(N(200));return Ii(null,e,n,!1,t)};Xe.unmountComponentAtNode=function(e){if(!Fi(e))throw Error(N(40));return e._reactRootContainer?(Pt(function(){Ii(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};Xe.unstable_batchedUpdates=bs;Xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Fi(t))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ii(e,n,t,!1,r)};Xe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=Xe})(md);var uc=md.exports;qa.createRoot=uc.createRoot,qa.hydrateRoot=uc.hydrateRoot;const Hg="/assets/imgBanner.84f9a359.webp",$g="/assets/minha_foto.0d8f5b3b.webp";var _i={exports:{}},ji={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg=U.exports,Jg=Symbol.for("react.element"),Qg=Symbol.for("react.fragment"),Kg=Object.prototype.hasOwnProperty,Gg=Wg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yg={key:!0,ref:!0,__self:!0,__source:!0};function hm(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Kg.call(n,r)&&!Yg.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Jg,type:e,key:i,ref:a,props:o,_owner:Gg.current}}ji.Fragment=Qg;ji.jsx=hm;ji.jsxs=hm;(function(e){e.exports=ji})(_i);const gm=_i.exports.Fragment,P=_i.exports.jsx,de=_i.exports.jsxs;function dt(e){return P("div",{className:`w-full px-5 lg:mx-auto lg:max-w-7xl lg:px-0 ${e.className}`,children:e.children})}function Xg(){return P("div",{className:"bg-azulDark",children:P(dt,{children:de("div",{className:"grid grid-cols-1 gap-10 py-8 text-white md:grid-cols-2 md:gap-4 lg:py-36 ",children:[de("div",{className:"my-8 flex flex-col justify-around gap-8",children:[P("h1",{className:"font-playfair text-6xl font-bold",children:"Ol\xE1, Mundo!"}),P("p",{className:"font-playfair text-2xl leading-9",children:"Boas vindas ao meu espa\xE7o pessoal! Eu sou Livio Alvarenga, Engenheiro de Produ\xE7\xE3o, Dev Backend e Frontend. Com ampla viv\xEAncia na \xE1rea gerencial, sou um profissional que consegue unir a experi\xEAncia pr\xE1tica do neg\xF3cio com o uso de tecnologia, buscando inova\xE7\xE3o, efici\xEAncia e solu\xE7\xE3o de problemas de forma personalizada."})]}),de("div",{className:"relative h-[307px] md:my-auto lg:h-[390px]",children:[P("img",{className:"absolute bottom-1/2 w-full translate-y-[40%] lg:w-[90%] lg:translate-y-1/2 ",src:Hg,"aria-hidden":!0}),P("img",{className:"absolute bottom-9 left-1/2 w-[171px] rounded-full shadow-sm shadow-azulLight md:bottom-0 md:w-[188px] md:shadow md:shadow-azulLight lg:left-[60%] lg:w-[260px] ",src:$g,alt:"Livio Alvarenga"})]})]})})})}/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},io.apply(this,arguments)}var Gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gn||(Gn={}));const cc="popstate";function Zg(e){e===void 0&&(e={});function n(r,o){let{pathname:i,search:a,hash:l}=r.location;return Ol("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:ao(o)}return tv(n,t,null,e)}function ev(){return Math.random().toString(36).substr(2,8)}function dc(e){return{usr:e.state,key:e.key}}function Ol(e,n,t,r){return t===void 0&&(t=null),io({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?dr(n):n,{state:t,key:n&&n.key||r||ev()})}function ao(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function dr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function nv(e){let n=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",t=typeof e=="string"?e:ao(e);return new URL(t,n)}function tv(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Gn.Pop,s=null;function u(){l=Gn.Pop,s&&s({action:l,location:m.location})}function c(h,v){l=Gn.Push;let w=Ol(m.location,h,v);t&&t(w,h);let A=dc(w),d=m.createHref(w);try{a.pushState(A,"",d)}catch{o.location.assign(d)}i&&s&&s({action:l,location:m.location})}function p(h,v){l=Gn.Replace;let w=Ol(m.location,h,v);t&&t(w,h);let A=dc(w),d=m.createHref(w);a.replaceState(A,"",d),i&&s&&s({action:l,location:m.location})}let m={get action(){return l},get location(){return e(o,a)},listen(h){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(cc,u),s=h,()=>{o.removeEventListener(cc,u),s=null}},createHref(h){return n(o,h)},encodeLocation(h){let v=nv(ao(h));return io({},h,{pathname:v.pathname,search:v.search,hash:v.hash})},push:c,replace:p,go(h){return a.go(h)}};return m}var pc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pc||(pc={}));function rv(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?dr(n):n,o=ym(r.pathname||"/",t);if(o==null)return null;let i=vm(e);ov(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=mv(i[l],gv(o));return a}function vm(e,n,t,r){return n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(ke(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let l=it([r,a.relativePath]),s=t.concat(a);o.children&&o.children.length>0&&(ke(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),vm(o.children,n,s,l)),!(o.path==null&&!o.index)&&n.push({path:l,score:dv(l,o.index),routesMeta:s})}),n}function ov(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:pv(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const iv=/^:\w+$/,av=3,lv=2,sv=1,uv=10,cv=-2,mc=e=>e==="*";function dv(e,n){let t=e.split("/"),r=t.length;return t.some(mc)&&(r+=cv),n&&(r+=lv),t.filter(o=>!mc(o)).reduce((o,i)=>o+(iv.test(i)?av:i===""?sv:uv),r)}function pv(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function mv(e,n){let{routesMeta:t}=e,r={},o="/",i=[];for(let a=0;a<t.length;++a){let l=t[a],s=a===t.length-1,u=o==="/"?n:n.slice(o.length)||"/",c=fv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let p=l.route;i.push({params:r,pathname:it([o,c.pathname]),pathnameBase:wv(it([o,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(o=it([o,c.pathnameBase]))}return i}function fv(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=hv(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,p)=>{if(c==="*"){let m=l[p]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=vv(l[p]||"",c),u},{}),pathname:i,pathnameBase:a,pattern:e}}function hv(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ms(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function gv(e){try{return decodeURI(e)}catch(n){return Ms(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function vv(e,n){try{return decodeURIComponent(e)}catch(t){return Ms(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function ym(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function ke(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ms(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function yv(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?dr(e):e;return{pathname:t?t.startsWith("/")?t:xv(t,n):n,search:kv(r),hash:Sv(o)}}function xv(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ea(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function wm(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=dr(e):(o=io({},e),ke(!o.pathname||!o.pathname.includes("?"),Ea("?","pathname","search",o)),ke(!o.pathname||!o.pathname.includes("#"),Ea("#","pathname","hash",o)),ke(!o.search||!o.search.includes("#"),Ea("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=t;else{let p=n.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}l=p>=0?n[p]:"/"}let s=yv(o,l),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const it=e=>e.join("/").replace(/\/\/+/g,"/"),wv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Cv{constructor(n,t,r){this.status=n,this.statusText=t||"",this.data=r}}function Ev(e){return e instanceof Cv}const Pv=new Set(["POST","PUT","PATCH","DELETE"]);[...Pv];/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},bl.apply(this,arguments)}function zv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const Av=typeof Object.is=="function"?Object.is:zv,{useState:Nv,useEffect:Tv,useLayoutEffect:Ov,useDebugValue:bv}=ja;function Lv(e,n,t){const r=n(),[{inst:o},i]=Nv({inst:{value:r,getSnapshot:n}});return Ov(()=>{o.value=r,o.getSnapshot=n,Pa(o)&&i({inst:o})},[e,r,n]),Tv(()=>(Pa(o)&&i({inst:o}),e(()=>{Pa(o)&&i({inst:o})})),[e]),bv(r),r}function Pa(e){const n=e.getSnapshot,t=e.value;try{const r=n();return!Av(t,r)}catch{return!0}}function Fv(e,n,t){return n()}const Iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_v=!Iv,jv=_v?Fv:Lv;"useSyncExternalStore"in ja&&(e=>e.useSyncExternalStore)(ja);const qv=U.exports.createContext(null),Rv=U.exports.createContext(null),km=U.exports.createContext(null),Ds=U.exports.createContext(null),qi=U.exports.createContext(null),Nt=U.exports.createContext({outlet:null,matches:[]}),Sm=U.exports.createContext(null);function Mv(e,n){let{relative:t}=n===void 0?{}:n;mo()||ke(!1);let{basename:r,navigator:o}=U.exports.useContext(Ds),{hash:i,pathname:a,search:l}=Em(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:it([r,a])),o.createHref({pathname:s,search:l,hash:i})}function mo(){return U.exports.useContext(qi)!=null}function pr(){return mo()||ke(!1),U.exports.useContext(qi).location}function Cm(){mo()||ke(!1);let{basename:e,navigator:n}=U.exports.useContext(Ds),{matches:t}=U.exports.useContext(Nt),{pathname:r}=pr(),o=JSON.stringify(xm(t).map(l=>l.pathnameBase)),i=U.exports.useRef(!1);return U.exports.useEffect(()=>{i.current=!0}),U.exports.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){n.go(l);return}let u=wm(l,JSON.parse(o),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:it([e,u.pathname])),(s.replace?n.replace:n.push)(u,s.state,s)},[e,n,o,r])}const Dv=U.exports.createContext(null);function Bv(e){let n=U.exports.useContext(Nt).outlet;return n&&P(Dv.Provider,{value:e,children:n})}function Vv(){let{matches:e}=U.exports.useContext(Nt),n=e[e.length-1];return n?n.params:{}}function Em(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=U.exports.useContext(Nt),{pathname:o}=pr(),i=JSON.stringify(xm(r).map(a=>a.pathnameBase));return U.exports.useMemo(()=>wm(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function Uv(e,n){mo()||ke(!1);let t=U.exports.useContext(km),{matches:r}=U.exports.useContext(Nt),o=r[r.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=pr(),s;if(n){var u;let v=typeof n=="string"?dr(n):n;a==="/"||((u=v.pathname)==null?void 0:u.startsWith(a))||ke(!1),s=v}else s=l;let c=s.pathname||"/",p=a==="/"?c:c.slice(a.length)||"/",m=rv(e,{pathname:p}),h=Jv(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},i,v.params),pathname:it([a,v.pathname]),pathnameBase:v.pathnameBase==="/"?a:it([a,v.pathnameBase])})),r,t||void 0);return n&&h?P(qi.Provider,{value:{location:bl({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:Gn.Pop},children:h}):h}function Hv(){let e=Kv(),n=Ev(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r};return de(gm,{children:[P("h2",{children:"Unhandled Thrown Error!"}),P("h3",{style:{fontStyle:"italic"},children:n}),t?P("pre",{style:o,children:t}):null,P("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),de("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",P("code",{style:i,children:"errorElement"})," props on\xA0",P("code",{style:i,children:"<Route>"})]})]})}class $v extends U.exports.Component{constructor(n){super(n),this.state={location:n.location,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location?{error:n.error,location:n.location}:{error:n.error||t.error,location:t.location}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?P(Sm.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Wv(e){let{routeContext:n,match:t,children:r}=e,o=U.exports.useContext(qv);return o&&t.route.errorElement&&(o._deepestRenderedBoundaryId=t.route.id),P(Nt.Provider,{value:n,children:r})}function Jv(e,n,t){if(n===void 0&&(n=[]),e==null)if(t!=null&&t.errors)e=t.matches;else return null;let r=e,o=t==null?void 0:t.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||ke(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,u=t?a.route.errorElement||P(Hv,{}):null,c=()=>P(Wv,{match:a,routeContext:{outlet:i,matches:n.concat(r.slice(0,l+1))},children:s?u:a.route.element!==void 0?a.route.element:i});return t&&(a.route.errorElement||l===0)?P($v,{location:t.location,component:u,error:s,children:c()}):c()},null)}var fc;(function(e){e.UseRevalidator="useRevalidator"})(fc||(fc={}));var Ll;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ll||(Ll={}));function Qv(e){let n=U.exports.useContext(km);return n||ke(!1),n}function Kv(){var e;let n=U.exports.useContext(Sm),t=Qv(Ll.UseRouteError),r=U.exports.useContext(Nt),o=r.matches[r.matches.length-1];return n||(r||ke(!1),o.route.id||ke(!1),(e=t.errors)==null?void 0:e[o.route.id])}function Gv(e){return Bv(e.context)}function It(e){ke(!1)}function Yv(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Gn.Pop,navigator:i,static:a=!1}=e;mo()&&ke(!1);let l=n.replace(/^\/*/,"/"),s=U.exports.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=dr(r));let{pathname:u="/",search:c="",hash:p="",state:m=null,key:h="default"}=r,v=U.exports.useMemo(()=>{let w=ym(u,l);return w==null?null:{pathname:w,search:c,hash:p,state:m,key:h}},[l,u,c,p,m,h]);return v==null?null:P(Ds.Provider,{value:s,children:P(qi.Provider,{children:t,value:{location:v,navigationType:o}})})}function Xv(e){let{children:n,location:t}=e,r=U.exports.useContext(Rv),o=r&&!n?r.router.routes:Fl(n);return Uv(o,t)}var hc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(hc||(hc={}));new Promise(()=>{});function Fl(e,n){n===void 0&&(n=[]);let t=[];return U.exports.Children.forEach(e,(r,o)=>{if(!U.exports.isValidElement(r))return;if(r.type===U.exports.Fragment){t.push.apply(t,Fl(r.props.children,n));return}r.type!==It&&ke(!1),!r.props.index||!r.props.children||ke(!1);let i=[...n,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Fl(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zv(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function e1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n1(e,n){return e.button===0&&(!n||n==="_self")&&!e1(e)}const t1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function r1(e){let{basename:n,children:t,window:r}=e,o=U.exports.useRef();o.current==null&&(o.current=Zg({window:r,v5Compat:!0}));let i=o.current,[a,l]=U.exports.useState({action:i.action,location:i.location});return U.exports.useLayoutEffect(()=>i.listen(l),[i]),P(Yv,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:i})}const Pm=U.exports.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:c}=n,p=Zv(n,t1),m=Mv(u,{relative:o}),h=o1(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:o});function v(w){r&&r(w),w.defaultPrevented||h(w)}return P("a",{...p,href:m,onClick:i?r:v,ref:t,target:s})});var gc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(gc||(gc={}));var vc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vc||(vc={}));function o1(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:a}=n===void 0?{}:n,l=Cm(),s=pr(),u=Em(e,{relative:a});return U.exports.useCallback(c=>{if(n1(c,t)){c.preventDefault();let p=r!==void 0?r:ao(s)===ao(u);l(e,{replace:p,state:o,preventScrollReset:i,relative:a})}},[s,l,u,r,o,t,e,i,a])}function zm({children:e}){return de("main",{children:[P(Xg,{}),P(Gv,{}),e]})}const i1=[{href:"https://www.facebook.com/profile.php?id=100083957091312",title:"Facebook Livio Alvarenga",width:"35",height:"35",viewBox:"0 0 24 24",path:"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z",id:1},{href:"https://twitter.com/AlvarengaLivio",title:"Twitter Livio Alvarenga",width:"35",height:"35",viewBox:"0 0 24 24",path:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z",id:2},{href:"https://www.instagram.com/livio_alvarenga/",title:"Instagram Livio Alvarenga",width:"35",height:"35",viewBox:"0 0 24 24",path:"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z",id:3},{href:"https://www.linkedin.com/in/livio-alvarenga-planejamento-mrp-engenheiro-produ%C3%A7%C3%A3o-materiais-vba-powerbi/",title:"Linkedin Livio Alvarenga",width:"35",height:"35",viewBox:"0 0 24 24",path:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",id:4},{href:"https://www.youtube.com/channel/UCrZgsh8IWyyNrRZ7cjrPbcg",title:"Youtube Livio Alvarenga",width:"35",height:"35",viewBox:"0 0 24 24",path:"M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z",id:5},{href:"https://github.com/LivioAlvarenga",title:"Github Livio Alvarenga",width:"35",height:"35",viewBox:"0 0 24 24",path:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",id:6},{href:"https://cursos.alura.com.br/vitrinedev/livioalvarenga",title:"Vitrinedev Livio Alvarenga",width:"82",height:"37",viewBox:"0 0 82 37",path:"M.525.975v34.64h21.973v-3.257H3.78V4.233h74.11v28.125H64.552l-1.312 3.256h17.905V.975Z M37.803 22.563v3.822a4.485 4.485 0 0 0-2.393-.669c-2.95 0-5.046 2.137-5.046 5.123 0 2.987 2.098 5.136 5.044 5.136a4.445 4.445 0 0 0 2.897-1.042l.322.707h2.498V22.563zM35.86 33.04c-1.236 0-2.15-.94-2.15-2.2 0-1.263.914-2.201 2.149-2.201 1.236 0 2.15.938 2.15 2.198 0 1.265-.9 2.203-2.15 2.203zm17.196-2.29c0-2.82-2.149-5.034-5.251-5.034-3.012 0-5.215 2.175-5.215 5.123 0 2.936 2.216 5.123 5.215 5.123 2.406 0 4.35-1.378 5.033-3.565h-3.296c-.32.568-.966.901-1.737.901-1.044 0-1.752-.568-1.957-1.675h7.131c.052-.295.077-.579.077-.874zm-7.144-.953c.271-.953.94-1.48 1.906-1.48 1.004 0 1.685.512 1.982 1.48h-3.89zm14.444-3.76-1.79 5.69-1.814-5.69h-3.63l3.912 9.616h3l3.862-9.616zm-40.678-14.92-1.788 5.69-1.816-5.688h-3.63l3.914 9.615h3l3.86-9.615h-3.54Zm4.62-4.002v2.807h3.259V7.115Zm-.023 4.004v9.615h3.307v-9.617h-3.307zm18.805-.039c-1.146 0-1.97.32-2.652 1.107l-.515-1.068h-2.215v9.616h3.31v-4.893c0-1.222.488-1.737 1.66-1.737h1.287V11.08Zm2.15-3.965v2.807h3.257V7.115h-3.255zm-.025 4.004v9.615h3.307v-9.617h-3.307zm14.827 3.758c-.49-3.423-3.038-3.965-4.698-4.03-1.66.08-4.209.605-4.698 4.032-.025.153-.039.32-.066.461v5.394h3.335V15.6c0-1.147.515-1.842 1.429-1.932h.013c.914.092 1.43.785 1.43 1.932v5.136h3.332V15.34c-.026-.14-.051-.308-.077-.463zm11.946.967c0-2.821-2.149-5.035-5.251-5.035-3.012 0-5.215 2.177-5.215 5.123 0 2.935 2.216 5.125 5.215 5.125 2.406 0 4.35-1.378 5.033-3.567h-3.296c-.32.568-.966.901-1.737.901-1.044 0-1.752-.566-1.957-1.673h7.131c.052-.297.077-.592.077-.876zm-7.144-.967c.27-.953.94-1.48 1.906-1.48 1.004 0 1.698.514 1.982 1.48zm-28.486 3.076v2.871h-2.254c-2.109 0-3.384-1.288-3.384-3.398v-3.592h-1.737v-2.523h1.724V7.876h3.284v2.6l-.092.051-1.248.784h3.63v2.523h-2.303v3.038c0 .684.41 1.094 1.106 1.094h1.274z M30.712 13.834h-.015v.722h.015zM25.574 32.358v3.256h3.399v-3.256h-3.4z",id:7},{href:"https://livioalvarenga.com/",title:"Portfolio Livio Alvarenga",width:"35",height:"35",viewBox:"0 0 24 24",path:"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z",id:8}];function a1(e){return P("ul",{className:"mb-5 flex flex-wrap items-center justify-center gap-7 lg:mb-0",children:e.icons.map(n=>P("li",{className:"group lg:hover:animate-bounce",children:P("a",{href:n.href,target:"_blank",rel:"noreferrer",title:n.title,children:P("svg",{className:`duration-500 ease-in-out ${e.hoverIconColor} ${e.iconColor}`,width:n.width,height:n.height,viewBox:n.viewBox,children:P("path",{d:n.path})})})},n.id))})}function l1(e){return P("footer",{className:`w-full text-base ${e.backgroundColor} ${e.textColor}`,children:P(dt,{children:de("div",{className:"flex flex-wrap items-center justify-center gap-5 py-7 lg:justify-between",children:[P(a1,{icons:i1,iconColor:e.iconColor,hoverIconColor:e.hoverIconColor}),de("p",{className:"",children:["Desenvolvido por"," ",P("a",{className:"font-bold",href:"https://www.livioalvarenga.com",target:"_blank",rel:"noreferrer",title:"Portfolio Livio Alvarenga",children:"Livio Alvarenga"}),"."]})]})})})}function s1(e){const t=pr().pathname===e.to;return P("li",{className:"h-full",children:P(Pm,{to:e.to,children:de("div",{className:"flex h-full flex-col items-center justify-center",children:[P("p",{className:`text-xl ${e.colorText}`,children:e.text}),P("span",{className:`${t?"opacity-100":"opacity-0"} h-[3px] w-8  ${e.colorBorder} lg:w-9`})]})})})}const u1=[{text:"Home",to:"/"},{text:"Sobre Mim",to:"/sobre-mim"}];function c1(){return P("header",{className:"w-full",children:P(dt,{children:P("nav",{className:" h-[72px] md:h-28",children:P("ul",{className:"flex h-full w-full items-center justify-center gap-12",children:u1.map(e=>P(s1,{text:e.text,to:e.to,colorText:"text-azulDark",colorBorder:"bg-azulDark"},e.text))})})})})}function d1(){const{pathname:e}=pr();return U.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const p1="/assets/bannerSobre.5347c304.webp",m1="/assets/sobre_mim_foto.6b4fb66c.webp",f1="/assets/sobre_mim_foto_hover.4430bb5c.webp";function h1({position:e,banner:n,title:t,titleColor:r}){return de("div",{className:"group relative flex h-28 items-center md:h-48 lg:h-56",children:[P("div",{className:"absolute top-0 -z-10 h-full w-full overflow-hidden",id:"banner",children:P("img",{className:`w-full object-cover opacity-30 duration-1000 ease-in-out lg:group-hover:opacity-100 ${e}`,src:n,lt:"imagem de programa\xE7\xE3o eat code sleep e repeat"})}),P(dt,{children:P("h2",{className:`font-playfair text-3xl font-bold duration-700 ease-in-out md:text-5xl lg:text-6xl  lg:group-hover:text-7xl ${r}`,children:t})})]})}function Am({children:e,title:n,banner:t,position:r,titleColor:o}){return de("article",{className:" text-fontPost ",children:[P(h1,{position:r,banner:t,title:n,titleColor:o}),P(dt,{children:P("div",{children:e})})]})}function g1(){return de(Am,{banner:p1,title:"Sobre mim",position:"object-[0px_-20px] md:object-[0px_-40px] lg:object-[0px_-265px]",titleColor:"lg:group-hover:text-azulLight",children:[P("h3",{className:"mt-10 mb-8 font-playfair text-3xl font-bold md:text-4xl lg:text-5xl",children:"Ol\xE1, eu sou Livio Alvarenga,"}),de("div",{className:"group relative mb-8 shadow-2xl",children:[P("img",{className:"absolute right-0  w-full rounded opacity-0 duration-1000 ease-in-out md:m-[0_auto_2rem] md:w-[70vw] lg:ml-6 lg:w-[35vw] lg:group-hover:opacity-100",src:f1,alt:"foto Livio Alvarenga com uma camiseta de programa\xE7\xE3o"}),P("img",{className:"w-full rounded md:m-[0_auto_2rem] md:w-[70vw] lg:float-right lg:ml-6 lg:w-[35vw]",src:m1,alt:"foto Livio Alvarenga com uma camiseta de programa\xE7\xE3o"})]}),P("p",{className:"mb-5 md:text-xl lg:text-2xl ",children:"engenheiro de Produ\xE7\xE3o aficcionado por tecnologia, programa\xE7\xE3o, processos e planejamento, uni todas essas paix\xF5es em uma s\xF3 profiss\xE3o."}),P("p",{className:"mb-5 md:text-xl lg:text-2xl",children:"Prazer, meu nome \xE9 Livio Alvarenga. Sou engenheiro e desenvolvedor, crio solu\xE7\xF5es personalizadas para empresas com uma boa dose de tecnologia."}),P("p",{className:"mb-5 md:text-xl lg:text-2xl",children:"Para que voc\xEA entenda como cheguei at\xE9 aqui, gostaria de te contar uma breve hist\xF3ria."}),P("p",{className:"mb-5 md:text-xl lg:text-2xl",children:"Antes de me tornar desenvolvedor, ressalto que sou t\xE9cnico em eletr\xF4nica, engenheiro de produ\xE7\xE3o, p\xF3s graduado em processos industriais, log\xEDstica, MBA em Gerenciamento de Projetos e MBA em Data Science."}),P("p",{className:"mb-5 md:text-xl lg:text-2xl",children:"Fiz minha carreira de oper\xE1rio de ch\xE3o de f\xE1brica at\xE9 a ger\xEAncia de uma multinacional do ramo de energia."}),P("p",{className:"mb-5 md:text-xl lg:text-2xl",children:"Passei por toda a cadeia estrat\xE9gica e por todo planejamento f\xEDsico, produtivo e de suprimentos. Projetei linhas de produ\xE7\xE3o, almoxarifados, desenvolvi fornecedores, gerencie suprimentos. Implementei v\xE1rios, ah sim, v\xE1rios MRPs (isso foi cansativo, mas desafiador). Criei toda estrutura de planejamento de produ\xE7\xE3o, materiais e suprimentos de uma empresa."}),P("p",{className:"mb-5 md:text-xl lg:text-2xl",children:"Sim, fiz tudo isso em longos 20 anos, com trope\xE7os, acertos e muito aprendizado. Ao longo de todo esse tempo percebi algo fundamental: n\xE3o \xE9 poss\xEDvel dar conta de administrar todo volume de informa\xE7\xE3o sem tecnologia, motivo pelo qual me apaixonei pela programa\xE7\xE3o e a\xED est\xE1 o meu grande diferencial."}),P("p",{className:"mb-5 md:text-xl lg:text-2xl",children:"Sou um programador com vis\xE3o 360 de neg\xF3cios, pois foram 20 anos aprendendo e adquirindo experi\xEAncias. Quando estou desenvolvendo aplicativos e solu\xE7\xF5es, toda essa experi\xEAncia \xE9 passada para o c\xF3digo de forma natural. Assim, consegui unir minhas paix\xF5es: tecnologia e planejamento."}),P("p",{className:"mb-5 md:text-xl lg:text-2xl",children:"Estudei muito no passado, estou estudando agora e vou estudar at\xE9 o fim dos meus dias, pois a curiosidade de sempre aprender algo novo \xE9 a minha motiva\xE7\xE3o. Tecnologia \xE9 isso, a cada dia se renova. Vou absorvendo novos conceitos mediante a necessidade dos meus clientes e dos meus projetos pessoais, sempre com a admira\xE7\xE3o de um entusiasta pela ci\xEAncia."}),P("p",{className:"mb-10 md:text-xl lg:mb-24 lg:text-2xl",children:"Sou considerado um profissional anal\xEDtico, empreendedor, inovador e determinado. Sou o profissional polivalente que fala tanto a linguagem do neg\xF3cio como a linguagem da tecnologia. Sou um l\xEDder que compartilha conhecimento e busca fornecer meios para que minha equipe evolua e cres\xE7a profissionalmente."})]})}function Nm({post:e}){return P(Pm,{to:`/posts/${e.id}`,children:de("div",{className:"group grid h-[320px] cursor-pointer grid-rows-2",children:[P("div",{className:"overflow-hidden",children:P("img",{className:"object-cover duration-1000 ease-in-out lg:group-hover:scale-125",src:`/assets/posts/${e.id}/capa.png`,alt:"Imagem de capa do post"})}),de("div",{className:"grid grid-rows-2 items-center justify-center  bg-white p-3",children:[P("h2",{className:"text-center font-playfair text-xl font-semibold",children:e.titulo}),P("button",{className:" self-center justify-self-center rounded-3xl bg-azulLight px-6 py-3 text-xl tracking-wider text-white shadow-md duration-1000  ease-in-out lg:group-hover:bg-azulDark lg:group-hover:px-9  lg:group-hover:shadow-fontPost",children:"Ler"})]})]})})}const Il=[{id:1,titulo:"Python: Origem do nome",texto:`> Fonte: <https://www.alura.com.br/artigos/python-origem-do-nome> 

 Por que uma das linguagens de programa\xE7\xE3o mais amada no mundo tem esse nome e qual a origem dele? Tem rela\xE7\xE3o com algum tipo de cobra? Descubra isso e muito mais neste artigo! 

 ### Um pouco de hist\xF3ria 

 [Guido Van Rossum](https://pt.wikipedia.org/wiki/Guido_van_Rossum) criou o [Python](https://www.alura.com.br/cursos-online-programacao/python) em 1989. Ele trabalhava no [Centrum Voor Wiskunde en Informatica](https://www.cwi.nl/) no in\xEDcio dos anos 1980, e seu trabalho era implementar a linguagem de programa\xE7\xE3o conhecida como [ABC](https://pt.wikipedia.org/wiki/ABC_(linguagem_de_programa%C3%A7%C3%A3o)).  

 Durante o final dos anos 1980, enquanto ainda estava no CWI, ele come\xE7ou a procurar por uma linguagem de script que tivesse sintaxe semelhante ao ABC, mas que tivesse acesso \xE0s chamadas de sistema do [Amoeba](https://pt.wikipedia.org/wiki/Amoeba_sistema_operacional). Ap\xF3s procurar e n\xE3o encontrar nenhuma linguagem que atendesse \xE0s suas necessidades, Rossum decidiu projetar uma linguagem de script simples que pudesse superar as inadequa\xE7\xF5es do ABC.  

 No final da d\xE9cada de 1980, Rossum come\xE7ou a desenvolver o novo script, e em 1991, lan\xE7ou a vers\xE3o de abertura da linguagem de programa\xE7\xE3o. Esta primeira vers\xE3o tinha um sistema de m\xF3dulo [Modula-3](https://pt.wikipedia.org/wiki/Modula-3), linguagem que foi posteriormente denominada \u201CPython\u201D. 

 ### Certo, mas de onde vem esse nome? 

 Muitas pessoas costumam pensar que o nome Python tem origem em um tipo de cobra, j\xE1 que o logotipo do Python mostra a imagem de uma cobra azul e amarela. 

 ![gif do logo da linguagem de programa\xE7\xE3o python](/assets/posts/1/gif-1.gif)  

 No entanto, a verdadeira hist\xF3ria por tr\xE1s da nomenclatura \xE9 um pouco diferente.  

 Na d\xE9cada de 1970, a BBC tinha um programa de TV popular do qual van Rossum era um grande f\xE3 chamado [Fly Circus de Monty Python](https://pt.wikipedia.org/wiki/Monty_Python%27s_Flying_Circus), ou apenas Monty Python para os \xEDntimos.  

 Assim, quando desenvolveu a linguagem, ele pensou que precisava de um nome que fosse curto, \xFAnico e um pouco misterioso, e por algum motivo que s\xF3 ele conhecia, decidiu chamar o projeto de \u2018Python\u2019. 

 ![homem saindo de uma loja](/assets/posts/1/gif-2.gif) 

 E se voc\xEA fosse criar sua pr\xF3pria linguagem de programa\xE7\xE3o, qual nome daria? Faria uma homenagem a sua s\xE9rie, jogo ou filme favorito? 

 No nosso [curso de python](https://www.alura.com.br/cursos-online-programacao/python), que \xE9 uma forma\xE7\xE3o completa, entramos tamb\xE9m em outras curiosidades da linguagem e sua hist\xF3ria, pois a comunidade \xE9 muito forte e toma decis\xF5es importantes. 

 ### Conclus\xE3o 

 Atualmente, [o Python \xE9 uma tend\xEAncia mundial no mundo das pessoas que desenvolvem](https://blog.revelo.com.br/desenvolvedores-python-estao-em-alta-no-mercado/), j\xE1 que pode ser aplicado em diferentes cen\xE1rios, como: Data Science, aplica\xE7\xF5es web, desenvolvimento Back-End, cria\xE7\xE3o de jogos e scripts. 

 Quer aprender mais sobre Python? Veja: 

 - [Python do zero - Forma\xE7\xE3o na linguagem mais querida do momento](https://www.alura.com.br/formacao-Python-linguagem) 

 - [Python para Web - Forma\xE7\xE3o Django](https://www.alura.com.br/formacao-django) 

 - [API com Python - Curso Django Rest Framework](https://www.alura.com.br/curso-online-api-django-3-rest-framework) 

 - [TDD com Python - Desenvolvimento guiado por testes](https://cursos.alura.com.br/course/tdd-django-3-testes) 

 - [Pacman com Python - Criando um jogo com Pygame](https://www.alura.com.br/curso-online-python-pygame-pacman-colisao-pontuacao) 

 `},{id:2,titulo:"O que \xE9 Node?",texto:`> Fonte: <https://www.alura.com.br/artigos/node-js-definicao-caracteristicas-vantagens-usos> 

  ### Introdu\xE7\xE3o 

 Node.JS \xE9 uma ferramenta amplamente utilizada no universo de desenvolvimento e todos que atuam na \xE1rea de tecnologia j\xE1 ouviram falar, nem que seja nos milhares de an\xFAncios de cursos ou mesmo de vagas. Mas voc\xEA se pergunta: afinal, o que \xE9 Node.js? Para que serve? Como ele atua 

 

 Calma que, antes de olhar para o ambiente Node.JS, precisamos entender um pouco sobre o que \xE9 o JavaScript e como ele funciona. Vamos l\xE1! 

 

 ### Node.JS e JavaScript 

 

 JavaScript \xE9 uma linguagem de programa\xE7\xE3o que originalmente foi desenvolvida para trazer maior interatividade aos **websites** atrav\xE9s da manipula\xE7\xE3o do *DOM* (Document Object Model). Vamos conferir a defini\xE7\xE3o do livro que \xE9 uma refer\xEAncia na tem\xE1tica, o **Eloquent JavaScript** 

 

 > O JavaScript foi introduzido em 1995 como uma forma de adicionar dinamicidade \xE0 p\xE1ginas da web no navegador Netscape Navigator. Desde ent\xE3o, a linguagem foi adotada por todos os outros principais navegadores gr\xE1ficos da web. Ela tornou poss\xEDveis o desenvolvimento das aplica\xE7\xF5es modernas  da web - aplica\xE7\xF5es com os quais voc\xEA pode interagir diretamente sem recarregar a p\xE1gina a cada a\xE7\xE3o. JavaScript tamb\xE9m \xE9 usado em sites mais tradicionais para fornecer v\xE1rias formas de interatividade de forma mais inteligente 

  

 >Fonte: [Tradu\xE7\xE3o livre do livro Eloquent JavaScript](https://eloquentjavascript.net/00_intro.html) 

 

 Portanto, de forma resumida, podemos entender que o **JavaScript** foi pensado para ser r\xE1pido, din\xE2mico e acess\xEDvel. A *linguagem interpretada* possibilita subir ou trabalhar em suas aplica\xE7\xF5es sem precisar  configurar todo um ambiente complexo. 

 

 Essas caracter\xEDsticas motivaram o engenheiro de software Ryan Dahl a desenvolver um ambiente, como um programa que voc\xEA instala no seu computador, que trabalha com a linguagem JavaScript fora do navegador e pelo lado do servidor, via terminal, de uma maneira menos restritiva 

 

 ### Tudo bem, mas e o Node.JS? 

  

 O JavaScript nasceu para atender demandas voltadas ao Front e como as necessidades aumentam de acordo com o crescimento tecnol\xF3gico, surgiu a ideia de utilizar uma mesma linguagem no lado do cliente e do servidor para otimizar processos e servi\xE7os. Dessa forma, o Node.JS  aparece como uma alternativa vi\xE1vel para programa\xE7\xE3o Back-End por se tratar de um ambiente para desenvolvimento utilizando a linguagem JavaScript 

 

 De acordo com sua defini\xE7\xE3o oficial, o Node \xE9 um **runtime**, que nada mais \xE9 do que um conjunto de c\xF3digos, API\u2019s, ou seja, s\xE3o bibliotecas respons\xE1veis pelo tempo de execu\xE7\xE3o (\xE9 o que faz o seu programa rodar) que funciona como um interpretador de JavaScript fora do ambiente do **navegador web**. 

 

 \xC9 importante frisar que o Node.JS \xE9 um ambiente de execu\xE7\xE3o ass\xEDncrono, isto \xE9, ele trabalha de modo a n\xE3o bloquear no momento da execu\xE7\xE3o da aplica\xE7\xE3o, delegando os processos demorados a um segundo plano. 

 

 Ele d\xE1 muito certo  com os servidores de arquitetura **\u201Csingle threaded\u201D**, isto significa que todos os pedidos para o servidor s\xE3o executados no mesmo t\xF3pico - em vez de serem gerados em processos separados. Um dos grandes diferenciais da parceria Node.JS e Javascript \xE9 o bom desempenho no uso de APIs, j\xE1 que o Javascript faz bastante uso de APIs ass\xEDncronas 

 

 Voc\xEA deve estar se perguntando: \u201CBeleza, j\xE1 entendi o que \xE9 o Node.JS e seu diferencial quando o assunto \xE9 o seu uso com o Javascript, mas o que isso significa?\u201D Vamos entender um pouco mais... vem comigo, que te explico.. 

 

 #### Como o Node.JS funciona 

 

 O **Node \xE9 capaz de interpretar um c\xF3digo JavaScript**, igual ao que o navegador faz. Sendo assim, quando o navegador recebe um comando em JavaScript, ele o interpreta e depois executa as instru\xE7\xF5es fornecidas. 

 

 O Node \xE9 fant\xE1stico (totalmente \u201Csem parcialidade\u201D, aqui pessoal, juro!)  porque torna poss\xEDvel o envio de instru\xE7\xF5es (os nossos c\xF3digos) sem precisar de um navegador ativo, basta ter o Node.JS instalado e utilizar o terminal para executar um programa constru\xEDdo em JavaScript.  

 

 Al\xE9m disso, voc\xEA pode utilizar apenas uma linguagem de programa\xE7\xE3o para tratar requisi\xE7\xF5es entre cliente e servidor. Sensacional, n\xE3o \xE9? 

 

 Para que todo esse processo seja poss\xEDvel de ocorrer fora do navegador, o Node utiliza uma outra ferramenta chamada de **Chrome's V8 JavaScript Engine.** \xC9 esse motor V8 do Chrome que compila e executa o c\xF3digo JavaScript no lugar de apenas interpret\xE1-lo. 

 

 *Ainda parece muito confuso? Vem comigo que te explico melhor\u2026 

 

 O motor V8 da Google \xE9 o centro, o cora\xE7\xE3o que processa todo o c\xF3digo JavaScript do navegador para que sua m\xE1quina compreenda e disponibilize os recursos e intera\xE7\xF5es. S\xF3 \xE9 poss\xEDvel visualizar p\xE1ginas em JavaScript ou trabalhar com um c\xF3digo pelo Node.JS devido ao processamento do motor V8 do Chrome. 

 

 Gra\xE7as ao n\xFAcleo baseado em JavaScript e no motor V8 da Google, o Node.JS possui algumas caracter\xEDsticas que, dependendo do cen\xE1rio, podem ser consideradas como *benef\xEDcios* da plataforma, vamos conferir algumas 

 

 ### Caracter\xEDsticas do Node.Js 

 

 Node.JS pode ser utilizado nas famosas APIS Rest, web scrapping, chatbots, IoT, web servers, aplica\xE7\xF5es Desktop, tudo devido a sua caracter\xEDstica altamente vers\xE1til. Dentre as principais, podemos citar 

 

 - **Multiplataforma:** permite criar desde aplicativos desktop, aplicativos m\xF3veis e at\xE9 sites SaaS 

 - **Multi-paradigma:** \xE9 poss\xEDvel programar em diferentes paradigmas, como: Orientado a Objetos, funcional, imperativo e dirigido \xE0 eventos 

 - **Open Source:** \xE9 uma plataforma de c\xF3digo aberto, isso significa que voc\xEA pode ter acesso ao c\xF3digo fonte do Node.JS e realizar suas pr\xF3prias customiza\xE7\xF5es ou mesmo contribuir para a comunidade de forma direta 

 - **Escal\xE1vel:** Node.JS  foi criado para construir aplica\xE7\xF5es web escal\xE1veis, como podemos ver na sua [documenta\xE7\xE3o oficial]( https://nodejs.org/en/about/) 

 

 O Node.JS ainda apresenta uma curva de aprendizado relativamente menor comparado \xE0 outras linguagens voltadas ao Back-End e possui uma comunidade gigante disposta a ajudar. E sem d\xFAvida a uni\xE3o dessas for\xE7as \xE9 o **super poder do Node.JS** 

 

 ### Empresas que usam Node.Js 

 

 Tudo bem, falamos das in\xFAmeras qualidades do Node.JS mas, na pr\xE1tica\u2026 onde eu posso trabalhar com a ferramenta 

 

 Por conta dos *super-poderes* do Node.JS, uma gama de gigantes no mercado atua diretamente com a plataforma em suas regras de neg\xF3cio, confere s\xF3 a listinha de algumas 

 

 - **NetFlix:** substituiu o renderizador baseado em Java pelo de JavaScript com Node.JS para diminuir o tempo de espera nas requisi\xE7\xF5es dos usu\xE1rios e conseguiu uma redu\xE7\xE3o de cerca de 1 minuto 

 - **IBM:** criou o The Canary in the Gold Mine (CITGM), um utilit\xE1rio de testes amplamente utilizado pela companhia 

 - **LinkedIn:** o aplicativo **mobile** da maior rede profissional \xE9 constru\xEDdo em Node e HTML5, voc\xEA pode conferir a mat\xE9ria na \xEDntegra [aqui](https://venturebeat.com/2011/08/16/linkedin-node/) 

 - **Uber:** sistema de relacionamento entre usu\xE1rios e condutores foi constru\xEDdo em Node.JS por conta de sua r\xE1pida resposta 

 

 E... pasmem! Node.js foi inclusive utilizado pela **NASA** para criar uma API que integra tr\xEAs bases de dados em um s\xF3, justamente para otimizar o acesso aos dados. [Node.JS ajuda NASA a manter Astronautas seguros e arquivos acess\xEDveis - **em ingl\xEAs**](https://openjsf.org/wp-content/uploads/sites/84/2020/02/Case_Study-Node.js-NASA.pdf) 

 

 Node.JS est\xE1 mesmo voando!! 

 

 ### Meu primeiro c\xF3digo em Node.Js 

 

 Para rodar a plataforma na sua m\xE1quina \xE9 necess\xE1rio instalar o Node.JS. Caso voc\xEA ainda n\xE3o tenha, siga o tutorial [**Instalando o Node.JS no Windows e linux**](https://www.alura.com.br/artigos/instalando-nodejs-no-windows-e-linux#:~:text=Ap%C3%B3s%20baixar%20o%20instalador%2C%20basta,gostaria%20de%20instalar%20outras%20ferramentas.) 

 

 E depois colocar a m\xE3o no c\xF3digo 

 

 Aquele \u201CHello World!\u201D para dar sorte:

 

 \`\`\`

 console.log(\u2018Hello, World!\u2019)

 \`\`\`

 

 E agora voc\xEA pode subir seu primeiro servidor:

 

 \`\`\`

 const http = require('http');

 const server = http.createServer(function (req, res) {

 res.writeHead(200, {'Content-type': 'text/html'});

 res.end('Hello Node!');

 });

 server.listen(3000);

 console.log('Servidor funcionando. Acesse: localhost:3000');

 \`\`\`

 

 Ah, \xE9 importante lembrar que aqui o c\xF3digo est\xE1 de acordo com a \xFAltima vers\xE3o est\xE1vel, a vers\xE3o LTS (Long-term support ou suporte de longo prazo, em portugu\xEAs). Mas o Node trouxe uma novidade muito bacana em sua nova vers\xE3o, olha s\xF3 no artigo [**Revolu\xE7\xE3o no Node.js: adeus ao Axios e Node-fetch na vers\xE3o 17.5.0**](https://www.alura.com.br/artigos/revolucao-node-js-adeus-axios-fetch-api-versao-17-5-0).

 

 Agora \xE9 s\xF3 comemorar e aprofundar seus estudos em Node.JS!`},{id:3,titulo:"O que \xE9 JWT?",texto:`> Fonte: <https://www.alura.com.br/artigos/o-que-e-json-web-tokens> 

  Voc\xEA j\xE1 foi em algum evento que precisou apresentar um **documento de identifica\xE7\xE3o** para comprovar que voc\xEA era realmente a pessoa que comprou o ingresso? O ato de solicitar o documento de identifica\xE7\xE3o \xE9 uma forma de **autentica\xE7\xE3o** para que voc\xEA receba a **autoriza\xE7\xE3o** para entrar. Na web, esse processo funciona de forma parecida. Para fazer requisi\xE7\xF5es de alguns servi\xE7os ou acessar p\xE1ginas espec\xEDficas, voc\xEA precisa se identificar de alguma forma, e essa identifica\xE7\xE3o precisa ser segura e \xFAnica.  

 Neste artigo voc\xEA vai compreender o que \xE9 o padr\xE3o JWT (sigla para \u201CJSON Web Tokens\u201D) para autentica\xE7\xE3o, muito usado na web. Tamb\xE9m veremos: 

  

 - O que \xE9 um token; 

 - Para que serve e quando usar um JWT; 

 - Como criar e verificar seu JWT token. 

  

 ### O que \xE9 um token? 

  

 Atualmente, ouvimos muito a palavra token relacionada a NFTs (sigla para \u201CTokens n\xE3o fund\xEDveis\u201D em portugu\xEAs), metaverso, criptomoedas, etc. Por\xE9m, fora desse meio, um token \xE9 uma **assinatura digital**, **uma chave**.  

  

 Quando voc\xEA abre uma conta em um banco, voc\xEA precisa definir uma senha e seus dados pessoais. Esses dados s\xE3o convertidos em uma assinatura digital que vai identificar voc\xEA de **forma \xFAnica** para aquele banco e, toda vez que voc\xEA acessar seu banco e entrar com sua senha e um dado pessoal, o banco entender\xE1 e **confirmar\xE1** que voc\xEA \xE9 aquele usu\xE1rio logado, semelhante a entrarmos no evento quando apresentamos nosso documento de identidade. 

  

 Existem v\xE1rios algoritmos e padr\xF5es que transformam suas informa\xE7\xF5es em um token, isto \xE9, uma chave de autentica\xE7\xE3o \xFAnica, que faz sentido para o servi\xE7o ou aplica\xE7\xE3o que esteja tentando acessar no momento. Um desses padr\xF5es \xE9 o JWT, que \xE9 seguro por permitir uma autentica\xE7\xE3o entre duas partes atrav\xE9s de um **token assinado**. 

  

 ### O que \xE9 JWT? 

  

 Um JWT \xE9 um padr\xE3o para autentica\xE7\xE3o e troca de informa\xE7\xF5es definido pela [RFC7519](https://datatracker.ietf.org/doc/html/rfc7519). Nele \xE9 poss\xEDvel armazenar de forma segura e compacta [objetos JSON](https://www.alura.com.br/artigos/o-que-e-json). Este token \xE9 um c\xF3digo Base64 e pode ser assinado usando um segredo ou par de chaves privadas/p\xFAblicas. 

  

 Tokens assinados podem verificar a integridade das informa\xE7\xF5es contidas neles, diferente de tokens criptografados que ocultam essas informa\xE7\xF5es. Se um JWT \xE9 assinado por um par de chaves p\xFAblica/privada, a **assinatura** certifica que a parte que possui a chave privada \xE9 quem de fato assinou.  

  

 #### Quando e onde eu posso usar um JWT? 

  

 Voc\xEA pode usar, por exemplo, em um cen\xE1rio de **autoriza\xE7\xE3o.** Depois que o usu\xE1rio estiver conectado, \xE9 poss\xEDvel observar cada solicita\xE7\xE3o e verificar se esta inclui o JWT, permitindo que o usu\xE1rio acesse rotas, servi\xE7os e outros recursos. 

  

 Outro cen\xE1rio de utiliza\xE7\xE3o de JWTs s\xE3o as **trocas de informa\xE7\xF5es** pois, como eles s\xE3o assinados, \xE9 poss\xEDvel ter certeza de que os remetentes s\xE3o quem dizem ser quem s\xE3o. Al\xE9m disso, podemos identificar se o conte\xFAdo da assinatura foi alterado ou n\xE3o devido \xE0 composi\xE7\xE3o de um JWT. 

  

 #### Como surgiu o JWT? 

  

 Ele faz parte de uma fam\xEDlia de especifica\xE7\xF5es: a fam\xEDlia JOSE. 

  

 JOSE significa JSON *Object Signing and Encryption*, em portugu\xEAs **Assinatura e criptografia de objetos JSON**. O JWT faz parte dessa fam\xEDlia de especifica\xE7\xF5es e representa o token. Abaixo, voc\xEA confere outras especifica\xE7\xF5es desta fam\xEDlia: 

  

 - JWT (JSON Web Tokens): representa o token propriamente dito; 

 - JWS (JSON Web Signature): representa a assinatura do token; 

 - JWE (JSON Web Encryption): representa a assinatura para criptografia do token; 

 - JWK (JSON Web Keys): representa as chaves para a assinatura; 

 - JWA (JSON Web Algorithms): representa os algoritmos para assinatura do token. 

  

 Agora que voc\xEA j\xE1 sabe o que \xE9, para que serve e quando usar um JWT, vamos entender mais a fundo como funciona e quais os componentes de um JWT. Vem comigo! 

  

 ### Componentes b\xE1sicos de um JSON Web Token 

  

 Um JWT possui uma estrutura b\xE1sica composta pelo _header_, _payload_ e a _signature_. Essas tr\xEAs partes s\xE3o separadas por pontos ( \`.\` ). Dessa forma, seria algo do tipo: \`header.payload.signature\`. Vamos entender melhor cada uma dessas partes! 

  

 #### Header 

  

 Headers \xE9 o cabe\xE7alho do token onde passamos basicamente duas informa\xE7\xF5es: o \`alg\` que informa qual algoritmo \xE9 usado para criar a assinatura e o \`typ\` que indica qual o tipo de token. 

   

  

 \`\`\`jsx 

 { 

 "alg": "HS256", 

 "typ": "JWT" 

 } 

 \`\`\` 

  

 #### Payload 

  

 O payload \xE9 o componente onde podemos encontrar os dados referentes \xE0 autentica\xE7\xE3o como senha e email, por exemplo. 

  

 \`\`\`jsx 

 { 

 "email": "nome@alura.com.br", 

 "password": "HuEKW489!j445*" 

 } 

 \`\`\` 

  

 #### Signature 

  

 A assinatura do token (_signature_) \xE9 composta pela codifica\xE7\xE3o do header e do payload somada a uma chave secreta e \xE9 gerada pelo algoritmo especificado no cabe\xE7alho. 

  

 \`\`\`jsx 

 HS256SHA256( 

 base64UrlEncode(header) + "." + base64UrlEncode(payload), secret_key) 

 \`\`\` 

  

 O resultado s\xE3o tr\xEAs strings separadas por pontos que podem ser facilmente utilizadas em ambientes HTML e protocolos HTTP. 

  

 \`\`\`jsx 

 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. 

 eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ. 

 SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c 

 \`\`\` 

  

 Agora que entendemos como \xE9 \u201Cpor dentro\u201D um JWT vamos criar nosso pr\xF3prio JSON Web Token! 

  

 ### Criando um jwt token 

  

 Para come\xE7ar, vamos criar uma pasta chamada \`jwt\` no diret\xF3rio que voc\xEA desejar. Crie um arquivo javascript com o nome que escolher, eu estou utilizando \`index.js\`. Fa\xE7a a instala\xE7\xE3o da \`lib jwt\` que escolher. Existem diversas libs que ajudam na gera\xE7\xE3o de JWTs. Irei utilizar a [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) que \xE9 uma das mais populares, mas voc\xEA pode ficar \xE0 vontade para explorar outras op\xE7\xF5es. 

  

 O primeiro passo \xE9 importar a lib no nosso arquivo: 

  

 \`\`\`jsx 

 const jwt = require('jsonwebtoken'); 

 \`\`\` 

  

  Agora criamos a nossa chave secreta. A ideia \xE9 que s\xF3 voc\xEA saiba a sua chave secreta e que ela seja dif\xEDcil a fim de dificultar a a\xE7\xE3o de ataques maliciosos. A minha ficou desse jeito: 

  

 \`\`\`jsx 

 const secretKey = 'skljaksdj9983498327453lsldkjf'; 

 \`\`\` 

  

 Feito isso, vamos criar nosso token utilizando o m\xE9todo \`sign\`. Este m\xE9todo aceita como par\xE2metros o payload, a chave secreta e o header, nesta ordem. 

  

 \`\`\`jsx 

 const nossoToken = jwt.sign( 

   { 

 email: 'nome@alura.com.br', 

 password: 'HuEKW489!j445*', 

   }, 

   secretKey, 

   { 

 expiresIn: '1y', 

 subject: '1', 

   } 

 ); 

 \`\`\` 

  

 Para este JWT, eu estou informando um email e senha no payload; minha chave secreta; e no header estou informando um **subject,** que na biblioteca deste exemplo funciona como um id. Al\xE9m disso, estou dizendo que nosso token **expira** em 1 ano. Por padr\xE3o, o algoritmo de codifica\xE7\xE3o \xE9 o HS256. 

  

 Para visualizar a sa\xEDda em nosso terminal, utilizei a biblioteca **Nodemon** que voc\xEA pode instalar e ver como funciona acessando [este link](https://www.npmjs.com/package/nodemon). O nodemon \xE9 uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js, reiniciando automaticamente o aplicativo quando s\xE3o detectadas altera\xE7\xF5es de arquivo no diret\xF3rio. 

  

 Podemos ver nosso token gerado passando a vari\xE1vel \`nossoToken\` em um \`console.log\`: 

  

 \`\`\`jsx 

 console.log(nossoToken); 

 \`\`\` 

  

 A sa\xEDda deve ser: 

  

 \`\`\`jsx 

 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWVAYWx1cmEuY29tLmJyIiwicGFzc3dvcmQiOiJIdUVLVzQ4OSFqNDQ1KiIsImlhdCI6MTY1MTY4MzUxNywiZXhwIjoxNjgzMjQxMTE3LCJzdWIiOiIxIn0.t0UuIAxJ1NPXANtlBOKfHfLsePF4LRPu4RA2WMkJl6A 

 \`\`\` 

  

 ### Verificando nosso JWT 

  

 Para verificar nosso token podemos utilizar um m\xE9todo da pr\xF3pria biblioteca [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) chamado \`decode\` passando o token gerado. 

  

 \`\`\`jsx 

 const tokenGerado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWVAYWx1cmEuY29tLmJyIiwicGFzc3dvcmQiOiJIdUVLVzQ4OSFqNDQ1KiIsImlhdCI6MTY1MTY4MzUxNywiZXhwIjoxNjgzMjQxMTE3LCJzdWIiOiIxIn0.t0UuIAxJ1NPXANtlBOKfHfLsePF4LRPu4RA2WMkJl6A'; 

  

 console.log(jwt.decode(tokenGerado)); 

 \`\`\` 

  

 A sa\xEDda deste c\xF3digo \xE9: 

  

 \`\`\`jsx 

 { 

   email: 'nome@alura.com.br', 

   password: 'HuEKW489!j445*', 

   iat: 1651683517, 

   exp: 1683241117, 

   sub: '1' 

 } 

 \`\`\` 

  

 Onde os par\xE2metros \`iat\`, \`exp\` e \`sub\` s\xE3o respectivamente, as datas de cria\xE7\xE3o e expira\xE7\xE3o, no formato UTC, em que o token foi criado e em que expirar\xE1, e o \`subject\` que passamos no nosso c\xF3digo com valor 1. Outra alternativa para verificar nosso token \xE9 acessando o link: [https://jwt.io/](https://jwt.io/). Neste caso, s\xF3 precisamos passar o token gerado e iremos visualizar as informa\xE7\xF5es decodificadas. 

  

 Agora, voc\xEA deve estar se perguntando: \u201CAgora que eu sei o que \xE9 e como funciona um JSON Web Token, como us\xE1-lo em minhas aplica\xE7\xF5es front-end?\u201D 

  

 Vamos descobrir! 

  

 ### Autentica\xE7\xE3o com tokens 

  

 Imagine que voc\xEA \xE9 uma pessoa desenvolvedora e est\xE1 criando o front-end de uma aplica\xE7\xE3o para um banco. Na p\xE1gina de login voc\xEA pega os dados dos usu\xE1rios e envia esses dados para uma API utilizando o fetch ou axios, por exemplo. 

  

 \`\`\` 

 fetch(\`\${baseUrl}/auth/login\`, { 

 method: \u2018POST\u2019 

 headers: { 

  \u2018Content Type\u2019: \u2018Application/json\u2019, 

 }, 

 body: usu\xE1rio, 

 }) 

 .then((resposta) => { 

 ...alguma coisa 

 }) 

 .catch((erro) => { 

 ...alguma coisa 

 }); 

  

 \`\`\` 

  

 O servidor ir\xE1 pegar esses dados e, por meio de uma l\xF3gica, ir\xE1 retornar um token que vai identificar aquele usu\xE1rio. Agora, toda vez que este usu\xE1rio logar na plataforma, ele passar\xE1 por uma **autentica\xE7\xE3o** e, se estiver tudo certo com os dados, ser\xE1 **autorizado** a acessar determinadas \xE1reas da aplica\xE7\xE3o, como ver o saldo. Geralmente essa **codifica\xE7\xE3o** e **gera\xE7\xE3o** de tokens \xE9 realizada pelo back-end, mas voc\xEA precisar\xE1 garantir que este usu\xE1rio logado possa continuar acessando outras \xE1reas da aplica\xE7\xE3o. 

  

 Voc\xEA tamb\xE9m pode salvar o token na *session storage* ou *local storage* do seu navegador, para garantir que, enquanto o token n\xE3o expirar, o usu\xE1rio permane\xE7a logado na aplica\xE7\xE3o. Al\xE9m disso, \xE9 importante que, ao efetuar o login, o usu\xE1rio seja redirecionado para uma p\xE1gina Home, onde ele poder\xE1 ver outras funcionalidades da aplica\xE7\xE3o.  

  

 Quando este usu\xE1rio tentar acessar a p\xE1gina que mostra o seu saldo, por exemplo, voc\xEA pode fazer uma requisi\xE7\xE3o, usando axios ou fetch passando no headers um campo \u201CAuthorization\u201D com o token gerado. Isso ir\xE1 fazer com que o servidor verifique se o usu\xE1rio tem permiss\xE3o ou n\xE3o de acessar aquela p\xE1gina espec\xEDfica. 

  

 \`\`\` 

 fetch(\`\${baseUrl}/saldo\`, { 

 headers: { 

  \u2018Authorization\u2019: Token, 

 }, 

 }) 

 .then((resposta) => { 

 ...alguma coisa 

 }) 

 .catch((erro) => { 

 ...alguma coisa 

 }); 

 \`\`\` 

  

 Quando o usu\xE1rio fizer *logout* na nossa aplica\xE7\xE3o, voc\xEA pode redirecion\xE1-lo para outra p\xE1gina, e quando o token expirar, voc\xEA redireciona o usu\xE1rio para a p\xE1gina de login novamente.  

  

 ### Conclus\xE3o 

  

 Quanta coisa legal n\xE3o \xE9 mesmo?  

  

 Neste artigo, voc\xEA entendeu o que s\xE3o JSON Web Tokens, para que servem, quais seus componentes e como utiliz\xE1-los em suas aplica\xE7\xF5es. Voc\xEA tamb\xE9m viu como utilizar tokens em uma aplica\xE7\xE3o front-end para autentica\xE7\xE3o de usu\xE1rios. 

  

 Na Alura, temos a [forma\xE7\xE3o de Next.js](https://cursos.alura.com.br/formacao-next-js) que est\xE1 espetacular! Voc\xEA pode aplicar todo esse conhecimento de JWT em uma aplica\xE7\xE3o real no curso de **[Next.js: autentica\xE7\xE3o e gerenciamento de Tokens](https://cursos.alura.com.br/course/nextjs-autenticacao-gerenciamento-tokens)**.  

 `},{id:4,titulo:"O que \xE9 um Sprite 2D?",texto:`> Fonte: <https://www.alura.com.br/artigos/sprite-como-funciona-em-jogos-2d> 

  ## O que \xE9 um sprite? 

 \xC9 bem comum em jogos vermos v\xE1rios personagens, movimento de objetos, mapas desenhados ao fundo e muita coisa acontecendo. Todos estes elementos tamb\xE9m s\xE3o conhecidos como **sprite**. Neste artigo, vamos focar nos sprites 2D e como s\xE3o feitas as anima\xE7\xF5es. 

 Um sprite \xE9 uma imagem ou um objeto gr\xE1fico de duas dimens\xF5es em um jogo, que pode ser tanto personagem quanto objetos adicionados em um plano de fundo. Veja a abaixo a imagem de uma cena com uma sprite de um dos maiores jogos 2D de todos os tempos: 

 Para os personagens, imagine que voc\xEA queira criar os movimentos deles em seu jogo, como subida de m\xE3os, corrida, pulo, entre outros. Nesse caso, tratamos que o sprite \xE9 o personagem e, para todos estes movimentos, devemos montar as varia\xE7\xF5es de sprite. Em resumo, a ideia \xE9 desenhar cada movimento como no exemplo mostrado abaixo. O caso \xE9 parecido quando queremos construir uma anima\xE7\xE3o em v\xEDdeo utilizando uma sequ\xEAncia de desenhos \xE0 m\xE3o. 

  O nome \`sprite\` ganhou notoriedade no mundo dos games nas d\xE9cadas de 1970 e 1980, principalmente nos consoles como Atari VCS (1977), ColecoVision (1982), Nintendo Entertainment System (1983) e Sega Genesis (1988).  

 #### Sprites nos dias atuais  

 \xC0 medida que a performance dos computadores foi melhorando com a evolu\xE7\xE3o de hardware e software,  os videogames evolu\xEDram para o 3D, por\xE9m o uso de elementos 2D ainda continua sendo muito utilizado e aclamado no mundo dos games.  

 Podemos encontrar excelentes jogos 2D nos consoles atuais, com gr\xE1ficos lindos que possuem v\xE1rios elementos de design com grande espectro de cores. 

 Veja alguns deles: 

 * **Cuphead** \xE9 um jogo eletr\xF4nico de tiro 2D que lembra muito os jogos de plataforma dos anos 90 por\xE9m com seus gr\xE1ficos extremamente detalhistas e uma \xF3tima jogabilidade. Outra refer\xEAncia a jogos vintage est\xE1 no sistema de navega\xE7\xE3o entre fases atrav\xE9s de um mapa ao estilo *Super Mario World*. 

 * **Ori and the Blind Forest** \xE9 outro jogo 2D de plataforma com um visual impressionante, com seu personagem destinado a feitos her\xF3icos. 

 * **Limbo** \xE9 mais um \xF3timo jogo eletr\xF4nico de plataforma, embora n\xE3o se trate de um colorido, como os exemplos anteriores, \xE9 um jogo que possui paisagens deslumbrantes, personagens bizarros e sons perturbadores. O jogo acontece em um cen\xE1rio totalmente escuro e cinzento, pois se trata de um lugar sombrio e cheio de perigos. 

 ### Conclus\xE3o 

 Um sprite \xE9 um personagem ou um objeto dentro dos jogos 2D. Para criar o efeito de movimento, s\xE3o necess\xE1rios v\xE1rios sprites diferentes com pequenas varia\xE7\xF5es do mesmo personagem. Ele teve maior notoriedade nas d\xE9cadas de 70 e 80 com a chegada dos videogames 2D. Posteriormente, embora o 3D tenha chegado com a evolu\xE7\xE3o dos hardwares e softwares, o sprite 2D continua sendo muito utilizado nos jogos atuais. 

 Agora que voc\xEA j\xE1 sabe um pouco mais sobre o sprite e como ele funciona, que tal recriar 2 jogos cl\xE1ssicos com Javascript? Temos esses dois cursos de programa\xE7\xE3o que v\xE3o lhe mostrar como recriar esses jogos do zero: 

 - [Jogos cl\xE1ssicos parte 1: iniciando no Javascript com jogo do Pong](https://www.alura.com.br/curso-online-pong-javascript) 

 - [Jogos cl\xE1ssicos parte 2: Aprenda a criar o cl\xE1ssico jogo Freeway](https://www.alura.com.br/curso-online-javascript-listas-lacos) 

 E voc\xEA pode participar tamb\xE9m da imers\xE3o GAME DEV da Alura atrav\xE9s do link: 

 - [Imers\xE3o GAME DEV](https://cursos.alura.com.br/imersoes/aulas/aula-1-animacoes-basicas-e-trilha-sonora-c28) 

 E deixo aqui o meu agradecimento para voc\xEA que leu at\xE9 aqui e p\xF4de aprender um pouco mais desse maravilhoso mundo que \xE9 a tecnologia. Valeu!`},{id:5,titulo:"Vari\xE1veis no CSS",texto:`> Fonte: <https://www.alura.com.br/artigos/construa-css-magico-variaveis-nativas> 

  Provavelmente, ao construir um website, voc\xEA j\xE1 deve ter reparado que muitos dos valores nos arquivos CSS s\xE3o dados que se repetem constantemente, n\xE3o \xE9 mesmo? Por exemplo, a paleta de cores que mant\xE9m o padr\xE3o visual da p\xE1gina \xE9 reutilizada em in\xFAmeros pontos do c\xF3digo. Sendo assim, fazer a manuten\xE7\xE3o do projeto e alterar esses valores manualmente pode se tornar uma tarefa trabalhosa e passiva de erros, ainda mais em aplica\xE7\xF5es de grande escala.  

 Mas ent\xE3o, como podemos melhorar essa situa\xE7\xE3o? 

 Uma boa alternativa \xE9 utilizar as **Vari\xE1veis no CSS** como aliadas!  

 Se voc\xEA ficou interessado e deseja descobrir como fazer isso, vem comigo que nesse artigo eu te ensinarei mais sobre esse assunto detalhadamente. 

 ## Mas primeiro, o que s\xE3o Vari\xE1veis de CSS? 

 As vari\xE1veis de CSS, que tamb\xE9m s\xE3o chamadas de propriedades customizadas, trazem grandes benef\xEDcios e v\xE3o funcionar de forma bem semelhante \xE0s vari\xE1veis de linguagens de programa\xE7\xE3o, ou seja, sua maior fun\xE7\xE3o \xE9 armazenar valores que ser\xE3o utilizados posteriormente no c\xF3digo.  

 Elas permitem criar valores para todas as propriedades de CSS, sendo bastante utilizadas para gerenciar cores, fontes, valores de anima\xE7\xF5es etc. 

 ## Como utilizar as Vari\xE1veis de CSS? 

 As vari\xE1veis de CSS tem acesso ao DOM, o que permite que sejam declaradas globalmente ou localmente. Al\xE9m disso, possuem uma sintaxe caracter\xEDstica que j\xE1 tivemos um pequeno spoiler na imagem acima. Vamos entender melhor como funciona? 

 ### Sintaxe 

 A declara\xE7\xE3o ou cria\xE7\xE3o de uma vari\xE1vel no arquivo CSS \xE9 composta por 4 partes, veja a seguir: 

 - **1\xBA:** Dois h\xEDfens (--) 

 - **2\xBA:** Nomea\xE7\xE3o da vari\xE1vel 

 - **3\xBA:** Dois pontos (:) 

 - **4\xBA:** Valor da vari\xE1vel 

 \xC9 importante destacar que alguns caracteres n\xE3o s\xE3o permitidos na nomea\xE7\xE3o, como por exemplo: ; # } ] ) etc. 

 A aplica\xE7\xE3o das vari\xE1veis dentro de um elemento HTML em uma determinada propriedade CSS, \xE9 feita por meio da associa\xE7\xE3o entre a fun\xE7\xE3o \`var()\` e o nome da vari\xE1vel, que \xE9 passada como par\xE2metro dentro dos par\xEAnteses. Dessa forma: 

 \`\`\` 

 body { 

 background: var(--global-primary-color); 

 } 

 \`\`\` 

 ### Declara\xE7\xE3o global 

 Fazemos isso declarando a vari\xE1vel dentro da pseudo classe \`:root\`. Esse seletor corresponde a raiz, \xE9 o mesmo que \`<html>\` em si, s\xF3 que possui uma especificidade maior. Por meio do root, estamos disponibilizando elas globalmente, podendo ser utilizadas em qualquer lugar do documento.  

 ### Declara\xE7\xE3o local 

 Para isso, declaramos a vari\xE1vel dentro do seletor que ir\xE1 utiliz\xE1-la. Assim, ficar\xE3o restritas ao escopo da onde elas foram declaradas, sendo herdadas apenas pelos elementos filhos. 

 ## De onde surgiu? 

 As vari\xE1veis s\xE3o um recurso que durante muitos anos foi bastante solicitado. Isso porque, anteriormente, essa solu\xE7\xE3o s\xF3 era poss\xEDvel por meio de pr\xE9-processadores, como Sass, Stylus ou atrav\xE9s de CSS in JS. Esses artif\xEDcios atuam como grandes parceiros, mas ainda sim havia algumas lacunas que faltavam ser preenchidas e que somente foram contempladas com as vari\xE1veis no CSS. 

 O principal ponto a se destacar \xE9 que as vari\xE1veis de pr\xE9 processadores s\xE3o est\xE1ticas e necessitam da etapa de compila\xE7\xE3o, ou seja, todas as fun\xE7\xF5es, mixins e interpola\xE7\xF5es que ocorrem no Sass retornam CSS puro, para serem interpretadas pelo navegador.  

 J\xE1 as vari\xE1veis de CSS funcionam em tempo de execu\xE7\xE3o, s\xE3o din\xE2micas e funcionam de forma independente das tecnologias usadas, atuando em qualquer contexto, sem precisar de etapas adicionais. 

 Al\xE9m disso, ocorrem outras limita\xE7\xF5es com as vari\xE1veis de pr\xE9-processamento, como por exemplo a impossibilidade de uso de vari\xE1veis por meio do @extend nos medias query, a falta de aplica\xE7\xE3o da heran\xE7a e efeito cascata nos elementos e como n\xE3o h\xE1 acesso ao DOM, n\xE3o \xE9 poss\xEDvel serem controladas via JavaScript. 

 ## E quais s\xE3o as principais vantagens no uso? 

 ### C\xF3digo claro  

 Afinal, ler \`--cor-principal-bordas\` \xE9 muito mais sem\xE2ntico do que ler #B4E197, onde rapidamente conseguimos entender do que se trata.  

 ### Favorece a manuten\xE7\xE3o  

 \xC9 poss\xEDvel alterarmos a folha de estilo em muitos lugares, apenas alterando o valor da vari\xE1vel em um \xFAnico lugar, o que otimiza o tempo de trabalho e evita que poss\xEDveis erros de escrita aconte\xE7am. 

 ### Cria\xE7\xE3o de temas  

 Com as vari\xE1veis, voc\xEA pode criar e editar facilmente seus guias de estilos ou construir de maneira mais facilitada tem\xE1ticas, um exemplo cl\xE1ssico disso \xE9 na constru\xE7\xE3o de light/dark mode e como as vari\xE1veis de CSS s\xE3o din\xE2micas e tem acesso ao DOM, \xE9 poss\xEDvel ter um controle maior por meio da manipula\xE7\xE3o via Java Script, veja um exemplo pr\xE1tico nesse [Alura+ de Dark Mode](https://cursos.alura.com.br/extra/alura-mais/dark-mode-um-projeto-em-html-css-c1369).  

 ## Conte\xFAdo extra 

 ### Cascata CSS 

 S\xE3o beneficiadas pela cascata do CSS, onde podemos atribuir um novo valor a uma vari\xE1vel, de modo que os elementos filhos ir\xE3o herdar as caracter\xEDsticas do seu elemento pai mais pr\xF3ximo. 

 ### Rela\xE7\xE3o com o @media query 

 Atualmente, ainda n\xE3o podemos utilizar vari\xE1veis como medidas de resolu\xE7\xE3o de tela no @media query, dessa forma: 

 \`\`\` 

 :root { 

 --sm: 640px; 

 } 

 @media (max-width: var(--sm)) {   

 ... 

 } 

 \`\`\` 

 Ainda \xE9 necess\xE1rio utilizar medidas fixas, mas dentro dos media queries \xE9 poss\xEDvel aplicar as vari\xE1veis, sem que haja problema algum. 

 \`\`\` 

 :root { 

 --color-text-desktop: red; 

 --color-text-mobile: blue 

 } 

 h1 { 

 color: var(--color-text-desktop) 

 } 

 @media (max-width: 640px) { 

 h1 { 

 color: var(--color-text-mobile) 

 } 

 } 

 \`\`\` 

 ### Suporte ao navegador 

 Segundo o site [Can I use](https://caniuse.com/?search=variables), em rela\xE7\xE3o ao suporte aos navegadores, as vari\xE1veis s\xE3o compat\xEDveis em praticamente todos os navegadores modernos de maneira satisfat\xF3ria.  

 ## Agora \xE9 com voc\xEA!  

 Neste artigo, n\xF3s aprendemos sobre o poder do uso das vari\xE1veis no CSS em um projeto, entendemos melhor sobre os seus conceitos, vantagens e aplica\xE7\xE3o.  

 Para aprofundar o seu mergulho ainda mais no [desenvolvimento front-end](https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end), enriquecer seu portf\xF3lio e aplicar as vari\xE1veis de CSS em diversos projetos incr\xEDveis, n\xE3o deixe de realizar os cursos da [forma\xE7\xE3o front-end](https://www.alura.com.br/formacao-front-end). 

 Agora me conta, voc\xEA j\xE1 utilizava as vari\xE1veis em sua rotina de desenvolvimento? Se sim, te convido a contar para n\xF3s aqui no f\xF3rum ou no discord da Alura as suas impress\xF5es da pr\xE1tica com elas. E se voc\xEA nunca tinha ouvido falar ou se este conte\xFAdo te ajudou de alguma forma, n\xE3o deixe de dar o seu feedback, sua opini\xE3o \xE9 muito valiosa para n\xF3s e nos ajudar a evoluir e te proporcionar cada vez mais uma melhor experi\xEAncia de aprendizado.  

 At\xE9 a pr\xF3xima e bons estudos!  

 `},{id:6,titulo:"Principais comunidades de Front-end",texto:`> Fonte: <https://www.alura.com.br/artigos/principais-comunidades-front-end> 

  Quando entramos na \xE1rea da tecnologia \xE9 como se estiv\xE9ssemos descobrindo um mundo completamente novo. E, nessa caminhada, voc\xEA pode se sentir s\xF3 e sem rumo. Ent\xE3o, para lhe mostrar que n\xE3o tem apenas voc\xEA nessa jornada, vou trazer nesse artigo algumas comunidades de [front-end](https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end) para que possa conhecer e fazer parte. 

 ## O que \xE9 uma comunidade?

 Comunidade \xE9 um grupo de pessoas que se re\xFAnem para trocar ideias, dividir experi\xEAncias e criar eventos (como palestras e workshops, que podem ser presenciais ou on-line). Nesses grupos, diversos temas s\xE3o debatidos, principalmente sobre as principais demandas do mercado e as tend\xEAncias da atualidade. 

 Esses espa\xE7os s\xE3o conhecidos por oferecerem bastante suporte, o que \xE9 incr\xEDvel para quem est\xE1 come\xE7ando agora na carreira de dev. Neles, voc\xEA encontrar\xE1 desde as pessoas iniciantes at\xE9 as mais experientes e todas est\xE3o dispostas a ajudar com qualquer d\xFAvida. O fato \xE9 que uma pessoa antes de voc\xEA j\xE1 pode ter tido perguntas semelhantes \xE0s suas e, nesses grupos, voc\xEA pode encontrar a solu\xE7\xE3o rapidamente.

 Al\xE9m disso, voc\xEA pode se manter informado sobre as boas pr\xE1ticas, novidades, receber feedbacks, conhecer pessoas novas e se conectar com elas. Ali\xE1s, fazer networking \xE9 importante em qualquer \xE1rea, pois, ao se conectar com diferentes tipos de pessoas, voc\xEA n\xE3o cresce apenas profissionalmente, mas como indiv\xEDduo tamb\xE9m. 

 H\xE1 muitas comunidades para pessoas desenvolvedoras por a\xED. Por isso,nesse artigo, irei trazer as principais comunidades voltadas para o Front-end.  

 Vamos l\xE1?

 ## Comunidades do Front-end para fazer parte   

### Stack Overflow

 O [Stack Overflow](https://pt.stackoverflow.com/) \xE9 um site de perguntas e respostas dedicado a pessoas que j\xE1 programam ou que querem aprender a programar. A comunidade responde e faz perguntas constantemente, e as pessoas usu\xE1rias votam nas melhores para que elas subam no feed e sejam encontradas com mais facilidade. Existem muitas perguntas em ingl\xEAs, mas, se voc\xEA quiser, pode ir at\xE9 a parte que est\xE1 tudo em portugu\xEAs. Legal, n\xE9? 

 Voc\xEA tamb\xE9m ganha reputa\xE7\xE3o quando vota nas suas perguntas e respostas. Em n\xEDveis mais altos, voc\xEA ganha privil\xE9gios como a permiss\xE3o de modera\xE7\xE3o e passa a ajudar a manter a qualidade do site e da comunidade. 

 ### GitHub

  O GitHub \xE9 uma plataforma onde voc\xEA compartilha seu c\xF3digo e arquivos com controle de vers\xE3o usando o Git. Ele \xE9 como uma rede social para pessoas que programam. Assim, voc\xEA pode seguir pessoas, trocar mensagens e contribuir em projetos privados ou [Open Source](https://www.alura.com.br/artigos/open-source-uma-breve-introducao).

  Apesar do GitHub ter muitas trocas em ingl\xEAs, vou trazer aqui uma op\xE7\xE3o maravilhosa em portugu\xEAs.  

 Na plataforma existe um f\xF3rum incr\xEDvel chamado [Front-end Brasil](https://github.com/frontendbr). Ele foi criado com o objetivo de reunir d\xFAvidas vindas de outras redes sociais, como Facebook, mas que acabavam perdidas depois de um tempo. Ou seja, as pessoas criadoras deste espa\xE7o queriam unificar todas as discuss\xF5es em um s\xF3 local e escolheram, justamente, o GitHub por ser mais f\xE1cil de encontrar d\xFAvidas antigas. 

 Na p\xE1gina principal tem o link que te leva para o f\xF3rum, outro para divulga\xE7\xE3o de vagas na \xE1rea de Front-end e o terceiro link vai para a parte de eventos. O mais legal \xE9 que qualquer pessoa pode adicionar uma vaga, criar um evento ou dar sugest\xF5es, desde que esteja dentro das diretrizes do site, claro.  

 ### MDN Web Docs 

 O [MDN Web Docs](https://developer.mozilla.org/pt-BR/) \xE9 um projeto colaborativo open source que documenta tecnologias de plataforma da Web, como HTML, CSS, JavaScript e APIs da Web. Eles tamb\xE9m fornecem uma grande cole\xE7\xE3o de recursos aprendizagem para devs e estudantes iniciantes, como uma [trilha de estudos](https://developer.mozilla.org/pt-BR/docs/Learn/Front-end_web_developer) para desenvolvimento front-end, que voc\xEA pode acessar em ingl\xEAs ou portugu\xEAs. Top, n\xE9? 

 Nessa \xE1rea, o MDN se prop\xF5e a levar voc\xEA de iniciante a confort\xE1vel, para que, a partir desse conhecimento b\xE1sico, voc\xEA trilhe seu caminho no mundo da programa\xE7\xE3o. E caso voc\xEA tenha d\xFAvidas ou fique preso em um problema, eles tamb\xE9m disponibilizam um f\xF3rum para que voc\xEA poste sua pergunta e outras pessoas possam te ajudar.  

 ### Coderwall 

 O [Coderwall](https://coderwall.com/t/web/popular)  \xE9 uma comunidade de devs  para aprender e compartilhar dicas de programa\xE7\xE3o. H\xE1 uma se\xE7\xE3o de dicas espec\xEDficas para ajudar a resolver problemas ou aprender coisas novas, separadas por tags. Voc\xEA pode pesquisar \u201Cfront-end\u201D, por exemplo, e ir\xE1 encontrar tudo relacionado ao assunto. 

 Al\xE9m de existir muitos recursos para iniciantes e devs mais experientes, tamb\xE9m h\xE1 \xE1reas exclusivas para dicas de JavaScript, CSS, HTML, Python, Ruby, iOS e v\xE1rios outros assuntos, em que voc\xEA tem total liberdade para perguntar ou postar dicas.  

 Um ponto importante \xE9 que a maior parte do conte\xFAdo \xE9 em ingl\xEAs, mas isso n\xE3o precisa ser um empecilho, pois voc\xEA pode usar o recurso de tradu\xE7\xE3o caso queira, como o [Google Tradutor](https://translate.google.com.br/?hl=pt-BR) ou o [DeepL](https://www.deepl.com/translator). 

  ### WoMakersCode 

 A [WoMakersCode](https://www.linkedin.com/company/womakerscode/) tem a miss\xE3o de inspirar e impulsionar meninas e mulheres que desejam ingressar ou se especializar em carreiras ligadas \xE0 tecnologia e inova\xE7\xE3o. Dessa forma, \xE9 uma organiza\xE7\xE3o que cria v\xE1rias iniciativas de capacita\xE7\xE3o, mentoria, empregabilidade e conte\xFAdos digitais. Ou seja, voc\xEA mulher que se sente sozinha nessa \xE1rea, onde os homens ainda s\xE3o maioria, tem a possibilidade de se conectar com outras mulheres e aprender muito com elas. 

 A organiza\xE7\xE3o tamb\xE9m disponibiliza v\xE1rias palestras, workshops e feira de vagas que voc\xEA pode se inscrever atrav\xE9s [desse link](https://linktr.ee/womakerscode) de forma online e gratuita. E olha s\xF3 que demais: se quiser, voc\xEA pode se inscrever para ser palestrante volunt\xE1ria. 

 ### She's Tech 

 A She\u2019s Tech tem tr\xEAs pilares: inspirar, engajar e capacitar. Ela atua pela conscientiza\xE7\xE3o do mercado sobre a diversidade, inclus\xE3o e estimula a auto-acelera\xE7\xE3o atrav\xE9s da lideran\xE7a e protagonismo. 

 Al\xE9m disso, por meio dela, diversos eventos online e gratuitos s\xE3o promovidos, onde outras mulheres que j\xE1 est\xE3o atuando na \xE1rea da tecnologia repassam o que aprenderam durante a vida. Essa comunidade tamb\xE9m possui um [grupo no telegram](https://t.me/shestech) para postar e compartilhar oportunidades de trabalho, eventos e cursos para mulheres. 

 ### Minas Programam 

 O [Minas Programam](http://minasprogramam.com/) foi criado para desafiar  a influ\xEAncia dos estere\xF3tipos de g\xEAnero e de ra\xE7a na rela\xE7\xE3o de mulheres com as \xE1reas de ci\xEAncias, tecnologia e computa\xE7\xE3o, de acordo com as criadoras. 

 \xC9 um projeto que d\xE1 oportunidades de aprendizado sobre programa\xE7\xE3o para meninas e mulheres (cis ou trans) e pessoas n\xE3o-bin\xE1rias, especialmente aquelas que s\xE3o negras ou ind\xEDgenas, por meio de cursos gratuitos, dicas de livros, oficinas e apoio para as futuras devs que n\xE3o t\xEAm um computador para come\xE7ar a programar. 

 ### Comunidades Tech 

 O [Comunidades Tech](https://comunidades.tech/) \xE9 um projeto open source, onde voc\xEA pode pesquisar por v\xE1rios grupos de tecnologia e filtrar por: categoria, tipo, cidade, pa\xEDs, nome da comunidade, entre outros. Ap\xF3s escolher qual voc\xEA quer participar, \xE9 s\xF3 clicar para encontrar os links de entrada do grupo, que podem ser no discord, facebook, slack, meetup, telegram, whatsapp e at\xE9 em podcast. 

 Voc\xEA tamb\xE9m pode criar seu pr\xF3prio grupo e cadastrar l\xE1 para que outras pessoas encontrem e sua comunidade cres\xE7a. 

 ## Conclus\xE3o 

 Muito legal n\xE9? E voc\xEA, j\xE1 participa de comunidades?  

 Sempre h\xE1 novidades no mundo da programa\xE7\xE3o e mergulhar em comunidades \xE9 muito importante para o seu desenvolvimento como dev. Se voc\xEA j\xE1 participa, usufrua de tudo o que ela tem para oferecer, ajude as pessoas, participe de conversas, v\xE1 aos encontros e palestras. 

 Lembrando que se voc\xEA \xE9 estudante da Alura temos a nossa pr\xF3pria comunidade no discord, onde voc\xEA pode pedir ajuda e ajudar v\xE1rias pessoas. Todas as pessoas est\xE3o sempre dispostas a dar aquela dica incr\xEDvel ou achar o motivo daquele erro que voc\xEA n\xE3o consegue encontrar por nada.  

 Afinal, ningu\xE9m consegue fazer tudo s\xF3! Se voc\xEA ainda n\xE3o faz parte, venha e se encante.  

 Vou deixar [aqui o link](https://cursos.alura.com.br/extra/alura-mais/comunidade-no-discord-c1400)  para o Alura+ do Jo\xE3o Manoel sobre a comunidade da Alura no discord, onde ele mostra como voc\xEA faz para entrar e explica tudo sobre como utilizar esse aplicativo. Caso voc\xEA n\xE3o tenha muita familiaridade, indico muito que assista.  

 Ah! E se tiver mais dicas de comunidade indique pra gente l\xE1 no nosso canal do discord, tenho certeza que todo mundo vai gostar.  

 Agora \xE9 com voc\xEA! Pesquise sobre as comunidades e participe das que gostar mais.  

 `},{id:7,titulo:"Formul\xE1rios reativos com Angular",texto:`> Fonte: <https://www.alura.com.br/artigos/como-aplicar-validacao-formularios-reativos-angular> 

  Voc\xEA j\xE1 deve ter preenchido um formul\xE1rio que n\xE3o indicava claramente o porqu\xEA de algum campo n\xE3o estar v\xE1lido e teve que ficar adivinhando quantos caracteres sua senha precisava ter ou que tipo de caracteres deveria receber. Ou, em um formul\xE1rio longo, j\xE1 ocorreu de preencher apenas os campos que achava serem requeridos e s\xF3 no final, ao tentar submeter os dados, se deparou com in\xFAmeras mensagens de erro mostrando que diversos outros campos eram obrigat\xF3rios? Chato, n\xE9? Vem aprender como melhorar essa experi\xEAncia com o uso das valida\xE7\xF5es customizadas do Angular!

Neste artigo, voc\xEA vai aprender como:



- Criar um formul\xE1rio reativo;

- Aplicar valida\xE7\xF5es padr\xE3o e criar valida\xE7\xF5es customizadas;

- Mostrar os erros de valida\xE7\xE3o apenas quando o campo for acessado;

- Habilitar o bot\xE3o de submeter os dados apenas quando o formul\xE1rio estiver v\xE1lido.



Vamos l\xE1?



Criar formul\xE1rios \xE9 algo muito comum na rotina de devs front-end. Tanto em formul\xE1rios mais simples e, principalmente \xE0 medida que a quantidade de campos do formul\xE1rio cresce, \xE9 necess\xE1rio implementar valida\xE7\xF5es. 



As valida\xE7\xF5es s\xE3o importantes para prevenir erros de cadastro e garantir que as informa\xE7\xF5es preenchidas estejam no formato esperado, mas \xE9 preciso deixar claro todas as particularidades dos campos a serem preenchidos, a fim de promover uma intera\xE7\xE3o mais din\xE2mica e amig\xE1vel das pessoas com nossa aplica\xE7\xE3o. 



## O que s\xE3o formul\xE1rios reativos?



No Angular, existem dois tipos diferentes de formul\xE1rios: *template drive* e *data driven*. Os do tipo *template driven* s\xE3o criados e configurados no \`component.html\`; as valida\xE7\xF5es tamb\xE9m s\xE3o inclu\xEDdas no template e os valores do formul\xE1rio s\xE3o submetidos atrav\xE9s da diretiva *ngSubmit*.



J\xE1 os formul\xE1rios *data driven* (orientados a dados) s\xE3o criados e configurados no \`component.ts\` e a maior parte do c\xF3digo fica nesse arquivo e n\xE3o no html. Dessa forma, temos um template mais limpo, apenas com a estrutura b\xE1sica do formul\xE1rio, j\xE1 que todas as valida\xE7\xF5es s\xE3o feitas no componente. No html \xE9 feita a associa\xE7\xE3o do template ao componente e n\xE3o precisamos obrigatoriamente do *ngSubmit*.



F\xE1ceis de criar e de dar manuten\xE7\xE3o, os formul\xE1rios reativos, como tamb\xE9m s\xE3o conhecidos, s\xE3o bastante utilizados devido ao seu poder e capacidade de conseguir reagir a mudan\xE7as que acontecem no formul\xE1rio, utilizando [observables](https://www.alura.com.br/curso-online-angular-rxjs-introducao-programacao-reativa). 



Agora n\xF3s vamos entender como podemos criar um formul\xE1rio reativo e aplicar valida\xE7\xF5es nele. 



## O que precisamos configurar?



Com a aplica\xE7\xE3o criada, precisamos importar o \`reactiveformsModule\` no arquivo \`app.module.ts\` e colocar no array de *imports* do \`ngModule\`, assim:



\`\`\`

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({

  declarations: [

AppComponent

  ],

  imports: [

BrowserModule,

AppRoutingModule,

ReactiveFormsModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})



export class AppModule { }

\`\`\`



Se voc\xEA tem d\xFAvidas nesse passo, [veja aqui como come\xE7ar com o Angular](https://www.alura.com.br/artigos/como-comecar-com-angular) e [como criar sua primeira aplica\xE7\xE3o](https://www.alura.com.br/artigos/criando-aplicacoes-angular-com-angular-cli).



Agora, vamos criar no \u201Capp.component.ts\u201D uma vari\xE1vel chamada formulario do tipo **FormGroup** (deve ser importado tamb\xE9m), que \xE9 uma classe do Angular que vai nos ajudar na implementa\xE7\xE3o e valida\xE7\xE3o dos forms. Outra classe importante que veremos mais \xE0 frente \xE9 o **FormControl**.



\`\`\`

import { FormGroup } from '@angular/forms';



formulario: FormGroup;

\`\`\`



A abordagem que vamos utilizar para criar nosso formul\xE1rio \xE9 atrav\xE9s da inje\xE7\xE3o de depend\xEAncia do *service* **FormBuilder**. Esse servi\xE7o fornece m\xE9todos para gerar controles de formul\xE1rios e evita a cria\xE7\xE3o manual de inst\xE2ncias de controle. Para isso vamos ter que:  



- Importar a classe FormBuilder;

- Injetar o service FormBuilder;

- Gerar o conte\xFAdo do formul\xE1rio.



Vamos criar um formul\xE1rio com 4 campos:



- nome

- username

- email

- senha



Nosso \`app.component.ts\` ficar\xE1 assim:



\`\`\`

import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';



@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {



  formulario: FormGroup;



  constructor(private formBuilder: FormBuilder) { }



  ngOnInit(): void {

this.formulario = this.formBuilder.group({

nome: [''],

username: [''],

email: [''],

senha: ['']

});

  }

}

\`\`\`



Tamb\xE9m precisamos criar a estrutura do formul\xE1rio no template com os quatro campos. Agora, antes de implementar as valida\xE7\xF5es, vamos fazer a sincroniza\xE7\xE3o do formul\xE1rio criado no componente com o template para vermos se est\xE1 tudo certo.



Para isso podemos usar uma diretiva do \`ReactiveFormsModule\` chamada **formGroup**. E na tag *form* do html vamos atribuir a diretiva \xE0 nossa vari\xE1vel *formulario* e fazer um *property binding*, porque sempre que o campo for modificado, queremos atualizar e atribuir o valor ao formul\xE1rio.



\`\`\`

<form [formGroup]="formulario"></form>

\`\`\`



Para associar cada input utilizamos outra diretiva chamada **formControlName**, fazendo um link entre o campo no html e o componente e passando exatamente o nome das vari\xE1veis que criamos atrav\xE9s do FormBuilder.



\`\`\`

<input id="nome" type="text" formControlName="nome" >

<input id="username" type="text" formControlName="username" >

<input id="email" type="email" formControlName="email" >

<input id="senha" type="password" formControlName="senha" >

\`\`\`



Nosso formul\xE1rio est\xE1 assim (estilizado com o [Angular Material](https://material.angular.io/)). 



 ## Aplicando as valida\xE7\xF5es



Agora, vamos incluir as seguintes valida\xE7\xF5es na aplica\xE7\xE3o:



- Todos os campos ser\xE3o de preenchimento obrigat\xF3rio;

- O campo username aceitar\xE1 apenas letras min\xFAsculas;

- Verifica\xE7\xE3o do preenchimento correto do formato de e-mail;

- Quantidade m\xEDnima de caracteres para a senha ser\xE1 6.



Para come\xE7ar, vamos importar a classe **Validators**:



\`\`\`

import { Validators } from '@angular/forms';

\`\`\`



Essa classe j\xE1 traz v\xE1rios m\xE9todos de valida\xE7\xE3o prontos e f\xE1ceis de usar como por exemplo:



- required() - campo de preenchimento obrigat\xF3rio;

- maxLength() - quantidade m\xE1xima de caracteres permitido;

- minLength() - quantidade m\xEDnima de caracteres permitido;

- email() - valida o formato de e-mail;



[Veja aqui a lista completa de m\xE9todos da classe Validators](https://angular.io/api/forms/Validators).



Agora vamos implementar as valida\xE7\xF5es no formul\xE1rio, passando os m\xE9todos de valida\xE7\xE3o como segundo par\xE2metro do array criado no \`component.ts\`. 



\`\`\`

ngOnInit(): void {

this.formulario = this.formBuilder.group({

nome: ['', [Validators.required]],

username: ['',  [Validators.required]],

email: ['', [Validators.required, Validators.email]],

senha: ['', [Validators.required, Validators.minLength(6)]]

});

  }

\`\`\`



## Exibindo mensagens de erro



Para exibir mensagens referentes \xE0s valida\xE7\xF5es, vamos incluir no html, abaixo do input, uma div com a diretiva *ngIf, passando o formul\xE1rio e pegando os erros do campo passado como par\xE2metro, e incluindo a mensagem que queremos apresentar:



\`\`\`

<div *ngIf="formulario.get('nome')?.errors>

Nome obrigat\xF3rio

</div>

\`\`\`



Vamos replicar isso em cada campo e ver o resultado:



Ok, agora as mensagens est\xE3o aparecendo, mas j\xE1 no carregamento inicial da aplica\xE7\xE3o. Ser\xE1 que existe uma forma mais amig\xE1vel de apresent\xE1-las? Apenas quando o campo for acessado? Sim!! Podemos fazer isso atrav\xE9s de uma propriedade do FormControl chamada **touched**. Seu valor inicial \xE9 *false* e sempre que o input dispara o evento *onBlur*, ou seja, quando o campo \xE9 acessado e perde o foco, a propriedade recebe o valor *true*.



No exemplo do campo *nome* ficar\xE1 assim: 



\`\`\`

<div *ngIf="formulario.get('nome')?.errors?.['required'] && formulario.get('nome')?.touched>

Nome obrigat\xF3rio

</div>

\`\`\`



Replicando para os outros campos, agora as mensagens de erro aparecem apenas quando necess\xE1rio.



 ## Criando valida\xE7\xF5es customizadas



A valida\xE7\xE3o que queremos incluir para que o campo username receba apenas letras min\xFAsculas n\xE3o est\xE1 presente na classe \`\`Validators\`\`. Mas n\xE3o tem problema, pois \xE9 poss\xEDvel criar in\xFAmeras valida\xE7\xF5es customizadas que atendam \xE0s suas necessidades.

No nosso exemplo, criamos um arquivo chamado \`minusculoValidator.ts\`, importamos a classe **Abstract Control** e criamos a l\xF3gica da valida\xE7\xE3o. 



\`minusculoValidator.ts\`:

\`\`\`

import { AbstractControl } from "@angular/forms";



export function minusculoValidator(control: AbstractControl) {

const username = control.value as string;

if(username !== username?.toLowerCase()) {

return { minusculo: true };

} else

return null;

}

\`\`\`



Depois disso, importamos a valida\xE7\xE3o no componente e inclu\xEDmos no array junto com as outras valida\xE7\xF5es.



\`app.component.ts\`:

\`\`\`

username: ['',  [Validators.required, minusculoValidator]],

\`\`\`



\`app.component.html\`:

\`\`\`

<div *ngIf="formulario.get('username')?.errors?.['minusculo\u2019] && formulario.get('username')?.touched">

Esse campo aceita apenas letras min\xFAsculas"

</div>

\`\`\`



Assim, atrav\xE9s da propriedade *errors*, podemos criar mensagens customizadas dependendo do erro que seja disparado.



## Desabilitar/Habilitar o bot\xE3o



Outro ponto importante \xE9 que o bot\xE3o para envio dos dados est\xE1 habilitado desde o in\xEDcio, mesmo que os campos n\xE3o tenham sido preenchidos. Vamos resolver isso?



O formul\xE1rio possui a propriedade *valid* e podemos fazer um property binding atribuindo-a \xE0 propriedade disabled do bot\xE3o e assim criar uma l\xF3gica para que o bot\xE3o fique habilitado apenas quando o formul\xE1rio estiver v\xE1lido, ou seja, quando todos os campos forem preenchidos corretamente.



\`app.component.html\`:

\`\`\`

<button [disabled]="!formulario.valid">

Cadastre-se

</button>

\`\`\`



`},{id:8,titulo:"Svelte ou React?",texto:`> Fonte: <https://www.alura.com.br/artigos/svelte-versus-react-quais-diferencas> 

  Inegavelmente, o [React \xE9 a ferramenta que **atualmente domina o mercado front-end**](https://www.alura.com.br/formacao-react-ts), sendo a mais utilizada de acordo com a [pesquisa de 2020 do State of JS](https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/), seguida de seus concorrentes Angular e Vue.js. Essa demanda tamb\xE9m \xE9 not\xE1vel quando pesquisamos por vagas em plataformas de empregos. 

Por\xE9m, uma nova ferramenta vem ganhando for\xE7a nos \xFAltimos anos e superou todas as outras nessa mesma pesquisa no quesito **satisfa\xE7\xE3o**: o Svelte. 

 

## Mas o que \xE9 o Svelte? 

 

O [Svelte](https://svelte.dev/) \xE9 um **compilador** utilizado para construir interfaces web, assim como React, Angular e Vue.js. Ele foi criado em 2016 por Rich Harris, e vem com a proposta de ser mais perform\xE1tico, f\xE1cil de aprender e utilizar, possuindo uma alta curva de aprendizagem, al\xE9m da sintaxe simples e intuitiva. 

 

O Svelte em si \xE9 muito leve: [4.4kB, ou 1.6 kB comprimido](https://bundlephobia.com/package/svelte@3.43.2), custando muito menos para os navegadores baixarem os arquivos. Para compara\xE7\xE3o, os pacotes [react](https://bundlephobia.com/package/react@17.0.2) e [react-dom](https://bundlephobia.com/package/react@17.0.2), juntos, somam 126kB, ou 42.2kB comprimidos. 

 

## Como funciona um compilador no front-end? 

 

O compilador do Svelte l\xEA o c\xF3digo que escrevemos e o **compila** para JavaScript puro, [sem utilizar Virtual DOM](https://svelte.dev/blog/virtual-dom-is-pure-overhead). O c\xF3digo gerado \xE9 [extremamente perform\xE1tico](https://krausest.github.io/js-framework-benchmark/2022/table_chrome_99.0.4844.51.html) em rela\xE7\xE3o aos seus concorrentes. 

 

Voc\xEA tamb\xE9m pode ver o processo de compila\xE7\xE3o na pr\xE1tica, utilizando o [REPL](https://svelte.dev/repl/hello-world), uma ferramenta criada pelo Svelte, onde podemos testar nossos c\xF3digos online e ver os arquivos JS gerados. 

 

> Dica: utilize o REPL para testar os exemplos deste artigo! 

 

Agora que voc\xEA entende como funciona o Svelte e o qu\xE3o perform\xE1tico ele \xE9, vamos compar\xE1-lo com o React, com alguns exemplos de c\xF3digo! 

 

## Compara\xE7\xE3o de c\xF3digo Svelte vs React 

 

### Estrutura de um componente 

 

Vamos considerar o seguinte c\xF3digo React: 

 

\`\`\` 

import './App.css'; 

import { useState } from 'react'; 

 

function App() { 

  const [nome, setNome] = useState('World'); 

 

  return ( 

<div className="App"> 

<h1>Hello {nome}!</h1> 

</div> 

  ); 

} 

 

export default App; 

\`\`\` 

 

Com o Svelte, o mesmo c\xF3digo acima ficaria assim: 

 

\`\`\` 

<script> 

let nome = 'World'; 

<\/script> 

 

<main> 

<h1>Hello {nome}!</h1> 

</main> 

 

<style> 

main { 

/* estilos de main */ 

} 

 

h1 { 

/* estilos de h1 */ 

} 

</style> 

\`\`\` 

 

O Svelte utiliza a estrutura **Single File Component** (Componente de Arquivo \xDAnico), onde deixamos HTML, CSS e JS em um mesmo arquivo com extens\xE3o \`.svelte\`. Vemos no exemplo acima que o JS fica dentro da tag \`<script>\`, o CSS dentro da \`<style>\` e o HTML n\xE3o precisa ser delimitado por alguma tag. Al\xE9m disso, essas partes podem vir em qualquer ordem, ent\xE3o o c\xF3digo abaixo tamb\xE9m \xE9 v\xE1lido: 

 

\`\`\` 

<style> 

h1 { 

/* estilos de h1 */ 

} 

</style> 

 

<h1>Hello {nome}!</h1> 

<p> 

Minha primeira aplica\xE7\xE3o Svelte! 

</p> 

 

<script> 

let nome = 'World'; 

<\/script> 

\`\`\` 

 

Note tamb\xE9m que o HTML do componente n\xE3o precisa ser envolto por uma tag, como no exemplo acima, que utilizamos as tags \`<h1>\` e \`<p>\`. 

 

### Estado 

 

Em React, para criarmos um estado, precisamos explicit\xE1-lo no c\xF3digo utilizando \`useState\`. J\xE1 no Svelte, qualquer vari\xE1vel que criamos com a palavra-chave \`let\` se torna um estado por padr\xE3o. 

 

Ainda, em React, se quisermos alterar o estado \`nome\` para um novo valor no clique de um bot\xE3o, podemos escrever o seguinte: 

 

\`\`\` 

<button onClick={() => setNome('Ant\xF4nio')} disabled={nome === 'Ant\xF4nio'}> 

Alterar nome 

</button> 

\`\`\` 

 

O c\xF3digo acima ficaria assim em Svelte: 

 

\`\`\` 

<button on:click={() => nome = 'Ant\xF4nio'} disabled={nome === 'Ant\xF4nio'}> 

Alterar nome 

</button> 

\`\`\` 

 

Repare que utilizamos a diretiva [on:](https://svelte.dev/tutorial/dom-events) para escutar o evento de \`click\` do bot\xE3o. Note tamb\xE9m que precisamos apenas fazer uma atribui\xE7\xE3o direta ao estado \`nome\`, e a interface do componente ser\xE1 re-renderizada de acordo com a mudan\xE7a. Trata-se de uma sintaxe intuitiva e pr\xE1tica, especialmente, quando trabalhamos com objetos e arrays. 

 

> Diretivas s\xE3o como \u201Catributos especiais\u201D que colocamos em tags do HTML. Elas j\xE1 s\xE3o conhecidas em Angular e Vue.js, e s\xE3o um recurso poderoso, que podem nos ajudar de diversas formas no nosso desenvolvimento. 

 

### Two-way data binding 

 

Vamos criar um input que altera o estado \`nome\` que criamos no c\xF3digo React, utilizando a fun\xE7\xE3o \`setNome\`: 

 

\`\`\` 

<input 

type="text" 

value={nome} 

onChange={(e) => setNome(e.target.value)}   

/> 

\`\`\` 

 

Note que precisamos declarar o atributo \`value={nome}\` para que o estado defina o valor inicial do campo, e tamb\xE9m declarar o atributo \`onChange={(e) => setNome(e.target.value)}\` para que as altera\xE7\xF5es no campo alterem o estado tamb\xE9m. 

 

No Svelte, podemos simplificar essas opera\xE7\xF5es utilizando a seguinte sintaxe: 

 

\`\`\` 

<input type="text" bind:value={nome} /> 

\`\`\` 

 

Usamos a diretiva [bind:](https://svelte.dev/tutorial/text-inputs) para fazer um **Two-way data binding** (Liga\xE7\xE3o de dados bidirecional) que, nesse caso, serve para **ligar** (ou **vincular**) um atributo do HTML a um estado. Dessa forma, o atributo \`value\` e o estado \`nome\` sempre possuir\xE3o o mesmo valor. 

 

### Estilos escopados 

 

No React, por padr\xE3o, os estilos n\xE3o s\xE3o escopados, ou seja, se arquivos CSS declararem estilos para um mesmo seletor, esses estilos ir\xE3o interferir entre si. Solu\xE7\xF5es poss\xEDveis s\xE3o utilizar m\xF3dulos CSS ou Styled Components. 

 

J\xE1 no Svelte, os estilos s\xE3o [**escopados por padr\xE3o**](https://svelte.dev/docs#component-format-style), pois esse \xE9 o comportamento que geralmente queremos. Se, por acaso, precisarmos que algum estilo seja global para todos os componentes, podemos escrever a seguinte sintaxe: 

 

\`\`\` 

:global(h1) { 

/* estilos de h1 */ 

} 

\`\`\` 

 

Utilizamos o modificador \`:global()\` e, dentro dos par\xEAnteses, colocamos o seletor CSS que queremos globalizar. 

 

### Estrutura de condi\xE7\xE3o 

 

No React, combinamos o JS com JSX para renderizar HTML de forma condicional, como nesse c\xF3digo: 

 

\`\`\` 

{ 

nome === 'Ant\xF4nio' 

? <p>\xC9 meu nome!</p> 

: <p>N\xE3o \xE9 meu nome...</p> 

} 

\`\`\` 

 

Diferentemente, no Svelte, temos uma estrutura dedicada para essas situa\xE7\xF5es, e o c\xF3digo ficaria assim: 

 

\`\`\` 

{#if nome === 'Ant\xF4nio'} 

<p>\xC9 meu nome!</p> 

{:else} 

<p>N\xE3o \xE9 meu nome...</p> 

{/if} 

\`\`\` 

 

Esse \xE9 o bloco [#if](https://svelte.dev/tutorial/if-blocks) do Svelte, e pode ser utilizado, opcionalmente, com cl\xE1usulas \`:else if\` e \`:else\`. 

 

### Estrutura de repeti\xE7\xE3o 

 

Em React, podemos combinar o JS com JSX para iterar sobre alguma lista e renderizar HTML de acordo com ela. Considere que temos um estado chamado \`numeros\`, que \xE9 um array do JavaScript. Para imprimir um par\xE1grafo para cada item do array, far\xEDamos algo assim: 

 

\`\`\` 

{numeros.map((numero) => ( 

<p>N\xFAmero: {numero}</p> 

))} 

\`\`\` 

 

J\xE1 no Svelte, temos um estrutura dedicada para esses casos, e nosso c\xF3digo ficaria assim:  

 

\`\`\` 

{#each numeros as numero} 

<p>N\xFAmero: {numero}</p> 

{/each} 

\`\`\` 

 

Esse \xE9 o bloco [#each](https://svelte.dev/tutorial/else-blocks) do Svelte e ele pode at\xE9 ser utilizado junto com uma cl\xE1usula \`:else\`, que mostra um HTML caso a lista esteja vazia. 

 

> Note que esses blocos especiais sempre come\xE7am com \`#\`, \u201Ccontinuam\u201D com \`:\` (quando h\xE1 cl\xE1usulas) e terminam em \`/\`. 

 

### C\xF3digo reativo 

 

\xC0s vezes, no nosso c\xF3digo, \xE9 \xFAtil guardar valores que dependem de algum estado do componente. Em React, logo ap\xF3s a declara\xE7\xE3o do estado \`nome\`, poder\xEDamos adicionar o seguinte c\xF3digo: 

 

\`\`\` 

const meuNome = nome === 'Ant\xF4nio'; 

\`\`\` 

 

Assim, podemos utilizar \`meuNome\` no bot\xE3o e no condicional: 

 

\`\`\` 

<button onClick={() => setNome('Ant\xF4nio')} disabled={meuNome}> 

Alterar nome 

</button> 

 

{ 

meuNome 

? <p>\xC9 meu nome!</p> 

: <p>N\xE3o \xE9 meu nome...</p> 

} 

\`\`\` 

 

Dessa forma, evitamos repeti\xE7\xE3o de c\xF3digo, al\xE9m de aumentarmos a legibilidade e a facilidade de manuten\xE7\xE3o. Entretanto, o c\xF3digo \`const meuNome = nome === 'Ant\xF4nio';\` \xE9 executado sempre que o componente \xE9 re-renderizado, mesmo que essa renderiza\xE7\xE3o tenha sido causada por um estado que n\xE3o fosse \`nome\`. 

 

Por outro lado, no Svelte, todo o c\xF3digo dentro da tag \`<script>\` \xE9 executado uma \xFAnica vez, quando o componente \xE9 renderizado pela primeira vez na tela. Ent\xE3o, como far\xEDamos para replicar a situa\xE7\xE3o acima? 

 

Na tag \`<script>\`, podemos adicionar o seguinte c\xF3digo: 

 

\`\`\` 

$: meuNome = nome === 'Ant\xF4nio'; 

\`\`\` 

 

Assim, no HTML, podemos utilizar \`meuNome\`: 

 

\`\`\` 

<button on:click={() => nome = 'Ant\xF4nio'} disabled={meuNome}> 

Alterar nome 

</button> 

 

{#if meuNome} 

<p>\xC9 meu nome!</p> 

{:else} 

<p>N\xE3o \xE9 meu nome...</p> 

{/if} 

\`\`\` 

 

A sintaxe [$:](https://svelte.dev/tutorial/reactive-statements) indica que um c\xF3digo deve ser reativo! O Svelte identifica quais estados est\xE3o sendo utilizados nessa sintaxe e executa o c\xF3digo quando algum desses estados \xE9 alterado. Assim, \`meuNome = nome === 'Ant\xF4nio'\` \xE9 executado somente quando o estado \`nome\` for alterado. 

 

> Se voc\xEA j\xE1 trabalhou com Vue.js, talvez tenha lembrado das *computed properties* (propriedades computadas). De fato, a \u201Csintaxe de d\xF3lar\u201D funciona praticamente da mesma forma. 

 

### E n\xE3o para por a\xED\u2026 

 

Fizemos a compara\xE7\xE3o entre conceitos fundamentais do Svelte e do React, mas ainda levar\xEDamos v\xE1rios artigos para cobrirmos mais diferen\xE7as importantes! Algumas delas: 

 

- **Comunica\xE7\xE3o entre componentes**: no React, a comunica\xE7\xE3o b\xE1sica entre componentes se d\xE1 de forma unidirecional e sempre do pai para o filho, atrav\xE9s de props. J\xE1 o Svelte fornece v\xE1rias op\xE7\xF5es pra gente, como props, [dispatch](https://svelte.dev/tutorial/component-events) (filho para o pai) e [bind](https://svelte.dev/tutorial/component-bindings) (comunica\xE7\xE3o bidirecional). 

 

- **Composi\xE7\xE3o de componentes**: no React, para passarmos conte\xFAdos mais complexos para um componente filho, podemos utilizar \`children\`. No Svelte, utilizamos o [\`slot\`](https://svelte.dev/tutorial/slots), que nos d\xE1 uma grande variedade de recursos, como definir um conte\xFAdo padr\xE3o (*fallback*), configurar o recebimento de mais de um conte\xFAdo (*named slots*), entre outros. 

 

- **M\xE9todos de ciclo de vida**: na abordagem funcional do React, o controle dos ciclos de vida de um componente \xE9 unificado no hook \`useEffect()\`. O Svelte prefere separar essas responsabilidades em [diferentes m\xE9todos](https://svelte.dev/tutorial/onmount): \`onMount()\`, \`beforeUpdate()\`, \`afterUpdate()\` e \`onDestroy()\`. Mas tamb\xE9m temos a op\xE7\xE3o de retornar uma fun\xE7\xE3o para o m\xE9todo \`onMount()\`, e ela ser\xE1 executada quando o componente for destru\xEDdo, ou seja, como se ela estivesse no m\xE9todo \`onDestroy()\`. 

 

- **Gerenciamento de estado**: no React, podemos optar pela solu\xE7\xE3o nativa, a Context API, ou alguma biblioteca externa, como Redux. No Svelte, temos duas solu\xE7\xF5es nativas: as [Stores](https://svelte.dev/tutorial/writable-stores), para gerenciamento de estado global, e uma [Context API](https://svelte.dev/tutorial/context-api) tamb\xE9m, para casos mais espec\xEDficos. 

 

## Resumindo, Svelte \xE9 melhor que React? 

 

Apesar de todos os benef\xEDcios citados, o Svelte ainda \xE9 uma **tecnologia em ascens\xE3o**, e n\xE3o possui tantas oportunidades de emprego quanto seus concorrentes. 

 

Por outro lado, ele j\xE1 \xE9 utilizado por empresas como Spotify, The New York Times, Avast, Philips, e outras, como podemos ver na [p\xE1gina principal do Svelte](https://svelte.dev/) e [nessa p\xE1gina da extens\xE3o Wappalyzer](https://www.wappalyzer.com/technologies/javascript-frameworks/svelte), que analisa quais sites utilizam determinada tecnologia. 

 O React ainda lidera o mercado e as vagas de emprego. Mas n\xF3s, pessoas desenvolvedoras front-end, devemos sempre nos manter atualizadas de novas tecnologias, principalmente, quando possuem um grande potencial de crescimento, como o Svelte. Al\xE9m disso, estudar diferentes ferramentas front-end \xE9 uma excelente forma de refor\xE7ar conceitos e de apurar nosso senso cr\xEDtico, fazendo-nos questionar as decis\xF5es que foram tomadas na constru\xE7\xE3o de uma determinada tecnologia. 

 

Para conferir todos os recursos do Svelte citados neste artigo, voc\xEA pode visitar o [tutorial](https://svelte.dev/tutorial/basics) ou a [documenta\xE7\xE3o](https://svelte.dev/docs).  

 

Confira tamb\xE9m esse Hipster Ponto Tube: [Como trabalhar com Framework SVELTE? Com Mario Souto](https://www.youtube.com/watch?v=1F7r0G0hFcE). 

`}];function v1(){return P(dt,{children:P("ul",{className:"my-12 flex flex-wrap justify-between gap-8 lg:-translate-y-24",children:Il.map(e=>P("li",{className:"w-full overflow-hidden rounded-xl shadow-2xl duration-500 ease-in-out md:w-[47%] lg:hover:-translate-y-4 lg:w-[23%]",children:P(Nm,{post:e})},e.id))})})}const y1="/assets/pageNotFoundBackground.f46b6566.webp";function Tm(){const e=Cm();return de("div",{className:"relative h-screen w-full",children:[P("img",{className:"absolute top-0 -z-10 h-full w-full bg-gradient-to-r from-[#041833] to-[#123663] object-cover",src:y1,alt:""}),de(dt,{className:"z-50 flex h-full flex-col items-center justify-center text-white",children:[P("h2",{className:"mb-[12vh] text-[20vh] leading-4 text-azulLight lg:mb-[20vh] lg:text-[35vh]",children:"404"}),P("h1",{className:"mb-8 font-playfair text-2xl font-bold md:text-4xl lg:text-5xl",children:"Ops! P\xE1gina n\xE3o encontrada."}),P("p",{className:"mb-8 text-center text-xl md:text-2xl lg:max-w-5xl lg:text-3xl",children:"Tem certeza de que era isso que voc\xEA estava procurando? Aguarde uns instantes e recarregue a p\xE1gina, ou volte para a p\xE1gina inicial."}),P("button",{className:"cursor-pointer rounded-3xl bg-azulLight px-6 py-3 text-xl tracking-wider shadow-md duration-1000 ease-in-out lg:hover:bg-azulDark lg:hover:px-9",onClick:()=>e(-1),children:"Voltar"})]})]})}const x1="/assets/bannerBlog.7a95e412.webp",yc=["http","https","mailto","tel"];function w1(e){const n=(e||"").trim(),t=n.charAt(0);if(t==="#"||t==="/")return n;const r=n.indexOf(":");if(r===-1)return n;let o=-1;for(;++o<yc.length;){const i=yc[o];if(r===i.length&&n.slice(0,i.length).toLowerCase()===i)return n}return o=n.indexOf("?"),o!==-1&&r>o||(o=n.indexOf("#"),o!==-1&&r>o)?n:"javascript:void(0)"}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Om=function(n){return n!=null&&n.constructor!=null&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)};function Dr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?xc(e.position):"start"in e||"end"in e?xc(e):"line"in e||"column"in e?_l(e):""}function _l(e){return wc(e&&e.line)+":"+wc(e&&e.column)}function xc(e){return _l(e&&e.start)+"-"+_l(e&&e.end)}function wc(e){return e&&typeof e=="number"?e:1}class cn extends Error{constructor(n,t,r){const o=[null,null];let i={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof t=="string"&&(r=t,t=void 0),typeof r=="string"){const a=r.indexOf(":");a===-1?o[1]=r:(o[0]=r.slice(0,a),o[1]=r.slice(a+1))}t&&("type"in t||"position"in t?t.position&&(i=t.position):"start"in t||"end"in t?i=t:("line"in t||"column"in t)&&(i.start=t)),this.name=Dr(t)||"1:1",this.message=typeof n=="object"?n.message:n,this.stack="",typeof n=="object"&&n.stack&&(this.stack=n.stack),this.reason=this.message,this.fatal,this.line=i.start.line,this.column=i.start.column,this.position=i,this.source=o[0],this.ruleId=o[1],this.file,this.actual,this.expected,this.url,this.note}}cn.prototype.file="";cn.prototype.name="";cn.prototype.reason="";cn.prototype.message="";cn.prototype.stack="";cn.prototype.fatal=null;cn.prototype.column=null;cn.prototype.line=null;cn.prototype.source=null;cn.prototype.ruleId=null;cn.prototype.position=null;const En={basename:k1,dirname:S1,extname:C1,join:E1,sep:"/"};function k1(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');fo(e);let t=0,r=-1,o=e.length,i;if(n===void 0||n.length===0||n.length>e.length){for(;o--;)if(e.charCodeAt(o)===47){if(i){t=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,l=n.length-1;for(;o--;)if(e.charCodeAt(o)===47){if(i){t=o+1;break}}else a<0&&(i=!0,a=o+1),l>-1&&(e.charCodeAt(o)===n.charCodeAt(l--)?l<0&&(r=o):(l=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function S1(e){if(fo(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.charCodeAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.charCodeAt(0)===47?"/":".":n===1&&e.charCodeAt(0)===47?"//":e.slice(0,n)}function C1(e){fo(e);let n=e.length,t=-1,r=0,o=-1,i=0,a;for(;n--;){const l=e.charCodeAt(n);if(l===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),l===46?o<0?o=n:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||t<0||i===0||i===1&&o===t-1&&o===r+1?"":e.slice(o,t)}function E1(...e){let n=-1,t;for(;++n<e.length;)fo(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":P1(t)}function P1(e){fo(e);const n=e.charCodeAt(0)===47;let t=z1(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.charCodeAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function z1(e,n){let t="",r=0,o=-1,i=0,a=-1,l,s;for(;++a<=e.length;){if(a<e.length)l=e.charCodeAt(a);else{if(l===47)break;l=47}if(l===47){if(!(o===a-1||i===1))if(o!==a-1&&i===2){if(t.length<2||r!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),o=a,i=0;continue}}else if(t.length>0){t="",r=0,o=a,i=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),r=a-o-1;o=a,i=0}else l===46&&i>-1?i++:i=-1}return t}function fo(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const A1={cwd:N1};function N1(){return"/"}function jl(e){return e!==null&&typeof e=="object"&&e.href&&e.origin}function T1(e){if(typeof e=="string")e=new URL(e);else if(!jl(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return O1(e)}function O1(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.charCodeAt(t)===37&&n.charCodeAt(t+1)===50){const r=n.charCodeAt(t+2);if(r===70||r===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(n)}const za=["history","path","basename","stem","extname","dirname"];class bm{constructor(n){let t;n?typeof n=="string"||Om(n)?t={value:n}:jl(n)?t={path:n}:t=n:t={},this.data={},this.messages=[],this.history=[],this.cwd=A1.cwd(),this.value,this.stored,this.result,this.map;let r=-1;for(;++r<za.length;){const i=za[r];i in t&&t[i]!==void 0&&(this[i]=i==="history"?[...t[i]]:t[i])}let o;for(o in t)za.includes(o)||(this[o]=t[o])}get path(){return this.history[this.history.length-1]}set path(n){jl(n)&&(n=T1(n)),Na(n,"path"),this.path!==n&&this.history.push(n)}get dirname(){return typeof this.path=="string"?En.dirname(this.path):void 0}set dirname(n){kc(this.basename,"dirname"),this.path=En.join(n||"",this.basename)}get basename(){return typeof this.path=="string"?En.basename(this.path):void 0}set basename(n){Na(n,"basename"),Aa(n,"basename"),this.path=En.join(this.dirname||"",n)}get extname(){return typeof this.path=="string"?En.extname(this.path):void 0}set extname(n){if(Aa(n,"extname"),kc(this.dirname,"extname"),n){if(n.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=En.join(this.dirname,this.stem+(n||""))}get stem(){return typeof this.path=="string"?En.basename(this.path,this.extname):void 0}set stem(n){Na(n,"stem"),Aa(n,"stem"),this.path=En.join(this.dirname||"",n+(this.extname||""))}toString(n){return(this.value||"").toString(n)}message(n,t,r){const o=new cn(n,t,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}info(n,t,r){const o=this.message(n,t,r);return o.fatal=null,o}fail(n,t,r){const o=this.message(n,t,r);throw o.fatal=!0,o}}function Aa(e,n){if(e&&e.includes(En.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+En.sep+"`")}function Na(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function kc(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function Sc(e){if(e)throw e}var Jo=Object.prototype.hasOwnProperty,Lm=Object.prototype.toString,Cc=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,Pc=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Lm.call(n)==="[object Array]"},zc=function(n){if(!n||Lm.call(n)!=="[object Object]")return!1;var t=Jo.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Jo.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var o;for(o in n);return typeof o>"u"||Jo.call(n,o)},Ac=function(n,t){Cc&&t.name==="__proto__"?Cc(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},Nc=function(n,t){if(t==="__proto__")if(Jo.call(n,t)){if(Ec)return Ec(n,t).value}else return;return n[t]},Tc=function e(){var n,t,r,o,i,a,l=arguments[0],s=1,u=arguments.length,c=!1;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(n=arguments[s],n!=null)for(t in n)r=Nc(l,t),o=Nc(n,t),l!==o&&(c&&o&&(zc(o)||(i=Pc(o)))?(i?(i=!1,a=r&&Pc(r)?r:[]):a=r&&zc(r)?r:{},Ac(l,{name:t,newValue:e(c,a,o)})):typeof o<"u"&&Ac(l,{name:t,newValue:o}));return l};function ql(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function b1(){const e=[],n={run:t,use:r};return n;function t(...o){let i=-1;const a=o.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...o);function l(s,...u){const c=e[++i];let p=-1;if(s){a(s);return}for(;++p<o.length;)(u[p]===null||u[p]===void 0)&&(u[p]=o[p]);o=u,c?L1(c,l)(...u):a(null,...u)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),n}}function L1(e,n){let t;return r;function r(...a){const l=e.length>a.length;let s;l&&a.push(o);try{s=e.apply(this,a)}catch(u){const c=u;if(l&&t)throw c;return o(c)}l||(s instanceof Promise?s.then(i,o):s instanceof Error?o(s):i(s))}function o(a,...l){t||(t=!0,n(a,...l))}function i(a){o(null,a)}}const F1=Im().freeze(),Fm={}.hasOwnProperty;function Im(){const e=b1(),n=[];let t={},r,o=-1;return i.data=a,i.Parser=void 0,i.Compiler=void 0,i.freeze=l,i.attachers=n,i.use=s,i.parse=u,i.stringify=c,i.run=p,i.runSync=m,i.process=h,i.processSync=v,i;function i(){const w=Im();let A=-1;for(;++A<n.length;)w.use(...n[A]);return w.data(Tc(!0,{},t)),w}function a(w,A){return typeof w=="string"?arguments.length===2?(ba("data",r),t[w]=A,i):Fm.call(t,w)&&t[w]||null:w?(ba("data",r),t=w,i):t}function l(){if(r)return i;for(;++o<n.length;){const[w,...A]=n[o];if(A[0]===!1)continue;A[0]===!0&&(A[0]=void 0);const d=w.call(i,...A);typeof d=="function"&&e.use(d)}return r=!0,o=Number.POSITIVE_INFINITY,i}function s(w,...A){let d;if(ba("use",r),w!=null)if(typeof w=="function")z(w,...A);else if(typeof w=="object")Array.isArray(w)?S(w):g(w);else throw new TypeError("Expected usable value, not `"+w+"`");return d&&(t.settings=Object.assign(t.settings||{},d)),i;function f(k){if(typeof k=="function")z(k);else if(typeof k=="object")if(Array.isArray(k)){const[E,...O]=k;z(E,...O)}else g(k);else throw new TypeError("Expected usable value, not `"+k+"`")}function g(k){S(k.plugins),k.settings&&(d=Object.assign(d||{},k.settings))}function S(k){let E=-1;if(k!=null)if(Array.isArray(k))for(;++E<k.length;){const O=k[E];f(O)}else throw new TypeError("Expected a list of plugins, not `"+k+"`")}function z(k,E){let O=-1,R;for(;++O<n.length;)if(n[O][0]===k){R=n[O];break}R?(ql(R[1])&&ql(E)&&(E=Tc(!0,R[1],E)),R[1]=E):n.push([...arguments])}}function u(w){i.freeze();const A=Pr(w),d=i.Parser;return Ta("parse",d),Oc(d,"parse")?new d(String(A),A).parse():d(String(A),A)}function c(w,A){i.freeze();const d=Pr(A),f=i.Compiler;return Oa("stringify",f),bc(w),Oc(f,"compile")?new f(w,d).compile():f(w,d)}function p(w,A,d){if(bc(w),i.freeze(),!d&&typeof A=="function"&&(d=A,A=void 0),!d)return new Promise(f);f(null,d);function f(g,S){e.run(w,Pr(A),z);function z(k,E,O){E=E||w,k?S(k):g?g(E):d(null,E,O)}}}function m(w,A){let d,f;return i.run(w,A,g),Lc("runSync","run",f),d;function g(S,z){Sc(S),d=z,f=!0}}function h(w,A){if(i.freeze(),Ta("process",i.Parser),Oa("process",i.Compiler),!A)return new Promise(d);d(null,A);function d(f,g){const S=Pr(w);i.run(i.parse(S),S,(k,E,O)=>{if(k||!E||!O)z(k);else{const R=i.stringify(E,O);R==null||(j1(R)?O.value=R:O.result=R),z(k,O)}});function z(k,E){k||!E?g(k):f?f(E):A(null,E)}}}function v(w){let A;i.freeze(),Ta("processSync",i.Parser),Oa("processSync",i.Compiler);const d=Pr(w);return i.process(d,f),Lc("processSync","process",A),d;function f(g){A=!0,Sc(g)}}}function Oc(e,n){return typeof e=="function"&&e.prototype&&(I1(e.prototype)||n in e.prototype)}function I1(e){let n;for(n in e)if(Fm.call(e,n))return!0;return!1}function Ta(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `Parser`")}function Oa(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `Compiler`")}function ba(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function bc(e){if(!ql(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Lc(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Pr(e){return _1(e)?e:new bm(e)}function _1(e){return Boolean(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function j1(e){return typeof e=="string"||Om(e)}function q1(e,n){var{includeImageAlt:t=!0}=n||{};return _m(e,t)}function _m(e,n){return e&&typeof e=="object"&&(e.value||(n?e.alt:"")||"children"in e&&Fc(e.children,n)||Array.isArray(e)&&Fc(e,n))||""}function Fc(e,n){for(var t=[],r=-1;++r<e.length;)t[r]=_m(e[r],n);return t.join("")}function Tn(e,n,t,r){const o=e.length;let i=0,a;if(n<0?n=-n>o?0:o+n:n=n>o?o:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),[].splice.apply(e,a);else for(t&&[].splice.apply(e,[n,t]);i<r.length;)a=r.slice(i,i+1e4),a.unshift(n,0),[].splice.apply(e,a),i+=1e4,n+=1e4}function rn(e,n){return e.length>0?(Tn(e,e.length,0,n),e):n}const Ic={}.hasOwnProperty;function R1(e){const n={};let t=-1;for(;++t<e.length;)M1(n,e[t]);return n}function M1(e,n){let t;for(t in n){const o=(Ic.call(e,t)?e[t]:void 0)||(e[t]={}),i=n[t];let a;for(a in i){Ic.call(o,a)||(o[a]=[]);const l=i[a];D1(o[a],Array.isArray(l)?l:l?[l]:[])}}}function D1(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);Tn(e,0,0,r)}const B1=/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,zn=pt(/[A-Za-z]/),Rl=pt(/\d/),V1=pt(/[\dA-Fa-f]/),Ke=pt(/[\dA-Za-z]/),U1=pt(/[!-/:-@[-`{-~]/),_c=pt(/[#-'*+\--9=?A-Z^-~]/);function Ml(e){return e!==null&&(e<32||e===127)}function ln(e){return e!==null&&(e<0||e===32)}function B(e){return e!==null&&e<-2}function me(e){return e===-2||e===-1||e===32}const H1=pt(/\s/),$1=pt(B1);function pt(e){return n;function n(t){return t!==null&&e.test(String.fromCharCode(t))}}function X(e,n,t,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return a;function a(s){return me(s)?(e.enter(t),l(s)):n(s)}function l(s){return me(s)&&i++<o?(e.consume(s),l):(e.exit(t),n(s))}}const W1={tokenize:J1};function J1(e){const n=e.attempt(this.parser.constructs.contentInitial,r,o);let t;return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),X(e,n,"linePrefix")}function o(l){return e.enter("paragraph"),i(l)}function i(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return B(l)?(e.consume(l),e.exit("chunkText"),i):(e.consume(l),a)}}const Q1={tokenize:K1},jc={tokenize:G1};function K1(e){const n=this,t=[];let r=0,o,i,a;return l;function l(g){if(r<t.length){const S=t[r];return n.containerState=S[1],e.attempt(S[0].continuation,s,u)(g)}return u(g)}function s(g){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,o&&f();const S=n.events.length;let z=S,k;for(;z--;)if(n.events[z][0]==="exit"&&n.events[z][1].type==="chunkFlow"){k=n.events[z][1].end;break}d(r);let E=S;for(;E<n.events.length;)n.events[E][1].end=Object.assign({},k),E++;return Tn(n.events,z+1,0,n.events.slice(S)),n.events.length=E,u(g)}return l(g)}function u(g){if(r===t.length){if(!o)return m(g);if(o.currentConstruct&&o.currentConstruct.concrete)return v(g);n.interrupt=Boolean(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(jc,c,p)(g)}function c(g){return o&&f(),d(r),m(g)}function p(g){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,v(g)}function m(g){return n.containerState={},e.attempt(jc,h,v)(g)}function h(g){return r++,t.push([n.currentConstruct,n.containerState]),m(g)}function v(g){if(g===null){o&&f(),d(0),e.consume(g);return}return o=o||n.parser.flow(n.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:o}),w(g)}function w(g){if(g===null){A(e.exit("chunkFlow"),!0),d(0),e.consume(g);return}return B(g)?(e.consume(g),A(e.exit("chunkFlow")),r=0,n.interrupt=void 0,l):(e.consume(g),w)}function A(g,S){const z=n.sliceStream(g);if(S&&z.push(null),g.previous=i,i&&(i.next=g),i=g,o.defineSkip(g.start),o.write(z),n.parser.lazy[g.start.line]){let k=o.events.length;for(;k--;)if(o.events[k][1].start.offset<a&&(!o.events[k][1].end||o.events[k][1].end.offset>a))return;const E=n.events.length;let O=E,R,M;for(;O--;)if(n.events[O][0]==="exit"&&n.events[O][1].type==="chunkFlow"){if(R){M=n.events[O][1].end;break}R=!0}for(d(r),k=E;k<n.events.length;)n.events[k][1].end=Object.assign({},M),k++;Tn(n.events,O+1,0,n.events.slice(E)),n.events.length=k}}function d(g){let S=t.length;for(;S-- >g;){const z=t[S];n.containerState=z[1],z[0].exit.call(n,e)}t.length=g}function f(){o.write([null]),i=void 0,o=void 0,n.containerState._closeFlow=void 0}}function G1(e,n,t){return X(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function qc(e){if(e===null||ln(e)||H1(e))return 1;if($1(e))return 2}function Bs(e,n,t){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(n=i(n,t),r.push(i))}return n}const Dl={name:"attention",tokenize:X1,resolveAll:Y1};function Y1(e,n){let t=-1,r,o,i,a,l,s,u,c;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const p=Object.assign({},e[r][1].end),m=Object.assign({},e[t][1].start);Rc(p,-s),Rc(m,s),a={type:s>1?"strongSequence":"emphasisSequence",start:p,end:Object.assign({},e[r][1].end)},l={type:s>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[t][1].start),end:m},i={type:s>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[t][1].start)},o={type:s>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},l.end)},e[r][1].end=Object.assign({},a.start),e[t][1].start=Object.assign({},l.end),u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=rn(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=rn(u,[["enter",o,n],["enter",a,n],["exit",a,n],["enter",i,n]]),u=rn(u,Bs(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=rn(u,[["exit",i,n],["enter",l,n],["exit",l,n],["exit",o,n]]),e[t][1].end.offset-e[t][1].start.offset?(c=2,u=rn(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):c=0,Tn(e,r-1,t-r+3,u),t=r+u.length-c-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function X1(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,o=qc(r);let i;return a;function a(s){return e.enter("attentionSequence"),i=s,l(s)}function l(s){if(s===i)return e.consume(s),l;const u=e.exit("attentionSequence"),c=qc(s),p=!c||c===2&&o||t.includes(s),m=!o||o===2&&c||t.includes(r);return u._open=Boolean(i===42?p:p&&(o||!m)),u._close=Boolean(i===42?m:m&&(c||!p)),n(s)}}function Rc(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Z1={name:"autolink",tokenize:ey};function ey(e,n,t){let r=1;return o;function o(v){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(v){return zn(v)?(e.consume(v),a):_c(v)?u(v):t(v)}function a(v){return v===43||v===45||v===46||Ke(v)?l(v):u(v)}function l(v){return v===58?(e.consume(v),s):(v===43||v===45||v===46||Ke(v))&&r++<32?(e.consume(v),l):u(v)}function s(v){return v===62?(e.exit("autolinkProtocol"),h(v)):v===null||v===32||v===60||Ml(v)?t(v):(e.consume(v),s)}function u(v){return v===64?(e.consume(v),r=0,c):_c(v)?(e.consume(v),u):t(v)}function c(v){return Ke(v)?p(v):t(v)}function p(v){return v===46?(e.consume(v),r=0,c):v===62?(e.exit("autolinkProtocol").type="autolinkEmail",h(v)):m(v)}function m(v){return(v===45||Ke(v))&&r++<63?(e.consume(v),v===45?m:p):t(v)}function h(v){return e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n}}const Ri={tokenize:ny,partial:!0};function ny(e,n,t){return X(e,r,"linePrefix");function r(o){return o===null||B(o)?n(o):t(o)}}const jm={name:"blockQuote",tokenize:ty,continuation:{tokenize:ry},exit:oy};function ty(e,n,t){const r=this;return o;function o(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),i}return t(a)}function i(a){return me(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function ry(e,n,t){return X(e,e.attempt(jm,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function oy(e){e.exit("blockQuote")}const qm={name:"characterEscape",tokenize:iy};function iy(e,n,t){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return U1(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(i)}}const Mc=document.createElement("i");function Vs(e){const n="&"+e+";";Mc.innerHTML=n;const t=Mc.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}const Rm={name:"characterReference",tokenize:ay};function ay(e,n,t){const r=this;let o=0,i,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),s}function s(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),i=31,a=Ke,c(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,a=V1,c):(e.enter("characterReferenceValue"),i=7,a=Rl,c(p))}function c(p){let m;return p===59&&o?(m=e.exit("characterReferenceValue"),a===Ke&&!Vs(r.sliceSerialize(m))?t(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)):a(p)&&o++<i?(e.consume(p),c):t(p)}}const Dc={name:"codeFenced",tokenize:ly,concrete:!0};function ly(e,n,t){const r=this,o={tokenize:z,partial:!0},i={tokenize:S,partial:!0},a=this.events[this.events.length-1],l=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0;let s=0,u;return c;function c(k){return e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u=k,p(k)}function p(k){return k===u?(e.consume(k),s++,p):(e.exit("codeFencedFenceSequence"),s<3?t(k):X(e,m,"whitespace")(k))}function m(k){return k===null||B(k)?A(k):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||ln(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),X(e,v,"whitespace")(k)):k===96&&k===u?t(k):(e.consume(k),h)}function v(k){return k===null||B(k)?A(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(k))}function w(k){return k===null||B(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),A(k)):k===96&&k===u?t(k):(e.consume(k),w)}function A(k){return e.exit("codeFencedFence"),r.interrupt?n(k):d(k)}function d(k){return k===null?g(k):B(k)?e.attempt(i,e.attempt(o,g,l?X(e,d,"linePrefix",l+1):d),g)(k):(e.enter("codeFlowValue"),f(k))}function f(k){return k===null||B(k)?(e.exit("codeFlowValue"),d(k)):(e.consume(k),f)}function g(k){return e.exit("codeFenced"),n(k)}function S(k,E,O){const R=this;return M;function M(q){return k.enter("lineEnding"),k.consume(q),k.exit("lineEnding"),F}function F(q){return R.parser.lazy[R.now().line]?O(q):E(q)}}function z(k,E,O){let R=0;return X(k,M,"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function M(V){return k.enter("codeFencedFence"),k.enter("codeFencedFenceSequence"),F(V)}function F(V){return V===u?(k.consume(V),R++,F):R<s?O(V):(k.exit("codeFencedFenceSequence"),X(k,q,"whitespace")(V))}function q(V){return V===null||B(V)?(k.exit("codeFencedFence"),E(V)):O(V)}}}const La={name:"codeIndented",tokenize:uy},sy={tokenize:cy,partial:!0};function uy(e,n,t){const r=this;return o;function o(u){return e.enter("codeIndented"),X(e,i,"linePrefix",4+1)(u)}function i(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?a(u):t(u)}function a(u){return u===null?s(u):B(u)?e.attempt(sy,a,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||B(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),n(u)}}function cy(e,n,t){const r=this;return o;function o(a){return r.parser.lazy[r.now().line]?t(a):B(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):X(e,i,"linePrefix",4+1)(a)}function i(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):B(a)?o(a):t(a)}}const dy={name:"codeText",tokenize:fy,resolve:py,previous:my};function py(e){let n=e.length-4,t=3,r,o;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)o===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(o=r):(r===n||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),n-=r-o-2,r=o+2),o=void 0);return e}function my(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function fy(e,n,t){let r=0,o,i;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),s(p))}function s(p){return p===null?t(p):p===96?(i=e.enter("codeTextSequence"),o=0,c(p)):p===32?(e.enter("space"),e.consume(p),e.exit("space"),s):B(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||B(p)?(e.exit("codeTextData"),s(p)):(e.consume(p),u)}function c(p){return p===96?(e.consume(p),o++,c):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(p)):(i.type="codeTextData",u(p))}}function Mm(e){const n={};let t=-1,r,o,i,a,l,s,u;for(;++t<e.length;){for(;t in n;)t=n[t];if(r=e[t],t&&r[1].type==="chunkFlow"&&e[t-1][1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,i=0,i<s.length&&s[i][1].type==="lineEndingBlank"&&(i+=2),i<s.length&&s[i][1].type==="content"))for(;++i<s.length&&s[i][1].type!=="content";)s[i][1].type==="chunkText"&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,hy(e,t)),t=n[t],u=!0);else if(r[1]._container){for(i=t,o=void 0;i--&&(a=e[i],a[1].type==="lineEnding"||a[1].type==="lineEndingBlank");)a[0]==="enter"&&(o&&(e[o][1].type="lineEndingBlank"),a[1].type="lineEnding",o=i);o&&(r[1].end=Object.assign({},e[o][1].start),l=e.slice(o,t),l.unshift(r),Tn(e,o,t-o+1,l))}}return!u}function hy(e,n){const t=e[n][1],r=e[n][2];let o=n-1;const i=[],a=t._tokenizer||r.parser[t.contentType](t.start),l=a.events,s=[],u={};let c,p,m=-1,h=t,v=0,w=0;const A=[w];for(;h;){for(;e[++o][1]!==h;);i.push(o),h._tokenizer||(c=r.sliceStream(h),h.next||c.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(c),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=t;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(w=m+1,A.push(w),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):A.pop(),m=A.length;m--;){const d=l.slice(A[m],A[m+1]),f=i.pop();s.unshift([f,f+d.length-1]),Tn(e,f,2,d)}for(m=-1;++m<s.length;)u[v+s[m][0]]=v+s[m][1],v+=s[m][1]-s[m][0]-1;return u}const gy={tokenize:xy,resolve:yy},vy={tokenize:wy,partial:!0};function yy(e){return Mm(e),e}function xy(e,n){let t;return r;function r(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),o(l)}function o(l){return l===null?i(l):B(l)?e.check(vy,a,i)(l):(e.consume(l),o)}function i(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function a(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,o}}function wy(e,n,t){const r=this;return o;function o(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),X(e,i,"linePrefix")}function i(a){if(a===null||B(a))return t(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function Dm(e,n,t,r,o,i,a,l,s){const u=s||Number.POSITIVE_INFINITY;let c=0;return p;function p(d){return d===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(d),e.exit(i),m):d===null||d===41||Ml(d)?t(d):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),w(d))}function m(d){return d===62?(e.enter(i),e.consume(d),e.exit(i),e.exit(o),e.exit(r),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(d))}function h(d){return d===62?(e.exit("chunkString"),e.exit(l),m(d)):d===null||d===60||B(d)?t(d):(e.consume(d),d===92?v:h)}function v(d){return d===60||d===62||d===92?(e.consume(d),h):h(d)}function w(d){return d===40?++c>u?t(d):(e.consume(d),w):d===41?c--?(e.consume(d),w):(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),n(d)):d===null||ln(d)?c?t(d):(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),n(d)):Ml(d)?t(d):(e.consume(d),d===92?A:w)}function A(d){return d===40||d===41||d===92?(e.consume(d),w):w(d)}}function Bm(e,n,t,r,o,i){const a=this;let l=0,s;return u;function u(h){return e.enter(r),e.enter(o),e.consume(h),e.exit(o),e.enter(i),c}function c(h){return h===null||h===91||h===93&&!s||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs||l>999?t(h):h===93?(e.exit(i),e.enter(o),e.consume(h),e.exit(o),e.exit(r),n):B(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||B(h)||l++>999?(e.exit("chunkString"),c(h)):(e.consume(h),s=s||!me(h),h===92?m:p)}function m(h){return h===91||h===92||h===93?(e.consume(h),l++,p):p(h)}}function Vm(e,n,t,r,o,i){let a;return l;function l(m){return e.enter(r),e.enter(o),e.consume(m),e.exit(o),a=m===40?41:m,s}function s(m){return m===a?(e.enter(o),e.consume(m),e.exit(o),e.exit(r),n):(e.enter(i),u(m))}function u(m){return m===a?(e.exit(i),s(a)):m===null?t(m):B(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),X(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(m))}function c(m){return m===a||m===null||B(m)?(e.exit("chunkString"),u(m)):(e.consume(m),m===92?p:c)}function p(m){return m===a||m===92?(e.consume(m),c):c(m)}}function Br(e,n){let t;return r;function r(o){return B(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t=!0,r):me(o)?X(e,r,t?"linePrefix":"lineSuffix")(o):n(o)}}function Zt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ky={name:"definition",tokenize:Cy},Sy={tokenize:Ey,partial:!0};function Cy(e,n,t){const r=this;let o;return i;function i(s){return e.enter("definition"),Bm.call(r,e,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(s)}function a(s){return o=Zt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),s===58?(e.enter("definitionMarker"),e.consume(s),e.exit("definitionMarker"),Br(e,Dm(e,e.attempt(Sy,X(e,l,"whitespace"),X(e,l,"whitespace")),t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString"))):t(s)}function l(s){return s===null||B(s)?(e.exit("definition"),r.parser.defined.includes(o)||r.parser.defined.push(o),n(s)):t(s)}}function Ey(e,n,t){return r;function r(a){return ln(a)?Br(e,o)(a):t(a)}function o(a){return a===34||a===39||a===40?Vm(e,X(e,i,"whitespace"),t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a):t(a)}function i(a){return a===null||B(a)?n(a):t(a)}}const Py={name:"hardBreakEscape",tokenize:zy};function zy(e,n,t){return r;function r(i){return e.enter("hardBreakEscape"),e.enter("escapeMarker"),e.consume(i),o}function o(i){return B(i)?(e.exit("escapeMarker"),e.exit("hardBreakEscape"),n(i)):t(i)}}const Ay={name:"headingAtx",tokenize:Ty,resolve:Ny};function Ny(e,n){let t=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},i={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},Tn(e,r,t-r+1,[["enter",o,n],["enter",i,n],["exit",i,n],["exit",o,n]])),e}function Ty(e,n,t){const r=this;let o=0;return i;function i(c){return e.enter("atxHeading"),e.enter("atxHeadingSequence"),a(c)}function a(c){return c===35&&o++<6?(e.consume(c),a):c===null||ln(c)?(e.exit("atxHeadingSequence"),r.interrupt?n(c):l(c)):t(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||B(c)?(e.exit("atxHeading"),n(c)):me(c)?X(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||ln(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}const Oy=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Bc=["pre","script","style","textarea"],by={name:"htmlFlow",tokenize:Iy,resolveTo:Fy,concrete:!0},Ly={tokenize:_y,partial:!0};function Fy(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function Iy(e,n,t){const r=this;let o,i,a,l,s;return u;function u(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),c}function c(x){return x===33?(e.consume(x),p):x===47?(e.consume(x),v):x===63?(e.consume(x),o=3,r.interrupt?n:j):zn(x)?(e.consume(x),a=String.fromCharCode(x),i=!0,w):t(x)}function p(x){return x===45?(e.consume(x),o=2,m):x===91?(e.consume(x),o=5,a="CDATA[",l=0,h):zn(x)?(e.consume(x),o=4,r.interrupt?n:j):t(x)}function m(x){return x===45?(e.consume(x),r.interrupt?n:j):t(x)}function h(x){return x===a.charCodeAt(l++)?(e.consume(x),l===a.length?r.interrupt?n:F:h):t(x)}function v(x){return zn(x)?(e.consume(x),a=String.fromCharCode(x),w):t(x)}function w(x){return x===null||x===47||x===62||ln(x)?x!==47&&i&&Bc.includes(a.toLowerCase())?(o=1,r.interrupt?n(x):F(x)):Oy.includes(a.toLowerCase())?(o=6,x===47?(e.consume(x),A):r.interrupt?n(x):F(x)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(x):i?f(x):d(x)):x===45||Ke(x)?(e.consume(x),a+=String.fromCharCode(x),w):t(x)}function A(x){return x===62?(e.consume(x),r.interrupt?n:F):t(x)}function d(x){return me(x)?(e.consume(x),d):R(x)}function f(x){return x===47?(e.consume(x),R):x===58||x===95||zn(x)?(e.consume(x),g):me(x)?(e.consume(x),f):R(x)}function g(x){return x===45||x===46||x===58||x===95||Ke(x)?(e.consume(x),g):S(x)}function S(x){return x===61?(e.consume(x),z):me(x)?(e.consume(x),S):f(x)}function z(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(e.consume(x),s=x,k):me(x)?(e.consume(x),z):(s=null,E(x))}function k(x){return x===null||B(x)?t(x):x===s?(e.consume(x),O):(e.consume(x),k)}function E(x){return x===null||x===34||x===39||x===60||x===61||x===62||x===96||ln(x)?S(x):(e.consume(x),E)}function O(x){return x===47||x===62||me(x)?f(x):t(x)}function R(x){return x===62?(e.consume(x),M):t(x)}function M(x){return me(x)?(e.consume(x),M):x===null||B(x)?F(x):t(x)}function F(x){return x===45&&o===2?(e.consume(x),qe):x===60&&o===1?(e.consume(x),Re):x===62&&o===4?(e.consume(x),_):x===63&&o===3?(e.consume(x),j):x===93&&o===5?(e.consume(x),b):B(x)&&(o===6||o===7)?e.check(Ly,_,q)(x):x===null||B(x)?q(x):(e.consume(x),F)}function q(x){return e.exit("htmlFlowData"),V(x)}function V(x){return x===null?y(x):B(x)?e.attempt({tokenize:he,partial:!0},V,y)(x):(e.enter("htmlFlowData"),F(x))}function he(x,mn,$e){return kn;function kn(Le){return x.enter("lineEnding"),x.consume(Le),x.exit("lineEnding"),Y}function Y(Le){return r.parser.lazy[r.now().line]?$e(Le):mn(Le)}}function qe(x){return x===45?(e.consume(x),j):F(x)}function Re(x){return x===47?(e.consume(x),a="",be):F(x)}function be(x){return x===62&&Bc.includes(a.toLowerCase())?(e.consume(x),_):zn(x)&&a.length<8?(e.consume(x),a+=String.fromCharCode(x),be):F(x)}function b(x){return x===93?(e.consume(x),j):F(x)}function j(x){return x===62?(e.consume(x),_):x===45&&o===2?(e.consume(x),j):F(x)}function _(x){return x===null||B(x)?(e.exit("htmlFlowData"),y(x)):(e.consume(x),_)}function y(x){return e.exit("htmlFlow"),n(x)}}function _y(e,n,t){return r;function r(o){return e.exit("htmlFlowData"),e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),e.attempt(Ri,n,t)}}const jy={name:"htmlText",tokenize:qy};function qy(e,n,t){const r=this;let o,i,a,l;return s;function s(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),u}function u(y){return y===33?(e.consume(y),c):y===47?(e.consume(y),E):y===63?(e.consume(y),z):zn(y)?(e.consume(y),M):t(y)}function c(y){return y===45?(e.consume(y),p):y===91?(e.consume(y),i="CDATA[",a=0,A):zn(y)?(e.consume(y),S):t(y)}function p(y){return y===45?(e.consume(y),m):t(y)}function m(y){return y===null||y===62?t(y):y===45?(e.consume(y),h):v(y)}function h(y){return y===null||y===62?t(y):v(y)}function v(y){return y===null?t(y):y===45?(e.consume(y),w):B(y)?(l=v,b(y)):(e.consume(y),v)}function w(y){return y===45?(e.consume(y),_):v(y)}function A(y){return y===i.charCodeAt(a++)?(e.consume(y),a===i.length?d:A):t(y)}function d(y){return y===null?t(y):y===93?(e.consume(y),f):B(y)?(l=d,b(y)):(e.consume(y),d)}function f(y){return y===93?(e.consume(y),g):d(y)}function g(y){return y===62?_(y):y===93?(e.consume(y),g):d(y)}function S(y){return y===null||y===62?_(y):B(y)?(l=S,b(y)):(e.consume(y),S)}function z(y){return y===null?t(y):y===63?(e.consume(y),k):B(y)?(l=z,b(y)):(e.consume(y),z)}function k(y){return y===62?_(y):z(y)}function E(y){return zn(y)?(e.consume(y),O):t(y)}function O(y){return y===45||Ke(y)?(e.consume(y),O):R(y)}function R(y){return B(y)?(l=R,b(y)):me(y)?(e.consume(y),R):_(y)}function M(y){return y===45||Ke(y)?(e.consume(y),M):y===47||y===62||ln(y)?F(y):t(y)}function F(y){return y===47?(e.consume(y),_):y===58||y===95||zn(y)?(e.consume(y),q):B(y)?(l=F,b(y)):me(y)?(e.consume(y),F):_(y)}function q(y){return y===45||y===46||y===58||y===95||Ke(y)?(e.consume(y),q):V(y)}function V(y){return y===61?(e.consume(y),he):B(y)?(l=V,b(y)):me(y)?(e.consume(y),V):F(y)}function he(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),o=y,qe):B(y)?(l=he,b(y)):me(y)?(e.consume(y),he):(e.consume(y),o=void 0,be)}function qe(y){return y===o?(e.consume(y),Re):y===null?t(y):B(y)?(l=qe,b(y)):(e.consume(y),qe)}function Re(y){return y===62||y===47||ln(y)?F(y):t(y)}function be(y){return y===null||y===34||y===39||y===60||y===61||y===96?t(y):y===62||ln(y)?F(y):(e.consume(y),be)}function b(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),X(e,j,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function j(y){return e.enter("htmlTextData"),l(y)}function _(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),n):t(y)}}const Us={name:"labelEnd",tokenize:Uy,resolveTo:Vy,resolveAll:By},Ry={tokenize:Hy},My={tokenize:$y},Dy={tokenize:Wy};function By(e){let n=-1,t;for(;++n<e.length;)t=e[n][1],(t.type==="labelImage"||t.type==="labelLink"||t.type==="labelEnd")&&(e.splice(n+1,t.type==="labelImage"?4:2),t.type="data",n++);return e}function Vy(e,n){let t=e.length,r=0,o,i,a,l;for(;t--;)if(o=e[t][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[t][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=t,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(a=t);const s={type:e[i][1].type==="labelLink"?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},u={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[a][1].end)},c={type:"labelText",start:Object.assign({},e[i+r+2][1].end),end:Object.assign({},e[a-2][1].start)};return l=[["enter",s,n],["enter",u,n]],l=rn(l,e.slice(i+1,i+r+3)),l=rn(l,[["enter",c,n]]),l=rn(l,Bs(n.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),n)),l=rn(l,[["exit",c,n],e[a-2],e[a-1],["exit",u,n]]),l=rn(l,e.slice(a+1)),l=rn(l,[["exit",s,n]]),Tn(e,i,e.length,l),e}function Uy(e,n,t){const r=this;let o=r.events.length,i,a;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return l;function l(c){return i?i._inactive?u(c):(a=r.parser.defined.includes(Zt(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelEnd"),s):t(c)}function s(c){return c===40?e.attempt(Ry,n,a?n:u)(c):c===91?e.attempt(My,n,a?e.attempt(Dy,n,u):u)(c):a?n(c):u(c)}function u(c){return i._balanced=!0,t(c)}}function Hy(e,n,t){return r;function r(s){return e.enter("resource"),e.enter("resourceMarker"),e.consume(s),e.exit("resourceMarker"),Br(e,o)}function o(s){return s===41?l(s):Dm(e,i,t,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(s)}function i(s){return ln(s)?Br(e,a)(s):l(s)}function a(s){return s===34||s===39||s===40?Vm(e,Br(e,l),t,"resourceTitle","resourceTitleMarker","resourceTitleString")(s):l(s)}function l(s){return s===41?(e.enter("resourceMarker"),e.consume(s),e.exit("resourceMarker"),e.exit("resource"),n):t(s)}}function $y(e,n,t){const r=this;return o;function o(a){return Bm.call(r,e,i,t,"reference","referenceMarker","referenceString")(a)}function i(a){return r.parser.defined.includes(Zt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(a):t(a)}}function Wy(e,n,t){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),n):t(i)}}const Jy={name:"labelStartImage",tokenize:Qy,resolveAll:Us.resolveAll};function Qy(e,n,t){const r=this;return o;function o(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),i}function i(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):t(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const Ky={name:"labelStartLink",tokenize:Gy,resolveAll:Us.resolveAll};function Gy(e,n,t){const r=this;return o;function o(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),i}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const Fa={name:"lineEnding",tokenize:Yy};function Yy(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),X(e,n,"linePrefix")}}const Qo={name:"thematicBreak",tokenize:Xy};function Xy(e,n,t){let r=0,o;return i;function i(s){return e.enter("thematicBreak"),o=s,a(s)}function a(s){return s===o?(e.enter("thematicBreakSequence"),l(s)):me(s)?X(e,a,"whitespace")(s):r<3||s!==null&&!B(s)?t(s):(e.exit("thematicBreak"),n(s))}function l(s){return s===o?(e.consume(s),r++,l):(e.exit("thematicBreakSequence"),a(s))}}const Me={name:"list",tokenize:n0,continuation:{tokenize:t0},exit:o0},Zy={tokenize:i0,partial:!0},e0={tokenize:r0,partial:!0};function n0(e,n,t){const r=this,o=r.events[r.events.length-1];let i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,a=0;return l;function l(h){const v=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Rl(h)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Qo,t,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(h)}return t(h)}function s(h){return Rl(h)&&++a<10?(e.consume(h),s):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):t(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Ri,r.interrupt?t:c,e.attempt(Zy,m,p))}function c(h){return r.containerState.initialBlankLine=!0,i++,m(h)}function p(h){return me(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),m):t(h)}function m(h){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(h)}}function t0(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Ri,o,i);function o(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,X(e,n,"listItemIndent",r.containerState.size+1)(l)}function i(l){return r.containerState.furtherBlankLines||!me(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(e0,n,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,X(e,e.attempt(Me,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function r0(e,n,t){const r=this;return X(e,o,"listItemIndent",r.containerState.size+1);function o(i){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(i):t(i)}}function o0(e){e.exit(this.containerState.type)}function i0(e,n,t){const r=this;return X(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function o(i){const a=r.events[r.events.length-1];return!me(i)&&a&&a[1].type==="listItemPrefixWhitespace"?n(i):t(i)}}const Vc={name:"setextUnderline",tokenize:l0,resolveTo:a0};function a0(e,n){let t=e.length,r,o,i;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(o=t)}else e[t][1].type==="content"&&e.splice(t,1),!i&&e[t][1].type==="definition"&&(i=t);const a={type:"setextHeading",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",a,n]),e.splice(i+1,0,["exit",e[r][1],n]),e[r][1].end=Object.assign({},e[i][1].end)):e[r][1]=a,e.push(["exit",a,n]),e}function l0(e,n,t){const r=this;let o=r.events.length,i,a;for(;o--;)if(r.events[o][1].type!=="lineEnding"&&r.events[o][1].type!=="linePrefix"&&r.events[o][1].type!=="content"){a=r.events[o][1].type==="paragraph";break}return l;function l(c){return!r.parser.lazy[r.now().line]&&(r.interrupt||a)?(e.enter("setextHeadingLine"),e.enter("setextHeadingLineSequence"),i=c,s(c)):t(c)}function s(c){return c===i?(e.consume(c),s):(e.exit("setextHeadingLineSequence"),X(e,u,"lineSuffix")(c))}function u(c){return c===null||B(c)?(e.exit("setextHeadingLine"),n(c)):t(c)}}const s0={tokenize:u0};function u0(e){const n=this,t=e.attempt(Ri,r,e.attempt(this.parser.constructs.flowInitial,o,X(e,e.attempt(this.parser.constructs.flow,o,e.attempt(gy,o)),"linePrefix")));return t;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const c0={resolveAll:Hm()},d0=Um("string"),p0=Um("text");function Um(e){return{tokenize:n,resolveAll:Hm(e==="text"?m0:void 0)};function n(t){const r=this,o=this.parser.constructs[e],i=t.attempt(o,a,l);return a;function a(c){return u(c)?i(c):l(c)}function l(c){if(c===null){t.consume(c);return}return t.enter("data"),t.consume(c),s}function s(c){return u(c)?(t.exit("data"),i(c)):(t.consume(c),s)}function u(c){if(c===null)return!0;const p=o[c];let m=-1;if(p)for(;++m<p.length;){const h=p[m];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Hm(e){return n;function n(t,r){let o=-1,i;for(;++o<=t.length;)i===void 0?t[o]&&t[o][1].type==="data"&&(i=o,o++):(!t[o]||t[o][1].type!=="data")&&(o!==i+2&&(t[i][1].end=t[o-1][1].end,t.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(t,r):t}}function m0(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],o=n.sliceStream(r);let i=o.length,a=-1,l=0,s;for(;i--;){const u=o[i];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)s=!0,l++;else if(u!==-1){i++;break}}if(l){const u={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+i,_bufferIndex:i?a:r.start._bufferIndex+a},end:Object.assign({},r.end)};r.end=Object.assign({},u.start),r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}function f0(e,n,t){let r=Object.assign(t?Object.assign({},t):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const o={},i=[];let a=[],l=[];const s={consume:f,enter:g,exit:S,attempt:E(z),check:E(k),interrupt:E(k,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:h,sliceSerialize:m,now:v,defineSkip:w,write:p};let c=n.tokenize.call(u,s);return n.resolveAll&&i.push(n),u;function p(F){return a=rn(a,F),A(),a[a.length-1]!==null?[]:(O(n,0),u.events=Bs(i,u.events,u),u.events)}function m(F,q){return g0(h(F),q)}function h(F){return h0(a,F)}function v(){return Object.assign({},r)}function w(F){o[F.line]=F.column,M()}function A(){let F;for(;r._index<a.length;){const q=a[r._index];if(typeof q=="string")for(F=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===F&&r._bufferIndex<q.length;)d(q.charCodeAt(r._bufferIndex));else d(q)}}function d(F){c=c(F)}function f(F){B(F)?(r.line++,r.column=1,r.offset+=F===-3?2:1,M()):F!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=F}function g(F,q){const V=q||{};return V.type=F,V.start=v(),u.events.push(["enter",V,u]),l.push(V),V}function S(F){const q=l.pop();return q.end=v(),u.events.push(["exit",q,u]),q}function z(F,q){O(F,q.from)}function k(F,q){q.restore()}function E(F,q){return V;function V(he,qe,Re){let be,b,j,_;return Array.isArray(he)?x(he):"tokenize"in he?x([he]):y(he);function y(Y){return Le;function Le(On){const Ot=On!==null&&Y[On],bt=On!==null&&Y.null,Gi=[...Array.isArray(Ot)?Ot:Ot?[Ot]:[],...Array.isArray(bt)?bt:bt?[bt]:[]];return x(Gi)(On)}}function x(Y){return be=Y,b=0,Y.length===0?Re:mn(Y[b])}function mn(Y){return Le;function Le(On){return _=R(),j=Y,Y.partial||(u.currentConstruct=Y),Y.name&&u.parser.constructs.disable.null.includes(Y.name)?kn():Y.tokenize.call(q?Object.assign(Object.create(u),q):u,s,$e,kn)(On)}}function $e(Y){return F(j,_),qe}function kn(Y){return _.restore(),++b<be.length?mn(be[b]):Re}}}function O(F,q){F.resolveAll&&!i.includes(F)&&i.push(F),F.resolve&&Tn(u.events,q,u.events.length-q,F.resolve(u.events.slice(q),u)),F.resolveTo&&(u.events=F.resolveTo(u.events,u))}function R(){const F=v(),q=u.previous,V=u.currentConstruct,he=u.events.length,qe=Array.from(l);return{restore:Re,from:he};function Re(){r=F,u.previous=q,u.currentConstruct=V,u.events.length=he,l=qe,M()}}function M(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function h0(e,n){const t=n.start._index,r=n.start._bufferIndex,o=n.end._index,i=n.end._bufferIndex;let a;return t===o?a=[e[t].slice(r,i)]:(a=e.slice(t,o),r>-1&&(a[0]=a[0].slice(r)),i>0&&a.push(e[o].slice(0,i))),a}function g0(e,n){let t=-1;const r=[];let o;for(;++t<e.length;){const i=e[t];let a;if(typeof i=="string")a=i;else switch(i){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&o)continue;a=" ";break}default:a=String.fromCharCode(i)}o=i===-2,r.push(a)}return r.join("")}const v0={[42]:Me,[43]:Me,[45]:Me,[48]:Me,[49]:Me,[50]:Me,[51]:Me,[52]:Me,[53]:Me,[54]:Me,[55]:Me,[56]:Me,[57]:Me,[62]:jm},y0={[91]:ky},x0={[-2]:La,[-1]:La,[32]:La},w0={[35]:Ay,[42]:Qo,[45]:[Vc,Qo],[60]:by,[61]:Vc,[95]:Qo,[96]:Dc,[126]:Dc},k0={[38]:Rm,[92]:qm},S0={[-5]:Fa,[-4]:Fa,[-3]:Fa,[33]:Jy,[38]:Rm,[42]:Dl,[60]:[Z1,jy],[91]:Ky,[92]:[Py,qm],[93]:Us,[95]:Dl,[96]:dy},C0={null:[Dl,c0]},E0={null:[42,95]},P0={null:[]},z0=Object.freeze(Object.defineProperty({__proto__:null,document:v0,contentInitial:y0,flowInitial:x0,flow:w0,string:k0,text:S0,insideSpan:C0,attentionMarkers:E0,disable:P0},Symbol.toStringTag,{value:"Module"}));function A0(e={}){const n=R1([z0].concat(e.extensions||[])),t={defined:[],lazy:{},constructs:n,content:r(W1),document:r(Q1),flow:r(s0),string:r(d0),text:r(p0)};return t;function r(o){return i;function i(a){return f0(t,o,a)}}}const Uc=/[\0\t\n\r]/g;function N0(){let e=1,n="",t=!0,r;return o;function o(i,a,l){const s=[];let u,c,p,m,h;for(i=n+i.toString(a),p=0,n="",t&&(i.charCodeAt(0)===65279&&p++,t=void 0);p<i.length;){if(Uc.lastIndex=p,u=Uc.exec(i),m=u&&u.index!==void 0?u.index:i.length,h=i.charCodeAt(m),!u){n=i.slice(p);break}if(h===10&&p===m&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),p<m&&(s.push(i.slice(p,m)),e+=m-p),h){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}p=m+1}return l&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}function T0(e){for(;!Mm(e););return e}function $m(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"\uFFFD":String.fromCharCode(t)}const O0=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function b0(e){return e.replace(O0,L0)}function L0(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const o=t.charCodeAt(1),i=o===120||o===88;return $m(t.slice(i?2:1),i?16:10)}return Vs(t)||e}const Bl={}.hasOwnProperty,F0=function(e,n,t){return typeof n!="string"&&(t=n,n=void 0),I0(t)(T0(A0(t).document().write(N0()(e,n,!0))))};function I0(e={}){const n=Wm({transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Zs),autolinkProtocol:q,autolinkEmail:q,atxHeading:s(Gs),blockQuote:s(gf),characterEscape:q,characterReference:q,codeFenced:s(Ks),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:s(Ks,u),codeText:s(vf,u),codeTextData:q,data:q,codeFlowValue:q,definition:s(yf),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:s(xf),hardBreakEscape:s(Ys),hardBreakTrailing:s(Ys),htmlFlow:s(Xs,u),htmlFlowData:q,htmlText:s(Xs,u),htmlTextData:q,image:s(wf),label:u,link:s(Zs),listItem:s(kf),listItemValue:w,listOrdered:s(eu,v),listUnordered:s(eu),paragraph:s(Sf),reference:Y,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:s(Gs),strong:s(Cf),thematicBreak:s(Pf)},exit:{atxHeading:p(),atxHeadingSequence:O,autolink:p(),autolinkEmail:Gi,autolinkProtocol:bt,blockQuote:p(),characterEscapeValue:V,characterReferenceMarkerHexadecimal:On,characterReferenceMarkerNumeric:On,characterReferenceValue:Ot,codeFenced:p(g),codeFencedFence:f,codeFencedFenceInfo:A,codeFencedFenceMeta:d,codeFlowValue:V,codeIndented:p(S),codeText:p(b),codeTextData:V,data:V,definition:p(),definitionDestinationString:E,definitionLabelString:z,definitionTitleString:k,emphasis:p(),hardBreakEscape:p(qe),hardBreakTrailing:p(qe),htmlFlow:p(Re),htmlFlowData:V,htmlText:p(be),htmlTextData:V,image:p(_),label:x,labelText:y,lineEnding:he,link:p(j),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:Le,resourceDestinationString:mn,resourceTitleString:$e,resource:kn,setextHeading:p(F),setextHeadingLineSequence:M,setextHeadingText:R,strong:p(),thematicBreak:p()}},e.mdastExtensions||[]),t={};return r;function r(C){let L={type:"root",children:[]};const H=[L],G=[],en=[],hr={stack:H,tokenStack:G,config:n,enter:c,exit:m,buffer:u,resume:h,setData:i,getData:a};let ee=-1;for(;++ee<C.length;)if(C[ee][1].type==="listOrdered"||C[ee][1].type==="listUnordered")if(C[ee][0]==="enter")en.push(ee);else{const Se=en.pop();ee=o(C,Se,ee)}for(ee=-1;++ee<C.length;){const Se=n[C[ee][0]];Bl.call(Se,C[ee][1].type)&&Se[C[ee][1].type].call(Object.assign({sliceSerialize:C[ee][2].sliceSerialize},hr),C[ee][1])}if(G.length>0){const Se=G[G.length-1];(Se[1]||Hc).call(hr,void 0,Se[0])}for(L.position={start:l(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:l(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},ee=-1;++ee<n.transforms.length;)L=n.transforms[ee](L)||L;return L}function o(C,L,H){let G=L-1,en=-1,hr=!1,ee,Se,Lt,gr;for(;++G<=H;){const ue=C[G];if(ue[1].type==="listUnordered"||ue[1].type==="listOrdered"||ue[1].type==="blockQuote"?(ue[0]==="enter"?en++:en--,gr=void 0):ue[1].type==="lineEndingBlank"?ue[0]==="enter"&&(ee&&!gr&&!en&&!Lt&&(Lt=G),gr=void 0):ue[1].type==="linePrefix"||ue[1].type==="listItemValue"||ue[1].type==="listItemMarker"||ue[1].type==="listItemPrefix"||ue[1].type==="listItemPrefixWhitespace"||(gr=void 0),!en&&ue[0]==="enter"&&ue[1].type==="listItemPrefix"||en===-1&&ue[0]==="exit"&&(ue[1].type==="listUnordered"||ue[1].type==="listOrdered")){if(ee){let Yi=G;for(Se=void 0;Yi--;){const bn=C[Yi];if(bn[1].type==="lineEnding"||bn[1].type==="lineEndingBlank"){if(bn[0]==="exit")continue;Se&&(C[Se][1].type="lineEndingBlank",hr=!0),bn[1].type="lineEnding",Se=Yi}else if(!(bn[1].type==="linePrefix"||bn[1].type==="blockQuotePrefix"||bn[1].type==="blockQuotePrefixWhitespace"||bn[1].type==="blockQuoteMarker"||bn[1].type==="listItemIndent"))break}Lt&&(!Se||Lt<Se)&&(ee._spread=!0),ee.end=Object.assign({},Se?C[Se][1].start:ue[1].end),C.splice(Se||G,0,["exit",ee,ue[2]]),G++,H++}ue[1].type==="listItemPrefix"&&(ee={type:"listItem",_spread:!1,start:Object.assign({},ue[1].start)},C.splice(G,0,["enter",ee,ue[2]]),G++,H++,Lt=void 0,gr=!0)}}return C[L][1]._spread=hr,H}function i(C,L){t[C]=L}function a(C){return t[C]}function l(C){return{line:C.line,column:C.column,offset:C.offset}}function s(C,L){return H;function H(G){c.call(this,C(G),G),L&&L.call(this,G)}}function u(){this.stack.push({type:"fragment",children:[]})}function c(C,L,H){return this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([L,H]),C.position={start:l(L.start)},C}function p(C){return L;function L(H){C&&C.call(this,H),m.call(this,H)}}function m(C,L){const H=this.stack.pop(),G=this.tokenStack.pop();if(G)G[0].type!==C.type&&(L?L.call(this,C,G[0]):(G[1]||Hc).call(this,C,G[0]));else throw new Error("Cannot close `"+C.type+"` ("+Dr({start:C.start,end:C.end})+"): it\u2019s not open");return H.position.end=l(C.end),H}function h(){return q1(this.stack.pop())}function v(){i("expectingFirstListItemValue",!0)}function w(C){if(a("expectingFirstListItemValue")){const L=this.stack[this.stack.length-2];L.start=Number.parseInt(this.sliceSerialize(C),10),i("expectingFirstListItemValue")}}function A(){const C=this.resume(),L=this.stack[this.stack.length-1];L.lang=C}function d(){const C=this.resume(),L=this.stack[this.stack.length-1];L.meta=C}function f(){a("flowCodeInside")||(this.buffer(),i("flowCodeInside",!0))}function g(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),i("flowCodeInside")}function S(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C.replace(/(\r?\n|\r)$/g,"")}function z(C){const L=this.resume(),H=this.stack[this.stack.length-1];H.label=L,H.identifier=Zt(this.sliceSerialize(C)).toLowerCase()}function k(){const C=this.resume(),L=this.stack[this.stack.length-1];L.title=C}function E(){const C=this.resume(),L=this.stack[this.stack.length-1];L.url=C}function O(C){const L=this.stack[this.stack.length-1];if(!L.depth){const H=this.sliceSerialize(C).length;L.depth=H}}function R(){i("setextHeadingSlurpLineEnding",!0)}function M(C){const L=this.stack[this.stack.length-1];L.depth=this.sliceSerialize(C).charCodeAt(0)===61?1:2}function F(){i("setextHeadingSlurpLineEnding")}function q(C){const L=this.stack[this.stack.length-1];let H=L.children[L.children.length-1];(!H||H.type!=="text")&&(H=Ef(),H.position={start:l(C.start)},L.children.push(H)),this.stack.push(H)}function V(C){const L=this.stack.pop();L.value+=this.sliceSerialize(C),L.position.end=l(C.end)}function he(C){const L=this.stack[this.stack.length-1];if(a("atHardBreak")){const H=L.children[L.children.length-1];H.position.end=l(C.end),i("atHardBreak");return}!a("setextHeadingSlurpLineEnding")&&n.canContainEols.includes(L.type)&&(q.call(this,C),V.call(this,C))}function qe(){i("atHardBreak",!0)}function Re(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C}function be(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C}function b(){const C=this.resume(),L=this.stack[this.stack.length-1];L.value=C}function j(){const C=this.stack[this.stack.length-1];a("inReference")?(C.type+="Reference",C.referenceType=a("referenceType")||"shortcut",delete C.url,delete C.title):(delete C.identifier,delete C.label),i("referenceType")}function _(){const C=this.stack[this.stack.length-1];a("inReference")?(C.type+="Reference",C.referenceType=a("referenceType")||"shortcut",delete C.url,delete C.title):(delete C.identifier,delete C.label),i("referenceType")}function y(C){const L=this.stack[this.stack.length-2],H=this.sliceSerialize(C);L.label=b0(H),L.identifier=Zt(H).toLowerCase()}function x(){const C=this.stack[this.stack.length-1],L=this.resume(),H=this.stack[this.stack.length-1];i("inReference",!0),H.type==="link"?H.children=C.children:H.alt=L}function mn(){const C=this.resume(),L=this.stack[this.stack.length-1];L.url=C}function $e(){const C=this.resume(),L=this.stack[this.stack.length-1];L.title=C}function kn(){i("inReference")}function Y(){i("referenceType","collapsed")}function Le(C){const L=this.resume(),H=this.stack[this.stack.length-1];H.label=L,H.identifier=Zt(this.sliceSerialize(C)).toLowerCase(),i("referenceType","full")}function On(C){i("characterReferenceType",C.type)}function Ot(C){const L=this.sliceSerialize(C),H=a("characterReferenceType");let G;H?(G=$m(L,H==="characterReferenceMarkerNumeric"?10:16),i("characterReferenceType")):G=Vs(L);const en=this.stack.pop();en.value+=G,en.position.end=l(C.end)}function bt(C){V.call(this,C);const L=this.stack[this.stack.length-1];L.url=this.sliceSerialize(C)}function Gi(C){V.call(this,C);const L=this.stack[this.stack.length-1];L.url="mailto:"+this.sliceSerialize(C)}function gf(){return{type:"blockquote",children:[]}}function Ks(){return{type:"code",lang:null,meta:null,value:""}}function vf(){return{type:"inlineCode",value:""}}function yf(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function xf(){return{type:"emphasis",children:[]}}function Gs(){return{type:"heading",depth:void 0,children:[]}}function Ys(){return{type:"break"}}function Xs(){return{type:"html",value:""}}function wf(){return{type:"image",title:null,url:"",alt:null}}function Zs(){return{type:"link",title:null,url:"",children:[]}}function eu(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function kf(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function Sf(){return{type:"paragraph",children:[]}}function Cf(){return{type:"strong",children:[]}}function Ef(){return{type:"text",value:""}}function Pf(){return{type:"thematicBreak"}}}function Wm(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?Wm(e,r):_0(e,r)}return e}function _0(e,n){let t;for(t in n)if(Bl.call(n,t)){const r=t==="canContainEols"||t==="transforms",i=(Bl.call(e,t)?e[t]:void 0)||(e[t]=r?[]:{}),a=n[t];a&&(r?e[t]=[...i,...a]:Object.assign(i,a))}}function Hc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Dr({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Dr({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Dr({start:n.start,end:n.end})+") is still open")}function j0(e){Object.assign(this,{Parser:t=>{const r=this.data("settings");return F0(t,Object.assign({},r,e,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}var ye=function(e,n,t){var r={type:String(e)};return t==null&&(typeof n=="string"||Array.isArray(n))?t=n:Object.assign(r,n),Array.isArray(t)?r.children=t:t!=null&&(r.value=String(t)),r};const Ko={}.hasOwnProperty;function q0(e,n){const t=n.data||{};return"value"in n&&!(Ko.call(t,"hName")||Ko.call(t,"hProperties")||Ko.call(t,"hChildren"))?e.augment(n,ye("text",n.value)):e(n,"div",Oe(e,n))}function Jm(e,n,t){const r=n&&n.type;let o;if(!r)throw new Error("Expected node, got `"+n+"`");return Ko.call(e.handlers,r)?o=e.handlers[r]:e.passThrough&&e.passThrough.includes(r)?o=R0:o=e.unknownHandler,(typeof o=="function"?o:q0)(e,n,t)}function R0(e,n){return"children"in n?{...n,children:Oe(e,n)}:n}function Oe(e,n){const t=[];if("children"in n){const r=n.children;let o=-1;for(;++o<r.length;){const i=Jm(e,r[o],n);if(i){if(o&&r[o-1].type==="break"&&(!Array.isArray(i)&&i.type==="text"&&(i.value=i.value.replace(/^\s+/,"")),!Array.isArray(i)&&i.type==="element")){const a=i.children[0];a&&a.type==="text"&&(a.value=a.value.replace(/^\s+/,""))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}const Qm=function(e){if(e==null)return V0;if(typeof e=="string")return B0(e);if(typeof e=="object")return Array.isArray(e)?M0(e):D0(e);if(typeof e=="function")return Mi(e);throw new Error("Expected function, string, or object as test")};function M0(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Qm(e[t]);return Mi(r);function r(...o){let i=-1;for(;++i<n.length;)if(n[i].call(this,...o))return!0;return!1}}function D0(e){return Mi(n);function n(t){let r;for(r in e)if(t[r]!==e[r])return!1;return!0}}function B0(e){return Mi(n);function n(t){return t&&t.type===e}}function Mi(e){return n;function n(...t){return Boolean(e.call(this,...t))}}function V0(){return!0}const U0=!0,H0="skip",$c=!1,$0=function(e,n,t,r){typeof n=="function"&&typeof t!="function"&&(r=t,t=n,n=null);const o=Qm(n),i=r?-1:1;a(e,null,[])();function a(l,s,u){const c=typeof l=="object"&&l!==null?l:{};let p;return typeof c.type=="string"&&(p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0,Object.defineProperty(m,"name",{value:"node ("+(c.type+(p?"<"+p+">":""))+")"})),m;function m(){let h=[],v,w,A;if((!n||o(l,s,u[u.length-1]||null))&&(h=W0(t(l,u)),h[0]===$c))return h;if(l.children&&h[0]!==H0)for(w=(r?l.children.length:-1)+i,A=u.concat(l);w>-1&&w<l.children.length;){if(v=a(l.children[w],w,A)(),v[0]===$c)return v;w=typeof v[1]=="number"?v[1]:w+i}return h}}};function W0(e){return Array.isArray(e)?e:typeof e=="number"?[U0,e]:[e]}const Hs=function(e,n,t,r){typeof n=="function"&&typeof t!="function"&&(r=t,t=n,n=null),$0(e,n,o,r);function o(i,a){const l=a[a.length-1];return t(i,l?l.children.indexOf(i):null,l)}},Km=Ym("start"),Gm=Ym("end");function Ym(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function J0(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}const Wc={}.hasOwnProperty;function Q0(e){const n=Object.create(null);if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return Hs(e,"definition",r=>{const o=Jc(r.identifier);o&&!Wc.call(n,o)&&(n[o]=r)}),t;function t(r){const o=Jc(r);return o&&Wc.call(n,o)?n[o]:null}}function Jc(e){return String(e||"").toUpperCase()}function mr(e){const n=[];let t=-1,r=0,o=0;for(;++t<e.length;){const i=e.charCodeAt(t);let a="";if(i===37&&Ke(e.charCodeAt(t+1))&&Ke(e.charCodeAt(t+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){const l=e.charCodeAt(t+1);i<56320&&l>56319&&l<57344?(a=String.fromCharCode(i,l),o=1):a="\uFFFD"}else a=String.fromCharCode(i);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+o+1,a=""),o&&(t+=o,o=0)}return n.join("")+e.slice(r)}function jn(e,n){const t=[];let r=-1;for(n&&t.push(ye("text",`
`));++r<e.length;)r&&t.push(ye("text",`
`)),t.push(e[r]);return n&&e.length>0&&t.push(ye("text",`
`)),t}function K0(e){let n=-1;const t=[];for(;++n<e.footnoteOrder.length;){const r=e.footnoteById[e.footnoteOrder[n].toUpperCase()];if(!r)continue;const o=Oe(e,r),i=String(r.identifier),a=mr(i.toLowerCase());let l=0;const s=[];for(;++l<=e.footnoteCounts[i];){const p={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+a+(l>1?"-"+l:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"\u21A9"}]};l>1&&p.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(l)}]}),s.length>0&&s.push({type:"text",value:" "}),s.push(p)}const u=o[o.length-1];if(u&&u.type==="element"&&u.tagName==="p"){const p=u.children[u.children.length-1];p&&p.type==="text"?p.value+=" ":u.children.push({type:"text",value:" "}),u.children.push(...s)}else o.push(...s);const c={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+a},children:jn(o,!0)};r.position&&(c.position=r.position),t.push(c)}return t.length===0?null:{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:"footnote-label"},children:[ye("text",e.footnoteLabel)]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:jn(t,!0)},{type:"text",value:`
`}]}}function G0(e,n){return e(n,"blockquote",jn(Oe(e,n),!0))}function Y0(e,n){return[e(n,"br"),ye("text",`
`)]}function X0(e,n){const t=n.value?n.value+`
`:"",r=n.lang&&n.lang.match(/^[^ \t]+(?=[ \t]|$)/),o={};r&&(o.className=["language-"+r]);const i=e(n,"code",o,[ye("text",t)]);return n.meta&&(i.data={meta:n.meta}),e(n.position,"pre",[i])}function Z0(e,n){return e(n,"del",Oe(e,n))}function ex(e,n){return e(n,"em",Oe(e,n))}function Xm(e,n){const t=String(n.identifier),r=mr(t.toLowerCase()),o=e.footnoteOrder.indexOf(t);let i;o===-1?(e.footnoteOrder.push(t),e.footnoteCounts[t]=1,i=e.footnoteOrder.length):(e.footnoteCounts[t]++,i=o+1);const a=e.footnoteCounts[t];return e(n,"sup",[e(n.position,"a",{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:"footnote-label"},[ye("text",String(i))])])}function nx(e,n){const t=e.footnoteById;let r=1;for(;r in t;)r++;const o=String(r);return t[o]={type:"footnoteDefinition",identifier:o,children:[{type:"paragraph",children:n.children}],position:n.position},Xm(e,{type:"footnoteReference",identifier:o,position:n.position})}function tx(e,n){return e(n,"h"+n.depth,Oe(e,n))}function rx(e,n){return e.dangerous?e.augment(n,ye("raw",n.value)):null}function Zm(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return ye("text","!["+n.alt+r);const o=Oe(e,n),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift(ye("text","["));const a=o[o.length-1];return a&&a.type==="text"?a.value+=r:o.push(ye("text",r)),o}function ox(e,n){const t=e.definition(n.identifier);if(!t)return Zm(e,n);const r={src:mr(t.url||""),alt:n.alt};return t.title!==null&&t.title!==void 0&&(r.title=t.title),e(n,"img",r)}function ix(e,n){const t={src:mr(n.url),alt:n.alt};return n.title!==null&&n.title!==void 0&&(t.title=n.title),e(n,"img",t)}function ax(e,n){return e(n,"code",[ye("text",n.value.replace(/\r?\n|\r/g," "))])}function lx(e,n){const t=e.definition(n.identifier);if(!t)return Zm(e,n);const r={href:mr(t.url||"")};return t.title!==null&&t.title!==void 0&&(r.title=t.title),e(n,"a",r,Oe(e,n))}function sx(e,n){const t={href:mr(n.url)};return n.title!==null&&n.title!==void 0&&(t.title=n.title),e(n,"a",t,Oe(e,n))}function ux(e,n,t){const r=Oe(e,n),o=t?cx(t):ef(n),i={},a=[];if(typeof n.checked=="boolean"){let u;r[0]&&r[0].type==="element"&&r[0].tagName==="p"?u=r[0]:(u=e(null,"p",[]),r.unshift(u)),u.children.length>0&&u.children.unshift(ye("text"," ")),u.children.unshift(e(null,"input",{type:"checkbox",checked:n.checked,disabled:!0})),i.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const u=r[l];(o||l!==0||u.type!=="element"||u.tagName!=="p")&&a.push(ye("text",`
`)),u.type==="element"&&u.tagName==="p"&&!o?a.push(...u.children):a.push(u)}const s=r[r.length-1];return s&&(o||!("tagName"in s)||s.tagName!=="p")&&a.push(ye("text",`
`)),e(n,"li",i,a)}function cx(e){let n=e.spread;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=ef(t[r]);return Boolean(n)}function ef(e){const n=e.spread;return n==null?e.children.length>1:n}function dx(e,n){const t={},r=n.ordered?"ol":"ul",o=Oe(e,n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<o.length;){const a=o[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}return e(n,r,t,jn(o,!0))}function px(e,n){return e(n,"p",Oe(e,n))}function mx(e,n){return e.augment(n,ye("root",jn(Oe(e,n))))}function fx(e,n){return e(n,"strong",Oe(e,n))}function hx(e,n){const t=n.children;let r=-1;const o=n.align||[],i=[];for(;++r<t.length;){const a=t[r].children,l=r===0?"th":"td",s=[];let u=-1;const c=n.align?o.length:a.length;for(;++u<c;){const p=a[u];s.push(e(p,l,{align:o[u]},p?Oe(e,p):[]))}i[r]=e(t[r],"tr",jn(s,!0))}return e(n,"table",jn([e(i[0].position,"thead",jn([i[0]],!0))].concat(i[1]?e({start:Km(i[1]),end:Gm(i[i.length-1])},"tbody",jn(i.slice(1),!0)):[]),!0))}const Qc=9,Kc=32;function gx(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),o=0;const i=[];for(;r;)i.push(Gc(n.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=t.exec(n);return i.push(Gc(n.slice(o),o>0,!1)),i.join("")}function Gc(e,n,t){let r=0,o=e.length;if(n){let i=e.codePointAt(r);for(;i===Qc||i===Kc;)r++,i=e.codePointAt(r)}if(t){let i=e.codePointAt(o-1);for(;i===Qc||i===Kc;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function vx(e,n){return e.augment(n,ye("text",gx(String(n.value))))}function yx(e,n){return e(n,"hr")}const xx={blockquote:G0,break:Y0,code:X0,delete:Z0,emphasis:ex,footnoteReference:Xm,footnote:nx,heading:tx,html:rx,imageReference:ox,image:ix,inlineCode:ax,linkReference:lx,link:sx,listItem:ux,list:dx,paragraph:px,root:mx,strong:fx,table:hx,text:vx,thematicBreak:yx,toml:Fo,yaml:Fo,definition:Fo,footnoteDefinition:Fo};function Fo(){return null}const wx={}.hasOwnProperty;function kx(e,n){const t=n||{},r=t.allowDangerousHtml||!1,o={};return a.dangerous=r,a.clobberPrefix=t.clobberPrefix===void 0||t.clobberPrefix===null?"user-content-":t.clobberPrefix,a.footnoteLabel=t.footnoteLabel||"Footnotes",a.footnoteLabelTagName=t.footnoteLabelTagName||"h2",a.footnoteLabelProperties=t.footnoteLabelProperties||{className:["sr-only"]},a.footnoteBackLabel=t.footnoteBackLabel||"Back to content",a.definition=Q0(e),a.footnoteById=o,a.footnoteOrder=[],a.footnoteCounts={},a.augment=i,a.handlers={...xx,...t.handlers},a.unknownHandler=t.unknownHandler,a.passThrough=t.passThrough,Hs(e,"footnoteDefinition",l=>{const s=String(l.identifier).toUpperCase();wx.call(o,s)||(o[s]=l)}),a;function i(l,s){if(l&&"data"in l&&l.data){const u=l.data;u.hName&&(s.type!=="element"&&(s={type:"element",tagName:"",properties:{},children:[]}),s.tagName=u.hName),s.type==="element"&&u.hProperties&&(s.properties={...s.properties,...u.hProperties}),"children"in s&&s.children&&u.hChildren&&(s.children=u.hChildren)}if(l){const u="type"in l?l:{position:l};J0(u)||(s.position={start:Km(u),end:Gm(u)})}return s}function a(l,s,u,c){return Array.isArray(u)&&(c=u,u={}),i(l,{type:"element",tagName:s,properties:u||{},children:c||[]})}}function nf(e,n){const t=kx(e,n),r=Jm(t,e,null),o=K0(t);return o&&r.children.push(ye("text",`
`),o),Array.isArray(r)?{type:"root",children:r}:r}const Sx=function(e,n){return e&&"run"in e?Ex(e,n):Px(e||n)},Cx=Sx;function Ex(e,n){return(t,r,o)=>{e.run(nf(t,n),r,i=>{o(i)})}}function Px(e){return n=>nf(n,e)}var D={exports:{}},zx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ax=zx,Nx=Ax;function tf(){}function rf(){}rf.resetWarningCache=tf;var Tx=function(){function e(r,o,i,a,l,s){if(s!==Nx){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:rf,resetWarningCache:tf};return t.PropTypes=t,t};D.exports=Tx();class ho{constructor(n,t,r){this.property=n,this.normal=t,r&&(this.space=r)}}ho.prototype.property={};ho.prototype.normal={};ho.prototype.space=null;function of(e,n){const t={},r={};let o=-1;for(;++o<e.length;)Object.assign(t,e[o].property),Object.assign(r,e[o].normal);return new ho(t,r,n)}function Vl(e){return e.toLowerCase()}class dn{constructor(n,t){this.property=n,this.attribute=t}}dn.prototype.space=null;dn.prototype.boolean=!1;dn.prototype.booleanish=!1;dn.prototype.overloadedBoolean=!1;dn.prototype.number=!1;dn.prototype.commaSeparated=!1;dn.prototype.spaceSeparated=!1;dn.prototype.commaOrSpaceSeparated=!1;dn.prototype.mustUseProperty=!1;dn.prototype.defined=!1;let Ox=0;const $=Tt(),pe=Tt(),af=Tt(),T=Tt(),te=Tt(),er=Tt(),We=Tt();function Tt(){return 2**++Ox}const Ul=Object.freeze(Object.defineProperty({__proto__:null,boolean:$,booleanish:pe,overloadedBoolean:af,number:T,spaceSeparated:te,commaSeparated:er,commaOrSpaceSeparated:We},Symbol.toStringTag,{value:"Module"})),Ia=Object.keys(Ul);class $s extends dn{constructor(n,t,r,o){let i=-1;if(super(n,t),Yc(this,"space",o),typeof r=="number")for(;++i<Ia.length;){const a=Ia[i];Yc(this,Ia[i],(r&Ul[a])===Ul[a])}}}$s.prototype.defined=!0;function Yc(e,n,t){t&&(e[n]=t)}const bx={}.hasOwnProperty;function fr(e){const n={},t={};let r;for(r in e.properties)if(bx.call(e.properties,r)){const o=e.properties[r],i=new $s(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),n[r]=i,t[Vl(r)]=r,t[Vl(i.attribute)]=r}return new ho(n,t,e.space)}const lf=fr({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),sf=fr({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function uf(e,n){return n in e?e[n]:n}function cf(e,n){return uf(e,n.toLowerCase())}const df=fr({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:cf,properties:{xmlns:null,xmlnsXLink:null}}),pf=fr({transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:pe,ariaAutoComplete:null,ariaBusy:pe,ariaChecked:pe,ariaColCount:T,ariaColIndex:T,ariaColSpan:T,ariaControls:te,ariaCurrent:null,ariaDescribedBy:te,ariaDetails:null,ariaDisabled:pe,ariaDropEffect:te,ariaErrorMessage:null,ariaExpanded:pe,ariaFlowTo:te,ariaGrabbed:pe,ariaHasPopup:null,ariaHidden:pe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:te,ariaLevel:T,ariaLive:null,ariaModal:pe,ariaMultiLine:pe,ariaMultiSelectable:pe,ariaOrientation:null,ariaOwns:te,ariaPlaceholder:null,ariaPosInSet:T,ariaPressed:pe,ariaReadOnly:pe,ariaRelevant:null,ariaRequired:pe,ariaRoleDescription:te,ariaRowCount:T,ariaRowIndex:T,ariaRowSpan:T,ariaSelected:pe,ariaSetSize:T,ariaSort:null,ariaValueMax:T,ariaValueMin:T,ariaValueNow:T,ariaValueText:null,role:null}}),Lx=fr({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:cf,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:er,acceptCharset:te,accessKey:te,action:null,allow:null,allowFullScreen:$,allowPaymentRequest:$,allowUserMedia:$,alt:null,as:null,async:$,autoCapitalize:null,autoComplete:te,autoFocus:$,autoPlay:$,capture:$,charSet:null,checked:$,cite:null,className:te,cols:T,colSpan:null,content:null,contentEditable:pe,controls:$,controlsList:te,coords:T|er,crossOrigin:null,data:null,dateTime:null,decoding:null,default:$,defer:$,dir:null,dirName:null,disabled:$,download:af,draggable:pe,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:$,formTarget:null,headers:te,height:T,hidden:$,high:T,href:null,hrefLang:null,htmlFor:te,httpEquiv:te,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:$,itemId:null,itemProp:te,itemRef:te,itemScope:$,itemType:te,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:$,low:T,manifest:null,max:null,maxLength:T,media:null,method:null,min:null,minLength:T,multiple:$,muted:$,name:null,nonce:null,noModule:$,noValidate:$,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:$,optimum:T,pattern:null,ping:te,placeholder:null,playsInline:$,poster:null,preload:null,readOnly:$,referrerPolicy:null,rel:te,required:$,reversed:$,rows:T,rowSpan:T,sandbox:te,scope:null,scoped:$,seamless:$,selected:$,shape:null,size:T,sizes:null,slot:null,span:T,spellCheck:pe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:T,step:null,style:null,tabIndex:T,target:null,title:null,translate:null,type:null,typeMustMatch:$,useMap:null,value:pe,width:T,wrap:null,align:null,aLink:null,archive:te,axis:null,background:null,bgColor:null,border:T,borderColor:null,bottomMargin:T,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:$,declare:$,event:null,face:null,frame:null,frameBorder:null,hSpace:T,leftMargin:T,link:null,longDesc:null,lowSrc:null,marginHeight:T,marginWidth:T,noResize:$,noHref:$,noShade:$,noWrap:$,object:null,profile:null,prompt:null,rev:null,rightMargin:T,rules:null,scheme:null,scrolling:pe,standby:null,summary:null,text:null,topMargin:T,valueType:null,version:null,vAlign:null,vLink:null,vSpace:T,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:$,disableRemotePlayback:$,prefix:null,property:null,results:T,security:null,unselectable:null}}),Fx=fr({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:uf,properties:{about:We,accentHeight:T,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:T,amplitude:T,arabicForm:null,ascent:T,attributeName:null,attributeType:null,azimuth:T,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:T,by:null,calcMode:null,capHeight:T,className:te,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:T,diffuseConstant:T,direction:null,display:null,dur:null,divisor:T,dominantBaseline:null,download:$,dx:null,dy:null,edgeMode:null,editable:null,elevation:T,enableBackground:null,end:null,event:null,exponent:T,externalResourcesRequired:null,fill:null,fillOpacity:T,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:er,g2:er,glyphName:er,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:T,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:T,horizOriginX:T,horizOriginY:T,id:null,ideographic:T,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:T,k:T,k1:T,k2:T,k3:T,k4:T,kernelMatrix:We,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:T,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:T,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:T,overlineThickness:T,paintOrder:null,panose1:null,path:null,pathLength:T,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:te,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:T,pointsAtY:T,pointsAtZ:T,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:We,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:We,rev:We,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:We,requiredFeatures:We,requiredFonts:We,requiredFormats:We,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:T,specularExponent:T,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:T,strikethroughThickness:T,string:null,stroke:null,strokeDashArray:We,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:T,strokeOpacity:T,strokeWidth:null,style:null,surfaceScale:T,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:We,tabIndex:T,tableValues:null,target:null,targetX:T,targetY:T,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:We,to:null,transform:null,u1:null,u2:null,underlinePosition:T,underlineThickness:T,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:T,values:null,vAlphabetic:T,vMathematical:T,vectorEffect:null,vHanging:T,vIdeographic:T,version:null,vertAdvY:T,vertOriginX:T,vertOriginY:T,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:T,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Ix=/^data[-\w.:]+$/i,Xc=/-[a-z]/g,_x=/[A-Z]/g;function jx(e,n){const t=Vl(n);let r=n,o=dn;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Ix.test(n)){if(n.charAt(4)==="-"){const i=n.slice(5).replace(Xc,Rx);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=n.slice(4);if(!Xc.test(i)){let a=i.replace(_x,qx);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}o=$s}return new o(r,n)}function qx(e){return"-"+e.toLowerCase()}function Rx(e){return e.charAt(1).toUpperCase()}const Zc={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Mx=of([sf,lf,df,pf,Lx],"html"),Dx=of([sf,lf,df,pf,Fx],"svg");function Bx(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return n=>{Hs(n,"element",(t,r,o)=>{const i=o;let a;if(e.allowedElements?a=!e.allowedElements.includes(t.tagName):e.disallowedElements&&(a=e.disallowedElements.includes(t.tagName)),!a&&e.allowElement&&typeof r=="number"&&(a=!e.allowElement(t,r,i)),a&&typeof r=="number")return e.unwrapDisallowed&&t.children?i.children.splice(r,1,...t.children):i.children.splice(r,1),r})}}var mf={exports:{}},K={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Symbol.for("react.element"),Js=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Bi=Symbol.for("react.strict_mode"),Vi=Symbol.for("react.profiler"),Ui=Symbol.for("react.provider"),Hi=Symbol.for("react.context"),Vx=Symbol.for("react.server_context"),$i=Symbol.for("react.forward_ref"),Wi=Symbol.for("react.suspense"),Ji=Symbol.for("react.suspense_list"),Qi=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),Ux=Symbol.for("react.offscreen"),ff;ff=Symbol.for("react.module.reference");function pn(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case Ws:switch(e=e.type,e){case Di:case Vi:case Bi:case Wi:case Ji:return e;default:switch(e=e&&e.$$typeof,e){case Vx:case Hi:case $i:case Ki:case Qi:case Ui:return e;default:return n}}case Js:return n}}}K.ContextConsumer=Hi;K.ContextProvider=Ui;K.Element=Ws;K.ForwardRef=$i;K.Fragment=Di;K.Lazy=Ki;K.Memo=Qi;K.Portal=Js;K.Profiler=Vi;K.StrictMode=Bi;K.Suspense=Wi;K.SuspenseList=Ji;K.isAsyncMode=function(){return!1};K.isConcurrentMode=function(){return!1};K.isContextConsumer=function(e){return pn(e)===Hi};K.isContextProvider=function(e){return pn(e)===Ui};K.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ws};K.isForwardRef=function(e){return pn(e)===$i};K.isFragment=function(e){return pn(e)===Di};K.isLazy=function(e){return pn(e)===Ki};K.isMemo=function(e){return pn(e)===Qi};K.isPortal=function(e){return pn(e)===Js};K.isProfiler=function(e){return pn(e)===Vi};K.isStrictMode=function(e){return pn(e)===Bi};K.isSuspense=function(e){return pn(e)===Wi};K.isSuspenseList=function(e){return pn(e)===Ji};K.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Di||e===Vi||e===Bi||e===Wi||e===Ji||e===Ux||typeof e=="object"&&e!==null&&(e.$$typeof===Ki||e.$$typeof===Qi||e.$$typeof===Ui||e.$$typeof===Hi||e.$$typeof===$i||e.$$typeof===ff||e.getModuleId!==void 0)};K.typeOf=pn;(function(e){e.exports=K})(mf);const Hx=id(mf.exports);function $x(e){var n=e&&typeof e=="object"&&e.type==="text"?e.value||"":e;return typeof n=="string"&&n.replace(/[ \t\n\f\r]/g,"")===""}function Wx(e){return e.join(" ").trim()}function Jx(e,n){const t=n||{};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}var ed=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Qx=/\n/g,Kx=/^\s*/,Gx=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Yx=/^:\s*/,Xx=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Zx=/^[;\s]*/,ew=/^\s+|\s+$/g,nw=`
`,nd="/",td="*",ht="",tw="comment",rw="declaration",ow=function(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function o(v){var w=v.match(Qx);w&&(t+=w.length);var A=v.lastIndexOf(nw);r=~A?v.length-A:r+v.length}function i(){var v={line:t,column:r};return function(w){return w.position=new a(v),u(),w}}function a(v){this.start=v,this.end={line:t,column:r},this.source=n.source}a.prototype.content=e;function l(v){var w=new Error(n.source+":"+t+":"+r+": "+v);if(w.reason=v,w.filename=n.source,w.line=t,w.column=r,w.source=e,!n.silent)throw w}function s(v){var w=v.exec(e);if(!!w){var A=w[0];return o(A),e=e.slice(A.length),w}}function u(){s(Kx)}function c(v){var w;for(v=v||[];w=p();)w!==!1&&v.push(w);return v}function p(){var v=i();if(!(nd!=e.charAt(0)||td!=e.charAt(1))){for(var w=2;ht!=e.charAt(w)&&(td!=e.charAt(w)||nd!=e.charAt(w+1));)++w;if(w+=2,ht===e.charAt(w-1))return l("End of comment missing");var A=e.slice(2,w-2);return r+=2,o(A),e=e.slice(w),r+=2,v({type:tw,comment:A})}}function m(){var v=i(),w=s(Gx);if(!!w){if(p(),!s(Yx))return l("property missing ':'");var A=s(Xx),d=v({type:rw,property:rd(w[0].replace(ed,ht)),value:A?rd(A[0].replace(ed,ht)):ht});return s(Zx),d}}function h(){var v=[];c(v);for(var w;w=m();)w!==!1&&(v.push(w),c(v));return v}return u(),h()};function rd(e){return e?e.replace(ew,ht):ht}var iw=ow;function aw(e,n){var t=null;if(!e||typeof e!="string")return t;for(var r,o=iw(e),i=typeof n=="function",a,l,s=0,u=o.length;s<u;s++)r=o[s],a=r.property,l=r.value,i?n(a,l,r):l&&(t||(t={}),t[a]=l);return t}var lw=aw;const Hl={}.hasOwnProperty,sw=new Set(["table","thead","tbody","tfoot","tr"]);function hf(e,n){const t=[];let r=-1,o;for(;++r<n.children.length;)o=n.children[r],o.type==="element"?t.push(uw(e,o,r,n)):o.type==="text"?(n.type!=="element"||!sw.has(n.tagName)||!$x(o))&&t.push(o.value):o.type==="raw"&&!e.options.skipHtml&&t.push(o.value);return t}function uw(e,n,t,r){const o=e.options,i=e.schema,a=n.tagName,l={};let s=i,u;if(i.space==="html"&&a==="svg"&&(s=Dx,e.schema=s),n.properties)for(u in n.properties)Hl.call(n.properties,u)&&dw(l,u,n.properties[u],e);(a==="ol"||a==="ul")&&e.listDepth++;const c=hf(e,n);(a==="ol"||a==="ul")&&e.listDepth--,e.schema=i;const p=n.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},m=o.components&&Hl.call(o.components,a)?o.components[a]:a,h=typeof m=="string"||m===Or.Fragment;if(!Hx.isValidElementType(m))throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);if(l.key=[a,p.start.line,p.start.column,t].join("-"),a==="a"&&o.linkTarget&&(l.target=typeof o.linkTarget=="function"?o.linkTarget(String(l.href||""),n.children,typeof l.title=="string"?l.title:null):o.linkTarget),a==="a"&&o.transformLinkUri&&(l.href=o.transformLinkUri(String(l.href||""),n.children,typeof l.title=="string"?l.title:null)),!h&&a==="code"&&r.type==="element"&&r.tagName!=="pre"&&(l.inline=!0),!h&&(a==="h1"||a==="h2"||a==="h3"||a==="h4"||a==="h5"||a==="h6")&&(l.level=Number.parseInt(a.charAt(1),10)),a==="img"&&o.transformImageUri&&(l.src=o.transformImageUri(String(l.src||""),String(l.alt||""),typeof l.title=="string"?l.title:null)),!h&&a==="li"&&r.type==="element"){const v=cw(n);l.checked=v&&v.properties?Boolean(v.properties.checked):null,l.index=_a(r,n),l.ordered=r.tagName==="ol"}return!h&&(a==="ol"||a==="ul")&&(l.ordered=a==="ol",l.depth=e.listDepth),(a==="td"||a==="th")&&(l.align&&(l.style||(l.style={}),l.style.textAlign=l.align,delete l.align),h||(l.isHeader=a==="th")),!h&&a==="tr"&&r.type==="element"&&(l.isHeader=Boolean(r.tagName==="thead")),o.sourcePos&&(l["data-sourcepos"]=fw(p)),!h&&o.rawSourcePos&&(l.sourcePosition=n.position),!h&&o.includeElementIndex&&(l.index=_a(r,n),l.siblingCount=_a(r)),h||(l.node=n),c.length>0?Or.createElement(m,l,c):Or.createElement(m,l)}function cw(e){let n=-1;for(;++n<e.children.length;){const t=e.children[n];if(t.type==="element"&&t.tagName==="input")return t}return null}function _a(e,n){let t=-1,r=0;for(;++t<e.children.length&&e.children[t]!==n;)e.children[t].type==="element"&&r++;return r}function dw(e,n,t,r){const o=jx(r.schema,n);let i=t;i==null||i!==i||(Array.isArray(i)&&(i=o.commaSeparated?Jx(i):Wx(i)),o.property==="style"&&typeof i=="string"&&(i=pw(i)),o.space&&o.property?e[Hl.call(Zc,o.property)?Zc[o.property]:o.property]=i:o.attribute&&(e[o.attribute]=i))}function pw(e){const n={};try{lw(e,t)}catch{}return n;function t(r,o){const i=r.slice(0,4)==="-ms-"?`ms-${r.slice(4)}`:r;n[i.replace(/-([a-z])/g,mw)]=o}}function mw(e,n){return n.toUpperCase()}function fw(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(String).join("")}const od={}.hasOwnProperty,hw="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Io={plugins:{to:"plugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function Qs(e){for(const i in Io)if(od.call(Io,i)&&od.call(e,i)){const a=Io[i];console.warn(`[react-markdown] Warning: please ${a.to?`use \`${a.to}\` instead of`:"remove"} \`${i}\` (see <${hw}#${a.id}> for more info)`),delete Io[i]}const n=F1().use(j0).use(e.remarkPlugins||[]).use(Cx,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(Bx,e),t=new bm;typeof e.children=="string"?t.value=e.children:e.children!==void 0&&e.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);const r=n.runSync(n.parse(t),t);if(r.type!=="root")throw new TypeError("Expected a `root` node");let o=P(gm,{children:hf({options:e,schema:Mx,listDepth:0},r)});return e.className&&(o=P("div",{className:e.className,children:o})),o}Qs.defaultProps={transformLinkUri:w1};Qs.propTypes={children:D.exports.string,className:D.exports.string,allowElement:D.exports.func,allowedElements:D.exports.arrayOf(D.exports.string),disallowedElements:D.exports.arrayOf(D.exports.string),unwrapDisallowed:D.exports.bool,remarkPlugins:D.exports.arrayOf(D.exports.oneOfType([D.exports.object,D.exports.func,D.exports.arrayOf(D.exports.oneOfType([D.exports.bool,D.exports.string,D.exports.object,D.exports.func,D.exports.arrayOf(D.exports.any)]))])),rehypePlugins:D.exports.arrayOf(D.exports.oneOfType([D.exports.object,D.exports.func,D.exports.arrayOf(D.exports.oneOfType([D.exports.bool,D.exports.string,D.exports.object,D.exports.func,D.exports.arrayOf(D.exports.any)]))])),sourcePos:D.exports.bool,rawSourcePos:D.exports.bool,skipHtml:D.exports.bool,includeElementIndex:D.exports.bool,transformLinkUri:D.exports.oneOfType([D.exports.func,D.exports.bool]),linkTarget:D.exports.oneOfType([D.exports.func,D.exports.string]),transformImageUri:D.exports.func,components:D.exports.object};function gw(){const e=Vv(),n=Il.find(r=>r.id===Number(e.id));if(!n)return P(Tm,{});const t=Il.filter(r=>r.id!==Number(e.id)).sort((r,o)=>o.id-r.id).slice(0,4);return P(zm,{children:de(Am,{title:n.titulo,titleColor:"lg:group-hover:text-white",banner:x1,position:"object-[0px_-20px] md:object-[0px_-60px] lg:object-[0px_-205px]",children:[P(dt,{className:"imgCenter prose my-8 max-w-none px-0 prose-headings:text-azulDark prose-a:text-azulDark hover:prose-a:text-azulLight md:prose-lg lg:my-20 lg:prose-xl",children:P(Qs,{children:n.texto})}),P("h2",{className:"mb-8 font-playfair text-2xl font-bold md:text-4xl lg:text-5xl",children:"Outros posts que voc\xEA pode gostar:"}),P("ul",{className:"my-12 flex flex-wrap justify-between gap-8 ",children:t.map(r=>P("li",{className:"w-full overflow-hidden rounded-xl shadow-2xl duration-500 ease-in-out md:w-[47%] lg:w-[23%] lg:hover:-translate-y-4",children:P(Nm,{post:r})},r.id))})]})})}function vw(){return de(r1,{children:[P(d1,{}),P(c1,{}),de(Xv,{children:[de(It,{path:"/",element:P(zm,{}),children:[P(It,{index:!0,element:P(v1,{})}),P(It,{path:"sobre-mim",element:P(g1,{})})]}),P(It,{path:"posts/:id/*",element:P(gw,{})}),P(It,{path:"*",element:P(Tm,{})})]}),P(l1,{backgroundColor:"bg-azulDark",textColor:"text-white",iconColor:"fill-white",hoverIconColor:"group-hover:lg:fill-azulLight"})]})}qa.createRoot(document.getElementById("root")).render(P(Or.StrictMode,{children:P(vw,{})}));
