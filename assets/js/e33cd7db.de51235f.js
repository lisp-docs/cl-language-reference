"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[93370],{27987:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>j,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var r=s(85893),l=s(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components},{DictionaryLink:s,GlossaryTerm:t}=n;return s||c("DictionaryLink",!0),t||c("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"values"})," ",(0,r.jsx)(t,{term:"accessor",children:(0,r.jsx)("i",{children:"Accessor"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"values",children:(0,r.jsx)("b",{children:"values"})})," &rest ",(0,r.jsx)(n.em,{children:"object ! {object}"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"(setf (values"})," &rest ",(0,r.jsx)(t,{term:"place",children:(0,r.jsx)("i",{children:"place"})}),(0,r.jsx)(n.strong,{children:")"})," ",(0,r.jsx)(n.em,{children:"new-values"}),"**)**"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{term:"object",children:(0,r.jsx)("i",{children:"object"})}),"\u2014an ",(0,r.jsx)(t,{term:"object",children:(0,r.jsx)("i",{children:"object"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{term:"place",children:(0,r.jsx)("i",{children:"place"})}),"\u2014a ",(0,r.jsx)(t,{term:"place",children:(0,r.jsx)("i",{children:"place"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"new-value"}),"\u2014an ",(0,r.jsx)(t,{term:"object",children:(0,r.jsx)("i",{children:"object"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"values",children:(0,r.jsx)("b",{children:"values"})})," returns the ",(0,r.jsx)(t,{term:"object",children:(0,r.jsx)("i",{children:"objects"})})," as ",(0,r.jsx)(t,{styled:!0,term:"multiple values",children:(0,r.jsx)("i",{children:"multiple values"})}),(0,r.jsx)("sub",{children:"2"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"setf",children:(0,r.jsx)("b",{children:"setf"})})," of ",(0,r.jsx)(s,{term:"values",children:(0,r.jsx)("b",{children:"values"})})," is used to store the ",(0,r.jsx)(t,{styled:!0,term:"multiple values",children:(0,r.jsx)("i",{children:"multiple values"})}),(0,r.jsx)("sub",{children:"2"})," ",(0,r.jsx)(n.em,{children:"new-values"})," into the ",(0,r.jsx)(t,{term:"place",children:(0,r.jsx)("i",{children:"places"})}),". See Section 5.1.2.3 (VALUES Forms as Places)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(values) *! \u27e8no values\u27e9* \n(values 1) *!* 1 \n(values 1 2) *!* 1, 2 \n(values 1 2 3) *!* 1, 2, 3 \n(values (values 1 2 3) 4 5) *!* 1, 4, 5 \n(defun polar (x y) \n  (values (sqrt (+ (\\* x x) (\\* y y))) (atan y x))) *!* POLAR \n(multiple-value-bind (r theta) (polar 3.0 4.0) \n  (vector r theta)) \n*!* #(5.0 0.927295) \nSometimes it is desirable to indicate explicitly that a function returns exactly one value. For example, the function \n(defun foo (x y) \n  (floor (+ x y) y)) *!* FOO \nreturns two values because **floor** returns two values. It may be that the second value makes no sense, or that for eciency reasons it is desired not to compute the second value. **values** is the standard idiom for indicating that only one value is to be returned: \n\n(defun foo (x y) \n  (values (floor (+ x y) y))) *!* FOO \nThis works because **values** returns exactly one value for each of *args*; as for any function call, if any of *args* produces more than one value, all but the first are discarded. \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{term:"values-list",children:(0,r.jsx)("b",{children:"values-list"})}),", ",(0,r.jsx)(s,{term:"multiple-value-bind",children:(0,r.jsx)("b",{children:"multiple-value-bind"})}),", ",(0,r.jsx)(s,{term:"multiple-values-limit",children:(0,r.jsx)("b",{children:"multiple-values-limit"})}),", Section 3.1 (Evaluation)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["Since ",(0,r.jsx)(s,{term:"values",children:(0,r.jsx)("b",{children:"values"})})," is a ",(0,r.jsx)(t,{term:"function",children:(0,r.jsx)("i",{children:"function"})}),", not a ",(0,r.jsx)(t,{term:"macro",children:(0,r.jsx)("i",{children:"macro"})})," or ",(0,r.jsx)(t,{styled:!0,term:"special form",children:(0,r.jsx)("i",{children:"special form"})}),", it receives as ",(0,r.jsx)(t,{term:"argument",children:(0,r.jsx)("i",{children:"arguments"})})," only the ",(0,r.jsx)(t,{styled:!0,term:"primary value",children:(0,r.jsx)("i",{children:"primary values"})})," of its ",(0,r.jsx)(n.em,{children:"argument forms"}),"."]})]})}function i(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const a={title:"values"},o="values",d={id:"chap-5/f-d-dictionary/values_accessor",title:"values",description:"Expanded Reference: values",source:"@site/docs/chap-5/f-d-dictionary/values_accessor.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/values_accessor",permalink:"/cl-language-reference/chap-5/f-d-dictionary/values_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/values_accessor.md",tags:[],version:"current",frontMatter:{title:"values"},sidebar:"tutorialSidebar",previous:{title:"values-list",permalink:"/cl-language-reference/chap-5/f-d-dictionary/values-list_function"},next:{title:"when, unless",permalink:"/cl-language-reference/chap-5/f-d-dictionary/when_unless_macro"}},u={},h=[{value:"Expanded Reference: values",id:"expanded-reference-values",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"values",children:"values"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-values",children:"Expanded Reference: values"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(values )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var r=s(67294);const l={},t=r.createContext(l);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);