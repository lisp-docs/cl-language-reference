"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[37605],{7294:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var r=c(85893),s=c(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"incf, decf"})," ",(0,r.jsx)(n.em,{children:"Macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"incf"})," ",(0,r.jsx)(n.em,{children:"place"})," [",(0,r.jsx)(n.em,{children:"delta-form"}),"] \u2192 new-value"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"decf"})," ",(0,r.jsx)(n.em,{children:"place"})," [",(0,r.jsx)(n.em,{children:"delta-form"}),"] \u2192 new-value"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"place"}),"\u2014a ",(0,r.jsx)(n.em,{children:"place"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"delta-form"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"; evaluated to produce a ",(0,r.jsx)(n.em,{children:"delta"}),". The default is 1."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"delta"}),"\u2014a ",(0,r.jsx)(n.em,{children:"number"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"new-value"}),"\u2014a ",(0,r.jsx)(n.em,{children:"number"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"incf"})," and ",(0,r.jsx)(n.strong,{children:"decf"})," are used for incrementing and decrementing the ",(0,r.jsx)(n.em,{children:"value"})," of ",(0,r.jsx)(n.em,{children:"place"}),", respectively."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"delta"})," is added to (in the case of ",(0,r.jsx)(n.strong,{children:"incf"}),") or subtracted from (in the case of ",(0,r.jsx)(n.strong,{children:"decf"}),") the number in ",(0,r.jsx)(n.em,{children:"place"})," and the result is stored in ",(0,r.jsx)(n.em,{children:"place"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Any necessary type conversions are performed automatically."}),"\n",(0,r.jsxs)(n.p,{children:["For information about the ",(0,r.jsx)(n.em,{children:"evaluation"})," of ",(0,r.jsx)(n.em,{children:"subforms"})," of ",(0,r.jsx)(n.em,{children:"places"}),", see Section 5.1.1.1 (Evaluation of Subforms to Places)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"\n(setq n 0) \n(incf n) \u2192 1 \nn \u2192 1 \n(decf n 3) \u2192 -2 \nn \u2192 -2 \n(decf n -5) \u2192 3 \n(decf n) \u2192 2 \n(incf n 0.5) \u2192 2.5 \n(decf n) \u2192 1.5 \nn \u2192 1.5 \n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Place"})," is modified."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"+"}),", ",(0,r.jsx)(n.strong,{children:"-"}),", ",(0,r.jsx)(n.strong,{children:"1+"}),", ",(0,r.jsx)(n.strong,{children:"1-"}),", ",(0,r.jsx)(n.strong,{children:"setf"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const t={},l="incf, decf",a={id:"chap-12/bc-c-dictionary/incf",title:"incf, decf",description:"Expanded Reference: incf, decf",source:"@site/docs/chap-12/bc-c-dictionary/incf.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/incf",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/incf",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/incf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gcd",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/gcd"},next:{title:"integer",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/integer"}},o={},h=[{value:"Expanded Reference: incf, decf",id:"expanded-reference-incf-decf",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"incf-decf",children:"incf, decf"}),"\n","\n","\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-incf-decf",children:"Expanded Reference: incf, decf"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(incf, decf )\n"})})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>t,a:()=>d});var r=c(67294);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);