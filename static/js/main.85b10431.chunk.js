(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(26),r=c.n(s),j=(c(33),c(9)),i=c(2),l=c(0),o=function(){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-2",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:"Ally React"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)(j.b,{to:"/",className:"nav-link",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/about",className:"nav-link",children:"About"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/contact",className:"nav-link",children:"Contact"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/cart",className:"nav-link",children:"Cart"})})]})})]})},b=function(){return Object(l.jsx)("h5",{children:"Footer"})},d=c(28),h=c(8),O=c(12),u=c.n(O),m=(c(58),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(h.a)(s,2),i=(r[0],r[1],Object(a.useState)(!0)),o=Object(h.a)(i,2),b=(o[0],o[1],Object(a.useState)(0)),O=Object(h.a)(b,2),m=(O[0],O[1],Object(a.useState)("Sachin")),x=Object(h.a)(m,2);x[0],x[1];return Object(a.useEffect)((function(){u()("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(e){n(e.data)})).catch((function(e){return alert(e)})),console.log("componentDidmount")}),[]),Object(a.useEffect)((function(){console.log("componentDidmount and DidUpdate")})),Object(a.useEffect)((function(){return function(){}}),[]),Object(l.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:c.length&&c.map((function(e){return Object(l.jsx)("div",{class:"card m-2",style:{width:"18rem"},children:Object(l.jsxs)(j.b,{to:Object(d.a)({pathname:"/products/".concat(e.id)},e),children:[Object(l.jsx)("img",{class:"card-img-top",src:e.preview,alt:"Card image cap"}),Object(l.jsxs)("div",{class:"card-body",children:[Object(l.jsx)("h5",{class:"card-title",children:e.name}),Object(l.jsx)("p",{class:"card-text card-para",children:e.description}),Object(l.jsx)("a",{href:"#",class:"btn btn-primary",children:"Go somewhere"})]})]})},e.id)}))})}),x=function(){return Object(l.jsxs)("div",{className:"jumbotron p-4",children:[Object(l.jsx)("h1",{className:"display-4",children:"Products"}),Object(l.jsx)("p",{className:"lead",children:Object(l.jsx)("strong",{children:"This is our React Project"})}),Object(l.jsx)("hr",{className:"my-4"}),Object(l.jsx)("p",{className:"lead",children:Object(l.jsx)("a",{className:"btn btn-primary btn-lg",href:"#",role:"button",children:"Learn more"})})]})},p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("br",{}),Object(l.jsx)(m,{})]})},f=function(){return Object(l.jsx)("h1",{children:"About"})},v=function(){return Object(l.jsx)("h1",{children:"Cart"})},g=function(){return Object(l.jsx)("h1",{children:"Contact"})},N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"PLP Page"}),Object(l.jsx)(m,{})]})},y=(c(59),function(e){var t=Object(a.useState)({}),c=Object(h.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),j=Object(h.a)(r,2),i=j[0],o=j[1],b=Object(a.useState)(!1),d=Object(h.a)(b,2);d[0],d[1];console.log(e);var O=e.match.params.id;return Object(a.useEffect)((function(){u()("".concat("https://5d76bf96515d1a0014085cf9.mockapi.io/product/").concat(O)).then((function(e){s(e.data),o(e.data.preview)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{children:["Product Details - ",O]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-6",children:Object(l.jsx)("img",{src:i,style:{width:"100%",height:"auto"}})}),Object(l.jsxs)("div",{className:"col-6",children:[Object(l.jsx)("h1",{children:n.name}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsx)("h4",{children:n.brand})}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsxs)("h4",{children:["Price : ",n.price]})}),Object(l.jsxs)("div",{className:"mt-4",children:[Object(l.jsx)("h4",{children:"Description"}),Object(l.jsx)("p",{children:n.description})]}),Object(l.jsxs)("div",{className:"mt-4",children:[Object(l.jsx)("h4",{children:"Product Preview"}),Object(l.jsx)("div",{className:"row",children:n.photos&&n.photos.map((function(e){return Object(l.jsx)("div",{className:"col-2 m-2",children:Object(l.jsx)("img",{class:"img-preview",src:e,onClick:function(){o(e)},style:{height:"200px",width:"auto"}})})}))})]}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsx)("button",{className:"btn btn-success btn-lg",children:"Add to Cart"})})]})]})]})}),w=function(){return Object(l.jsxs)(j.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,component:p}),Object(l.jsx)(i.a,{path:"/react-pages",component:p}),Object(l.jsx)(i.a,{path:"/about",component:f}),Object(l.jsx)(i.a,{path:"/contact",component:g}),Object(l.jsx)(i.a,{path:"/cart",component:v}),Object(l.jsx)(i.a,{path:"/products",exact:!0,component:N}),Object(l.jsx)(i.a,{path:"/products/:id",component:y}),Object(l.jsx)(i.a,{component:function(){return Object(l.jsx)("h1",{children:"404"})}})]}),Object(l.jsx)(b,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};c(60);r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),k()}},[[61,1,2]]]);
//# sourceMappingURL=main.85b10431.chunk.js.map