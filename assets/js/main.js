/*! For license information please see main.js.LICENSE.txt */
"use strict";(self.webpackChunksuper_hero=self.webpackChunksuper_hero||[]).push([[548],{334:(t,e,r)=>{var n=r(538);const o={name:"Powerstats",props:{potencia:{type:Object,required:!0}}};var a=r(900);const i=(0,a.Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"powerstats"},[r("p",{staticClass:"text-white text-center text-sm mt-3 font-medium rounded bg-blue-500"},[r("b",[t._v("Inteligencia")]),t._v(":\n    "),"null"!=t.potencia.intelligence?r("span",[t._v(t._s(t.potencia.power))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"},[r("b",[t._v("Fuerza")]),t._v(":\n    "),"null"!=t.potencia.strength?r("span",[t._v(t._s(t.potencia.power))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"},[r("b",[t._v("Velocidad")]),t._v(":\n    "),"null"!=t.potencia.speed?r("span",[t._v(t._s(t.potencia.power))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"},[r("b",[t._v("Duración")]),t._v(":"),"null"!=t.potencia.durability?r("span",[t._v(t._s(t.potencia.power))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"},[r("b",[t._v("Poder")]),t._v(":"),"null"!=t.potencia.power?r("span",[t._v(t._s(t.potencia.power))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"},[r("b",[t._v("Combate")]),t._v(": "+t._s(t.potencia.combat)+"\n  ")])])}),[],!1,null,null,null).exports;const s={name:"Biography",props:{bio:{type:Object,required:!0}}};const c=(0,a.Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"apariencia mt-2 bg-gray-100 hover:bg-blue-500 rounded-md px-4 p-2 hover:shadow-2xl group transition duration-300"},[r("h2",{staticClass:"text-sm text-blue-400 group-hover:text-white"},[t._v("Biografía")]),t._v(" "),r("div",{},[r("div",{staticClass:"info-hero text-sm group-hover:text-white"},[r("p",{staticClass:"mt-2"},[r("b",[t._v("Alter-egos:")]),t._v(" "),"null"!=t.bio.biography["alter-egos"]?r("span",[t._v(t._s(t.bio.biography["alter-egos"]))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"mt-2"},[r("b",[t._v("Alias: ")]),t._v(" "),t._l(t.bio.biography.aliases,(function(e){return r("span",{key:e+Math.random()},[t._v("\n          "+t._s(e)+"\n        ")])}))],2),t._v(" "),r("p",{staticClass:"mt-2"},[r("b",[t._v("Lugar de nacimiento:")]),t._v(" "),"null"!=t.bio.biography["place-of-birth"]?r("span",[t._v(t._s(t.bio.biography["place-of-birth"]))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"mt-2"},[r("b",[t._v("Primera aparición:")]),t._v(" "),"null"!=t.bio.biography["first-appearance"]?r("span",[t._v(t._s(t.bio.biography["first-appearance"]))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"mt-2"},[r("b",[t._v("Publicado por:")]),t._v(" "),"null"!=t.bio.biography.publisher?r("span",[t._v(t._s(t.bio.biography.publisher))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"mt-2"},[r("b",[t._v("Tendencia:")]),t._v(" "),"null"!=t.bio.biography.alignment?r("span",[t._v(t._s(t.bio.biography.alignment))]):r("span",[t._v("No registra")])])])])])}),[],!1,null,null,null).exports;const l={name:"Appearance",props:{bio:{type:Object,required:!0}}};const u=(0,a.Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"apariencia mt-2 bg-gray-100 hover:bg-blue-500 rounded-md px-4 p-2 hover:shadow-2xl group transition duration-300"},[r("h2",{staticClass:"text-sm text-blue-400 group-hover:text-white"},[t._v("Apariencia")]),t._v(" "),r("div",{},[r("div",{staticClass:"info-hero text-sm text-gray-700 group-hover:text-white"},[r("p",{staticClass:"mt-2"},[r("b",[t._v("Genero:")]),t._v(" "),"null"!=t.bio.appearance.gender?r("span",[t._v("\n          "+t._s(t.bio.appearance.gender))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"mt-2"},[r("b",[t._v("Raza:")]),t._v(" "),"null"!=t.bio.appearance.race?r("span",[t._v("\n          "+t._s(t.bio.appearance.race))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"mt-2"},[r("b",[t._v("Altura:")]),"null"!=t.bio.appearance.height?r("span",[t._v("\n          "+t._s(t.bio.appearance.height))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"mt-2"},[r("b",[t._v("Color de ojos:")]),"null"!=t.bio.appearance["eye-color"]?r("span",[t._v("\n          "+t._s(t.bio.appearance["eye-color"]))]):r("span",[t._v("No registra")])]),t._v(" "),r("p",{staticClass:"mt-2"},[r("b",[t._v("Color de cabello:")]),"null"!=t.bio.appearance["hair-color"]?r("span",[t._v("\n          "+t._s(t.bio.appearance["hair-color"]))]):r("span",[t._v("No registra")])])])])])}),[],!1,null,null,null).exports;const p={name:"Work",props:{bio:{type:Object,required:!0}}};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function p(){}function f(){}function d(){}var _={};s(_,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==e&&r.call(g,o)&&(_=g);var b=d.prototype=p.prototype=Object.create(_);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==h(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=d,s(b,"constructor",d),s(d,"constructor",f),f.displayName=s(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,i,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(b),s(b,i,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function f(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}const d={data:function(){return{hero_id:"",token:"",heroe:""}},components:{Powerstats:i,Bio:c,Appearance:u,Work:(0,a.Z)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"apariencia mt-2 bg-gray-100 hover:bg-blue-500 rounded-md px-4 p-2 hover:shadow-2xl group transition duration-300"},[r("h2",{staticClass:"text-sm text-blue-400 group-hover:text-white"},[t._v("Trabajo")]),t._v(" "),r("div",{},[r("div",{staticClass:"info-hero text-sm group-hover:text-white"},[r("p",{staticClass:"mt-2"},[r("b",[t._v("Ocupación:")]),t._v(" "),r("span",[t._v(t._s(t.bio.work.occupation)+" ")])])])])])}),[],!1,null,null,null).exports},mounted:function(){this.hero_id=SHORTCODE_ATTS.id>0?SHORTCODE_ATTS.id:1,this.token=SHORTCODE_ATTS.token,this.getHero()},methods:{getHero:function(){var t,e=this;return(t=v().mark((function t(){var r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.superheroapi.com/api.php/".concat(e.token,"/").concat(e.hero_id)).then((function(t){return t.json()}));case 3:r=t.sent,e.heroe=r,console.log("El token es "+e.token),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,s,"next",t)}function s(t){f(a,n,o,i,s,"throw",t)}i(void 0)}))})()}}};const _={name:"App",components:{Card:(0,a.Z)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-100 border-2 border-gray-300 rounded-md grid-cols-2 space-x-4 min-w-full p-6 flex"},[r("div",{},[r("img",{staticClass:"rounded-md h-96 border-4 border-blue-500 shadow-xl shadow-slate-700",attrs:{src:t.heroe.image.url,alt:""}}),t._v(" "),r("Powerstats",{attrs:{potencia:t.heroe.powerstats}})],1),t._v(" "),r("div",{staticClass:"bg-gray-200 p-2 rounded-md w-96"},[r("div",{staticClass:"px-3 py-1 rounded-md bg-blue-500"},[r("h1",{staticClass:"text-left text-white text-2xl font-semibold"},[t._v("\n        "+t._s(t.heroe.biography["full-name"])+"\n      ")])]),t._v(" "),r("Bio",{attrs:{bio:t.heroe}}),t._v(" "),r("Appearance",{attrs:{bio:t.heroe}}),t._v(" "),r("Work",{attrs:{bio:t.heroe}})],1)])}),[],!1,null,null,null).exports}};const m=(0,a.Z)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("Card")],1)}),[],!1,null,null,null).exports;new n.Z({el:"#hero",render:function(t){return t(m)}})}},t=>{t.O(0,[931],(()=>{return e=334,t(t.s=e);var e}));t.O()}]);