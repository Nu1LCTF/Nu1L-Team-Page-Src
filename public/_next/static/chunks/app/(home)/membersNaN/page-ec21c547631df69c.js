(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{4283:function(e,t,r){Promise.resolve().then(r.bind(r,677))},677:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7437),i=r(6597),s=r(2298),a=r(6281),l=r(8154),o=r(5831),u=r(1141),c=r(2265);function d(){let[e,t]=(0,c.useState)(!1),r=()=>{t(!e)};return(0,n.jsxs)("div",{className:"container pt-4 mt-[var(--header-height)] relative",children:[(0,n.jsx)("img",{src:"/images/bg/members-bg.png",className:"absolute -top-[var(--header-height)] z-[-1] opacity-60",alt:""}),(0,n.jsx)(i.Z,{title:o.$s.memberNaN,bgImage:"/images/bg/member-banner.png",actions:(0,n.jsxs)(s.Z,{onClick:r,children:[(0,n.jsx)("img",{src:"/images/icon-add.svg",alt:"add-icon",className:"mr-[4px]"}),"加入我们"]}),className:"mb-[74px]"}),(0,n.jsx)("div",{className:"mb-[74px] text-center",children:(0,n.jsx)("h1",{className:"text-4xl",children:"所有队员"})}),(0,n.jsx)("ul",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10 sm:mb-[60px]",children:u.p.map(e=>(0,n.jsx)(l.Z,{member:e},e.nickname))}),(0,n.jsx)(a.Z,{show:e,onCancel:r,onConfirm:r})]})}},6597:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7437);function i(e){let{title:t,actions:r,bgImage:i="/images/bg/banner.png",className:s,style:a}=e;return(0,n.jsxs)("div",{style:{backgroundImage:"url(".concat(i,")")},className:"bg-cover px-10 py-5 sm:pl-[87px] sm:h-[320px] rounded-xl flex flex-col gap-7 justify-center "+s,children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"mb-[11px] flex",children:[(0,n.jsx)("p",{className:"h-[4px] w-[40px] bg-[#47BFF6]"}),(0,n.jsx)("p",{className:"h-[4px] w-[40px] bg-[#FFC293]"})]}),(0,n.jsx)("h2",{className:"text-[48px] mb- font-bold",children:t.zh}),(0,n.jsx)("p",{className:"text-[24px] text-[#D5EDF8] opacity-40",children:t.en})]}),r]})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,s={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!o.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:u,ref:c,props:s,_owner:l.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},7437:function(e,t,r){"use strict";e.exports=r(622)},7856:function(e,t,r){"use strict";r.d(t,{u:function(){return K}});var n,i,s,a,l=r(2265),o=r.t(l,2);function u(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}function c(e,t,...r){if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let n=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,c),n}var d=((n=d||{})[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n),f=((i=f||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function m({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:i,visible:s=!0,name:a}){let l=h(t,e);if(s)return p(l,r,n,a);let o=null!=i?i:0;if(2&o){let{static:e=!1,...t}=l;if(e)return p(t,r,n,a)}if(1&o){let{unmount:e=!0,...t}=l;return c(e?0:1,{0:()=>null,1:()=>p({...t,hidden:!0,style:{display:"none"}},r,n,a)})}return p(l,r,n,a)}function p(e,t={},r,n){let{as:i=r,children:s,refName:a="ref",...o}=b(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},d="function"==typeof s?s(t):s;"className"in o&&o.className&&"function"==typeof o.className&&(o.className=o.className(t));let f={};if(t){let e=!1,r=[];for(let[n,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&r.push(n);e&&(f["data-headlessui-state"]=r.join(" "))}if(i===l.Fragment&&Object.keys(g(o)).length>0){if(!(0,l.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>u(null==e?void 0:e.className(...t),o.className):u(null==e?void 0:e.className,o.className),r=t?{className:t}:{};return(0,l.cloneElement)(d,Object.assign({},h(d.props,g(b(o,["ref"]))),f,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let r of e)null!=r&&("function"==typeof r?r(t):r.current=t)}}}(d.ref,c.ref),r))}return(0,l.createElement)(i,Object.assign({},b(o,["ref"]),i!==l.Fragment&&c,i!==l.Fragment&&f),d)}function h(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},r={};for(let n of e)for(let e in n)e.startsWith("on")&&"function"==typeof n[e]?(null!=r[e]||(r[e]=[]),r[e].push(n[e])):t[e]=n[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(e=>[e,void 0])));for(let e in r)Object.assign(t,{[e](t,...n){for(let i of r[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;i(t,...n)}}});return t}function v(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function g(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function b(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}let y=(0,l.createContext)(null);y.displayName="OpenClosedContext";var x=((s=x||{})[s.Open=1]="Open",s[s.Closed=2]="Closed",s[s.Closing=4]="Closing",s[s.Opening=8]="Opening",s);function E(){return(0,l.useContext)(y)}function N({value:e,children:t}){return l.createElement(y.Provider,{value:e},t)}var j=Object.defineProperty,F=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t,r)=>(F(e,"symbol"!=typeof t?t+"":t,r),r);let O=new class{constructor(){C(this,"current",this.detect()),C(this,"handoffState","pending"),C(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},S=(e,t)=>{O.isServer?(0,l.useEffect)(e,t):(0,l.useLayoutEffect)(e,t)};function w(){let e=(0,l.useRef)(!1);return S(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function T(e){let t=(0,l.useRef)(e);return S(()=>{t.current=e},[e]),t}function k(){let e;let t=(e="undefined"==typeof document,(0,o.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[r,n]=l.useState(O.isHandoffComplete);return r&&!1===O.isHandoffComplete&&n(!1),l.useEffect(()=>{!0!==r&&n(!0)},[r]),l.useEffect(()=>O.handoff(),[]),!t&&r}let P=function(e){let t=T(e);return l.useCallback((...e)=>t.current(...e),[t])},R=Symbol();function _(...e){let t=(0,l.useRef)(e);(0,l.useEffect)(()=>{t.current=e},[e]);let r=P(e=>{for(let r of t.current)null!=r&&("function"==typeof r?r(e):r.current=e)});return e.every(e=>null==e||(null==e?void 0:e[R]))?void 0:r}function L(){let e=[],t={addEventListener:(e,r,n,i)=>(e.addEventListener(r,n,i),t.add(()=>e.removeEventListener(r,n,i))),requestAnimationFrame(...e){let r=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(r))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let r=setTimeout(...e);return t.add(()=>clearTimeout(r))},microTask(...e){var r;let n={current:!0};return r=()=>{n.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(r):Promise.resolve().then(r).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{n.current=!1})},style(e,t,r){let n=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:r}),this.add(()=>{Object.assign(e.style,{[t]:n})})},group(e){let t=L();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let t of e.splice(r,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function A(e,...t){e&&t.length>0&&e.classList.add(...t)}function H(e,...t){e&&t.length>0&&e.classList.remove(...t)}function I(){let[e]=(0,l.useState)(L);return(0,l.useEffect)(()=>()=>e.dispose(),[e]),e}function $(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let D=(0,l.createContext)(null);D.displayName="TransitionContext";var U=((a=U||{}).Visible="visible",a.Hidden="hidden",a);let q=(0,l.createContext)(null);function M(e){return"children"in e?M(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function B(e,t){let r=T(e),n=(0,l.useRef)([]),i=w(),s=I(),a=P((e,t=f.Hidden)=>{let a=n.current.findIndex(({el:t})=>t===e);-1!==a&&(c(t,{[f.Unmount](){n.current.splice(a,1)},[f.Hidden](){n.current[a].state="hidden"}}),s.microTask(()=>{var e;!M(n)&&i.current&&(null==(e=r.current)||e.call(r))}))}),o=P(e=>{let t=n.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):n.current.push({el:e,state:"visible"}),()=>a(e,f.Unmount)}),u=(0,l.useRef)([]),d=(0,l.useRef)(Promise.resolve()),m=(0,l.useRef)({enter:[],leave:[],idle:[]}),p=P((e,r,n)=>{u.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter(([t])=>t!==e)),null==t||t.chains.current[r].push([e,new Promise(e=>{u.current.push(e)})]),null==t||t.chains.current[r].push([e,new Promise(e=>{Promise.all(m.current[r].map(([e,t])=>t)).then(()=>e())})]),"enter"===r?d.current=d.current.then(()=>null==t?void 0:t.wait.current).then(()=>n(r)):n(r)}),h=P((e,t,r)=>{Promise.all(m.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=u.current.shift())||e()}).then(()=>r(t))});return(0,l.useMemo)(()=>({children:n,register:o,unregister:a,onStart:p,onStop:h,wait:d,chains:m}),[o,a,n,p,h,m,d])}function Z(){}q.displayName="NestingContext";let V=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function z(e){var t;let r={};for(let n of V)r[n]=null!=(t=e[n])?t:Z;return r}let W=d.RenderStrategy,Y=v(function(e,t){let{show:r,appear:n=!1,unmount:i=!0,...s}=e,a=(0,l.useRef)(null),o=_(a,t);k();let u=E();if(void 0===r&&null!==u&&(r=(u&x.Open)===x.Open),![!0,!1].includes(r))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=(0,l.useState)(r?"visible":"hidden"),f=B(()=>{d("hidden")}),[p,h]=(0,l.useState)(!0),v=(0,l.useRef)([r]);S(()=>{!1!==p&&v.current[v.current.length-1]!==r&&(v.current.push(r),h(!1))},[v,r]);let g=(0,l.useMemo)(()=>({show:r,appear:n,initial:p}),[r,n,p]);(0,l.useEffect)(()=>{if(r)d("visible");else if(M(f)){let e=a.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&d("hidden")}else d("hidden")},[r,f]);let b={unmount:i},y=P(()=>{var t;p&&h(!1),null==(t=e.beforeEnter)||t.call(e)}),N=P(()=>{var t;p&&h(!1),null==(t=e.beforeLeave)||t.call(e)});return l.createElement(q.Provider,{value:f},l.createElement(D.Provider,{value:g},m({ourProps:{...b,as:l.Fragment,children:l.createElement(G,{ref:o,...b,...s,beforeEnter:y,beforeLeave:N})},theirProps:{},defaultTag:l.Fragment,features:W,visible:"visible"===c,name:"Transition"})))}),G=v(function(e,t){var r,n,i;let s;let{beforeEnter:a,afterEnter:o,beforeLeave:d,afterLeave:p,enter:h,enterFrom:v,enterTo:g,entered:b,leave:y,leaveFrom:E,leaveTo:j,...F}=e,C=(0,l.useRef)(null),O=_(C,t),R=null==(r=F.unmount)||r?f.Unmount:f.Hidden,{show:U,appear:Z,initial:V}=function(){let e=(0,l.useContext)(D);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Y,G]=(0,l.useState)(U?"visible":"hidden"),J=function(){let e=(0,l.useContext)(q);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:K,unregister:Q}=J;(0,l.useEffect)(()=>K(C),[K,C]),(0,l.useEffect)(()=>{if(R===f.Hidden&&C.current){if(U&&"visible"!==Y){G("visible");return}return c(Y,{hidden:()=>Q(C),visible:()=>K(C)})}},[Y,C,K,Q,U,R]);let X=T({base:$(F.className),enter:$(h),enterFrom:$(v),enterTo:$(g),entered:$(b),leave:$(y),leaveFrom:$(E),leaveTo:$(j)}),ee=(i={beforeEnter:a,afterEnter:o,beforeLeave:d,afterLeave:p},s=(0,l.useRef)(z(i)),(0,l.useEffect)(()=>{s.current=z(i)},[i]),s),et=k();(0,l.useEffect)(()=>{if(et&&"visible"===Y&&null===C.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[C,Y,et]);let er=Z&&U&&V,en=et&&(!V||Z)?U?"enter":"leave":"idle",ei=function(e=0){let[t,r]=(0,l.useState)(e),n=w(),i=(0,l.useCallback)(e=>{n.current&&r(t=>t|e)},[t,n]),s=(0,l.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:i,hasFlag:s,removeFlag:(0,l.useCallback)(e=>{n.current&&r(t=>t&~e)},[r,n]),toggleFlag:(0,l.useCallback)(e=>{n.current&&r(t=>t^e)},[r])}}(0),es=P(e=>c(e,{enter:()=>{ei.addFlag(x.Opening),ee.current.beforeEnter()},leave:()=>{ei.addFlag(x.Closing),ee.current.beforeLeave()},idle:()=>{}})),ea=P(e=>c(e,{enter:()=>{ei.removeFlag(x.Opening),ee.current.afterEnter()},leave:()=>{ei.removeFlag(x.Closing),ee.current.afterLeave()},idle:()=>{}})),el=B(()=>{G("hidden"),Q(C)},J);!function({immediate:e,container:t,direction:r,classes:n,onStart:i,onStop:s}){let a=w(),l=I(),o=T(r);S(()=>{e&&(o.current="enter")},[e]),S(()=>{let e=L();l.add(e.dispose);let r=t.current;if(r&&"idle"!==o.current&&a.current){var u,d,f;let t,a,l,m,p,h,v;return e.dispose(),i.current(o.current),e.add((u=n.current,d="enter"===o.current,f=()=>{e.dispose(),s.current(o.current)},a=d?"enter":"leave",l=L(),m=void 0!==f?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,f(...e)}):()=>{},"enter"===a&&(r.removeAttribute("hidden"),r.style.display=""),p=c(a,{enter:()=>u.enter,leave:()=>u.leave}),h=c(a,{enter:()=>u.enterTo,leave:()=>u.leaveTo}),v=c(a,{enter:()=>u.enterFrom,leave:()=>u.leaveFrom}),H(r,...u.base,...u.enter,...u.enterTo,...u.enterFrom,...u.leave,...u.leaveFrom,...u.leaveTo,...u.entered),A(r,...u.base,...p,...v),l.nextFrame(()=>{H(r,...u.base,...p,...v),A(r,...u.base,...p,...h),function(e,t){let r=L();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:i}=getComputedStyle(e),[s,a]=[n,i].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=s+a;if(0!==l){r.group(r=>{r.setTimeout(()=>{t(),r.dispose()},l),r.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&r.dispose()})});let n=r.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),n())})}else t();r.add(()=>t()),r.dispose}(r,()=>(H(r,...u.base,...p),A(r,...u.base,...u.entered),m()))}),l.dispose)),e.dispose}},[r])}({immediate:er,container:C,classes:X,direction:en,onStart:T(e=>{el.onStart(C,e,es)}),onStop:T(e=>{el.onStop(C,e,ea),"leave"!==e||M(el)||(G("hidden"),Q(C))})});let eo=F;return er?eo={...eo,className:u(F.className,...X.current.enter,...X.current.enterFrom)}:(eo.className=u(F.className,null==(n=C.current)?void 0:n.className),""===eo.className&&delete eo.className),l.createElement(q.Provider,{value:el},l.createElement(N,{value:c(Y,{visible:x.Open,hidden:x.Closed})|ei.flags},m({ourProps:{ref:O},theirProps:eo,defaultTag:"div",features:W,visible:"visible"===Y,name:"Transition.Child"})))}),J=v(function(e,t){let r=null!==(0,l.useContext)(D),n=null!==E();return l.createElement(l.Fragment,null,!r&&n?l.createElement(Y,{ref:t,...e}):l.createElement(G,{ref:t,...e}))}),K=Object.assign(Y,{Child:J,Root:Y})}},function(e){e.O(0,[181,971,596,744],function(){return e(e.s=4283)}),_N_E=e.O()}]);