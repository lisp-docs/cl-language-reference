"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[2468],{54858:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var i=r(85893),l=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:s}=n;return r||c("DictionaryLink",!0),s||c("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"multiple-value-bind"})," ",(0,i.jsx)(s,{term:"macro",children:(0,i.jsx)("i",{children:"Macro"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"multiple-value-bind",children:(0,i.jsx)("b",{children:"multiple-value-bind"})})," (",(0,i.jsx)(n.em,{children:"{var}"}),"*) ",(0,i.jsx)(n.em,{children:"values-form {declaration}"}),"* ",(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"{form}"})}),"*"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"! {result}"}),"*"]}),"\n",(0,i.jsx)(n.p,{children:"Data and Control"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"var"}),"\u2014a ",(0,i.jsx)(s,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," naming a variable; not evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"values-form"}),"\u2014a ",(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"form"})}),"; evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{term:"declaration",children:(0,i.jsx)("i",{children:"declaration"})}),"\u2014a ",(0,i.jsx)(r,{term:"declare",children:(0,i.jsx)("b",{children:"declare"})})," ",(0,i.jsx)(s,{term:"expression",children:(0,i.jsx)("i",{children:"expression"})}),"; not evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"forms"})}),"\u2014an ",(0,i.jsx)(s,{styled:!0,term:"implicit progn",children:(0,i.jsx)("i",{children:"implicit progn"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"results"}),"\u2014the ",(0,i.jsx)(s,{term:"value",children:(0,i.jsx)("i",{children:"values"})})," returned by the ",(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"forms"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Creates new variable ",(0,i.jsx)(s,{term:"binding",children:(0,i.jsx)("i",{children:"bindings"})})," for the ",(0,i.jsx)(n.em,{children:"vars"})," and executes a series of ",(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"forms"})})," that use these ",(0,i.jsx)(s,{term:"binding",children:(0,i.jsx)("i",{children:"bindings"})}),". The variable ",(0,i.jsx)(s,{term:"binding",children:(0,i.jsx)("i",{children:"bindings"})})," created are lexical unless ",(0,i.jsx)(r,{term:"special",children:(0,i.jsx)("b",{children:"special"})})," declarations are specified."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Values-form"})," is evaluated, and each of the ",(0,i.jsx)(n.em,{children:"vars"})," is bound to the respective value returned by that ",(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"form"})}),". If there are more ",(0,i.jsx)(n.em,{children:"vars"})," than values returned, extra values of ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," are given to the remaining ",(0,i.jsx)(n.em,{children:"vars"}),". If there are more values than ",(0,i.jsx)(n.em,{children:"vars"}),", the excess values are discarded. The ",(0,i.jsx)(n.em,{children:"vars"})," are bound to the values over the execution of the ",(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"forms"})}),", which make up an implicit ",(0,i.jsx)(r,{term:"progn",children:(0,i.jsx)("b",{children:"progn"})}),". The consequences are unspecified if a type ",(0,i.jsx)(s,{term:"declaration",children:(0,i.jsx)("i",{children:"declaration"})})," is specified for a ",(0,i.jsx)(n.em,{children:"var"}),", but the value to which that ",(0,i.jsx)(n.em,{children:"var"})," is bound is not consistent with the type ",(0,i.jsx)(s,{term:"declaration",children:(0,i.jsx)("i",{children:"declaration"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(s,{term:"scope",children:(0,i.jsx)("i",{children:"scopes"})})," of the name binding and ",(0,i.jsx)(s,{term:"declaration",children:(0,i.jsx)("i",{children:"declarations"})})," do not include the ",(0,i.jsx)(n.em,{children:"values-form"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(multiple-value-bind (f r) \n    (floor 130 11) \n  (list f r)) *!* (11 9) \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"let",children:(0,i.jsx)("b",{children:"let"})}),", ",(0,i.jsx)(r,{term:"multiple-value-call",children:(0,i.jsx)("b",{children:"multiple-value-call"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["(multiple-value-bind (",(0,i.jsx)(n.em,{children:"{var}"}),"*) ",(0,i.jsx)(n.em,{children:"values-form {form}"}),"*)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2318"})," (multiple-value-call #\u2019(lambda (&optional ",(0,i.jsx)(n.em,{children:"{var}"}),"* &rest #1=#",":ignore",")"]}),"\n",(0,i.jsx)(n.p,{children:"(declare (ignore #1#))"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{term:"form",children:(0,i.jsx)("i",{children:"{form}"})}),"*)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"values-form"}),")"]})]})}function t(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"multiple-value-bind"},a="multiple-value-bind",o={id:"chap-5/f-d-dictionary/multiple-value-bind_macro",title:"multiple-value-bind",description:"Expanded Reference: multiple-value-bind",source:"@site/docs/chap-5/f-d-dictionary/multiple-value-bind_macro.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/multiple-value-bind_macro",permalink:"/cl-language-reference/chap-5/f-d-dictionary/multiple-value-bind_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/multiple-value-bind_macro.md",tags:[],version:"current",frontMatter:{title:"multiple-value-bind"},sidebar:"tutorialSidebar",previous:{title:"let, let",permalink:"/cl-language-reference/chap-5/f-d-dictionary/let_let_special-operator"},next:{title:"multiple-value-call",permalink:"/cl-language-reference/chap-5/f-d-dictionary/multiple-value-call_special-operator"}},h={},m=[{value:"Expanded Reference: multiple-value-bind",id:"expanded-reference-multiple-value-bind",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"multiple-value-bind",children:"multiple-value-bind"}),"\n","\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-multiple-value-bind",children:"Expanded Reference: multiple-value-bind"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(multiple-value-bind )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var i=r(67294);const l={},s=i.createContext(l);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);