!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var i=u("6JpON"),a=document.querySelector('input[name="delay"]'),r=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]'),l=document.querySelector('button[type="submit"]'),d=1,f=0;function s(e,n){return new Promise((function(t,o){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}))}function p(){d=0,a.value="",r.value="",c.value="",f=0}l.addEventListener("click",(function(n){f=Number(a.value),n.preventDefault(),setTimeout((function(){s(d,f).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms")),d++,f+=Number(r.value)})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms")),d++,f+=Number(r.value)}));var n=setInterval((function(){return s(d,f).then((function(t){var o=t.position,u=t.delay;d>=c.value&&(clearInterval(n),p()),e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(u,"ms")),d++,f+=Number(r.value)})).catch((function(t){var o=t.position,u=t.delay;d>=c.value&&(clearInterval(n),p()),e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(u,"ms")),d++,f+=Number(r.value)}))}),r.value)}),a.value)}))}();
//# sourceMappingURL=03-promises.9c0dfbed.js.map
