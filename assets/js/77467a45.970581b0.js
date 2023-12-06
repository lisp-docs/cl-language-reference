"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[67232],{50776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var i=t(85893),r=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"get-universal-time, get-decoded-time"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"get-universal-time"})," \u27e8",(0,i.jsx)(n.em,{children:"no arguments"}),"\u27e9 \u2192 universal-time*"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"get-decoded-time"})," ",(0,i.jsx)(n.em,{children:"hno argumentsi"})]}),"\n",(0,i.jsx)(n.p,{children:"\u2192 second, minute, hour, date, month, year, day, daylight-p, zone"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"universal-time"}),"\u2014a ",(0,i.jsx)(n.em,{children:"universal time"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"second"}),", ",(0,i.jsx)(n.em,{children:"minute"}),", ",(0,i.jsx)(n.em,{children:"hour"}),", ",(0,i.jsx)(n.em,{children:"date"}),", ",(0,i.jsx)(n.em,{children:"month"}),", ",(0,i.jsx)(n.em,{children:"year"}),", ",(0,i.jsx)(n.em,{children:"day"}),", ",(0,i.jsx)(n.em,{children:"daylight-p"}),", ",(0,i.jsx)(n.em,{children:"zone"}),"\u2014a ",(0,i.jsx)(n.em,{children:"decoded time"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"get-universal-time"})," returns the current time, represented as a ",(0,i.jsx)(n.em,{children:"universal time"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"get-decoded-time"})," returns the current time, represented as a ",(0,i.jsx)(n.em,{children:"decoded time"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:" \n\n;; At noon on July 4, 1976 in Eastern Daylight Time. \n\n(get-decoded-time) \u2192 0, 0, 12, 4, 7, 1976, 6, *true*, 5 \n\n;; At exactly the same instant. \n\n(get-universal-time) \u2192 2414332800 \n\n;; Exactly five minutes later. \n\n(get-universal-time) \u2192 2414333100 \n\n;; The difference is 300 seconds (five minutes) \n\n(- \\* \\*\\*) \u2192 300 \n\n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:["The time of day (",(0,i.jsx)(n.em,{children:"i.e."}),", the passage of time), the system clock\u2019s ability to keep accurate time, and the accuracy of the system clock\u2019s initial setting."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["An error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"error"})," might be signaled if the current time cannot be determined."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"decode-universal-time"}),", ",(0,i.jsx)(n.strong,{children:"encode-universal-time"}),", Section 25.1.4 (Time)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["(get-decoded-time) ",(0,i.jsx)(n.em,{children:"\u2261"})," (decode-universal-time (get-universal-time))"]}),"\n",(0,i.jsxs)(n.p,{children:["No ",(0,i.jsx)(n.em,{children:"implementation"})," is required to have a way to verify that the time returned is correct. However, if an ",(0,i.jsx)(n.em,{children:"implementation"})," provides a validity check (",(0,i.jsx)(n.em,{children:"e.g."}),", the failure to have properly initialized the system clock can be reliably detected) and that validity check fails, the ",(0,i.jsx)(n.em,{children:"implementation"})," is strongly encouraged (but not required) to signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"error"})," (rather than, for example, returning a known-to-be-wrong value) that is ",(0,i.jsx)(n.em,{children:"correctable"})," by allowing the user to interactively set the correct time."]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const d={},a="get-universal-time, get-decoded-time",l={id:"chap-25/cf-c-dictionary/getuniversaltime",title:"get-universal-time, get-decoded-time",description:"Expanded Reference: get-universal-time, get-decoded-time",source:"@site/docs/chap-25/cf-c-dictionary/getuniversaltime.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/getuniversaltime",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/getuniversaltime",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/getuniversaltime.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get-internal-run-time",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/getinternalruntime"},next:{title:"inspect",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/inspect"}},o={},m=[{value:"Expanded Reference: get-universal-time, get-decoded-time",id:"expanded-reference-get-universal-time-get-decoded-time",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"get-universal-time-get-decoded-time",children:"get-universal-time, get-decoded-time"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-get-universal-time-get-decoded-time",children:"Expanded Reference: get-universal-time, get-decoded-time"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(get-universal-time, get-decoded-time )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var i=t(67294);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);