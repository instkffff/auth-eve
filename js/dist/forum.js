module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/LogInButtons"]},function(t,e){t.exports=flarum.core.compat["components/LogInButton"]},,,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(0),u=n.n(r),a=n(2),f=n.n(a),i=n(3),c=n.n(i);u.a.initializers.add("instkffff-auth-eve",function(){Object(o.extend)(f.a.prototype,"items",function(t){t.add("eveonline",m(c.a,{className:"Button LogInButton--eve",icon:"fab fa-github",path:"/auth/eve"},u.a.translator.trans("instkffff-auth-eve.forum.log_in.with_eve_button")))})})}]);
//# sourceMappingURL=forum.js.map