(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{6310:function(e,s,i){Promise.resolve().then(i.bind(i,6122)),Promise.resolve().then(i.bind(i,7657)),Promise.resolve().then(i.bind(i,8138)),Promise.resolve().then(i.t.bind(i,6685,23)),Promise.resolve().then(i.t.bind(i,9878,23)),Promise.resolve().then(i.t.bind(i,2759,23)),Promise.resolve().then(i.t.bind(i,7917,23))},1295:function(e,s,i){"use strict";i.d(s,{Z:function(){return l}});var t=i(7437);function l(e){let{children:s,title:i,actions:l,className:n,style:r}=e;return(0,t.jsx)("div",{className:n,style:r,children:(0,t.jsxs)("div",{className:"container m-auto",children:[(0,t.jsx)("div",{className:"pt-[74px]",children:(0,t.jsxs)("div",{className:"text-center relative",children:[(0,t.jsx)("h2",{className:"text-[40px]",children:i.zh}),(0,t.jsx)("span",{className:"text-[20px] text-[rgba(249,249,249,0.7)]",children:i.en}),l&&(0,t.jsx)("div",{className:"top-[26px] right-0 sm:absolute mt-4 sm:mt-0",children:l})]})}),s]})})}},7657:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return r}});var t=i(7437),l=i(4741),n=i(1295);function r(){return(0,t.jsx)(n.Z,{title:{zh:"历史支撑赛事",en:"SUPPORT THE GAME"},children:(0,t.jsx)(l.Z,{slidesToShow:4,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,responsive:[{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}}],className:"slick-game mt-8 sm:mt-[88px] sm:mx-[80px]",children:[{logo:"/images/game-pic01.png",title:"N1CTF"},{logo:"/images/game-pic02.png",title:"巅峰极客"},{logo:"/images/game-pic03.png",title:"春秋杯"},{logo:"/images/changan.png",title:"长安杯"},{logo:"/images/game-pic04.png",title:"祥云杯"}].map((e,s)=>(0,t.jsx)("div",{className:"game-list",children:(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)("img",{src:e.logo,alt:"logo"}),(0,t.jsx)("div",{children:e.title})]})},s))})})}},6122:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return h}});var t=i(7437),l=i(1141),n=i(8154),r=i(4741),c=i(1295),o=i(1396),a=i.n(o),d=i(2298),m=i(6281),x=i(2265),g=i(5831);function h(){let[e,s]=(0,x.useState)(!1),i=(0,x.useRef)(),o=[];for(let e=0;e<l.T.length;e+=2)o.push({list:l.T.slice(e,e+2)});let h=()=>{s(!e)},u=()=>{setTimeout(()=>{let e=document.querySelector(".slick-team .slick-dots"),s=((null==e?void 0:e.clientWidth)||150)/2+40,t=document.querySelector(".slick-team .slick-prev");t&&(t.style.marginLeft=-s+"px");let l=document.querySelector(".slick-team .slick-next");l&&(l.style.marginLeft=s+"px"),document.querySelector(".slick-dots li")&&!document.querySelector(".slick-dots .slick-active")&&i.current.slickGoTo(0)},10)};return(0,x.useEffect)(()=>{setTimeout(()=>{u()},10),window.addEventListener("resize",()=>{u()})},[]),(0,t.jsxs)(c.Z,{title:g.$s.member,actions:(0,t.jsxs)("div",{children:[(0,t.jsxs)(d.Z,{className:"mr-[28px]",onClick:h,children:[(0,t.jsx)("img",{src:"/images/icon-add.svg",alt:"add-icon",className:"mr-[4px]"}),"加入我们"]}),(0,t.jsx)(a(),{href:"/members",children:(0,t.jsx)(d.Z,{showArrow:!0,children:"查看所有"})})]}),style:{backgroundImage:"url(/images/bg/member-list-bg.png)"},className:"pb-[90px] bg-cover",children:[(0,t.jsx)(r.Z,{slidesToShow:5,slidesToScroll:5,dots:!0,infinite:!1,initialSlide:0,responsive:[{breakpoint:1400,settings:{slidesToShow:4,slidesToScroll:4,initialSlide:0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],ref:i,onInit:u,className:"slick-team mt-8 sm:mt-[70px]",children:o.map((e,s)=>(0,t.jsx)("div",{className:"slick-list",children:(0,t.jsx)("div",{className:"item",children:e.list.map(e=>(0,t.jsx)(n.Z,{member:e,className:"mt-[40px] first:mt-0"},e.nickname))})},s))}),(0,t.jsx)(m.Z,{show:e,onCancel:h,onConfirm:h})]})}},8138:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return r}});var t=i(7437),l=i(1295),n=i(3217);function r(){let e=Array.from(n.s).reverse();return(0,t.jsx)(l.Z,{title:{zh:"里程碑",en:"Milestone"},className:"bg-cover sm:h-[848px] pb-6 bg-center",style:{backgroundImage:"url('/images/bg/milestone-bg.jpg')"},children:(0,t.jsxs)("ul",{className:"flex gap-2 text-lg mt-6 flex-col sm:flex-row",children:[e.map((s,i)=>(0,t.jsxs)("li",{style:{marginTop:"".concat((e.length-i)*50,"px"),width:s.width},className:"relative",children:[(0,t.jsx)("img",{src:"/images/milestone-line.png",alt:"",className:"absolute"}),(0,t.jsxs)("div",{className:"ml-8",children:[(0,t.jsx)("p",{className:"text-xl mb-[10px]",children:s.year}),(0,t.jsx)("ul",{children:s.records.map(e=>(0,t.jsxs)("li",{className:"mb-2",children:[(0,t.jsxs)("a",{href:e.link,target:"_blank",children:[e.title,e.suffix]}),(0,t.jsx)("img",{className:"inline-block ml-[5px] w-[24px] h-[24px] align-[-5px]",src:"1"==e.order?"/images/icon-gj.png":"/images/icon-jb.png",alt:"icon"})]},e.title))})]})]},i)),(0,t.jsx)("li",{children:(0,t.jsx)("img",{src:"/images/milestone-line.png",alt:"",className:"absolute"})})]})})}},3217:function(e,s,i){"use strict";i.d(s,{s:function(){return t}});let t=[{year:"2023",records:[{title:"2022第三届网鼎杯网络安全大赛",order:1,suffix:"冠军"}],width:"290px"},{year:"2021",records:[{title:"DEFCON CTF29决赛全球",order:7,link:"https://oooverflow.io/dc-ctf-2021-finals/",suffix:"第七名"},{title:"CTFTIME世界",order:"<10",link:"https://ctftime.org/stats/2021",suffix:"前十"}],width:"285px"},{year:"2020",records:[{title:"工信部“全国工业互联网安全技术技能大赛”决赛",order:"1",link:"https://www.miit.gov.cn/jgsj/waj/gzdt/art/2020/art_00d4ec6534fc4223b1825c14f2ddc63b.html",suffix:"冠军"}],width:"290px"},{year:"2019",records:[{title:"工信部“护网杯”决赛",order:"1",link:"https://www.chinaiisc.cn/article/103",suffix:"冠军"},{title:"第五届XCTF总决赛冠军",order:"1",link:"https://www.xctf.org.cn/library/details/d832c0cebc74acbaeee76a9169b40e8b81e3d115/",suffix:"冠军"}],width:"290px"}]},7917:function(){},9878:function(){}},function(e){e.O(0,[176,294,181,971,596,744],function(){return e(e.s=6310)}),_N_E=e.O()}]);