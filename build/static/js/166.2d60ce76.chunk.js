webpackJsonp([166],{984:function(t,e,n){"use strict";function o(t,e,n,o){void 0===o&&(o=0),h.has(t)!==n&&(n?i(t,e,o):a(t,e))}function r(t){return t===t.getRootNode().activeElement}function i(t,e,n){var o=e.parentNode,r=e.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),h.set(t,r);var i="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d("+i+"px,"+n+"px,0) scale(0)"}function a(t,e){var n=h.get(t);n&&(h.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""}function u(t,e,n){if(!n||!e)return function(){};var i=function(n){r(e)&&o(t,e,n)},a=function(){return o(t,e,!1)},u=function(){return i(!0)},c=function(){return i(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",c),e.addEventListener("blur",a),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",c),e.addEventListener("ionBlur",a)}}function c(t){function e(){i=!0}function n(){r=!0}function o(e){if(i)i=!1;else{var n=t.activeElement;if(n&&!n.matches(L)){var o=e.target;o!==n&&(o.matches(L)||o.closest(L)||(r=!1,setTimeout(function(){r||n.blur()},50)))}}}var r=!0,i=!1;return t.addEventListener("ionScrollStart",e),t.addEventListener("focusin",n,!0),t.addEventListener("touchend",o,!1),function(){t.removeEventListener("ionScrollStart",e,!0),t.removeEventListener("focusin",n,!0),t.removeEventListener("touchend",o,!1)}}function s(t,e,n){return l((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,window.innerHeight)}function l(t,e,n,o){var r=t.top,i=t.bottom,a=e.top+15,u=.5*Math.min(e.bottom,o-n)-i,c=a-r,s=Math.round(u<0?-u:c>0?-c:0),l=Math.abs(s);return{scrollAmount:s,scrollDuration:Math.min(400,Math.max(150,l/y)),scrollPadding:n,inputSafeY:4-(r-a)}}function d(t,e,n,o){var i,a=function(t){i=Object(g.j)(t)},u=function(a){if(i){var u=Object(g.j)(a);v(6,i,u)||r(e)||(a.preventDefault(),a.stopPropagation(),f(t,e,n,o))}};return t.addEventListener("touchstart",a,!0),t.addEventListener("touchend",u,!0),function(){t.removeEventListener("touchstart",a,!0),t.removeEventListener("touchend",u,!0)}}function f(t,e,n,r){var i=s(t,n,r);Math.abs(i.scrollAmount)<4?e.focus():(o(t,e,!0,i.inputSafeY),e.focus(),n.scrollByPoint(0,i.scrollAmount,i.scrollDuration).then(function(){o(t,e,!1,i.inputSafeY),e.focus()}))}function v(t,e,n){if(e&&n){var o=e.x-n.x,r=e.y-n.y;return o*o+r*r>t*t}return!1}function m(t,e){function n(t){p(t.target,e)}function o(t){p(t.target,0)}return t.addEventListener("focusin",n),t.addEventListener("focusout",o),function(){t.removeEventListener("focusin",n),t.removeEventListener("focusout",o)}}function p(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n[b];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[b]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}function E(t,e){function n(t){var e=(t.shadowRoot||t).querySelector("input"),n=t.closest("ion-content");if(e){if(n&&i&&!l.has(t)){var a=u(t,e,n);l.set(t,a)}n&&r&&!f.has(t)&&(a=d(t,e,n,o),f.set(t,a))}}var o=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",!0),a=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),l=new WeakMap,f=new WeakMap;a&&S&&c(t),s&&M&&m(t,o);for(var v=0,p=Array.from(t.querySelectorAll("ion-input"));v<p.length;v++)n(p[v]);t.body.addEventListener("ionInputDidLoad",function(t){n(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){var e,n;e=t.target,i&&((n=l.get(e))&&n(),l.delete(e)),r&&((n=f.get(e))&&n(),f.delete(e))})}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"startInputShims",function(){return E});var g=n(967),h=new WeakMap,L="input, textarea, [no-blur]",y=.3,b="$ionPaddingTimer",S=!0,M=!0}});
//# sourceMappingURL=166.2d60ce76.chunk.js.map