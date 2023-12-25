"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[19274],{41152:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var t=s(85893),r=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"sleep"})," ",(0,t.jsx)(s,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{styled:!0,term:"sleep",children:(0,t.jsx)("b",{children:"sleep"})})," ",(0,t.jsx)(n.em,{children:"seconds \u2192"})," ",(0,t.jsx)(s,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"seconds"}),"\u2014a non-negative ",(0,t.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Causes execution to cease and become dormant for approximately the seconds of real time indicated by ",(0,t.jsx)(n.em,{children:"seconds"}),", whereupon execution is resumed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(sleep 1) \u2192 NIL \n;; Actually, since SLEEP is permitted to use approximate timing, \n;; this might not always yield true, but it will often enough that \n;; we felt it to be a productive example of the intent. \n(let ((then (get-universal-time)) \n      (now (progn (sleep 10) (get-universal-time)))) \n  (>= (- now then) 10)) \n\u2192 true \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsx)(n.p,{children:"Causes processing to pause."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsx)(n.p,{children:"The granularity of the scheduler."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["Should signal an error of ",(0,t.jsx)(s,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(s,{styled:!0,term:"type-error",children:(0,t.jsx)("b",{children:"type-error"})})," if ",(0,t.jsx)(n.em,{children:"seconds"})," is not a non-negative ",(0,t.jsx)(n.em,{children:"real"}),"."]})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const l={title:"sleep"},o="sleep",a={id:"chap-25/cf-c-dictionary/sleep_function",title:"sleep",description:"Expanded Reference: sleep",source:"@site/docs/chap-25/cf-c-dictionary/sleep_function.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/sleep_function",permalink:"/cl-language-reference/chap-25/cf-c-dictionary/sleep_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/sleep_function.md",tags:[],version:"current",frontMatter:{title:"sleep"},sidebar:"tutorialSidebar",previous:{title:"/, //, ///",permalink:"/cl-language-reference/chap-25/cf-c-dictionary/slash_slashslash_slashslashslash_variable"},next:{title:"software-type, software-version",permalink:"/cl-language-reference/chap-25/cf-c-dictionary/software-type_software-version_function"}},d={},p=[{value:"Expanded Reference: sleep",id:"expanded-reference-sleep",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sleep",children:"sleep"}),"\n","\n","\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-sleep",children:"Expanded Reference: sleep"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(sleep )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(67294);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);