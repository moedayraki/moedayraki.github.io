import{_ as Se,o as P,c as U,t as j,a as Je,b as _,F as $e,r as Ve,w as Ke,v as We,u as Ge,d as Xe,e as Qe,f as Ze,g as Ye,h as et,i as tt}from"./index.c67817f1.js";import{p as nt}from"./utils.esm.576aae18.js";var T=nt();const rt={name:"Terminal",props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},data(){return{commandText:null,commands:[]}},mounted(){T.on("response",this.responseListener),this.$refs.input.focus()},updated(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount(){T.off("response",this.responseListener)},methods:{onClick(){this.$refs.input.focus()},onKeydown(e){e.keyCode===13&&this.commandText&&(this.commands.push({text:this.commandText}),T.emit("command",this.commandText),this.commandText.toLowerCase()=="clear"&&(this.commands.length=0),this.commandText="")},responseListener(e){this.commands[this.commands.length-1].response=e}}},st={key:0},ot={class:"p-terminal-content"},it={class:"p-terminal-prompt"},at={class:"p-terminal-command"},ct=["innerHTML"],lt={class:"p-terminal-prompt-container"},ut={class:"p-terminal-prompt"};function dt(e,t,n,r,s,o){return P(),U("div",{class:"p-terminal p-component",onClick:t[2]||(t[2]=(...i)=>o.onClick&&o.onClick(...i))},[n.welcomeMessage?(P(),U("div",st,j(n.welcomeMessage),1)):Je("",!0),_("div",ot,[(P(!0),U($e,null,Ve(s.commands,(i,l)=>(P(),U("div",{key:i.text+l.toString()},[_("span",it,j(n.prompt),1),_("span",at,j(i.text),1),_("div",{class:"p-terminal-response",innerHTML:i.response},null,8,ct)]))),128))]),_("div",lt,[_("span",ut,j(n.prompt),1),Ke(_("input",{ref:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=i=>s.commandText=i),class:"p-terminal-input",autocomplete:"off",onKeydown:t[1]||(t[1]=(...i)=>o.onKeydown&&o.onKeydown(...i))},null,544),[[We,s.commandText]])])])}var ft=Se(rt,[["render",dt]]);function Re(e,t){return function(){return e.apply(t,arguments)}}const{toString:pt}=Object.prototype,{getPrototypeOf:re}=Object,z=(e=>t=>{const n=pt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>z(t)===e),J=e=>t=>typeof t===e,{isArray:C}=Array,B=J("undefined");function ht(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Oe=O("ArrayBuffer");function mt(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Oe(e.buffer),t}const bt=J("string"),g=J("function"),xe=J("number"),$=e=>e!==null&&typeof e=="object",wt=e=>e===!0||e===!1,I=e=>{if(z(e)!=="object")return!1;const t=re(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=O("Date"),Et=O("File"),gt=O("Blob"),St=O("FileList"),Rt=e=>$(e)&&g(e.pipe),Ot=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=z(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},xt=O("URLSearchParams"),Tt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,s;if(typeof e!="object"&&(e=[e]),C(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ae=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),ke=e=>!B(e)&&e!==Ae;function Z(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&Te(t,s)||s;I(t[o])&&I(r)?t[o]=Z(t[o],r):I(r)?t[o]=Z({},r):C(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&F(arguments[r],n);return t}const At=(e,t,n,{allOwnKeys:r}={})=>(F(t,(s,o)=>{n&&g(s)?e[o]=Re(s,n):e[o]=s},{allOwnKeys:r}),e),kt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_t=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},vt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&re(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ct=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Nt=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Pt=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&re(Uint8Array)),Bt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ft=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Lt=O("HTMLFormElement"),Dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),le=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ut=O("RegExp"),_e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},jt=e=>{_e(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},It=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return C(e)?r(e):r(String(e).split(t)),n},Mt=()=>{},Ht=(e,t)=>(e=+e,Number.isFinite(e)?e:t),W="abcdefghijklmnopqrstuvwxyz",ue="0123456789",ve={DIGIT:ue,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+ue},qt=(e=16,t=ve.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function zt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Jt=e=>{const t=new Array(10),n=(r,s)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=C(r)?[]:{};return F(r,(i,l)=>{const d=n(i,s+1);!B(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},$t=O("AsyncFunction"),Vt=e=>e&&($(e)||g(e))&&g(e.then)&&g(e.catch);var a={isArray:C,isArrayBuffer:Oe,isBuffer:ht,isFormData:Ot,isArrayBufferView:mt,isString:bt,isNumber:xe,isBoolean:wt,isObject:$,isPlainObject:I,isUndefined:B,isDate:yt,isFile:Et,isBlob:gt,isRegExp:Ut,isFunction:g,isStream:Rt,isURLSearchParams:xt,isTypedArray:Pt,isFileList:St,forEach:F,merge:Z,extend:At,trim:Tt,stripBOM:kt,inherits:_t,toFlatObject:vt,kindOf:z,kindOfTest:O,endsWith:Ct,toArray:Nt,forEachEntry:Bt,matchAll:Ft,isHTMLForm:Lt,hasOwnProperty:le,hasOwnProp:le,reduceDescriptors:_e,freezeMethods:jt,toObjectSet:It,toCamelCase:Dt,noop:Mt,toFiniteNumber:Ht,findKey:Te,global:Ae,isContextDefined:ke,ALPHABET:ve,generateString:qt,isSpecCompliantForm:zt,toJSONObject:Jt,isAsyncFn:$t,isThenable:Vt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ce=m.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}});Object.defineProperties(m,Ne);Object.defineProperty(Ce,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ce);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var Kt=null;function Y(e){return a.isPlainObject(e)||a.isArray(e)}function Pe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,t,n){return e?e.concat(t).map(function(s,o){return s=Pe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Wt(e){return a.isArray(e)&&!e.some(Y)}const Gt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,y){return!a.isUndefined(y[h])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,h,y){let x=u;if(u&&!y&&typeof u=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Wt(u)||(a.isFileList(u)||a.endsWith(h,"[]"))&&(x=a.toArray(u)))return h=Pe(h),x.forEach(function(D,ze){!(a.isUndefined(D)||D===null)&&t.append(i===!0?de([h],ze,o):i===null?h:h+"[]",f(D))}),!1}return Y(u)?!0:(t.append(de(y,h,o),f(u)),!1)}const p=[],w=Object.assign(Gt,{defaultVisitor:c,convertValue:f,isVisitable:Y});function E(u,h){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(u),a.forEach(u,function(x,S){(!(a.isUndefined(x)||x===null)&&s.call(t,x,a.isString(S)?S.trim():S,h,w))===!0&&E(x,h?h.concat(S):[S])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&V(e,this,t)}const Be=se.prototype;Be.append=function(t,n){this._pairs.push([t,n])};Be.toString=function(t){const n=t?function(r){return t.call(this,r,fe)}:fe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Xt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fe(e,t,n){if(!t)return e;const r=n&&n.encode||Xt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Qt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var pe=Qt,Le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zt=typeof URLSearchParams!="undefined"?URLSearchParams:se,Yt=typeof FormData!="undefined"?FormData:null,en=typeof Blob!="undefined"?Blob:null,tn={isBrowser:!0,classes:{URLSearchParams:Zt,FormData:Yt,Blob:en},protocols:["http","https","file","blob","url","data"]};const De=typeof window!="undefined"&&typeof document!="undefined",nn=(e=>De&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!="undefined"&&navigator.product),rn=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var sn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:De,hasStandardBrowserWebWorkerEnv:rn,hasStandardBrowserEnv:nn},Symbol.toStringTag,{value:"Module"})),R={...sn,...tn};function on(e,t){return V(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function an(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function cn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ue(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=cn(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(an(r),s,n,0)}),n}return null}function ln(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const oe={transitional:Le,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return on(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return V(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),ln(t)):t}],transformResponse:[function(t){const n=this.transitional||oe.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{oe.headers[e]={}});var ie=oe;const un=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var dn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&un[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const he=Symbol("internals");function N(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function fn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const pn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function hn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function mn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,f){const c=N(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||d]=M(l))}const i=(l,d)=>a.forEach(l,(f,c)=>o(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!pn(t)?i(dn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=N(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return fn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=N(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=N(i),i){const l=a.findKey(r,i);l&&(!n||G(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=M(s),delete n[o];return}const l=t?hn(o):String(o).trim();l!==o&&delete n[o],n[l]=M(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[he]=this[he]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=N(i);r[l]||(mn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(K.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(K);var A=K;function X(e,t){const n=this||ie,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function je(e){return!!(e&&e.__CANCEL__)}function L(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(L,m,{__CANCEL__:!0});function bn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var wn=R.hasStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function yn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function En(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!yn(t)?En(e,t):t}var gn=R.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Sn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Rn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[o];i||(i=f),n[s]=d,r[s]=f;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const E=c&&f-c;return E?Math.round(w*1e3/E):void 0}}function me(e,t){let n=0;const r=Rn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),f=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&f?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const On=typeof XMLHttpRequest!="undefined";var xn=On&&function(e){return new Promise(function(n,r){let s=e.data;const o=A.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;if(a.isFormData(s)){if(R.hasStandardBrowserEnv||R.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[u,...h]=f?f.split(";").map(y=>y.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...h].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+h))}const p=Ie(e.baseURL,e.url);c.open(e.method.toUpperCase(),Fe(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const u=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};bn(function(S){n(S),d()},function(S){r(S),d()},y),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){!c||(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||Le;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new m(h,y.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},R.hasStandardBrowserEnv){const u=gn(p)&&e.xsrfCookieName&&wn.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(h,y){c.setRequestHeader(y,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",me(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",me(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{!c||(r(!u||u.type?new L(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const E=Sn(p);if(E&&R.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})};const ee={http:Kt,xhr:xn};a.forEach(ee,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const be=e=>`- ${e}`,Tn=e=>a.isFunction(e)||e===null||e===!1;var Me={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Tn(n)&&(r=ee[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(be).join(`
`):" "+be(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ee};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function we(e){return Q(e),e.headers=A.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Me.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return je(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const ye=e=>e instanceof A?e.toJSON():e;function v(e,t){t=t||{};const n={};function r(f,c,p){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:p},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(f,c,p){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,c,p)}function o(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function l(f,c,p){if(p in t)return r(f,c);if(p in e)return r(void 0,f)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(f,c)=>s(ye(f),ye(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||s,w=p(e[c],t[c],c);a.isUndefined(w)&&p!==l||(n[c]=w)}),n}const He="1.6.1",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ee={};ae.transitional=function(t,n,r){function s(o,i){return"[Axios v"+He+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ee[i]&&(Ee[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function An(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}var te={assertOptions:An,validators:ae};const k=te.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new pe,response:new pe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=v(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:k.transitional(k.boolean),forcedJSONParsing:k.transitional(k.boolean),clarifyTimeoutError:k.transitional(k.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:te.assertOptions(s,{encode:k.function,serialize:k.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=A.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let c,p=0,w;if(!d){const u=[we.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,f),w=u.length,c=Promise.resolve(n);p<w;)c=c.then(u[p++],u[p++]);return c}w=l.length;let E=n;for(p=0;p<w;){const u=l[p++],h=l[p++];try{E=u(E)}catch(y){h.call(this,y);break}}try{c=we.call(this,E)}catch(u){return Promise.reject(u)}for(p=0,w=f.length;p<w;)c=c.then(f[p++],f[p++]);return c}getUri(t){t=v(this.defaults,t);const n=Ie(t.baseURL,t.url);return Fe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(v(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(v(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});var H=q;class ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new L(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ce(function(s){t=s}),cancel:t}}}var kn=ce;function _n(e){return function(n){return e.apply(null,n)}}function vn(e){return a.isObject(e)&&e.isAxiosError===!0}const ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ne).forEach(([e,t])=>{ne[t]=e});var Cn=ne;function qe(e){const t=new H(e),n=Re(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return qe(v(e,s))},n}const b=qe(ie);b.Axios=H;b.CanceledError=L;b.CancelToken=kn;b.isCancel=je;b.VERSION=He;b.toFormData=V;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=_n;b.isAxiosError=vn;b.mergeConfig=v;b.AxiosHeaders=A;b.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=Me.getAdapter;b.HttpStatusCode=Cn;b.default=b;var ge=b;const Nn={name:"terminal-view",components:{Terminal:ft,TerminalService:T},setup(){const e=Ge();Xe();const t=Qe();Ze(()=>{T.on("command",n)}),Ye(()=>{T.off("command",n)});const n=r=>{let s,o=r.indexOf(" "),i=o!==-1?r.substring(0,o):r,l=r.substring(o+1);switch(i.toLowerCase()){case"--help":s=`commands:
            <br />
            ~terminal is moe's portfolio as a CLI.
            <br />
            <div class="ml-4 w-1/5 inline-block">moe</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">get to know more about moe</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">hello</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">just say hi</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">toggle-scheme</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">toggle between light/dark modes</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">navigate</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">navigate through different pages</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">blog</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">redirect to the moe blog</div>
            <br />
            <br />
            <div class="ml-4 w-1/5 inline-block">tech-me</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">throws a random tech-savvy phrase.</div>
            <br />
            <br />
            <div class="ml-4 w-1/5 inline-block">--help</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">get all available commands</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">clear</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">clear the CLI</div>`;break;case"moe":s=`My first name is actually Mohammed but I go by Moe, Mauris, and in video
    games I'm known as El3ctr0n.
    <br />
    I create
    <a target="_blank" href="https://dayrakiarts.com/">stuff for the web</a>
    including websites, web applications, and contribute to <a target="_blank" href="https://github.com/moedayraki/">open source</a> as
    much as I can.`;break;case"hello":switch(l.toLowerCase()){case"--languages":ge({url:"https://libretranslate.com/languages",method:"get",headers:{accept:'application/json"'}}).then(function(d){s="available languages: ",d.data.forEach(f=>{s+=`${f.name} `,T.emit("response",s)})});break;default:s="I'm sorry! \u2639\uFE0F but I'm working on this feature.<br /> please type 'hello --languages' to get list of available languages or follow me on <a target='_blank' href='https://twitter.com/MohammedDayraki'>Twitter</a>"}break;case"tech-me":ge({url:"https://techy-api.vercel.app/api/text",method:"get"}).then(function(d){s=d.data,T.emit("response",s)});break;case"navigate":switch(l.toLowerCase()){case"--help":s=`available paths:
              <br />
              <div class="ml-4 w-1/5 inline-block">home</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">navigate to home</div>
              <br />
              <div class="ml-4 w-1/5 inline-block">projects</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">navigate to projects</div>
              <br />
              <div class="ml-4 w-1/5 inline-block">contact</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">navigate to contact</div>
              <br />
              `;break;case"home":e.push("/");break;case"projects":e.push("/projects");break;case"contact":e.push("/contact");break;default:s="unknown path. type 'navigate --help' to get all the options";break}break;case"toggle-scheme":t.toggleMediaPreference();break;case"blog":window.location.href="https://www.blog.dayrakiarts.com",s="redirecting...";break;case"jana":s=`Jana is something I can't live without.\u2764
          <br/>
          If you find this code, you're either know your way in programming or you're close enough to me! \u{1F607}
          <br/>
          I love Jana, I will always love Jana!
          `;break;case"clear":e.push("/terminal");break;default:s="unknown command: "+i}T.emit("response",s)};return{commandHandler:n}}};function Pn(e,t,n,r,s,o){const i=et("Terminal");return P(),tt(i,{welcomeMessage:"~terminal (type '--help' for more information)",prompt:"moe $ ",class:"moe-terminal"})}var Ln=Se(Nn,[["render",Pn]]);export{Ln as default};