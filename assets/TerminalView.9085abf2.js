import{o as d,c,t as m,a as f,b as r,F as h,r as _,w as x,v as y,_ as g,d as v,e as w,f as k,g as T}from"./index.30275f2c.js";function b(){const s=new Map;return{on(e,t){let n=s.get(e);n?n.push(t):n=[t],s.set(e,n)},off(e,t){let n=s.get(e);n&&n.splice(n.indexOf(t)>>>0,1)},emit(e,t){let n=s.get(e);n&&n.slice().map(o=>{o(t)})}}}var i=b(),p={name:"Terminal",props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},data(){return{commandText:null,commands:[]}},mounted(){i.on("response",this.responseListener),this.$refs.input.focus()},updated(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount(){i.off("response",this.responseListener)},methods:{onClick(){this.$refs.input.focus()},onKeydown(s){s.keyCode===13&&this.commandText&&(this.commands.push({text:this.commandText}),i.emit("command",this.commandText),this.commandText="")},responseListener(s){this.commands[this.commands.length-1].response=s}}};const C={key:0},M={class:"p-terminal-content"},S={class:"p-terminal-prompt"},B={class:"p-terminal-command"},V={class:"p-terminal-response"},A={class:"p-terminal-prompt-container"},D={class:"p-terminal-prompt"};function H(s,e,t,n,o,l){return d(),c("div",{class:"p-terminal p-component",onClick:e[2]||(e[2]=(...a)=>l.onClick&&l.onClick(...a))},[t.welcomeMessage?(d(),c("div",C,m(t.welcomeMessage),1)):f("",!0),r("div",M,[(d(!0),c(h,null,_(o.commands,(a,u)=>(d(),c("div",{key:a.text+u.toString()},[r("span",S,m(t.prompt),1),r("span",B,m(a.text),1),r("div",V,m(a.response),1)]))),128))]),r("div",A,[r("span",D,m(t.prompt),1),x(r("input",{ref:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>o.commandText=a),class:"p-terminal-input",autocomplete:"off",onKeydown:e[1]||(e[1]=(...a)=>l.onKeydown&&l.onKeydown(...a))},null,544),[[y,o.commandText]])])])}function K(s,e){e===void 0&&(e={});var t=e.insertAt;if(!(!s||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=s:o.appendChild(document.createTextNode(s))}}var L=`
.p-terminal {
    height: 18rem;
    overflow: auto;
}
.p-terminal-prompt-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-terminal-input {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    border: 0 none;
    background-color: transparent;
    color: inherit;
    padding: 0;
    outline: 0 none;
}
.p-terminal-input::-ms-clear {
    display: none;
}
`;K(L);p.render=H;const N={name:"terminal-view",components:{Terminal:p,TerminalService:i},setup(){v(()=>{i.on("command",s)}),w(()=>{i.off("command",s)});const s=e=>{let t,n=e.indexOf(" "),o=n!==-1?e.substring(0,n):e;switch(o){case"today":t="Today is "+new Date().toDateString();break;case"hello moe":t="Hola! ";break;case"number":t=Math.floor(Math.random()*100);break;case"--help":t="useful commands: 'today','hello moe','number','--help'";break;default:t="Unknown command: "+o}i.emit("response",t)};return{commandHandler:s}}};function U(s,e,t,n,o,l){const a=k("Terminal");return d(),T(a,{welcomeMessage:"Ah! A developer!..Or just a curious person \u{1F607}? try '--help' for help",prompt:"moe $",class:"dark-demo-terminal"})}var F=g(N,[["render",U],["__scopeId","data-v-262a12d4"]]);export{F as default};
