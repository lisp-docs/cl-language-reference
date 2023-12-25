"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[2468],{54858:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var l=r(85893),i=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"multiple-value-bind"})," ",(0,l.jsx)(r,{styled:!0,term:"macro",children:(0,l.jsx)("i",{children:"Macro"})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(r,{styled:!0,term:"multiple-value-bind",children:(0,l.jsx)("b",{children:"multiple-value-bind"})})," (",(0,l.jsx)(n.em,{children:"{var}"}),"*) ",(0,l.jsx)(n.em,{children:"values-form {declaration}"}),"* ",(0,l.jsx)(r,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"{form}"})}),"*"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"! {result}"}),"*"]}),"\n",(0,l.jsx)(n.p,{children:"Data and Control"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"var"}),"\u2014a ",(0,l.jsx)(r,{styled:!0,term:"symbol",children:(0,l.jsx)("i",{children:"symbol"})})," naming a variable; not evaluated."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"values-form"}),"\u2014a ",(0,l.jsx)(r,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"form"})}),"; evaluated."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(r,{styled:!0,term:"declaration",children:(0,l.jsx)("i",{children:"declaration"})}),"\u2014a ",(0,l.jsx)(r,{styled:!0,term:"declare",children:(0,l.jsx)("b",{children:"declare"})})," ",(0,l.jsx)(r,{styled:!0,term:"expression",children:(0,l.jsx)("i",{children:"expression"})}),"; not evaluated."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(r,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"forms"})}),"\u2014an ",(0,l.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"results"}),"\u2014the ",(0,l.jsx)(r,{styled:!0,term:"value",children:(0,l.jsx)("i",{children:"values"})})," returned by the ",(0,l.jsx)(r,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"forms"})}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Description:"})}),"\n",(0,l.jsxs)(n.p,{children:["Creates new variable ",(0,l.jsx)(r,{styled:!0,term:"binding",children:(0,l.jsx)("i",{children:"bindings"})})," for the ",(0,l.jsx)(n.em,{children:"vars"})," and executes a series of ",(0,l.jsx)(r,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"forms"})})," that use these ",(0,l.jsx)(r,{styled:!0,term:"binding",children:(0,l.jsx)("i",{children:"bindings"})}),". The variable ",(0,l.jsx)(r,{styled:!0,term:"binding",children:(0,l.jsx)("i",{children:"bindings"})})," created are lexical unless ",(0,l.jsx)(r,{styled:!0,term:"special",children:(0,l.jsx)("b",{children:"special"})})," declarations are specified."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"Values-form"})," is evaluated, and each of the ",(0,l.jsx)(n.em,{children:"vars"})," is bound to the respective value returned by that ",(0,l.jsx)(r,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"form"})}),". If there are more ",(0,l.jsx)(n.em,{children:"vars"})," than values returned, extra values of ",(0,l.jsx)(r,{styled:!0,term:"nil",children:(0,l.jsx)("b",{children:"nil"})})," are given to the remaining ",(0,l.jsx)(n.em,{children:"vars"}),". If there are more values than ",(0,l.jsx)(n.em,{children:"vars"}),", the excess values are discarded. The ",(0,l.jsx)(n.em,{children:"vars"})," are bound to the values over the execution of the ",(0,l.jsx)(r,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"forms"})}),", which make up an implicit ",(0,l.jsx)(r,{styled:!0,term:"progn",children:(0,l.jsx)("b",{children:"progn"})}),". The consequences are unspecified if a type ",(0,l.jsx)(r,{styled:!0,term:"declaration",children:(0,l.jsx)("i",{children:"declaration"})})," is specified for a ",(0,l.jsx)(n.em,{children:"var"}),", but the value to which that ",(0,l.jsx)(n.em,{children:"var"})," is bound is not consistent with the type ",(0,l.jsx)(r,{styled:!0,term:"declaration",children:(0,l.jsx)("i",{children:"declaration"})}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(r,{styled:!0,term:"scope",children:(0,l.jsx)("i",{children:"scopes"})})," of the name binding and ",(0,l.jsx)(r,{styled:!0,term:"declaration",children:(0,l.jsx)("i",{children:"declarations"})})," do not include the ",(0,l.jsx)(n.em,{children:"values-form"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lisp",children:"\n(multiple-value-bind (f r) \n    (floor 130 11) \n  (list f r)) *!* (11 9) \n\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(r,{styled:!0,term:"let",children:(0,l.jsx)("b",{children:"let"})}),", ",(0,l.jsx)(r,{styled:!0,term:"multiple-value-call",children:(0,l.jsx)("b",{children:"multiple-value-call"})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,l.jsxs)(n.p,{children:["(multiple-value-bind (",(0,l.jsx)(n.em,{children:"{var}"}),"*) ",(0,l.jsx)(n.em,{children:"values-form {form}"}),"*)"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"\u2318"})," (multiple-value-call #\u2019(lambda (&optional ",(0,l.jsx)(n.em,{children:"{var}"}),"* &rest #1=#",":ignore",")"]}),"\n",(0,l.jsx)(n.p,{children:"(declare (ignore #1#))"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(r,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"{form}"})}),"*)"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"values-form"}),")"]})]})}function t(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}const d={title:"multiple-value-bind"},c="multiple-value-bind",a={id:"chap-5/f-d-dictionary/multiple-value-bind_macro",title:"multiple-value-bind",description:"Expanded Reference: multiple-value-bind",source:"@site/docs/chap-5/f-d-dictionary/multiple-value-bind_macro.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/multiple-value-bind_macro",permalink:"/cl-language-reference/chap-5/f-d-dictionary/multiple-value-bind_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/multiple-value-bind_macro.md",tags:[],version:"current",frontMatter:{title:"multiple-value-bind"},sidebar:"tutorialSidebar",previous:{title:"let, let",permalink:"/cl-language-reference/chap-5/f-d-dictionary/let_let_special-operator"},next:{title:"multiple-value-call",permalink:"/cl-language-reference/chap-5/f-d-dictionary/multiple-value-call_special-operator"}},o={},h=[{value:"Expanded Reference: multiple-value-bind",id:"expanded-reference-multiple-value-bind",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"multiple-value-bind",children:"multiple-value-bind"}),"\n","\n","\n",(0,l.jsx)(t,{}),"\n",(0,l.jsx)(n.h2,{id:"expanded-reference-multiple-value-bind",children:"Expanded Reference: multiple-value-bind"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lisp",children:"(multiple-value-bind )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>t});var l=r(67294);const i={},s=l.createContext(i);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);