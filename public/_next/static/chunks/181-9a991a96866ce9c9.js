"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[181],{2298:function(a,e,n){n.d(e,{Z:function(){return i}});var t=n(7437);function i(a){let{children:e,className:n,showArrow:i,onClick:s,size:r="large"}=a,c="w-[150px] py-[12px] ";return"middle"===r&&(c="px-6 py-2"),(0,t.jsxs)("button",{className:"".concat(c," bg-[#007BFF] border border-[#007BFF] text-white rounded-[2px] inline-flex items-center justify-center leading-[22px] hover:brightness-110 transition duration-200 ")+n,onClick:s,children:[e,i&&(0,t.jsx)("img",{className:"inline ml-1",src:"/images/icon-arrow-right.svg",alt:"arrow"})]})}},6281:function(a,e,n){n.d(e,{Z:function(){return g}});var t=n(7437),i=n(2265),s=n(2298),r=n(7856),c=n(3583);function o(a){let{title:e,children:n,onCancel:o,onConfirm:g,confirmText:m="确认",cancelText:p="取消",show:l=!1}=a,d=(0,i.useRef)(null);return(0,c.Z)(l),(0,i.useLayoutEffect)(()=>{if(l){var a;null===(a=d.current)||void 0===a||a.classList.remove("hidden")}else setTimeout(()=>{var a;null===(a=d.current)||void 0===a||a.classList.add("hidden")},300)},[l]),(0,t.jsx)("div",{ref:d,className:"fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none pointer-events-all bg-[#00000080] text-[#333]",children:(0,t.jsx)(r.u,{show:l,enter:"transition-all duration-200",enterFrom:"opacity-0 translate-y-[-80%]",enterTo:"opacity-100 translate-y-[-50%]",leave:"transition-opacity duration-200 translate-y-[-50%]",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,t.jsx)("div",{className:"relative w-auto mt-[50vh] min-[576px]:mx-auto min-[576px]:max-w-[500px]",children:(0,t.jsxs)("div",{className:"min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none",children:[(0,t.jsxs)("div",{className:"flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4",children:[(0,t.jsx)("h5",{className:"text-xl font-medium leading-normal text-neutral-800",id:"exampleModalLabel",children:e}),(0,t.jsx)("button",{type:"button",className:"box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none","aria-label":"Close",onClick:o,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:(0,t.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,t.jsx)("div",{className:"relative flex-auto p-4",children:n}),(0,t.jsxs)("div",{className:"flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4",children:[o&&(0,t.jsx)(s.Z,{onClick:o,size:"middle",className:"bg-white !text-[#595959] border-[#D9D9D9]",children:p}),g&&(0,t.jsx)(s.Z,{onClick:g,size:"middle",className:"ml-2.5",children:m})]})]})})})})}function g(a){return(0,t.jsx)(o,{...a,title:"加入我们",confirmText:"发送邮件",onConfirm:()=>{let e=document.createElement("a");e.href="mailto:root@nu1l.com",e.click(),a.onConfirm&&a.onConfirm()},children:(0,t.jsxs)("div",{className:"px-2",children:[(0,t.jsx)("p",{className:"text-xl",children:"告诉我们更多关于你自己的信息"}),(0,t.jsx)("p",{className:"text-gray-500 text-sm",children:"将以下数据发送到我们的电子邮件 “root@nu1l.com”"}),(0,t.jsx)("div",{className:"mt-[54px] mb-7",children:(0,t.jsxs)("ul",{className:"flex flex-col gap-5",children:[(0,t.jsxs)("li",{children:["1、您的ID"," ",(0,t.jsx)("span",{className:"text-gray-400 ml-2",children:"ID号，如IDentity"})]}),(0,t.jsxs)("li",{children:["2、技能 ",(0,t.jsx)("span",{className:"text-gray-400 ml-2",children:"Pwn or ALL"})]}),(0,t.jsxs)("li",{children:["3、简介 ",(0,t.jsx)("span",{className:"text-gray-400 ml-2",children:"从哪来"})]})]})}),(0,t.jsx)("p",{className:"mb-6",children:"PS 请尽可能详细地附上您的简历"})]})})}},8154:function(a,e,n){n.d(e,{Z:function(){return i}});var t=n(7437);function i(a){let{member:e,className:n}=a;return(0,t.jsx)("li",{className:"list-none",children:(0,t.jsx)("a",{href:e.site,target:"_blank",className:"p-[40px] pb-[24px] mb-3 flex flex-col gap-2 sm:w-[260px] h-[370px] items-center transition duration-300 hover:bg-white group shadow-[0px 10px 20px 0px rgba(0,0,0,0.15)] rounded-[2px] "+n+" hover:text-[#4A4A4A] block flex-1",children:(0,t.jsxs)("div",{className:"text-center w-[180px] flex flex-col gap-[16px] h-full",children:[(0,t.jsx)("img",{className:"w-[180px] h-[180px] rounded-[50%]","data-src":e.avatar,alt:e.nickname}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-2xl group-hover:text-[#007BFF] leading-[33px] font-semibold",children:e.nickname}),(0,t.jsx)("p",{className:"overflow-hidden whitespace-nowrap text-ellipsis leading-[28px]",title:e.description,children:e.description})]}),(0,t.jsxs)("div",{className:"flex justify-between items-center mt-auto",children:[(0,t.jsxs)("span",{className:"text-[#62728C] text-xs flex gap-1",children:[(0,t.jsx)("img",{src:"/images/icon-tag.svg",alt:"tag"}),e.tag]}),e.site&&(0,t.jsxs)("a",{href:e.site,target:"_blank",className:"w-[32px] h-[32px]",children:[(0,t.jsx)("img",{className:"group-hover:hidden",src:"/images/icon-site.svg",alt:"site"}),(0,t.jsx)("img",{className:"!hidden group-hover:!block",src:"/images/icon-site-active.svg",alt:"site"})]})]})]})})},e.nickname)}},5831:function(a,e,n){n.d(e,{$s:function(){return r},Mv:function(){return s},Pi:function(){return i},m$:function(){return t}});let t=["Nu1L Team是国内顶尖CTF联合战队，成立于2015年，队名源于英文单词“NULL”，《从0到1：CTFer成长之路》、《内网渗透体系建设》作者团队，目前成员80余人，队员分布于清华大学、北京大学、上海科技大学、中科院信工所、山东大学、中国矿业大学、成都信息工程大学、山东科技大学、南京邮电大学、西北大学、乔治亚理工学院等国内外各大高校，也分布于阿里、腾讯、华为、永信至诚、京东、安恒、长亭、启明星辰、蚂蚁金服等国内安全大厂。","Nu1L Team的成员都对信息安全以及CTF比赛有着浓厚的兴趣，拿获了2018年首届网鼎杯亚军、2019年护网杯冠军、2020年全国工业互联网安全技术技能大赛冠军、2022年第三届网鼎杯网络安全大赛冠军等众多国家级赛事冠亚军，于2021年闯入DEFCON CTF决赛并获得全球第七名，除了收获国内外各类CTF比赛优异成绩之外，Nu1L Team还是N1CTF以及空指针挑战赛发起者，同时也是成都“巅峰极客”决赛“广诚市”三年场景设计者。成员中既有参加Pwn2own、Geekpwn、天府杯的安全研究员，也有HITCON、KCON、Blackhat、天府杯等国内外安全会议演讲者。"],i={title:"商务合作",desc:"如有培训、比赛需求（代打勿扰），请发送邮件至 contact@nu1l.com",targetEmail:"contact@nu1l.com"},s={text:"Copyright \xa9 2015-2023 Nu1L Team. All Rights Reserved.  "},r={introduction:{zh:"战队介绍",en:"Team Introduction"},milestone:{zh:"里程碑",en:"Milestone"},excellentRecord:{zh:"优异战绩",en:"EXCELLENT RECORD"},member:{zh:"战队队员",en:"TEAM MEMBERS"},memberNaN:{zh:"NaN 队员",en:"TEAM MEMBERS"},historyGame:{zh:"历史支撑赛事",en:"SUPPORT THE GAME"}}},1141:function(a,e,n){n.d(e,{T:function(){return t},p:function(){return i}});let t=[{avatar:"/images/user/ven.jpg",tag:"WEB",site:"https://venenof.com/",nickname:"Venenof7",description:"Founder"},{avatar:"/images/user/alert.jpg",tag:"WEB",site:"http://blog.albertchang.cn/",nickname:"albertchang",description:"Co Founder"},{avatar:"/images/user/mar.jpg",tag:"ALL",site:"https://blog.shiki7.me/",nickname:"Marche147",description:"Co Founder"},{avatar:"/images/user/Mr.R.jpg",tag:"PWN",site:"https://darkeyer.github.io/",nickname:"Mr.R",description:"CTF负责人"},{avatar:"/images/user/mz.jpg",tag:"RE",site:"http://mozhucy.cn/",nickname:"mz",description:"保持耐心"},{avatar:"/images/user/misty.jpg",tag:"RE",site:"https://misty.com/",nickname:"Misty",description:"Co Founder"},{avatar:"/images/user/Q7.png",tag:"Misc",site:"https://leoq7.com/",nickname:"Q7",description:"CTF负责人"},{avatar:"/images/user/head.png",tag:"PWN&RE",site:"http://pzhxbz.cn/",nickname:"pzhxbz",description:"ff14国服猫小胖区海猫茶屋部队招人，求带"},{avatar:"/images/user/ni.jpg",tag:"Pwn",site:"https://www.nu1l.com/members.html#",nickname:"Nightu",description:"CTF负责人"},{avatar:"/images/user/nl.png",tag:"PWN/Crypto",site:"https://nt1dr.github.io/",nickname:"nt1dr",description:"CTF负责人"},{avatar:"/images/user/bird.jpg",tag:"PWN",nickname:"bird",description:"*"},{avatar:"/images/user/kirin.jpg",tag:"PWN",site:"https://github.com/Kirin-say",nickname:"Kirin",description:"Maybe Master of PWN"},{avatar:"/images/user/logo.jpg",tag:"RE",site:"http://blog.wangxiyu.me/",nickname:"Wxy191",description:'"等我忙完这波就回来打CTF".jpg'},{avatar:"/images/user/avatar.png",tag:"WEB",site:"https://qvq.im/",nickname:"4uuu Nya",description:"想要有个女朋友"},{avatar:"/images/user/muuu.jpg",tag:"WEB",site:"https://lvm.me/",nickname:"Muuu Nya",description:"Nu1L Team首席工具人"},{avatar:"/images/user/so.jpg",tag:"Crypto",site:"https://blog.soreatu.com/",nickname:"Soreat_u",description:"Hermes的小迷弟"},{avatar:"/images/user/evios.jpg",tag:"WEB",site:"https://lvm.me/",nickname:"evi0s",description:"plusls的超菜徒弟"},{avatar:"/images/user/wupco.png",tag:"ALL",site:"http://www.wupco.cn/",nickname:"wupco",description:"平平淡淡才是真"},{avatar:"/images/user/mei.jpg",tag:"WEB",site:"https://meizjm3i.github.io/",nickname:"梅子酒",description:"电子竞技苦手"},{avatar:"/images/user/homura.jpg",tag:"PWN",site:"http://blog.homura.cc/",nickname:"Homura",description:"ff14海猫茶屋/晨曦王座部队招人，求带"},{avatar:"/images/user/acd.jpg",tag:"RE",nickname:"acdxvfsvd",description:"要延毕了"},{avatar:"/images/user/tx.jpg",tag:"RE",site:"https://panda0s.top/",nickname:"pandaos",description:"想交女朋友学逆向。"},{avatar:"/images/user/her.jpg",tag:"Crypto",nickname:"Hermes",description:"密码学萌新"},{avatar:"/images/user/cheery.jpg",tag:"WEB",nickname:"Cheery",description:"学如逆水行舟不进则退"},{avatar:"/images/user/crane.jpg",tag:"WEB",nickname:"Crane",description:"想学二进制的web\uD83D\uDC31"},{avatar:"/images/user/exp.jpg",tag:"PWN",nickname:"explorer",description:"一期一会"},{avatar:"/images/user/hcm.jpg",tag:"ALL",site:"https://nobb.site/",nickname:"Hcamael",description:"老年CTF选手"},{avatar:"/images/user/1.jpeg",tag:"BIN",site:"https://www.nu1l.com/1ce0ear.github.io",nickname:"ice0ear",description:"利欲驱人万火牛，江湖浪迹一沙鸥"},{avatar:"/images/user/77.jpg",tag:"PWN",nickname:"77",description:"还差得远呢"},{avatar:"/images/user/12.jpg",tag:"RE",nickname:"125e",description:"emmm......"},{avatar:"/images/user/bai.jpg",tag:"WEB",nickname:"Balis0ng",description:"不爱打桌球的厨子不是好飞行员。"},{avatar:"/images/user/ali.jpg",tag:"Web/Crypto",nickname:"Alias",description:"Just a a simple ring"},{avatar:"/images/user/chav.jpg",tag:"PWN",nickname:"chav",description:"pwn for hack, hack for fun"},{avatar:"/images/user/501.jpg",tag:"PWN",nickname:"veritas501",description:"纸上得来终觉浅，绝知此事要躬行。"},{avatar:"/images/user/gmcn.jpg",tag:"Crypto",nickname:"gmcn",description:"嘤QAQ"},{avatar:"/images/user/kow.jpeg",tag:"WEB",nickname:"kow",description:"Know it then hack it."},{avatar:"/images/user/wxlogo.jpg",tag:"机器流量",nickname:"MiCi",description:"简单的就是最好的，期望和有趣的人一起做有趣的事~"},{avatar:"/images/user/j.jpg",tag:"WEB",nickname:"Jiryu",description:"打工真开心("},{avatar:"/images/user/kmfl.jpg",tag:"PWN",site:"https://blog.csdn.net/weixin_44145820",nickname:"KMFL",description:"May the force be with you"},{avatar:"/images/user/lemon.jpg",tag:"WEB",nickname:"L3m0n",description:"know it then do it"},{avatar:"/images/user/lu.png",tag:"JAVA",site:"https://lucifaer.com/",nickname:"Lucifaer",description:"祝这世界继续热闹，祝我仍是我"},{avatar:"/images/user/lz.jpg.webp",tag:"红队/漏洞研究",nickname:"Lz1y",description:"常持怀疑，保持敬畏。"},{avatar:"/images/user/dog.jpg",tag:"PWN",nickname:"一只狗",description:"more pwn more fun"},{avatar:"/images/user/old.jpg",tag:"游戏安全",nickname:"OldTang",description:"Anti Anti-Cheat"},{avatar:"/images/user/or.png",tag:"WEB",nickname:"orich1",description:"知易行难"},{avatar:"/images/user/ott.jpg",tag:"RE",nickname:"OtterV",description:"动身即是未来（学不会学不完端茶递水qwq"},{avatar:"/images/user/9a.png",tag:"PWN",site:"https://vbtyblog.blogspot.com/",nickname:"Ox9A82",description:"I am a IDA Pro reader."},{avatar:"/images/user/qiyou.jpg",tag:"WEB",site:"https://www.redteaming.top/",nickname:"七友",description:"路漫漫其修远兮，吾将上下而求索"},{avatar:"/images/user/poker.jpg",tag:"RE",nickname:"0xPoker",description:"做点有意义的事"},{avatar:"/images/user/scanf.jpg",tag:"WEB",nickname:"scanf",description:"渗透测试爱好者，熟练拼写msf、cs等单词。"},{avatar:"/images/user/1.png",tag:"WEB",site:"https://smi1e.top/",nickname:"Smi1e",description:"Keeping to the root of the matter."},{avatar:"/images/user/str.png",tag:"WEB",site:"https://strcpy.me/",nickname:"virusdefender",description:"学而不思则罔，思而不学则殆"},{avatar:"/images/user/syj.jpg",tag:"RE",site:"https://www.syjblog.com/",nickname:"SYJ",description:"想学渗透的逆向手"},{avatar:"/images/user/tac.jpg",tag:"Pwn/Re",nickname:"0xTac",description:"只会做PPT的二进制\uD83D\uDC15"},{avatar:"/images/user/un.png",tag:"WEB",nickname:"undefined",description:"red-team.exe"},{avatar:"/images/user/v1.png",tag:"PWN",site:"https://v1nke.github.io/",nickname:"V1NKe",description:"Make something people want."},{avatar:"/images/user/yu.jpg.webp",tag:"WEB",site:"http://www.yulegeyu.com/",nickname:"雨了个雨",description:"啥都不会，不过啥都想学。"},{avatar:"/images/user/xzh.png",tag:"RE",nickname:"xzh3h",description:"攒钱植发"},{avatar:"/images/user/plus.jpg",tag:"PWN",site:"https://blog.plusls.com/",nickname:"plusls",description:"为什么你们都有女朋友"},{avatar:"/images/nan/Lyutoon.jpg",tag:"Crypto/AI",nickname:"Lyutoon",description:"全队最菜"},{avatar:"/images/nan/cyan.jpg",tag:"blockchain",nickname:"cyan",description:"٩( 'ω' )و"},{avatar:"/images/nan/mas0n.png",tag:"Re",nickname:"Mas0n",description:"努力不翻车的翻车\uD83D\uDC1F"},{avatar:"/images/user/chuj.png",tag:"Pwn",site:"https://cjovi.icu/",nickname:"chuj",description:"不好好学习，生活中就会多出许多魔法和奇迹。还有爱情"},{avatar:"/images/user/rabbit.png",tag:"Web",site:"https://www.nu1l.com/members.html#",nickname:"rabbit",description:"一只爱喝奶茶的兔子"},{avatar:"/images/nan/Siebene.png",tag:"WEB",nickname:"Siebene@",description:"这个人好菜啊"},{avatar:"/images/user/x1.jpg",tag:"WEB",site:"https://exp10it.cn/",nickname:"X1r0z",description:"业余半吊子程序员"},{avatar:"/images/nan/hash.jpg",tag:"crypto",nickname:"hash_hash",description:"弱小的密码学选手"},{avatar:"/images/nan/lolita.png",tag:"WEB",nickname:"lolita",description:"快来和我一起穿lolita!"},{avatar:"/images/user/shino.png",tag:"RE",nickname:"Shino",description:"我想吃麦麦脆汁鸡"},{avatar:"/images/nan/pipi.png",tag:"pwn",nickname:"Yongibaoi",description:"玻璃晴朗，橘子辉煌。"},{avatar:"/images/user/tplus.jpg",tag:"pwn",site:"https://www.tpluszz.top/",nickname:"Tplus",description:"zzzzz"}],i=[{avatar:"/images/nan/Ghostasky.png",tag:"Pwn",nickname:"Ghostasky",description:"怕什么真理无穷，进一寸有进一寸的欢喜"},{avatar:"/images/nan/mengluo.png",tag:"Web",nickname:"mengluo",description:"or 1=1#"},{avatar:"/images/nan/marryjianjian.png",tag:"Pwn",nickname:"marryjianjian",description:"tcl"},{avatar:"/images/nan/Cynosure.jpg",tag:"Reverse",nickname:"Cynosure",description:"嘤嘤嘤嘤嘤嘤嘤嘤"},{avatar:"/images/nan/tangent.png",tag:"Pwn",nickname:"tangent",description:"希望能够变强的菜狗"},{avatar:"/images/nan/ev11ccaatt.png",tag:"Web",nickname:"ev11ccaatt",description:"安全学习者"},{avatar:"/images/nan/playmak3r.jpg",tag:"re",nickname:"playmak3r",description:"patient"},{avatar:"/images/nan/wondermaker.png",tag:"Pwn",nickname:"wondermaker",description:"书上得来终觉浅，绝知此事要躬行。"},{avatar:"/images/nan/Dji0x1n.png",tag:"Web",nickname:"Dji0x1n",description:"life is a fucking movie"},{avatar:"/images/nan/Niebelungen.png",tag:"Pwn",nickname:"Niebelungen",description:"while(i < you) i++;"},{avatar:"/images/nan/xux.png",tag:"Web",nickname:"Xux",description:"蒟蒻Web手"},{avatar:"/images/nan/k1r0aKuee.png",tag:"Pwn",nickname:"k1r0aKuee",description:"It's a random kind of thing."},{avatar:"/images/nan/pushinl.jpg",tag:"Web",nickname:"pushinl",description:"不如吃茶去"},{avatar:"/images/nan/Rivaille.png",tag:"Pwn",site:"https://www.cnblogs.com/L0g4n-blog/",nickname:"Rivaille",description:"路虽远，行则必至；事虽难，作则必成。愿行者常至，做者常成。"},{avatar:"/images/nan/320.jpg",tag:"Pwn",nickname:"320",description:"Carry on and Pwn"},{avatar:"/images/nan/c10udlnk.jpg",tag:"Reverse",nickname:"c10udlnk",description:"密码学是二进制人的自我修养"},{avatar:"/images/nan/Am0n.png",tag:"pwn",nickname:"Am0n",description:"萌新pwner"},{avatar:"/images/nan/acche.png",tag:"pwn",nickname:"ACCHE",description:"啥也不是"},{avatar:"/images/nan/wendell.png",tag:"web",nickname:"Wendell",description:"珍惜困境带来的成长的机会."},{avatar:"/images/nan/Preacher.jpg",tag:"web",nickname:"Preacher",description:"在学二进制的web\uD83D\uDC36"},{avatar:"/images/nan/Wi1L.png",tag:"pwn",nickname:"Wi1L",description:"keep fighting and never stop"},{avatar:"/images/nan/Kai.png",tag:"pwn",nickname:"Kai",description:"越努力越幸运！"},{avatar:"/images/nan/cord.jpg",tag:"pwn",nickname:"Cord636",description:"All Roads Lead to Rome"},{avatar:"/images/nan/m3.png",tag:"web",nickname:"M3thy1",description:"从零开始的Web狗生活"},{avatar:"/images/nan/panda.jpg",tag:"pwn",nickname:"大能猫",description:"一只只会呜呜呜的猫"},{avatar:"/images/nan/tiger.jpg",tag:"Crypto",nickname:"Tiger1218",description:"战战兢兢，如履薄冰。"},{avatar:"/images/nan/nam.jpg",tag:"Pwn",nickname:"Nameless",description:"pwn得动不了的橡皮小黄鸭"},{avatar:"/images/nan/l1n.jpg",tag:"web",nickname:"L1nT4L",description:"做世界的水手，奔赴所有的港口"},{avatar:"/images/nan/try.jpg",tag:"RE",nickname:"Teloivts",description:"开摆！"}]},3583:function(a,e,n){n.d(e,{Z:function(){return i}});var t=n(2265);function i(a){(0,t.useLayoutEffect)(()=>{a?"hidden"!==document.body.style.overflow&&(document.body.style.overflow="hidden"):"hidden"===document.body.style.overflow&&(document.body.style.overflow="auto")},[a])}}}]);