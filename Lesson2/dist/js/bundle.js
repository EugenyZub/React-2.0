!function(s){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return s[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=s,r.c=n,r.d=function(e,o,s){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(o,e){if(1&e&&(o=r(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)r.d(s,n,function(e){return o[e]}.bind(null,n));return s},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s="./src/js/index.js")}({"./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("unscopables"),r=Array.prototype;null==r[n]&&s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js")(r,n,{}),e.exports=function(e){r[n][e]=!0}},"./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,s){var l=s(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),c=s(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),i=s(/*! ./_to-absolute-index */"./node_modules/core-js/modules/_to-absolute-index.js");e.exports=function(d){return function(e,o,s){var n,r=l(e),t=c(r.length),u=i(s,t);if(d&&o!=o){for(;u<t;)if((n=r[u++])!=n)return!0}else for(;u<t;u++)if((d||u in r)&&r[u]===o)return d||u||0;return!d&&-1}}},"./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var s={}.toString;e.exports=function(e){return s.call(e).slice(8,-1)}},"./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */function(e,o){var s=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=s)},"./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */function(e,o,s){var t=s(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js");e.exports=function(n,r,e){if(t(n),void 0===r)return n;switch(e){case 1:return function(e){return n.call(r,e)};case 2:return function(e,o){return n.call(r,e,o)};case 3:return function(e,o,s){return n.call(r,e,o,s)}}return function(){return n.apply(r,arguments)}}},"./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},"./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,s){e.exports=!s(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),r=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").document,t=n(r)&&n(r.createElement);e.exports=function(e){return t?r.createElement(e):{}}},"./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */function(e,o){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var d=s(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js"),l=s(/*! ./_object-gops */"./node_modules/core-js/modules/_object-gops.js"),c=s(/*! ./_object-pie */"./node_modules/core-js/modules/_object-pie.js");e.exports=function(e){var o=d(e),s=l.f;if(s)for(var n,r=s(e),t=c.f,u=0;r.length>u;)t.call(e,n=r[u++])&&o.push(n);return o}},"./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,s){var f=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),p=s(/*! ./_core */"./node_modules/core-js/modules/_core.js"),y=s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),b=s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),h=s(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),v="prototype",g=function(e,o,s){var n,r,t,u,d=e&g.F,l=e&g.G,c=e&g.S,i=e&g.P,m=e&g.B,j=l?f:c?f[o]||(f[o]={}):(f[o]||{})[v],a=l?p:p[o]||(p[o]={}),_=a[v]||(a[v]={});for(n in l&&(s=o),s)t=((r=!d&&j&&void 0!==j[n])?j:s)[n],u=m&&r?h(t,f):i&&"function"==typeof t?h(Function.call,t):t,j&&b(j,n,t,e&g.U),a[n]!=t&&y(a,n,u),i&&_[n]!=t&&(_[n]=t)};f.core=p,g.F=1,g.G=2,g.S=4,g.P=8,g.B=16,g.W=32,g.U=64,g.R=128,e.exports=g},"./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,s){e.exports=s(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("native-function-to-string",Function.toString)},"./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */function(e,o){var s=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},"./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var s={}.hasOwnProperty;e.exports=function(e,o){return s.call(e,o)}},"./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),r=s(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js");e.exports=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?function(e,o,s){return n.f(e,o,r(1,s))}:function(e,o,s){return e[o]=s,e}},"./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").document;e.exports=n&&n.documentElement},"./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,s){e.exports=!s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&!s(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty(s(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_cof */"./node_modules/core-js/modules/_cof.js");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},"./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_cof */"./node_modules/core-js/modules/_cof.js");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,s){"use strict";var n=s(/*! ./_object-create */"./node_modules/core-js/modules/_object-create.js"),r=s(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js"),t=s(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js"),u={};s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js")(u,s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),function(){return this}),e.exports=function(e,o,s){e.prototype=n(u,{next:r(1,s)}),t(e,o+" Iterator")}},"./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,s){"use strict";function h(){return this}var v=s(/*! ./_library */"./node_modules/core-js/modules/_library.js"),g=s(/*! ./_export */"./node_modules/core-js/modules/_export.js"),x=s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),w=s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),S=s(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),O=s(/*! ./_iter-create */"./node_modules/core-js/modules/_iter-create.js"),k=s(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js"),P=s(/*! ./_object-gpo */"./node_modules/core-js/modules/_object-gpo.js"),E=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),T=!([].keys&&"next"in[].keys()),L="values";e.exports=function(e,o,s,n,r,t,u){O(s,o,n);function d(e){if(!T&&e in _)return _[e];switch(e){case"keys":case L:return function(){return new s(this,e)}}return function(){return new s(this,e)}}var l,c,i,m=o+" Iterator",j=r==L,a=!1,_=e.prototype,f=_[E]||_["@@iterator"]||r&&_[r],p=f||d(r),y=r?j?d("entries"):p:void 0,b="Array"==o&&_.entries||f;if(b&&(i=P(b.call(new e)))!==Object.prototype&&i.next&&(k(i,m,!0),v||"function"==typeof i[E]||w(i,E,h)),j&&f&&f.name!==L&&(a=!0,p=function(){return f.call(this)}),v&&!u||!T&&!a&&_[E]||w(_,E,p),S[o]=p,S[m]=h,r)if(l={values:j?p:d(L),keys:t?p:d("keys"),entries:y},u)for(c in l)c in _||x(_,c,l[c]);else g(g.P+g.F*(T||a),o,l);return l}},"./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){return{value:o,done:!!e}}},"./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports={}},"./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */function(e,o){e.exports=!1},"./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,s){function n(e){d(e,r,{value:{i:"O"+ ++l,w:{}}})}var r=s(/*! ./_uid */"./node_modules/core-js/modules/_uid.js")("meta"),t=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),u=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),d=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,l=0,c=Object.isExtensible||function(){return!0},i=!s(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return c(Object.preventExtensions({}))}),m=e.exports={KEY:r,NEED:!1,fastKey:function(e,o){if(!t(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!u(e,r)){if(!c(e))return"F";if(!o)return"E";n(e)}return e[r].i},getWeak:function(e,o){if(!u(e,r)){if(!c(e))return!0;if(!o)return!1;n(e)}return e[r].w},onFreeze:function(e){return i&&m.NEED&&c(e)&&!u(e,r)&&n(e),e}}},"./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,n){function r(){}var t=n(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),u=n(/*! ./_object-dps */"./node_modules/core-js/modules/_object-dps.js"),d=n(/*! ./_enum-bug-keys */"./node_modules/core-js/modules/_enum-bug-keys.js"),l=n(/*! ./_shared-key */"./node_modules/core-js/modules/_shared-key.js")("IE_PROTO"),c="prototype",i=function(){var e,o=n(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js")("iframe"),s=d.length;for(o.style.display="none",n(/*! ./_html */"./node_modules/core-js/modules/_html.js").appendChild(o),o.src="javascript:",(e=o.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),i=e.F;s--;)delete i[c][d[s]];return i()};e.exports=Object.create||function(e,o){var s;return null!==e?(r[c]=t(e),s=new r,r[c]=null,s[l]=e):s=i(),void 0===o?s:u(s,o)}},"./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s(/*! ./_ie8-dom-define */"./node_modules/core-js/modules/_ie8-dom-define.js"),t=s(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),u=Object.defineProperty;o.f=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?Object.defineProperty:function(e,o,s){if(n(e),o=t(o,!0),n(s),r)try{return u(e,o,s)}catch(e){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(e[o]=s.value),e}},"./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,s){var u=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),d=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),l=s(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js");e.exports=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?Object.defineProperties:function(e,o){d(e);for(var s,n=l(o),r=n.length,t=0;t<r;)u.f(e,s=n[t++],o[s]);return e}},"./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_object-pie */"./node_modules/core-js/modules/_object-pie.js"),r=s(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js"),t=s(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),u=s(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),d=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),l=s(/*! ./_ie8-dom-define */"./node_modules/core-js/modules/_ie8-dom-define.js"),c=Object.getOwnPropertyDescriptor;o.f=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?c:function(e,o){if(e=t(e),o=u(o,!0),l)try{return c(e,o)}catch(e){}if(d(e,o))return r(!n.f.call(e,o),e[o])}},"./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),r=s(/*! ./_object-gopn */"./node_modules/core-js/modules/_object-gopn.js").f,t={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return u&&"[object Window]"==t.call(e)?function(e){try{return r(e)}catch(e){return u.slice()}}(e):r(n(e))}},"./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_object-keys-internal */"./node_modules/core-js/modules/_object-keys-internal.js"),r=s(/*! ./_enum-bug-keys */"./node_modules/core-js/modules/_enum-bug-keys.js").concat("length","prototype");o.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},"./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){o.f=Object.getOwnPropertySymbols},"./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),r=s(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),t=s(/*! ./_shared-key */"./node_modules/core-js/modules/_shared-key.js")("IE_PROTO"),u=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),n(e,t)?e[t]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},"./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */function(e,o,s){var u=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),d=s(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),l=s(/*! ./_array-includes */"./node_modules/core-js/modules/_array-includes.js")(!1),c=s(/*! ./_shared-key */"./node_modules/core-js/modules/_shared-key.js")("IE_PROTO");e.exports=function(e,o){var s,n=d(e),r=0,t=[];for(s in n)s!=c&&u(n,s)&&t.push(s);for(;o.length>r;)u(n,s=o[r++])&&(~l(t,s)||t.push(s));return t}},"./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_object-keys-internal */"./node_modules/core-js/modules/_object-keys-internal.js"),r=s(/*! ./_enum-bug-keys */"./node_modules/core-js/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return n(e,r)}},"./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){o.f={}.propertyIsEnumerable},"./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,s){var t=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),u=s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),d=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),l=s(/*! ./_uid */"./node_modules/core-js/modules/_uid.js")("src"),n=s(/*! ./_function-to-string */"./node_modules/core-js/modules/_function-to-string.js"),r="toString",c=(""+n).split(r);s(/*! ./_core */"./node_modules/core-js/modules/_core.js").inspectSource=function(e){return n.call(e)},(e.exports=function(e,o,s,n){var r="function"==typeof s;r&&(d(s,"name")||u(s,"name",o)),e[o]!==s&&(r&&(d(s,l)||u(s,l,e[o]?""+e[o]:c.join(String(o)))),e===t?e[o]=s:n?e[o]?e[o]=s:u(e,o,s):(delete e[o],u(e,o,s)))})(Function.prototype,r,function(){return"function"==typeof this&&this[l]||n.call(this)})},"./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,r=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),t=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag");e.exports=function(e,o,s){e&&!r(e=s?e:e.prototype,t)&&n(e,t,{configurable:!0,value:o})}},"./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("keys"),r=s(/*! ./_uid */"./node_modules/core-js/modules/_uid.js");e.exports=function(e){return n[e]||(n[e]=r(e))}},"./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_core */"./node_modules/core-js/modules/_core.js"),r=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),t="__core-js_shared__",u=r[t]||(r[t]={});(e.exports=function(e,o){return u[e]||(u[e]=void 0!==o?o:{})})("versions",[]).push({version:n.version,mode:s(/*! ./_library */"./node_modules/core-js/modules/_library.js")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),r=Math.max,t=Math.min;e.exports=function(e,o){return(e=n(e))<0?r(e+o,0):t(e,o)}},"./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){var s=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?n:s)(e)}},"./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_iobject */"./node_modules/core-js/modules/_iobject.js"),r=s(/*! ./_defined */"./node_modules/core-js/modules/_defined.js");e.exports=function(e){return n(r(e))}},"./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),r=Math.min;e.exports=function(e){return 0<e?r(n(e),9007199254740991):0}},"./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_defined */"./node_modules/core-js/modules/_defined.js");e.exports=function(e){return Object(n(e))}},"./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,s){var r=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e,o){if(!r(e))return e;var s,n;if(o&&"function"==typeof(s=e.toString)&&!r(n=s.call(e)))return n;if("function"==typeof(s=e.valueOf)&&!r(n=s.call(e)))return n;if(!o&&"function"==typeof(s=e.toString)&&!r(n=s.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var s=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++s+n).toString(36))}},"./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),r=s(/*! ./_core */"./node_modules/core-js/modules/_core.js"),t=s(/*! ./_library */"./node_modules/core-js/modules/_library.js"),u=s(/*! ./_wks-ext */"./node_modules/core-js/modules/_wks-ext.js"),d=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f;e.exports=function(e){var o=r.Symbol||(r.Symbol=t?{}:n.Symbol||{});"_"==e.charAt(0)||e in o||d(o,e,{value:u.f(e)})}},"./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,s){o.f=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")},"./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("wks"),r=s(/*! ./_uid */"./node_modules/core-js/modules/_uid.js"),t=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").Symbol,u="function"==typeof t;(e.exports=function(e){return n[e]||(n[e]=u&&t[e]||(u?t:r)("Symbol."+e))}).store=n},"./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,s){"use strict";var n=s(/*! ./_add-to-unscopables */"./node_modules/core-js/modules/_add-to-unscopables.js"),r=s(/*! ./_iter-step */"./node_modules/core-js/modules/_iter-step.js"),t=s(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),u=s(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js");e.exports=s(/*! ./_iter-define */"./node_modules/core-js/modules/_iter-define.js")(Array,"Array",function(e,o){this._t=u(e),this._i=0,this._k=o},function(){var e=this._t,o=this._k,s=this._i++;return!e||s>=e.length?(this._t=void 0,r(1)):r(0,"keys"==o?s:"values"==o?e[s]:[s,e[s]])},"values"),t.Arguments=t.Array,n("keys"),n("values"),n("entries")},"./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){"use strict";function n(e){var o=U[e]=L(G[W]);return o._k=e,o}function r(e,o){S(e);for(var s,n=x(o=P(o)),r=0,t=n.length;r<t;)oe(e,s=n[r++],o[s]);return e}function t(e){var o=K.call(this,e=E(e,!0));return!(this===q&&i(U,e)&&!i(Y,e))&&(!(o||!i(this,e)||!i(U,e)||i(this,J)&&this[J][e])||o)}function u(e,o){if(e=P(e),o=E(o,!0),e!==q||!i(U,o)||i(Y,o)){var s=I(e,o);return!s||!i(U,o)||i(e,J)&&e[J][o]||(s.enumerable=!0),s}}function d(e){for(var o,s=R(P(e)),n=[],r=0;s.length>r;)i(U,o=s[r++])||o==J||o==_||n.push(o);return n}function l(e){for(var o,s=e===q,n=R(s?Y:P(e)),r=[],t=0;n.length>t;)!i(U,o=n[t++])||s&&!i(q,o)||r.push(U[o]);return r}var c=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),i=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),m=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),j=s(/*! ./_export */"./node_modules/core-js/modules/_export.js"),a=s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),_=s(/*! ./_meta */"./node_modules/core-js/modules/_meta.js").KEY,f=s(/*! ./_fails */"./node_modules/core-js/modules/_fails.js"),p=s(/*! ./_shared */"./node_modules/core-js/modules/_shared.js"),y=s(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js"),b=s(/*! ./_uid */"./node_modules/core-js/modules/_uid.js"),h=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js"),v=s(/*! ./_wks-ext */"./node_modules/core-js/modules/_wks-ext.js"),g=s(/*! ./_wks-define */"./node_modules/core-js/modules/_wks-define.js"),x=s(/*! ./_enum-keys */"./node_modules/core-js/modules/_enum-keys.js"),w=s(/*! ./_is-array */"./node_modules/core-js/modules/_is-array.js"),S=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),O=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),k=s(/*! ./_to-object */"./node_modules/core-js/modules/_to-object.js"),P=s(/*! ./_to-iobject */"./node_modules/core-js/modules/_to-iobject.js"),E=s(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),T=s(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js"),L=s(/*! ./_object-create */"./node_modules/core-js/modules/_object-create.js"),M=s(/*! ./_object-gopn-ext */"./node_modules/core-js/modules/_object-gopn-ext.js"),N=s(/*! ./_object-gopd */"./node_modules/core-js/modules/_object-gopd.js"),A=s(/*! ./_object-gops */"./node_modules/core-js/modules/_object-gops.js"),C=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),F=s(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js"),I=N.f,D=C.f,R=M.f,G=c.Symbol,V=c.JSON,B=V&&V.stringify,W="prototype",J=h("_hidden"),H=h("toPrimitive"),K={}.propertyIsEnumerable,z=p("symbol-registry"),U=p("symbols"),Y=p("op-symbols"),q=Object[W],Q="function"==typeof G&&!!A.f,X=c.QObject,Z=!X||!X[W]||!X[W].findChild,$=m&&f(function(){return 7!=L(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a})?function(e,o,s){var n=I(q,o);n&&delete q[o],D(e,o,s),n&&e!==q&&D(q,o,n)}:D,ee=Q&&"symbol"==typeof G.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof G},oe=function(e,o,s){return e===q&&oe(Y,o,s),S(e),o=E(o,!0),S(s),i(U,o)?(s.enumerable?(i(e,J)&&e[J][o]&&(e[J][o]=!1),s=L(s,{enumerable:T(0,!1)})):(i(e,J)||D(e,J,T(1,{})),e[J][o]=!0),$(e,o,s)):D(e,o,s)};Q||(a((G=function(e){if(this instanceof G)throw TypeError("Symbol is not a constructor!");var o=b(0<arguments.length?e:void 0),s=function(e){this===q&&s.call(Y,e),i(this,J)&&i(this[J],o)&&(this[J][o]=!1),$(this,o,T(1,e))};return m&&Z&&$(q,o,{configurable:!0,set:s}),n(o)})[W],"toString",function(){return this._k}),N.f=u,C.f=oe,s(/*! ./_object-gopn */"./node_modules/core-js/modules/_object-gopn.js").f=M.f=d,s(/*! ./_object-pie */"./node_modules/core-js/modules/_object-pie.js").f=t,A.f=l,m&&!s(/*! ./_library */"./node_modules/core-js/modules/_library.js")&&a(q,"propertyIsEnumerable",t,!0),v.f=function(e){return n(h(e))}),j(j.G+j.W+j.F*!Q,{Symbol:G});for(var se="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;se.length>ne;)h(se[ne++]);for(var re=F(h.store),te=0;re.length>te;)g(re[te++]);j(j.S+j.F*!Q,"Symbol",{for:function(e){return i(z,e+="")?z[e]:z[e]=G(e)},keyFor:function(e){if(!ee(e))throw TypeError(e+" is not a symbol!");for(var o in z)if(z[o]===e)return o},useSetter:function(){Z=!0},useSimple:function(){Z=!1}}),j(j.S+j.F*!Q,"Object",{create:function(e,o){return void 0===o?L(e):r(L(e),o)},defineProperty:oe,defineProperties:r,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:l});var ue=f(function(){A.f(1)});j(j.S+j.F*ue,"Object",{getOwnPropertySymbols:function(e){return A.f(k(e))}}),V&&j(j.S+j.F*(!Q||f(function(){var e=G();return"[null]"!=B([e])||"{}"!=B({a:e})||"{}"!=B(Object(e))})),"JSON",{stringify:function(e){for(var o,s,n=[e],r=1;r<arguments.length;)n.push(arguments[r++]);if(s=o=n[1],(O(o)||void 0!==e)&&!ee(e))return w(o)||(o=function(e,o){if("function"==typeof s&&(o=s.call(this,e,o)),!ee(o))return o}),n[1]=o,B.apply(V,n)}}),G[W][H]||s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js")(G[W],H,G[W].valueOf),y(G,"Symbol"),y(Math,"Math",!0),y(c.JSON,"JSON",!0)},"./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */function(e,o,s){s(/*! ./_wks-define */"./node_modules/core-js/modules/_wks-define.js")("asyncIterator")},"./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,s){for(var n=s(/*! ./es6.array.iterator */"./node_modules/core-js/modules/es6.array.iterator.js"),r=s(/*! ./_object-keys */"./node_modules/core-js/modules/_object-keys.js"),t=s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),u=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),d=s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),l=s(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),c=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js"),i=c("iterator"),m=c("toStringTag"),j=l.Array,a={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},_=r(a),f=0;f<_.length;f++){var p,y=_[f],b=a[y],h=u[y],v=h&&h.prototype;if(v&&(v[i]||d(v,i,j),v[m]||d(v,m,y),l[y]=j,b))for(p in n)v[p]||t(v,p,n[p],!0)}},"./src/js/empl.js":
/*!************************!*\
  !*** ./src/js/empl.js ***!
  \************************/
