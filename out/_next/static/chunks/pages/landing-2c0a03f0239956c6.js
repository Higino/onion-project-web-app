(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{8505:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/landing",function(){return t(9387)}])},4341:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var o=t(4924),i=t(6042),r=t(9396),a=t(828),s=t(5893),l=t(7294),c=t(4184),d=t.n(c),p=t(5697),u=t.n(p),h=t(1120),x=t(7821),m=t(1423),g=t(4041),f=t(6680),b=t(6547),v=function(e){return{root:{marginTop:"20px",paddingLeft:"0",marginBottom:"0",overflow:"visible !important",lineHeight:"24px",textTransform:"uppercase",fontSize:"12px",fontWeight:"500",position:"relative",display:"block",color:"inherit"},flexContainer:(0,o.Z)({},e.breakpoints.down("xs"),{display:"flex",flexWrap:"wrap"}),displayNone:{display:"none !important"},fixed:{overflow:"visible !important"},horizontalDisplay:{display:"block"},pills:{float:"left",position:"relative",display:"block",borderRadius:"30px",minWidth:"100px",textAlign:"center",transition:"all .3s",padding:"10px 15px",color:"#555555",height:"auto",opacity:"1",maxWidth:"100%",margin:"0 5px"},pillsWithIcons:{borderRadius:"4px"},tabIcon:{width:"30px",height:"30px",display:"block",margin:"15px 0 !important","&, & *":{letterSpacing:"normal !important"}},horizontalPills:{width:"100%",float:"none !important","& + button":{margin:"10px 0"}},contentWrapper:{marginTop:"20px"},primary:{"&,&:hover":{color:"#FFFFFF",backgroundColor:b.lr,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ".concat((0,b.vS)(b.lr,.4))}},info:{"&,&:hover":{color:"#FFFFFF",backgroundColor:b.bE,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ".concat((0,b.vS)(b.bE,.4))}},success:{"&,&:hover":{color:"#FFFFFF",backgroundColor:b.nq,boxShadow:"0 2px 2px 0 ".concat((0,b.vS)(b.nq,.14),", 0 3px 1px -2px ").concat((0,b.vS)(b.nq,.2),", 0 1px 5px 0 ").concat((0,b.vS)(b.nq,.12))}},warning:{"&,&:hover":{color:"#FFFFFF",backgroundColor:b.MA,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ".concat((0,b.vS)(b.MA,.4))}},danger:{"&,&:hover":{color:"#FFFFFF",backgroundColor:b.E7,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ".concat((0,b.vS)(b.E7,.4))}},rose:{"&,&:hover":{color:"#FFFFFF",backgroundColor:b.An,boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ".concat((0,b.vS)(b.An,.4))}},alignCenter:{alignItems:"center",justifyContent:"center"},tabWrapper:{color:"inherit",position:"relative",fontSize:"12px",lineHeight:"24px",fontWeight:"500",textTransform:"uppercase","&,& *":{letterSpacing:"normal"}}}},y=(0,h.Z)(v);function j(e){var n,t=(0,a.Z)(l.useState(e.active),2),c=t[0],p=t[1],u=y(),h=e.tabs,b=e.color,v=e.horizontal,j=e.alignCenter,w=d()((n={},(0,o.Z)(n,u.flexContainer,!0),(0,o.Z)(n,u.horizontalDisplay,void 0!==v),n)),Z=(0,s.jsx)(x.Z,{classes:{root:u.root,fixed:u.fixed,flexContainer:w,indicator:u.displayNone},value:c,onChange:function(e,n){p(n)},centered:j,children:h.map((function(e,n){var t,a={};void 0!==e.tabIcon&&(a.icon=(0,s.jsx)(e.tabIcon,{className:u.tabIcon}));var l=d()((t={},(0,o.Z)(t,u.pills,!0),(0,o.Z)(t,u.horizontalPills,void 0!==v),(0,o.Z)(t,u.pillsWithIcons,void 0!==e.tabIcon),t));return(0,s.jsx)(m.Z,(0,r.Z)((0,i.Z)({label:e.tabButton},a),{classes:{root:l,selected:u[b],wrapper:u.tabWrapper}}),n)}))}),k=(0,s.jsx)("div",{className:u.contentWrapper,children:h.map((function(e,n){return n!==c?null:(0,s.jsx)("div",{className:u.tabContent,children:e.tabContent},n)}))});return void 0!==v?(0,s.jsxs)(g.Z,{children:[(0,s.jsx)(f.Z,(0,r.Z)((0,i.Z)({},v.tabsGrid),{children:Z})),(0,s.jsx)(f.Z,(0,r.Z)((0,i.Z)({},v.contentGrid),{children:k}))]}):(0,s.jsxs)("div",{children:[Z,k]})}j.defaultProps={active:0,color:"primary"},j.propTypes={active:u().number,tabs:u().arrayOf(u().shape({tabButton:u().string,tabIcon:u().object,tabContent:u().node})).isRequired,color:u().oneOf(["primary","warning","danger","success","info","rose"]),horizontal:u().shape({tabsGrid:u().object,contentGrid:u().object}),alignCenter:u().bool}},8602:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var o=t(4924),i=t(6042),r=t(9396),a=t(828),s=t(5893),l=t(7294),c=t(4184),d=t.n(c),p=t(5697),u=t.n(p),h=function(e){return{parallax:{height:"90vh",maxHeight:"700px",overflow:"hidden",position:"relative",backgroundPosition:"center top",backgroundSize:"cover",margin:"0",padding:"0",border:"0",display:"flex",alignItems:"center"},filter:{"&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:after,&:before":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:"''"}},small:{height:"380px"},parallaxResponsive:(0,o.Z)({},e.breakpoints.down("md"),{minHeight:"660px"})}},x=(0,t(1120).Z)(h);function m(e){var n=(0,a.Z)(l.useState("translate3d(0,0px,0)"),2),t=n[0],c=n[1];l.useEffect((function(){return window.innerWidth>=768&&window.addEventListener("scroll",u),function(){window.innerWidth>=768&&window.removeEventListener("scroll",u)}}));var p,u=function(){var e=window.pageYOffset/3;c("translate3d(0,"+e+"px,0)")},h=e.filter,m=e.className,g=e.children,f=e.style,b=e.image,v=e.small,y=e.responsive,j=x(),w=d()((p={},(0,o.Z)(p,j.parallax,!0),(0,o.Z)(p,j.filter,h),(0,o.Z)(p,j.small,v),(0,o.Z)(p,j.parallaxResponsive,y),(0,o.Z)(p,m,void 0!==m),p));return(0,s.jsx)("div",{className:w,style:(0,r.Z)((0,i.Z)({},f),{backgroundImage:"url("+b+")",transform:t}),children:g})}m.propTypes={className:u().string,filter:u().bool,children:u().node,style:u().string,image:u().string,small:u().bool,responsive:u().bool}},7479:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(5893),i=(t(7294),t(5697)),r=t.n(i),a=t(1120),s=t(5867),l=(0,a.Z)(s.Z);function c(e){var n=l(),t=e.children;return(0,o.jsx)("div",{className:n.defaultFontStyle+" "+n.infoText,children:t})}c.propTypes={children:r().node}},4207:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(5893),i=(t(7294),t(5697)),r=t.n(i),a=t(1120),s=t(5867),l=(0,a.Z)(s.Z);function c(e){var n=l(),t=e.children;return(0,o.jsx)("div",{className:n.defaultFontStyle+" "+n.primaryText,children:t})}c.propTypes={children:r().node}},9387:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Fe}});var o=t(872),i=t(6042),r=t(5893),a=t(7294),s=t(4184),l=t.n(s),c=t(1120),d=t(5697),p=t.n(d),u=t(9152),h=t(6356),x=t(4041),m=t(6680),g=t(5017),f=(t(1664),t(2822)),b=t(998),v=t(6857),y=t(8594),j=t(7621),w=t(4286),Z=t(9441),k=t(1163),F=(0,c.Z)(Z.Z);function C(e){var n=F(),t=(0,k.useRouter)();return(0,r.jsxs)(f.Z,{className:n.list,children:[(0,r.jsx)(b.Z,{className:n.listItem,children:(0,r.jsxs)(w.Z,{href:"#",color:"transparent",target:"_blank",onClick:function(e){e.preventDefault(),t.push({pathname:"/landing",query:{feature:"audienceengagement"}})},className:n.navLink,children:[(0,r.jsx)(y.Z,{className:n.icons})," Audience"]})}),(0,r.jsx)(b.Z,{className:n.listItem,children:(0,r.jsxs)(w.Z,{href:"#",color:"transparent",target:"_blank",onClick:function(e){e.preventDefault(),t.push({pathname:"/landing",query:{feature:"contentcollaboration"}})},className:n.navLink,children:[(0,r.jsx)(j.Z,{className:n.icons})," Content"]})}),(0,r.jsx)(b.Z,{className:n.listItem,children:(0,r.jsxs)(w.Z,{href:"#",color:"transparent",target:"_blank",onClick:function(e){e.preventDefault(),t.push({pathname:"/landing",query:{feature:"financepartner"}})},className:n.navLink,children:[(0,r.jsx)(v.Z,{className:n.icons})," Finance"]})}),"    "]})}var N=t(8602),S=t(9396),T=t(6547),A={container:(0,i.Z)({zIndex:"12",color:"#FFFFFF"},T.nC),chatContainer:{height:"300px",overflowY:"scroll"},title:(0,S.Z)((0,i.Z)({},T.TN),{display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",color:"#FFFFFF",textDecoration:"none"}),subtitle:{fontSize:"1.313rem",maxWidth:"500px",margin:"10px auto 0"},main:{background:"#FFFFFF",position:"relative",zIndex:"3"},mainRaised:{margin:"-60px 30px 0px",borderRadius:"6px",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"}},W=t(9534);function z(e){e.classes;var n=e.color,t=(e.children,e.size,e.simple,e.block,e.link,e.justIcon,(0,W.Z)(e,["classes","color","children","size","simple","block","link","justIcon"]),(0,k.useRouter)());return(0,r.jsxs)(w.Z,{onClick:function(){return t.push("/login")},color:n,size:"lg",target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)("i",{className:""}),"Pre-register Now!"]})}t(4341);var I=t(6554),E=t(6622),O=t(9854),R=t(7277),M=t(8786),q=t(5774),H=(I.Z,E.Z,O.Z,R.Z,M.Z,q.Z,t(4924)),_={infoArea:{maxWidth:"360px",margin:"0 auto",padding:"0px"},iconWrapper:{float:"left",marginTop:"24px",marginRight:"10px"},primary:{color:T.lr},warning:{color:T.MA},danger:{color:T.E7},success:{color:T.nq},info:{color:T.bE},rose:{color:T.An},gray:{color:T.X_},icon:{width:"36px",height:"36px"},descriptionWrapper:{color:T.X_,overflow:"hidden"},title:T.TN,description:{color:T.lr,overflow:"hidden",marginTop:"0px",fontSize:"14px"},iconWrapperVertical:{float:"none"},iconVertical:{width:"61px",height:"61px"}},P=(0,c.Z)(_);function B(e){var n,t,o=P(),i=e.title,a=e.description,s=e.iconColor,c=e.vertical,d=e.to,p=(0,k.useRouter)(),u=l()((n={},(0,H.Z)(n,o.iconWrapper,!0),(0,H.Z)(n,o[s],!0),(0,H.Z)(n,o.iconWrapperVertical,c),n)),h=l()((t={},(0,H.Z)(t,o.icon,!0),(0,H.Z)(t,o.iconVertical,c),t));return(0,r.jsx)("div",{className:o.infoArea,children:(0,r.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),p.push({pathname:"/landing",query:{feature:d}})},children:[(0,r.jsx)("div",{className:u,children:(0,r.jsx)(e.icon,{className:h})}),(0,r.jsxs)("div",{className:o.descriptionWrapper,children:[(0,r.jsx)("h4",{className:o.title,children:i}),(0,r.jsx)("p",{className:o.description,children:a})]})]})})}B.defaultProps={iconColor:"gray",to:"main"},B.propTypes={icon:p().object.isRequired,title:p().oneOfType([p().string,p().node]).isRequired,description:p().string.isRequired,iconColor:p().oneOf(["primary","warning","danger","success","info","rose","gray"]),vertical:p().bool,to:p().string};var L={section:{padding:"70px 0",textAlign:"center"},title:(0,S.Z)((0,i.Z)({},T.TN),{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"}),description:{color:"#999"}},D=(0,c.Z)(L);function U(){var e=D();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:e.section,children:[(0,r.jsx)("div",{children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(m.Z,{xs:12,sm:12,md:12,children:(0,r.jsx)(B,{title:"Financial partner",description:"Every business needs money to grow. We understand your business is social media and provide you with the best finance to be a successfull influencer. Wether to buy your first digital equipment or software licences or even to hire your first content editors we are here for you. Enjoy cash advance options or just apply for a loan, we understand your needs.",icon:R.Z,iconColor:"rose",vertical:!0,to:"financepartner"})}),(0,r.jsx)(m.Z,{xs:12,sm:12,md:6,children:(0,r.jsx)(B,{title:"Audience Engagement",description:"Centralize all your content interactions in one place and never miss a comment again. Using our AI powered personal assistent, you can automate all your interactions with your audience.",icon:I.Z,iconColor:"info",vertical:!0,to:"audienceengagement"})}),(0,r.jsx)(m.Z,{xs:12,sm:12,md:6,children:(0,r.jsx)(B,{title:"Your marketplace",description:"Search from thousands of professionals (designers, content translation, video editing, etc) from our marketplace. Have bids on work you need, hire professional with the best bid and hire them for the tasks you need.",icon:q.Z,iconColor:"info",vertical:!0})})]})}),(0,r.jsx)("div",{children:(0,r.jsx)(x.Z,{justify:"center",spacing:7,children:(0,r.jsxs)(m.Z,{xs:12,sm:12,md:8,children:[(0,r.jsx)(z,{color:"success",size:"lg"}),(0,r.jsx)("h5",{className:e.description,children:(0,r.jsx)("b",{children:"Invest in a partener that knows how to Invest in you"})})]})})})]})})}t(7479),t(4207);var G=(0,c.Z)(L);function V(){var e=G();return(0,r.jsxs)("div",{className:e.section,children:[(0,r.jsx)("h2",{className:e.title,children:"Your Ultimate Sentiment Analyzer and Auto-Responder!"}),(0,r.jsxs)("h5",{className:e.description,children:[(0,r.jsx)("b",{children:"Never miss a beat with our intelligent auto-reply feature! "}),"Otis empowers you to respond to your audience in real-time, just like the content owner would, ensuring you never leave a question unanswered or an opportunity untapped. Seamlessly customize your responses and let our system handle the rest, saving you time and energy while boosting your brand's reputation for exceptional customer engagement. Whether you're a social media influencer, a business owner, or a content creator, Otis is your secret weapon to stay connected, understand your audience on a deeper level, and foster meaningful interactions that drive success. Join the ranks of top-performing social media powerhouses today and experience the difference with Otis."]}),(0,r.jsx)(z,{color:"success",size:"lg"})]})}var Y=t(8449),X=(0,c.Z)(L);function J(){var e=X();return(0,r.jsxs)("div",{className:e.section,children:[(0,r.jsx)(x.Z,{justify:"center",children:(0,r.jsxs)(m.Z,{xs:12,sm:12,md:8,children:[(0,r.jsx)("h2",{className:e.title,children:"About Content Collaboration"}),(0,r.jsxs)("h5",{className:e.description,children:[(0,r.jsx)("b",{children:"A futurisctic feature that should be described here in more detail! "}),"Otis should be able to allow content creators and content designers to collaborate on content. Comment on content, suggest edits, and approve content. More details to be added here ...."]})]})}),(0,r.jsx)("div",{children:(0,r.jsx)(B,{title:"More content should go here",description:"Consider generating thumbnails showing how this feature can be used or mocks on how the feature will look like.",icon:Y.Z,iconColor:"info",vertical:!0,to:"/audienceengagement"})})]})}var K=(0,c.Z)(L);function Q(){var e=K();return(0,r.jsxs)("div",{className:e.section,children:[(0,r.jsx)(x.Z,{justify:"center",children:(0,r.jsxs)(m.Z,{xs:12,sm:12,md:8,children:[(0,r.jsx)("h2",{className:e.title,children:"About Audience Engagement"}),(0,r.jsxs)("h5",{className:e.description,children:[(0,r.jsx)("b",{children:"A futurisctic feature that should be described here in more detail! "}),"Otis should be able to automate responses to comments and messages, and also be able to schedule posts. Otis should be able to flag when MVP subscribers are being mentioned in comments and messages or when they require a response so you kleep them engaged More details to be added here ...."]})]})}),(0,r.jsx)("div",{children:(0,r.jsx)(B,{title:"More content should go here",description:"Consider generating thumbnails showing how this feature can be used or mocks on how the feature will look like.",icon:Y.Z,iconColor:"info",vertical:!0,to:"/audienceengagement"})})]})}var $=(0,c.Z)(L);function ee(){var e=$();return(0,r.jsxs)("div",{className:e.section,children:[(0,r.jsx)(x.Z,{justify:"center",children:(0,r.jsxs)(m.Z,{xs:12,sm:12,md:8,children:[(0,r.jsx)("h2",{className:e.title,children:"About Audience Engagement"}),(0,r.jsxs)("h5",{className:e.description,children:[(0,r.jsx)("b",{children:"A futurisctic feature that should be described here in more detail! "}),"Otis should be able to automate responses to comments and messages, and also be able to schedule posts. Otis should be able to flag when MVP subscribers are being mentioned in comments and messages or when they require a response so you kleep them engaged More details to be added here ...."]})]})}),(0,r.jsx)("div",{children:(0,r.jsx)(B,{title:"More content should go here",description:"Consider generating thumbnails showing how this feature can be used or mocks on how the feature will look like.",icon:Y.Z,iconColor:"info",vertical:!0,to:"/audienceengagement"})})]})}var ne=t(4051),te=t.n(ne),oe={whiteText:{color:"white"}};(0,c.Z)(oe);var ie,re=(ie={chatEngineWindow:{width:"100%",backgroundColor:"#fff"},chatWithMeButton:{cursor:"pointer",boxShadow:"0px 0px 16px 6px rgba(0, 0, 0, 0.33)",borderRadius:"50%",backgroundImage:"url(/img/otis-personal-assistent.png)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"140px",width:"100px",height:"100px"},avatarHello:{position:"absolute",left:"calc(-100% - 44px - 28px)",top:"calc(50% - 24px)",zIndex:"10000",boxShadow:"0px 0px 16px 6px rgba(0, 0, 0, 0.33)",padding:"12px 12px 12px 16px",borderRadius:"24px",backgroundColor:"#f9f0ff",color:"black"},supportWindow:{position:"fixed",bottom:"85px",right:"30px",width:"420px",height:"530px",maxWidth:"calc(100% - 48px)",maxHeight:"calc(100% - 100px)",backgroundColor:"white",borderRadius:"12px",border:"2px solid #7a39e0",overflow:"hidden",boxShadow:"0px 0px 16px 6px rgba(0, 0, 0, 0.33)"},emailFormWindow:{width:"100%",overflow:"hidden",transition:"all 0.5s ease",WebkitTransition:"all 0.5s ease",MozTransition:"all 0.5s ease"},stripe:{position:"relative",top:"-45px",width:"100%",height:"308px",backgroundColor:"#7a39e0",transform:"skewY(-12deg)"},topText:{position:"relative",width:"100%",top:"15%",color:"white",fontSize:"24px",fontWeight:"600"},emailInput:{width:"66%",textAlign:"center",outline:"none",padding:"12px",borderRadius:"12px",border:"2px solid #7a39e0"},bottomText:{position:"absolute",width:"100%",top:"60%",color:"#7a39e0",fontSize:"24px",fontWeight:"600"},loadingDiv:{position:"absolute",height:"100%",width:"100%",textAlign:"center",backgroundColor:"white"},loadingIcon:{color:"#7a39e0",position:"absolute",top:"calc(50% - 51px)",left:"calc(50% - 51px)",fontWeight:"600"}},(0,H.Z)(ie,"chatEngineWindow",{width:"100%",backgroundColor:"#fff"}),(0,H.Z)(ie,"transition3",{transition:"all 0.3s ease",webkitTransition:"all 0.3s ease",mozTransition:"all 0.3s ease"}),(0,H.Z)(ie,"transition5",{transition:"all 0.5s ease",webkitTransition:"all 0.5s ease",mozTransition:"all 0.5s ease"}),ie),ae=function(e){var n=(0,a.useState)(!1),t=n[0],o=n[1];return(0,r.jsxs)("div",{style:e.style,children:[(0,r.jsxs)("div",{style:(0,i.Z)({},re.avatarHello,{opacity:t&&e.visible?"1":"0"},re.transition3),children:["Hey it's Otis \ud83e\udd19",(0,r.jsx)("br",{}),"Chat with me"]}),(0,r.jsx)("div",{onMouseEnter:function(e){return o(!0)},onMouseLeave:function(e){return o(!1)},onClick:function(){e.onClick&&e.onClick()},style:(0,i.Z)({},re.chatWithMeButton,{border:t?"1px solid #f9f0ff":"4px solid #7a39e0"},{visibility:e.visible?"visible":"hidden"})})]})},se=(t(3454),t(7568)),le=t(9815),ce=t(6919),de=t(6447),pe=t(1496),ue=t(9661),he=t(8181),xe=t(2495),me=t(1152),ge=t(6307),fe=(0,c.Z)((function(e){return{userMessage:{background:"#42A5F5",color:"white",borderRadius:"20px",padding:"10px",alignSelf:"flex-end"},otherMessage:{background:"#E0E0E0",color:"black",borderRadius:"20px",padding:"10px",alignSelf:"flex-start"}}})),be=(0,pe.ZP)(ce.Z)((function(e){return{padding:e.theme.spacing(0)}}));function ve(e){var n=fe(),t=(0,a.useRef)(null),o=(0,a.useState)(!1),i=o[0],s=o[1],l=(0,a.useState)([{id:1,author:"Otis",message:"Hello, I can answer any quetions about me. Ask anything and I will tell you how I can help you in the context of social media management and content creation.",isUser:!1}]),c=l[0],d=l[1],p=(0,a.useState)(""),u=p[0],h=p[1],x=function(){var e=(0,se.Z)(te().mark((function e(n){var t;return te().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s(!0),e.next=4,m(u);case 4:t=e.sent,c&&(d((0,le.Z)(c).concat([{id:c.length+1,author:"You",message:u,isUser:!0},{id:c.length+2,author:"Otis",message:t,isUser:!1}])),h(""),s(!1));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function m(e){return g.apply(this,arguments)}function g(){return(g=(0,se.Z)(te().mark((function e(n){var t,o;return te().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.media-personal-assistant.com/api/v1/chat",{method:"POST",body:JSON.stringify({prompt:n}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){console.error("Error:",e)}));case 2:return t=e.sent,e.next=5,t.response;case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){t.current&&t.current.scrollTo(0,t.current.scrollHeight)}),[c]),(0,r.jsx)(ce.Z,{ref:t,padding:2,sx:{maxHeight:"530px",width:"100%",overflow:"scroll"},children:(0,r.jsxs)(de.Z,{children:[c.map((function(e){return(0,r.jsxs)(be,{children:[!e.isUser&&(0,r.jsx)(ue.Z,{alt:e.author,src:"/img/otis-personal-assistent.png"}),e.isUser&&(0,r.jsx)(ue.Z,{alt:e.author,src:""}),(0,r.jsx)(he.Z,{primary:e.author,secondary:e.message,style:{textAlign:e.isUser?"right":"left"},className:e.isUser?n.userMessage:n.otherMessage})]})})),(0,r.jsx)("form",{onSubmit:x,children:(0,r.jsxs)(ce.Z,{padding:1,sx:{display:"flex",alignItems:"flex-end"},children:[(0,r.jsx)(xe.Z,{disabled:i,fullWidth:!0,value:u,onChange:function(e){return h(e.target.value)},placeholder:"Hi Otis, can you help me grow my channels?",label:"Ask me what I can do for you",id:"input-with-sx",variant:"standard"}),(0,r.jsx)(me.Z,{disabled:i,type:"submit","aria-label":"send",children:(0,r.jsx)(ge.Z,{sx:{color:i?"color.inactive":"blue",mr:1,my:.5}})})]})})]})})}var ye=function(e){return(0,r.jsx)("div",{style:(0,i.Z)({},re.chatEngineWindow,{height:e.visible?"100%":"0px",zIndex:e.visible?"1000":"0"},re.transition5),children:(0,r.jsx)(ve,{style:(0,i.Z)({},re.chatEngineWindow)})})},je=function(e){var n=(0,a.useState)(null),t=n[0],o=(n[1],(0,a.useState)([])),s=o[0];o[1];return(0,r.jsx)("div",{className:"transition-5",style:(0,i.Z)({},re.supportWindow,{opacity:e.visible?"1":"0"}),children:(0,r.jsx)(ye,{visible:null===t&&null===s,user:"me",chat:s})})},we=function(e){var n=(0,a.useRef)(null);!function(e){(0,a.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&s(!1)}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e])}(n);var t=(0,a.useState)(!1),o=t[0],s=t[1];return(0,r.jsxs)("div",{ref:n,children:[(0,r.jsx)(je,{visible:o,style:(0,i.Z)({},e.style)}),(0,r.jsx)(ae,{onClick:function(){return s(!0)},style:(0,i.Z)({},e.style),visible:!o})]})},Ze=[],ke=(0,c.Z)(A);function Fe(e){var n,t,a,s,c=ke(),d=(0,k.useRouter)().query.feature,p=(0,o.Z)({},e);switch(d){case"audienceengagement":n="/img/audience-engagement.png",t="Audience Engagement",a=(0,r.jsx)(r.Fragment,{children:"Unlock the true potential of your online presence with Otis, the cutting-edge tool designed to revolutionize your social media engagement! Say goodbye to hours spent manually monitoring post comments and sifting through overwhelming engagement data. Our advanced AI-driven technology scans and analyzes every post, comment, and interaction, providing you with valuable insights into the sentiment surrounding your content."}),s=(0,r.jsx)(V,{});break;case"contentcollaboration":n="/img/content-collaboration.png",t="Content Collaboration",a=(0,r.jsx)(r.Fragment,{children:"Review and approve content before it goes live. Otis will help you to collaborate with your team and get content approved before it goes live. Comment on content and get notified when your content is approved. Provide feedback and get notified when your content is approved."}),s=(0,r.jsx)(J,{});break;case"mediaanalytics":n="/img/content-collaboration.png",t="Media Analytics",a=(0,r.jsx)(r.Fragment,{children:"Collect all your media KPIs from all your media accounts into one place and let Otis help you to analyze your media performance. Automatic insights and recommendations to help you to improve your media performance."}),s=(0,r.jsx)(Q,{});break;case"financepartner":n="/img/content-collaboration.png",t="Financial partner",a=(0,r.jsx)(r.Fragment,{children:"TBC."}),s=(0,r.jsx)(ee,{});break;case"marketplace":n="/img/content-collaboration.png",t="Marketplace",a=(0,r.jsx)(r.Fragment,{children:"TBC."}),s=(0,r.jsx)(ee,{});break;case"trendanalyser":n="/img/content-collaboration.png",t="Trend Analyser",a=(0,r.jsx)(r.Fragment,{children:"TBC."}),s=(0,r.jsx)(ee,{});break;case"thumbnailgenerator":n="/img/content-collaboration.png",t="Thumbnail Generator",a=(0,r.jsx)(r.Fragment,{children:"TBC."}),s=(0,r.jsx)(ee,{});break;case"ideasgenerator":n="/img/content-collaboration.png",t="Idea Generator",a=(0,r.jsx)(r.Fragment,{children:"TBC."}),s=(0,r.jsx)(ee,{});break;default:n="/img/otis-personal-assistent.png",t="Personal Assistent",a=(0,r.jsxs)(r.Fragment,{children:["All-in-one tool for social media creators! Whether you're still a small content creator, an influencer, or an internet opinion maker, Otis will help you manage your social medial like a pro.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Our AI personal assistent will allow you to automate all the important tasks, of being a content creator and scale your audience. Our AI tools will prowess will putallow you to create content faster, engage with your audience better, finance to grow your brand and analyze your content performance."]}),s=(0,r.jsx)(U,{})}return(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,(0,i.Z)({color:"transparent",routes:Ze,brand:"",rightLinks:(0,r.jsx)(g.Z,{}),leftLinks:(0,r.jsx)(C,{}),fixed:!0,changeColorOnScroll:{height:200,color:"primary"}},p)),(0,r.jsx)(N.Z,{filter:!0,responsive:!0,image:n,children:(0,r.jsx)("div",{className:l()(c.container),children:(0,r.jsx)(x.Z,{children:(0,r.jsxs)(m.Z,{xs:12,sm:12,md:6,children:[(0,r.jsx)("h2",{className:c.title,children:t}),(0,r.jsx)("h4",{children:a}),(0,r.jsx)("h4",{className:c.title,style:{textAlign:"right"},children:"CHAT with me and know more "}),(0,r.jsx)(we,{style:{zIndex:1e3,position:"fixed",top:"min(calc(0vh + 500px), calc(100vh - 190px))",right:"75px"}})]})})})}),(0,r.jsx)("div",{className:l()(c.main,c.mainRaised),children:(0,r.jsx)("div",{className:c.container,children:s})}),(0,r.jsx)(h.Z,{})]})}Fe.defaultProp={feature:"main"},Fe.propTypes={headerTitle:p().string,imageSrc:p().string,headerText:p().element,activeSection:p().element,feature:(0,d.oneOf)(["main","audienceengagement","contentcollaboration","mediaanalytics","financepartner","marketplace","trendanalyser","thumbnailgenerator","ideasgenerator"])}},5867:function(e,n,t){"use strict";var o=t(6042),i=t(9396),r=t(6547),a={defaultFontStyle:(0,i.Z)((0,o.Z)({},r.Df),{fontSize:"14px"}),defaultHeaderMargins:{marginTop:"20px",marginBottom:"10px"},quote:{padding:"10px 20px",margin:"0 0 20px",fontSize:"17.5px",borderLeft:"5px solid #eee"},quoteText:{margin:"0 0 10px",fontStyle:"italic"},quoteAuthor:{display:"block",fontSize:"80%",lineHeight:"1.42857143",color:"#777"},mutedText:{color:"#777"},primaryText:{color:r.lr},infoText:{color:r.bE},successText:{color:r.nq},warningText:{color:r.MA},dangerText:{color:r.E7},smallText:{fontSize:"65%",fontWeight:"400",lineHeight:"1",color:"#777"}};n.Z=a}},function(e){e.O(0,[595,273,46,593,774,888,179],(function(){return n=8505,e(e.s=n);var n}));var n=e.O();_N_E=n}]);