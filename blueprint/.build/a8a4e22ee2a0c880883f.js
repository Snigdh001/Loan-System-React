webpackJsonp([1],{0:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var l=n(7),r=u(l),a=n(132),d=n(57),o=n(205),f=u(o);(0,a.render)(r["default"].createElement(d.Router,{history:d.browserHistory,routes:f["default"]}),document.getElementById("app"))},81:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function l(){return f[f.length-1]}function r(){document.title=l()}function a(){var e=l();return f=[],e}t.__esModule=!0,t.flushTitle=a;var d=n(7),o=u(d),f=[],c=o["default"].PropTypes,i=c.oneOfType,s=c.string,p=c.func,m=o["default"].createClass({displayName:"Title",propTypes:{render:i([s,p]).isRequired},getInitialState:function(){return{index:f.push("")-1}},componentWillUnmount:function(){f.pop()},componentDidMount:r,componentDidUpdate:r,render:function _(){var _=this.props.render;return f[this.state.index]="function"==typeof _?_(f[this.state.index-1]||""):_,this.props.children||null}});t["default"]=m},201:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(7),r=u(l),a=n(57),d=n(81),o=u(d);t["default"]=r["default"].createClass({displayName:"App",render:function(){return r["default"].createElement("div",null,r["default"].createElement(o["default"],{render:"Awesome App"}),r["default"].createElement("h1",null,"Welcome to your app."),r["default"].createElement("ul",null,r["default"].createElement("li",null,r["default"].createElement(a.IndexLink,{to:"/"},"Home")),r["default"].createElement("li",null,r["default"].createElement(a.Link,{to:"/dragon"},"A DRAGON!")),r["default"].createElement("li",null,r["default"].createElement(a.Link,{to:"/not-dragon"},"An old URL to a DRAGON!"))),this.props.children)}})},202:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(7),r=u(l),a=n(302),d=u(a),o=n(304),f=n(81),c=u(f);t["default"]=r["default"].createClass({displayName:"Dragon",render:function(){return r["default"].createElement("div",null,r["default"].createElement(c["default"],{render:function(e){return e+" | Dragon!"}}),r["default"].createElement("h2",{className:o.header},"RAR!"),r["default"].createElement("img",{src:d["default"],height:"400"}))}})},203:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(7),r=u(l),a=n(81),d=u(a);t["default"]=r["default"].createClass({displayName:"Home",render:function(){return r["default"].createElement("div",null,r["default"].createElement(d["default"],{render:function(e){return e+" | Home"}}),r["default"].createElement("p",null,"Home!"))}})},204:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(7),r=u(l);t["default"]=r["default"].createClass({displayName:"NoMatch",render:function(){return r["default"].createElement("div",null,"404")}})},205:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(305);var l=n(7),r=u(l),a=n(57),d=n(120),o=n(206),f=u(o),c=n(201),i=u(c),s=n(203),p=u(s),m=n(204),_=u(m),E=n(202),h=u(E);t["default"]=r["default"].createElement(a.Route,null,r["default"].createElement(a.Route,{path:"/",component:i["default"]},r["default"].createElement(a.IndexRoute,{component:p["default"]}),r["default"].createElement(a.Route,{path:"dragon",component:h["default"]})),r["default"].createElement(d.ServerRoute,{path:"/api"},r["default"].createElement(d.ServerRoute,{path:":hello",get:f["default"]})),r["default"].createElement(a.Redirect,{from:"/not-dragon",to:"/dragon"}),r["default"].createElement(a.Route,{path:"*",status:404,component:_["default"]}))},206:function(e,t){"use strict"},302:function(e,t,n){e.exports=n.p+"1d6600c436721252b8048b7bc6bfb806.jpg"},304:function(e,t){e.exports={header:"styles__header___P9w1l"}},305:function(e,t){}});
//# sourceMappingURL=a8a4e22ee2a0c880883f.js.map