/*! no static exports found */function(e,o,s){"use strict";function n(e,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=function(){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["Alex","","ludmila","Viktor","","oleg","iNna","Ivan","Alex","Olga"," Ann"],o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,s),this.employers=e,this.employersNames=o}return function(e,o,s){o&&n(e.prototype,o),s&&n(e,s)}(s,[{key:"changeEmplNames",value:function(){for(var e=0;e<this.employers.length;e++)0<this.employers[e].length&&""!=this.employers[e].length&&this.employersNames.push(this.employers[e]);for(var o=0;o<this.employersNames.length;o++)this.employersNames[o]=this.employersNames[o].toLowerCase().trim();return this.employersNames}}]),s}();o.default=r},"./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */function(e,o,s){"use strict";s.r(o);s(/*! core-js/modules/es7.symbol.async-iterator */"./node_modules/core-js/modules/es7.symbol.async-iterator.js"),s(/*! core-js/modules/es6.symbol */"./node_modules/core-js/modules/es6.symbol.js"),s(/*! core-js/modules/web.dom.iterable */"./node_modules/core-js/modules/web.dom.iterable.js");s(/*! core-js/modules/es7.symbol.async-iterator */"./node_modules/core-js/modules/es7.symbol.async-iterator.js"),s(/*! core-js/modules/es6.symbol */"./node_modules/core-js/modules/es6.symbol.js"),s(/*! core-js/modules/web.dom.iterable */"./node_modules/core-js/modules/web.dom.iterable.js");var n=t(s(/*! ./empl */"./src/js/empl.js")),r=t(s(/*! ./mooney */"./src/js/mooney.js"));function t(e){return e&&e.__esModule?e:{default:e}}function u(e,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d,l,c=new(function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.empl=new n.default,this.employersNames=this.empl.changeEmplNames(),this.mooney=new r.default,this.money=this.mooney.mooneyCalc(),this.sponsors=this.mooney.returnSponsors()}return function(e,o,s){o&&u(e.prototype,o),s&&u(e,s)}(e,[{key:"returnMoney",value:function(){return this.money}},{key:"returnEmployersNames",value:function(){return this.employersNames}},{key:"returnSponsors",value:function(){return this.sponsors}},{key:"makeBusiness",value:function(e,o,s,n){var r=1<arguments.length&&void 0!==o?o:"Victor",t=2<arguments.length?s:void 0,u=3<arguments.length?n:void 0,d=a.concat(f,"unexpected sponsor");console.log("We have a business. Owner: ".concat(e,", director: ").concat(r,". Our budget: ").concat(t,". And our employers: ").concat(u)),console.log("And we have a sponsors: "),console.log.apply(null,d),console.log("Note. Be careful with ".concat(_,". It's a huge risk."))}}]),e}()),i=c.returnMoney(),m=c.returnEmployersNames(),j=c.returnSponsors(),a=j.eu,_=(d=j.eu,l=1,function(e){if(Array.isArray(e))return e}(d)||function(e,o){var s=[],n=!0,r=!1,t=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(s.push(u.value),!o||s.length!==o);n=!0);}catch(e){r=!0,t=e}finally{try{n||null==d.return||d.return()}finally{if(r)throw t}}return s}(d,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}())[0],f=j.rus;c.makeBusiness.apply(null,["Sam",,i,m])},"./src/js/mooney.js":
/*!**************************!*\
  !*** ./src/js/mooney.js ***!
  \**************************/
/*! no static exports found */function(e,o,s){"use strict";function n(e,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=function(){function o(e){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),this.sponsors={cash:[4e4,5e3,30400,12e3],eu:["SRL","PLO","J&K"],rus:["RusAuto","SBO"]},this.money=e}return function(e,o,s){o&&n(e.prototype,o),s&&n(e,s)}(o,[{key:"calcCash",value:function(e){for(var o=0<arguments.length&&void 0!==e?e:0,s=Array.prototype.slice.call(arguments),n=o,r=0;r<s[1].length;r++)n+=+s[1][r];return n}},{key:"mooneyCalc",value:function(){var e=this.sponsors.cash;return this.money=this.calcCash(null,e),this.money}},{key:"returnSponsors",value:function(){return this.sponsors}}]),o}();o.default=r}});