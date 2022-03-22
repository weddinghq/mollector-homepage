'use strict';function p(f,d,g,n){f.c.ma(f.L,d,g,n,void 0)}function C(f,d,g,n){f.c.i?p(f,d,g,n):f.c.Rb()._OnMessageFromDOM({type:"event",component:f.L,handler:d,dispatchOpts:n||null,data:g,responseId:null})}function D(f,d,g){f.c.b(f.L,d,g)}function J(f,d){for(const [g,n]of d)D(f,g,n)}window.U=class{constructor(f,d){this.c=f;this.L=d}Ka(){}};
window.Eb=class{constructor(f,d){this.Za=f;this.Ac=d;this.D=-1;this.aa=-Infinity;this.Fc=()=>{this.D=-1;this.aa=Date.now();this.M=!0;this.Za();this.M=!1};this.$a=this.M=!1}};"use strict";function M(f,d){D(f,"get-element",g=>{const n=f.h.get(g.elementId);return d(n,g)})}
window.ka=class extends self.U{constructor(f,d){super(f,d);this.h=new Map;this.za=!0;J(this,[["create",()=>{throw Error("required override");}],["destroy",g=>{{g=g.elementId;const n=this.h.get(g);this.za&&n.parentElement.removeChild(n);this.h.delete(g)}}],["set-visible",g=>{this.za&&(this.h.get(g.elementId).style.display=g.isVisible?"":"none")}],["update-position",g=>{if(this.za){var n=this.h.get(g.elementId);n.style.left=g.left+"px";n.style.top=g.top+"px";n.style.width=g.width+"px";n.style.height=
g.height+"px";g=g.fontSize;null!==g&&(n.style.fontSize=g+"em")}}],["update-state",g=>{this.h.get(g.elementId);throw Error("required override");}],["focus",g=>this.va(g)],["set-css-style",g=>{this.h.get(g.elementId).style[g.prop]=g.val}],["set-attribute",g=>{this.h.get(g.elementId).setAttribute(g.name,g.val)}],["remove-attribute",g=>{this.h.get(g.elementId).removeAttribute(g.name)}]]);M(this,g=>g)}va(f){var d=this.h.get(f.elementId);f.focus?d.focus():d.blur()}};"use strict";
{const f=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),d=/android/i.test(navigator.userAgent);let g=0;function n(k){const a=document.createElement("script");a.async=!1;a.type="module";return k.Kc?new Promise(e=>{const h="c3_resolve_"+g;++g;self[h]=e;a.textContent=k.Nc+`\n\nself["${h}"]();`;document.head.appendChild(a)}):new Promise((e,h)=>{a.onload=e;a.onerror=h;a.src=k;document.head.appendChild(a)})}let v=!1,F=!1;function K(){if(!v){try{new Worker("blob://",{get type(){F=
!0}})}catch(k){}v=!0}return F}let w=new Audio;const y={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function L(k){k=await G(k);return(new TextDecoder("utf-8")).decode(k)}
function G(k){return new Promise((a,e)=>{const h=new FileReader;h.onload=l=>a(l.target.result);h.onerror=l=>e(l);h.readAsArrayBuffer(k)})}const x=[];let z=0;window.RealFile=window.File;const A=[],t=new Map,B=new Map;let E=0;const H=[];self.runOnStartup=function(k){if("function"!==typeof k)throw Error("runOnStartup called without a function");H.push(k)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.j=class k{constructor(a){this.i=a.Pc;this.O=null;this.f="";this.ga=a.Mc;
this.T={};this.Da=this.hb=null;this.Z=[];this.g=this.Ga=null;this.bb=!1;this.N=null;this.B=-1;this.Ec=()=>this.mc();this.gb=[];this.a=a.ib;this.$="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&K()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(d){const e=/Chrome\/(\d+)/i.exec(navigator.userAgent);e&&90<=parseInt(e[1],10)||(this.i=!1)}else this.i=!1;this.ca=this.m=null;"html5"!==
this.a&&"playable-ad"!==this.a||!this.$||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",e=>this.Xb(e));this.b("runtime",
"create-job-worker",()=>this.Yb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Pa(a)):this.Pa(a)}Bb(){return f&&"cordova"===this.a}la(){const a=navigator.userAgent;return f&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}zb(){return d}Ma(){return d&&b.has(this.a)}async Pa(a){"macos-wkwebview"===this.a&&this.ya({type:"ready"});if("playable-ad"===this.a){this.m=self.c3_base64files;this.ca={};await this.Lb();for(let h=0,l=a.F.length;h<l;++h){var e=a.F[h].toLowerCase();
this.ca.hasOwnProperty(e)?a.F[h]={Kc:!0,Nc:this.ca[e]}:this.m.hasOwnProperty(e)&&(a.F[h]=URL.createObjectURL(this.m[e]))}}a.Gc?this.f=a.Gc:(e=location.origin,this.f=("null"===e?"file:///":e)+location.pathname,e=this.f.lastIndexOf("/"),-1!==e&&(this.f=this.f.substr(0,e+1)));a.Rc&&(this.T=a.Rc);e=new MessageChannel;this.O=e.port1;this.O.onmessage=h=>this._OnMessageFromRuntime(h.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(h=>this.jc(h));this.N=new self.Cb(this);await N(this.N);
"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.Tb(a,e.port2):await this.Sb(a,e.port2)}oa(a){a=this.T.hasOwnProperty(a)?this.T[a]:a.endsWith("/workermain.js")&&this.T.hasOwnProperty("workermain.js")?this.T["workermain.js"]:"playable-ad"===this.a&&this.m.hasOwnProperty(a.toLowerCase())?this.m[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ja(a,e,h){if(a.startsWith("blob:"))return new Worker(a,
h);if("cordova"===this.a&&this.$)return a=await this.ia(h.Jc?a:this.ga+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),h);a=new URL(a,e);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),h)}return new Worker(a,h)}o(){return Math.max(window.innerWidth,1)}l(){return Math.max(window.innerHeight,1)}Oa(a){var e=this.N;return{baseUrl:this.f,previewUrl:location.href,
windowInnerWidth:this.o(),windowInnerHeight:this.l(),devicePixelRatio:window.devicePixelRatio,isFullscreen:k.H(),projectData:a.Yc,previewImageBlobs:window.cr_previewImageBlobs||this.m,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.Wc||"",exportType:a.ib,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.Xc,jobScheduler:{inputPort:e.Ca,outputPort:e.Fa,maxNumWorkers:e.Cc},supportedAudioFormats:y,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||
this.ga+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ga+"opus.wasm.wasm",isFileProtocol:this.$,isiOSCordova:this.Bb(),isiOSWebView:this.la(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Tb(a,e){var h=this.oa(a.Qc);this.hb=await this.ja(h,this.f,{type:"module",name:"Runtime",Jc:!0});this.g=document.createElement("canvas");this.g.style.display="none";h=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let l=a.Ja||[],
r=a.F;l=await Promise.all(l.map(m=>this.v(m)));r=await Promise.all(r.map(m=>this.v(m)));if("cordova"===this.a)for(let m=0,q=a.ha.length;m<q;++m){const u=a.ha[m],I=u[0];if(I===a.Ia||"scriptsInEvents.js"===I||I.endsWith("/scriptsInEvents.js"))u[1]=await this.v(I)}this.hb.postMessage(Object.assign(this.Oa(a),{type:"init-runtime",isInWorker:!0,messagePort:e,canvas:h,workerDependencyScripts:l,engineScripts:r,projectScripts:a.ha,mainProjectScript:a.Ia,projectScriptsStatus:self.C3_ProjectScriptsStatus}),
[e,h,...O(this.N)]);this.Z=A.map(m=>new m(this));this.Na();self.c3_callFunction=(m,q)=>this.Ga.Ub(m,q);"preview"===this.a&&(self.goToLastErrorScript=()=>this.ma("runtime","go-to-last-error-script"))}async Sb(a,e){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.Z=A.map(m=>new m(this));this.Na();var h=a.F.map(m=>"string"===typeof m?(new URL(m,this.f)).toString():m);Array.isArray(a.Ja)&&h.unshift(...a.Ja);h=await Promise.all(h.map(m=>
this.v(m)));await Promise.all(h.map(m=>n(m)));h=self.C3_ProjectScriptsStatus;const l=a.Ia,r=a.ha;for(let [m,q]of r)if(q||(q=m),m===l)try{q=await this.v(q),await n(q),"preview"!==this.a||h[m]||this.Va(m,"main script did not run to completion")}catch(u){this.Va(m,u)}else if("scriptsInEvents.js"===m||m.endsWith("/scriptsInEvents.js"))q=await this.v(q),await n(q);"preview"===this.a&&"object"!==typeof self.Sc.Tc?(this.X(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Oa(a),{isInWorker:!1,messagePort:e,canvas:this.g,runOnStartupFunctions:H}),this.Ra(),this.Da=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Da,a))}Va(a,e){this.X();console.error(`[Preview] Failed to load project main script (${a}): `,e);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ra(){this.X()}X(){const a=
window.Hc;a&&(a.parentElement.removeChild(a),window.Hc=null)}async Yb(){const a=await P(this.N);return{outputPort:a,transferables:[a]}}Rb(){if(this.i)throw Error("not available in worker mode");return this.Da}ma(a,e,h,l,r){this.O.postMessage({type:"event",component:a,handler:e,dispatchOpts:l||null,data:h,responseId:null},r)}Db(a,e){const h=E++,l=new Promise((r,m)=>{B.set(h,{resolve:r,reject:m})});this.O.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:e,responseId:h},
void 0);return l}["_OnMessageFromRuntime"](a){const e=a.type;if("event"===e)return this.cc(a);if("result"===e)this.pc(a);else if("runtime-ready"===e)this.qc();else if("alert-error"===e)this.X(),alert(a.message);else if("creating-runtime"===e)this.Ra();else throw Error(`unknown message '${e}'`);}cc(a){const e=a.component,h=a.handler,l=a.data,r=a.responseId;if(a=t.get(e))if(a=a.get(h)){var m=null;try{m=a(l)}catch(q){console.error(`Exception in '${e}' handler '${h}':`,q);null!==r&&this.W(r,!1,""+q);
return}if(null===r)return m;m&&m.then?m.then(q=>this.W(r,!0,q)).catch(q=>{console.error(`Rejection from '${e}' handler '${h}':`,q);this.W(r,!1,""+q)}):this.W(r,!0,m)}else console.warn(`[DOM] No handler '${h}' for component '${e}'`);else console.warn(`[DOM] No event handlers for component '${e}'`)}W(a,e,h){let l;h&&h.transferables&&(l=h.transferables);this.O.postMessage({type:"result",responseId:a,isOk:e,result:h},l)}pc(a){const e=a.responseId,h=a.isOk;a=a.result;const l=B.get(e);h?l.resolve(a):l.reject(a);
B.delete(e)}b(a,e,h){let l=t.get(a);l||(l=new Map,t.set(a,l));if(l.has(e))throw Error(`[DOM] Component '${a}' already has handler '${e}'`);l.set(e,h)}static u(a){if(A.includes(a))throw Error("DOM handler already added");A.push(a)}Na(){for(const a of this.Z)if("runtime"===a.L){this.Ga=a;return}throw Error("cannot find runtime DOM handler");}jc(a){this.ma("debugger","message",a)}qc(){for(const a of this.Z)a.Ka()}static H(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
c)}static Y(a){c=!!a}Wa(){-1===this.B&&this.gb.length&&(this.B=requestAnimationFrame(this.Ec))}Jb(){-1!==this.B&&(cancelAnimationFrame(this.B),this.B=-1)}mc(){this.B=-1;for(const a of this.gb)a();this.Wa()}xa(){this.Ga.xa()}Fb(){this.bb=!0}yb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}Ab(a){return!this.yb(a)}async v(a){return"cordova"===this.a&&(a.startsWith("file:")||this.$&&this.Ab(a))?(a.startsWith(this.f)&&(a=a.substr(this.f.length)),a=await this.ia(a),
URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async Xb(a){const e=a.filename;switch(a.as){case "text":return await this.ob(e);case "buffer":return await this.ia(e);default:throw Error("unsupported type");}}La(a){const e=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((h,l)=>{window.resolveLocalFileSystemURL(e,r=>{r.file(h,l)},l)})}async ob(a){a=await this.La(a);return await L(a)}na(){if(x.length&&!(8<=z)){z++;var a=x.shift();this.Mb(a.filename,
a.Oc,a.Ic)}}ia(a){return new Promise((e,h)=>{x.push({filename:a,Oc:l=>{z--;this.na();e(l)},Ic:l=>{z--;this.na();h(l)}});this.na()})}async Mb(a,e,h){try{const l=await this.La(a),r=await G(l);e(r)}catch(l){h(l)}}ya(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async Lb(){const a=[];for(const [e,h]of Object.entries(this.m))a.push(this.Kb(e,
h));await Promise.all(a)}async Kb(a,e){if("object"===typeof e)this.m[a]=new Blob([e.str],{type:e.type}),this.ca[a]=e.str;else{let h=await this.Qb(e);h||(h=this.Nb(e));this.m[a]=h}}async Qb(a){try{return await (await fetch(a)).blob()}catch(e){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",e),null}}Nb(a){a=this.vc(a);return this.Ib(a.data,
a.Lc)}vc(a){var e=a.indexOf(",");if(0>e)throw new URIError("expected comma in data: uri");var h=a.substring(e+1);e=a.substring(5,e).split(";");a=e[0]||"";const l=e[2];h="base64"===e[1]||"base64"===l?atob(h):decodeURIComponent(h);return{Lc:a,data:h}}Ib(a,e){var h=a.length;let l=h>>2,r=new Uint8Array(h),m=new Uint32Array(r.buffer,0,l),q,u;for(u=q=0;q<l;++q)m[q]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;for(h&=3;h--;)r[u]=a.charCodeAt(u),++u;return new Blob([r],
{type:e})}}}"use strict";
{const f=self.j;function d(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const g=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),n={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},v={dispatchUserScriptEvent:!0},F={dispatchRuntimeEvent:!0};function K(b){return new Promise((c,k)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=e=>k(e);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function w(b){return new Promise((c,k)=>{const a=new Image;a.onload=()=>c(a);a.onerror=e=>k(e);a.src=b})}async function y(b){b=URL.createObjectURL(b);try{return await w(b)}finally{URL.revokeObjectURL(b)}}function L(b){return new Promise((c,k)=>{let a=new FileReader;a.onload=e=>c(e.target.result);a.onerror=e=>k(e);a.readAsText(b)})}async function G(b,c,k){if(!/firefox/i.test(navigator.userAgent))return await y(b);var a=await L(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const e=a.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const h=e.getAttribute("width"),l=e.getAttribute("height");if(!h.includes("%")&&!l.includes("%"))return await y(b)}e.setAttribute("width",c+"px");e.setAttribute("height",k+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await y(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const z=new Set(["input",
"textarea","datalist","select"]),A=new Set(["canvas","body","html"]);function t(b){A.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function B(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await y(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,k,a,e){b=await G(b,c,k);const h=document.createElement("canvas");h.width=a;h.height=e;h.getContext("2d").drawImage(b,0,0,c,k);return h};let E=!1;document.addEventListener("pause",()=>E=!0);document.addEventListener("resume",()=>E=!1);function H(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}f.u(class extends self.U{constructor(b){super(b,"runtime");this.cb=!0;this.C=-1;this.Ha="any";this.Xa=this.Ya=!1;this.s=
null;this.ab="";this.Ba=-1;this.A=this.R=null;this.ea=this.da=0;this.fb=b.o();this.ba=b.l();this.S=0;b.b("canvas","update-size",a=>this.sc(a));b.b("runtime","invoke-download",a=>this.ic(a));b.b("runtime","raster-svg-image",a=>this.nc(a));b.b("runtime","get-svg-image-size",a=>this.fc(a));b.b("runtime","set-target-orientation",a=>this.rc(a));b.b("runtime","register-sw",()=>this.oc());b.b("runtime","post-to-debugger",a=>this.Ta(a));b.b("runtime","go-to-script",a=>this.Ta(a));b.b("runtime","before-start-ticking",
()=>this.Wb());b.b("runtime","debug-highlight",a=>this.Zb(a));b.b("runtime","enable-device-orientation",()=>this.Hb());b.b("runtime","enable-device-motion",()=>this.Gb());b.b("runtime","add-stylesheet",a=>this.Vb(a));b.b("runtime","alert",a=>this.qa(a));b.b("runtime","hide-cordova-splash",()=>this.hc());b.b("runtime","set-exporting-to-video",a=>this.xc(a));b.b("runtime","export-to-video-progress",a=>this.dc(a));b.b("runtime","exported-to-video",a=>this.ec(a));const c=new Set(["input","textarea","datalist"]);
window.addEventListener("contextmenu",a=>{const e=a.target;c.has(e.tagName.toLowerCase())||x(e)||a.preventDefault()});const k=b.g;window.addEventListener("selectstart",t);window.addEventListener("gesturehold",t);k.addEventListener("selectstart",t);k.addEventListener("gesturehold",t);window.addEventListener("touchstart",t,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",t,{passive:!1}),k.addEventListener("pointerdown",t)):k.addEventListener("touchstart",t);this.P=
0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",B,{passive:!1});window.addEventListener("wheel",B,{passive:!1});window.addEventListener("resize",()=>this.tc());window.addEventListener("fullscreenchange",()=>this.I());window.addEventListener("webkitfullscreenchange",()=>this.I());window.addEventListener("mozfullscreenchange",()=>this.I());window.addEventListener("fullscreenerror",a=>this.sa(a));window.addEventListener("webkitfullscreenerror",
a=>this.sa(a));window.addEventListener("mozfullscreenerror",a=>this.sa(a));if(b.la())if(window.visualViewport){let a=Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>a&&(document.scrollingElement.scrollTop=0);a=e})}else window.addEventListener("focusout",()=>{{const h=document.activeElement;if(h){var a=h.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));a="textarea"===a?!0:"input"===a?e.has(h.type.toLowerCase()||
"text"):x(h)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.uc(a);this.Ea=new Set;this.Dc=new WeakSet;this.Bc=!1}Wb(){"cordova"===this.c.a?(document.addEventListener("pause",()=>this.wa(!0)),document.addEventListener("resume",()=>this.wa(!1))):document.addEventListener("visibilitychange",()=>this.wa(document.hidden));return{isSuspended:!(!document.hidden&&!E)}}Ka(){window.addEventListener("focus",()=>this.K("window-focus"));window.addEventListener("blur",()=>
{this.K("window-blur",{parentHasFocus:H()});this.P=0});window.addEventListener("focusin",c=>{c=c.target;(z.has(c.tagName.toLowerCase())||x(c))&&this.K("keyboard-blur")});window.addEventListener("keydown",c=>this.Sa("keydown",c));window.addEventListener("keyup",c=>this.Sa("keyup",c));window.addEventListener("dblclick",c=>this.ta("dblclick",c,n));window.addEventListener("wheel",c=>this.kc(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.pa(c);this.J("pointerdown",
c)}),this.c.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.R=new self.Eb(()=>this.Ob(),5),this.R.$a=!0,window.addEventListener("pointerrawupdate",c=>this.lc(c))):window.addEventListener("pointermove",c=>this.J("pointermove",c)),window.addEventListener("pointerup",c=>this.J("pointerup",c)),window.addEventListener("pointercancel",c=>this.J("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.pa(c);this.ua("pointerdown",c)}),window.addEventListener("mousemove",
c=>this.ua("pointermove",c)),window.addEventListener("mouseup",c=>this.ua("pointerup",c)),window.addEventListener("touchstart",c=>{this.pa(c);this.V("pointerdown",c)}),window.addEventListener("touchmove",c=>this.V("pointermove",c)),window.addEventListener("touchend",c=>this.V("pointerup",c)),window.addEventListener("touchcancel",c=>this.V("pointercancel",c)));const b=()=>this.xa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,
!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.c.zb()&&!this.c.Ma()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{this.ra(this.l(),navigator.virtualKeyboard.boundingRect.height)}))}ra(b,c){document.body.style.transform="";if(0<c){var k=document.activeElement;k&&(k=k.getBoundingClientRect(),b=(k.top+k.bottom)/2-(b-c)/2,b>c&&(b=c),0>b&&(b=0),0<b&&(document.body.style.transform=
`translateY(${-b}px)`))}}K(b,c){p(this,b,c||null,F)}o(){return this.c.o()}l(){return this.c.l()}tc(){const b=this.o(),c=this.l();if(this.c.Ma()){if(this.fb===b&&c<this.ba){this.S=this.ba-c;this.ra(this.ba,this.S);return}0<this.S&&(this.S=0,this.ra(c,this.S));this.fb=b;this.ba=c}this.K("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:f.H()});this.c.la()&&(-1!==this.C&&clearTimeout(this.C),this.Ua(b,c,0))}wc(b,c,k){-1!==this.C&&clearTimeout(this.C);this.C=
setTimeout(()=>this.Ua(b,c,k),48)}Ua(b,c,k){const a=this.o(),e=this.l();this.C=-1;a!=b||e!=c?this.K("window-resize",{innerWidth:a,innerHeight:e,devicePixelRatio:window.devicePixelRatio,isFullscreen:f.H()}):10>k&&this.wc(a,e,k+1)}rc(b){this.Ha=b.targetOrientation}yc(){const b=this.Ha;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?
c=screen.webkitLockOrientation(b):screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}I(){const b=f.H();b&&"any"!==this.Ha&&this.yc();p(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.l()})}sa(b){console.warn("[Construct 3] Fullscreen request failed: ",b);p(this,"fullscreenerror",
{isFullscreen:f.H(),innerWidth:this.o(),innerHeight:this.l()})}wa(b){b?this.c.Jb():this.c.Wa();p(this,"visibilitychange",{hidden:b})}Sa(b,c){"Backspace"===c.key&&t(c);const k=g.get(c.code)||c.code;C(this,b,{code:k,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},n)}kc(b){p(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,
timeStamp:b.timeStamp},n)}ta(b,c,k){d(c)||C(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},k)}ua(b,c){if(!d(c)){var k=this.P;"pointerdown"===b&&0!==k?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");C(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},n);this.P=c.buttons;this.ta(c.type,c,v)}}J(b,c){if(this.R&&"pointermove"!==b){var k=this.R;k.M||(-1!==k.D&&(self.clearTimeout(k.D),k.D=-1),k.aa=Date.now())}k=0;"mouse"===c.pointerType&&(k=this.P);C(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:(c.movementX||0)+this.da,movementY:(c.movementY||0)+this.ea,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},n);this.ea=this.da=0;"mouse"===c.pointerType&&(k="mousemove","pointerdown"===b?k="mousedown":"pointerup"===b&&(k="mouseup"),this.ta(k,c,v),this.P=c.buttons)}lc(b){this.A&&(this.da+=this.A.movementX||0,this.ea+=this.A.movementY||0);this.A=b;b=this.R;if(-1===
b.D){var c=Date.now(),k=c-b.aa,a=b.Ac;k>=a&&b.$a?(b.aa=c,b.M=!0,b.Za(),b.M=!1):b.D=self.setTimeout(b.Fc,Math.max(a-k,4))}}Ob(){this.J("pointermove",this.A);this.A=null}V(b,c){for(let k=0,a=c.changedTouches.length;k<a;++k){const e=c.changedTouches[k];C(this,b,{pointerId:e.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(e.radiusX||e.webkitRadiusX||0),height:2*(e.radiusY||
e.webkitRadiusY||0),pressure:e.force||e.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:e.rotationAngle||0,timeStamp:c.timeStamp},n)}}pa(b){window!==window.top&&window.focus();this.Qa(b.target)&&document.activeElement&&!this.Qa(document.activeElement)&&document.activeElement.blur()}Qa(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}Hb(){this.Ya||(this.Ya=!0,window.addEventListener("deviceorientation",b=>this.ac(b)),window.addEventListener("deviceorientationabsolute",
b=>this.bc(b)))}Gb(){this.Xa||(this.Xa=!0,window.addEventListener("devicemotion",b=>this.$b(b)))}ac(b){p(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},n)}bc(b){p(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},n)}$b(b){let c=null;var k=b.acceleration;k&&(c=
{x:k.x||0,y:k.y||0,z:k.z||0});k=null;var a=b.accelerationIncludingGravity;a&&(k={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const e=b.rotationRate;e&&(a={alpha:e.alpha||0,beta:e.beta||0,gamma:e.gamma||0});p(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:k,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},n)}sc(b){var c=this.c;c.bb||(c=c.g,c.style.width=b.styleWidth+"px",c.style.height=b.styleHeight+"px",c.style.marginLeft=b.marginLeft+"px",c.style.marginTop=b.marginTop+"px",this.cb&&
(c.style.display="",this.cb=!1))}ic(b){const c=b.url;b=b.filename;const k=document.createElement("a"),a=document.body;k.textContent=b;k.href=c;k.download=b;a.appendChild(k);k.click();a.removeChild(k)}async nc(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async fc(b){return await self.C3_GetSvgImageSize(b.blob)}async Vb(b){await K(b.url)}xa(){var b=
[...this.Ea];this.Ea.clear();if(!this.Bc)for(const c of b)(b=c.play())&&b.catch(()=>{this.Dc.has(c)||this.Ea.add(c)})}hc(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Zb(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var c=this.s;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.s&&
(this.s.style.display="none")}oc(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ta(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}Ub(b,c){return this.c.Db(this.L,{name:b,params:c})}qa(b){alert(b.message)}uc(b){"entered-fullscreen"===b?(f.Y(!0),this.I()):"exited-fullscreen"===b?(f.Y(!1),this.I()):console.warn("Unknown wrapper message: ",b)}xc(b){const c=document.createElement("h1");c.id="exportToVideoMessage";c.textContent=b.message;document.body.prepend(c);document.body.classList.add("exportingToVideo");
this.c.g.style.display="";this.c.Fb()}dc(b){this.ab=b.message;-1===this.Ba&&(this.Ba=setTimeout(()=>this.Pb(),250))}Pb(){this.Ba=-1;const b=document.getElementById("exportToVideoMessage");b&&(b.textContent=this.ab)}ec(b){window.Vc({type:"exported-video",blob:b.blob,time:b.time})}})}"use strict";
async function N(f){if(f.zc)throw Error("already initialised");f.zc=!0;var d=f.fa.oa("dispatchworker.js");f.Aa=await f.fa.ja(d,f.f,{name:"DispatchWorker"});d=new MessageChannel;f.Ca=d.port1;f.Aa.postMessage({type:"_init","in-port":d.port2},[d.port2]);f.Fa=await P(f)}function O(f){return[f.Ca,f.Fa]}
async function P(f){const d=f.eb.length;var g=f.fa.oa("jobworker.js");g=await f.fa.ja(g,f.f,{name:"JobWorker"+d});const n=new MessageChannel,v=new MessageChannel;f.Aa.postMessage({type:"_addJobWorker",port:n.port1},[n.port1]);g.postMessage({type:"init",number:d,"dispatch-port":n.port2,"output-port":v.port2},[n.port2,v.port2]);f.eb.push(g);return v.port1}
self.Cb=class{constructor(f){this.fa=f;this.f=f.f;this.f="preview"===f.a?this.f+"workers/":this.f+f.ga;this.Cc=Math.min(navigator.hardwareConcurrency||2,16);this.Aa=null;this.eb=[];this.Fa=this.Ca=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.j({Pc:!0,Qc:"workermain.js",F:["scripts/c3runtime.js"],ha:[],Ia:"",Mc:"scripts/",Ja:["lodash.custom.min.js","tween.js"],ib:"html5"}));"use strict";
self.j.u(class extends self.ka{constructor(f){super(f,"cv-playfab-api");J(this,[["call-api-method",d=>{window.PlayFab.ClientApi[d[0]](d[1],this.kb,d[2])}],["set-title-id",d=>{window.PlayFab.settings.titleId=d[0]}],["forget-all-credentials",()=>{window.PlayFab.ClientApi.ForgetAllCredentials()}]]);this.G()}G(){const f=this;this.kb=(d,g)=>{p(f,"call-api-method",[d,g])}}});"use strict";
self.j.u(class extends self.ka{constructor(f){super(f,"cv-playfab-authentication");J(this,[["login-with-android",d=>{window.PlayFab.ClientApi.LoginWithAndroidDeviceID(d[0],this.jb)}],["login-with-ios",d=>{window.PlayFab.ClientApi.LoginWithIOSDeviceID(d[0],this.xb)}],["login-with-custom-id",d=>{window.PlayFab.ClientApi.LoginWithCustomID(d[0],this.pb)}],["login-with-facebook",d=>{window.PlayFab.ClientApi.LoginWithFacebook(d[0],this.qb)}],["login-with-google",d=>{window.PlayFab.ClientApi.LoginWithGoogleAccount(d[0],
this.wb)}],["login-with-email",d=>{window.PlayFab.ClientApi.LoginWithEmailAddress(d[0],this.lb)}],["login-with-playfab",d=>{window.PlayFab.ClientApi.LoginWithPlayFab(d[0],this.nb)}],["register-with-playfab",d=>{window.PlayFab.ClientApi.RegisterPlayFabUser(d[0],this.mb)}],["set-entity-token",d=>{window.PlayFab._internalSettings.entityToken=d[0]}],["set-session-ticket",d=>{d=d[0];window.PlayFab._internalSettings.sessionTicket=d;p(this,"set-session-ticket",[d])}]]);this.G()}G(){const f=this;this.jb=
(d,g)=>{p(f,"login-with-android",[d,g])};this.xb=(d,g)=>{p(f,"login-with-ios",[d,g])};this.pb=(d,g)=>{p(f,"login-with-custom-id",[d,g])};this.qb=(d,g)=>{p(f,"login-with-facebook",[d,g])};this.wb=(d,g)=>{p(f,"login-with-google",[d,g])};this.lb=(d,g)=>{p(f,"login-with-email",[d,g])};this.nb=(d,g)=>{p(f,"login-with-playfab",[d,g])};this.mb=(d,g)=>{p(f,"register-with-playfab",[d,g])}}});"use strict";function Q(f,d,g){window.PlayFab.ClientApi.GetCatalogItems(d,f.rb,g)}
function R(f,d,g){window.PlayFab.ClientApi.GetStoreItems(d,f.sb,g)}function S(f,d){window.PlayFab.ClientApi.GetTime(d,f.tb)}function T(f,d,g){window.PlayFab.ClientApi.GetTitleData(d,f.ub,g)}function V(f,d){window.PlayFab.ClientApi.GetTitleNews(d,f.vb)}
self.j.u(class extends self.ka{constructor(f){super(f,"cv-playfab-titlemanager");J(this,[["get-catalog-items",d=>Q(this,...d)],["get-store-items",d=>R(this,...d)],["get-time",d=>S(this,...d)],["get-title-data",d=>T(this,...d)],["get-title-news",d=>V(this,...d)]]);this.G()}G(){const f=this;this.rb=(...d)=>{p(f,"get-catalog-items",d)};this.sb=(...d)=>{p(f,"get-store-items",d)};this.tb=(...d)=>{p(f,"get-time",d)};this.ub=(...d)=>{p(f,"get-title-data",d)};this.vb=(...d)=>{p(f,"get-title-news",d)}}});
"use strict";function W(f){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(d=>p(f,"sw-message",d.data))}
function X(f){f=f.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(f).catch(d=>console.warn("[Construct 3] Failed to lock orientation: ",d));else try{let d=!1;screen.lockOrientation?d=screen.lockOrientation(f):screen.webkitLockOrientation?d=screen.webkitLockOrientation(f):screen.mozLockOrientation?d=screen.mozLockOrientation(f):screen.msLockOrientation&&(d=screen.msLockOrientation(f));d||console.warn("[Construct 3] Failed to lock orientation")}catch(d){console.warn("[Construct 3] Failed to lock orientation: ",
d)}}
self.j.u(class extends self.U{constructor(f){super(f,"browser");this.a="";J(this,[["get-initial-state",d=>{this.a=d.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isConstructArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>W(this)],
["alert",d=>this.qa(d)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",d=>this.va(d)],["vibrate",d=>{navigator.vibrate&&navigator.vibrate(d.pattern)}],["lock-orientation",d=>X(d)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(d){}}],["navigate",d=>{var g=d.type;if("back"===g)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===g)window.history.forward();else if("reload"===g)location.reload();else if("url"===g){g=d.url;const n=d.target;d=d.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(g,"_system"):"preview"===
d||"windows-webview2"===d?window.open(g,"_blank"):this.Uc||(2===n?window.top.location=g:1===n?window.parent.location=g:window.location=g)}else"new-window"===g&&(g=d.url,d=d.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(g,"_system"):window.open(g,d))}],["request-fullscreen",d=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.j.Y(!0),this.c.ya({type:"set-fullscreen",fullscreen:!0});else{const g={navigationUI:"auto"};d=d.navUI;1===d?g.navigationUI="hide":
2===d&&(g.navigationUI="show");d=document.documentElement;d.requestFullscreen?d.requestFullscreen(g):d.mozRequestFullScreen?d.mozRequestFullScreen(g):d.msRequestFullscreen?d.msRequestFullscreen(g):d.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):d.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.j.Y(!1),this.c.ya({type:"set-fullscreen",fullscreen:!1})):
document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",d=>{location.hash=d.hash}]]);window.addEventListener("online",()=>{p(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{p(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{p(this,"hashchange",{location:location.toString()})});
document.addEventListener("backbutton",()=>{p(this,"backbutton")})}qa(f){alert(f.message)}va(f){f=f.isFocus;if("nwjs"===this.a){const d="nwjs"===this.a?nw.Window.get():null;f?d.focus():d.blur()}else f?window.focus():window.blur()}});"use strict";async function Y(f,d){d=d.type;let g=!0;0===d?g=await Z():1===d&&(g=await aa());p(f,"permission-result",{type:d,result:g})}
async function Z(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request orientation permission: ",f),!1}}
async function aa(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request motion permission: ",f),!1}}self.j.u(class extends self.U{constructor(f){super(f,"touch");D(this,"request-permission",d=>Y(this,d))}});
