(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"4e07":function(t,e,a){"use strict";a("72da")},"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:"","height-hint":"98"}},[e("q-toolbar",[e("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),e("q-toolbar-title",[t._v(" Toolset ")])],1)],1),e("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[e("q-list",[e("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v(" Menu ")]),t._l(t.nav,(function(a){return e("UiHeader",t._b({key:a.title},"UiHeader",a,!1))}))],2)],1),e("q-page-container",[t._l(t.tabs,(function(a,n){return e("router-link",{key:n,staticClass:"tags-view-item",attrs:{to:a.path}},[t._v("\n      "+t._s(a.name)+"\n      "),e("q-icon",{attrs:{name:"close",size:"12px"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.removeTab(n)}}})],1)})),e("keep-alive",[e("router-view",{key:t.$route.fullPath})],1)],2)],1)},i=[],r=(a("0643"),a("fffc"),function(){var t=this,e=t._self._c;return e("q-item",{class:{"text-grey":!t.isActive,"text-primary":t.isActive},attrs:{clickable:""},on:{click:t.goToLink}},[t.icon?e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:t.icon}})],1):t._e(),e("q-item-section",[e("q-item-label",[t._v(t._s(t.title))])],1)],1)}),o=[],s={name:"UiHeader",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},computed:{isActive(){return this.$route.path.startsWith(this.link)}},methods:{goToLink(){this.$router.push(this.link)}}},l=s,c=a("2877"),u=a("66e5"),h=a("4074"),p=a("0016"),m=a("0170"),b=a("eebe"),d=a.n(b),f=Object(c["a"])(l,r,o,!1,null,null,null),v=f.exports;d()(f,"components",{QItem:u["a"],QItemSection:h["a"],QIcon:p["a"],QItemLabel:m["a"]});var g={name:"MainLayout",components:{UiHeader:v},data(){return{nav:[{title:"Home",icon:"school",link:"/home"},{title:"Toolset",icon:"code",link:"/toolset"}],leftDrawerOpen:!1,tabs:[]}},watch:{$route(t){const e=this.tabs.find((e=>e.path===t.path));e||this.tabs.push({name:t.name,path:t.path})}},mounted(){this.tabs.push({name:this.$route.name,path:this.$route.path})},methods:{removeTab(t){this.tabs.splice(t,1);const e=this.$route.path,a=this.tabs.find((t=>t.path===e));a?this.$router.push(a.path,(()=>{}),(t=>{"NavigationDuplicated"!==t.name&&console.error(t)})):this.tabs.length>0?this.$router.push(this.tabs[this.tabs.length-1].path,(()=>{}),(t=>{"NavigationDuplicated"!==t.name&&console.error(t)})):this.$router.push("/",(()=>{}),(t=>{"NavigationDuplicated"!==t.name&&console.error(t)}))}}},w=g,k=(a("4e07"),a("4d5a")),q=a("e359"),y=a("65c6"),Q=a("9c40"),_=a("6ac5"),D=a("9404"),$=a("1c1c"),T=a("09e3"),x=Object(c["a"])(w,n,i,!1,null,"1a961c0c",null);e["default"]=x.exports;d()(x,"components",{QLayout:k["a"],QHeader:q["a"],QToolbar:y["a"],QBtn:Q["a"],QToolbarTitle:_["a"],QDrawer:D["a"],QList:$["a"],QItemLabel:m["a"],QPageContainer:T["a"],QIcon:p["a"]})},"72da":function(t,e,a){}}]);