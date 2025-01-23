import{G as $,c as l,e as a,f as v,$ as C,a9 as i,j as S,ax as m,h as f,n as x,Z as h,ay as y,ao as q,az as M,F as k,a0 as V,t as g,r as b,w as N,T as j,ad as _,ah as U}from"./j3RUH3q_.js";import{_ as A}from"./v4mDAWx5.js";import"./DFJi1a6K.js";const T={class:"fixed top-0 left-0 w-full h-1.5 bg-gray-200"},B={__name:"Progress",props:{currentSlide:{type:Number,required:!0},slides:{type:Array,required:!0}},setup(n){const e=n,r=$(()=>(e.currentSlide+1)/e.slides.length*100);return(u,t)=>(l(),a("div",T,[v("div",{class:"h-full bg-orange-500 transition-all duration-300",style:C({width:`${i(r)}%`})},null,4)]))}},z={},D={class:"text-center p-12"};function F(n,e){return l(),a("div",D,e[0]||(e[0]=[v("h2",{class:"text-3xl font-bold text-gray-800 mt-4"},"Ευχαριστούμε!",-1)]))}const I=S(z,[["render",F]]),Q={class:"fixed bottom-10 right-10 flex justify-between mt-8 rounded-lg overflow-hidden"},G=["disabled"],P={key:0,class:"px-4"},R={__name:"Navigation",props:{modelValue:{},modelModifiers:{},currentSlide:{},currentSlideModifiers:{},isSubmitted:{},isSubmittedModifiers:{}},emits:["update:modelValue","update:currentSlide","update:isSubmitted"],setup(n){const e=m(n,"modelValue"),r=m(n,"currentSlide"),u=m(n,"isSubmitted"),t=()=>{const o=e.value[r.value];return o.required?o.answer!==null&&(Array.isArray(o.answer)?o.answer.length>0:o.answer.trim()!==""):!0},d=()=>{t()&&(r.value<e.value.length-1?r.value++:u.value=!0)},s=()=>{r.value>0&&r.value--};return(o,w)=>{const p=A;return l(),a("div",Q,[v("button",{onClick:s,class:x(["border-r-2 min-w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-gray-600 transition",{"opacity-50 pointer-events-none":r.value<=0}]),disabled:r.value<=0},[f(p,{name:"i-heroicons-chevron-up",class:"w-5 h-5"})],10,G),v("button",{onClick:d,class:"ml-auto min-w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-gray-600 transition"},[r.value===e.value.length-1?(l(),a("div",P,"Submit")):(l(),h(p,{key:1,name:"i-heroicons-chevron-down",class:"w-5 h-5"}))])])}}},E={__name:"Text",props:y({currentSlide:{type:Number,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=m(n,"modelValue");return(r,u)=>q((l(),a("input",{"onUpdate:modelValue":u[0]||(u[0]=t=>e.value[n.currentSlide].answer=t),type:"text",placeholder:"Δώστε την απάντηση σας",style:{"box-shadow":"none !important"},class:"w-full text-4xl bg-transparent px-0 py-3 border-0 border-b-2 border-black outline-none focus:border-orange-500 transition"},null,512)),[[M,e.value[n.currentSlide].answer]])}},L={class:"flex justify-between space-x-2"},Y=["onClick"],Z={__name:"Rating",props:y({currentSlide:{type:Number,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=m(n,"modelValue");return(r,u)=>(l(),a("div",L,[(l(!0),a(k,null,V(e.value[n.currentSlide].options,t=>(l(),a("button",{key:t,onClick:d=>e.value[n.currentSlide].answer=t,class:x([{"bg-orange-500 text-white":e.value[n.currentSlide].answer===t,"bg-black text-white":e.value[n.currentSlide].answer!==t},"flex-1 py-3 rounded-lg transition hover:bg-gray-700"])},g(t),11,Y))),128))]))}},H={class:"grid grid-cols-2 gap-4"},J=["onClick"],K={__name:"MultipleChoice",props:y({currentSlide:{type:Number,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=n,r=m(n,"modelValue"),u=t=>{const d=r.value[e.currentSlide].answer,s=d.includes(t)?d.filter(o=>o!==t):[...d,t];r.value[e.currentSlide].answer=s};return(t,d)=>(l(),a("div",H,[(l(!0),a(k,null,V(r.value[n.currentSlide].options,s=>(l(),a("button",{key:s,onClick:o=>u(s),class:x([{"bg-orange-500 text-white":r.value[n.currentSlide].answer.includes(s),"bg-black text-white":!r.value[n.currentSlide].answer.includes(s)},"py-3 rounded-lg transition hover:bg-gray-700"])},g(s),11,J))),128))]))}},O={class:"min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center p-4"},W={key:0,class:"w-full max-w-3xl overflow-hidden"},X={class:"p-8 space-y-6"},ee={class:"text-2xl font-bold text-gray-800 tracking-tight"},te={__name:"questionaire",setup(n){const e=b(0),r=b(!1),u={text:E,rating:Z,multipleChoice:K},t=b([{title:"Όνομα",type:"text",required:!0,answer:""},{title:"Επώνυμο",type:"text",required:!0,answer:""},{title:"Πόσες φορές την εβδομάδα χρειάζεστε περίθαλψη;",type:"rating",options:["1","2","3","4","5"],required:!0,answer:null},{title:"Πώς μάθατε για εμάς",type:"multipleChoice",options:["Google","Facebook","Instagram","Απο φίλο"],required:!1,answer:[]}]);return(d,s)=>{const o=B,w=I,p=R;return l(),a("div",O,[f(o,{currentSlide:i(e),slides:i(t)},null,8,["currentSlide","slides"]),i(r)?(l(),h(w,{key:1})):(l(),a("div",W,[v("div",X,[f(j,{name:"slide-bottom",mode:"out-in",class:"relative"},{default:N(()=>[(l(),a("div",{key:i(e),class:"space-y-4"},[v("h2",ee,g(i(e)+1)+". "+g(i(t)[i(e)].title),1),(l(),h(U(u[i(t)[i(e)].type]),{modelValue:i(t),"onUpdate:modelValue":s[0]||(s[0]=c=>_(t)?t.value=c:null),currentSlide:i(e)},null,8,["modelValue","currentSlide"]))]))]),_:1})])])),f(p,{modelValue:i(t),"onUpdate:modelValue":s[1]||(s[1]=c=>_(t)?t.value=c:null),currentSlide:i(e),"onUpdate:currentSlide":s[2]||(s[2]=c=>_(e)?e.value=c:null),isSubmitted:i(r),"onUpdate:isSubmitted":s[3]||(s[3]=c=>_(r)?r.value=c:null)},null,8,["modelValue","currentSlide","isSubmitted"])])}}},le=S(te,[["__scopeId","data-v-e0167853"]]);export{le as default};
