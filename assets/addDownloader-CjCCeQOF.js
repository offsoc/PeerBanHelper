const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./qbittorrent-CoQ2vW3v.js","./index-Bd1oa3-l.js","./libs-DaDHWX8D.js","./arcoDesign-DkbNuMsn.js","./index-x1xSowLH.css","./qbittorrentee-DY3m0vI3.js","./transmission-9bX0H25s.js","./biglybt-Df0KZf0g.js","./deluge-CtBBWO_u.js","./bitcomet-u_0aM0Cx.js"])))=>i.map(i=>d[i]);
import{C as l,k as u}from"./index-Bd1oa3-l.js";import{T as L}from"./init-BYtRv8_z.js";import{f as H,a6 as N,am as S,r as U,q as $,j as c,s as v,t as e,y as t,v as r,x as _,a2 as n,E as j,p as G,O as W,u as z,a9 as m}from"./libs-DaDHWX8D.js";import{M as y,w as J,$ as K,ao as Q,O as X,c as Y,F as Z,G as ee,q as oe,B as te,H as ae,S as ne}from"./arcoDesign-DkbNuMsn.js";const le={href:"https://github.com/PBH-BTN/PBH-Adapter-BiglyBT"},ue=H({__name:"addDownloader",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(b){const w=m(()=>u(()=>import("./qbittorrent-CoQ2vW3v.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),B=m(()=>u(()=>import("./qbittorrentee-DY3m0vI3.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url)),C=m(()=>u(()=>import("./transmission-9bX0H25s.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url)),T=m(()=>u(()=>import("./biglybt-Df0KZf0g.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url)),E=m(()=>u(()=>import("./deluge-CtBBWO_u.js"),__vite__mapDeps([8,1,2,3,4]),import.meta.url)),V=m(()=>u(()=>import("./bitcomet-u_0aM0Cx.js"),__vite__mapDeps([9,1,2,3,4]),import.meta.url)),D={[l.qBittorrent]:w,[l.qBittorrentEE]:B,[l.Transmission]:C,[l.BiglyBT]:T,[l.Deluge]:E,[l.BitComet]:V},{t:i}=N(),a=S(b,"modelValue"),f=U(!1),q=async()=>{f.value=!0,a.value.downloaderConfig.config.endpoint.replace(/\/$/,"");try{const d=await L({name:a.value.downloaderConfig.name,config:a.value.downloaderConfig.config});if(!d.success)throw new Error(d.message)}catch(d){return d instanceof Error&&y.error({content:d.message,resetOnHover:!0}),!1}finally{f.value=!1}y.success({content:i("page.oobe.addDownloader.test.success"),resetOnHover:!0}),a.value.valid=!0};return(d,o)=>{const M=J,O=K,P=Q,s=X,F=Y,h=Z,I=$("i18n-t"),g=ee,A=oe,k=te,x=ae,R=ne;return c(),v(R,{direction:"vertical",style:{width:"70%"}},{default:e(()=>[t(P,{style:{"text-align":"left"}},{default:e(()=>[t(M,null,{default:e(()=>[r(_(n(i)("page.oobe.addDownloader.title")),1)]),_:1}),t(O,null,{default:e(()=>[r(_(n(i)("page.oobe.addDownloader.description")),1)]),_:1})]),_:1}),t(x,{model:a.value.downloaderConfig,"auto-label-width":""},{default:e(()=>[t(g,{field:"config.type",label:n(i)("page.dashboard.editModal.label.type"),required:""},j({default:e(()=>[t(h,{modelValue:a.value.downloaderConfig.config.type,"onUpdate:modelValue":o[0]||(o[0]=p=>a.value.downloaderConfig.config.type=p),style:{width:"10em"},"trigger-props":{autoFitPopupMinWidth:!0}},{default:e(()=>[t(s,{value:n(l).qBittorrent},{default:e(()=>o[3]||(o[3]=[r("qBittorrent")])),_:1},8,["value"]),t(s,{value:n(l).qBittorrentEE},{default:e(()=>o[4]||(o[4]=[r("qBittorrentEE")])),_:1},8,["value"]),t(s,{value:n(l).BiglyBT},{default:e(()=>o[5]||(o[5]=[r("BiglyBT")])),_:1},8,["value"]),t(s,{value:n(l).Deluge},{default:e(()=>o[6]||(o[6]=[r("Deluge")])),_:1},8,["value"]),t(s,{value:n(l).BitComet},{default:e(()=>o[7]||(o[7]=[r("BitComet")])),_:1},8,["value"]),t(F,{content:n(i)("page.dashboard.editModal.transmission.discourage")},{default:e(()=>[t(s,{value:n(l).Transmission,disabled:""},{default:e(()=>o[8]||(o[8]=[r("Transmission")])),_:1},8,["value"])]),_:1},8,["content"])]),_:1},8,["modelValue"])]),_:2},[a.value.downloaderConfig.config.type===n(l).BiglyBT?{name:"extra",fn:e(()=>[t(I,{keypath:"page.dashboard.editModal.biglybt"},{url:e(()=>[G("a",le,_(n(i)("page.dashboard.editModal.biglybt.url")),1)]),_:1})]),key:"0"}:void 0]),1032,["label"]),t(g,{field:"name",label:n(i)("page.dashboard.editModal.label.name"),required:""},{default:e(()=>[t(A,{modelValue:a.value.downloaderConfig.name,"onUpdate:modelValue":o[1]||(o[1]=p=>a.value.downloaderConfig.name=p),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),(c(),v(W(D[a.value.downloaderConfig.config.type]),{modelValue:a.value.downloaderConfig.config,"onUpdate:modelValue":o[2]||(o[2]=p=>a.value.downloaderConfig.config=p)},null,8,["modelValue"])),a.value.downloaderConfig.config.type?(c(),v(g,{key:0},{default:e(()=>[t(k,{loading:f.value,onClick:q},{default:e(()=>[r(_(n(i)("page.oobe.addDownloader.test")),1)]),_:1},8,["loading"])]),_:1})):z("",!0)]),_:1},8,["model"])]),_:1})}}});export{ue as default};
