import{q as L,p as M,c as H,k as G,v as Q,j as P,_ as K,J,l as W}from"./EditOutlined-0f953425.js";import{r as o,b as z}from"./index-616c271b.js";import{a as B,H as U,F as V,b as X,c as Y}from"./index-8d1b79b1.js";var Z=o.forwardRef(function(e,d){var y=e.prefixCls,i=e.style,f=e.className,l=e.duration,s=l===void 0?4.5:l,E=e.eventKey,S=e.content,k=e.closable,$=e.closeIcon,p=$===void 0?"x":$,h=e.props,_=e.onClick,v=e.onNoticeClose,A=e.times,b=o.useState(!1),u=L(b,2),C=u[0],g=u[1],N=function(){v(E)},m=function(r){(r.key==="Enter"||r.code==="Enter"||r.keyCode===Q.ENTER)&&N()};o.useEffect(function(){if(!C&&s>0){var t=setTimeout(function(){N()},s*1e3);return function(){clearTimeout(t)}}},[s,C,A]);var n="".concat(y,"-notice");return o.createElement("div",M({},h,{ref:d,className:H(n,f,G({},"".concat(n,"-closable"),k)),style:i,onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)},onClick:_}),o.createElement("div",{className:"".concat(n,"-content")},S),k&&o.createElement("a",{tabIndex:0,className:"".concat(n,"-close"),onKeyDown:m,onClick:function(r){r.preventDefault(),r.stopPropagation(),N()}},p))});const ee=Z;var te=o.forwardRef(function(e,d){var y=e.prefixCls,i=y===void 0?"rc-notification":y,f=e.container,l=e.motion,s=e.maxCount,E=e.className,S=e.style,k=e.onAllRemoved,$=o.useState([]),p=L($,2),h=p[0],_=p[1],v=function(t){var r,a=h.find(function(c){return c.key===t});a==null||(r=a.onClose)===null||r===void 0||r.call(a),_(function(c){return c.filter(function(x){return x.key!==t})})};o.useImperativeHandle(d,function(){return{open:function(t){_(function(r){var a=P(r),c=a.findIndex(function(w){return w.key===t.key}),x=K({},t);if(c>=0){var R;x.times=(((R=r[c])===null||R===void 0?void 0:R.times)||0)+1,a[c]=x}else x.times=0,a.push(x);return s>0&&a.length>s&&(a=a.slice(-s)),a})},close:function(t){v(t)},destroy:function(){_([])}}});var A=o.useState({}),b=L(A,2),u=b[0],C=b[1];o.useEffect(function(){var n={};h.forEach(function(t){var r=t.placement,a=r===void 0?"topRight":r;a&&(n[a]=n[a]||[],n[a].push(t))}),Object.keys(u).forEach(function(t){n[t]=n[t]||[]}),C(n)},[h]);var g=function(t){C(function(r){var a=K({},r),c=a[t]||[];return c.length||delete a[t],a})},N=o.useRef(!1);if(o.useEffect(function(){Object.keys(u).length>0?N.current=!0:N.current&&(k==null||k(),N.current=!1)},[u]),!f)return null;var m=Object.keys(u);return z.createPortal(o.createElement(o.Fragment,null,m.map(function(n){var t=u[n],r=t.map(function(c){return{config:c,key:c.key}}),a=typeof l=="function"?l(n):l;return o.createElement(J,M({key:n,className:H(i,"".concat(i,"-").concat(n),E==null?void 0:E(n)),style:S==null?void 0:S(n),keys:r,motionAppear:!0},a,{onAllRemoved:function(){g(n)}}),function(c,x){var R=c.config,w=c.className,j=c.style,D=R.key,F=R.times,O=R.className,q=R.style;return o.createElement(ee,M({},R,{ref:x,prefixCls:i,className:H(w,O),style:K(K({},j),q),times:F,key:D,eventKey:D,onNoticeClose:v}))})})),f)}),ne=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],oe=function(){return document.body},T=0;function ae(){for(var e={},d=arguments.length,y=new Array(d),i=0;i<d;i++)y[i]=arguments[i];return y.forEach(function(f){f&&Object.keys(f).forEach(function(l){var s=f[l];s!==void 0&&(e[l]=s)})}),e}function se(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=e.getContainer,y=d===void 0?oe:d,i=e.motion,f=e.prefixCls,l=e.maxCount,s=e.className,E=e.style,S=e.onAllRemoved,k=W(e,ne),$=o.useState(),p=L($,2),h=p[0],_=p[1],v=o.useRef(),A=o.createElement(te,{container:h,ref:v,prefixCls:f,motion:i,maxCount:l,className:s,style:E,onAllRemoved:S}),b=o.useState([]),u=L(b,2),C=u[0],g=u[1],N=o.useMemo(function(){return{open:function(n){var t=ae(k,n);(t.key===null||t.key===void 0)&&(t.key="rc-notification-".concat(T),T+=1),g(function(r){return[].concat(P(r),[{type:"open",config:t}])})},close:function(n){g(function(t){return[].concat(P(t),[{type:"close",key:n}])})},destroy:function(){g(function(n){return[].concat(P(n),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){_(y())}),o.useEffect(function(){v.current&&C.length&&(C.forEach(function(m){switch(m.type){case"open":v.current.open(m.config);break;case"close":v.current.close(m.key);break;case"destroy":v.current.destroy();break}}),g([]))},[C]),[N,A]}const I=B;I.Header=U;I.Footer=V;I.Content=X;I.Sider=Y;const le=I;export{le as L,ee as N,se as u};
