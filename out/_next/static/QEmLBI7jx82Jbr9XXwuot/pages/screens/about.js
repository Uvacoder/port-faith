(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{308:function(e,t,n){__NEXT_REGISTER_PAGE("/screens/about",function(){return e.exports=n(75),{page:e.exports.default}})},41:function(e){e.exports=[{icon:"bx-user-plus",text:"I was born in 1985 as an ordinary child."},{icon:"bx-book-bookmark",text:"I've been graduated as a chemical engineer from Boğaziçi University (İstanbul) in 2009."},{icon:"bx-wrench",text:"I had worked as an R&D enginner in a tire manufacturing company for some time."},{icon:"bx-directions",text:"After realizing chemical engineering is not my dream job, I've changed the way of my career and started what I like to do, “coding”."},{icon:"bx-code",text:"I have attended a 6-month web development course in Bilge Adam and got special courses about web development."},{icon:"bx-send",text:"After learning enough coding, I released my first personal project, YouFolders.com in 2018."},{icon:"bx-briefcase",text:"I have been working as a Frontend Developer professionally since 2018."},{icon:"bxl-react",text:"I'm using React (with Next.js) in my projects as my main JS Framework."}]},75:function(e,t,n){"use strict";n.r(t);var o,a=n(0),i=n.n(a),r=n(4),c=n(2),s=n(26),l=n(3),p=Object(r.default)(c.Flex).withConfig({displayName:"AboutItem__Outer",componentId:"admsf9-0"})(["background-color:white;border-radius:4px;height:100px;color:",";.text{padding:20px;}.bx{width:100px;min-width:100px;height:100px;line-height:100px;border-right:1px solid #eee;font-size:42px;text-align:center;}"],l.b.font),d=function(e){var t=e.innerRef,n=e.data,o=n.icon,a=n.text;return i.a.createElement(p,{ref:t,className:"about-item",alignItems:"center"},i.a.createElement(c.Box,{className:"bx ".concat(o)}),i.a.createElement(c.Box,{className:"text"},a))},u=n(41),x=Object(r.default)(c.Flex).attrs({as:"section"}).withConfig({displayName:"about__Outer",componentId:"tc7dwk-0"})(["",";opacity:",";pointer-events:",";transition:",";color:white;.screen{",";padding:40px 0;h2{font-size:36px;text-align:center;margin:0px auto 40px;}.about{position:relative;width:100%;max-width:1000px;&::before{content:'';position:absolute;width:0;height:calc(100% + 40px);left:50%;border-left:1px dashed white;}.about-item{width:calc(50% - 40px);position:relative;opacity:0;bottom:-100px;&:nth-child(2n){margin:100px 0 0 40px;&:before{content:'';position:absolute;right:100%;top:50%;width:35px;height:1px;background-color:white;}&::after{content:'';position:absolute;left:-40px;top:50%;width:10px;height:10px;background-color:white;border-radius:50%;transform:translate(-50%,-50%);}}&:nth-child(2n + 1){margin:0 40px 0 0;&:before{content:'';position:absolute;left:100%;top:50%;width:35px;height:1px;background-color:white;}&::after{content:'';position:absolute;right:-40px;top:50%;width:10px;height:10px;background-color:white;border-radius:50%;transform:translate(50%,-50%);}}}}}"],Object(l.d)(),function(e){return e.active?"1":"0"},function(e){return e.active?"visible":"none"},function(e){return e.active?"1s 0.4s":"0.1s"},l.c);t.default=function(e){var t=e.active,n=Array.from({length:u.length},function(){return Object(a.useRef)(null)});return Object(a.useEffect)(function(){o=new s.c({paused:!0}).staggerTo(n.map(function(e){return e.current}),.3,{opacity:1,bottom:0,ease:s.b.easeInOut,delay:.5},.05)},[]),Object(a.useEffect)(function(){t?o.play().timeScale(1):o.reverse().timeScale(10)},[t]),i.a.createElement(x,{active:t},i.a.createElement(c.Flex,{className:"screen",flexDirection:"column",alignItems:"center"},i.a.createElement("h2",null,"Who Am I?"),i.a.createElement(c.Flex,{className:"about",flexWrap:"wrap"},u.map(function(e,t){return i.a.createElement(d,{innerRef:n[t],data:e,key:e.text})}))))}}},[[308,1,0]]]);