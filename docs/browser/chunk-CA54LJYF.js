import{a as u}from"./chunk-5S2DIWXE.js";import{b as l,f as a,g as c,j as d,k as o}from"./chunk-ZJYFYRHS.js";import"./chunk-GNOVVPTF.js";import{f as r}from"./chunk-BAKMWPBW.js";import{f as s}from"./chunk-RW4GY4BD.js";var f=":host(.tab-hidden){display:none !important}",m=f,C=(()=>{let e=class{constructor(t){l(this,t),this.loaded=!1,this.active=!1,this.delegate=void 0,this.tab=void 0,this.component=void 0}componentWillLoad(){return s(this,null,function*(){this.active&&(yield this.setActive())})}setActive(){return s(this,null,function*(){yield this.prepareLazyLoaded(),this.active=!0})}changeActive(t){t&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&this.component!=null){this.loaded=!0;try{return u(this.delegate,this.el,this.component,["ion-page"])}catch(t){r("[ion-tab] - Exception in prepareLazyLoaded:",t)}}return Promise.resolve(void 0)}render(){let{tab:t,active:i,component:n}=this;return a(c,{key:"c36c113e74e12b58459df9e3b546ad4856187e90",role:"tabpanel","aria-hidden":i?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":n===void 0,"tab-hidden":!i}},a("slot",{key:"0d7821dac70ba7a12edfb3331988f3df1566cc1a"}))}get el(){return d(this)}static get watchers(){return{active:["changeActive"]}}};return e.style=m,e})(),y=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}",g=y,p=class{constructor(e){l(this,e),this.ionNavWillLoad=o(this,"ionNavWillLoad",7),this.ionTabsWillChange=o(this,"ionTabsWillChange",3),this.ionTabsDidChange=o(this,"ionTabsDidChange",3),this.transitioning=!1,this.onTabClicked=t=>{let{href:i,tab:n}=t.detail;if(this.useRouter&&i!==void 0){let b=document.querySelector("ion-router");b&&b.push(i)}else this.select(n)},this.selectedTab=void 0,this.useRouter=!1}componentWillLoad(){return s(this,null,function*(){if(this.useRouter||(this.useRouter=(!!this.el.querySelector("ion-router-outlet")||!!document.querySelector("ion-router"))&&!this.el.closest("[no-router]")),!this.useRouter){let e=this.tabs;e.length>0&&(yield this.select(e[0]))}this.ionNavWillLoad.emit()})}componentWillRender(){let e=this.el.querySelector("ion-tab-bar");if(e){let t=this.selectedTab?this.selectedTab.tab:void 0;e.selectedTab=t}}select(e){return s(this,null,function*(){let t=h(this.tabs,e);return this.shouldSwitch(t)?(yield this.setActive(t),yield this.notifyRouter(),this.tabSwitch(),!0):!1})}getTab(e){return s(this,null,function*(){return h(this.tabs,e)})}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}setRouteId(e){return s(this,null,function*(){let t=h(this.tabs,e);return this.shouldSwitch(t)?(yield this.setActive(t),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}})}getRouteId(){return s(this,null,function*(){var e;let t=(e=this.selectedTab)===null||e===void 0?void 0:e.tab;return t!==void 0?{id:t,element:this.selectedTab}:void 0})}setActive(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.active=!0,Promise.resolve())}tabSwitch(){let e=this.selectedTab,t=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&t!==e&&(t&&(t.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}notifyRouter(){if(this.useRouter){let e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(e){let t=this.selectedTab;return e!==void 0&&e!==t&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return a(c,{key:"20b97196d78c1b3f3faf31618a8a2347e087f06b",onIonTabButtonClick:this.onTabClicked},a("slot",{key:"b0823fbae6e47743cfd12c376b365ad7e32cec7c",name:"top"}),a("div",{key:"eaffd7e4d69ab9489a387e3bbb36e3bab72203a0",class:"tabs-inner"},a("slot",{key:"20bb66a2937e3ec473aa59c4075ce581b5411677"})),a("slot",{key:"1529dd361f050f52074f51c73b3982ba827dc3a5",name:"bottom"}))}get el(){return d(this)}},h=(e,t)=>{let i=typeof t=="string"?e.find(n=>n.tab===t):t;return i||r(`[ion-tabs] - Tab with id: "${i}" does not exist`),i};p.style=g;export{C as ion_tab,p as ion_tabs};
