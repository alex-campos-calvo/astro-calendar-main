import{K as W,L as ee,s as ie,n as ae,o as P,u as be,a as Fe,O as re,y as Y,T as Te,b as pe,t as Be,R as Re,M as je,c as Ne,d as G,i as X,e as Oe,$ as Le,f as He,w as Ze,g as _e,_ as ce,h as ge,x as xe,j as Pe,k as Ae,l as De,m as Ve,p as Ke,q as Ge,r as We,P as K,F as _,v as ze,z as Ue,A as qe,B as Je,C as Qe,D as V,E as Ee,G as de,H as x}from"./portal.CHPGWDX5.js";import{r as n,U as b}from"./index.39R_i9ea.js";let Ye="span";var ne=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ne||{});function Xe(e,t){var u;let{features:s=1,...p}=e,f={ref:t,"aria-hidden":(s&2)===2?!0:(u=p["aria-hidden"])!=null?u:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return ee()({ourProps:f,theirProps:p,slot:{},defaultTag:Ye,name:"Hidden"})}let oe=W(Xe),et=n.createContext(()=>{});function tt({value:e,children:t}){return b.createElement(et.Provider,{value:e},t)}function nt(e,t,u,s){let p=ie(u);n.useEffect(()=>{e=e??window;function f(m){p.current(m)}return e.addEventListener(t,f,s),()=>e.removeEventListener(t,f,s)},[e,t,s])}function rt({defaultContainers:e=[],portals:t,mainTreeNode:u}={}){let s=ae(u),p=P(()=>{var f,m;let l=[];for(let a of e)a!==null&&(a instanceof HTMLElement?l.push(a):"current"in a&&a.current instanceof HTMLElement&&l.push(a.current));if(t!=null&&t.current)for(let a of t.current)l.push(a);for(let a of(f=s?.querySelectorAll("html > *, body > *"))!=null?f:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(u&&(a.contains(u)||a.contains((m=u?.getRootNode())==null?void 0:m.host))||l.some(S=>a.contains(S))||l.push(a));return l});return{resolveContainers:p,contains:P(f=>p().some(m=>m.contains(f)))}}let ye=n.createContext(null);function we({children:e,node:t}){let[u,s]=n.useState(null),p=Se(t??u);return b.createElement(ye.Provider,{value:p},e,p===null&&b.createElement(oe,{features:ne.Hidden,ref:f=>{var m,l;if(f){for(let a of(l=(m=be(f))==null?void 0:m.querySelectorAll("html > *, body > *"))!=null?l:[])if(a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a!=null&&a.contains(f)){s(a);break}}}}))}function Se(e=null){var t;return(t=n.useContext(ye))!=null?t:e}var Z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Z||{});function $e(){let e=n.useRef(0);return Fe(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}var ot=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ot||{}),at=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(at||{});let lt={0:e=>({...e,popoverState:G(e.popoverState,{0:1,1:0}),__demoMode:!1}),1(e){return e.popoverState===1?e:{...e,popoverState:1,__demoMode:!1}},2(e,t){return e.button===t.button?e:{...e,button:t.button}},3(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},4(e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},5(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},fe=n.createContext(null);fe.displayName="PopoverContext";function le(e){let t=n.useContext(fe);if(t===null){let u=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,le),u}return t}let ue=n.createContext(null);ue.displayName="PopoverAPIContext";function ve(e){let t=n.useContext(ue);if(t===null){let u=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,ve),u}return t}let me=n.createContext(null);me.displayName="PopoverGroupContext";function ke(){return n.useContext(me)}let se=n.createContext(null);se.displayName="PopoverPanelContext";function ut(){return n.useContext(se)}function st(e,t){return G(t.type,lt,e,t)}let it="div";function ct(e,t){var u;let{__demoMode:s=!1,...p}=e,f=n.useRef(null),m=Y(t,Te(c=>{f.current=c})),l=n.useRef([]),a=n.useReducer(st,{__demoMode:s,popoverState:s?0:1,buttons:l,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:n.createRef(),afterPanelSentinel:n.createRef(),afterButtonSentinel:n.createRef()}),[{popoverState:S,button:o,buttonId:E,panel:g,panelId:$,beforePanelSentinel:k,afterPanelSentinel:y,afterButtonSentinel:i},h]=a,w=ae((u=f.current)!=null?u:o),B=n.useMemo(()=>{if(!o||!g)return!1;for(let C of document.querySelectorAll("body > *"))if(Number(C?.contains(o))^Number(C?.contains(g)))return!0;let c=pe(),r=c.indexOf(o),v=(r+c.length-1)%c.length,d=(r+1)%c.length,M=c[v],T=c[d];return!g.contains(M)&&!g.contains(T)},[o,g]),R=ie(E),j=ie($),z=n.useMemo(()=>({buttonId:R,panelId:j,close:()=>h({type:1})}),[R,j,h]),N=ke(),I=N?.registerPopover,A=P(()=>{var c;return(c=N?.isFocusWithinPopoverGroup())!=null?c:w?.activeElement&&(o?.contains(w.activeElement)||g?.contains(w.activeElement))});n.useEffect(()=>I?.(z),[I,z]);let[F,U]=Be(),D=Se(o),O=rt({mainTreeNode:D,portals:F,defaultContainers:[o,g]});nt(w?.defaultView,"focus",c=>{var r,v,d,M,T,C;c.target!==window&&c.target instanceof HTMLElement&&S===0&&(A()||o&&g&&(O.contains(c.target)||(v=(r=k.current)==null?void 0:r.contains)!=null&&v.call(r,c.target)||(M=(d=y.current)==null?void 0:d.contains)!=null&&M.call(d,c.target)||(C=(T=i.current)==null?void 0:T.contains)!=null&&C.call(T,c.target)||h({type:1})))},!0),Re(S===0,O.resolveContainers,(c,r)=>{h({type:1}),Je(r,Qe.Loose)||(c.preventDefault(),o?.focus())});let L=P(c=>{h({type:1});let r=c?c instanceof HTMLElement?c:"current"in c&&c.current instanceof HTMLElement?c.current:o:o;r?.focus()}),q=n.useMemo(()=>({close:L,isPortalled:B}),[L,B]),J=n.useMemo(()=>({open:S===0,close:L}),[S,L]),Q={ref:m},te=ee();return b.createElement(we,{node:D},b.createElement(je,null,b.createElement(se.Provider,{value:null},b.createElement(fe.Provider,{value:a},b.createElement(ue.Provider,{value:q},b.createElement(tt,{value:L},b.createElement(Ne,{value:G(S,{0:X.Open,1:X.Closed})},b.createElement(U,null,te({ourProps:Q,theirProps:p,slot:J,defaultTag:it,name:"Popover"})))))))))}let dt="button";function pt(e,t){let u=n.useId(),{id:s=`headlessui-popover-button-${u}`,disabled:p=!1,autoFocus:f=!1,...m}=e,[l,a]=le("Popover.Button"),{isPortalled:S}=ve("Popover.Button"),o=n.useRef(null),E=`headlessui-focus-sentinel-${n.useId()}`,g=ke(),$=g?.closeOthers,k=ut()!==null;n.useEffect(()=>{if(!k)return a({type:3,buttonId:s}),()=>{a({type:3,buttonId:null})}},[k,s,a]);let[y]=n.useState(()=>Symbol()),i=Y(o,t,Oe(),P(r=>{if(!k){if(r)l.buttons.current.push(y);else{let v=l.buttons.current.indexOf(y);v!==-1&&l.buttons.current.splice(v,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),r&&a({type:2,button:r})}})),h=Y(o,t),w=ae(o),B=P(r=>{var v,d,M;if(k){if(l.popoverState===1)return;switch(r.key){case V.Space:case V.Enter:r.preventDefault(),(d=(v=r.target).click)==null||d.call(v),a({type:1}),(M=l.button)==null||M.focus();break}}else switch(r.key){case V.Space:case V.Enter:r.preventDefault(),r.stopPropagation(),l.popoverState===1&&$?.(l.buttonId),a({type:0});break;case V.Escape:if(l.popoverState!==0)return $?.(l.buttonId);if(!o.current||w!=null&&w.activeElement&&!o.current.contains(w.activeElement))return;r.preventDefault(),r.stopPropagation(),a({type:1});break}}),R=P(r=>{k||r.key===V.Space&&r.preventDefault()}),j=P(r=>{var v,d;Ee(r.currentTarget)||p||(k?(a({type:1}),(v=l.button)==null||v.focus()):(r.preventDefault(),r.stopPropagation(),l.popoverState===1&&$?.(l.buttonId),a({type:0}),(d=l.button)==null||d.focus()))}),z=P(r=>{r.preventDefault(),r.stopPropagation()}),{isFocusVisible:N,focusProps:I}=Le({autoFocus:f}),{isHovered:A,hoverProps:F}=He({isDisabled:p}),{pressed:U,pressProps:D}=Ze({disabled:p}),O=l.popoverState===0,L=n.useMemo(()=>({open:O,active:U||O,disabled:p,hover:A,focus:N,autofocus:f}),[O,A,N,U,p,f]),q=_e(e,l.button),J=k?ce({ref:h,type:q,onKeyDown:B,onClick:j,disabled:p||void 0,autoFocus:f},I,F,D):ce({ref:i,id:l.buttonId,type:q,"aria-expanded":l.popoverState===0,"aria-controls":l.panel?l.panelId:void 0,disabled:p||void 0,autoFocus:f,onKeyDown:B,onKeyUp:R,onClick:j,onMouseDown:z},I,F,D),Q=$e(),te=P(()=>{let r=l.panel;if(!r)return;function v(){G(Q.current,{[Z.Forwards]:()=>K(r,_.First),[Z.Backwards]:()=>K(r,_.Last)})===de.Error&&K(pe().filter(d=>d.dataset.headlessuiFocusGuard!=="true"),G(Q.current,{[Z.Forwards]:_.Next,[Z.Backwards]:_.Previous}),{relativeTo:l.button})}v()}),c=ee();return b.createElement(b.Fragment,null,c({ourProps:J,theirProps:m,slot:L,defaultTag:dt,name:"Popover.Button"}),O&&!k&&S&&b.createElement(oe,{id:E,ref:l.afterButtonSentinel,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:te}))}let ft="div",vt=re.RenderStrategy|re.Static;function Ce(e,t){let u=n.useId(),{id:s=`headlessui-popover-backdrop-${u}`,transition:p=!1,...f}=e,[{popoverState:m},l]=le("Popover.Backdrop"),[a,S]=n.useState(null),o=Y(t,S),E=ge(),[g,$]=xe(p,a,E!==null?(E&X.Open)===X.Open:m===0),k=P(h=>{if(Ee(h.currentTarget))return h.preventDefault();l({type:1})}),y=n.useMemo(()=>({open:m===0}),[m]),i={ref:o,id:s,"aria-hidden":!0,onClick:k,...Pe($)};return ee()({ourProps:i,theirProps:f,slot:y,defaultTag:ft,features:vt,visible:g,name:"Popover.Backdrop"})}let mt="div",ht=re.RenderStrategy|re.Static;function bt(e,t){let u=n.useId(),{id:s=`headlessui-popover-panel-${u}`,focus:p=!1,anchor:f,portal:m=!1,modal:l=!1,transition:a=!1,...S}=e,[o,E]=le("Popover.Panel"),{close:g,isPortalled:$}=ve("Popover.Panel"),k=`headlessui-focus-sentinel-before-${u}`,y=`headlessui-focus-sentinel-after-${u}`,i=n.useRef(null),h=Ae(f),[w,B]=De(h),R=Ve();h&&(m=!0);let[j,z]=n.useState(null),N=Y(i,t,h?w:null,P(r=>E({type:4,panel:r})),z),I=ae(i);Ke(()=>(E({type:5,panelId:s}),()=>{E({type:5,panelId:null})}),[s,E]);let A=ge(),[F,U]=xe(a,j,A!==null?(A&X.Open)===X.Open:o.popoverState===0);Ge(F,o.button,()=>{E({type:1})});let D=o.__demoMode?!1:l&&F;We(D,I);let O=P(r=>{var v;switch(r.key){case V.Escape:if(o.popoverState!==0||!i.current||I!=null&&I.activeElement&&!i.current.contains(I.activeElement))return;r.preventDefault(),r.stopPropagation(),E({type:1}),(v=o.button)==null||v.focus();break}});n.useEffect(()=>{var r;e.static||o.popoverState===1&&((r=e.unmount)==null||r)&&E({type:4,panel:null})},[o.popoverState,e.unmount,e.static,E]),n.useEffect(()=>{if(o.__demoMode||!p||o.popoverState!==0||!i.current)return;let r=I?.activeElement;i.current.contains(r)||K(i.current,_.First)},[o.__demoMode,p,i.current,o.popoverState]);let L=n.useMemo(()=>({open:o.popoverState===0,close:g}),[o.popoverState,g]),q=ce(h?R():{},{ref:N,id:s,onKeyDown:O,onBlur:p&&o.popoverState===0?r=>{var v,d,M,T,C;let H=r.relatedTarget;H&&i.current&&((v=i.current)!=null&&v.contains(H)||(E({type:1}),((M=(d=o.beforePanelSentinel.current)==null?void 0:d.contains)!=null&&M.call(d,H)||(C=(T=o.afterPanelSentinel.current)==null?void 0:T.contains)!=null&&C.call(T,H))&&H.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...S.style,...B,"--button-width":ze(o.button,!0).width},...Pe(U)}),J=$e(),Q=P(()=>{let r=i.current;if(!r)return;function v(){G(J.current,{[Z.Forwards]:()=>{var d;K(r,_.First)===de.Error&&((d=o.afterPanelSentinel.current)==null||d.focus())},[Z.Backwards]:()=>{var d;(d=o.button)==null||d.focus({preventScroll:!0})}})}v()}),te=P(()=>{let r=i.current;if(!r)return;function v(){G(J.current,{[Z.Forwards]:()=>{if(!o.button)return;let d=pe(),M=d.indexOf(o.button),T=d.slice(0,M+1),C=[...d.slice(M+1),...T];for(let H of C.slice())if(H.dataset.headlessuiFocusGuard==="true"||j!=null&&j.contains(H)){let he=C.indexOf(H);he!==-1&&C.splice(he,1)}K(C,_.First,{sorted:!1})},[Z.Backwards]:()=>{var d;K(r,_.Previous)===de.Error&&((d=o.button)==null||d.focus())}})}v()}),c=ee();return b.createElement(Ue,null,b.createElement(se.Provider,{value:s},b.createElement(ue.Provider,{value:{close:g,isPortalled:$}},b.createElement(qe,{enabled:m?e.static||F:!1},F&&$&&b.createElement(oe,{id:k,ref:o.beforePanelSentinel,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:Q}),c({ourProps:q,theirProps:S,slot:L,defaultTag:mt,features:ht,visible:F,name:"Popover.Panel"}),F&&$&&b.createElement(oe,{id:y,ref:o.afterPanelSentinel,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:te})))))}let gt="div";function xt(e,t){let u=n.useRef(null),s=Y(u,t),[p,f]=n.useState([]),m=P(y=>{f(i=>{let h=i.indexOf(y);if(h!==-1){let w=i.slice();return w.splice(h,1),w}return i})}),l=P(y=>(f(i=>[...i,y]),()=>m(y))),a=P(()=>{var y;let i=be(u);if(!i)return!1;let h=i.activeElement;return(y=u.current)!=null&&y.contains(h)?!0:p.some(w=>{var B,R;return((B=i.getElementById(w.buttonId.current))==null?void 0:B.contains(h))||((R=i.getElementById(w.panelId.current))==null?void 0:R.contains(h))})}),S=P(y=>{for(let i of p)i.buttonId.current!==y&&i.close()}),o=n.useMemo(()=>({registerPopover:l,unregisterPopover:m,isFocusWithinPopoverGroup:a,closeOthers:S}),[l,m,a,S]),E=n.useMemo(()=>({}),[]),g=e,$={ref:s},k=ee();return b.createElement(we,null,b.createElement(me.Provider,{value:o},k({ourProps:$,theirProps:g,slot:E,defaultTag:gt,name:"Popover.Group"})))}let Pt=W(ct),Ie=W(pt),Et=W(Ce),yt=W(Ce),Me=W(bt),wt=W(xt),St=Object.assign(Pt,{Button:Ie,Backdrop:yt,Overlay:Et,Panel:Me,Group:wt});function $t({title:e,titleId:t,...u},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},u),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const kt=n.forwardRef($t);function Ct({title:e,titleId:t,...u},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},u),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"}))}const It=n.forwardRef(Ct);function Mt({title:e,titleId:t,...u},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},u),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"}))}const Ft=n.forwardRef(Mt);function Tt({title:e,titleId:t,...u},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},u),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3 3 8.735 8.735m0 0a.374.374 0 1 1 .53.53m-.53-.53.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 0 1 0 5.304m2.121-7.425a6.75 6.75 0 0 1 0 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 0 1-1.06-2.122m-1.061 4.243a6.75 6.75 0 0 1-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12Z"}))}const Bt=n.forwardRef(Tt),Rt=[{name:"Panel semanal",description:"Vista semanal de tu negocio",href:"/dashboard",icon:It},{name:"Configurador de clases",description:"Configura las clases semanales disponibles para tus clientes",href:"/slots/configurator",icon:Ft},{name:"Cerrar sesión",description:"Edit, manage and create newly informed decisions",href:"/auth/logout",icon:Bt,form:!0}];function jt(e){return e.item?e.item.form?x.jsx("div",{children:x.jsxs("form",{action:e.item.href,method:"POST",children:[x.jsxs("button",{className:"font-semibold text-gray-900",children:[e.item.name,x.jsx("span",{className:"absolute inset-0"})]}),x.jsx("p",{className:"mt-1 text-gray-600",children:e.item.description})]})}):x.jsxs("div",{children:[x.jsxs("a",{href:e.item.href,className:"font-semibold text-gray-900",children:[e.item.name,x.jsx("span",{className:"absolute inset-0"})]}),x.jsx("p",{className:"mt-1 text-gray-600",children:e.item.description})]}):null}function Lt(){return x.jsxs(St,{className:"relative",children:[x.jsxs(Ie,{className:"inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900",children:[x.jsx("span",{children:"MOTION-LEON"}),x.jsx(kt,{"aria-hidden":"true",className:"size-5"})]}),x.jsx(Me,{transition:!0,className:"absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in",children:x.jsx("div",{className:"w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl",children:x.jsx("div",{className:"grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2",children:Rt.map(e=>x.jsxs("div",{className:"group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50",children:[x.jsx("div",{className:"mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white",children:x.jsx(e.icon,{"aria-hidden":"true",className:"size-6 text-gray-600 group-hover:text-indigo-600"})}),x.jsx(jt,{item:e})]},e.name))})})})]})}export{Lt as default};