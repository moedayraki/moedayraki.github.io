import{_ as p,o as m,c,t as d,a as h,b as r,F as f,r as v,w as b,v as w,u as _,d as g,e as k,f as y,g as T,h as x,i as M}from"./index.5c6512bc.js";function I(){const a=new Map;return{on(n,t){let e=a.get(n);e?e.push(t):e=[t],a.set(n,e)},off(n,t){let e=a.get(n);e&&e.splice(e.indexOf(t)>>>0,1)},emit(n,t){let e=a.get(n);e&&e.slice().map(s=>{s(t)})}}}var l=I();const C={name:"Terminal",props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},data(){return{commandText:null,commands:[]}},mounted(){l.on("response",this.responseListener),this.$refs.input.focus()},updated(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount(){l.off("response",this.responseListener)},methods:{onClick(){this.$refs.input.focus()},onKeydown(a){a.keyCode===13&&this.commandText&&(this.commands.push({text:this.commandText}),l.emit("command",this.commandText),this.commandText="")},responseListener(a){this.commands[this.commands.length-1].response=a}}},L={key:0},H={class:"p-terminal-content"},S={class:"p-terminal-prompt"},B={class:"p-terminal-command"},V=["innerHTML"],K={class:"p-terminal-prompt-container"},$={class:"p-terminal-prompt"};function D(a,n,t,e,s,i){return m(),c("div",{class:"p-terminal p-component",onClick:n[2]||(n[2]=(...o)=>i.onClick&&i.onClick(...o))},[t.welcomeMessage?(m(),c("div",L,d(t.welcomeMessage),1)):h("",!0),r("div",H,[(m(!0),c(f,null,v(s.commands,(o,u)=>(m(),c("div",{key:o.text+u.toString()},[r("span",S,d(t.prompt),1),r("span",B,d(o.text),1),r("div",{class:"p-terminal-response",innerHTML:o.response},null,8,V)]))),128))]),r("div",K,[r("span",$,d(t.prompt),1),b(r("input",{ref:"input",type:"text","onUpdate:modelValue":n[0]||(n[0]=o=>s.commandText=o),class:"p-terminal-input",autocomplete:"off",onKeydown:n[1]||(n[1]=(...o)=>i.onKeydown&&i.onKeydown(...o))},null,544),[[w,s.commandText]])])])}var J=p(C,[["render",D]]);const N={name:"terminal-view",components:{Terminal:J,TerminalService:l},setup(){const a=_();g();const n=k();y(()=>{l.on("command",t)}),T(()=>{l.off("command",t)});const t=e=>{let s,i=e.indexOf(" "),o=i!==-1?e.substring(0,i):e;switch(o.toLowerCase()){case"--help":s=`commands:
            <br />
            ~terminal is moe's portfolio as a CLI. New commands and features will be added to the portofolio every week.
            <br />
            <div class="ml-4 w-1/5 inline-block">moe</div><div class="w-2/5 inline-block">get to know more about moe</div>
            <br /> 
            <div class="ml-4 w-1/5 inline-block">hello</div><div class="w-2/5 inline-block">just say hi</div>
            <br /> 
            <div class="ml-4 w-1/5 inline-block">.home</div><div class="w-2/5 inline-block">navigate to home</div>
            <br /> 
            <br /> 
            <div class="ml-4 w-1/5 inline-block">--help</div><div class="w-2/5 inline-block">get all available commands</div>`;break;case"moe":s=`My first name is actually Mohammed but I go by Moe, Mauris, and in video
    games I'm known as El3ctr0n.
    <br />
    I create
    <a target="_blank" href="https://dayrakiarts.com/">stuff for the web</a>
    including websites, web applications, and contribute to <a target="_blank" href="https://github.com/moedayraki/">open source</a> as
    much as I can.`;break;case"hello":s="Hola!<br /> I'm Moe. type 'moe' to know more about me \u{1F60A} or follow me on <a target='_blank' href='https://twitter.com/MohammedDayraki'>Twitter</a>";break;case".home":a.push("/");break;case"toggle-scheme":n.toggleMediaPreference();break;case"jana":s=`Jana is something I can't live without.\u2764 
          <br/>
          If you find this code, you're either know your way in programming or you're close enough to me! \u{1F607}
          <br/>
          I love Jana, I will always love Jana!
          `;break;default:s="unknown command: "+o}l.emit("response",s)};return{commandHandler:t}}};function U(a,n,t,e,s,i){const o=x("Terminal");return m(),M(o,{welcomeMessage:"~terminal (type '--help' for more information)",prompt:"moe $ ",class:"moe-terminal"})}var E=p(N,[["render",U]]);export{E as default};
