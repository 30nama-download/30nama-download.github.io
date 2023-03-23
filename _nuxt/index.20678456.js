import{k as tt,r as B,l as V,m as et,p as U,q as st,g as y,s as nt,j as O,v as at,o as v,e as D,x as rt,y as ot,f as i,d as j,t as N,z as lt,A as P,B as K,C as z,w as C,h as b,D as R,E as it,F as ct,G as dt}from"./entry.3790869b.js";import{_ as T}from"./_plugin-vue_export-helper.eab6a975.js";import G from"./Icon.b096bc71.js";import{_ as Z,u as ut}from"./useOverlays.7598437a.js";import{_ as q}from"./nuxt-link.079885ad.js";const ft=()=>null;function _t(...n){var d;const r=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(r);let[s,e,t={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??ft,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=tt(),l=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],c=()=>l()!==void 0;a._asyncData[s]||(a._asyncData[s]={data:B(l()??((d=t.default)==null?void 0:d.call(t))??null),pending:B(!c()),error:B(a.payload._errors[s]?V(a.payload._errors[s]):null)});const o={...a._asyncData[s]};o.refresh=o.execute=(h={})=>{if(a._asyncDataPromises[s]){if(h.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if(h._initial&&c())return l();o.pending.value=!0;const w=new Promise((f,p)=>{try{f(e(a))}catch($){p($)}}).then(f=>{if(w.cancelled)return a._asyncDataPromises[s];let p=f;t.transform&&(p=t.transform(f)),t.pick&&(p=pt(p,t.pick)),o.data.value=p,o.error.value=null}).catch(f=>{var p;if(w.cancelled)return a._asyncDataPromises[s];o.error.value=f,o.data.value=y(((p=t.default)==null?void 0:p.call(t))??null)}).finally(()=>{w.cancelled||(o.pending.value=!1,a.payload.data[s]=o.data.value,o.error.value&&(a.payload._errors[s]=V(o.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=w,a._asyncDataPromises[s]};const _=()=>o.refresh({_initial:!0}),u=t.server!==!1&&a.payload.serverRendered;{const h=nt();if(h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const f=h._nuxtOnBeforeMountCbs;h&&(et(()=>{f.forEach(p=>{p()}),f.splice(0,f.length)}),U(()=>f.splice(0,f.length)))}u&&a.isHydrating&&c()?o.pending.value=!1:h&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?h._nuxtOnBeforeMountCbs.push(_):t.immediate&&_(),t.watch&&st(t.watch,()=>o.refresh());const w=a.hook("app:data:refresh",f=>{if(!f||f.includes(s))return o.refresh()});h&&U(w)}const g=Promise.resolve(a._asyncDataPromises[s]).then(()=>o);return Object.assign(g,o),g}function pt(n,r){const s={};for(const e of r)s[e]=n[e];return s}const ht={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function mt(n,r={}){r={...ht,...r};const s=J(r);return s.dispatch(n),s.toString()}function J(n){const r=[];let s=[];const e=t=>{r.push(t)};return{toString(){return r.join("")},getContext(){return s},dispatch(t){return n.replacer&&(t=n.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){const a=/\[object (.*)]/i,l=Object.prototype.toString.call(t),c=a.exec(l),o=c?c[1].toLowerCase():"unknown:["+l.toLowerCase()+"]";let _=null;if((_=s.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+_+"]");if(s.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")if(this["_"+o])this["_"+o](t);else{if(n.ignoreUnknown)return e("["+o+"]");throw new Error('Unknown object type "'+o+'"')}else{let u=Object.keys(t);n.unorderedObjects&&(u=u.sort()),n.respectType!==!1&&!F(t)&&u.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(u=u.filter(function(g){return!n.excludeKeys(g)})),e("object:"+u.length+":");for(const g of u)this.dispatch(g),e(":"),n.excludeValues||this.dispatch(t[g]),e(",")}},_array(t,a){if(a=typeof a<"u"?a:n.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1){for(const o of t)this.dispatch(o);return}const l=[],c=t.map(o=>{const _=J(n);return _.dispatch(o),l.push(_.getContext()),_.toString()});return s=[...s,...l],c.sort(),this._array(c,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),F(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_set(t){e("set:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function F(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class I{constructor(r,s){r=this.words=r||[],this.sigBytes=s!==void 0?s:r.length*4}toString(r){return(r||yt).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new I([...this.words])}}const yt={stringify(n){const r=[];for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;r.push((e>>>4).toString(16),(e&15).toString(16))}return r.join("")}},gt={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,a=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,l=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|a<<8|l;for(let o=0;o<4&&e*8+o*6<n.sigBytes*8;o++)s.push(r.charAt(c>>>6*(3-o)&63))}return s.join("")}},xt={parse(n){const r=n.length,s=[];for(let e=0;e<r;e++)s[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new I(s,r)}},wt={parse(n){return xt.parse(unescape(encodeURIComponent(n)))}};class bt{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new I,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=wt.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,e=this._data.sigBytes/(this.blockSize*4);r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let l=0;l<t;l+=this.blockSize)this._doProcessBlock(this._data.words,l);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new I(s,a)}}class vt extends bt{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const Bt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],kt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],A=[];class $t extends vt{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new I([...Bt])}_doProcessBlock(r,s){const e=this._hash.words;let t=e[0],a=e[1],l=e[2],c=e[3],o=e[4],_=e[5],u=e[6],g=e[7];for(let d=0;d<64;d++){if(d<16)A[d]=r[s+d]|0;else{const k=A[d-15],M=(k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3,S=A[d-2],X=(S<<15|S>>>17)^(S<<13|S>>>19)^S>>>10;A[d]=M+A[d-7]+X+A[d-16]}const h=o&_^~o&u,w=t&a^t&l^a&l,f=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),p=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),$=g+p+h+kt[d]+A[d],m=f+w;g=u,u=_,_=o,o=c+$|0,c=l,l=a,a=t,t=$+m|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+l|0,e[3]=e[3]+c|0,e[4]=e[4]+o|0,e[5]=e[5]+_|0,e[6]=e[6]+u|0,e[7]=e[7]+g|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function St(n){return new $t().finalize(n).toString(gt)}function Ct(n,r={}){const s=typeof n=="string"?n:mt(n,r);return St(s).slice(0,10)}function W(n,r,s){const[e={},t]=typeof r=="string"?[{},r]:[r,s],a=e.key||Ct([t,y(e.baseURL),typeof n=="string"?n:"",y(e.params||e.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const l=a===t?"$f"+a:a,c=O(()=>{let M=n;return typeof M=="function"&&(M=M()),y(M)}),{server:o,lazy:_,default:u,transform:g,pick:d,watch:h,immediate:w,...f}=e,p=at({...f,cache:typeof e.cache=="boolean"?void 0:e.cache}),$={server:o,lazy:_,default:u,transform:g,pick:d,immediate:w,watch:[p,c,...h||[]]};let m;return _t(l,()=>{var S;return(S=m==null?void 0:m.abort)==null||S.call(m),m=typeof AbortController<"u"?new AbortController:{},typeof c.value=="string"&&c.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(c.value,{signal:m.signal,...p})},$)}const Dt=""+globalThis.__publicAssetsURL("videos/teaser.mp4");const Mt={},Q=n=>(rt("data-v-73e0da12"),n=n(),ot(),n),At={class:"background relative flex md:h-[22em] gap-4 w-full flex-col justify-center rounded-3xl p-4 md:flex-row md:justify-between md:p-12"},Nt=Q(()=>i("div",{class:"relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center"},[i("h2",{class:"text-base font-semibold md:text-2xl"},"دیگه VPN هم نمیخواد! بی‌وقفه تماشا کن!"),i("p",{class:"text-sm md:text-base"},"با استفاده از اپلیکیشن‌های ۳۰نما نیازی به VPN برای دانلود یا تماشای فیلم و سریال ها ندارید.")],-1)),It=Q(()=>i("span",{class:"bg-primary-500/50 flex aspect-video h-full w-full shrink-0 rounded-2xl md:relative md:inset-0 md:w-auto"},[i("video",{src:Dt,class:"h-full w-full rounded-2xl object-cover",controls:"",autoplay:"",controlsList:"nodownload noremoteplayback"})],-1)),Ot=[Nt,It];function Pt(n,r){return v(),D("div",At,Ot)}const jt=T(Mt,[["render",Pt],["__scopeId","data-v-73e0da12"]]),Lt={class:"flex flex-col"},Ht={class:"bg-bg-10 relative flex min-h-[23em] w-full justify-between rounded-3xl"},zt={class:"flex h-full w-full flex-col self-start"},Rt={class:"bg-bg-12 relative flex self-start px-4 py-4 md:px-8"},Tt=K('<span class="absolute bottom-0 h-[1em] w-[1em] overflow-hidden ltr:right-0 rtl:left-0"><span class="shadow-bg-10 absolute bottom-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:right-0 rtl:left-0"></span></span><span class="absolute top-full h-[1em] w-[1em] overflow-hidden ltr:left-0 rtl:right-0"><span class="shadow-bg-12 absolute top-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:left-0 rtl:right-0"></span></span><span class="absolute top-0 h-[1em] w-[1em] overflow-hidden ltr:left-full rtl:right-full"><span class="shadow-bg-12 absolute top-0 h-[200%] w-[200%] rounded-[100%] shadow-[0_0_0_200px] ltr:left-0 rtl:right-0"></span></span>',3),Et={class:"font-semibold md:text-3xl"},Vt=i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M106 77H0C21.2629 77 38.5 59.7629 38.5 38.5C38.5 17.2371 21.2629 0 0 0H106C84.7371 0 67.5 17.2371 67.5 38.5C67.5 59.7629 84.7371 77 106 77Z"},null,-1),Ut=[Vt],Y=j({__name:"DownloadContent",props:{title:null,styleSvg:null},setup(n){return(r,s)=>(v(),D("div",Lt,[i("div",Ht,[i("div",zt,[i("header",Rt,[Tt,i("h5",Et,N(n.title),1)]),lt(r.$slots,"default")])]),(v(),D("svg",{width:"106",height:"77",class:P(["fill-bg-10 ml-4 self-end md:ml-0 md:self-center",n.styleSvg]),viewBox:"0 0 106 77",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ut,2))]))}}),x=B(),L=B(),Ft=B(),Wt=B(),H=B(!1),E=()=>{async function n(){var t,a;if(H.value)return;const s=await W("https://api.github.com/repos/Mr30nama/30nama-Hybrid/releases/latest","$FmqvzEHad1");x.value=(t=s.data.value)==null?void 0:t.tag_name;const e=await W("https://api.github.com/repos/Mr30nama/30nama-Android/releases/latest","$Qu8HiJUwdF");L.value=(a=e.data.value)==null?void 0:a.tag_name,H.value=!0}function r(s){var e,t,a,l,c,o;switch(s){case"WIN":return`https://github.com/Mr30nama/30nama-Hybrid/releases/download/${x.value}/30nama-Setup-${(e=x.value)==null?void 0:e.slice(1)}.exe`;case"DEB":return`https://github.com/Mr30nama/30nama/releases/download/${x.value}/30nama_${(t=x.value)==null?void 0:t.slice(1)}_amd64.deb`;case"APPIMAGE":return`https://github.com/Mr30nama/30nama/releases/download/${x.value}/30nama_${(a=x.value)==null?void 0:a.slice(1)}.AppImage`;case"RPM":return`https://github.com/Mr30nama/30nama/releases/download/${x.value}/30nama_${(l=x.value)==null?void 0:l.slice(1)}.x86_64.rpm`;case"MAC_SILICON":return`https://github.com/Mr30nama/30nama-Hybrid/releases/download/${x.value}/30nama-${(c=x.value)==null?void 0:c.slice(1)}-arm64.dmg`;case"MAC_INTEL":return`https://github.com/Mr30nama/30nama-Hybrid/releases/download/${x.value}/30nama-${(o=x.value)==null?void 0:o.slice(1)}.dmg`;case"ANDROIDTV":return"";case"WEBOS":return"";case"TYZEN":return"";case"IOS":return"";case"ANDROID":return`https://github.com/Mr30nama/30nama-Android/releases/download/${L.value}/30nama.apk`}}return{loaded:H,hybridVersion:x,mobileVersion:L,webOSVersion:Ft,androidTVVersion:Wt,load:n,getDownloadLink:r}},Kt=""+globalThis.__publicAssetsURL("images/mockups/android.png"),Gt={class:"box"},Zt={class:"content-wrapper"},qt=i("p",{class:"text-base md:text-xl"},"۴۰۰ هزار قسمت فیلم و سریال رو!",-1),Jt={class:"flex max-w-[28em] flex-col items-center gap-4 self-start text-xs"},Qt={class:"w-full"},Yt={class:"text-bg-9 font-bold text-xl mt-8"},Xt=i("span",{class:"-mt-24 flex w-full max-w-full shrink-0 justify-end rounded-2xl rounded-b-none p-4 md:mt-0 md:h-[24em] md:w-1/2 md:max-w-[48em] md:items-center md:justify-end lg:items-end"},[i("img",{src:Kt,class:"max-w-[32vw] md:absolute md:h-full md:max-w-none lg:left-32",alt:""})],-1),te=j({__name:"AndroidBar",setup(n){const{getDownloadLink:r,loaded:s,mobileVersion:e}=E(),t=O(()=>({name:"Android",icon:"ph:android-logo-fill",url:r("ANDROID"),title:"اندروید"}));return(a,l)=>{const c=G,o=Z,_=q,u=Y;return v(),z(u,{title:"تو جیبت بذار...","style-svg":"md:!self-start md:rtl:mr-72 md:ltr:ml-72"},{default:C(()=>[i("div",Gt,[i("div",Zt,[qt,i("div",Jt,[i("div",Qt,[b(_,{to:y(t).url,target:"_blank"},{default:C(()=>[b(o,{class:P(["btn-primary-outline w-full text-lg md:text-xl",{"disable-block":!y(s)}])},{default:C(()=>[b(c,{name:y(t).icon},null,8,["name"]),R(" دانلود اپلیکیشن "+N(y(t).title),1)]),_:1},8,["class"])]),_:1},8,["to"])]),i("span",Yt,N(y(e)),1)])]),Xt])]),_:1})}}}),ee=""+globalThis.__publicAssetsURL("images/mockups/desktop.png"),se={class:"box"},ne={class:"content-wrapper"},ae=i("p",{class:"text-base md:text-xl"},"۳/۵ پتابایت* فیلم و سریال رو!",-1),re={class:"flex max-w-[28em] flex-col items-center gap-4 self-start text-xs"},oe={key:0,class:"w-full"},le={class:"grid grid-cols-2 items-start gap-2"},ie={class:"text-bg-9 mt-8 text-xl font-bold"},ce=i("span",{class:"-mt-24 flex w-full max-w-full shrink-0 justify-end rounded-2xl rounded-b-none p-4 md:mt-0 md:h-[24em] md:w-1/2 md:max-w-[48em] md:items-center md:justify-end lg:items-end"},[i("img",{src:ee,class:"max-w-[8.5em] md:absolute md:w-1/2 md:max-w-none",alt:""})],-1),de=j({__name:"DesktopBar",setup(n){const r=ut(),{getDownloadLink:s,loaded:e,hybridVersion:t}=E(),a=O(()=>[{name:"Windows",icon:"ph:windows-logo-fill",url:s("WIN"),title:"ویندوز"},{name:"Mac (Apple silicon)",icon:"ph:apple-logo-fill",url:s("MAC_SILICON"),title:" مک Apple silicon"},{name:"Mac (Intel)",icon:"ph:apple-logo-fill",url:s("MAC_INTEL"),title:" مک Intel"}]),l=navigator.platform,c=B(l.includes("Win")),o=B(l.includes("Mac")),_=B(l.includes("Linux")),u=O(()=>c.value?a.value.find(d=>d.name==="Windows"):o.value?a.value.find(d=>d.name==="Mac (Intel)"):_.value?a.value.find(d=>d.name==="Linux (deb)"):a.value.find(d=>d.name==="Windows"));function g(d){(d.name!=="Mac (Apple silicon)"||d.name!=="Mac (Intel)")&&r.toggleMacGuide()}return(d,h)=>{const w=G,f=Z,p=q,$=Y;return v(),z($,{title:"تو کیفت بریز...","style-svg":"!self-end rtl:ml-36 ltr:mr-36 md:rtl:ml-72 md:ltr:mr-72"},{default:C(()=>[i("div",se,[i("div",ne,[ae,i("div",re,[y(u)?(v(),D("div",oe,[b(p,{to:"selectedOs.url",class:P({"disable-block":!y(e)}),onClick:h[0]||(h[0]=m=>{var k;return g((k=y(u))==null?void 0:k.name)})},{default:C(()=>[b(f,{class:"btn-primary-outline w-full text-lg md:text-xl"},{default:C(()=>[b(w,{name:y(u).icon},null,8,["name"]),R(" دانلود اپلیکیشن "+N(y(u).title),1)]),_:1})]),_:1},8,["class"])])):it("",!0),i("div",le,[(v(!0),D(dt,null,ct(y(a).filter(m=>m!==y(u)),m=>(v(),z(p,{key:m.name,to:m.url,onClick:k=>g(m.name),class:P({"disable-block":!y(e)})},{default:C(()=>[b(f,{class:"btn-primary-outline w-full whitespace-nowrap"},{default:C(()=>[b(w,{name:m.icon},null,8,["name"]),R(" "+N(m.title),1)]),_:2},1024)]),_:2},1032,["to","onClick","class"]))),128))]),i("span",ie,N(y(t)),1)])]),ce])]),_:1})}}}),ue={},fe={class:"flex flex-col"},_e=K('<div class="bg-bg-10 flex flex-col gap-6 rounded-3xl p-8"><h5 class="text-lg font-semibold md:text-xl">نکات مهم</h5><ul class="flex list-disc flex-col gap-2 px-4 text-sm md:px-8 md:text-base"><li>در حال حاضر دسترسی به اپلیکیشن‌های ۳۰نما بدون VPN امکان پذیر میباشد.</li><li>زیرنویس فیلم و سریال ها اکثرا به صورت دو زبان فارسی و انگلیسی ارائه می شود.</li><li>به علت رعایت حقوق پدیدآورندگان ایرانی، فیلم‌ها و سریال‌های ایرانی در ۳۰نما قرار داده نمی‌شوند.</li></ul></div><svg width="106" height="77" class="fill-bg-10 ml-4 self-center md:ml-0" viewBox="0 0 106 77" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M106 77H0C21.2629 77 38.5 59.7629 38.5 38.5C38.5 17.2371 21.2629 0 0 0H106C84.7371 0 67.5 17.2371 67.5 38.5C67.5 59.7629 84.7371 77 106 77Z"></path></svg>',2),pe=[_e];function he(n,r){return v(),D("div",fe,pe)}const me=T(ue,[["render",he]]),ye={},ge={class:"bg-bg-10 flex flex-col gap-6 rounded-3xl p-4 md:p-8"},xe=i("h5",{class:"text-lg font-semibold md:text-xl"},"پشتیبانی در هر لحظه",-1),we=i("ul",{class:"flex list-disc flex-col gap-2 px-4 text-sm md:px-8 md:text-base"},[i("li",null,"هر زمان سوالی داشتید می توانید از طریق آیکون چت پایین صفحه با پشتیبانی در تماس باشید.")],-1),be=[xe,we];function ve(n,r){return v(),D("div",ge,be)}const Be=T(ye,[["render",ve]]),ke={class:"container mx-auto flex flex-col gap-24 py-12 px-4"},Ae=j({__name:"index",setup(n){return E().load(),(r,s)=>{const e=jt,t=te,a=de,l=me,c=Be;return v(),D("div",null,[i("main",ke,[b(e),i("div",null,[b(t),b(a),b(l),b(c)])])])}}});export{Ae as default};
