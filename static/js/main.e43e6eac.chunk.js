(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(6),i=c.n(s),o=(c(13),c(7)),u=c(3),j=(c(14),function(e){return Object(n.jsxs)("div",{className:"scoreBoard",children:[Object(n.jsxs)("p",{children:["Current Score: ",e.current]}),Object(n.jsxs)("p",{children:["Highest Score: ",e.best]})]})});var d=function(){var e,t=Object(r.useState)(0),c=Object(u.a)(t,2),a=c[0],s=c[1],i=Object(r.useState)(0),d=Object(u.a)(i,2),b=d[0],m=d[1],l=Object(r.useState)(null),O=Object(u.a)(l,2),h=O[0],f=O[1],p=Object(r.useState)([]),x=Object(u.a)(p,2),g=x[0],v=x[1];function y(e){g.indexOf(e.target.id)<0?(v((function(t){return[].concat(Object(o.a)(t),[e.target.id])})),s(a+1)):(a>b&&m(a),s(0),v((function(e){return[]})))}return Object(r.useEffect)((function(){fetch("https://api.scryfall.com/cards/search?q=cmc%3D10",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){f(e)}))}),[]),function(t){for(var c=[];c.length<3;){var r=parseInt(Math.random()*t);c.indexOf(r)<0&&c.push(r)}e=c.map((function(e){return Object(n.jsx)("div",{className:"col-sm-4",children:Object(n.jsx)("img",{onClick:y,id:e,src:h?"".concat(h.data[e].image_uris.normal):"Loading...",alt:h?"".concat(h.data[e].name):"Loading..."})},e)}))}(35),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Memory Game"}),Object(n.jsx)("p",{children:"Click a unique card each time. How many can you click in a row?"}),Object(n.jsx)(j,{current:a,best:b}),Object(n.jsx)("div",{className:"row",children:e})]})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e43e6eac.chunk.js.map