import{_ as d,o as l,c as h,b as e,n as i,j as c,h as g,k as r,l as n}from"./index.c79dd8bb.js";const f={mounted(){this.width=this.$refs.card.offsetWidth,this.height=this.$refs.card.offsetHeight},props:["dataImage"],data:()=>({width:0,height:0,mouseX:0,mouseY:0,mouseLeaveDelay:null}),computed:{mousePX(){return this.mouseX/this.width},mousePY(){return this.mouseY/this.height},cardStyle(){const o=this.mousePX*30,t=this.mousePY*-30;return{transform:`rotateY(${o}deg) rotateX(${t}deg)`}},cardBgTransform(){const o=this.mousePX*-40,t=this.mousePY*-40;return{transform:`translateX(${o}px) translateY(${t}px)`}},cardBgImage(){return{backgroundImage:`url(${this.dataImage})`}}},methods:{handleMouseMove(o){this.mouseX=o.pageX-this.$refs.card.offsetLeft-this.width/2,this.mouseY=o.pageY-this.$refs.card.offsetTop-this.height/2},handleMouseEnter(){clearTimeout(this.mouseLeaveDelay)},handleMouseLeave(){this.mouseLeaveDelay=setTimeout(()=>{this.mouseX=0,this.mouseY=0},1e3)}}},_={class:"card-info"};function y(o,t,m,p,u,s){return l(),h("div",{class:"card-wrap",onMousemove:t[0]||(t[0]=(...a)=>s.handleMouseMove&&s.handleMouseMove(...a)),onMouseenter:t[1]||(t[1]=(...a)=>s.handleMouseEnter&&s.handleMouseEnter(...a)),onMouseleave:t[2]||(t[2]=(...a)=>s.handleMouseLeave&&s.handleMouseLeave(...a)),ref:"card"},[e("div",{class:"card",style:i(s.cardStyle)},[e("div",{class:"card-bg",style:i([s.cardBgTransform,s.cardBgImage])},null,4),e("div",_,[c(o.$slots,"header",{},void 0,!0),c(o.$slots,"content",{},void 0,!0)])],4)],544)}var v=d(f,[["render",y],["__scopeId","data-v-fcc0bd1a"]]);const b={name:"projects-view",components:{Card:v},data(){return{projects:[{id:1,name:"Solely Foot Care Inc",type:"Website & Admin Page",techonology:"Laravel - Bootstrap",description:"A foot care clinic website that shows infomation, available services, google reviews, and instagram feeds. A contact form is found on the website that sends an email to the admin. The website is backed up by an admin page to maintain available services and prices.",link:"https://solelyfootcareinc.ca",logo:"https://solelyfootcareinc.ca/images/dayrakiarts_5.png"},{id:2,name:"Shawarma Castle",type:"",techonology:"",description:"",link:"",logo:""},{id:3,name:"YMJ Construction",type:"",techonology:"",description:"",link:"",logo:""},{id:3,name:"Taj Motors",type:"",techonology:"",description:"",link:"",logo:""},{id:4,name:"Boost IV",type:"",techonology:"",description:"",link:"",logo:""},{id:5,name:"Al Marsad",type:"",techonology:"",description:"",link:"",logo:""},{id:6,name:"Bayt Salwa",type:"",techonology:"",description:"",link:"",logo:""},{id:7,name:"The Moe Blog",type:"",techonology:"",description:"",link:"",logo:""}]}}},w={class:"projects"},M={class:"flex flex-wrap justify-center overflow-y-scroll h-screen"},k=e("h1",null,"Canyons",-1),L=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",-1),Y=e("h1",null,"Beaches",-1),$=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",-1),B=e("h1",null,"Trees",-1),X=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",-1),T=e("h1",null,"Lakes",-1),x=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",-1);function C(o,t,m,p,u,s){const a=g("card");return l(),h("div",w,[e("div",M,[r(a,{"data-image":"https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="},{header:n(()=>[k]),content:n(()=>[L]),_:1}),r(a,{"data-image":"https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="},{header:n(()=>[Y]),content:n(()=>[$]),_:1}),r(a,{"data-image":"https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="},{header:n(()=>[B]),content:n(()=>[X]),_:1}),r(a,{"data-image":"https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="},{header:n(()=>[T]),content:n(()=>[x]),_:1})])])}var P=d(b,[["render",C]]);export{P as default};
