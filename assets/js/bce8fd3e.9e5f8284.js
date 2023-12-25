"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[23846],{57266:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=r(85893),s=r(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"restart-name"})," ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"restart-name",children:(0,t.jsx)("b",{children:"restart-name"})})," ",(0,t.jsx)(n.em,{children:"restart \u2192 name"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"restart",children:(0,t.jsx)("i",{children:"restart"})}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"restart",children:(0,t.jsx)("i",{children:"restart"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the name of the ",(0,t.jsx)(r,{styled:!0,term:"restart",children:(0,t.jsx)("i",{children:"restart"})}),", or ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," if the ",(0,t.jsx)(r,{styled:!0,term:"restart",children:(0,t.jsx)("i",{children:"restart"})})," is not named."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'(restart-case \n    (loop for restart in (compute-restarts) \n\t  collect (restart-name restart)) \n  (case1 () :report "Return 1." 1) \n  (nil () :report "Return 2." 2) \n  (case3 () :report "Return 3." 3) \n  (case1 () :report "Return 4." 4)) \n\u2192 (CASE1 NIL CASE3 CASE1 ABORT) \n;; In the example above the restart named ABORT was not created \n;; explicitly, but was implicitly supplied by the system. \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"compute-restarts find-restart"})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}const i={title:"restart-name"},l="restart-name",o={id:"chap-9/j-c-dictionary/restart-name_function",title:"restart-name",description:"Expanded Reference: restart-name",source:"@site/docs/chap-9/j-c-dictionary/restart-name_function.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/restart-name_function",permalink:"/cl-language-reference/chap-9/j-c-dictionary/restart-name_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/restart-name_function.md",tags:[],version:"current",frontMatter:{title:"restart-name"},sidebar:"tutorialSidebar",previous:{title:"restart-case",permalink:"/cl-language-reference/chap-9/j-c-dictionary/restart-case_macro"},next:{title:"restart",permalink:"/cl-language-reference/chap-9/j-c-dictionary/restart_system-class"}},d={},p=[{value:"Expanded Reference: restart-name",id:"expanded-reference-restart-name",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"restart-name",children:"restart-name"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-restart-name",children:"Expanded Reference: restart-name"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(restart-name )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var t=r(67294);const s={},a=t.createContext(s);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);