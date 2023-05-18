var Ye=Object.defineProperty;var qe=(t,e,n)=>e in t?Ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var be=(t,e,n)=>(qe(t,typeof e!="symbol"?e+"":e,n),n),we=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var f=(t,e,n)=>(we(t,e,"read from private field"),n?n.call(t):e.get(t)),v=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},he=(t,e,n,s)=>(we(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);var x=(t,e,n)=>(we(t,e,"access private method"),n);import{r as F,j as d}from"./index-616c271b.js";import{a as P,C as Ge}from"./axios-b5fb5a4e.js";import{U as We,S as Xe,D as Qe,n as Z,e as et}from"./save_excel-2be4b195.js";import{F as J,a as Be,T as tt,D as Ue,b as nt,P as st}from"./index-f189ef36.js";import{I as ge,S as T,P as rt}from"./index-5d5b687e.js";import{B as M,E as it}from"./EditOutlined-0f953425.js";import{L as at}from"./index-022b3a5e.js";import{S as lt}from"./index-8d1b79b1.js";const ot={ethereum:"https://eth.llamarpc.com",optimism:"https://optimism-mainnet.public.blastapi.io",arbitrum:"https://rpc.ankr.com/arbitrum",polygon:"https://polygon-bor.publicnode.com",bsc:"https://bscrpc.com"};async function ee(t,e){try{let n=ot[e];if(!n)return"Error: Invalid Network Name";let a=(await P.post(n,{jsonrpc:"2.0",method:"eth_getBalance",params:[t,"latest"],id:1})).data.result;return(parseInt(a,16)/10**18).toFixed(3)}catch(n){return console.error(n),"Error"}}const ct={ethereum:"https://eth.llamarpc.com",optimism:"https://optimism-mainnet.public.blastapi.io",arbitrum:"https://rpc.ankr.com/arbitrum",polygon:"https://polygon-bor.publicnode.com",bsc:"https://bscrpc.com"};async function te(t,e){try{let n=ct[e];if(!n)return"Error: Invalid Network Name";const a=(await P.post(n,{jsonrpc:"2.0",method:"eth_getTransactionCount",params:[t,"latest"],id:1})).data.result;return parseInt(a,16)}catch(n){return console.error(n),"Error"}}async function ne(t){try{let e="https://zksync2-mainnet-explorer.zksync.io/address/"+t;const n=await P.get(e);let s,a,c;return"0x0000000000000000000000000000000000000000"in n.data.info.balances?a=(parseInt(n.data.info.balances["0x0000000000000000000000000000000000000000"].balance,16)/10**18).toFixed(3):a=0,"0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4"in n.data.info.balances?c=(parseInt(n.data.info.balances["0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4"].balance,16)/10**6).toFixed(3):c=0,s=n.data.info.sealedNonce,{balance2:a,tx2:s,usdcBalance:c}}catch(e){return console.error(e),{balance2:"Error",tx2:"Error",usdcBalance:"Error"}}}async function se(t){try{let e="https://api.zksync.io/jsrpc";const n=await P.post(e,{id:1,jsonrpc:"2.0",method:"account_info",params:[t]});let s;"ETH"in n.data.result.committed.balances?s=(n.data.result.committed.balances.ETH/10**18).toFixed(3):s=0;let a=n.data.result.committed.nonce;return{balance1:s,tx1:a}}catch(e){return console.error(e),{balance1:"Error",tx1:"Error"}}}const dt="6.3.0";function ut(t,e,n){const s=e.split("|").map(c=>c.trim());for(let c=0;c<s.length;c++)switch(e){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof t===e)return}const a=new Error(`invalid value for type ${e}`);throw a.code="INVALID_ARGUMENT",a.argument=`value.${n}`,a.value=t,a}function De(t,e,n){for(let s in e){let a=e[s];const c=n?n[s]:null;c&&ut(a,c,s),Object.defineProperty(t,s,{enumerable:!0,value:a,writable:!1})}}function Y(t){if(t==null)return"null";if(Array.isArray(t))return"[ "+t.map(Y).join(", ")+" ]";if(t instanceof Uint8Array){const e="0123456789abcdef";let n="0x";for(let s=0;s<t.length;s++)n+=e[t[s]>>4],n+=e[t[s]&15];return n}if(typeof t=="object"&&typeof t.toJSON=="function")return Y(t.toJSON());switch(typeof t){case"boolean":case"symbol":return t.toString();case"bigint":return BigInt(t).toString();case"number":return t.toString();case"string":return JSON.stringify(t);case"object":{const e=Object.keys(t);return e.sort(),"{ "+e.map(n=>`${Y(n)}: ${Y(t[n])}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function mt(t,e,n){{const a=[];if(n){if("message"in n||"code"in n||"name"in n)throw new Error(`value will overwrite populated values: ${Y(n)}`);for(const c in n){const g=n[c];a.push(c+"="+Y(g))}}a.push(`code=${e}`),a.push(`version=${dt}`),a.length&&(t+=" ("+a.join(", ")+")")}let s;switch(e){case"INVALID_ARGUMENT":s=new TypeError(t);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":s=new RangeError(t);break;default:s=new Error(t)}return De(s,{code:e}),n&&Object.assign(s,n),s}function N(t,e,n,s){if(!t)throw mt(e,n,s)}function S(t,e,n,s){N(t,e,"INVALID_ARGUMENT",{argument:n,value:s})}["NFD","NFC","NFKD","NFKC"].reduce((t,e)=>{try{if("test".normalize(e)!=="test")throw new Error("bad");if(e==="NFD"){const n=String.fromCharCode(233).normalize("NFD"),s=String.fromCharCode(101,769);if(n!==s)throw new Error("broken")}t.push(e)}catch{}return t},[]);function ft(t,e,n){if(n==null&&(n=""),t!==e){let s=n,a="new";n&&(s+=".",a+=" "+n),N(!1,`private constructor; use ${s}from* methods`,"UNSUPPORTED_OPERATION",{operation:a})}}function ht(t,e,n){if(t instanceof Uint8Array)return n?new Uint8Array(t):t;if(typeof t=="string"&&t.match(/^0x([0-9a-f][0-9a-f])*$/i)){const s=new Uint8Array((t.length-2)/2);let a=2;for(let c=0;c<s.length;c++)s[c]=parseInt(t.substring(a,a+2),16),a+=2;return s}S(!1,"invalid BytesLike value",e||"value",t)}function gt(t,e){return ht(t,e,!1)}const Je=BigInt(0),q=BigInt(1),G=9007199254740991;function Te(t,e){const n=Me(t,"value"),s=BigInt(ye(e,"width"));if(N(n>>s===Je,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:t}),n>>s-q){const a=(q<<s)-q;return-((~n&a)+q)}return n}function Oe(t,e){const n=Me(t,"value"),s=BigInt(ye(e,"bits"));return n&(q<<s)-q}function je(t,e){switch(typeof t){case"bigint":return t;case"number":return S(Number.isInteger(t),"underflow",e||"value",t),S(t>=-G&&t<=G,"overflow",e||"value",t),BigInt(t);case"string":try{if(t==="")throw new Error("empty string");return t[0]==="-"&&t[1]!=="-"?-BigInt(t.substring(1)):BigInt(t)}catch(n){S(!1,`invalid BigNumberish string: ${n.message}`,e||"value",t)}}S(!1,"invalid BigNumberish value",e||"value",t)}function Me(t,e){const n=je(t,e);return N(n>=Je,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:t}),n}const Ce="0123456789abcdef";function yt(t){if(t instanceof Uint8Array){let e="0x0";for(const n of t)e+=Ce[n>>4],e+=Ce[n&15];return BigInt(e)}return je(t)}function ye(t,e){switch(typeof t){case"bigint":return S(t>=-G&&t<=G,"overflow",e||"value",t),Number(t);case"number":return S(Number.isInteger(t),"underflow",e||"value",t),S(t>=-G&&t<=G,"overflow",e||"value",t),t;case"string":try{if(t==="")throw new Error("empty string");return ye(BigInt(t),e)}catch(n){S(!1,`invalid numeric string: ${n.message}`,e||"value",t)}}S(!1,"invalid numeric value",e||"value",t)}const pt=BigInt(-1),A=BigInt(0),W=BigInt(1),xt=BigInt(5),K={};let X="0000";for(;X.length<80;)X+=X;function R(t){let e=X;for(;e.length<t;)e+=e;return BigInt("1"+e.substring(0,t))}function re(t,e,n){const s=BigInt(e.width);if(e.signed){const a=W<<s-W;N(n==null||t>=-a&&t<a,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:t}),t>A?t=Te(Oe(t,s),s):t=-Te(Oe(-t,s),s)}else{const a=W<<s;N(n==null||t>=0&&t<a,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:t}),t=(t%a+a)%a&a-W}return t}function Se(t){typeof t=="number"&&(t=`fixed128x${t}`);let e=!0,n=128,s=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")e=!1;else{const c=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);S(c,"invalid fixed format","format",t),e=c[1]!=="u",n=parseInt(c[2]),s=parseInt(c[3])}}else if(t){const c=t,g=(p,k,_)=>c[p]==null?_:(S(typeof c[p]===k,"invalid fixed format ("+p+" not "+k+")","format."+p,c[p]),c[p]);e=g("signed","boolean",e),n=g("width","number",n),s=g("decimals","number",s)}S(n%8===0,"invalid FixedNumber width (not byte aligned)","format.width",n),S(s<=80,"invalid FixedNumber decimals (too large)","format.decimals",s);const a=(e?"":"u")+"fixed"+String(n)+"x"+String(s);return{signed:e,width:n,decimals:s,name:a}}function kt(t,e){let n="";t<A&&(n="-",t*=pt);let s=t.toString();if(e===0)return n+s;for(;s.length<=e;)s=X+s;const a=s.length-e;for(s=s.substring(0,a)+"."+s.substring(a);s[0]==="0"&&s[1]!==".";)s=s.substring(1);for(;s[s.length-1]==="0"&&s[s.length-2]!==".";)s=s.substring(0,s.length-1);return n+s}var E,y,I,C,$,j,O,le,ze,oe,Ne,ce,Ae,de,Ee;const L=class{constructor(e,n,s){v(this,C);v(this,j);v(this,le);v(this,oe);v(this,ce);v(this,de);be(this,"format");v(this,E,void 0);v(this,y,void 0);v(this,I,void 0);be(this,"_value");ft(e,K,"FixedNumber"),he(this,y,n),he(this,E,s);const a=kt(n,s.decimals);De(this,{format:s.name,_value:a}),he(this,I,R(s.decimals))}get signed(){return f(this,E).signed}get width(){return f(this,E).width}get decimals(){return f(this,E).decimals}get value(){return f(this,y)}addUnsafe(e){return x(this,le,ze).call(this,e)}add(e){return x(this,le,ze).call(this,e,"add")}subUnsafe(e){return x(this,oe,Ne).call(this,e)}sub(e){return x(this,oe,Ne).call(this,e,"sub")}mulUnsafe(e){return x(this,ce,Ae).call(this,e)}mul(e){return x(this,ce,Ae).call(this,e,"mul")}mulSignal(e){x(this,C,$).call(this,e);const n=f(this,y)*f(e,y);return N(n%f(this,I)===A,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),x(this,j,O).call(this,n/f(this,I),"mulSignal")}divUnsafe(e){return x(this,de,Ee).call(this,e)}div(e){return x(this,de,Ee).call(this,e,"div")}divSignal(e){N(f(e,y)!==A,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),x(this,C,$).call(this,e);const n=f(this,y)*f(this,I);return N(n%f(e,y)===A,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),x(this,j,O).call(this,n/f(e,y),"divSignal")}cmp(e){let n=this.value,s=e.value;const a=this.decimals-e.decimals;return a>0?s*=R(a):a<0&&(n*=R(-a)),n<s||n>s?-1:0}eq(e){return this.cmp(e)===0}lt(e){return this.cmp(e)<0}lte(e){return this.cmp(e)<=0}gt(e){return this.cmp(e)>0}gte(e){return this.cmp(e)>=0}floor(){let e=f(this,y);return f(this,y)<A&&(e-=f(this,I)-W),e=f(this,y)/f(this,I)*f(this,I),x(this,j,O).call(this,e,"floor")}ceiling(){let e=f(this,y);return f(this,y)>A&&(e+=f(this,I)-W),e=f(this,y)/f(this,I)*f(this,I),x(this,j,O).call(this,e,"ceiling")}round(e){if(e==null&&(e=0),e>=this.decimals)return this;const n=this.decimals-e,s=xt*R(n-1);let a=this.value+s;const c=R(n);return a=a/c*c,re(a,f(this,E),"round"),new L(K,a,f(this,E))}isZero(){return f(this,y)===A}isNegative(){return f(this,y)<A}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return L.fromString(this.toString(),e)}static fromValue(e,n,s){n==null&&(n=0);const a=Se(s);let c=je(e,"value");const g=n-a.decimals;if(g>0){const p=R(g);N(c%p===A,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:e}),c/=p}else g<0&&(c*=R(-g));return re(c,a,"fromValue"),new L(K,c,a)}static fromString(e,n){const s=e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);S(s&&s[2].length+s[3].length>0,"invalid FixedNumber string value","value",e);const a=Se(n);let c=s[2]||"0",g=s[3]||"";for(;g.length<a.decimals;)g+=X;N(g.substring(a.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:e}),g=g.substring(0,a.decimals);const p=BigInt(s[1]+c+g);return re(p,a,"fromString"),new L(K,p,a)}static fromBytes(e,n){let s=yt(gt(e,"value"));const a=Se(n);return a.signed&&(s=Te(s,a.width)),re(s,a,"fromBytes"),new L(K,s,a)}};let Ie=L;E=new WeakMap,y=new WeakMap,I=new WeakMap,C=new WeakSet,$=function(e){S(this.format===e.format,"incompatible format; use fixedNumber.toFormat","other",e)},j=new WeakSet,O=function(e,n){return e=re(e,f(this,E),n),new L(K,e,f(this,E))},le=new WeakSet,ze=function(e,n){return x(this,C,$).call(this,e),x(this,j,O).call(this,f(this,y)+f(e,y),n)},oe=new WeakSet,Ne=function(e,n){return x(this,C,$).call(this,e),x(this,j,O).call(this,f(this,y)-f(e,y),n)},ce=new WeakSet,Ae=function(e,n){return x(this,C,$).call(this,e),x(this,j,O).call(this,f(this,y)*f(e,y)/f(this,I),n)},de=new WeakSet,Ee=function(e,n){return N(f(e,y)!==A,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),x(this,C,$).call(this,e),x(this,j,O).call(this,f(this,y)*f(this,I)/f(e,y),n)};const _t=["wei","kwei","mwei","gwei","szabo","finney","ether"];function bt(t,e){let n=18;if(typeof e=="string"){const s=_t.indexOf(e);S(s>=0,"invalid unit","unit",e),n=3*s}else e!=null&&(n=ye(e,"unit"));return Ie.fromValue(t,n,{decimals:n}).toString()}function Fe(t){return bt(t,18)}function wt(t){return`${t.getUTCFullYear()}-${t.getUTCMonth()+1}-${t.getUTCDate()}`}function St(t){t=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));let e=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t-e)/864e5+1)/7);return t.getUTCFullYear()+"W"+n}function Tt(t){return console.log(t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)),t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)}async function Le(t,e,n,s,a,c,g,p){for(let k=0;k<s.length;k++){const _=new Date(Date.parse(s[k].receivedAt));if(console.log(_),t.add(wt(_)),e.add(St(_)),n.add(Tt(_)),console.log(n.size),s[k].isL1Originated===!0){a++;const b=Fe(s[k].data.value);c+=parseFloat(b)}else if(s[k].data.contractAddress==="0x000000000000000000000000000000000000800a"){g++;const b=Fe(s[k].data.value);p+=parseFloat(b)}}return[t,e,n,a,c,g,p]}async function ie(t){try{let e=new Set,n=new Set,s=new Set,a=0,c=0,g=0,p=0,k=0,_=0,b=0,B=0,Q=null,V=null;const pe="https://zksync2-mainnet-explorer.zksync.io/transactions?limit=100&direction=older&accountAddress="+t,H=await P.get(pe),xe=H.data.total;if([e,n,s,p,k,_,b]=await Le(e,n,s,H.data.list,p,k,_,b),xe>100)for(Q=H.data.list[0].blockNumber,V=H.data.list[0].indexInBlock;;){let ue=`https://zksync2-mainnet-explorer.zksync.io/transactions?limit=100&direction=older&accountAddress=${t}`;Q!==void 0&&V!==void 0&&B!==0&&(ue+=`&fromBlockNumber=${Q}&fromTxIndex=${V}&offset=${B}`);const me=await P.get(ue),fe=me.data.list.length;if([e,n,s,p,k,_,b]=await Le(e,n,s,me.data.list,p,k,_,b),fe===100)B+=fe;else break}return a=e.size,c=n.size,g=s.size,{dayActivity:a,weekActivity:c,monthActivity:g,l1Tol2Times:p,l1Tol2Amount:k.toFixed(3),l2Tol1Times:_,l2Tol1Amount:b.toFixed(3)}}catch(e){return console.log(e),{dayActivity:"Error",weekActivity:"Error",monthActivity:"Error",l1Tol2Times:"Error",l1Tol2Amount:"Error",l2Tol1Times:"Error",l2Tol1Amount:"Error"}}}async function ae(t){const e="https://zksync2-mainnet-explorer.zksync.io/transactions?limit=5&direction=older&accountAddress="+t;try{const n=await P.get(e);if(n.data.total===0)return{zkSyncLastTx:"无交易"};{const s=n.data.list[0].receivedAt,a=new Date(s),c=8,g=new Date(a.getTime()+c*3600*1e3),p=new Date,_=new Date(p.getTime()+c*3600*1e3)-g,b=Math.floor(_/(1e3*60*60)),B=Math.floor(b/24);return B>0?{zkSyncLastTx:`${B} 天前`}:b>0?{zkSyncLastTx:`${b} 小时前`}:{zkSyncLastTx:"刚刚"}}}catch(n){return console.error(n),{zkSyncLastTx:"Error"}}}const{Content:It}=at,{TextArea:zt}=ge;function Ft(){const[t,e]=F.useState([]),[n,s]=F.useState(!1),[a]=J.useForm(),[c,g]=F.useState([]),[p]=J.useForm(),[k,_]=F.useState(!1),[b,B]=F.useState(!1),[Q,V]=F.useState(!1),pe=async()=>{try{const r=await p.validateFields();if(r.address.length!==42){Z.error({message:"错误",description:"请输入正确的地址"},2);return}_(!1);const u=t.findIndex(l=>l.address===r.address);if(u!==-1){e(t.map((i,m)=>m===u?{...i,name:r.name}:i));const l=[...t];ne(r.address).then(({balance2:i,tx2:m,usdcBalance:o})=>{l[u]={...l[u],zks2_balance:i,zks2_tx_amount:m,zks2_usdcBalance:o},e(l),localStorage.setItem("addresses",JSON.stringify(t))}),ae(r.address).then(({zkSyncLastTx:i})=>{l[u]={...l[u],zks2_last_tx:i},e(l),localStorage.setItem("addresses",JSON.stringify(t))}),se(r.address).then(({balance1:i,tx1:m})=>{l[u]={...l[u],zks1_balance:i,zks1_tx_amount:m},e(l),localStorage.setItem("addresses",JSON.stringify(t))}),ee(r.address,"ethereum").then(i=>{l[u]={...l[u],eth_balance:i},e(l),localStorage.setItem("addresses",JSON.stringify(t))}),te(r.address,"ethereum").then(i=>{l[u]={...l[u],eth_tx_amount:i},e(l),localStorage.setItem("addresses",JSON.stringify(t))}),ie(r.address).then(({dayActivity:i,weekActivity:m,monthActivity:o,l1Tol2Times:h,l1Tol2Amount:w,l2Tol1Times:z,l2Tol1Amount:U})=>{l[u]={...l[u],dayActivity:i,weekActivity:m,monthActivity:o,l1Tol2Times:h,l1Tol2Amount:w,l2Tol1Times:z,l2Tol1Amount:U},e(l),localStorage.setItem("addresses",JSON.stringify(t))})}else{const l={key:t.length.toString(),name:r.name,address:r.address,eth_balance:null,eth_tx_amount:null,zks2_balance:null,zks2_tx_amount:null,zks2_usdcBalance:null,zks2_last_tx:null,zks1_balance:null,zks1_tx_amount:null,dayActivity:null,weekActivity:null,monthActivity:null,l1Tol2Times:null,l1Tol2Amount:null,l2Tol1Times:null,l2Tol1Amount:null},i=[...t,l];e(i),ne(r.address).then(({balance2:m,tx2:o,usdcBalance:h})=>{l.zks2_balance=m,l.zks2_tx_amount=o,l.zks2_usdcBalance=h,e([...i]),localStorage.setItem("addresses",JSON.stringify(i))}),ae(r.address).then(({zkSyncLastTx:m})=>{l.zks2_last_tx=m,e([...i]),localStorage.setItem("addresses",JSON.stringify(i))}),se(r.address).then(({balance1:m,tx1:o})=>{l.zks1_balance=m,l.zks1_tx_amount=o,e([...i]),localStorage.setItem("addresses",JSON.stringify(i))}),ee(r.address,"ethereum").then(m=>{l.eth_balance=m,e([...i]),localStorage.setItem("addresses",JSON.stringify(i))}),te(r.address,"ethereum").then(m=>{l.eth_tx_amount=m,e([...i]),localStorage.setItem("addresses",JSON.stringify(i))}),ie(r.address).then(({dayActivity:m,weekActivity:o,monthActivity:h,l1Tol2Times:w,l1Tol2Amount:z,l2Tol1Times:U,l2Tol1Amount:D})=>{l.dayActivity=m,l.weekActivity=o,l.monthActivity=h,l.l1Tol2Times=w,l.l1Tol2Amount=z,l.l2Tol1Times=U,l.l2Tol1Amount=D,e([...i]),localStorage.setItem("addresses",JSON.stringify(i))})}}catch(r){Z.error({message:"错误",description:r.message},2)}finally{p.resetFields()}},H=async()=>{if(!c.length){Z.error({message:"错误",description:"请先选择要刷新的地址"},2);return}B(!0);try{const r=[...t];for(let u of c){const l=r.findIndex(i=>i.key===u);if(l!==-1){const i=r[l];i.eth_balance=null,i.eth_tx_amount=null,i.zks1_balance=null,i.zks1_tx_amount=null,i.zks2_balance=null,i.zks2_tx_amount=null,i.zks2_usdcBalance=null,i.zks2_last_tx=null,i.dayActivity=null,i.weekActivity=null,i.monthActivity=null,i.l1Tol2Times=null,i.l1Tol2Amount=null,i.l2Tol1Times=null,i.l2Tol1Amount=null,e([...r]),ne(i.address).then(({balance2:m,tx2:o,usdcBalance:h})=>{i.zks2_balance=m,i.zks2_tx_amount=o,i.zks2_usdcBalance=h,e([...r]),localStorage.setItem("addresses",JSON.stringify(t))}),ae(i.address).then(({zkSyncLastTx:m})=>{i.zks2_last_tx=m,e([...r]),localStorage.setItem("addresses",JSON.stringify(t))}),se(i.address).then(({balance1:m,tx1:o})=>{i.zks1_balance=m,i.zks1_tx_amount=o,e([...r]),localStorage.setItem("addresses",JSON.stringify(t))}),ee(i.address,"ethereum").then(m=>{i.eth_balance=m,e([...r]),localStorage.setItem("addresses",JSON.stringify(t))}),te(i.address,"ethereum").then(m=>{i.eth_tx_amount=m,e([...r]),localStorage.setItem("addresses",JSON.stringify(t))}),ie(i.address).then(({dayActivity:m,weekActivity:o,monthActivity:h,l1Tol2Times:w,l1Tol2Amount:z,l2Tol1Times:U,l2Tol1Amount:D})=>{i.dayActivity=m,i.weekActivity=o,i.monthActivity=h,i.l1Tol2Times=w,i.l1Tol2Amount=z,i.l2Tol1Times=U,i.l2Tol1Amount=D,e([...r]),localStorage.setItem("addresses",JSON.stringify(t))})}}}catch(r){Z.error({message:"错误",description:r.message},2)}finally{B(!1),g([])}},xe=async()=>{try{const u=(await a.validateFields()).addresses.split(`
`),l=[...t];for(let i of u){if(i=i.trim(),i.length!==42){Z.error({message:"错误",description:"请输入正确的地址"});continue}const m=l.findIndex(o=>o.address===i);if(m!==-1){const o=[...l];ne(i).then(({balance2:h,tx2:w,usdcBalance:z})=>{o[m]={...o[m],zks2_balance:h,zks2_tx_amount:w,zks2_usdcBalance:z},e(o),localStorage.setItem("addresses",JSON.stringify(o))}),ae(i).then(({zkSyncLastTx:h})=>{o[m]={...o[m],zks2_last_tx:h},e(o),localStorage.setItem("addresses",JSON.stringify(o))}),se(i).then(({balance1:h,tx1:w})=>{o[m]={...o[m],zks1_balance:h,zks1_tx_amount:w},e(o),localStorage.setItem("addresses",JSON.stringify(o))}),ee(i,"ethereum").then(h=>{o[m]={...o[m],eth_balance:h},e(o),localStorage.setItem("addresses",JSON.stringify(o))}),te(i,"ethereum").then(h=>{o[m]={...o[m],eth_tx_amount:h},e(o),localStorage.setItem("addresses",JSON.stringify(o))}),ie(i).then(({dayActivity:h,weekActivity:w,monthActivity:z,l1Tol2Times:U,l1Tol2Amount:D,l2Tol1Times:ke,l2Tol1Amount:_e})=>{o[m]={...o[m],dayActivity:h,weekActivity:w,monthActivity:z,l1Tol2Times:U,l1Tol2Amount:D,l2Tol1Times:ke,l2Tol1Amount:_e},e(o),localStorage.setItem("addresses",JSON.stringify(o))})}else{const o={key:l.length.toString(),address:i,eth_balance:null,eth_tx_amount:null,zks2_balance:null,zks2_tx_amount:null,zks2_usdcBalance:null,zks1_balance:null,zks1_tx_amount:null,zks2_last_tx:null,dayActivity:null,weekActivity:null,monthActivity:null,l1Tol2Times:null,l1Tol2Amount:null,l2Tol1Times:null,l2Tol1Amount:null};l.push(o),e(l),ne(i).then(({balance2:h,tx2:w,usdcBalance:z})=>{o.zks2_balance=h,o.zks2_tx_amount=w,o.zks2_usdcBalance=z,e([...l]),localStorage.setItem("addresses",JSON.stringify(l))}),ae(i).then(({zkSyncLastTx:h})=>{o.zks2_last_tx=h,e([...l]),localStorage.setItem("addresses",JSON.stringify(l))}),se(i).then(({balance1:h,tx1:w})=>{o.zks1_balance=h,o.zks1_tx_amount=w,e([...l]),localStorage.setItem("addresses",JSON.stringify(l))}),ee(i,"ethereum").then(h=>{o.eth_balance=h,e([...l]),localStorage.setItem("addresses",JSON.stringify(l))}),te(i,"ethereum").then(h=>{o.eth_tx_amount=h,e([...l]),localStorage.setItem("addresses",JSON.stringify(l))}),ie(i).then(({dayActivity:h,weekActivity:w,monthActivity:z,l1Tol2Times:U,l1Tol2Amount:D,l2Tol1Times:ke,l2Tol1Amount:_e})=>{o.dayActivity=h,o.weekActivity=w,o.monthActivity=z,o.l1Tol2Times=U,o.l1Tol2Amount=D,o.l2Tol1Times=ke,o.l2Tol1Amount=_e,e([...l]),localStorage.setItem("addresses",JSON.stringify(l))})}}s(!1)}catch(r){Z.error({message:"错误",description:r.message})}finally{a.resetFields(),g([])}},ue=()=>{_(!0)},me=()=>{s(!0)},fe=()=>{et(t,"walletInfo")};F.useEffect(()=>{V(!0);const r=localStorage.getItem("addresses");setTimeout(()=>{V(!1)},500),r&&e(JSON.parse(r))},[]);const Re=()=>{_(!1)},$e=r=>{e(t.filter(u=>u.key!==r)),localStorage.setItem("addresses",JSON.stringify(t.filter(u=>u.key!==r)))},Pe=()=>{e(t.filter(r=>!c.includes(r.key))),localStorage.setItem("addresses",JSON.stringify(t.filter(r=>!c.includes(r.key)))),g([])},Ve={onChange:(r,u)=>{g(r)}},He=()=>{s(!1)},[Ze,ve]=F.useState(null),Ke=[{title:"#",key:"index",align:"center",render:(r,u,l)=>l+1},{title:"备注",dataIndex:"name",key:"name",align:"center",render:(r,u)=>u.key===Ze?d.jsx(ge,{placeholder:"请输入备注",defaultValue:r,onPressEnter:i=>{u.name=i.target.value,e([...t]),localStorage.setItem("addresses",JSON.stringify(t)),ve(null)}}):d.jsxs(d.Fragment,{children:[d.jsx(nt,{color:"blue",children:r}),d.jsx(M,{shape:"circle",icon:d.jsx(it,{}),size:"small",onClick:()=>ve(u.key)})]})},{title:"钱包地址",dataIndex:"address",key:"address",align:"center"},{title:"ETH",key:"eth_group",className:"zks_eth",children:[{title:"ETH",dataIndex:"eth_balance",key:"eth_balance",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r},{title:"Tx",dataIndex:"eth_tx_amount",key:"eth_tx_amount",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r}]},{title:"zkSyncLite",key:"zks_lite_group",className:"zks_lite",children:[{title:"ETH",dataIndex:"zks1_balance",key:"zks1_balance",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r},{title:"Tx",dataIndex:"zks1_tx_amount",key:"zks1_tx_amount",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r}]},{title:"zkSyncEra",key:"zks_era_group",className:"zks_era",children:[{title:"ETH",dataIndex:"zks2_balance",key:"zks2_balance",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r},{title:"USDC",dataIndex:"zks2_usdcBalance",key:"zks2_usdcBalance",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r},{title:"Tx",dataIndex:"zks2_tx_amount",key:"zks2_tx_amount",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r},{title:"最后交易",dataIndex:"zks2_last_tx",key:"zks2_last_tx",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):d.jsx("a",{href:"https://explorer.zksync.io/address/"+u.address,target:"_blank",children:r})},{title:"官方桥跨链Tx数",key:"cross_chain_tx_count_group",children:[{title:"L1->L2",dataIndex:"l1Tol2Times",key:"l1Tol2Times",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r},{title:"L2->L1",dataIndex:"l2Tol1Times",key:"l2Tol1Times",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r}]},{title:"官方桥跨链金额(ETH)",key:"cross_chain_amount_group",children:[{title:"L1->L2",dataIndex:"l1Tol2Amount",key:"l1Tol2Amount",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r},{title:"L2->L1",dataIndex:"l2Tol1Amount",key:"l2Tol1Amount",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r}]},{title:"活跃统计",key:"activity_stats_group",children:[{title:"日",dataIndex:"dayActivity",key:"dayActivity",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r},{title:"周",dataIndex:"weekActivity",key:"weekActivity",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r},{title:"月",dataIndex:"monthActivity",key:"monthActivity",align:"center",render:(r,u)=>r===null?d.jsx(T,{}):r}]}]},{title:"操作",key:"action",align:"center",render:(r,u)=>d.jsx(lt,{size:"small",children:d.jsx(st,{title:"确认删除？",onConfirm:()=>$e(u.key),children:d.jsx(M,{icon:d.jsx(Ue,{})})})})}];return d.jsx("div",{children:d.jsxs(It,{children:[d.jsx(Be,{title:"批量添加地址",open:n,onOk:xe,onCancel:He,okButtonProps:{loading:b},okText:"添加地址",cancelText:"取消",children:d.jsx(J,{form:a,layout:"vertical",children:d.jsx(J.Item,{label:"地址",name:"addresses",rules:[{required:!0}],children:d.jsx(zt,{placeholder:"请输入地址，每行一个",style:{width:"500px",height:"200px"}})})})}),d.jsx(Be,{title:"添加地址",open:k,onOk:pe,onCancel:Re,okButtonProps:{loading:b},okText:"添加地址",cancelText:"取消",children:d.jsxs(J,{form:p,layout:"vertical",children:[d.jsx(J.Item,{label:"地址",name:"address",rules:[{required:!0}],children:d.jsx(ge,{placeholder:"请输入地址"})}),d.jsx(J.Item,{label:"备注",name:"name",children:d.jsx(ge,{placeholder:"请输入备注"})})]})}),d.jsx(T,{spinning:Q,children:d.jsx(tt,{rowSelection:{type:"checkbox",...Ve},dataSource:t,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:Ke})}),d.jsx(Ge,{children:d.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",gap:"10px"},children:[d.jsx(M,{type:"primary",onClick:ue,size:"large",style:{width:"20%"},icon:d.jsx(rt,{}),children:"添加地址"}),d.jsx(M,{type:"primary",onClick:me,size:"large",style:{width:"20%"},icon:d.jsx(We,{}),children:"批量添加地址"}),d.jsx(M,{type:"primary",onClick:H,loading:b,size:"large",style:{width:"20%"},disabled:!c.length,icon:d.jsx(Xe,{}),children:"刷新选中地址"}),d.jsx(M,{type:"primary",danger:!0,size:"large",onConfirm:Pe,style:{width:"20%"},disabled:!c.length,icon:d.jsx(Ue,{}),children:"删除选中地址"}),d.jsx(M,{type:"primary",icon:d.jsx(Qe,{}),size:"large",style:{width:"8%"},onClick:fe})]})})]})})}export{Ft as default};
