import{r as P,e as I}from"./index-Bd1oa3-l.js";import{f as k,a6 as K,r as T,c as f,ak as O,w as B,j as D,s as V,t,y as n,a2 as e,v as i,x as g}from"./libs-DaDHWX8D.js";import{b as j,T as G,t as J,J as q}from"./arcoDesign-DkbNuMsn.js";var l=(u=>(u.AUTO="AUTO",u.MANUAL="MANUAL",u))(l||{});const Q=k({__name:"logModal",setup(u,{expose:S}){const{t:o,d:y}=K(),r=T(!1);S({showModal:()=>{r.value=!0}});const v=[{title:"ID",slotName:"ruleId"},{title:()=>o("page.rule_management.ruleSubscribe.updateLog.updateTime"),slotName:"updateTime"},{title:()=>o("page.rule_management.ruleSubscribe.updateLog.ruleCount"),dataIndex:"count"},{title:()=>o("page.rule_management.ruleSubscribe.updateLog.updateType"),slotName:"updateType"}],s=T(!0),h={[l.MANUAL]:"page.rule_management.ruleSubscribe.updateLog.updateType.manual",[l.AUTO]:"page.rule_management.ruleSubscribe.updateLog.updateType.auto"},L=f(()=>s.value||w.value||!m.value),{data:z,total:A,current:d,loading:w,pageSize:c,changeCurrent:x,changePageSize:C}=O(P,{defaultParams:[{page:1,pageSize:5}],pagination:{currentKey:"page",pageSizeKey:"pageSize",totalKey:"data.total"},onAfter:()=>{s.value=!1}});B([c,d],()=>{s.value=!0});const m=f(()=>{var p;return(p=z.value)==null?void 0:p.data.results});return(p,_)=>{const b=j,M=G,N=J,U=q;return D(),V(U,{visible:r.value,"onUpdate:visible":_[0]||(_[0]=a=>r.value=a),title:e(o)("page.rule_management.ruleSubscribe.updateLog"),"unmount-on-close":"",width:"auto","modal-style":{width:"35vw"}},{default:t(()=>[n(N,{stripe:!0,columns:v,data:m.value,loading:L.value,pagination:{total:e(A),current:e(d),pageSize:e(c),showPageSize:!0,baseSize:4,bufferSize:1},size:"medium",class:"banlog-table",onPageChange:e(x),onPageSizeChange:e(C)},{ruleId:t(({record:a})=>[n(b,{color:e(I)(a.ruleId)},{default:t(()=>[i(g(a.ruleId),1)]),_:2},1032,["color"])]),updateTime:t(({record:a})=>[n(M,null,{default:t(()=>[i(g(e(y)(a.updateTime,"long")),1)]),_:2},1024)]),updateType:t(({record:a})=>[n(b,{color:a.updateType===e(l).MANUAL?"green":"blue"},{default:t(()=>[i(g(e(o)(h[a.updateType]??"page.rule_management.ruleSubscribe.updateLog.updateType.unknown")),1)]),_:2},1032,["color"])]),_:1},8,["data","loading","pagination","onPageChange","onPageSizeChange"])]),_:1},8,["visible","title"])}}});export{Q as default};
