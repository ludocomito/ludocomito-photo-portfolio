(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(t,e,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(85).default)("bad8e090",content,!0,{sourceMap:!1})},469:function(t,e,r){"use strict";r(332)},470:function(t,e,r){var n=r(84)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\n.parent-component ::v-deep .vue-cursor-fx{\n  position:fixed\n}\n::-moz-selection{\n  background:#989892\n}\n::selection{\n  background:#989892\n}\n.textStroked{\n  color:#000;\n  -webkit-text-fill-color:transparent;\n  -webkit-text-stroke-width:1px;\n  -webkit-text-stroke-color:"#cecece"\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},478:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(50),r(36),r(334),r(11),r(337)),c=r.n(o),l=(r(338),r(340),r(193),r(342)),d=r.n(l),f=r(465),m=(r(466),r(468)),v={name:"IndexPage",mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.animateOnScroll(),new m.a({el:document.querySelector("[data-scroll-container]"),smooth:!0}),c.a.init({}),e.abrupt("return",t.images.map(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPalette(r.link);case 2:return e.abrupt("return",r.bg=e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:case"end":return e.stop()}}),e)})))()},components:{"cursor-fx":f.CursorFx},computed:{},methods:{animateOnScroll:function(){this.$gsap.to(".image_preview",{ease:"Power1.easeInOut",scrollTrigger:{trigger:".image_preview",start:"top",end:"bottom",animation:this.$gsap.to(".image_preview",{transform:"scale(1.5)"}),scrub:2}})},createBackgroundString:function(t){return"linear-gradient(180deg, white, "+t+", white )"},isUltimo:function(t,e){return t>=e-1},isPari:function(t){return console.log(t%2),t%2==0},getPalette:function(image){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.from(image).getPalette();case 2:return e=t.sent,t.abrupt("return",new Promise((function(t,r){var n=e.LightVibrant.rgb;t("rgba("+Math.floor(n[0])+","+Math.floor(n[1])+","+Math.floor(n[2])+",0.2)")})));case 4:case"end":return t.stop()}}),t)})))()},blurred:function(image){return this.getPalette(image)}},data:function(){return{pisello:{background:"linear-gradient(180deg, rgba(255,227,193,1) 0%, rgba(255,255,255,1) 100%);"},images:[{link:"https://images.unsplash.com/photo-1562863010-5074d3465bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",desc:"Eventi",bg:""},{link:"https://images.unsplash.com/photo-1653665674648-7cc7fa657547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",desc:"Natura",bg:""},{link:"https://images.unsplash.com/photo-1653569396310-56bf9b634ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",desc:"Architettura",bg:""}],opts:{start:0,dir:"v",duration:200,loop:!0,beforeChange:function(t,e,r){},afterChange:function(t,e){}}}}},x=v,w=(r(469),r(34)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("cursor-fx"),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"relative",attrs:{"data-scroll-container":""}},[t._m(1),t._v(" "),r("div",{attrs:{"data-scroll-section":""}},t._l(t.images,(function(image,e){return r("div",{key:e,staticClass:"page h-screen flex flex-col justify-center",style:{backgroundImage:t.isUltimo(e,t.images.length)?t.createBackgroundString(image.bg,image.bg):t.createBackgroundString(image.bg,t.images[e+1].bg)}},[r("div",{staticClass:"max-w-7xl mx-auto"},[r("div",{staticClass:"flex flex-row items-bottom items-start"},[r("div",{staticClass:"flex flex-col w-1/2 px-10",class:t.isPari(e)?"order-0":"order-2",attrs:{"data-scroll":"","data-scroll-speed":"3"}},[r("p",{staticClass:"font-bold text-lg"},[t._v("\n                "+t._s(image.desc)+"\n              ")]),t._v(" "),r("p",[t._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n                pharetra neque ipsum, eu congue metus finibus in. Sed dolor\n                risus, tempus fermentum libero eget, consequat venenatis nisi.\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              ")]),t._v(" "),t._m(2,!0)]),t._v(" "),r("div",{staticClass:"mr-10 ml-10",staticStyle:{height:"35rem",width:"40rem",overflow:"hidden",position:"relative"}},[r("nuxt-img",{ref:"img1",refInFor:!0,staticClass:"object-cover absolute image_preview",staticStyle:{height:"100%",width:"100%","object-position":"50% 50%"},attrs:{"data-aos-delay":"150","data-aos-duration":"500",src:image.link,alt:""}})],1)])])])})),0)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sticky z-10 p-10 bg-trasparent w-full top-0"},[r("p",{staticClass:"font-medium text-2xl"},[t._v("LudovicoComito")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-7xl px-10 mx-auto py-32 flex flex-row space-x-5 items-end",attrs:{"data-scroll-section":""}},[r("p",{staticClass:"font-light text-8xl w-2/3 serif",attrs:{"data-scroll":"","data-scroll-speed":"3"}},[t._v("\n        👋 "),r("br"),t._v("\n        Hi, i'm a developer and\n        "),r("span",{staticClass:"font-medium"},[t._v("photographer")]),t._v(" based in\n        "),r("span",{staticClass:"font-medium"},[t._v("Rome")])]),t._v(" "),r("p",{staticClass:"w-1/3",attrs:{"data-scroll-speed":"2"}},[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra\n        neque ipsum, eu congue metus finibus in. Sed dolor risus, tempus\n        fermentum libero eget, consequat venenatis nisi. Lorem ipsum dolor sit\n        amet, consectetur adipiscing elit.\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-row mt-10"},[r("div",{staticClass:"flex flex-col w-1/2"},[r("p",{staticClass:"font-bold"},[t._v("Località")]),t._v(" "),r("p",[t._v("Roma")])]),t._v(" "),r("div",{staticClass:"flex flex-col w-1/2"},[r("p",{staticClass:"font-bold"},[t._v("Data realizzazione")]),t._v(" "),r("p",[t._v("Settembre 2021")])])])}],!1,null,null,null);e.default=component.exports}}]);