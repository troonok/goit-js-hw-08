!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||a.default(e,t)||l.default(e,t)||f.default()};var u=c(o("8slrw")),a=c(o("7AJDX")),f=c(o("ifqQW")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s,d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",m=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,b=/^0o[0-7]+$/i,g=parseInt,x="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,_=x||O||Function("return this")(),j=Object.prototype.toString,S=Math.max,h=Math.min,w=function(){return _.Date.now()};function M(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function m(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function v(e){return l=e,a=setTimeout(b,t),c?m(e):u}function y(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function b(){var e=w();if(y(e))return g(e);a=setTimeout(b,function(e){var r=t-(e-f);return s?h(r,i-(e-l)):r}(e))}function g(e){return a=void 0,d&&n?m(e):(n=o=void 0,u)}function x(){var e=w(),r=y(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return v(f);if(s)return a=setTimeout(b,t),m(f)}return void 0===a&&(a=setTimeout(b,t)),u}return t=I(t)||0,T(r)&&(c=!!r.leading,i=(s="maxWait"in r)?S(I(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},x.flush=function(){return void 0===a?u:g(w())},x}function T(t){var r=void 0===t?"undefined":e(d)(t);return!!t&&("object"==r||"function"==r)}function I(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(T(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=T(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var n=y.test(t);return n||b.test(t)?g(t.slice(2),n?2:8):v.test(t)?NaN:+t}s=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return T(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),M(e,t,{leading:n,maxWait:t,trailing:o})};var N={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea"),button:document.querySelector(".feedback-form button")},k="feedback-form-state",A=JSON.parse(localStorage.getItem(k))||{};if(N.form.addEventListener("input",e(s)((function(e){A[e.target.name]=e.target.value,localStorage.setItem(k,JSON.stringify(A))}),500)),N.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(A),N.form.reset(),localStorage.removeItem(k)})),null!==localStorage.getItem(k))try{Object.entries(A).forEach((function(t){var r=e(i)(t,2),n=r[0],o=r[1];N.form[n].value=o||""}))}catch(e){console.log(e.name),console.log(e.message)}}();
//# sourceMappingURL=03-feedback.7c88868a.js.map
