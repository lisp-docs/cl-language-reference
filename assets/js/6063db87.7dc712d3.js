"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[6734],{7473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var r=t(85893),i=t(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"time"})," ",(0,r.jsx)(n.em,{children:"Macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"time"})," ",(0,r.jsx)(n.em,{children:"form \u2192 {result}"}),"*"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"form"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"; evaluated as described below."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"results"}),"\u2014the ",(0,r.jsx)(n.em,{children:"values"})," returned by the ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"time"})," evaluates ",(0,r.jsx)(n.em,{children:"form"})," in the current ",(0,r.jsx)(n.em,{children:"environment"})," (lexical and dynamic). A call to ",(0,r.jsx)(n.strong,{children:"time"})," can be compiled."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"time"})," prints various timing data and other information to ",(0,r.jsx)(n.em,{children:"trace output"}),". The nature and format of the printed information is ",(0,r.jsx)(n.em,{children:"implementation-defined"}),". Implementations are encouraged to provide such information as elapsed real time, machine run time, and storage management statistics."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:"The accuracy of the results depends, among other things, on the accuracy of the corresponding functions provided by the underlying operating system."}),"\n",(0,r.jsxs)(n.p,{children:["The magnitude of the results may depend on the hardware, the operating system, the lisp implementation, and the state of the global environment. Some specific issues which frequently affect the outcome are hardware speed, nature of the scheduler (if any), number of competing processes (if any), system paging, whether the call is interpreted or compiled, whether functions called are compiled, the kind of garbage collector involved and whether it runs, whether internal data structures (e.g., hash tables) are implicitly reorganized, ",(0,r.jsx)(n.em,{children:"etc."})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"get-internal-real-time"}),", ",(0,r.jsx)(n.strong,{children:"get-internal-run-time"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsx)(n.p,{children:"In general, these timings are not guaranteed to be reliable enough for marketing comparisons. Their value is primarily heuristic, for tuning purposes."}),"\n",(0,r.jsxs)(n.p,{children:["For useful background information on the complicated issues involved in interpreting timing results, see ",(0,r.jsx)(n.em,{children:"Performance and Evaluation of Lisp Programs"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const a={},o="time",d={id:"chap-25/cf-c-dictionary/time",title:"time",description:"Expanded Reference: time",source:"@site/docs/chap-25/cf-c-dictionary/time.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/time",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/time",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/time.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"step",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/step"},next:{title:"trace, untrace",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/trace"}},l={},h=[{value:"Expanded Reference: time",id:"expanded-reference-time",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"time",children:"time"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-time",children:"Expanded Reference: time"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(time )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var r=t(67294);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);