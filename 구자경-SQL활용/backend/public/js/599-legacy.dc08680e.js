"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[599],{599:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.memo.title))]),n("p",[e._v(e._s(e.memo.memo))])])},u=[],a={data(){return{memo:{}}},created(){this.$http.get(`/api/memo/${this.$route.params.id}`).then((e=>{this.memo=e.data}))}},m=a,s=n(1),o=(0,s.Z)(m,r,u,!1,null,null,null),i=o.exports}}]);
//# sourceMappingURL=599-legacy.dc08680e.js.map