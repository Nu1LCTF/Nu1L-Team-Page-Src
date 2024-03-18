"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99],{2389:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7437);function l(e){let{title:t,actions:n,bgImage:l="/images/mobile/members-top-bg.png",className:s,style:i}=e;return(0,r.jsx)("div",{className:"mb-[25px] "+s,style:i,children:(0,r.jsx)("div",{className:"h-[428px] bg-cover relative",style:{backgroundImage:"url(".concat(l,")")},children:(0,r.jsxs)("div",{className:"absolute bottom-[55px] left-[45px] flex items-end",children:[(0,r.jsxs)("div",{className:"mr-[32px]",children:[(0,r.jsxs)("div",{className:"mb-[11px] flex",children:[(0,r.jsx)("p",{className:"h-[4px] w-[40px] bg-[#47BFF6]"}),(0,r.jsx)("p",{className:"h-[4px] w-[40px] bg-[#FFC293]"})]}),(0,r.jsx)("h2",{className:"text-[48px] mb- font-bold",children:t.zh}),(0,r.jsx)("p",{className:"text-[24px] text-[#D5EDF8] opacity-40",children:t.en})]}),(0,r.jsx)("div",{className:"pb-[7px]",children:n})]})})})}},608:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7437),l=n(2265),s=n(7856),i=n(3583);function a(e){let{title:t,children:n,onCancel:a,onConfirm:o,confirmText:u="确认",show:c=!1}=e,d=(0,l.useRef)(null);return(0,i.Z)(c),(0,l.useLayoutEffect)(()=>{if(c){var e;null===(e=d.current)||void 0===e||e.classList.remove("hidden")}else setTimeout(()=>{var e;null===(e=d.current)||void 0===e||e.classList.add("hidden")},300)},[c]),(0,r.jsx)("div",{ref:d,onClick:a,className:"fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none pointer-events-all bg-[#00000080] text-[#333] text-[32px]",children:(0,r.jsx)(s.u,{show:c,enter:"transition-all duration-200",enterFrom:"opacity-0 translate-y-[-80%]",enterTo:"opacity-100 translate-y-[-50%]",leave:"transition-opacity duration-200 translate-y-[-50%]",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{className:"relative w-auto mt-[50vh] flex justify-center",onClick:e=>e.stopPropagation(),children:(0,r.jsxs)("div",{className:"w-[640px] min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex flex-col rounded-[6px] border-none bg-white bg-clip-padding text-current shadow-lg outline-none",children:[(0,r.jsxs)("div",{className:"flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 px-[27px] py-[24px]",children:[(0,r.jsx)("h5",{className:"text-[32px] font-bold leading-normal text-neutral-800",children:t}),(0,r.jsx)("button",{type:"button",className:"box-content rounded-none border-none ","aria-label":"Close",onClick:a,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-[50px] w-[50px]",children:(0,r.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,r.jsx)("div",{className:"relative flex-auto px-[39]",children:n}),(0,r.jsx)("div",{className:"text-center mb-[59px]",children:o&&(0,r.jsx)("button",{onClick:o,className:"bg-[#007BFF] text-[36px] w-[400px] h-[98px] text-white rounded-[49px]",children:u})})]})})})})}function o(e){return(0,r.jsx)(a,{...e,title:"加入我们",confirmText:"发送邮件",onConfirm:()=>{let t=document.createElement("a");t.href="mailto:root@nu1l.com",t.click(),e.onConfirm&&e.onConfirm()},children:(0,r.jsxs)("div",{className:"px-[40px]",children:[(0,r.jsx)("p",{className:"text-[40px] mt-[30px]",children:"告诉我们更多关于你自己的信息"}),(0,r.jsx)("p",{className:"text-[#8C8C8C] text-[24px]",children:"将以下数据发送到我们的电子邮件 “root@nu1l.com”"}),(0,r.jsx)("div",{className:"mt-[54px] mb-[35px]",children:(0,r.jsxs)("ul",{className:"flex flex-col gap-[27px]",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"font-semibold",children:"1、您的ID "}),(0,r.jsx)("span",{className:"text-[#8C8C8C] ml-[18px]",children:"ID号，如IDentity"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"font-semibold",children:"2、技能 "}),(0,r.jsx)("span",{className:"text-[#8C8C8C] ml-[18px]",children:"Pwn or ALL"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"font-semibold",children:"3、简介 "}),(0,r.jsx)("span",{className:"text-[#8C8C8C] ml-[18px]",children:"从哪来"})]})]})}),(0,r.jsx)("p",{className:"mb-[84px] font-semibold",children:"PS 请尽可能详细地附上您的简历"})]})})}},3204:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7437);function l(e){let{member:t,className:n}=e;return(0,r.jsx)("li",{className:"list-none",children:(0,r.jsxs)("a",{href:t.site,target:"_blank",className:"px-[55px] py-[45px] mb-[32px] flex flex-col items-center rounded-[4px] "+n+" block flex-1 bg-[#0A163B]",children:[(0,r.jsxs)("div",{className:"text-center w-[440px] flex flex-col gap-[48px] h-full",children:[(0,r.jsx)("img",{className:"w-[440px] h-[440px] rounded-[50%]","data-src":t.avatar,alt:t.nickname}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-[36px] text-[#47BFF6]",children:t.nickname}),(0,r.jsx)("p",{className:"overflow-hidden whitespace-nowrap text-ellipsis text-[32px] mt-[10px]",title:t.description,children:t.description})]})]}),(0,r.jsxs)("div",{className:"flex justify-between items-center w-full mt-[46px]",children:[(0,r.jsxs)("span",{className:"text-[#62728C] text-[24px] flex gap-[6px] items-center",children:[(0,r.jsx)("img",{src:"/images/icon-tag.svg",className:"w-[28px] h-[28px]",alt:"tag"}),t.tag]}),t.site&&(0,r.jsx)("a",{href:t.site,target:"_blank",className:"w-[66px] h-[66px]",children:(0,r.jsx)("img",{src:"/images/icon-site.svg",alt:"site",className:"w-full"})})]})]})},t.nickname)}},3583:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2265);function l(e){(0,r.useLayoutEffect)(()=>{e?"hidden"!==document.body.style.overflow&&(document.body.style.overflow="hidden"):"hidden"===document.body.style.overflow&&(document.body.style.overflow="auto")},[e])}},622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:l,type:e,key:u,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},7437:function(e,t,n){e.exports=n(622)},7856:function(e,t,n){n.d(t,{u:function(){return K}});var r,l,s,i,a=n(2265),o=n.t(a,2);function u(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}function c(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,c),r}var d=((r=d||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),f=((l=f||{})[l.Unmount=0]="Unmount",l[l.Hidden=1]="Hidden",l);function m({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:s=!0,name:i}){let a=h(t,e);if(s)return p(a,n,r,i);let o=null!=l?l:0;if(2&o){let{static:e=!1,...t}=a;if(e)return p(t,n,r,i)}if(1&o){let{unmount:e=!0,...t}=a;return c(e?0:1,{0:()=>null,1:()=>p({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return p(a,n,r,i)}function p(e,t={},n,r){let{as:l=n,children:s,refName:i="ref",...o}=b(e,["unmount","static"]),c=void 0!==e.ref?{[i]:e.ref}:{},d="function"==typeof s?s(t):s;"className"in o&&o.className&&"function"==typeof o.className&&(o.className=o.className(t));let f={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(f["data-headlessui-state"]=n.join(" "))}if(l===a.Fragment&&Object.keys(v(o)).length>0){if(!(0,a.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>u(null==e?void 0:e.className(...t),o.className):u(null==e?void 0:e.className,o.className),n=t?{className:t}:{};return(0,a.cloneElement)(d,Object.assign({},h(d.props,v(b(o,["ref"]))),f,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),n))}return(0,a.createElement)(l,Object.assign({},b(o,["ref"]),l!==a.Fragment&&c,l!==a.Fragment&&f),d)}function h(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let l of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;l(t,...r)}}});return t}function x(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function b(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}let g=(0,a.createContext)(null);g.displayName="OpenClosedContext";var y=((s=y||{})[s.Open=1]="Open",s[s.Closed=2]="Closed",s[s.Closing=4]="Closing",s[s.Opening=8]="Opening",s);function j(){return(0,a.useContext)(g)}function N({value:e,children:t}){return a.createElement(g.Provider,{value:e},t)}var w=Object.defineProperty,E=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t,n)=>(E(e,"symbol"!=typeof t?t+"":t,n),n);let F=new class{constructor(){C(this,"current",this.detect()),C(this,"handoffState","pending"),C(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},T=(e,t)=>{F.isServer?(0,a.useEffect)(e,t):(0,a.useLayoutEffect)(e,t)};function k(){let e=(0,a.useRef)(!1);return T(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function S(e){let t=(0,a.useRef)(e);return T(()=>{t.current=e},[e]),t}function O(){let e;let t=(e="undefined"==typeof document,(0,o.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=a.useState(F.isHandoffComplete);return n&&!1===F.isHandoffComplete&&r(!1),a.useEffect(()=>{!0!==n&&r(!0)},[n]),a.useEffect(()=>F.handoff(),[]),!t&&n}let L=function(e){let t=S(e);return a.useCallback((...e)=>t.current(...e),[t])},P=Symbol();function R(...e){let t=(0,a.useRef)(e);(0,a.useEffect)(()=>{t.current=e},[e]);let n=L(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[P]))?void 0:n}function _(){let e=[],t={addEventListener:(e,n,r,l)=>(e.addEventListener(n,r,l),t.add(()=>e.removeEventListener(n,r,l))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){var n;let r={current:!0};return n=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{r.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=_();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function A(e,...t){e&&t.length>0&&e.classList.add(...t)}function I(e,...t){e&&t.length>0&&e.classList.remove(...t)}function D(){let[e]=(0,a.useState)(_);return(0,a.useEffect)(()=>()=>e.dispose(),[e]),e}function H(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let B=(0,a.createContext)(null);B.displayName="TransitionContext";var M=((i=M||{}).Visible="visible",i.Hidden="hidden",i);let $=(0,a.createContext)(null);function U(e){return"children"in e?U(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function q(e,t){let n=S(e),r=(0,a.useRef)([]),l=k(),s=D(),i=L((e,t=f.Hidden)=>{let i=r.current.findIndex(({el:t})=>t===e);-1!==i&&(c(t,{[f.Unmount](){r.current.splice(i,1)},[f.Hidden](){r.current[i].state="hidden"}}),s.microTask(()=>{var e;!U(r)&&l.current&&(null==(e=n.current)||e.call(n))}))}),o=L(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>i(e,f.Unmount)}),u=(0,a.useRef)([]),d=(0,a.useRef)(Promise.resolve()),m=(0,a.useRef)({enter:[],leave:[],idle:[]}),p=L((e,n,r)=>{u.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{u.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(m.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?d.current=d.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),h=L((e,t,n)=>{Promise.all(m.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=u.current.shift())||e()}).then(()=>n(t))});return(0,a.useMemo)(()=>({children:r,register:o,unregister:i,onStart:p,onStop:h,wait:d,chains:m}),[o,i,r,p,h,m,d])}function Z(){}$.displayName="NestingContext";let V=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function W(e){var t;let n={};for(let r of V)n[r]=null!=(t=e[r])?t:Z;return n}let z=d.RenderStrategy,Y=x(function(e,t){let{show:n,appear:r=!1,unmount:l=!0,...s}=e,i=(0,a.useRef)(null),o=R(i,t);O();let u=j();if(void 0===n&&null!==u&&(n=(u&y.Open)===y.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=(0,a.useState)(n?"visible":"hidden"),f=q(()=>{d("hidden")}),[p,h]=(0,a.useState)(!0),x=(0,a.useRef)([n]);T(()=>{!1!==p&&x.current[x.current.length-1]!==n&&(x.current.push(n),h(!1))},[x,n]);let v=(0,a.useMemo)(()=>({show:n,appear:r,initial:p}),[n,r,p]);(0,a.useEffect)(()=>{if(n)d("visible");else if(U(f)){let e=i.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&d("hidden")}else d("hidden")},[n,f]);let b={unmount:l},g=L(()=>{var t;p&&h(!1),null==(t=e.beforeEnter)||t.call(e)}),N=L(()=>{var t;p&&h(!1),null==(t=e.beforeLeave)||t.call(e)});return a.createElement($.Provider,{value:f},a.createElement(B.Provider,{value:v},m({ourProps:{...b,as:a.Fragment,children:a.createElement(G,{ref:o,...b,...s,beforeEnter:g,beforeLeave:N})},theirProps:{},defaultTag:a.Fragment,features:z,visible:"visible"===c,name:"Transition"})))}),G=x(function(e,t){var n,r,l;let s;let{beforeEnter:i,afterEnter:o,beforeLeave:d,afterLeave:p,enter:h,enterFrom:x,enterTo:v,entered:b,leave:g,leaveFrom:j,leaveTo:w,...E}=e,C=(0,a.useRef)(null),F=R(C,t),P=null==(n=E.unmount)||n?f.Unmount:f.Hidden,{show:M,appear:Z,initial:V}=function(){let e=(0,a.useContext)(B);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Y,G]=(0,a.useState)(M?"visible":"hidden"),J=function(){let e=(0,a.useContext)($);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:K,unregister:Q}=J;(0,a.useEffect)(()=>K(C),[K,C]),(0,a.useEffect)(()=>{if(P===f.Hidden&&C.current){if(M&&"visible"!==Y){G("visible");return}return c(Y,{hidden:()=>Q(C),visible:()=>K(C)})}},[Y,C,K,Q,M,P]);let X=S({base:H(E.className),enter:H(h),enterFrom:H(x),enterTo:H(v),entered:H(b),leave:H(g),leaveFrom:H(j),leaveTo:H(w)}),ee=(l={beforeEnter:i,afterEnter:o,beforeLeave:d,afterLeave:p},s=(0,a.useRef)(W(l)),(0,a.useEffect)(()=>{s.current=W(l)},[l]),s),et=O();(0,a.useEffect)(()=>{if(et&&"visible"===Y&&null===C.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[C,Y,et]);let en=Z&&M&&V,er=et&&(!V||Z)?M?"enter":"leave":"idle",el=function(e=0){let[t,n]=(0,a.useState)(e),r=k(),l=(0,a.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),s=(0,a.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:l,hasFlag:s,removeFlag:(0,a.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,a.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),es=L(e=>c(e,{enter:()=>{el.addFlag(y.Opening),ee.current.beforeEnter()},leave:()=>{el.addFlag(y.Closing),ee.current.beforeLeave()},idle:()=>{}})),ei=L(e=>c(e,{enter:()=>{el.removeFlag(y.Opening),ee.current.afterEnter()},leave:()=>{el.removeFlag(y.Closing),ee.current.afterLeave()},idle:()=>{}})),ea=q(()=>{G("hidden"),Q(C)},J);!function({immediate:e,container:t,direction:n,classes:r,onStart:l,onStop:s}){let i=k(),a=D(),o=S(n);T(()=>{e&&(o.current="enter")},[e]),T(()=>{let e=_();a.add(e.dispose);let n=t.current;if(n&&"idle"!==o.current&&i.current){var u,d,f;let t,i,a,m,p,h,x;return e.dispose(),l.current(o.current),e.add((u=r.current,d="enter"===o.current,f=()=>{e.dispose(),s.current(o.current)},i=d?"enter":"leave",a=_(),m=void 0!==f?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,f(...e)}):()=>{},"enter"===i&&(n.removeAttribute("hidden"),n.style.display=""),p=c(i,{enter:()=>u.enter,leave:()=>u.leave}),h=c(i,{enter:()=>u.enterTo,leave:()=>u.leaveTo}),x=c(i,{enter:()=>u.enterFrom,leave:()=>u.leaveFrom}),I(n,...u.base,...u.enter,...u.enterTo,...u.enterFrom,...u.leave,...u.leaveFrom,...u.leaveTo,...u.entered),A(n,...u.base,...p,...x),a.nextFrame(()=>{I(n,...u.base,...p,...x),A(n,...u.base,...p,...h),function(e,t){let n=_();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[s,i]=[r,l].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),a=s+i;if(0!==a){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},a),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(n,()=>(I(n,...u.base,...p),A(n,...u.base,...u.entered),m()))}),a.dispose)),e.dispose}},[n])}({immediate:en,container:C,classes:X,direction:er,onStart:S(e=>{ea.onStart(C,e,es)}),onStop:S(e=>{ea.onStop(C,e,ei),"leave"!==e||U(ea)||(G("hidden"),Q(C))})});let eo=E;return en?eo={...eo,className:u(E.className,...X.current.enter,...X.current.enterFrom)}:(eo.className=u(E.className,null==(r=C.current)?void 0:r.className),""===eo.className&&delete eo.className),a.createElement($.Provider,{value:ea},a.createElement(N,{value:c(Y,{visible:y.Open,hidden:y.Closed})|el.flags},m({ourProps:{ref:F},theirProps:eo,defaultTag:"div",features:z,visible:"visible"===Y,name:"Transition.Child"})))}),J=x(function(e,t){let n=null!==(0,a.useContext)(B),r=null!==j();return a.createElement(a.Fragment,null,!n&&r?a.createElement(Y,{ref:t,...e}):a.createElement(G,{ref:t,...e}))}),K=Object.assign(Y,{Child:J,Root:Y})}}]);