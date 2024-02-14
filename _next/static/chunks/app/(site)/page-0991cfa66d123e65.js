(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{3287:function(e,t,s){Promise.resolve().then(s.bind(s,3231)),Promise.resolve().then(s.bind(s,1232)),Promise.resolve().then(s.bind(s,1694))},3231:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var l=s(3827),r=s(9704);s(4090);var i=s(703),n=s(1399),a=()=>(0,l.jsx)("button",{className:"   transition    opacity-0    rounded-full    flex    items-center    justify-center    bg-blue-500    p-4    drop-shadow-md    translate   translate-y-1/4   group-hover:opacity-100    group-hover:translate-y-0   hover:scale-110   ",children:(0,l.jsx)(n.gmG,{className:"text-black"})});let c=e=>{let{data:t,onClick:s}=e,n=(0,r.Z)(t);return(0,l.jsxs)("div",{onClick:()=>s(t.id),className:"relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3",children:[(0,l.jsx)("div",{className:"relative aspect-square w-full h-full rounded-md overflow-hidden",children:(0,l.jsx)(i.default,{className:"object-cover",src:n||"/images/liked.png",fill:!0,alt:"Song image"})}),(0,l.jsxs)("div",{className:"flex flex-col items-start w-full pt-4 gap-y-1",children:[(0,l.jsx)("p",{className:"font-semibold truncate w-full",children:t.title}),(0,l.jsx)("p",{className:"text-neutral-400 text-sm pb-4 w-full truncate",children:t.artist})]}),(0,l.jsx)("div",{className:"absolute bottom-24 right-5",children:(0,l.jsx)(a,{})})]})};var o=s(5667),u=e=>{let{songs:t}=e,s=(0,o.Z)(t);return 0===t.length?(0,l.jsx)("div",{className:"mt-4 text-neutral-400",children:"No songs available."}):(0,l.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4",children:t.map(e=>(0,l.jsx)(c,{onClick:e=>s(e),data:e},e.id))})}},9461:function(e,t,s){"use strict";var l=s(3827),r=s(4090),i=s(1367);let n=(0,r.forwardRef)((e,t)=>{let{className:s,children:r,disabled:n,type:a="button",...c}=e;return(0,l.jsx)("button",{type:a,className:(0,i.m6)("w-full rounded-full bg-blue-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition",s),disabled:n,ref:t,...c,children:r})});n.displayName="Button",t.Z=n},1232:function(e,t,s){"use strict";s.r(t);var l=s(3827),r=s(1367),i=s(1249),n=s(7907),a=s(1399),c=s(9509),o=s(8009),u=s(9908),d=s(8641),m=s(5405),f=s(9710),x=s(7146),p=s(9461);t.default=e=>{let{children:t,className:s}=e,h=(0,x.Z)(),b=(0,n.useRouter)(),v=(0,m.Z)(),g=(0,c.useSupabaseClient)(),{user:j}=(0,f.aF)(),N=async()=>{let{error:e}=await g.auth.signOut();h.reset(),b.refresh(),e&&o.Am.error(e.message)};return(0,l.jsxs)("div",{className:(0,r.m6)("\n        h-fit \n        bg-gradient-to-b \n        from-blue-800 \n        p-6\n        ",s),children:[(0,l.jsxs)("div",{className:"w-full mb-4 flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"hidden md:flex gap-x-2 items-center",children:[(0,l.jsx)("button",{onClick:()=>b.back(),className:"   rounded-full    bg-black    flex    items-center    justify-center    cursor-pointer    hover:opacity-75    transition   ",children:(0,l.jsx)(i.Lrt,{className:"text-white",size:35})}),(0,l.jsx)("button",{onClick:()=>b.forward(),className:"   rounded-full    bg-black    flex    items-center    justify-center    cursor-pointer    hover:opacity-75    transition   ",children:(0,l.jsx)(i.h2L,{className:"text-white",size:35})})]}),(0,l.jsxs)("div",{className:"flex md:hidden gap-x-2 items-center",children:[(0,l.jsx)("button",{onClick:()=>b.push("/"),className:"   rounded-full    p-2    bg-white    flex    items-center    justify-center    cursor-pointer    hover:opacity-75    transition   ",children:(0,l.jsx)(u.g3P,{className:"text-black",size:20})}),(0,l.jsx)("button",{onClick:()=>b.push("/search"),className:"   rounded-full    p-2    bg-white    flex    items-center    justify-center    cursor-pointer    hover:opacity-75    transition   ",children:(0,l.jsx)(d.Goc,{className:"text-black",size:20})})]}),(0,l.jsx)("div",{className:"flex justify-between items-center gap-x-4",children:j?(0,l.jsxs)("div",{className:"flex gap-x-4 items-center",children:[(0,l.jsx)(p.Z,{onClick:N,className:"bg-white px-6 py-2",children:"Logout"}),(0,l.jsx)(p.Z,{onClick:()=>b.push("/account"),className:"bg-white",children:(0,l.jsx)(a.q1E,{})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(p.Z,{onClick:v.onOpen,className:"   bg-transparent    text-neutral-300    font-medium   ",children:"Sign up"})}),(0,l.jsx)("div",{children:(0,l.jsx)(p.Z,{onClick:v.onOpen,className:"bg-white px-6 py-2",children:"Log in"})})]})})]}),t]})}},1694:function(e,t,s){"use strict";s.r(t);var l=s(3827),r=s(7907),i=s(703),n=s(1399);t.default=e=>{let{image:t,name:s,href:a}=e,c=(0,r.useRouter)();return(0,l.jsxs)("button",{onClick:()=>{c.push(a)},className:"relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4",children:[(0,l.jsx)("div",{className:"relative min-h-[64px] min-w-[64px]",children:(0,l.jsx)(i.default,{className:"object-cover",fill:!0,src:t,alt:"Image"})}),(0,l.jsx)("p",{className:"font-medium truncate py-5",children:s}),(0,l.jsx)("div",{className:"absolute transition opacity-0 rounded-full flex items-center justify-center bg-blue-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110",children:(0,l.jsx)(n.gmG,{className:"text-black"})})]})}},9704:function(e,t,s){"use strict";var l=s(9509);t.Z=e=>{let t=(0,l.useSupabaseClient)();if(!e)return null;let{data:s}=t.storage.from("images").getPublicUrl(e.image_path);return s.publicUrl}},5405:function(e,t,s){"use strict";let l=(0,s(2020).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}));t.Z=l},5667:function(e,t,s){"use strict";var l=s(7146),r=s(5405),i=s(9710);t.Z=e=>{let t=(0,l.Z)(),s=(0,r.Z)(),{user:n}=(0,i.aF)();return l=>{if(!n)return s.onOpen();t.setId(l),t.setIds(e.map(e=>e.id))}}},7146:function(e,t,s){"use strict";let l=(0,s(2020).Ue)(e=>({ids:[],activeId:void 0,setId:t=>e({activeId:t}),setIds:t=>e({ids:t}),reset:()=>e({ids:[],activeId:void 0})}));t.Z=l},9710:function(e,t,s){"use strict";s.d(t,{Di:function(){return a},aF:function(){return c}});var l=s(3827),r=s(4090),i=s(9509);let n=(0,r.createContext)(void 0),a=e=>{var t;let{session:s,isLoading:a,supabaseClient:c}=(0,i.useSessionContext)(),o=(0,i.useUser)(),u=null!==(t=null==s?void 0:s.access_token)&&void 0!==t?t:null,[d,m]=(0,r.useState)(!1),[f,x]=(0,r.useState)(null),[p,h]=(0,r.useState)(null),b=()=>c.from("users").select("*").single(),v=()=>c.from("subscriptions").select("*, prices(*, products(*))").in("status",["trialing","active"]).single();return(0,r.useEffect)(()=>{!o||d||f||p?o||a||d||(x(null),h(null)):(m(!0),Promise.allSettled([b(),v()]).then(e=>{let t=e[0],s=e[1];"fulfilled"===t.status&&x(t.value.data),"fulfilled"===s.status&&h(s.value.data),m(!1)}))},[o,a]),(0,l.jsx)(n.Provider,{value:{accessToken:u,user:o,userDetails:f,isLoading:a||d,subscription:p},...e})},c=()=>{let e=(0,r.useContext)(n);if(void 0===e)throw Error("useUser must be used within a MyUserContextProvider");return e}}},function(e){e.O(0,[614,422,699,574,354,971,69,744],function(){return e(e.s=3287)}),_N_E=e.O()}]);