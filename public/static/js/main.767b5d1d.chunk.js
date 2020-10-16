(this["webpackJsonpproject-management-app-front"]=this["webpackJsonpproject-management-app-front"]||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),o=a(1),s=a(6),m=a(3),i=a(4),u=(a(40),a(2)),p=a.n(u),b=a(7),d=a(31),g=a.n(d).a.create({baseURL:"https://project-management-react-app.herokuapp.com/api"}),E=localStorage.getItem("loggedInUser"),v=JSON.parse(E||'""');g.interceptors.request.use((function(e){return e.headers={Authorization:"Bearer ".concat(v.token)},e}));var f=g;var j=function(){var e=Object(i.g)(),t=Object(n.useState)({email:"",name:"",password:""}),a=Object(s.a)(t,2),c=a[0],l=a[1];function m(e){var t=Object(o.a)({},c);t[e.currentTarget.name]=e.currentTarget.value,l(t)}function u(){return(u=Object(b.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,f.post("/signup",c);case 4:n=t.sent,console.log(n),e.push("/login"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return u.apply(this,arguments)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"signupFormNameInput"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",id:"signupFormNameInput","aria-describedby":"emailHelp",onChange:m,value:c.name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"signupFormEmailInput"},"Email address"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"signupFormEmailInput","aria-describedby":"emailHelp",onChange:m,value:c.email}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"signupFormPasswordInput"},"Password"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",id:"signupFormPasswordInput",onChange:m,value:c.password})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))},h=a(12);var O=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(s.a)(t,2),c=a[0],l=a[1];function i(e){l(Object(o.a)(Object(o.a)({},c),{},Object(h.a)({},e.currentTarget.name,e.currentTarget.value)))}function u(){return(u=Object(b.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.preventDefault(),t.next=4,f.post("/login",c);case 4:n=t.sent,console.log(n),l(Object(o.a)({},n.data.user)),e.setLoggedInUser(Object(o.a)({},n.data.user)),localStorage.setItem("loggedInUser",JSON.stringify(n.data)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return u.apply(this,arguments)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"signupFormEmailInput"},"Email address"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"signupFormEmailInput","aria-describedby":"emailHelp",onChange:i,value:c.email}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"signupFormPasswordInput"},"Password"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",id:"signupFormPasswordInput",onChange:i,value:c.password})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement(m.b,{to:"/profile"},"Go to Profile")))};var N=function(e){return Object(n.useEffect)((function(){function t(){return(t=Object(b.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.get("/profile");case 3:a=t.sent,console.log(a),e.setState(Object(o.a)({},a.data.user)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"ID: "),e.state._id),r.a.createElement("p",null,r.a.createElement("strong",null,"Name: "),e.state.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: "),e.state.email))},w=a(34);var x=function(e){var t=e.component,a=e.user,n=Object(w.a)(e,["component","user"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return console.log(a),a._id?r.a.createElement(t,Object.assign({},e,n,{loggedInUser:a})):r.a.createElement(i.a,{to:"/login"})}}))};var y=function(){return r.a.createElement("button",{className:"btn btn-primary",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),r.a.createElement("span",{className:"pl-2"},"Loading..."))};var S=function(e){return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},e.error)};var I=function(e){var t=e.handleSubmit,a=e.handleChange,n=e.state;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"titleProjectInput"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"titleProjectInput",name:"title",onChange:a,value:n.title})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"descriptionProjectInput"},"Description"),r.a.createElement("textarea",{className:"form-control",id:"descriptionProjectInput",name:"description",onChange:a,value:n.description})),n.loading?r.a.createElement(y,null):r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),n.error?r.a.createElement(S,{error:n.error}):null)};var k=function(){var e=Object(i.g)(),t=Object(n.useState)({title:"",description:"",loading:!1,error:""}),a=Object(s.a)(t,2),c=a[0],l=a[1],m=function(){var t=Object(b.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(Object(o.a)(Object(o.a)({},c),{},{loading:!0})),t.prev=1,a.preventDefault(),t.next=5,f.post("/project",c);case 5:n=t.sent,console.log(n),l(Object(o.a)(Object(o.a)({},c),{},{loading:!1})),e.push("/project/all"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0),l(Object(o.a)(Object(o.a)({},c),{},{loading:!1,error:t.t0.message}));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"New Project"),r.a.createElement(I,{state:c,handleChange:function(e){l(Object(o.a)(Object(o.a)({},c),{},Object(h.a)({},e.currentTarget.name,e.currentTarget.value)))},handleSubmit:m}))},D=a(33);var F=function(){return r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))};var P=function(){var e=Object(n.useState)({projects:[],loading:!1,error:""}),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(Object(o.a)(Object(o.a)({},a),{},{loading:!0})),Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/project");case 3:t=e.sent,console.log(t),c(Object(o.a)(Object(o.a)({},a),{},{loading:!1,projects:Object(D.a)(t.data)})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),c(Object(o.a)(Object(o.a)({},a),{},{loading:!1,error:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),r.a.createElement("div",null,a.loading?r.a.createElement(F,null):r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Actions"))),r.a.createElement("tbody",null,a.projects.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement(m.b,{to:"/project/".concat(e._id)},e._id)),r.a.createElement("td",null,r.a.createElement(m.b,{to:"/project/".concat(e._id)},e.title)),r.a.createElement("td",null,r.a.createElement(m.b,{className:"btn btn-primary mr-1",to:"/project/edit/".concat(e._id)},"Edit"),r.a.createElement(m.b,{className:"btn btn-danger",to:"/project/delete/".concat(e._id)},"Delete")))})))),a.error?r.a.createElement(S,{error:a.error}):null)};var T=function(){var e=Object(i.h)().id,t=Object(n.useState)({_id:"",title:"",description:"",createdAt:"",updatedAt:""}),a=Object(s.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(b.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/project/".concat(e));case 2:a=t.sent,console.log(a),l(Object(o.a)({},a.data));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("h1",null,"Project Details"),r.a.createElement("span",null,r.a.createElement("strong",null,"ID: "),c._id),r.a.createElement("span",null,r.a.createElement("strong",null,"Title: "),c.title),r.a.createElement("span",null,r.a.createElement("strong",null,"Description: "),c.description),r.a.createElement("span",null,r.a.createElement("strong",null,"Creation Date: "),new Date(c.createdAt).toLocaleDateString()),r.a.createElement("span",null,r.a.createElement("strong",null,"Last Updated At: "),new Date(c.updatedAt).toLocaleDateString()))};var _=function(e){var t=Object(i.g)(),a=e.match.params.id,c=Object(n.useState)({title:"",description:"",error:"",count:0}),l=Object(s.a)(c,2),m=l[0],u=l[1],d=Object(n.useState)(!1),g=Object(s.a)(d,2),E=g[0],v=g[1],j=Object(n.useState)(!1),O=Object(s.a)(j,2),N=O[0],w=O[1];Object(n.useEffect)((function(){v(!0),Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/project/".concat(a));case 3:t=e.sent,console.log(t),v(!1),u(Object(o.a)({},t.data)),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),v(!1),u(Object(o.a)(Object(o.a)({},m),{},{error:e.t0.message}));case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[a]);var x=function(){var e=Object(b.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,n.preventDefault(),e.next=5,f.patch("/project/".concat(a),m);case 5:r=e.sent,console.log(r),w(!1),t.push("/project/all"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),w(!1),u(Object(o.a)(Object(o.a)({},m),{},{error:e.t0.message}));case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Edit Project"),E?r.a.createElement(F,null):r.a.createElement(I,{state:Object(o.a)(Object(o.a)({},m),{},{loading:N}),handleChange:function(e){u(Object(o.a)(Object(o.a)({},m),{},Object(h.a)({},e.currentTarget.name,e.currentTarget.value)))},handleSubmit:x}))},C=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement(m.b,{className:"navbar-brand",to:"/"},"Project Management"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},e.user._id?r.a.createElement("div",{className:"d-flex align-items-center justify-content-between w-100"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.b,{className:"nav-link",to:"/project/all"},"Projects")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.b,{className:"nav-link",to:"/project/new"},"New Project"))),r.a.createElement("span",{className:"text-light"},e.user?"Welcome, ".concat(e.user.name," :)"):""),r.a.createElement("span",{className:"mx-2 navbar-text"},"|"),r.a.createElement(m.b,{className:"text-light",to:"/logout"},"Logout")):r.a.createElement("div",{className:"d-flex align-items-center justify-content-end w-100"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.b,{className:"nav-link",to:"/signup"},"Signup")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.b,{className:"nav-link",to:"/login"},"Login"))))))},L=function(e){var t=Object(i.g)();return Object(n.useEffect)((function(){localStorage.removeItem("loggedInUser"),console.log(e),e.setUser({}),t.push("/login")}),[]),r.a.createElement("div",null,"Logging out...")};var U=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),u=Object(s.a)(l,2),p=u[0],b=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("loggedInUser"),t=JSON.parse(e||'""');c(Object(o.a)({},t.user))}),[]),r.a.createElement("div",{className:"container mt-5"},r.a.createElement(m.a,null,r.a.createElement(C,{user:a}),a._id?r.a.createElement(i.d,null,r.a.createElement(x,{path:"/profile",component:N,user:a,setState:b,state:p}),r.a.createElement(i.b,{exact:!0,path:"/project/all",component:P,user:a}),r.a.createElement(i.b,{exact:!0,path:"/project/new",component:k,user:a}),r.a.createElement(i.b,{path:"/project/edit/:id",component:_,user:a}),r.a.createElement(i.b,{path:"/project/:id",component:T,user:a}),r.a.createElement(i.b,{path:"/logout",render:function(e){return r.a.createElement(L,{user:a,setUser:c})}}),r.a.createElement(i.b,null,r.a.createElement(i.a,{to:"/profile"}))):r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/signup",component:j}),r.a.createElement(i.b,{path:"/login",render:function(e){return r.a.createElement(O,Object.assign({setLoggedInUser:c},e))}}),r.a.createElement(i.b,null,r.a.createElement(i.a,{to:"/login"})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.767b5d1d.chunk.js.map