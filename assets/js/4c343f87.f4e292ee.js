"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[84332],{58817:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=s(85893),n=s(11151);function i(e){const t={em:"em",p:"p",...(0,n.a)(),...e.components},{ClLinks:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," is a (possibly infinite) set of ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"objects"})}),". An ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})})," can belong to more than one ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})}),". ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"Types"})})," are never explicitly represented as ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"objects"})})," by Common Lisp. Instead, they are referred to indirectly by the use of ",(0,r.jsx)(t.em,{children:"type specifiers"}),", which are ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"objects"})})," that denote ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"types"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"types"})})," can be defined using ",(0,r.jsx)(s,{styled:!0,term:"deftype",children:(0,r.jsx)("b",{children:"deftype"})}),", ",(0,r.jsx)(s,{styled:!0,term:"defstruct",children:(0,r.jsx)("b",{children:"defstruct"})}),", ",(0,r.jsx)(s,{styled:!0,term:"defclass",children:(0,r.jsx)("b",{children:"defclass"})}),", and ",(0,r.jsx)(s,{styled:!0,term:"define-condition",children:(0,r.jsx)("b",{children:"define-condition"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(s,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," ",(0,r.jsx)(s,{styled:!0,term:"typep",children:(0,r.jsx)("b",{children:"typep"})}),", a set membership test, is used to determine whether a given ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})})," is of a given ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})}),". The function ",(0,r.jsx)(s,{styled:!0,term:"subtypep",children:(0,r.jsx)("b",{children:"subtypep"})}),", a subset test, is used to determine whether a given ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," is a ",(0,r.jsx)(s,{styled:!0,term:"subtype",children:(0,r.jsx)("i",{children:"subtype"})})," of another given ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})}),". The function ",(0,r.jsx)(s,{styled:!0,term:"type-of",children:(0,r.jsx)("b",{children:"type-of"})})," returns a particular ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," to which a given"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})})," belongs, even though that ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})})," must belong to one or more other ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"types"})})," as well. (For example, every ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})})," is of ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(s,{styled:!0,term:"t",children:(0,r.jsx)("b",{children:"t"})}),", but ",(0,r.jsx)(s,{styled:!0,term:"type-of",children:(0,r.jsx)("b",{children:"type-of"})})," always returns a ",(0,r.jsx)(t.em,{children:"type specifier"})," for a ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," more specific than ",(0,r.jsx)(s,{styled:!0,term:"t",children:(0,r.jsx)("b",{children:"t"})}),".)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"Objects"})}),", not ",(0,r.jsx)(s,{styled:!0,term:"variable",children:(0,r.jsx)("i",{children:"variables"})}),", have ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"types"})}),". Normally, any ",(0,r.jsx)(s,{styled:!0,term:"variable",children:(0,r.jsx)("i",{children:"variable"})})," can have any ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})})," as its ",(0,r.jsx)(s,{styled:!0,term:"value",children:(0,r.jsx)("i",{children:"value"})}),". It is possible to declare that a ",(0,r.jsx)(s,{styled:!0,term:"variable",children:(0,r.jsx)("i",{children:"variable"})})," takes on only values of a given ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"type"})})," by making an explicit ",(0,r.jsx)(t.em,{children:"type declaration"}),". ",(0,r.jsx)(t.em,{children:"Types"})," are arranged in a directed acyclic graph, except for the presence of equivalences."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(s,{styled:!0,term:"declaration",children:(0,r.jsx)("i",{children:"Declarations"})})," can be made about ",(0,r.jsx)(s,{styled:!0,term:"type",children:(0,r.jsx)("i",{children:"types"})})," using ",(0,r.jsx)(s,{styled:!0,term:"declare",children:(0,r.jsx)("b",{children:"declare"})}),", ",(0,r.jsx)(s,{styled:!0,term:"proclaim",children:(0,r.jsx)("b",{children:"proclaim"})}),", ",(0,r.jsx)(s,{styled:!0,term:"declaim",children:(0,r.jsx)("b",{children:"declaim"})}),", or ",(0,r.jsx)(s,{styled:!0,term:"the",children:(0,r.jsx)("b",{children:"the"})}),". For more information about ",(0,r.jsx)(s,{styled:!0,term:"declaration",children:(0,r.jsx)("i",{children:"declarations"})}),", see Section 3.3 (Declarations)."]}),"\n",(0,r.jsxs)(t.p,{children:["Among the fundamental ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"objects"})})," of the object system are ",(0,r.jsx)(t.em,{children:"classes"}),". A ",(0,r.jsx)(s,{styled:!0,term:"class",children:(0,r.jsx)("i",{children:"class"})})," determines the structure and behavior of a set of other ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"objects"})}),", which are called its ",(0,r.jsx)(s,{styled:!0,term:"instance",children:(0,r.jsx)("i",{children:"instances"})}),". Every ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})})," is a ",(0,r.jsx)(t.em,{children:"direct instance"})," of a ",(0,r.jsx)(s,{styled:!0,term:"class",children:(0,r.jsx)("i",{children:"class"})}),". The ",(0,r.jsx)(s,{styled:!0,term:"class",children:(0,r.jsx)("i",{children:"class"})})," of an ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})})," determines the set of operations that can be performed on the ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})}),". For more information, see Section 4.3 (Classes)."]}),"\n",(0,r.jsxs)(t.p,{children:["It is possible to write ",(0,r.jsx)(s,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"functions"})})," that have behavior ",(0,r.jsx)(s,{styled:!0,term:"specialized",children:(0,r.jsx)("i",{children:"specialized"})})," to the class of the ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"objects"})})," which are their ",(0,r.jsx)(s,{styled:!0,term:"argument",children:(0,r.jsx)("i",{children:"arguments"})}),". For more information, see Section 7.6 (Generic Functions and Methods)."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(s,{styled:!0,term:"class",children:(0,r.jsx)("i",{children:"class"})})," of the ",(0,r.jsx)(s,{styled:!0,term:"class",children:(0,r.jsx)("i",{children:"class"})})," of an ",(0,r.jsx)(s,{styled:!0,term:"object",children:(0,r.jsx)("i",{children:"object"})})," is called its ",(0,r.jsx)(s,{styled:!0,term:"metaclass",children:(0,r.jsx)("i",{children:"metaclass"})}),". For more information about ",(0,r.jsx)(t.em,{children:"metaclasses"}),", see Section 7.4 (Meta-Objects)."]})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const l={title:"4.1 Introduction"},d="4.1 Introduction",o={id:"chap-4/e-b-introduction",title:"4.1 Introduction",description:"",source:"@site/docs/chap-4/e-b-introduction.md",sourceDirName:"chap-4",slug:"/chap-4/e-b-introduction",permalink:"/cl-language-reference/docs/chap-4/e-b-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-4/e-b-introduction.md",tags:[],version:"current",frontMatter:{title:"4.1 Introduction"},sidebar:"tutorialSidebar",previous:{title:"4. Types and Classes",permalink:"/cl-language-reference/docs/category/4-types-and-classes"},next:{title:"4.2 Types",permalink:"/cl-language-reference/docs/chap-4/e-c-types"}},h={},a=[];function j(e){const t={h1:"h1",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"41-introduction",children:"4.1 Introduction"}),"\n","\n","\n",(0,r.jsx)(c,{})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>c});var r=s(67294);const n={},i=r.createContext(n);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);