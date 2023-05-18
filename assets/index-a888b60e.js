import{r as d,j as e}from"./index-616c271b.js";import{F as l,C as P,b as C,a as T,T as L,P as B,D as M}from"./index-f189ef36.js";import{S as f}from"./index-8d1b79b1.js";import{B as u,W as R,a as q,E as J}from"./EditOutlined-0f953425.js";import{P as K,I as i,S as z}from"./index-5d5b687e.js";const X=()=>{const[r,o]=d.useState([]),[y,m]=d.useState(""),[b,g]=d.useState(!1),[I,p]=d.useState(!1),[n]=l.useForm(),[k,S]=d.useState(!0),[x,F]=d.useState(""),c=t=>t.key===y,V=t=>{S(t.target.checked)};d.useEffect(()=>{p(!0);const t=localStorage.getItem("depositData");setTimeout(()=>{p(!1)},500),t&&o(JSON.parse(t))},[]),d.useEffect(()=>{localStorage.setItem("depositData",JSON.stringify(r))},[r]);const w=t=>{n.setFieldsValue({...t}),m(t.key)},A=async t=>{try{const a=await n.validateFields(),s=[...r],h=s.findIndex(j=>t.key===j.key);if(h>-1){const j=s[h];s.splice(h,1,{...j,...a}),o(s),m("")}else s.push(a),o(s),m("")}catch(a){console.log("Validate Failed:",a)}n.resetFields()},D=()=>{n.validateFields().then(t=>{const a=[...r,{key:Date.now().toString(),...t}];o(a),g(!1),n.resetFields()}).catch(t=>{console.log("Validation failed:",t)})},v=()=>{m("")},E=t=>{o(r.filter(a=>a.key!==t.key))},N=x?r.filter(t=>t.aAddress.toLowerCase().includes(x.toLowerCase())||t.bAddress.toLowerCase().includes(x.toLowerCase())):r,O=[{title:"#",key:"index",render:(t,a,s)=>s+1,align:"center"},{title:"个人地址",dataIndex:"aAddress",key:"aAddress",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"aAddress",style:{margin:0},children:e.jsx(i,{defaultValue:t,onChange:s=>n.setFieldsValue({aAddress:s.target.value})})}):t,align:"center",width:500},{title:"交易所地址",dataIndex:"bAddress",key:"bAddress",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"bAddress",style:{margin:0},children:e.jsx(i,{defaultValue:t,onChange:s=>n.setFieldsValue({bAddress:s.target.value})})}):t,align:"center",width:500},{title:"交易所名称",dataIndex:"exchangeName",key:"exchangeName",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"exchangeName",style:{margin:0},children:e.jsx(i,{defaultValue:t,onChange:s=>n.setFieldsValue({exchangeName:s.target.value})})}):t,align:"center"},{title:"备注",dataIndex:"notes",key:"notes",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"notes",style:{margin:0},children:e.jsx(i,{defaultValue:t,onChange:s=>n.setFieldsValue({notes:s.target.value})})}):t,align:"center"},{title:"操作",key:"action",render:(t,a)=>c(a)?e.jsxs(f,{children:[e.jsx(u,{type:"primary",onClick:()=>A(a),icon:e.jsx(R,{})}),e.jsx(u,{onClick:v,icon:e.jsx(q,{})})]}):e.jsxs(f,{children:[e.jsx(u,{type:"primary",disabled:y!=="",onClick:()=>w(a),icon:e.jsx(J,{})}),e.jsx(B,{title:"确定删除吗?",onConfirm:()=>E(a),children:e.jsx(u,{icon:e.jsx(M,{})})})]}),align:"center"}];return e.jsxs(e.Fragment,{children:[e.jsxs(f,{style:{marginBottom:10},children:[e.jsx(u,{type:"primary",onClick:()=>g(!0),icon:e.jsx(K,{}),shape:"round"}),e.jsx(P,{onChange:V,checked:k,children:"是否分页"}),e.jsxs(C,{color:"magenta",children:["当前共有",r.length,"条记录"]}),e.jsx(C,{color:"magenta",children:"方便管理个人地址和交易所充值地址，做到一一对应，防止女巫"})]}),e.jsx(i.Search,{bordered:!0,allowClear:!0,placeholder:"搜索地址",value:x,onChange:t=>F(t.target.value),style:{marginBottom:10}}),e.jsx(T,{title:"添加记录",open:b,onOk:D,onCancel:()=>g(!1),children:e.jsxs(l,{form:n,layout:"vertical",children:[e.jsx(l.Item,{label:"个人地址",name:"aAddress",rules:[{required:!0,message:"请输入个人地址"}],children:e.jsx(i,{})}),e.jsx(l.Item,{label:"交易所地址",name:"bAddress",rules:[{required:!0,message:"请输入交易所地址"}],children:e.jsx(i,{})}),e.jsx(l.Item,{label:"交易所名称",name:"exchangeName",children:e.jsx(i,{})}),e.jsx(l.Item,{label:"备注",name:"notes",children:e.jsx(i,{})})]})}),e.jsx(z,{spinning:I,children:e.jsx(L,{bordered:!0,columns:O,dataSource:N,className:"centered-table",pagination:k?{defaultPageSize:10}:!1})})]})};export{X as default};