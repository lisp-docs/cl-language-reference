"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[62102],{41079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var i=n(85893),r=n(11151);function d(e){const t={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"get-universal-time, get-decoded-time"})," ",(0,i.jsx)(n,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{styled:!0,term:"get-universal-time",children:(0,i.jsx)("b",{children:"get-universal-time"})})," ",(0,i.jsx)(t.em,{children:"\u27e8no arguments\u27e9 \u2192 universal-time"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{styled:!0,term:"get-decoded-time",children:(0,i.jsx)("b",{children:"get-decoded-time"})})," ",(0,i.jsx)(t.em,{children:"\u27e8no arguments\u27e9"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"\u2192 second, minute, hour, date, month, year, day, daylight-p, zone"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"universal-time"}),"\u2014a ",(0,i.jsx)(t.em,{children:"universal time"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"second"}),", ",(0,i.jsx)(t.em,{children:"minute"}),", ",(0,i.jsx)(t.em,{children:"hour"}),", ",(0,i.jsx)(t.em,{children:"date"}),", ",(0,i.jsx)(t.em,{children:"month"}),", ",(0,i.jsx)(t.em,{children:"year"}),", ",(0,i.jsx)(t.em,{children:"day"}),", ",(0,i.jsx)(t.em,{children:"daylight-p"}),", ",(0,i.jsx)(t.em,{children:"zone"}),"\u2014a ",(0,i.jsx)(t.em,{children:"decoded time"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{styled:!0,term:"get-universal-time",children:(0,i.jsx)("b",{children:"get-universal-time"})})," returns the current time, represented as a ",(0,i.jsx)(t.em,{children:"universal time"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{styled:!0,term:"get-decoded-time",children:(0,i.jsx)("b",{children:"get-decoded-time"})})," returns the current time, represented as a ",(0,i.jsx)(t.em,{children:"decoded time"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lisp",children:"\n;; At noon on July 4, 1976 in Eastern Daylight Time. \n(get-decoded-time) \u2192 0, 0, 12, 4, 7, 1976, 6, *true*, 5 \n;; At exactly the same instant. \n(get-universal-time) \u2192 2414332800 \n;; Exactly five minutes later. \n(get-universal-time) \u2192 2414333100 \n;; The difference is 300 seconds (five minutes) \n(- \\* \\*\\*) \u2192 300 \n\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(t.p,{children:["The time of day (",(0,i.jsx)(t.em,{children:"i.e."}),", the passage of time), the system clock\u2019s ability to keep accurate time, and the accuracy of the system clock\u2019s initial setting."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(t.p,{children:["An error of ",(0,i.jsx)(n,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{styled:!0,term:"error",children:(0,i.jsx)("b",{children:"error"})})," might be signaled if the current time cannot be determined."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{styled:!0,term:"decode-universal-time",children:(0,i.jsx)("b",{children:"decode-universal-time"})}),", ",(0,i.jsx)(n,{styled:!0,term:"encode-universal-time",children:(0,i.jsx)("b",{children:"encode-universal-time"})}),", Section 25.1.4 (Time)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(t.p,{children:["(get-decoded-time) ",(0,i.jsx)(t.em,{children:"\u2261"})," (decode-universal-time (get-universal-time))"]}),"\n",(0,i.jsxs)(t.p,{children:["No ",(0,i.jsx)(n,{styled:!0,term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," is required to have a way to verify that the time returned is correct. However, if an ",(0,i.jsx)(n,{styled:!0,term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," provides a validity check (",(0,i.jsx)(t.em,{children:"e.g."}),", the failure to have properly initialized the system clock can be reliably detected) and that validity check fails, the ",(0,i.jsx)(n,{styled:!0,term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," is strongly encouraged (but not required) to signal an error of ",(0,i.jsx)(n,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{styled:!0,term:"error",children:(0,i.jsx)("b",{children:"error"})})," (rather than, for example, returning a known-to-be-wrong value) that is ",(0,i.jsx)(n,{styled:!0,term:"correctable",children:(0,i.jsx)("i",{children:"correctable"})})," by allowing the user to interactively set the correct time."]})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}const s={title:"get-universal-time, get-decoded-time"},l="get-universal-time, get-decoded-time",o={id:"chap-25/cf-c-dictionary/get-universal-time_get-decoded-time_function",title:"get-universal-time, get-decoded-time",description:"Expanded Reference: get-universal-time, get-decoded-time",source:"@site/docs/chap-25/cf-c-dictionary/get-universal-time_get-decoded-time_function.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/get-universal-time_get-decoded-time_function",permalink:"/cl-language-reference/chap-25/cf-c-dictionary/get-universal-time_get-decoded-time_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/get-universal-time_get-decoded-time_function.md",tags:[],version:"current",frontMatter:{title:"get-universal-time, get-decoded-time"},sidebar:"tutorialSidebar",previous:{title:"get-internal-run-time",permalink:"/cl-language-reference/chap-25/cf-c-dictionary/get-internal-run-time_function"},next:{title:"inspect",permalink:"/cl-language-reference/chap-25/cf-c-dictionary/inspect_function"}},a={},m=[{value:"Expanded Reference: get-universal-time, get-decoded-time",id:"expanded-reference-get-universal-time-get-decoded-time",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"get-universal-time-get-decoded-time",children:"get-universal-time, get-decoded-time"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(t.h2,{id:"expanded-reference-get-universal-time-get-decoded-time",children:"Expanded Reference: get-universal-time, get-decoded-time"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lisp",children:"(get-universal-time, get-decoded-time )\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var i=n(67294);const r={},d=i.createContext(r);function c(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);