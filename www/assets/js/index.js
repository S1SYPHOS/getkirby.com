!function(e){var t=window.webpackJsonp;window.webpackJsonp=function(n,i,o){for(var a,u,s=0,c=[];s<n.length;s++)u=n[s],r[u]&&c.push(r[u][0]),r[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(t&&t(n,i,o);c.length;)c.shift()()};var n={},r={3:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=r[e];if(0===t)return new Promise(function(e){e()});if(t)return t[2];var n=new Promise(function(n,i){t=r[e]=[n,i]});t[2]=n;var o=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,i.nc&&a.setAttribute("nonce",i.nc),a.src=i.p+"js/bundle-"+({0:"code",1:"search",2:"tooltip"}[e]||e)+".js?id="+{0:"16242adca6cc1cf57a00",1:"4975eb79f9183cdae52c",2:"043f6d13541a8addd049"}[e];var u=setTimeout(s,12e4);function s(){a.onerror=a.onload=null,clearTimeout(u);var t=r[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),r[e]=void 0)}return a.onerror=a.onload=s,o.appendChild(a),n},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/",i.oe=function(e){throw console.error(e),e},i(i.s=0)}({"+Bt+":function(e,t){},0:function(e,t,n){n("vGYV"),n("SgXG"),n("P9yD"),n("+Bt+"),n("rhwI"),n("nFT7"),n("XgN2"),n("gpXz"),n("nHye"),n("m56c"),n("IFaM"),n("fDe5"),n("Md71"),n("6J9z"),n("WgIl"),n("FnJk"),n("6314"),n("esmE"),n("2qlg"),n("w6Uh"),n("PprJ"),n("zlsc"),n("pvPu"),n("xWBZ"),n("koDb"),n("i3Ly"),n("e0Aw"),n("vedj"),n("izEY"),e.exports=n("vg6f")},"2qlg":function(e,t){},"5EYE":function(e,t,n){"use strict";var r,i=n("cpAY"),o=(r=i)&&r.__esModule?r:{default:r};var a=1129,u="https://cdn.paddle.com/paddle/paddle.js";"URLSearchParams"in window&&window.addEventListener("load",function(){if(!("Paddle"in window||null!==document.querySelector('script[src="'+u+'"]'))){var e=new URLSearchParams(window.location.search);e.has("status")&&e.has("expires")&&e.has("seller")&&e.has("affiliate")&&e.has("link")&&e.has("p_tok")&&(0,o.default)(u,function(){Paddle.Setup({vendor:a})})}})},6314:function(e,t){},"6J9z":function(e,t){},"7dJq":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=(r=0,function(e){return new Promise(function(t){clearTimeout(r),r=setTimeout(t(),e)})});t.default=i},B2fU:function(e,t){!function(t,n){var r=function(e,t,n){"use strict";var r,i;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},n)t in i||(i[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var o=t.documentElement,a=e.HTMLPictureElement,u=e.addEventListener.bind(e),s=e.setTimeout,c=e.requestAnimationFrame||s,l=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],h={},m=Array.prototype.forEach,v=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e.getAttribute("class")||"")&&h[t]},p=function(e,t){v(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},y=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&y(e,t),f.forEach(function(n){e[r](n,t)})},b=function(e,n,i,o,a){var u=t.createEvent("Event");return i||(i={}),i.instance=r,u.initEvent(n,!o,!a),u.detail=i,e.dispatchEvent(u),u},w=function(t,n){var r;!a&&(r=e.picturefill||i.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},L=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},k=(j=[],B=[],D=j,N=function(){var e=D;for(D=j.length?B:j,T=!0,F=!1;e.length;)e.shift()();T=!1},R=function(e,n){T&&!n?e.apply(this,arguments):(D.push(e),F||(F=!0,(t.hidden?s:c)(N)))},R._lsFlush=N,R),x=function(e,t){return t?function(){k(e)}:function(){var t=this,n=arguments;k(function(){e.apply(t,n)})}},A=function(e){var t,r,i=function(){t=null,e()},o=function(){var e=n.now()-r;e<99?s(o,99-e):(l||i)(i)};return function(){r=n.now(),t||(t=s(o,99))}},S=function(){var a,f,h,L,S,z,C,P,M,O,T,F,j,B,D,N,R,G,I,q=/^img$/i,X=/^iframe$/i,H="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),U=0,W=0,$=-1,J=function(e){W--,(!e||W<0||!e.target)&&(W=0)},V=function(e){return null==F&&(F="hidden"==E(t.body,"visibility")),F||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},Y=function(e,n){var r,i=e,a=V(e);for(P-=n,T+=n,M-=n,O+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=o;)(a=(E(i,"opacity")||1)>0)&&"visible"!=E(i,"overflow")&&(r=i.getBoundingClientRect(),a=O>r.left&&M<r.right&&T>r.top-1&&P<r.bottom+1);return a},Q=function(){var e,n,u,s,c,l,d,h,m,v,p,g,y=r.elements;if((L=i.loadMode)&&W<8&&(e=y.length)){for(n=0,$++;n<e;n++)if(y[n]&&!y[n]._lazyRace)if(!H||r.prematureUnveil&&r.prematureUnveil(y[n]))ie(y[n]);else if((h=y[n].getAttribute("data-expand"))&&(l=1*h)||(l=U),v||(v=!i.expand||i.expand<1?o.clientHeight>500&&o.clientWidth>500?500:370:i.expand,r._defEx=v,p=v*i.expFactor,g=i.hFac,F=null,U<p&&W<1&&$>2&&L>2&&!t.hidden?(U=p,$=0):U=L>1&&$>1&&W<6?v:0),m!==l&&(z=innerWidth+l*g,C=innerHeight+l,d=-1*l,m=l),u=y[n].getBoundingClientRect(),(T=u.bottom)>=d&&(P=u.top)<=C&&(O=u.right)>=d*g&&(M=u.left)<=z&&(T||O||M||P)&&(i.loadHidden||V(y[n]))&&(f&&W<3&&!h&&(L<3||$<4)||Y(y[n],l))){if(ie(y[n]),c=!0,W>9)break}else!c&&f&&!s&&W<4&&$<4&&L>2&&(a[0]||i.preloadAfterLoad)&&(a[0]||!h&&(T||O||M||P||"auto"!=y[n].getAttribute(i.sizesAttr)))&&(s=a[0]||y[n]);s&&!c&&ie(s)}},Z=(j=Q,D=0,N=i.throttleDelay,R=i.ricTimeout,G=function(){B=!1,D=n.now(),j()},I=l&&R>49?function(){l(G,{timeout:R}),R!==i.ricTimeout&&(R=i.ricTimeout)}:x(function(){s(G)},!0),function(e){var t;(e=!0===e)&&(R=33),B||(B=!0,(t=N-(n.now()-D))<0&&(t=0),e||t<9?I():s(I,t))}),K=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(J(e),p(t,i.loadedClass),g(t,i.loadingClass),y(t,te),b(t,"lazyloaded"))},ee=x(K),te=function(e){ee({target:e.target})},ne=function(e){var t,n=e.getAttribute(i.srcsetAttr);(t=i.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},re=x(function(e,t,n,r,o){var a,u,c,l,f,v;(f=b(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?p(e,i.autosizesClass):e.setAttribute("sizes",r)),u=e.getAttribute(i.srcsetAttr),a=e.getAttribute(i.srcAttr),o&&(c=e.parentNode,l=c&&d.test(c.nodeName||"")),v=t.firesLoad||"src"in e&&(u||a||l),f={target:e},p(e,i.loadingClass),v&&(clearTimeout(h),h=s(J,2500),y(e,te,!0)),l&&m.call(c.getElementsByTagName("source"),ne),u?e.setAttribute("srcset",u):a&&!l&&(X.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),o&&(u||l)&&w(e,{src:a})),e._lazyRace&&delete e._lazyRace,g(e,i.lazyClass),k(function(){var t=e.complete&&e.naturalWidth>1;v&&!t||(t&&p(e,"ls-is-cached"),K(f),e._lazyCache=!0,s(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&W--},!0)}),ie=function(e){if(!e._lazyRace){var t,n=q.test(e.nodeName),r=n&&(e.getAttribute(i.sizesAttr)||e.getAttribute("sizes")),o="auto"==r;(!o&&f||!n||!e.getAttribute("src")&&!e.srcset||e.complete||v(e,i.errorClass)||!v(e,i.lazyClass))&&(t=b(e,"lazyunveilread").detail,o&&_.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,W++,re(e,t,o,r,n))}},oe=A(function(){i.loadMode=3,Z()}),ae=function(){3==i.loadMode&&(i.loadMode=2),oe()},ue=function(){f||(n.now()-S<999?s(ue,999):(f=!0,i.loadMode=3,Z(),u("scroll",ae,!0)))};return{_:function(){S=n.now(),r.elements=t.getElementsByClassName(i.lazyClass),a=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),u("scroll",Z,!0),u("resize",Z,!0),u("pageshow",function(e){if(e.persisted){var n=t.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&c(function(){n.forEach(function(e){e.complete&&ie(e)})})}}),e.MutationObserver?new MutationObserver(Z).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o.addEventListener("DOMNodeInserted",Z,!0),o.addEventListener("DOMAttrModified",Z,!0),setInterval(Z,999)),u("hashchange",Z,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t.addEventListener(e,Z,!0)}),/d$|^c/.test(t.readyState)?ue():(u("load",ue),t.addEventListener("DOMContentLoaded",Z),s(ue,2e4)),r.elements.length?(Q(),k._lsFlush()):Z()},checkElems:Z,unveil:ie,_aLSL:ae}}(),_=(P=x(function(e,t,n,r){var i,o,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),d.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),o=0,a=i.length;o<a;o++)i[o].setAttribute("sizes",r);n.detail.dataAttr||w(e,n.detail)}),M=function(e,t,n){var r,i=e.parentNode;i&&(n=L(e,i,n),(r=b(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&P(e,i,r,n))},O=A(function(){var e,t=C.length;if(t)for(e=0;e<t;e++)M(C[e])}),{_:function(){C=t.getElementsByClassName(i.autosizesClass),u("resize",O)},checkElems:O,updateElem:M}),z=function(){!z.i&&t.getElementsByClassName&&(z.i=!0,_._(),S._())};var C,P,M,O;var T,F,j,B,D,N,R;return s(function(){i.init&&z()}),r={cfg:i,autoSizer:_,loader:S,init:z,uP:w,aC:p,rC:g,hC:v,fire:b,gW:L,rAF:k}}(t,t.document,Date);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},FnJk:function(e,t){},"Gnd+":function(e,t,n){"use strict";var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=a(n("sFUq")),o=a(n("gc1H"));function a(e){return e&&e.__esModule?e:{default:e}}(0,i.default)().then(function(){Promise.all([n.e(2).then(n.bind(null,"IDmg"))]).then(function(e){!function(e){var t=(0,o.default)(function(){!function(e){var t=document.querySelectorAll("[data-tooltip]");if(t.length)for(var n=0,r=t.length;n<r;n++){var i=t[n],o='<div class="tippy-inner | text text-small -background:black">'+i.getAttribute("data-tooltip")+"</div>",a={animation:"shift-away",arrow:!0,delay:[150,300],distance:10,duration:[200,150],interactive:!0,maxWidth:"25rem",theme:"kirby"};a.content=o,e(i,a)}}(e)},250);new MutationObserver(t).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),t()}(r(e,1)[0].default)})})},IFaM:function(e,t){},Jucu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){e.addEventListener(t,function(t){for(var i=e.querySelectorAll(n),o=t.target,a=0,u=i.length;a<u;a++)for(var s=o,c=i[a];s&&s!==e;){if(s===c)return r.call(c,t);s=s.parentNode}})}},Md71:function(e,t){},P9yD:function(e,t){},PSGk:function(e,t,n){"use strict";"kirbyConfig"in window&&window.kirbyConfig.assetsPath&&(n.p=window.kirbyConfig.assetsPath)},PprJ:function(e,t){},SgXG:function(e,t){},SldL:function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"==typeof e,l=t.regeneratorRuntime;if(l)c&&(e.exports=l);else{(l=t.regeneratorRuntime=c?e.exports:{}).wrap=w;var d="suspendedStart",f="suspendedYield",h="executing",m="completed",v={},p={};p[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(M([])));y&&y!==r&&i.call(y,a)&&(p=y);var b=x.prototype=L.prototype=Object.create(p);k.prototype=b.constructor=x,x.constructor=k,x[s]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(b),e},l.awrap=function(e){return{__await:e}},A(S.prototype),S.prototype[u]=function(){return this},l.AsyncIterator=S,l.async=function(e,t,n,r){var i=new S(w(e,t,n,r));return l.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},A(b),b[s]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=M,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return u.type="throw",u.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:M(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(e,t,n,r){var i=t&&t.prototype instanceof L?t:L,o=Object.create(i.prototype),a=new P(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===i)throw o;return O()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var u=_(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=E(e,t,n);if("normal"===s.type){if(r=n.done?m:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}(e,n,a),o}function E(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function L(){}function k(){}function x(){}function A(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(e){var t;this._invoke=function(n,r){function o(){return new Promise(function(t,o){!function t(n,r,o,a){var u=E(e[n],e,r);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,a)},function(e){t("throw",e,o,a)}):Promise.resolve(c).then(function(e){s.value=e,o(s)},a)}a(u.arg)}(n,r,t,o)})}return t=t?t.then(o,o):o()}}function _(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,_(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=E(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function M(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},WgIl:function(e,t){},XgN2:function(e,t){},Xxa5:function(e,t,n){e.exports=n("jyFz")},akH5:function(e,t,n){"use strict";var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=a(n("sFUq")),o=a(n("7dJq"));function a(e){return e&&e.__esModule?e:{default:e}}var u='<svg viewBox="0 0 5 11" width="5" height="11" aria-hidden="true"><path d="M2.96153846,5.41538462 L0,9.13846154 L1.35384615,10.1538462 L4.73846154,5.92307692 C4.82307692,5.75384615 4.90769231,5.58461538 4.90769231,5.41538462 C4.90769231,5.24615385 4.82307692,5.07692308 4.73846154,4.90769231 L1.35384615,0.676923077 L0,1.69230769 L2.96153846,5.41538462 Z"/></svg>';(0,i.default)(function(){var e=document.querySelector(".js-menu-search");if(e){var t=document.querySelector(".js-menu-search-input");Promise.all([n.e(1).then(n.bind(null,"l3sP")),n.e(1).then(n.bind(null,"S6+x"))]).then(function(n){var i=r(n,2),a=i[0],s=i[1],c=a("S7OGBIAJTV","d161a2f4cd2d69247c529a3371ad3050").initIndex("getkirby-3"),l="",d=[],f=new s(t,{list:[],filter:function(){return!0},sort:!1,item:function(e){var t=document.createElement("li");return"VIEW_ALL_RESULTS_UXfpeDFlmye9rXkXP5wd"===e.label?(t.classList.add("menu-search-view-all"),t.innerHTML="<strong>View all results</strong>"+u):"SEARCH_ERROR_UXfpeDFlmye9rXkXP5wd"===e.label?(t.classList.add("menu-search-error"),t.innerHTML="<strong>Sorry, an error occured. Please try advanced search instead.</strong>"+u):t.innerHTML="<strong>"+e.label+"</strong> <small>"+e.value+"</small>",t}});t.addEventListener("focus",function(){document.documentElement.classList.add("is-menu-search-open")}),t.addEventListener("blur",function(){document.documentElement.classList.remove("is-menu-search-open")}),t.addEventListener("keypress",function(t){(t.key&&"Enter"===t.key||13===t.keyCode)&&e.submit()}),t.addEventListener("keyup",function(){var e=t.value.trim();return e===l||(""===e?(l="",d=[],f.list=d,f.evaluate(),!0):(l=e,e.length<=2||void(0,o.default)(250).then(function(){var n={hitsPerPage:5},r=t.getAttribute("data-filters");r&&(n.filters=r),c.search(e,n,function(e,t){if(d=[],e)return"console"in window&&console.error("Quicksearch error",e),d.push({label:"SEARCH_ERROR_UXfpeDFlmye9rXkXP5wd",value:0}),f.list=d,f.evaluate(),void f.open();for(var n=0,r=t.hits.length;n<r;n++){var i=t.hits[n];d.push({label:i.title,value:i.objectID})}t.nbHits>0&&t.nbHits>t.hitsPerPage&&d.push({label:"VIEW_ALL_RESULTS_UXfpeDFlmye9rXkXP5wd",value:t.nbHits}),f.list=d,f.evaluate(),f.open()})})))}),t.addEventListener("awesomplete-select",function(t){t.preventDefault(),"VIEW_ALL_RESULTS_UXfpeDFlmye9rXkXP5wd"===t.text.label||"SEARCH_ERROR_UXfpeDFlmye9rXkXP5wd"===t.text.label?e.submit():window.location.href="/"+t.text.value})})}})},cpAY:function(e,t,n){var r,i,o;i=[],void 0===(o="function"==typeof(r=function(){var e=function(){},t={},n={},r={};function i(e,t){if(e){var i=r[e];if(n[e]=t,i)for(;i.length;)i[0](e,t),i.splice(0,1)}}function o(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function a(t,n,r,i){var o,u,s=document,c=r.async,l=(r.numRetries||0)+1,d=r.before||e,f=t.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(t)?((u=s.createElement("link")).rel="stylesheet",u.href=f,(o="hideFocus"in u)&&u.relList&&(o=0,u.rel="preload",u.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(u=s.createElement("img")).src=f:((u=s.createElement("script")).src=t,u.async=void 0===c||c),u.onload=u.onerror=u.onbeforeload=function(e){var s=e.type[0];if(o)try{u.sheet.cssText.length||(s="e")}catch(e){18!=e.code&&(s="e")}if("e"==s){if((i+=1)<l)return a(t,n,r,i)}else if("preload"==u.rel&&"style"==u.as)return u.rel="stylesheet";n(t,s,e.defaultPrevented)},!1!==d(t,u)&&s.head.appendChild(u)}function u(e,n,r){var u,s;if(n&&n.trim&&(u=n),s=(u?r:n)||{},u){if(u in t)throw"LoadJS";t[u]=!0}function c(t,n){!function(e,t,n){var r,i,o=(e=e.push?e:[e]).length,u=o,s=[];for(r=function(e,n,r){if("e"==n&&s.push(e),"b"==n){if(!r)return;s.push(e)}--o||t(s)},i=0;i<u;i++)a(e[i],r,n)}(e,function(e){o(s,e),t&&o({success:t,error:n},e),i(u,e)},s)}if(s.returnPromise)return new Promise(c);c()}return u.ready=function(e,t){return function(e,t){var i,o,a,u=[],s=(e=e.push?e:[e]).length,c=s;for(i=function(e,n){n.length&&u.push(e),--c||t(u)};s--;)o=e[s],(a=n[o])?i(o,a):(r[o]=r[o]||[]).push(i)}(e,function(e){o(t,e)}),u},u.done=function(e){i(e,[])},u.reset=function(){t={},n={},r={}},u.isDefined=function(e){return e in t},u})?r.apply(t,i):r)||(e.exports=o)},e0Aw:function(e,t){},eF2i:function(e,t,n){"use strict";var r,i=n("Jucu"),o=n("sFUq");function a(e){var t=e.querySelector("[aria-expanded]");if(!t)return!1;var n=e.querySelector(".js-sidebar-submenu");return!n.hidden?(n.hidden=!0,t.setAttribute("aria-expanded","false"),function(e){for(var t=0,n=e.querySelectorAll("a"),r=n.length;t<r;t++)n[t].setAttribute("tabindex","-1")}(n)):(t.setAttribute("aria-expanded","true"),n.hidden=!1,function(e){for(var t=0,n=e.querySelectorAll("a"),r=n.length;t<r;t++)n[t].setAttribute("tabindex","0")}(n)),!0}(0,((r=o)&&r.__esModule?r:{default:r}).default)().then(function(){var e=document.querySelector(".js-sidebar");e&&((0,i.on)(e,"keydown","a.sidebar-item-link",function(e){(e.key&&("ArrowRight"===e.key||"ArrowLeft"===e.key)||39===e.keyCode||37===e.keyCode)&&a(this.parentNode)&&e.preventDefault()}),(0,i.on)(e,"click",".js-sidebar-toggle",function(e){e.preventDefault(),a(this.parentNode)}))})},esmE:function(e,t){},"f6+h":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.$=function(e){return document.querySelector(e)},t.$$=function(e){return[].slice.call(document.querySelectorAll(e))}},fDe5:function(e,t){},gc1H:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=!1;return function(){n||(e(),n=!0,setTimeout(function(){n=!1},t))}}},gpXz:function(e,t){},i3Ly:function(e,t){},izEY:function(e,t){},jyFz:function(e,t,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n("SldL"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},koDb:function(e,t){},m56c:function(e,t){},nFT7:function(e,t){},nHye:function(e,t){},ofVl:function(e,t,n){"use strict";var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("f6+h"),a=n("sFUq"),u=(r=a)&&r.__esModule?r:{default:r};var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.mobileToggleButton=(0,o.$)("button[aria-controls]"),this.menu=(0,o.$)("#menu"),this.isOpen=!1,this.submenuItems=this.menu.querySelectorAll(".menu-item.has-dropdown"),this.handleGlobalClickForMobileMenuBound=this.handleGlobalClickForMobileMenu.bind(this),this.handleGlobalEventForSubmenusBound=this.handleGlobalEventForSubmenus.bind(this),this.currentSubmenu=null,this.mediaQuery=matchMedia("(min-width: 56em)"),this.mediaQuery.addListener(this.toggleDesktopAndMobileMenu.bind(this)),this.init()}return i(e,[{key:"init",value:function(){var e=this;this.mobileToggleButton.addEventListener("click",function(t){t.preventDefault(),e.toggleMobilePopup()});for(var t=function(t,n){var r=e.submenuItems[t],i=r.querySelector("a");i.addEventListener("touchend",function(t){e.isDesktop()&&(t.preventDefault(),e.toggleSubmenu(r))}),i.addEventListener("mouseenter",function(t){e.isDesktop()&&e.toggleSubmenu(r,!0)}),i.addEventListener("focus",function(t){e.isDesktop()&&e.toggleSubmenu(r,!0)}),r.addEventListener("mouseleave",function(t){e.isDesktop()&&e.toggleSubmenu(r,!1)})},n=0,r=this.submenuItems.length;n<r;n++)t(n);this.toggleDesktopAndMobileMenu()}},{key:"handleGlobalEventForSubmenus",value:function(e){null!==this.currentSubmenu&&!1===this.currentSubmenu.contains(e.target)&&this.toggleSubmenu(this.currentSubmenu,!1)}},{key:"toggleDesktopAndMobileMenu",value:function(){this.isDesktop()?(this.mobileToggleButton.setAttribute("aria-hidden","true"),this.mobileToggleButton.hidden=!0):(this.mobileToggleButton.removeAttribute("aria-hidden"),this.mobileToggleButton.hidden=!1)}},{key:"isDesktop",value:function(){return this.mediaQuery.matches}},{key:"closeAllSubmenus",value:function(){for(var e=0,t=this.submenuItems.length;e<t;e++){var n=this.submenuItems[e];this.toggleSubmenu(n,!1)}}},{key:"toggleSubmenu",value:function(e,t){var n=!e.classList.contains("is-open");if(void 0!==t){if(t!==n)return;n=t}if(!0===n)for(var r=0,i=this.submenuItems.length;r<i;r++){var o=this.submenuItems[r];this.toggleSubmenu(o,!1)}e.classList.toggle("is-open",n),null===this.currentSubmenu&&(window.addEventListener("focusin",this.handleGlobalEventForSubmenusBound),document.body.addEventListener("click",this.handleGlobalEventForSubmenusBound),document.body.addEventListener("touchstart",this.handleGlobalEventForSubmenusBound)),this.currentSubmenu=n?e:null,null===this.currentSubmenu&&(window.removeEventListener("focusin",this.handleGlobalEventForSubmenusBound),document.body.removeEventListener("click",this.handleGlobalEventForSubmenusBound),document.body.removeEventListener("touchstart",this.handleGlobalEventForSubmenusBound))}},{key:"toggleMobilePopup",value:function(e){var t=this,n=!this.isOpen;if(void 0!==e){if(e===this.isOpen)return;n=e}this.mobileToggleButton.setAttribute("aria-expanded",n?"true":"false"),this.mobileToggleButton.setAttribute("aria-label",n?"Close menu":"Open menu"),setTimeout(function(){n?window.addEventListener("click",t.handleGlobalClickForMobileMenuBound):window.removeEventListener("click",t.handleGlobalClickForMobileMenuBound)},0),this.isOpen=n}},{key:"handleGlobalClickForMobileMenu",value:function(e){this.menu.contains(e.target)||(e.preventDefault(),this.toggleMobilePopup(!1))}}]),e}();(0,u.default)(function(){var e=(0,o.$)(".menu");e&&new s(e)})},pvPu:function(e,t){},rhwI:function(e,t){},rsl1:function(e,t,n){"use strict";n("B2fU")},sFUq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return new Promise(function(t){"loading"!==document.readyState?(e(),t()):document.addEventListener("DOMContentLoaded",function(){e(),t()})})}},vGYV:function(e,t,n){"use strict";n("PSGk"),n("zlO1"),n("5EYE"),n("rsl1"),n("ofVl"),n("akH5"),n("eF2i"),n("Gnd+");var r,i=n("y8sO");(0,((r=i)&&r.__esModule?r:{default:r}).default)()},vedj:function(e,t){},vg6f:function(e,t){},w6Uh:function(e,t){},xWBZ:function(e,t){},y8sO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o=c(n("Xxa5")),a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=(r=o.default.mark(function e(){var t,n,r,i;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=0,n=l.length;case 1:if(!(t<n)){e.next=12;break}if(r=l[t],"PRE"===(i=r.parentElement).tagName){e.next=6;break}return e.abrupt("continue",9);case 6:if(!i.className.match(/(^|\b)language-([^\b]|$)/)){e.next=8;break}return e.abrupt("continue",9);case 8:Prism.highlightElement(r);case 9:t++,e.next=1;break;case 12:case"end":return e.stop()}},e,this)}),i=function(){var e=r.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});t(u)}("next")})},function(){return i.apply(this,arguments)}),s=c(n("gc1H"));function c(e){return e&&e.__esModule?e:{default:e}}var l=document.getElementsByTagName("code");function d(){var e=(0,s.default)(u,250);new MutationObserver(e).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),e()}var f=function(e){var t=a(e,2)[1];Prism.languages.kirbytext=Prism.languages.extend("markdown",{}),Prism.languages.insertBefore("kirbytext","prolog",{kirbytag:{pattern:/\([a-z0-9_-]+:.*?\)/i,inside:{"kirbytag-bracket":/^\(|\)$/,"kirbytag-name":{pattern:/^[a-z0-9_-]+:/i},"kirbytag-attr":{pattern:/([^:]\s+)[a-z0-9_-]+:/i,lookbehind:!0}}}}),Prism.languages.kirbycontent={delimiter:/\n----\s*\n*/,property:{pattern:/(^\n*|\n----\s*\n*)[a-zA-Z0-9_\-\u0020]+:/,lookbehind:!0}},Prism.plugins.customClass.prefix("code-"),Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(e){var n=document.createElement("a");n.classList.add("link-reset"),n.insertAdjacentHTML("beforeend",'<svg viewBox="0 0 16 16" width="16" height="16" class="icon"><path d="M10,4H2C1.4,4,1,4.4,1,5v10c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V5C11,4.4,10.6,4,10,4z"></path> <path data-color="color-2" d="M14,0H4v2h9v11h2V1C15,0.4,14.6,0,14,0z"></path></svg>');var r,i=document.createElement("span");function o(){setTimeout(function(){i.textContent="Copy"},5e3)}return i.textContent="Copy",n.appendChild(i),(r=new t(n,{text:function(){return e.code}})).on("success",function(){i.textContent="Copied!",o()}),r.on("error",function(){i.textContent="Press Ctrl+C/⌘+C to copy",o()}),n})};t.default=function(){for(var e,t=document.querySelectorAll('pre code[class^="language-"], pre code[class*=" language-"], pre.code > code'),r=/(?:^| )language(-[a-z])( |$)*/i,i=0,o=t.length;i<o&&(e=t[i]);i++)r.test(e.className)||e.classList.add("language-plaintext");Promise.all([n.e(0).then(n.bind(null,"h+jg")),n.e(0).then(n.bind(null,"TQvf"))]).then(f).then(d)}},zlO1:function(e,t,n){(function(){"use strict";"undefined"!=typeof document&&function(e){var t;function n(){t||(t=!0,e())}["interactive","complete"].indexOf(document.readyState)>=0?e():(t=!1,document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1))}(function(){var e=!0,t=!1,n=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function o(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(t){e=!1}function u(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(t){"html"!==t.target.nodeName.toLowerCase()&&(e=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",function(t){i(document.activeElement)&&o(document.activeElement),e=!0},!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("focus",function(t){var n,a,u;i(t.target)&&(e||(n=t.target,a=n.type,"INPUT"==(u=n.tagName)&&r[a]&&!n.readOnly||"TEXTAREA"==u&&!n.readOnly||n.isContentEditable))&&o(t.target)},!0),document.addEventListener("blur",function(e){var r;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(t=!0,window.clearTimeout(n),n=window.setTimeout(function(){t=!1,window.clearTimeout(n)},100),(r=e.target).hasAttribute("data-focus-visible-added")&&(r.classList.remove("focus-visible"),r.removeAttribute("data-focus-visible-added")))},!0),document.addEventListener("visibilitychange",function(n){"hidden"==document.visibilityState&&(t&&(e=!0),u())},!0),u(),document.body.classList.add("js-focus-visible")})})()},zlsc:function(e,t){}});
//# sourceMappingURL=index.js.map