(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),l=n(18),c=n.n(l),o=(n(31),n(19)),s=n(13),u=n.n(s),i=n(39);function m(e){var t=e.post;return r.a.createElement("div",{className:"my-5 text-light bd-secondary"},r.a.createElement("div",null,r.a.createElement("h2",{className:"text-success"},t.title),r.a.createElement("h5",{className:"text-primary"},"Written by: ".concat(t.user.name)),r.a.createElement("p",null,t.body)))}function d(){var e=Object(o.a)(["\n  query POSTSQuery {\n    posts {\n      id\n      userId\n      title\n      body,\n      user{\n        name\n      }\n    }\n  }\n"]);return d=function(){return e},e}var E=u()(d());function p(){return r.a.createElement(i.a,{query:E},(function(e){var t=e.data,n=e.loading,a=e.error;return n?r.a.createElement("h4",null,"Loading..."):(a&&console.log(a),r.a.createElement("div",{className:"my-5 text-light bd-secondary"},t.posts.map((function(e){return r.a.createElement(m,{key:e.id,post:e})})),console.log(t)))}))}var g=n(24),y=n(6),h=new g.a({uri:"/graphql"});var b=function(){return r.a.createElement(y.a,{client:h},r.a.createElement("div",{className:"container bg-dark"},r.a.createElement("h1",{className:"text-light text-center"},"The Blog"),r.a.createElement(p,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.cb18d857.chunk.js.map