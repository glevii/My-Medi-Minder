(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{29:function(e,a,t){e.exports=t(63)},34:function(e,a,t){},35:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(26),o=t.n(r),c=(t(34),t(7)),s=t(27),i=t(1),m=t(9),u=t(10),p=(t(35),t(12)),f=t.n(p),d=function(e){return f.a.post("/api/user/signup",e)},g=function(e){return f.a.post("/api/user/login",e)},v=function(){return f.a.get("/api/user/current")};var E=function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),a=Object(c.a)(e,2),t=a[0],r=a[1];function o(e){var a=e.target,n=a.name,l=a.value;r(Object(u.a)(Object(u.a)({},t),{},Object(m.a)({},n,l)))}var s=function(e){console.log("handling submit"),e.preventDefault(),t.email&&t.password&&t.firstName?d({firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password}).then((function(){r({firstName:"",lastName:"",email:"",password:""}),window.location.href="/profile"})).catch((function(e){return console.log(e)})):console.log("missing validation")};return l.a.createElement("div",{className:"imgDiv"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3"},l.a.createElement("h2",null,"Sign Up Form"),l.a.createElement("form",{className:"signup",onSubmit:s},l.a.createElement("div",{className:"form-group name"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"First Name"),l.a.createElement("input",{onChange:o,name:"firstName",type:"text",className:"form-control",placeholder:"Name*"})),l.a.createElement("div",{className:"form-group name"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Last Name"),l.a.createElement("input",{onChange:o,name:"lastName",type:"text",className:"form-control",placeholder:"Name*"})),l.a.createElement("div",{className:"form-group email"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),l.a.createElement("input",{onChange:o,name:"email",type:"email",className:"form-control",placeholder:"user@gmail.com.au*"})),l.a.createElement("div",{className:"form-group password"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{onChange:o,name:"password",type:"password",className:"form-control",placeholder:"Password* (must be longer than 6 characters)"})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"btn btn-default",onClick:s},"Sign Up"))))))};var h=function(){return l.a.createElement("div",null,l.a.createElement(E,null))};t(54);var b=function(){var e=Object(n.useState)({email:"",password:""}),a=Object(c.a)(e,2),t=a[0],r=a[1];function o(e){var a=e.target,n=a.name,l=a.value;r(Object(u.a)(Object(u.a)({},t),{},Object(m.a)({},n,l)))}return l.a.createElement("div",{className:"welcome"},l.a.createElement("section",{id:"home",className:"main-banner parallaxie"},l.a.createElement("div",{className:"heading"},l.a.createElement("h1",null,"Welcome to My Medi-Tracker"),l.a.createElement("h3",{className:"cd-headline clip is-full-width"},l.a.createElement("span",null,"Lorem Ipsum Dolor Sit Amet "),l.a.createElement("div",{className:"btn-ber"},l.a.createElement("a",{className:"get_btn hvr-bounce-to-top",href:"#"},"Get started"),l.a.createElement("a",{className:"learn_btn hvr-bounce-to-top",href:"#"},"Learn More"))))),l.a.createElement("div",{className:"container login"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3"},l.a.createElement("h2",null,"Login Form"),l.a.createElement("form",{className:"login",onSubmit:function(e){e.preventDefault(),t.email&&t.password&&g({email:t.email,password:t.password}).then((function(e){r({email:"",password:""}),window.location.href="/profile"})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),l.a.createElement("input",{onChange:o,type:"text",name:"email",className:"form-control",placeholder:"Username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{onChange:o,type:"password",name:"password",className:"form-control",placeholder:"Password"})),l.a.createElement("button",{type:"submit",className:"btn btn-default"},"Login")),l.a.createElement("h3",null,"Not a member? ",l.a.createElement("a",{href:"/signup"},"Sign up here"))))))};var w=function(){return l.a.createElement("div",null,l.a.createElement(b,null))};t(55);var N=function(){var e=Object(n.useState)({}),a=Object(c.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){v().then((function(e){t(e.data)}))}),[]),l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},l.a.createElement("div",{class:"container"},l.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"#page-top"},l.a.createElement("img",{class:"img-fluid",src:"images/logo.png",alt:""})),l.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",l.a.createElement("i",{class:"fa fa-bars"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger active",href:"#home"},"Home")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#about"},"About Us")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#services"},"Services")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#portfolio"},"Portfolio")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#blog"},"Blog")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#team"},"Our Team")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#pricing"},"Pricing")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#contact"},"Contect Us")))))))};t(56);var j=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(!0),m=Object(c.a)(o,2),u=m[0],p=m[1];return Object(n.useEffect)((function(){v().then((function(e){e&&r(!0),p(!1)}))}),[]),u?null:l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/signup",component:h}),l.a.createElement(i.b,{path:"/login",component:w}),l.a.createElement(i.b,{path:"/profile"},t?l.a.createElement(N,null):l.a.createElement(i.a,{to:"/login"})),l.a.createElement(i.b,{component:w}))))},O=(t(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.1c900b71.chunk.js.map