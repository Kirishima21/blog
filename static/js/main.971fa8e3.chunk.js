(this.webpackJsonpemojis=this.webpackJsonpemojis||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){},18:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(7),i=n.n(l),c=(n(14),n(15),n(1)),u=n(2),o=n(4),m=n(3),E=n(5),b=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"titleImage",src:"title.svg"}))}}]),a}(r.a.Component),s=new(n(8).Dispatcher),A="CHANGE_PAGE_TOP",p="CHANGE_PAGE_ABOUT",M="CHANGE_PAGE_PRODUCT",h="CHANGE_PAGE_BLOG",O="CHANGE_PAGE_CONTACT",v=function(){s.dispatch({actionType:A})},d=function(){s.dispatch({actionType:p})},f=function(){s.dispatch({actionType:M})},C=function(){s.dispatch({actionType:h})},g=function(){s.dispatch({actionType:O})},j=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"NavigationMenu"},r.a.createElement("div",{className:"top"},r.a.createElement("input",{type:"button",value:"top",onClick:function(){v()}})),r.a.createElement("div",{className:"about"},r.a.createElement("input",{type:"button",value:"about",onClick:function(){d()}})),r.a.createElement("div",{className:"product"},r.a.createElement("input",{type:"button",value:"product",onClick:function(){f()}})),r.a.createElement("div",{className:"blog"},r.a.createElement("input",{type:"button",value:"blog",onClick:function(){C()}})),r.a.createElement("div",{className:"contact"},r.a.createElement("input",{type:"button",value:"contact",onClick:function(){g()}})))}}]),a}(r.a.Component),N={page:"top",onChange:null},y="CHANGE_PAGE_TOP",G="CHANGE_PAGE_ABOUT",T="CHANGE_PAGE_PRODUCT",_="CHANGE_PAGE_BLOG",k="CHANGE_PAGE_CONTACT";s.register((function(e){e.actionType===y&&(N.page="top",N.onChange()),e.actionType===G&&(N.page="about",N.onChange()),e.actionType===T&&(N.page="product",N.onChange()),e.actionType===_&&(N.page="blog",N.onChange()),e.actionType===k&&(N.page="contact",N.onChange())}));var P=function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={page:N.page},N.onChange=function(){n.setState({page:N.page})},n}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"MainAria"},"MainAria ",r.a.createElement("br",null),this.state.page,"\u3092\u8868\u793a\u3057\u307e\u3059 MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null),"MainAria ",r.a.createElement("br",null))}}]),a}(r.a.Component),H=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SubAria"},"SubAria")}}]),a}(r.a.Component),w=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ContentsAria"},r.a.createElement(P,null),r.a.createElement(H,null))}}]),a}(r.a.Component),B=function(e){function a(e){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"footer")}}]),a}(r.a.Component);var U=function(){return r.a.createElement("div",{className:"containar"},r.a.createElement("div",{className:"Pagetitle"},r.a.createElement(b,null)),r.a.createElement("div",{className:"Navigation"},r.a.createElement(j,null)),r.a.createElement("div",{className:"Contents"},r.a.createElement(w,null)),r.a.createElement("div",{className:"Footer"},r.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=document.getElementById("root");i.a.render(r.a.createElement(U,null),D),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.971fa8e3.chunk.js.map