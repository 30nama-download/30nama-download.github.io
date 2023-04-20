import{_ as L}from"./BrandLogo.vue.78268a9d.js";import E from"./Icon.d856569a.js";import{_ as V}from"./nuxt-link.91fad18f.js";import{_ as D,u as z}from"./useOverlays.103c8d7b.js";import{d as O,b as y,j as F,r as C,o as d,e as _,f as e,h as s,P as S,O as T,w as x,t as h,g as f,Q as k,D as H,C as I,N as R,T as B,R as N,x as G,y as M,S as P,U as $,V as U,W,A as b,_ as q}from"./entry.6269931e.js";import{_ as v}from"./_plugin-vue_export-helper.d305fc1a.js";const j=t=>(G("data-v-3d139375"),t=t(),M(),t),Q={class:"w-full","aria-label":"navbar"},J={class:"flex w-full flex-row items-center justify-between gap-12 overflow-x-auto px-4 py-4 md:px-8"},K={class:"flex md:hidden"},X=j(()=>e("span",{class:"bg-bg-5 h-[4px] w-[2em] rounded-full"},null,-1)),Y=j(()=>e("span",{class:"bg-bg-5 h-[4px] w-[1.5em] rounded-full"},null,-1)),Z=[X,Y],ee={class:"flex items-center gap-12"},oe={class:"w-[8em] shrink-0"},te={class:"hidden w-full flex-row gap-6 md:flex"},se={class:"font-semibold"},le={class:"hidden shrink-0 md:flex"},ae={key:0,class:"bg-bg-13 fixed top-0 z-50 h-full w-full bg-black/10 backdrop-blur-sm"},ne={class:"content bg-bg-10 min-w-[12em ] relative flex h-full w-2/3 flex-col gap-6 py-4 px-2"},ie={class:"w-[7em]"},ce={class:"flex h-full flex-1 flex-col gap-4"},re={class:"font-semibold"},de=O({__name:"HeaderBar",setup(t){const{t:o}=y(),c="https://30nama.com",l=F(()=>[{label:"home",title:o("movies"),icon:"ph:film-strip-fill",link:c+"/movie"},{label:"series",title:o("series"),icon:"ph:television-simple-fill",link:c+"/series"},{label:"anime",title:o("anime"),icon:"ph:flower-lotus-fill",link:c+"/anime"},{label:"watchOnline",title:o("watchOnline"),icon:"ph:play-fill",link:c+"/streams"},{label:"contactUs",title:o("contactUs"),icon:"ph:phone-fill",link:""}]),i=C(!1);return(u,r)=>{const p=L,n=E,m=V,w=D;return d(),_("nav",Q,[e("div",J,[e("div",K,[e("span",{class:"bg-bg-11 flex h-[3em] w-[3em] shrink-0 flex-col justify-center gap-1 rounded-xl p-2",onClick:r[0]||(r[0]=a=>i.value=!0)},Z)]),e("div",ee,[e("div",oe,[s(p)]),e("ul",te,[(d(!0),_(S,null,T(f(l),a=>(d(),_("li",{key:a.title},[s(m,{to:a.link,class:"text-fonts-50 hover:bg-primary-500/20 flex cursor-pointer flex-row items-center gap-2 whitespace-nowrap rounded-xl px-4 py-1 outline-none transition-colors md:!text-base lg:!text-lg",onClick:A=>a.label==="contactUs"&&f(k).chat.open()},{default:x(()=>[s(n,{name:a.icon},null,8,["name"]),e("p",se,h(a.title),1)]),_:2},1032,["to","onClick"])]))),128))])]),e("div",le,[s(m,{to:"https://30nama.com/pricing",target:"_blank",external:""},{default:x(()=>[s(w,{class:"btn-primary-outline text-sm"},{default:x(()=>[H(h(u.$t("buySubscription")),1)]),_:1})]),_:1})])]),(d(),I(N,{to:"body"},[s(B,{name:"sidebar",appear:""},{default:x(()=>[f(i)?(d(),_("div",ae,[e("span",{class:"fixed inset-0 left-0",onClick:r[1]||(r[1]=a=>i.value=!1)}),e("div",ne,[e("span",{class:"bg-bg-9 absolute left-4 top-4 flex shrink-0 rounded-xl p-2 text-xl",onClick:r[2]||(r[2]=a=>i.value=!1)},[s(n,{name:"ph:caret-left"})]),e("div",ie,[s(p)]),e("ul",ce,[(d(!0),_(S,null,T(f(l),a=>(d(),_("li",{class:"w-full rounded-lg py-1",key:a.title},[s(m,{to:a.link,class:"text-fonts-50 hover:bg-primary-500/20 flex flex-row items-center gap-2 rounded-xl px-4 py-1 text-base outline-none transition-colors",onClick:A=>a.label==="contactUs"&&f(k).chat.open()},{default:x(()=>[s(n,{name:a.icon},null,8,["name"]),e("p",re,h(a.title),1)]),_:2},1032,["to","onClick"])]))),128))])])])):R("",!0)]),_:1})]))])}}});const pe=v(de,[["__scopeId","data-v-3d139375"]]),ue=()=>{const{t}=y(),o=P();return(l,i="DEFAULT",u)=>{const p={...{rtl:t("dir")==="rtl",icon:!1,maxToasts:3,position:t("dir")==="ltr"?$.BOTTOM_LEFT:$.BOTTOM_RIGHT},...u};let n;switch(i){case"SUCCESS":n=o.success(l,p);break;case"INFO":n=o.info(l,p);break;case"WARNING":n=o.warning(l,p);break;case"ERROR":n=o.error(l,p);break;default:n=o(l,p)}return[n,o]}};function _e(){const t=ue(),{t:o}=y(),c=U("clipboard-write"),l=U("clipboard-read");async function i(r){if(console.log("🚀 ~ file: useClipboard.ts:9 ~ copy ~ copy:","copy first"),c.value==="denied"||!navigator.clipboard)return t(o("errors.permission"),"ERROR",{id:"permissionDenied"});await navigator.clipboard.writeText(r),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),t(o("clipboard.copiedToClipboard"),"SUCCESS",{id:"copyToClipboardSuccess"}),console.log("🚀 ~ file: useClipboard.ts:9 ~ copy ~ copy:","copy last")}async function u(){return l.value==="denied"||!navigator.clipboard?(t(o("errors.permission"),"ERROR",{id:"permissionDenied"}),!1):await navigator.clipboard.readText()}return{read:u,copy:i}}const g=t=>(G("data-v-605b1214"),t=t(),M(),t),fe={key:0,class:"bg-bg-13/40 fixed inset-0 z-50 flex h-full w-full items-center justify-center px-8 backdrop-blur-sm"},be={class:"flex text-xl"},me=g(()=>e("h3",{class:"self-center text-base ltr:pl-6 rtl:pr-6"},"حل مشکل دسترسی در سیستم عامل macOS",-1)),xe={class:"flex w-full select-text flex-col gap-4 p-4"},he=g(()=>e("p",{class:"font-semibold"},"نکته: جهت بروزرسانی اپلیکیشن حتما نسخه قدیمی اپلیکیشن را حذف کرده و سپس نسخه جدید را دانلود کنید.",-1)),ge=g(()=>e("p",{class:"text-sm"}," اپلیکیشن مک برای استفاده بدون دردسر، باید از طرف Apple بررسی و تایید شود، ولی متاسفانه به دلیل محدودیت‌های موجود، برای ما امکان انجام این کار وجود ندارد. به همین علت در صورتی که اپلیکیشن بعد از نصب کامل قابل دسترسی نبود، Terminal را باز و دستور زیر را وارد کنید: ",-1)),Ce={class:"bg-bg-12 flex w-full flex-row items-center justify-center gap-2 rounded-xl p-2 text-xs font-semibold"},ye={class:"w-full md:whitespace-nowrap overflow-x-auto py-2",dir:"ltr"},ve=g(()=>e("p",{class:"text-sm"},"در نظر داشته باشید برای استفاده از تمامی قابلیت های اپلیکیشن مک حتما باید اپلیکیشن 30nama را به Applications منتقل کنید.",-1)),we=O({__name:"MacGuide",setup(t){const o=z(),c=_e(),l=o.macGuide,i=C(),u=C('sudo xattr -rd com.apple.quarantine "/Applications/30nama.app"');async function r(){await c.copy(u.value)}return(p,n)=>{const m=E;return d(),I(N,{to:"body"},[s(B,{name:"mac-guide"},{default:x(()=>[f(l)?(d(),_("div",fe,[e("span",{class:"absolute inset-0 -z-10 transition-all",onClick:n[0]||(n[0]=W(w=>f(o).toggleMacGuide(!1),["exact"]))}),e("div",{ref_key:"macGuide",ref:i,class:"bg-bg-11 flex flex-col gap-4 rounded-2xl md:w-full lg:w-[30em]"},[e("header",be,[e("h5",{class:b(["relative flex flex-col px-4 py-4 font-bold ltr:rounded-tl-2xl rtl:rounded-tr-2xl","bg-bg-12"])},[e("span",{class:b(["absolute top-0 h-[1em] w-[1em] overflow-hidden ltr:left-full rtl:right-full","bg-bg-12"])},[e("span",{class:b(["absolute top-0 h-[200%] w-[200%] rounded-[100%] ltr:left-0 rtl:right-0","bg-bg-11"])})]),e("span",{class:b(["absolute bottom-0 h-[1em] w-[1em] overflow-hidden ltr:right-0 rtl:left-0","bg-bg-11"])},[e("span",{class:b(["absolute bottom-0 h-[200%] w-[200%] rounded-[100%] ltr:right-0 rtl:left-0","bg-bg-12"])})]),e("span",{class:b(["absolute top-full h-[1em] w-[1em] overflow-hidden ltr:left-0 rtl:right-0","bg-bg-12"])},[e("span",{class:b(["absolute top-0 h-[200%] w-[200%] rounded-[100%] ltr:left-0 rtl:right-0","bg-bg-11"])})]),s(m,{name:"ph:apple-logo-fill"})]),me]),e("div",xe,[he,ge,e("code",Ce,[e("div",{class:"bg-bg-9/0 hover:bg-bg-9/20 flex cursor-pointer items-center justify-center rounded-xl p-2 text-xl transition-colors",onClick:r},[s(m,{name:"ph:copy-fill"})]),e("div",ye,h(f(u)),1)]),ve])],512)])):R("",!0)]),_:1})])}}});const Se=v(we,[["__scopeId","data-v-605b1214"]]),Te={},ke={class:"h-full w-full"},$e={id:"body-main"};function Ue(t,o){const c=pe,l=q,i=Se;return d(),_("div",ke,[s(c),e("main",$e,[s(l,{class:"w-full flex-shrink-0 pb-5"})]),s(i)])}const Ge=v(Te,[["render",Ue]]);export{Ge as default};
