var e,t,r,n,i,a,o,s,c,u,l,d,p,f,h,g,v=globalThis;function m(e){return e&&e.__esModule?e.default:e}var y={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof v&&v)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},$={};$=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;E=$?S.bind(S):function(){return S.apply(S,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;n=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},P={},M={},T=Function.prototype,F=T.call,I=$&&T.bind.bind(F,F),q={},H=(M=$?I:function(e){return function(){return F.apply(e,arguments)}})({}.toString),A=M("".slice);q=function(e){return A(H(e),8,-1)};var N=Object,C=M("".split);P=k(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?C(e,""):N(e)}:N;var R={},U={};U=function(e){return null==e};var D=TypeError;R=function(e){if(U(e))throw new D("Can't call method on "+e);return e},x=function(e){return P(R(e))};var W={},G={},Q={},z={},B="object"==typeof document&&document.all;z=void 0===B&&void 0!==B?function(e){return"function"==typeof e||e===B}:function(e){return"function"==typeof e},Q=function(e){return"object"==typeof e?null!==e:z(e)};var Y={},J={};J=function(e,t){var r;return arguments.length<2?(r=b[e],z(r)?r:void 0):b[e]&&b[e][t]};var V={};V=M({}.isPrototypeOf);var K={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(a=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(a=+i[1]),Z=a;var ea=b.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eo=Object;Y=K?function(e){return"symbol"==typeof e}:function(e){var t=J("Symbol");return z(t)&&V(t.prototype,eo(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(z(e))return e;throw new ed(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return U(r)?void 0:ec(r)};var ep={},ef=TypeError;ep=function(e,t){var r,n;if("string"===t&&z(r=e.toString)&&!Q(n=E(r,e))||z(r=e.valueOf)&&!Q(n=E(r,e))||"string"!==t&&z(r=e.toString)&&!Q(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var eh={},eg={},ev={};ev=!1;var em={},ey=Object.defineProperty;em=function(e,t){try{ey(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=eg=b[eb]||em(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.37.1",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eh=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(R(e))};var e$=M({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return e$(ek(e),t)};var eS={},ej=0,eO=Math.random(),eL=M(1..toString);eS=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eL(++ej+eO,36)};var ex=b.Symbol,eP=eh("wks"),eM=K?ex.for||ex:ex&&ex.withoutSetter||eS,eT=TypeError,eF=(ew(eP,e="toPrimitive")||(eP[e]=X&&ew(ex,e)?ex[e]:eM("Symbol."+e)),eP[e]);G=function(e,t){if(!Q(e)||Y(e))return e;var r,n=es(e,eF);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!Q(r)||Y(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},W=function(e){var t=G(e,"string");return Y(t)?t:t+""};var eI={},eq={},eH=b.document,eA=Q(eH)&&Q(eH.createElement);eq=function(e){return eA?eH.createElement(e):{}},eI=!w&&!k(function(){return 7!==Object.defineProperty(eq("div"),"a",{get:function(){return 7}}).a});var eN=Object.getOwnPropertyDescriptor;r=w?eN:function(e,t){if(e=x(e),t=W(t),eI)try{return eN(e,t)}catch(e){}if(ew(e,t))return L(!E(n,e,t),e[t])};var eC={},eR={};eR=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eU={},eD=String,eW=TypeError;eU=function(e){if(Q(e))return e;throw new eW(eD(e)+" is not an object")};var eG=TypeError,eQ=Object.defineProperty,ez=Object.getOwnPropertyDescriptor,eB="enumerable",eY="configurable",eJ="writable";o=w?eR?function(e,t,r){if(eU(e),t=W(t),eU(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eJ in r&&!r[eJ]){var n=ez(e,t);n&&n[eJ]&&(e[t]=r.value,r={configurable:eY in r?r[eY]:n[eY],enumerable:eB in r?r[eB]:n[eB],writable:!1})}return eQ(e,t,r)}:eQ:function(e,t,r){if(eU(e),t=W(t),eU(r),eI)try{return eQ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=w?function(e,t,r){return o(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eV={},eK={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e2=M(Function.toString);z(eg.inspectSource)||(eg.inspectSource=function(e){return e2(e)}),e1=eg.inspectSource;var e9={},e4={},e3=b.WeakMap;e4=z(e3)&&/native code/.test(String(e3));var e5={},e7=eh("keys");e5=function(e){return e7[e]||(e7[e]=eS(e))};var e6={};e6={};var e8="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e4||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,s=function(e,t){if(tr.has(e))throw new te(e8);return t.facade=e,tr.set(e,t),t},c=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e5("state");e6[tn]=!0,s=function(e,t){if(ew(e,tn))throw new te(e8);return t.facade=e,eC(e,tn,t),t},c=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e9={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=c(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,ta=e9.get,to=String,ts=Object.defineProperty,tc=M("".slice),tu=M("".replace),tl=M([].join),td=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),tp=String(String).split("String"),tf=eK=function(e,t,r){"Symbol("===tc(to(t),0,7)&&(t="["+tu(to(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),td&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=tf(function(){return z(this)&&ta(this).source||e1(this)},"toString"),eV=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(z(r)&&eK(r,a,n),n.global)i?e[t]=r:em(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var th={},tg={},tv={},tm={},ty={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},ty=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tk=Math.max,tE=Math.min;tm=function(e,t){var r=ty(e);return r<0?tk(r+t,0):tE(r,t)};var t$={},tS={},tj=Math.min;tS=function(e){var t=ty(e);return t>0?tj(t,9007199254740991):0},t$=function(e){return tS(e.length)};var tO=function(e){return function(t,r,n){var i,a=x(t),o=t$(a);if(0===o)return!e&&-1;var s=tm(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tL={includes:tO(!0),indexOf:tO(!1)}.indexOf,tx=M([].push);tv=function(e,t){var r,n=x(e),i=0,a=[];for(r in n)!ew(e6,r)&&ew(n,r)&&tx(a,r);for(;t.length>i;)ew(n,r=t[i++])&&(~tL(a,r)||tx(a,r));return a};var tP=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tv(e,tP)},d=Object.getOwnPropertySymbols;var tM=M([].concat);tg=J("Reflect","ownKeys")||function(e){var t=l(eU(e));return d?tM(t,d(e)):t},th=function(e,t,n){for(var i=tg(t),a=0;a<i.length;a++){var s=i[a];ew(e,s)||n&&ew(n,s)||o(e,s,r(t,s))}};var tT={},tF=/#|\.prototype\./,tI=function(e,t){var r=tH[tq(e)];return r===tN||r!==tA&&(z(t)?k(t):!!t)},tq=tI.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tH=tI.data={},tA=tI.NATIVE="N",tN=tI.POLYFILL="P";tT=tI,y=function(e,t){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||em(c,{}):b[c]&&b[c].prototype)for(i in t){if(o=t[i],a=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tT(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;th(o,a)}(e.sham||a&&a.sham)&&eC(o,"sham",!0),eV(n,i,o,e)}};var tC={},tR={},tU=Function.prototype,tD=tU.apply,tW=tU.call;tR="object"==typeof Reflect&&Reflect.apply||($?tW.bind(tD):function(){return tW.apply(tD,arguments)});var tG={},tQ={},tz=(tQ=function(e){if("Function"===q(e))return M(e)})(tQ.bind);tG=function(e,t){return ec(e),void 0===t?e:$?tz(e,t):function(){return e.apply(t,arguments)}};var tB={};tB=J("document","documentElement");var tY={};tY=M([].slice);var tJ={},tV=TypeError;tJ=function(e,t){if(e<t)throw new tV("Not enough arguments");return e};var tK={};tK=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===q(b.process);var tZ=b.setImmediate,t0=b.clearImmediate,t1=b.process,t2=b.Dispatch,t9=b.Function,t4=b.MessageChannel,t3=b.String,t5=0,t7={},t6="onreadystatechange";k(function(){p=b.location});var t8=function(e){if(ew(t7,e)){var t=t7[e];delete t7[e],t()}},re=function(e){return function(){t8(e)}},rt=function(e){t8(e.data)},rr=function(e){b.postMessage(t3(e),p.protocol+"//"+p.host)};tZ&&t0||(tZ=function(e){tJ(arguments.length,1);var t=z(e)?e:t9(e),r=tY(arguments,1);return t7[++t5]=function(){tR(t,void 0,r)},f(t5),t5},t0=function(e){delete t7[e]},tX?f=function(e){t1.nextTick(re(e))}:t2&&t2.now?f=function(e){t2.now(re(e))}:t4&&!tK?(g=(h=new t4).port2,h.port1.onmessage=rt,f=tG(g.postMessage,g)):b.addEventListener&&z(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(rr)?(f=rr,b.addEventListener("message",rt,!1)):f=t6 in eq("script")?function(e){tB.appendChild(eq("script"))[t6]=function(){tB.removeChild(this),t8(e)}}:function(e){setTimeout(re(e),0)});var rn=(tC={set:tZ,clear:t0}).clear;y({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ri=tC.set,ra={},ro={};ro="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=b.Function,rc=/MSIE .\./.test(ee)||ro&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ra=function(e,t){var r=t?2:1;return rc?function(n,i){var a=tJ(arguments.length,1)>r,o=z(n)?n:rs(n),s=a?tY(arguments,r):[],c=a?function(){tR(o,this,s)}:o;return t?e(c,i):e(c)}:e};var ru=b.setImmediate?ra(ri,!1):ri;y({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==ru},{setImmediate:ru});var rl=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(o=new O(a||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=f;var u=d(e,n,o);if("normal"===u.type){if(s=o.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=h,o.method="throw",o.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E($.prototype),u($.prototype,s,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new $(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rl}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rl:Function("r","regeneratorRuntime = r")(rl)}const rd="https://forkify-api.herokuapp.com/api/v2",rp="44082390-8fa9-41c3-af56-bc3abdb46d13",rf=async function(e,t){let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise((e,t)=>{setTimeout(()=>{t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i},rh={recipe:null,search:{q:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rg=function(e){if(!e?.recipe)return;let{recipe:t}=e;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rv=async function(e){try{let{data:t}=await rf(`${rd}/recipes/${e}?key=${rp}`);rh.recipe=rg(t),rh.bookmarks.some(t=>t.id===e)?rh.recipe.bookmarked=!0:rh.recipe.bookmarked=!1}catch(e){throw console.error("error:",`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rm=async function(e){try{let{data:t}=await rf(`${rd}/recipes?search=${e}&key=${rp}`);rh.search.q=e,rh.search.results=t.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rh.search.page=1}catch(e){throw console.error("error:",`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},ry=function(e=rh.search.page){rh.search.page=e;let t=(e-1)*rh.search.resultsPerPage;return rh.search.results.slice(t,10*e)},rb=function(e){rh.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rh.recipe.servings}),rh.recipe.servings=e},r_=function(e){rh.bookmarks.push(e),rh.recipe.id===e.id&&(rh.recipe.bookmarked=!0),rk()},rw=function(e){let t=rh.bookmarks.findIndex(t=>t.id===e);rh.bookmarks.splice(t,1),rh.recipe.id===e&&(rh.recipe.bookmarked=!1),rk()},rk=function(){localStorage.setItem("bookmarks",JSON.stringify(rh.bookmarks))};!function(){let e=localStorage.getItem("bookmarks");e&&(rh.bookmarks=JSON.parse(e))}();const rE=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format");let[r,n,i]=t;return{quantity:r?Number(r):null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},{data:n}=await rf(`${rd}/recipes?key=${rp}`,r);rh.recipe=rg(n),r_(rh.recipe)}catch(e){throw e}};var r$={};r$=new URL("icons.c14567a0.svg",import.meta.url).toString();class rS{_data;render(e,t=!0){if(!e||Array.isArray(e)&&!e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
          <div class="spinner">
              <svg>
                <use href="${m(r$)}#icon-loader"></use>
              </svg>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
            <div>
              <svg>
                <use href="${m(r$)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
        <div class="message">
          <div>
            <svg>
              <use href="${m(r$)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rj extends rS{_parentElement=document.querySelector(".upload");_message="Recipe was uploaded successfully :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerOpenWindow(),this._addHandlerCloseWindow(),this._addHandlerRender()}resetForm(){this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkup())}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerOpenWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerCloseWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerRender(){window.addEventListener("load",this.resetForm.bind(this))}_generateMarkup(){return`
          <div class="upload__column">
              <h3 class="upload__heading">Recipe data</h3>
              <label>Title</label>
              <input required name="title" type="text" />

              <label>URL</label>
              <input required name="sourceUrl" type="text" />

              <label>Image URL</label>
              <input required name="image" type="text" />

              <label>Publisher</label>
              <input required name="publisher" type="text" />

              <label>Prep time</label>
              <input required name="cookingTime" type="number" />

              <label>Servings</label>
              <input required name="servings" type="number" />
          </div>
          <div class="upload__column">
            <h3 class="upload__heading">Ingredients</h3>
            <label>Ingredient 1</label>
            <input
                type="text"
                required
                name="ingredient-1"
                placeholder="Format: 'Quantity,Unit,Description'"
                />
            <label>Ingredient 2</label>
            <input
                type="text"
                name="ingredient-2"
                placeholder="Format: 'Quantity,Unit,Description'"
                />
            <label>Ingredient 3</label>
            <input
                type="text"
                name="ingredient-3"
                placeholder="Format: 'Quantity,Unit,Description'"
                />
            <label>Ingredient 4</label>
            <input
                type="text"
                name="ingredient-4"
                placeholder="Format: 'Quantity,Unit,Description'"
                />
            <label>Ingredient 5</label>
            <input
                type="text"
                name="ingredient-5"
                placeholder="Format: 'Quantity,Unit,Description'"
                />
            <label>Ingredient 6</label>
            <input
                type="text"
                name="ingredient-6"
                placeholder="Format: 'Quantity,Unit,Description'"
                />
          </div>
          <button class="btn upload__btn">
            <svg>
                <use href="${m(r$)}#icon-upload-cloud"></use>
            </svg>
            <span>Upload</span>
          </button>
          `}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries(new FormData(this)))})}}var rO=new rj,rL=new class extends rS{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
              <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
                <figure class="preview__fig">
                  <img src="${this._data.image}" alt="${this._data.title}" />
                </figure>
                <div class="preview__data">
                  <h4 class="preview__title">${this._data.title}</h4>
                  <p class="preview__publisher">${this._data.publisher}</p>
                  <div class="preview__user-generated 
                  ${this._data.key?"":"hidden"}">
                     <svg>
                       <use href="${m(r$)}#icon-user"></use>
                     </svg>
                   </div>
                </div>
              </a>
          </li>`}};class rx extends rS{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Fine a nice recipe and bookmark it";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rL.render(e,!1)).join("")}}var rP=new rx;class rM extends rS{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`<button data-goto-page="${e+1}" class="btn--inline pagination__btn--next">
                  <span>Page ${e+1}</span>
                  <svg class="search__icon">
                    <use href="${m(r$)}#icon-arrow-right"></use>
                  </svg>
              </button>`:e===t&&t>1?`<button data-goto-page="${e-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${m(r$)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${e-1}</span>
              </button>`:this._data.page<t?`<button data-goto-page="${e-1}" class="btn--inline pagination__btn--prev">
                  <svg class="search__icon">
                  <use href="${m(r$)}#icon-arrow-left"></use>
                  </svg>
                  <span>Page ${e-1}</span>
              </button>
              <button data-goto-page="${e+1}" class="btn--inline pagination__btn--next">
                  <span>Page ${e+1}</span>
                  <svg class="search__icon">
                    <use href="${m(r$)}#icon-arrow-right"></use>
                  </svg>
              </button>`:""}addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&e(Number(r.dataset.gotoPage))})}}var rT=new rM,rF={};function rI(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}rF=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c;return s=r,c=t,rI(parseInt(s,10),Math.pow(10,s.length),a,c,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rI(Math.round((s*c-s)*Math.pow(10,a)),(c-1)*o,n,i,!0)}(r,n,e,a,t)}};class rq extends rS{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src=${this._data.image} alt=${this._data.title} class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(r$)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${m(r$)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button data-update-to="${this._data.servings-1}" class="btn--tiny btn--update-servings">
                <svg>
                  <use href="${m(r$)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button data-update-to="${this._data.servings+1}"  class="btn--tiny btn--update-servings">
                <svg>
                  <use href="${m(r$)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
           <svg>
              <use href="${m(r$)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${m(r$)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href=${this._data.sourceUrl}
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${m(r$)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateMarkupIngredient(e){return`<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${m(r$)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">
                ${e.quantity?m(rF)(e.quantity):""}
              </div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>`}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})}}var rH=new rq;class rA extends rS{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please search another one";_message="";_generateMarkup(){return this._data.map(e=>rL.render(e,!1)).join("")}}var rN=new rA;class rC{#e=document.querySelector(".search");getQuery(){return this.#e.querySelector(".search__field").value}addHandlerSearch(e){this.#e.addEventListener("submit",t=>{t.preventDefault(),e()})}clearInput(){this.#e.querySelector(".search__field").value=""}}var rR=new rC;const rU=async function(){try{let e=rR.getQuery();if(!e)return;rN.renderSpinner(),await rm(e),rR.clearInput(),rN.render(ry()),rT.render(rh.search)}catch(e){console.log("error:",e)}},rD=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rH.renderSpinner(),rN.update(ry()),rP.update(rh.bookmarks),await rv(e),rH.render(rh.recipe)}catch(e){console.log("error:",e),rH.renderError()}},rW=async function(e){try{rO.renderSpinner(),await rE(e),rH.render(rh.recipe),rO.renderMessage(),rP.render(rh.bookmarks),window.history.pushState(null,"",`#${rh.recipe.id}`),setTimeout(function(){rO.toggleWindow(),setTimeout(()=>rO.resetForm(),500)},2500),setTimeout(function(){rO.renderUploadForm()},2750)}catch(e){console.error(e),rO.renderError(e.message),setTimeout(function(){rO.renderUploadForm()},3750)}};rP.addHandlerRender(function(){rP.render(rh.bookmarks)}),rH.addHandlerRender(rD),rH.addHandlerUpdateServings(function(e){rb(e),rH.update(rh.recipe)}),rH.addHandlerAddBookmark(function(){rh.recipe.bookmarked?rw(rh.recipe.id):r_(rh.recipe),rH.update(rh.recipe),rP.render(rh.bookmarks)}),rR.addHandlerSearch(rU),rT.addHandlerClick(function(e){rN.render(ry(e)),rT.render(rh.search)}),rO.addHandlerUpload(rW);
//# sourceMappingURL=index.93ff7778.js.map
