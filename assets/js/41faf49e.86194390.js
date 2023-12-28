"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[28352],{993:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>x});var r=c(85893),i=c(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{DictionaryLink:c,GlossaryTerm:s}=n;return c||t("DictionaryLink",!0),s||t("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"incf, decf"})," ",(0,r.jsx)(s,{term:"macro",children:(0,r.jsx)("i",{children:"Macro"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(c,{term:"incf",children:(0,r.jsx)("b",{children:"incf"})})," ",(0,r.jsx)(s,{term:"place",children:(0,r.jsx)("i",{children:"place"})})," [",(0,r.jsx)(n.em,{children:"delta-form"}),"] \u2192 new-value"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(c,{term:"decf",children:(0,r.jsx)("b",{children:"decf"})})," ",(0,r.jsx)(s,{term:"place",children:(0,r.jsx)("i",{children:"place"})})," [",(0,r.jsx)(n.em,{children:"delta-form"}),"] \u2192 new-value"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"place",children:(0,r.jsx)("i",{children:"place"})}),"\u2014a ",(0,r.jsx)(s,{term:"place",children:(0,r.jsx)("i",{children:"place"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"delta-form"}),"\u2014a ",(0,r.jsx)(s,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),"; evaluated to produce a ",(0,r.jsx)(n.em,{children:"delta"}),". The default is 1."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"delta"}),"\u2014a ",(0,r.jsx)(s,{term:"number",children:(0,r.jsx)("i",{children:"number"})})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"new-value"}),"\u2014a ",(0,r.jsx)(s,{term:"number",children:(0,r.jsx)("i",{children:"number"})})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(c,{term:"incf",children:(0,r.jsx)("b",{children:"incf"})})," and ",(0,r.jsx)(c,{term:"decf",children:(0,r.jsx)("b",{children:"decf"})})," are used for incrementing and decrementing the ",(0,r.jsx)(s,{term:"value",children:(0,r.jsx)("i",{children:"value"})})," of ",(0,r.jsx)(s,{term:"place",children:(0,r.jsx)("i",{children:"place"})}),", respectively."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"delta"})," is added to (in the case of ",(0,r.jsx)(c,{term:"incf",children:(0,r.jsx)("b",{children:"incf"})}),") or subtracted from (in the case of ",(0,r.jsx)(c,{term:"decf",children:(0,r.jsx)("b",{children:"decf"})}),") the number in ",(0,r.jsx)(s,{term:"place",children:(0,r.jsx)("i",{children:"place"})})," and the result is stored in ",(0,r.jsx)(s,{term:"place",children:(0,r.jsx)("i",{children:"place"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Any necessary type conversions are performed automatically."}),"\n",(0,r.jsxs)(n.p,{children:["For information about the ",(0,r.jsx)(s,{term:"evaluation",children:(0,r.jsx)("i",{children:"evaluation"})})," of ",(0,r.jsx)(s,{term:"subform",children:(0,r.jsx)("i",{children:"subforms"})})," of ",(0,r.jsx)(s,{term:"place",children:(0,r.jsx)("i",{children:"places"})}),", see Section 5.1.1.1 (Evaluation of Subforms to Places)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(setq n 0) \n(incf n) \u2192 1 \nn \u2192 1 \n(decf n 3) \u2192 -2 \nn \u2192 -2 \n(decf n -5) \u2192 3 \n(decf n) \u2192 2 \n(incf n 0.5) \u2192 2.5 \n(decf n) \u2192 1.5 \nn \u2192 1.5 \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"place",children:(0,r.jsx)("i",{children:"Place"})})," is modified."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(c,{term:"+",children:(0,r.jsx)("b",{children:"+"})}),", ",(0,r.jsx)(c,{term:"-",children:(0,r.jsx)("b",{children:"-"})}),", ",(0,r.jsx)(c,{term:"1+",children:(0,r.jsx)("b",{children:"1+"})}),", ",(0,r.jsx)(n.strong,{children:"1-"}),", ",(0,r.jsx)(c,{term:"setf",children:(0,r.jsx)("b",{children:"setf"})})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}function t(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"incf, decf"},a="incf, decf",o={id:"chap-12/bc-c-dictionary/incf_decf_macro",title:"incf, decf",description:"Expanded Reference: incf, decf",source:"@site/docs/chap-12/bc-c-dictionary/incf_decf_macro.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/incf_decf_macro",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/incf_decf_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/incf_decf_macro.md",tags:[],version:"current",frontMatter:{title:"incf, decf"},sidebar:"tutorialSidebar",previous:{title:"gcd",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/gcd_function"},next:{title:"integer-length",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/integer-length_function"}},h={},x=[{value:"Expanded Reference: incf, decf",id:"expanded-reference-incf-decf",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"incf-decf",children:"incf, decf"}),"\n","\n","\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-incf-decf",children:"Expanded Reference: incf, decf"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(incf, decf )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>t,a:()=>d});var r=c(67294);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);