import{_ as p,o as m,c,t as d,a as h,b as r,F as f,r as _,w as v,v as b,u as k,d as w,e as g,f as y,g as T,h as x}from"./index.4994e7e7.js";function M(){const s=new Map;return{on(n,t){let e=s.get(n);e?e.push(t):e=[t],s.set(n,e)},off(n,t){let e=s.get(n);e&&e.splice(e.indexOf(t)>>>0,1)},emit(n,t){let e=s.get(n);e&&e.slice().map(a=>{a(t)})}}}var l=M();const C={name:"Terminal",props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},data(){return{commandText:null,commands:[]}},mounted(){l.on("response",this.responseListener),this.$refs.input.focus()},updated(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount(){l.off("response",this.responseListener)},methods:{onClick(){this.$refs.input.focus()},onKeydown(s){s.keyCode===13&&this.commandText&&(this.commands.push({text:this.commandText}),l.emit("command",this.commandText),this.commandText="")},responseListener(s){this.commands[this.commands.length-1].response=s}}},H={key:0},I={class:"p-terminal-content"},L={class:"p-terminal-prompt"},B={class:"p-terminal-command"},S=["innerHTML"],V={class:"p-terminal-prompt-container"},K={class:"p-terminal-prompt"};function $(s,n,t,e,a,i){return m(),c("div",{class:"p-terminal p-component",onClick:n[2]||(n[2]=(...o)=>i.onClick&&i.onClick(...o))},[t.welcomeMessage?(m(),c("div",H,d(t.welcomeMessage),1)):h("",!0),r("div",I,[(m(!0),c(f,null,_(a.commands,(o,u)=>(m(),c("div",{key:o.text+u.toString()},[r("span",L,d(t.prompt),1),r("span",B,d(o.text),1),r("div",{class:"p-terminal-response",innerHTML:o.response},null,8,S)]))),128))]),r("div",V,[r("span",K,d(t.prompt),1),v(r("input",{ref:"input",type:"text","onUpdate:modelValue":n[0]||(n[0]=o=>a.commandText=o),class:"p-terminal-input",autocomplete:"off",onKeydown:n[1]||(n[1]=(...o)=>i.onKeydown&&i.onKeydown(...o))},null,544),[[b,a.commandText]])])])}var D=p(C,[["render",$]]);const U={name:"terminal-view",components:{Terminal:D,TerminalService:l},setup(){const s=k();w(),g(()=>{l.on("command",n)}),y(()=>{l.off("command",n)});const n=t=>{let e,a=t.indexOf(" "),i=a!==-1?t.substring(0,a):t;switch(i){case"--help":e=`commands:
            <br />
            <div class="ml-4 w-1/5 inline-block">moe</div><div class="w-2/5 inline-block">get to know moe</div>
            <br /> 
            <div class="ml-4 w-1/5 inline-block">hello</div><div class="w-2/5 inline-block">just say hi</div>
            <br /> 
            <div class="ml-4 w-1/5 inline-block">.home</div><div class="w-2/5 inline-block">navigate to home</div>
            <br /> 
            <br /> 
            <div class="ml-4 w-1/5 inline-block">--help</div><div class="w-2/5 inline-block">get all available commands</div>`;break;case"moe":e=`My first name is actually Mohammed but I go by Moe, Mauris, and in video
    games I'm known as El3ctr0n.
    <br />
    I create
    <a target="_blank" href="https://dayrakiarts.com/">stuff for the web</a>
    including websites, web applications, and contribute to <a target="_blank" href="https://github.com/moedayraki/">open source</a> as
    much as I can.`;break;case"hello":e="Hola!<br /> I'm Moe. type 'moe' to know more about me \u{1F60A} or follow me on <a target='_blank' href='https://twitter.com/MohammedDayraki'>Twitter</a>";break;case".home":s.push("/");break;default:e="unknown command: "+i}l.emit("response",e)};return{commandHandler:n}}};function E(s,n,t,e,a,i){const o=T("Terminal");return m(),x(o,{welcomeMessage:"~terminal (type '--help' for more information)",prompt:"moe $ ",class:"dark-demo-terminal"})}var N=p(U,[["render",E]]);export{N as default};