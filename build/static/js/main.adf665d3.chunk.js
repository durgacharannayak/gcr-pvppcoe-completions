(this["webpackJsonpgcrf-sstc"]=this["webpackJsonpgcrf-sstc"]||[]).push([[0],{105:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),i=a.n(c),o=(a(86),a(87),a(150)),s=a(157),l=a(65),d=a.n(l),j=a(49),h=a.n(j),b=a(158),p=a(66),g=a.n(p),u=a(154),m=a(48),O=a.n(m),f=(a(105),a(2));function x(e,t){var a=["\u274c","\u274c","\u274c","\u274c"];4===e&&(a[0]=a[1]=a[2]=a[3]="\u2714\ufe0f"),3===e&&(a[0]=a[1]=a[2]="\u2714\ufe0f"),2===e?a[0]=a[1]="\u2714\ufe0f":1===e&&(a[0]="\u2714\ufe0f"),i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)("div",{className:"status-div",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("strong",{children:t.name})}),Object(f.jsx)("li",{children:Object(f.jsx)("strong",{children:t.college})}),Object(f.jsxs)("li",{children:[a[3]," ",Object(f.jsx)("span",{children:"Ultimate Milestone"})]}),Object(f.jsxs)("li",{children:[a[2]," ",Object(f.jsx)("span",{children:"Third Milestone"})]}),Object(f.jsxs)("li",{children:[a[1]," ",Object(f.jsx)("span",{children:"Second Milestone"})]}),Object(f.jsxs)("li",{children:[a[0]," ",Object(f.jsx)("span",{children:"First Milestone"})]}),Object(f.jsxs)("li",{children:["\u2611\ufe0f ",Object(f.jsx)("strong",{children:t.quest})," Quests Completed"]}),Object(f.jsxs)("li",{children:["\u2611\ufe0f ",Object(f.jsx)("strong",{children:t.skillBadge})," Skill Badges Completed"]}),Object(f.jsx)("li",{children:Object(f.jsxs)("strong",{children:["You can now create your badge ",Object(f.jsx)("a",{href:"https://bit.ly/gcr-badge",style:{textDecoration:"none",backgroundColor:"#EA4335",color:"#fff"},children:"\xa0here\xa0"}),"."]})})]})})}),document.getElementById("status-div"))}function v(e){var t=function(e){var t={first:!1,second:!1,third:!1,fourth:!1,profile:!0,quest:0,skillBadge:0,name:"",college:"",setValue:function(e,t){for(;e.length;)this[e.pop()]=t}};if("All Good"!==e.EnrolmentStatus)return alert("Your Public Profile URL is wrong! Please contact facilitators to correct it"),t.profile=!1,t;var a=e.Quests.$numberInt,r=e.SkillBadges.$numberInt;t.quest=a,t.skillBadge=r,t.name=e.StudentName,t.college=e.Institution,"30"===a&&"15"===r?t.setValue(["first","second","third","fourth"],!0):a>=24&&r>=12?t.setValue(["first","second","third"],!0):a>=16&&r>=8?t.setValue(["first","second"],!0):a>=8&&r>=4?t.setValue(["first"],!0):alert("You've not Achieved any Milestone!");return t}(e[0]),a=t.first,r=t.second,n=t.third,c=t.fourth;c?x(4,t):n&&!1===c?x(3,t):r&&!1===n&&!1===c?x(2,t):a&&!1===r&&!1===n&&!1===c?x(1,t):a&&r&&n&&c||x(0,t)}a(63).config();var E=Object(o.a)((function(e){return{button:{margin:e.spacing(1),padding:e.spacing(1.8)},margin:{margin:e.spacing(2),display:"flex",justifyContent:"center",width:"100%",flexWrap:"wrap",alignItems:"center"},form:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"column"},inputIcon:{marginRight:e.spacing(1)},containerGrid:{margin:e.spacing(5)}}}));function _(){var e=document.querySelector("#public-url").value,t="".concat("https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/gcr-pvppcoe-qrxai/service/gcrpvppcoe/incoming_webhook/publicURL?url=").concat(e);O.a.get(t).then((function(e){var t=e.data;1===t.length?v(t):alert("Enter valid Public Profile URL or you're not registered under PVPPCOE")}))}function A(){var e=document.querySelector("#user-email").value,t="".concat("https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/gcr-pvppcoe-qrxai/service/gcrpvppcoe/incoming_webhook/email?email=").concat(e);O.a.get(t).then((function(e){var t=e.data;1===t.length?v(t):alert("Enter valid Email or you're not registered under PVPPCOE")}))}var P=function(){var e=E();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:e.form,children:[Object(f.jsxs)("div",{className:e.margin,children:[Object(f.jsx)(s.a,{InputProps:{startAdornment:Object(f.jsx)(u.a,{position:"start",children:Object(f.jsx)(d.a,{})})},id:"public-url",width:"100%",label:"Public Profile URL",variant:"outlined"}),Object(f.jsx)(b.a,{variant:"outlined",color:"primary",className:e.button,startIcon:Object(f.jsx)(h.a,{}),onClick:_,children:"Check Status with URL"})]}),Object(f.jsxs)("div",{className:e.margin,children:[Object(f.jsx)(s.a,{InputProps:{startAdornment:Object(f.jsx)(u.a,{position:"start",children:Object(f.jsx)(g.a,{})})},id:"user-email",width:"100%",label:"Registered Email",variant:"outlined"}),Object(f.jsx)(b.a,{variant:"outlined",color:"secondary",className:e.button,startIcon:Object(f.jsx)(h.a,{}),onClick:A,children:"Check Status with Email"})]})]}),Object(f.jsx)("div",{id:"status-div"})]})},k=a(50),w=(a(116),a(155)),y=a(156),S=a(119),R=a(52),I=a.n(R),C=Object(o.a)((function(e){return{root:{margin:0,padding:0},menuButton:{marginRight:e.spacing(2)},title:{fontFamily:"Google Sans",fontWeight:700},loginButton:{marginLeft:"auto",padding:e.spacing(1)},appBar:{backgroundColor:"#fff",color:"#EA4335"}}}));function N(){var e=C();return Object(f.jsx)("div",{className:e.root,children:Object(f.jsx)(w.a,{className:e.appBar,position:"fixed",children:Object(f.jsxs)(y.a,{children:[Object(f.jsx)("div",{children:Object(f.jsx)(S.a,{variant:"h6",className:e.title,children:"GoogleCloudReady Facilitator Program"})}),Object(f.jsxs)("div",{className:e.loginButton,color:"inherit",children:[Object(f.jsx)(b.a,{variant:"outlined",color:"secondary",target:"_blank",rel:"noopener noreferrer",href:"https://events.withgoogle.com/googlecloudready-facilitator-program",startIcon:Object(f.jsx)(I.a,{}),children:"Website"}),Object(f.jsx)(b.a,{variant:"outlined",color:"primary",target:"_blank",rel:"noopener noreferrer",href:"https://t.me/gcrpvppcoe",startIcon:Object(f.jsx)(I.a,{}),children:"Telegram"})]})]})})})}var T=a(69),B=a.n(T),D=a(70),F=a.n(D),L=a(71),G=a.n(L),M=a(72),V=a.n(M),U=a(68),q=a.n(U);function W(){return Object(f.jsxs)("div",{className:"about-div",children:[Object(f.jsxs)("p",{className:"info badge-info",children:[Object(f.jsx)(q.a,{fontSize:"large",style:{color:"#EA4335"}}),Object(f.jsxs)("p",{children:["You can Create a badge to share your progress on Social Networks"," ",Object(f.jsxs)("strong",{children:[Object(f.jsx)("a",{href:"https://bit.ly/gcr-badge",style:{textDecoration:"none",backgroundColor:"#EA4335",color:"#fff"},children:"\xa0here\xa0"}),"."]})]})]}),Object(f.jsxs)("p",{className:"info",children:["This website is only for students enrolled in Google Cloud Ready Facilitator Program under Padmabhushan Vasantdada Patil Pratishthan's College of Engineering.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"If you find any error in the result, please contact the Facilitators.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"This project is not endorsed and/or supported by Google, the corporation.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Special thanks to ",Object(f.jsx)("a",{href:"https://www.linkedin.com/in/ashishchawda/",children:"Ashish Chawda "}),"for helping the PVPPCOE Facilitators team in building the website."]}),Object(f.jsxs)("p",{className:"credit",children:[Object(f.jsx)("strong",{children:"</>"})," with \u2764\ufe0f by \xa0",Object(f.jsx)("a",{rel:"noreferrer noopener",target:"_blank",href:"https://www.linkedin.com/in/durgacharan-nayak/",style:{textDecoration:"none",color:"#EA4335"},children:"Durgacharan Nayak"})]}),Object(f.jsxs)("p",{className:"social",children:[Object(f.jsx)("a",{rel:"noreferrer noopener",className:"social-link github",target:"_blank",href:"https://github.com/durgacharannayak",children:Object(f.jsx)(B.a,{className:"social-link-github",fontSize:"large"})}),Object(f.jsx)("a",{rel:"noreferrer noopener",className:"social-link linkedin",target:"_blank",href:"https://www.linkedin.com/in/durgacharan-nayak/",children:Object(f.jsx)(F.a,{className:"social-link-linkedin",fontSize:"large"})}),Object(f.jsx)("a",{rel:"noreferrer noopener",className:"social-link twitter",target:"_blank",href:"https://twitter.com/DurgacharanNa12",children:Object(f.jsx)(G.a,{className:"social-link-twitter",fontSize:"large"})}),Object(f.jsx)("a",{rel:"noreferrer noopener",className:"social-link instagram",target:"_blank",href:"https://www.instagram.com/durgacharannayak",children:Object(f.jsx)(V.a,{className:"social-link-instagram",fontSize:"large"})})]})]})}var z=a.p+"static/media/crf21-main-logo.e2742edf.png";a(63).config(),k.a.initializeApp({apiKey:"AIzaSyC6IlVLmf8Z7QZjeymgEy5O4lhC0Ws14GA",authDomain:"gcrcloud-c9a40.firebaseapp.com",projectId:"gcrcloud-c9a40",storageBucket:"gcrcloud-c9a40.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyC6IlVLmf8Z7QZjeymgEy5O4lhC0Ws14GA",REACT_APP_FIREBASE_APP_ID:"1:17308322636:web:72d893c8775e80808b1de9",REACT_APP_FIREBASE_AUTH_DOMAIN:"gcrcloud-c9a40.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-XLFRLVXRDL",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"17308322636",REACT_APP_FIREBASE_PROJECT_ID:"gcrcloud-c9a40",REACT_APP_FIREBASE_STORAGE_BUCKET:"gcrcloud-c9a40.appspot.com",REACT_APP_MONGODB_API_EMAIL:"https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/gcr-pvppcoe-qrxai/service/gcrpvppcoe/incoming_webhook/email?email=",REACT_APP_MONGODB_API_URL:"https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/gcr-pvppcoe-qrxai/service/gcrpvppcoe/incoming_webhook/publicURL?url="}).REACT_APP_FIREBASE_SENDER_ID,appId:"1:17308322636:web:72d893c8775e80808b1de9",measurementId:"G-XLFRLVXRDL"});var K=k.a.analytics();function Y(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(N,{}),Object(f.jsx)("div",{style:{display:"flex",width:"100%",flexWrap:"wrap",justifyContent:"center",margin:"30px 0",marginTop:"90px"},children:Object(f.jsx)("img",{alt:"Google Cloud Ready Facilitator Program Logo",src:z,width:"30%",height:"auto"})}),Object(f.jsx)("section",{children:Object(f.jsx)(P,{})}),Object(f.jsx)(W,{}),K.logEvent("Page Served")]})}i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(Y,{})}),document.getElementById("root"))},86:function(e,t,a){},87:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.adf665d3.chunk.js.map