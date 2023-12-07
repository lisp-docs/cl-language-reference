"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[70095],{97128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=t(85893),s=t(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"logtest"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"logtest"})," ",(0,r.jsx)(n.em,{children:"integer-1 integer-2 \u2192 generalized-boolean"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"integer-1"}),"\u2014an ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"integer-2"}),"\u2014an ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns ",(0,r.jsx)(n.em,{children:"true"})," if any of the bits designated by the 1\u2019s in ",(0,r.jsx)(n.em,{children:"integer-1"})," is 1 in ",(0,r.jsx)(n.em,{children:"integer-2"}),"; otherwise it is ",(0,r.jsx)(n.em,{children:"false"}),". ",(0,r.jsx)(n.em,{children:"integer-1"})," and ",(0,r.jsx)(n.em,{children:"integer-2"})," are treated as if they were binary."]}),"\n",(0,r.jsxs)(n.p,{children:["Negative ",(0,r.jsx)(n.em,{children:"integer-1"})," and ",(0,r.jsx)(n.em,{children:"integer-2"})," are treated as if they were represented in two\u2019s-complement binary. ",(0,r.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"\n(logtest 1 7) \u2192 true \n(logtest 1 2) \u2192 false \n\n\n\n(logtest -2 -1) \u2192 true \n(logtest 0 -1) \u2192 false \n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"integer-1"})," is not an ",(0,r.jsx)(n.em,{children:"integer"})," . Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"integer-2"})," is not an ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["(logtest ",(0,r.jsx)(n.em,{children:"x y"}),") ",(0,r.jsx)(n.em,{children:"\u2261"})," (not (zerop (logand ",(0,r.jsx)(n.em,{children:"x y"}),")))"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const l={},o="logtest",d={id:"chap-12/bc-c-dictionary/logtest",title:"logtest",description:"Expanded Reference: logtest",source:"@site/docs/chap-12/bc-c-dictionary/logtest.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/logtest",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/logtest",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/logtest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"logcount",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/logcount"},next:{title:"make-random-state",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/makerandomstate"}},a={},h=[{value:"Expanded Reference: logtest",id:"expanded-reference-logtest",level:2}];function g(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"logtest",children:"logtest"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-logtest",children:"Expanded Reference: logtest"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(logtest )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var r=t(67294);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);