(this["webpackJsonpmercury-works"]=this["webpackJsonpmercury-works"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),r=c.n(s),i=(c(11),c(4)),o=c.n(i),j=c(6),l=c(2),h=c(0);var u=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],u=r[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),p=d[0],O=d[1],m=Object(n.useState)(!1),x=Object(l.a)(m,2),f=x[0],k=x[1],v=Object(n.useState)(!1),N=Object(l.a)(v,2),g=N[0],w=N[1];function S(){return y.apply(this,arguments)}function y(){return(y=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),O(!0),e.prev=2,"https://official-joke-api.appspot.com/jokes/random",e.next=6,fetch("https://official-joke-api.appspot.com/jokes/random");case 6:return t=e.sent,e.next=9,t.json();case 9:n=e.sent,a(n.setup),u(n.punchline),console.log(c),console.log(i),O(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),console.error(e.t0),w(!0);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){S()}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("button",{onClick:S,className:"header-btn",children:"Get a New Random Joke"}),Object(h.jsx)("a",{className:"header-link",href:"https://github.com/15Dkatz/official_joke_api ",target:"blank",children:"View API Docs"})]}),Object(h.jsx)("div",{className:"divider"}),Object(h.jsxs)("main",{className:"main",children:[g&&Object(h.jsx)("p",{className:"error-text",children:"There was an error loading your joke."}),p&&!g&&Object(h.jsx)("p",{className:"loading-text",children:"Loading your joke..."}),!p&&Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"joke-container",children:Object(h.jsx)("p",{className:"joke",children:c})}),Object(h.jsx)("div",{className:"punchline-btn-container",children:Object(h.jsxs)("button",{onClick:function(){!0===f?k(!1):!1===f&&k(!0)},className:"punchline-btn",children:[f?Object(h.jsx)("span",{children:"Hide"}):Object(h.jsx)("span",{children:"Show"})," Punchline"]})}),Object(h.jsx)("div",{className:"punchline-text-container",children:f&&Object(h.jsx)("p",{className:"punchline",children:i})})]})]})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.b6ff7e1e.chunk.js.map