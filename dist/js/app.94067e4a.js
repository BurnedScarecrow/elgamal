(function(t){function e(e){for(var i,o,a=e[0],c=e[1],h=e[2],u=0,v=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&v.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(v.length)v.shift()();return r.push.apply(r,h||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/elgamal/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var h=0;h<a.length;h++)e(a[h]);var l=c;r.push([1,"chunk-vendors"]),n()})({0:function(t,e){},1:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show?t._e():n("button",{on:{click:function(e){t.show=!0}}},[t._v("Начать")]),t.show?n("Main"):t._e()],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h1",[t._v("ELGAMAL Signature Algorithm")]),n("div",{staticClass:"main"},[n("div",{staticClass:"left"},[n("h2",[t._v("Отправитель")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.m,expression:"m"}],staticClass:"text",attrs:{cols:"30",rows:"10"},domProps:{value:t.m},on:{input:function(e){e.target.composing||(t.m=e.target.value)}}}),n("button",{on:{click:t.sign}},[t._v("Подписать")]),n("br"),t._v(" Открытый ключ: "),n("div",[t._v("p: "+t._s(t.p))]),n("div",[t._v("g: "+t._s(t.g))]),n("div",[t._v("y: "+t._s(t.y))]),n("br"),t._v(" Закрытый ключ: "),n("div",[t._v("x: "+t._s(t.x))]),n("br"),t._v(" Дайджест: "),n("div",[t._v(t._s(t.hash))]),n("br"),t._v(" Сессионный ключ: "),n("div",[t._v("k: "+t._s(t.k))]),n("br"),t._v(" Шифротекст: "),n("ol",{attrs:{type:"A"}},[n("li",[t._v(t._s(t.A))]),n("li",[t._v(t._s(t.B))])])]),n("div",{staticClass:"right"},[n("h2",[t._v("Получатель")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.send,expression:"send"}],staticClass:"text",attrs:{cols:"30",rows:"10"},domProps:{value:t.send},on:{input:function(e){e.target.composing||(t.send=e.target.value)}}}),n("br"),n("div",[t._v("Вычисляемые значения")]),n("hr",{attrs:{width:"100%"}}),n("table",{attrs:{cellspacing:"0"}},[n("tr",[n("td",[t._v("Дайджест")]),n("td",[t._v(t._s(t.hash1))])]),n("tr",[t._m(0),n("td",[t._v(t._s(t.check1(t.y,t.A,t.B,t.p)))])]),n("tr",[t._m(1),n("td",[t._v(t._s(t.check2(t.g,t.hash1,t.p)))])]),n("tr",[n("td",{class:{green:t.check(),red:!t.check()},attrs:{colspan:"2"}},[t.check()?n("div",[t._v("Verified signature")]):n("div",[t._v("Invalid signature")])])])]),n("br"),n("br"),n("div",[t._v("Получаемые значения")]),n("hr",{attrs:{width:"100%"}}),t._v(" Открытый ключ: "),n("div",[t._v("p: "+t._s(t.p))]),n("div",[t._v("g: "+t._s(t.g))]),n("div",[t._v("y: "+t._s(t.y))]),n("br"),t._v(" Шифротекст: "),n("div",[n("ol",{attrs:{type:"A"}},[n("li",[t._v(t._s(t.A))]),n("li",[t._v(t._s(t.B))])])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[t._v("y"),n("sup",[t._v("A")]),t._v(" * A"),n("sup",[t._v("B")]),t._v(" (mod p)")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[t._v("g"),n("sup",[t._v("hash")]),t._v(" (mod p)")])}],c=(n("d3b7"),n("25f0"),n("159b"),n("ac1f"),n("1276"),n("5c1a")),h=n.n(c),l=n("7409"),u={name:"Main",data:function(){return{m:"SECRET Message",send:"",prime:null,p:null,g:null,x:null,y:null,k:null,A:null,B:null,salt:null,hash:null,hash1:null,bits:24}},watch:{m:function(t){this.send=this.m,this.sign()},send:function(t){this.check()}},mounted:function(){this.send=this.m,this.start()},methods:{start:function(){var t=this;h.a.prime.generateProbablePrime(this.bits,(function(e,n){t.prime=n.toString(10),t.p=l(t.prime)})),this.g=l(this.getRandomInt(this.prime)),this.x=l(this.getRandomInt(this.prime-1)),this.y=this.g.modPow(this.x,this.p)},getRandomInt:function(t){return BigInt(Math.floor(Math.random()*t).toString())},sign:function(){var t=this;if(this.m){var e=0;this.m.split("").forEach((function(t){e+=parseInt(t.charCodeAt(0))})),this.hash=l(e%this.p),h.a.prime.generateProbablePrime(this.bits,(function(e,n){t.k=l(n.toString(10))}));while(l(this.p-1).lesser(this.k)||l.gcd(this.k,this.p-1).notEquals(1))h.a.prime.generateProbablePrime(this.bits,(function(e,n){t.k=l(n.toString(10))}));this.A=this.g.modPow(this.k,this.p);var n=l(this.k).modInv(this.p-1),i=l(this.p-1),s=l(this.x*this.A).mod(i);console.log(s);var r=l(l(l(this.hash)-s).mod(i)+i);console.log(r),this.B=l(l(r).multiply(n)).mod(i)}else this.hash=0},check1:function(t,e,n,i){return t&&e&&n&&i?l(l(t).modPow(l(e),l(i))*l(e).modPow(l(n),l(i))).mod(l(i)):""},check2:function(t,e,n){return t&&e&&n?l(t).modPow(l(e),l(n)):""},check:function(){if(this.send){var t=0;return this.send.split("").forEach((function(e){t+=parseInt(e.charCodeAt(0))})),this.hash1=l(t%this.p),this.check1(this.y,this.A,this.B,this.p).value==this.check2(this.g,this.hash1,this.p).value}this.hash1=0}}},v=u,d=(n("5c13"),n("2877")),p=Object(d["a"])(v,o,a,!1,null,"cab7aa8e",null),f=p.exports,_={name:"App",data:function(){return{show:!1}},components:{Main:f}},m=_,g=(n("5c0b"),Object(d["a"])(m,s,r,!1,null,null,null)),b=g.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5c13":function(t,e,n){"use strict";n("fd62")},"9c0c":function(t,e,n){},fd62:function(t,e,n){}});
//# sourceMappingURL=app.94067e4a.js.map