"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[86412],{80493:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var t=s(85893),r=s(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"setf, psetf"})," ",(0,t.jsx)(s,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"Macro"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{styled:!0,term:"setf",children:(0,t.jsx)("b",{children:"setf"})})," ",(0,t.jsx)(n.em,{children:"{#pair}"}),"* ",(0,t.jsx)(n.em,{children:"! {result}"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{styled:!0,term:"psetf",children:(0,t.jsx)("b",{children:"psetf"})})," ",(0,t.jsx)(n.em,{children:"{#pair}"}),"* ",(0,t.jsx)(n.em,{children:"!"})," ",(0,t.jsx)(s,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"pair::"}),"=",(0,t.jsx)(n.em,{children:"place newvalue"})]}),"\n",(0,t.jsx)(n.p,{children:"Data and Control"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"setf, psetf"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{styled:!0,term:"place",children:(0,t.jsx)("i",{children:"place"})}),"\u2014a ",(0,t.jsx)(s,{styled:!0,term:"place",children:(0,t.jsx)("i",{children:"place"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"newvalue"}),"\u2014a ",(0,t.jsx)(s,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"results"}),"\u2014the ",(0,t.jsx)(n.em,{children:"multiple values"}),(0,t.jsx)("sub",{children:"2"})," returned by the storing form for the last ",(0,t.jsx)(s,{styled:!0,term:"place",children:(0,t.jsx)("i",{children:"place"})}),", or ",(0,t.jsx)(s,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," if there are no ",(0,t.jsx)(n.em,{children:"pairs"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{styled:!0,term:"setf",children:(0,t.jsx)("b",{children:"setf"})})," changes the ",(0,t.jsx)(s,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"value"})})," of ",(0,t.jsx)(s,{styled:!0,term:"place",children:(0,t.jsx)("i",{children:"place"})})," to be ",(0,t.jsx)(n.em,{children:"newvalue"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["(setf place newvalue) expands into an update form that stores the result of evaluating ",(0,t.jsx)(n.em,{children:"newvalue"})," into the location referred to by ",(0,t.jsx)(s,{styled:!0,term:"place",children:(0,t.jsx)("i",{children:"place"})}),". Some ",(0,t.jsx)(s,{styled:!0,term:"place",children:(0,t.jsx)("i",{children:"place"})})," forms involve uses of accessors that take optional arguments. Whether those optional arguments are permitted by ",(0,t.jsx)(s,{styled:!0,term:"setf",children:(0,t.jsx)("b",{children:"setf"})}),", or what their use is, is up to the ",(0,t.jsx)(s,{styled:!0,term:"setf",children:(0,t.jsx)("b",{children:"setf"})})," expander function and is not under the control of ",(0,t.jsx)(s,{styled:!0,term:"setf",children:(0,t.jsx)("b",{children:"setf"})}),". The documentation for any ",(0,t.jsx)(s,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," that accepts ",(0,t.jsx)(n.strong,{children:"&optional"}),", ",(0,t.jsx)(n.strong,{children:"&rest"}),", or &key arguments and that claims to be usable with ",(0,t.jsx)(s,{styled:!0,term:"setf",children:(0,t.jsx)("b",{children:"setf"})})," must specify how those arguments are treated."]}),"\n",(0,t.jsxs)(n.p,{children:["If more than one ",(0,t.jsx)(n.em,{children:"pair"})," is supplied, the ",(0,t.jsx)(n.em,{children:"pairs"})," are processed sequentially; that is,"]}),"\n",(0,t.jsx)(n.p,{children:"(setf place-1 newvalue-1"}),"\n",(0,t.jsx)(n.p,{children:"place-2 newvalue-2"}),"\n",(0,t.jsx)(n.p,{children:"..."}),"\n",(0,t.jsx)(n.p,{children:"place-N newvalue-N)"}),"\n",(0,t.jsx)(n.p,{children:"is precisely equivalent to"}),"\n",(0,t.jsx)(n.p,{children:"(progn (setf place-1 newvalue-1)"}),"\n",(0,t.jsx)(n.p,{children:"(setf place-2 newvalue-2)"}),"\n",(0,t.jsx)(n.p,{children:"..."}),"\n",(0,t.jsx)(n.p,{children:"(setf place-N newvalue-N))"}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(s,{styled:!0,term:"psetf",children:(0,t.jsx)("b",{children:"psetf"})}),", if more than one ",(0,t.jsx)(n.em,{children:"pair"})," is supplied then the assignments of new values to places are done in parallel. More precisely, all ",(0,t.jsx)(s,{styled:!0,term:"subform",children:(0,t.jsx)("i",{children:"subforms"})})," (in both the ",(0,t.jsx)(s,{styled:!0,term:"place",children:(0,t.jsx)("i",{children:"place"})})," and ",(0,t.jsx)(n.em,{children:"newvalue forms"}),") that are to be evaluated are evaluated from left to right; after all evaluations have been performed, all of the assignments are performed in an unpredictable order."]}),"\n",(0,t.jsxs)(n.p,{children:["For detailed treatment of the expansion of ",(0,t.jsx)(s,{styled:!0,term:"setf",children:(0,t.jsx)("b",{children:"setf"})})," and ",(0,t.jsx)(s,{styled:!0,term:"psetf",children:(0,t.jsx)("b",{children:"psetf"})}),", see Section 5.1.2 (Kinds of Places)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(setq x (cons \u2019a \u2019b) y (list 1 2 3)) *!* (1 2 3) \n(setf (car x) \u2019x (cadr y) (car x) (cdr x) y) *!* (1 X 3) \nx *!* (X 1 X 3) \ny *!* (1 X 3) \n(setq x (cons \u2019a \u2019b) y (list 1 2 3)) *!* (1 2 3) \n(psetf (car x) \u2019x (cadr y) (car x) (cdr x) y) *!* NIL \nx *!* (X 1 A 3) \n\n\n\ny *!* (1 A 3) \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Aected By:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{styled:!0,term:"define-setf-expander",children:(0,t.jsx)("b",{children:"define-setf-expander"})}),", ",(0,t.jsx)(s,{styled:!0,term:"defsetf",children:(0,t.jsx)("b",{children:"defsetf"})}),", ",(0,t.jsx)(n.strong,{children:"*macroexpand-hook*"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{styled:!0,term:"define-setf-expander",children:(0,t.jsx)("b",{children:"define-setf-expander"})}),", ",(0,t.jsx)(s,{styled:!0,term:"defsetf",children:(0,t.jsx)("b",{children:"defsetf"})}),", ",(0,t.jsx)(s,{styled:!0,term:"macroexpand-1",children:(0,t.jsx)("b",{children:"macroexpand-1"})}),", ",(0,t.jsx)(s,{styled:!0,term:"rotatef",children:(0,t.jsx)("b",{children:"rotatef"})}),", ",(0,t.jsx)(s,{styled:!0,term:"shiftf",children:(0,t.jsx)("b",{children:"shiftf"})}),", Section 5.1 (Generalized Reference)"]})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}const c={title:"setf, psetf"},d="setf, psetf",a={id:"chap-5/f-d-dictionary/setf_psetf_macro",title:"setf, psetf",description:"Expanded Reference: setf, psetf",source:"@site/docs/chap-5/f-d-dictionary/setf_psetf_macro.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/setf_psetf_macro",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/setf_psetf_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/setf_psetf_macro.md",tags:[],version:"current",frontMatter:{title:"setf, psetf"},sidebar:"tutorialSidebar",previous:{title:"rotatef",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/rotatef_macro"},next:{title:"setq",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/setq_special-form"}},o={},h=[{value:"Expanded Reference: setf, psetf",id:"expanded-reference-setf-psetf",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setf-psetf",children:"setf, psetf"}),"\n","\n","\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-setf-psetf",children:"Expanded Reference: setf, psetf"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(setf, psetf )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(67294);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);