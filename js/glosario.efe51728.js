(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario","chunk-4e410830"],{"13d5":function(t,n,r){"use strict";var e=r("23e7"),a=r("d58f").left,o=r("a640"),i=r("2d00"),s=r("605d"),c=o("reduce"),u=!s&&i>79&&i<83;e({target:"Array",proto:!0,forced:!c||u},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,n,r){var e=r("da84"),a=r("fdbc"),o=r("17c2"),i=r("9112");for(var s in a){var c=e[s],u=c&&c.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,n,r){"use strict";var e=r("b727").forEach,a=r("a640"),o=a("forEach");t.exports=o?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"3cd8":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container-fluid banner-interno"},[r("div",{staticClass:"banner-interno__fondo"}),r("div",{staticClass:"container"},[r("div",{staticClass:"banner-interno__titulo py-5"},[r("h3",{domProps:{innerHTML:t._s(t.titulo)}}),r("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.subTitulo)}})])])])},a=[],o={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},i=o,s=(r("8385"),r("2877")),c=Object(s["a"])(i,e,a,!1,null,null,null);n["default"]=c.exports},"4e82":function(t,n,r){"use strict";var e=r("23e7"),a=r("1c0b"),o=r("7b0b"),i=r("d039"),s=r("a640"),c=[],u=c.sort,l=i((function(){c.sort(void 0)})),f=i((function(){c.sort(null)})),d=s("sort"),b=l||!f||!d;e({target:"Array",proto:!0,forced:b},{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),a(t))}})},"56e2":function(t,n,r){},7716:function(t,n,r){"use strict";r("56e2")},8385:function(t,n,r){"use strict";r("d36b")},b64b:function(t,n,r){var e=r("23e7"),a=r("7b0b"),o=r("df75"),i=r("d039"),s=i((function(){o(1)}));e({target:"Object",stat:!0,forced:s},{keys:function(t){return o(a(t))}})},c92c:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"curso-main-container glosario"},[r("BannerInterno",{staticClass:"text-uppercase",attrs:{icono:"fas fa-atlas",subTitulo:"GLOSARIO",titulo:"Unidad 3. Desarrollo integral y contextos de aprendizaje en la adultez y la vejez"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return r("div",{key:"letra-"+n.letra,staticClass:"glosario__letra-item mb-2"},[r("div",{staticClass:"glosario__letra-item__letra me-4"},[r("div",{staticClass:"glosario__letra-item__letra__icono"},[r("span",[t._v(t._s(n.letra))])])]),r("div",{staticClass:"glosario__letra-item__texto"},t._l(n.terminos,(function(n){return r("p",{staticClass:"mt-3 mb-4"},[t._m(0,!0),r("strong",{domProps:{innerHTML:t._s(n.terminoHtml||n.termino)}}),r("strong",[t._v(": ")]),r("span",{domProps:{innerHTML:t._s(n.significado)}})])})),0)])})),0)],1)},a=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("strong",[r("i",{staticClass:"lista-ul__vineta"})])}],o=r("2909"),i=(r("d3b7"),r("159b"),r("fb6a"),r("13d5"),r("4e82"),r("b64b"),r("d81d"),r("7db0"),r("3cd8")),s=r("ff6a"),c={name:"Glosario",components:{BannerInterno:i["default"]},mixins:[s["a"]],computed:{glosarioData:function(){return this.$config.glosario},orderedData:function(){var t=this,n=Object(o["a"])(this.glosarioData);n.forEach((function(t){t.significado=t.significado.charAt(0).toLowerCase()+t.significado.slice(1)}));var r=Object(o["a"])(n).reduce((function(n,r){var e=t.quitarAcentos(r.termino.toLowerCase())[0];return n[e]?n[e].terminos.push(r):n[e]={letra:e,terminos:[r]},n}),{}),e=Object.keys(r).sort(),a=[];return e.forEach((function(n){var e=r[n],o=e.terminos;if(o.length>1){var i=[],s=e.terminos.map((function(t){return t.termino})).sort((function(n,r){var e=t.quitarAcentos(n).toLowerCase(),a=t.quitarAcentos(r).toLowerCase();return e<a?-1:a<e?1:0}));s.forEach((function(t){i.push(o.find((function(n){return n.termino===t})))})),o=i}a.push({letra:e.letra.toUpperCase(),terminos:o})})),a}}},u=c,l=(r("7716"),r("2877")),f=Object(l["a"])(u,e,a,!1,null,null,null);n["default"]=f.exports},d36b:function(t,n,r){},d58f:function(t,n,r){var e=r("1c0b"),a=r("7b0b"),o=r("44ad"),i=r("50c4"),s=function(t){return function(n,r,s,c){e(r);var u=a(n),l=o(u),f=i(u.length),d=t?f-1:0,b=t?-1:1;if(s<2)while(1){if(d in l){c=l[d],d+=b;break}if(d+=b,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=b)d in l&&(c=r(c,l[d],d,u));return c}};t.exports={left:s(!1),right:s(!0)}}}]);
//# sourceMappingURL=glosario.efe51728.js.map