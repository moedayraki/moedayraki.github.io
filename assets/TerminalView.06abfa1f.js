import{o as d,c,t as m,a as f,b as r,F as h,r as _,w as x,v as g,_ as y,d as v,e as k,f as w,g as b}from"./index.01d0cf09.js";function T(){const o=new Map;return{on(e,t){let n=o.get(e);n?n.push(t):n=[t],o.set(e,n)},off(e,t){let n=o.get(e);n&&n.splice(n.indexOf(t)>>>0,1)},emit(e,t){let n=o.get(e);n&&n.slice().map(s=>{s(t)})}}}var i=T(),p={name:"Terminal",props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},data(){return{commandText:null,commands:[]}},mounted(){i.on("response",this.responseListener),this.$refs.input.focus()},updated(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount(){i.off("response",this.responseListener)},methods:{onClick(){this.$refs.input.focus()},onKeydown(o){o.keyCode===13&&this.commandText&&(this.commands.push({text:this.commandText}),i.emit("command",this.commandText),this.commandText="")},responseListener(o){this.commands[this.commands.length-1].response=o}}};const C={key:0},M={class:"p-terminal-content"},S={class:"p-terminal-prompt"},B={class:"p-terminal-command"},I={class:"p-terminal-response"},V={class:"p-terminal-prompt-container"},E={class:"p-terminal-prompt"};function F(o,e,t,n,s,l){return d(),c("div",{class:"p-terminal p-component",onClick:e[2]||(e[2]=(...a)=>l.onClick&&l.onClick(...a))},[t.welcomeMessage?(d(),c("div",C,m(t.welcomeMessage),1)):f("",!0),r("div",M,[(d(!0),c(h,null,_(s.commands,(a,u)=>(d(),c("div",{key:a.text+u.toString()},[r("span",S,m(t.prompt),1),r("span",B,m(a.text),1),r("div",I,m(a.response),1)]))),128))]),r("div",V,[r("span",E,m(t.prompt),1),x(r("input",{ref:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.commandText=a),class:"p-terminal-input",autocomplete:"off",onKeydown:e[1]||(e[1]=(...a)=>l.onKeydown&&l.onKeydown(...a))},null,544),[[g,s.commandText]])])])}function H(o,e){e===void 0&&(e={});var t=e.insertAt;if(!(!o||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=o:s.appendChild(document.createTextNode(o))}}var K=`
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
`;H(K);p.render=F;const L={name:"terminal-view",components:{Terminal:p,TerminalService:i},setup(){v(()=>{i.on("command",o)}),k(()=>{i.off("command",o)});const o=e=>{let t,n=e.indexOf(" "),s=n!==-1?e.substring(0,n):e;switch(s){case"--help":t=`useful commands:'moe': get to know Moe \r
 'hello': just say hi
 '.home': navigate to home
 '--help': get all available commands`;break;case"moe":t="Wait a minute. I'm still defining myself \u{1F61F}.";break;case"hello":t=`Hola!
 I'm Moe. type 'moe' to know more about me \u{1F60A}. `;break;case"number":t=Math.floor(Math.random()*100);break;default:t="Unknown command: "+s}i.emit("response",t)};return{commandHandler:o}}};function N(o,e,t,n,s,l){const a=w("Terminal");return d(),b(a,{welcomeMessage:"moe@dayrakiarts OS|DEVICE ~terminal ",prompt:"moe $ ",class:"dark-demo-terminal"})}var A=y(L,[["render",N],["__scopeId","data-v-125941a9"]]);export{A as default};
