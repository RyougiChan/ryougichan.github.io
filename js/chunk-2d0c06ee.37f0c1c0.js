(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0c06ee"],{4282:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("498a");var r={name:"FullscreenFrame",props:{src:String}},c=n("2877"),o=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("iframe",{staticClass:"fullscreen",attrs:{src:this.src,frameborder:"0",width:"100%",height:"100%"}})}),[],!1,null,null,null).exports,a=n("cebe"),i=n.n(a),s={data:function(){return{project:{src:"",name:"",title:"",content:"",coverUrl:""},loadingInstance:void 0}},props:["id"],components:{FullScreenFrame:o},created:function(){this.loadingInstance=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(255, 255, 255, 0.7)"})},mounted:function(){var t=this;this.id,i.a.get("https://api.kaga.fun/v1/project/?id="+this.id).then((function(e){if(0===e.data.errorCode){var n=e.data.result;t.project.src=n.externalUrl,t.project.name=n.name,t.project.title=n.title,t.project.content=n.content,t.project.coverUrl="https://static.kaga.fun"+n.coverUrl,n.externalUrl&&""!==n.externalUrl.trim()?i.a.get(n.externalUrl).then((function(){t.loadingInstance.close()})).catch((function(){t.loadingInstance.close();var e=t.$createElement;t.$notify({title:"ERROR",message:e("i",{style:"color: #009688"},"We are sorry but we cannot initialize frame content"),position:"bottom-right",duration:5e3})})):t.loadingInstance.close()}})).catch((function(e){var n=t.$createElement;t.$notify({title:"ERROR",message:n("i",{style:"color: #009688"},'We are sorry but data missing due to unknown factors ",,ԾㅂԾ,,"'),duration:5e3,position:"bottom-right"})}))}},l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"y-project",attrs:{id:"md-component"}},[t.project.src&&""!==t.project.src.trim()?n("FullScreenFrame",{attrs:{src:t.project.src}}):t._e(),n("div",{attrs:{id:"main-container"}},[n("div",{staticClass:"content-section"},[n("h4",[t._v(t._s(t.title))]),n("p",[n("img",{attrs:{src:t.project.coverUrl,alt:t.project.name}})]),n("p",{domProps:{innerHTML:t._s(t.project.content)}})])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=chunk-2d0c06ee.37f0c1c0.js.map