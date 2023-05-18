import{r,g as it}from"./index-616c271b.js";import{A as Ce,_ as ee,v as te,M as we,N as lt,O as st,g as at,c as ne,T as ct,i as dt,C as Te,h as $e,t as Re,P as Z,Q as se,U as ut,o as je,D as pt,V as be,R as ft,E as gt,W as mt}from"./EditOutlined-0f953425.js";var yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const bt=yt;var Ie=function(t,o){return r.createElement(Ce,ee(ee({},t),{},{ref:o,icon:bt}))};Ie.displayName="CopyOutlined";const vt=r.forwardRef(Ie);var ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const Et=ht;var Pe=function(t,o){return r.createElement(Ce,ee(ee({},t),{},{ref:o,icon:Et}))};Pe.displayName="EnterOutlined";const xt=r.forwardRef(Pe);var St=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const Ot={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Ct=r.forwardRef((e,t)=>{const o=g=>{const{keyCode:s}=g;s===te.ENTER&&g.preventDefault()},n=g=>{const{keyCode:s}=g,{onClick:y}=e;s===te.ENTER&&y&&y()},{style:i,noStyle:p,disabled:m}=e,c=St(e,["style","noStyle","disabled"]);let d={};return p||(d=Object.assign({},Ot)),m&&(d.pointerEvents="none"),d=Object.assign(Object.assign({},d),i),r.createElement("div",Object.assign({role:"button",tabIndex:0,ref:t},c,{onKeyDown:o,onKeyUp:n,style:d}))}),ve=Ct;var wt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(i){e.addRange(i)}),t&&t.focus()}},Tt=wt,he={"text/plain":"Text","text/html":"Url",default:"Text"},$t="Copy to clipboard: #{key}, Enter";function Rt(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function jt(e,t){var o,n,i,p,m,c,d=!1;t||(t={}),o=t.debug||!1;try{i=Tt(),p=document.createRange(),m=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(s){if(s.stopPropagation(),t.format)if(s.preventDefault(),typeof s.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=he[t.format]||he.default;window.clipboardData.setData(y,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e);t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))}),document.body.appendChild(c),p.selectNodeContents(c),m.addRange(p);var g=document.execCommand("copy");if(!g)throw new Error("copy command was unsuccessful");d=!0}catch(s){o&&console.error("unable to copy using execCommand: ",s),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(y){o&&console.error("unable to copy using clipboardData: ",y),o&&console.error("falling back to prompt"),n=Rt("message"in t?t.message:$t),window.prompt(n,e)}}finally{m&&(typeof m.removeRange=="function"?m.removeRange(p):m.removeAllRanges()),c&&document.body.removeChild(c),i()}return d}var It=jt;const Pt=it(It),_t=(e,t,o,n)=>{const{sizeMarginHeadingVerticalEnd:i,fontWeightStrong:p}=n;return{marginBottom:i,color:o,fontWeight:p,fontSize:e,lineHeight:t}},kt=e=>{const t=[1,2,3,4,5],o={};return t.forEach(n=>{o[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=_t(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),o},Lt=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},we(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Nt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:lt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),Dt=e=>{const{componentCls:t}=e,n=st(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-n,marginBottom:`calc(1em - ${n}px)`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},zt=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),Ht=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),Mt=e=>{const{componentCls:t,sizeMarginHeadingVerticalStart:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},kt(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:o},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:o}}}),Nt(e)),Lt(e)),{[`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]:Object.assign(Object.assign({},we(e)),{marginInlineStart:e.marginXXS})}),Dt(e)),zt(e)),Ht()),{"&-rtl":{direction:"rtl"}})}},_e=at("Typography",e=>[Mt(e)],{sizeMarginHeadingVerticalStart:"1.2em",sizeMarginHeadingVerticalEnd:"0.5em"}),At=e=>{let{prefixCls:t,"aria-label":o,className:n,style:i,direction:p,maxLength:m,autoSize:c=!0,value:d,onSave:g,onCancel:s,onEnd:y,component:b,enterIcon:$=r.createElement(xt,null)}=e;const x=r.useRef(null),C=r.useRef(!1),L=r.useRef(),[I,w]=r.useState(d);r.useEffect(()=>{w(d)},[d]),r.useEffect(()=>{if(x.current&&x.current.resizableTextArea){const{textArea:O}=x.current.resizableTextArea;O.focus();const{length:R}=O.value;O.setSelectionRange(R,R)}},[]);const u=O=>{let{target:R}=O;w(R.value.replace(/[\n\r]/g,""))},M=()=>{C.current=!0},A=()=>{C.current=!1},v=O=>{let{keyCode:R}=O;C.current||(L.current=R)},W=()=>{g(I.trim())},h=O=>{let{keyCode:R,ctrlKey:re,altKey:V,metaKey:D,shiftKey:K}=O;L.current===R&&!C.current&&!re&&!V&&!D&&!K&&(R===te.ENTER?(W(),y==null||y()):R===te.ESC&&s())},f=()=>{W()},T=b?`${t}-${b}`:"",[B,N]=_e(t),k=ne(t,`${t}-edit-content`,{[`${t}-rtl`]:p==="rtl"},n,T,N);return B(r.createElement("div",{className:k,style:i},r.createElement(ct,{ref:x,maxLength:m,value:I,onChange:u,onKeyDown:v,onKeyUp:h,onCompositionStart:M,onCompositionEnd:A,onBlur:f,"aria-label":o,rows:1,autoSize:c}),$!==null?dt($,{className:`${t}-edit-content-confirm`}):null))},Bt=At;function ie(e,t){return r.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},t),o&&typeof e=="object"?e:null)]},[e])}const Wt=(e,t)=>{const o=r.useRef(!1);r.useEffect(()=>{o.current?e():o.current=!0},t)},Kt=Wt;var Ut=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const Vt=r.forwardRef((e,t)=>{var{prefixCls:o,component:n="article",className:i,rootClassName:p,setContentRef:m,children:c,direction:d}=e,g=Ut(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction"]);const{getPrefixCls:s,direction:y}=r.useContext(Te),b=d??y;let $=t;m&&($=$e(t,m));const x=s("typography",o),[C,L]=_e(x),I=ne(x,{[`${x}-rtl`]:b==="rtl"},i,p,L);return C(r.createElement(n,Object.assign({className:I,ref:$},g),c))}),ke=Vt;function Le(e){const t=typeof e;return t==="string"||t==="number"}function Ft(e){let t=0;return e.forEach(o=>{Le(o)?t+=String(o).length:t+=1}),t}function Ee(e,t){let o=0;const n=[];for(let i=0;i<e.length;i+=1){if(o===t)return n;const p=e[i],c=Le(p)?String(p).length:1,d=o+c;if(d>t){const g=t-o;return n.push(String(p).slice(0,g)),n}n.push(p),o=d}return e}const Xt=0,Q=1,xe=2,le=3,Se=4,Jt=e=>{let{enabledMeasure:t,children:o,text:n,width:i,fontSize:p,rows:m,onEllipsis:c}=e;const[[d,g,s],y]=r.useState([0,0,0]),[b,$]=r.useState(Xt),[x,C]=r.useState(0),L=r.useRef(null),I=r.useRef(null),w=r.useMemo(()=>Re(n),[n]),u=r.useMemo(()=>Ft(w),[w]),M=r.useMemo(()=>!t||b!==le?o(w,!1):o(Ee(w,g),g<u),[t,b,o,w,g,u]);Z(()=>{t&&i&&p&&u&&($(Q),y([0,Math.ceil(u/2),u]))},[t,i,p,n,u,m]),Z(()=>{var h;b===Q&&C(((h=L.current)===null||h===void 0?void 0:h.offsetHeight)||0)},[b]),Z(()=>{var h,f;if(x){if(b===Q){const T=((h=I.current)===null||h===void 0?void 0:h.offsetHeight)||0,B=m*x;T<=B?($(Se),c(!1)):$(xe)}else if(b===xe)if(d!==s){const T=((f=I.current)===null||f===void 0?void 0:f.offsetHeight)||0,B=m*x;let N=d,k=s;d===s-1?k=d:T<=B?N=g:k=g;const O=Math.ceil((N+k)/2);y([N,O,k])}else $(le),c(!0)}},[b,d,s,m,x]);const A={width:i,whiteSpace:"normal",margin:0,padding:0},v=(h,f,T)=>r.createElement("span",{"aria-hidden":!0,ref:f,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(p/2)*2},T)},h),W=(h,f)=>{const T=Ee(w,h);return v(o(T,!0),f,A)};return r.createElement(r.Fragment,null,M,t&&b!==le&&b!==Se&&r.createElement(r.Fragment,null,v("lg",L,{wordBreak:"keep-all",whiteSpace:"nowrap"}),b===Q?v(o(w,!1),I,A):W(g,I)))},qt=Jt,Gt=e=>{let{enabledEllipsis:t,isEllipsis:o,children:n,tooltipProps:i}=e;return!(i!=null&&i.title)||!t?n:r.createElement(se,Object.assign({open:o?void 0:!1},i),n)},Qt=Gt;var Yt=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};function Zt(e,t){let{mark:o,code:n,underline:i,delete:p,strong:m,keyboard:c,italic:d}=e,g=t;function s(y,b){b&&(g=r.createElement(y,{},g))}return s("strong",m),s("u",i),s("del",p),s("code",n),s("mark",o),s("kbd",c),s("i",d),g}function Y(e,t,o){return e===!0||e===void 0?t:e||o&&t}function Oe(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const en="...",tn=r.forwardRef((e,t)=>{var o,n,i;const{prefixCls:p,className:m,style:c,type:d,disabled:g,children:s,ellipsis:y,editable:b,copyable:$,component:x,title:C}=e,L=Yt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:I,direction:w}=r.useContext(Te),[u]=ut("Text"),M=r.useRef(null),A=r.useRef(null),v=I("typography",p),W=je(L,["mark","code","delete","underline","strong","keyboard","italic"]),[h,f]=ie(b),[T,B]=pt(!1,{value:f.editing}),{triggerType:N=["icon"]}=f,k=l=>{var a;l&&((a=f.onStart)===null||a===void 0||a.call(f)),B(l)};Kt(()=>{var l;T||(l=A.current)===null||l===void 0||l.focus()},[T]);const O=l=>{l==null||l.preventDefault(),k(!0)},R=l=>{var a;(a=f.onChange)===null||a===void 0||a.call(f,l),k(!1)},re=()=>{var l;(l=f.onCancel)===null||l===void 0||l.call(f),k(!1)},[V,D]=ie($),[K,ae]=r.useState(!1),ce=r.useRef(),de={};D.format&&(de.format=D.format);const ue=()=>{window.clearTimeout(ce.current)},Ne=l=>{var a;l==null||l.preventDefault(),l==null||l.stopPropagation(),Pt(D.text||String(s)||"",de),ae(!0),ue(),ce.current=window.setTimeout(()=>{ae(!1)},3e3),(a=D.onCopy)===null||a===void 0||a.call(D,l)};r.useEffect(()=>ue,[]);const[pe,De]=r.useState(!1),[fe,ze]=r.useState(!1),[He,Me]=r.useState(!1),[ge,Ae]=r.useState(!1),[me,Be]=r.useState(!1),[We,Ke]=r.useState(!0),[z,E]=ie(y,{expandable:!1}),P=z&&!He,{rows:U=1}=E,X=r.useMemo(()=>!P||E.suffix!==void 0||E.onEllipsis||E.expandable||h||V,[P,E,h,V]);Z(()=>{z&&!X&&(De(be("webkitLineClamp")),ze(be("textOverflow")))},[X,z]);const _=r.useMemo(()=>X?!1:U===1?fe:pe,[X,fe,pe]),ye=P&&(_?me:ge),Ue=P&&U===1&&_,J=P&&U>1&&_,Ve=l=>{var a;Me(!0),(a=E.onExpand)===null||a===void 0||a.call(E,l)},[Fe,Xe]=r.useState(0),[Je,qe]=r.useState(0),Ge=(l,a)=>{let{offsetWidth:S}=l;var j;Xe(S),qe(parseInt((j=window.getComputedStyle)===null||j===void 0?void 0:j.call(window,a).fontSize,10)||0)},Qe=l=>{var a;Ae(l),ge!==l&&((a=E.onEllipsis)===null||a===void 0||a.call(E,l))};r.useEffect(()=>{const l=M.current;if(z&&_&&l){const a=J?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;me!==a&&Be(a)}},[z,_,s,J,We]),r.useEffect(()=>{const l=M.current;if(typeof IntersectionObserver>"u"||!l||!_||!P)return;const a=new IntersectionObserver(()=>{Ke(!!l.offsetParent)});return a.observe(l),()=>{a.disconnect()}},[_,P]);let H={};E.tooltip===!0?H={title:(o=f.text)!==null&&o!==void 0?o:s}:r.isValidElement(E.tooltip)?H={title:E.tooltip}:typeof E.tooltip=="object"?H=Object.assign({title:(n=f.text)!==null&&n!==void 0?n:s},E.tooltip):H={title:E.tooltip};const q=r.useMemo(()=>{const l=a=>["string","number"].includes(typeof a);if(!(!z||_)){if(l(f.text))return f.text;if(l(s))return s;if(l(C))return C;if(l(H.title))return H.title}},[z,_,C,H.title,ye]);if(T)return r.createElement(Bt,{value:(i=f.text)!==null&&i!==void 0?i:typeof s=="string"?s:"",onSave:R,onCancel:re,onEnd:f.onEnd,prefixCls:v,className:m,style:c,direction:w,component:x,maxLength:f.maxLength,autoSize:f.autoSize,enterIcon:f.enterIcon});const Ye=()=>{const{expandable:l,symbol:a}=E;if(!l)return null;let S;return a?S=a:S=u==null?void 0:u.expand,r.createElement("a",{key:"expand",className:`${v}-expand`,onClick:Ve,"aria-label":u==null?void 0:u.expand},S)},Ze=()=>{if(!h)return;const{icon:l,tooltip:a}=f,S=Re(a)[0]||(u==null?void 0:u.edit),j=typeof S=="string"?S:"";return N.includes("icon")?r.createElement(se,{key:"edit",title:a===!1?"":S},r.createElement(ve,{ref:A,className:`${v}-edit`,onClick:O,"aria-label":j},l||r.createElement(gt,{role:"button"}))):null},et=()=>{if(!V)return;const{tooltips:l,icon:a}=D,S=Oe(l),j=Oe(a),G=K?Y(S[1],u==null?void 0:u.copied):Y(S[0],u==null?void 0:u.copy),ot=K?u==null?void 0:u.copied:u==null?void 0:u.copy,rt=typeof G=="string"?G:ot;return r.createElement(se,{key:"copy",title:G},r.createElement(ve,{className:ne(`${v}-copy`,K&&`${v}-copy-success`),onClick:Ne,"aria-label":rt},K?Y(j[1],r.createElement(mt,null),!0):Y(j[0],r.createElement(vt,null),!0)))},tt=l=>[l&&Ye(),Ze(),et()],nt=l=>[l&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},en),E.suffix,tt(l)];return r.createElement(ft,{onResize:Ge,disabled:!P||_},l=>r.createElement(Qt,{tooltipProps:H,enabledEllipsis:P,isEllipsis:ye},r.createElement(ke,Object.assign({className:ne({[`${v}-${d}`]:d,[`${v}-disabled`]:g,[`${v}-ellipsis`]:z,[`${v}-single-line`]:P&&U===1,[`${v}-ellipsis-single-line`]:Ue,[`${v}-ellipsis-multiple-line`]:J},m),prefixCls:p,style:Object.assign(Object.assign({},c),{WebkitLineClamp:J?U:void 0}),component:x,ref:$e(l,M,t),direction:w,onClick:N.includes("text")?O:void 0,"aria-label":q==null?void 0:q.toString(),title:C},W),r.createElement(qt,{enabledMeasure:P&&!_,text:s,rows:U,width:Fe,fontSize:Je,onEllipsis:Qe},(a,S)=>{let j=a;return a.length&&S&&q&&(j=r.createElement("span",{key:"show-content","aria-hidden":!0},j)),Zt(e,r.createElement(r.Fragment,null,j,nt(S)))}))))}),oe=tn;var nn=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const on=r.forwardRef((e,t)=>{var{ellipsis:o,rel:n}=e,i=nn(e,["ellipsis","rel"]);const p=Object.assign(Object.assign({},i),{rel:n===void 0&&i.target==="_blank"?"noopener noreferrer":n});return delete p.navigate,r.createElement(oe,Object.assign({},p,{ref:t,ellipsis:!!o,component:"a"}))}),rn=on,ln=r.forwardRef((e,t)=>r.createElement(oe,Object.assign({ref:t},e,{component:"div"}))),sn=ln;var an=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const cn=(e,t)=>{var{ellipsis:o}=e,n=an(e,["ellipsis"]);const i=r.useMemo(()=>o&&typeof o=="object"?je(o,["expandable","rows"]):o,[o]);return r.createElement(oe,Object.assign({ref:t},n,{ellipsis:i,component:"span"}))},dn=r.forwardRef(cn);var un=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const pn=[1,2,3,4,5],fn=r.forwardRef((e,t)=>{const{level:o=1}=e,n=un(e,["level"]);let i;return pn.includes(o)?i=`h${o}`:i="h1",r.createElement(oe,Object.assign({ref:t},n,{component:i}))}),gn=fn,F=ke;F.Text=dn;F.Link=rn;F.Title=gn;F.Paragraph=sn;const bn=F;export{vt as C,bn as T,Pt as c};