(function(e){function t(t){for(var a,s,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"013a":function(e,t,n){e.exports=n.p+"img/logo.783bade8.png"},"0543":function(e,t,n){},"199c":function(e,t){},"23be":function(e,t,n){"use strict";var a=n("199c"),i=n.n(a);t["default"]=i.a},2640:function(e,t,n){"use strict";var a=n("ad0f"),i=n.n(a);i.a},"2e93":function(e,t){},"390e":function(e,t,n){"use strict";var a=n("0543"),i=n.n(a);i.a},"3dfd":function(e,t,n){"use strict";var a=n("73ae"),i=n("23be"),r=(n("5c0b"),n("2877")),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},5387:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("3dfd"),r=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("Header"),e._m(0),n("Footer")],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"main-container"}},[a("div",{attrs:{id:"home-abstract"}},[a("h4",[e._v("Welcome to my space")]),a("img",{attrs:{id:"desktop-logo",src:n("013a"),alt:"RyougiChan.logo"}}),a("p",{attrs:{id:"home-desciption"}},[e._v(" Welcome to "),a("a",{attrs:{href:"https://github.com/RyougiChan"}},[e._v("RyougiChan")]),e._v("'s space, a personal space that records every bit of my work and life. Here I share some of my works, notes and experiences. Please feel free to look through those. Finally, I wish you a nice day! ")])])])}],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"r-header"}},[n("header",[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row-header"},[e._m(0),n("div",{staticClass:"header-menu"},[n("div",{staticClass:"menu-top-menu-container"},[n("ul",{staticClass:"menu",attrs:{id:"menu-top-menu"},on:{click:e.menuClickHandler}},e._l(e.menuItems,(function(t,a){return n("li",{key:a,class:["menu-item",{current:t.name.toLowerCase()===e.activedMenuItem}]},[n("router-link",{attrs:{name:t.name,to:{name:t.name}}},[e._v(" "+e._s(t.name)+" "),t.hasSubMenu?n("ul",{staticClass:"sub-menu"},e._l(t.subMenu,(function(t,a){return n("li",{key:a,class:["menu-item",{current:t.name.toLowerCase()===e.activedMenuItem}]},[n("router-link",{attrs:{name:t.name,to:{name:t.name}}},[e._v(e._s(t.name))])],1)})),0):e._e()])],1)})),0)])])])])])])},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-logo"},[a("a",{attrs:{href:"/"}},[a("img",{staticClass:"img-responsive",attrs:{src:n("013a"),id:"desktop-logo",title:"Home",alt:"Home"}})]),a("a",{staticClass:"loke-menu-icon",attrs:{id:"menu-toggle",href:"javascript:void(0)"}},[a("span"),a("span"),a("span")])])}],l=(n("baa5"),n("b0c0"),{name:"Header",data:function(){return{menuItems:[{name:"Home",hasSubMenu:!1},{name:"Article",hasSubMenu:!1},{name:"Project",hasSubMenu:!0,subMenu:[{name:"Hexagram",hasSubMenu:!1}]},{name:"About",hasSubMenu:!1}],activedMenuItem:"home"}},methods:{menuClickHandler:function(e){var t=e.target;t&&"a"===t.nodeName.toLowerCase()&&!t.parentNode.classList.contains("current")&&(this.activedMenuItem=t.name.toLowerCase())}},created:function(){var e=this.$router.history.current.path,t=e.substring(e.lastIndexOf("/")+1);""===t&&(t="home"),window.console.log(t),this.activedMenuItem=t}}),d=l,p=(n("390e"),n("2877")),f=Object(p["a"])(d,u,c,!1,null,"45907404",null),h=f.exports,m=n("fd2d"),v={name:"app",components:{Header:h,Footer:m["default"]}},g=v,b=(n("2640"),Object(p["a"])(g,s,o,!1,null,null,null)),_=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"article"}},[n("Header"),e._m(0),n("Footer")],1)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-container"}},[n("div",{staticClass:"content-section"},[n("h2",[e._v("Introduction ")]),n("p",[e._v("Material Design is a visual language that synthesizes the classic principles of good design with the innovation of technology and science.")]),n("h3",[e._v("Goals")]),n("p",[e._v("Create a visual language that synthesizes the classic principles of good design with the innovation and possibility of technology and science. Develop a single underlying...")]),n("h4",[e._v("Create")]),n("p",[e._v("Create a visual language that synthesizes the classic principles of good design with the innovation and possibility of technology and science.")]),n("h4",[e._v("Unify")]),n("p",[e._v("Develop a single underlying system that unifies the user experience across platforms, devices, and input methods.")]),n("h4",[e._v("Customize")]),n("p",[e._v("Expand Material’s visual language and provide a flexible foundation for innovation and brand expression.")]),n("h3",[e._v("Principles")]),n("p",[e._v("Material Design is inspired by the physical world and its textures, including how they reflect light and cast shadows. Material surfaces reimagine the mediums of...")]),n("h4",[e._v("Material is the metaphor")]),n("p",[e._v("Material Design is inspired by the physical world and its textures, including how they reflect light and cast shadows. Material surfaces reimagine the mediums of paper and ink.")]),n("h4",[e._v("Bold, graphic, intentional")]),n("p",[e._v("Material Design is guided by print design methods — typography, grids, space, scale, color, and imagery — to create hierarchy, meaning, and focus that immerse viewers in the experience.")]),n("h4",[e._v("Motion provides meaning")]),n("p",[e._v("Motion focuses attention and maintains continuity, through subtle feedback and coherent transitions. As elements appear on screen, they transform and reorganize the environment, with interactions generating new transformations.")]),n("h4",[e._v("Flexible foundation")]),n("p",[e._v("The Material Design system is designed to enable brand expression. It’s integrated with a custom code base that allows the seamless implementation of components, plug-ins, and design elements.")]),n("h4",[e._v("Cross-platform")]),n("p",[e._v("Material Design maintains the same UI across platforms, using shared components across Android, iOS, Flutter, and the web.")]),n("h4",[e._v("Getting around")]),n("p",[e._v("Our comprehensive guidance helps you make beautiful products, faster. Design and build with new tools for customizing Material and sharing work, find inspiration in the...")]),n("p",[e._v("Our comprehensive guidance helps you make beautiful products, faster. Design and build with new tools for customizing Material and sharing work, find inspiration in the Material studies, and express your product’s unique identity with Material Theming.")]),n("p",[e._v("Find what you need by navigating across these three sections:")]),n("h4",[e._v("Material System")]),n("p",[e._v("Our expanded and enhanced design system is unified with Material tools and components to improve workflow between design and development.")]),n("h4",[e._v("Material Foundation")]),n("p",[e._v("Design and strategize how to build your app using Material Design architecture, while learning the principles and theory that underpin Material Design.")]),n("h4",[e._v("Material Guidelines")]),n("p",[e._v("Customize and deploy a unique Material theme systematically across your product – from design to code.")]),n("p",[e._v("You can still view the previous set of Material Guidelines.")]),n("h3",[e._v("Updates")]),n("p",[e._v("See the latest Material updates on our what’s new page, and sign up for the Material newsletter to get releases, announcements, and tips delivered directly...")]),n("p",[e._v("See the latest Material updates on our what’s new page, and sign up for the Material newsletter to get releases, announcements, and tips delivered directly to your inbox.")])])])}],M={name:"app",components:{Header:h,Footer:m["default"]}},x=M,C=Object(p["a"])(x,y,w,!1,null,null,null),j=C.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"project"}},[n("Header"),n("router-view")],1)},k=[],H={name:"app",components:{Header:h}},S=H,$=Object(p["a"])(S,O,k,!1,null,null,null),E=$.exports,D=n("9a96"),I=n("6fa0"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"article"}},[n("Header"),e._v(" About ")],1)},z=[],F={name:"app",components:{Header:h}},A=F,R=Object(p["a"])(A,P,z,!1,null,null,null),L=R.exports;a["a"].use(r["a"]);var T=new r["a"]({routes:[{path:"/",name:"Home",component:_},{path:"/article",name:"Article",component:j},{path:"/project",name:"Project",component:E,children:[{path:"",component:D["default"]},{path:"hexagram",name:"Hexagram",component:I["default"]}]},{path:"/about",name:"About",component:L}]});a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(i["default"])},router:T}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5387"),i=n.n(a);i.a},"660d":function(e,t,n){},6731:function(e,t){},"6a81":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("a",{attrs:{href:"https://github.com/RyougiChan",title:"Website design by RyougiChan",alt:"Website design by RyougiChan"}},[e._v(" Website design by RyougiChan ")])])}];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},"6c4c":function(e,t,n){"use strict";var a=n("6731"),i=n.n(a);t["default"]=i.a},"6fa0":function(e,t,n){"use strict";var a=n("f23e"),i=n("6c4c"),r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},"73ae":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},"7dff":function(e,t,n){"use strict";var a=n("660d"),i=n.n(a);i.a},"94d4":function(e,t,n){"use strict";var a=n("2e93"),i=n.n(a);t["default"]=i.a},"9a96":function(e,t,n){"use strict";var a=n("c8eb"),i=n("e05f"),r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},ad0f:function(e,t,n){},c8eb:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"project"}},[e._v(" ProjectList ")])},i=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},e05f:function(e,t,n){"use strict";var a=n("f552"),i=n.n(a);t["default"]=i.a},f23e:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"article"}},[e._v(" Hexagram ")])},i=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},f552:function(e,t){},fd2d:function(e,t,n){"use strict";var a=n("6a81"),i=n("94d4"),r=(n("7dff"),n("2877")),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"7dc60c0f",null);t["default"]=s.exports}});
//# sourceMappingURL=app.d8cbc5a6.js.map