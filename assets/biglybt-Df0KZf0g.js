import"./index-Bd1oa3-l.js";import{f as b,a6 as v,am as _,j as h,k as y,y as l,t,a2 as i,v as s,x as M,F as U}from"./libs-DaDHWX8D.js";import{q as P,G as S,aD as w,aB as x,v as T}from"./arcoDesign-DkbNuMsn.js";const R=b({__name:"biglybt",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(f){const{t:d}=v(),a=_(f,"modelValue"),V={type:"string",required:!0,validator:(n,e)=>{if(!n)return e("Please input URL");!n.startsWith("http://")&&!n.startsWith("https://")&&e(d("page.dashboard.editModal.label.endpoint.error.invalidSchema"));try{new URL(n),e()}catch{e(d("page.dashboard.editModal.label.endpoint.error.invalidUrl"))}}};return(n,e)=>{const u=P,r=S,p=w,g=x,m=T;return h(),y(U,null,[l(r,{field:"config.endpoint",label:i(d)("page.dashboard.editModal.label.endpoint"),"validate-trigger":"blur",required:"",rules:V},{default:t(()=>[l(u,{modelValue:a.value.endpoint,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.endpoint=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.token",label:"Token",required:""},{default:t(()=>[l(u,{modelValue:a.value.token,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.token=o),"allow-clear":""},null,8,["modelValue"])]),_:1}),l(r,{field:"config.httpVersion",label:i(d)("page.dashboard.editModal.label.httpVersion")},{extra:t(()=>[s(M(i(d)("page.dashboard.editModal.label.httpVersion.description")),1)]),default:t(()=>[l(g,{modelValue:a.value.httpVersion,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.httpVersion=o)},{default:t(()=>[l(p,{value:"HTTP_1_1"},{default:t(()=>e[5]||(e[5]=[s("1.1")])),_:1}),l(p,{value:"HTTP_2"},{default:t(()=>e[6]||(e[6]=[s("2.0")])),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.verifySsl","default-checked":"",label:i(d)("page.dashboard.editModal.label.verifySsl")},{default:t(()=>[l(m,{modelValue:a.value.verifySsl,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.verifySsl=o)},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.ignorePrivate",label:i(d)("page.dashboard.editModal.label.ignorePrivate")},{default:t(()=>[l(m,{modelValue:a.value.ignorePrivate,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value.ignorePrivate=o)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}});export{R as default};
