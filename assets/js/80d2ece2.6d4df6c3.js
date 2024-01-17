"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[22581],{15557:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=i(85893),t=i(11151);const s={title:"W",sidebar_position:119},c=void 0,a={id:"chap-26/w",title:"W",description:"W",source:"@site/docs/chap-26/w.md",sourceDirName:"chap-26",slug:"/chap-26/w",permalink:"/cl-language-reference/chap-26/w",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/chap-26/w.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",sidebarPosition:119,frontMatter:{title:"W",sidebar_position:119},sidebar:"tutorialSidebar",previous:{title:"V",permalink:"/cl-language-reference/chap-26/v"},next:{title:"Y",permalink:"/cl-language-reference/chap-26/y"}},h={},l=[];function o(e){const n={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:i,GlossaryTerm:s}=n;return i||x("DictionaryLink",!0),s||x("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"W"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("b",{children:"whitespace"})," ",(0,r.jsx)("i",{children:"n."})," 1. one or more ",(0,r.jsx)("i",{children:"characters"})," that are either the ",(0,r.jsx)("i",{children:"graphic character"})," #\\Space or else ",(0,r.jsx)("i",{children:"non-graphic"})," characters such as #\\Newline that only move the print position. 2. a. ",(0,r.jsx)("i",{children:"n."})," the ",(0,r.jsx)("i",{children:"syntax type"})," of a ",(0,r.jsx)("i",{children:"character"})," that is a ",(0,r.jsx)("i",{children:"token"})," separator. For details, see Section 2.1.4.7 (Whitespace Characters). b. ",(0,r.jsx)("i",{children:"adj."})," (of a ",(0,r.jsx)("i",{children:"character"})," ) having the ",(0,r.jsx)("i",{children:"whitespace"}),(0,r.jsxs)("sub",{children:["2",(0,r.jsx)("i",{children:"a"})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("i",{children:"syntax type"}),(0,r.jsx)("sub",{children:"2"}),". c. ",(0,r.jsx)("i",{children:"n."})," a ",(0,r.jsx)("i",{children:"whitespace"}),(0,r.jsxs)("sub",{children:["2",(0,r.jsx)("i",{children:"b"})]})," character ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"wild"})," ",(0,r.jsx)(n.em,{children:"adj."})," 1. (of a ",(0,r.jsx)(s,{term:"namestring",children:(0,r.jsx)("i",{children:"namestring"})}),") using an ",(0,r.jsx)(s,{term:"implementation-defined",children:(0,r.jsx)("i",{children:"implementation-defined"})})," syntax for naming files, which might \u201cmatch\u201d any of possibly several possible ",(0,r.jsx)(s,{term:"filename",children:(0,r.jsx)("i",{children:"filenames"})}),", and which can therefore be used to refer to the aggregate of the ",(0,r.jsx)(s,{term:"file",children:(0,r.jsx)("i",{children:"files"})})," named by those ",(0,r.jsx)(s,{term:"filename",children:(0,r.jsx)("i",{children:"filenames"})}),". 2. (of a ",(0,r.jsx)(s,{term:"pathname",children:(0,r.jsx)("i",{children:"pathname"})}),") a structured representation of a name which might \u201cmatch\u201d any of"]}),"\n",(0,r.jsxs)(n.p,{children:["possibly several ",(0,r.jsx)(s,{term:"pathname",children:(0,r.jsx)("i",{children:"pathnames"})}),", and which can therefore be used to refer to the aggregate of the ",(0,r.jsx)(s,{term:"file",children:(0,r.jsx)("i",{children:"files"})})," named by those ",(0,r.jsx)(s,{term:"pathname",children:(0,r.jsx)("i",{children:"pathnames"})}),". The set of ",(0,r.jsx)(n.em,{children:"wild pathnames"})," includes, but is not restricted to, ",(0,r.jsx)(s,{term:"pathname",children:(0,r.jsx)("i",{children:"pathnames"})})," which have a component which is ",":wild",", or which have a directory component which contains ",":wild"," or ",":wild-inferors",". See the ",(0,r.jsx)(s,{term:"function",children:(0,r.jsx)("i",{children:"function"})})," ",(0,r.jsx)(i,{term:"wild-pathname-p",children:(0,r.jsx)("b",{children:"wild-pathname-p"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"write",children:(0,r.jsx)("b",{children:"write"})})," ",(0,r.jsx)(n.em,{children:"v.t."})," 1. (a ",(0,r.jsx)(s,{term:"binding",children:(0,r.jsx)("i",{children:"binding"})})," or ",(0,r.jsx)(s,{term:"slot",children:(0,r.jsx)("i",{children:"slot"})})," or component) to change the ",(0,r.jsx)(s,{term:"value",children:(0,r.jsx)("i",{children:"value"})})," of the ",(0,r.jsx)(s,{term:"binding",children:(0,r.jsx)("i",{children:"binding"})})," or ",(0,r.jsx)(s,{term:"slot",children:(0,r.jsx)("i",{children:"slot"})}),". 2. (an ",(0,r.jsx)(s,{term:"object",children:(0,r.jsx)("i",{children:"object"})})," to a ",(0,r.jsx)(s,{term:"stream",children:(0,r.jsx)("i",{children:"stream"})}),") to output a representation of the ",(0,r.jsx)(s,{term:"object",children:(0,r.jsx)("i",{children:"object"})})," to the ",(0,r.jsx)(s,{term:"stream",children:(0,r.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"writer"})," ",(0,r.jsx)(n.em,{children:"n."})," a ",(0,r.jsx)(s,{term:"function",children:(0,r.jsx)("i",{children:"function"})})," that ",(0,r.jsx)(s,{term:"write",children:(0,r.jsx)("i",{children:"writes"})}),(0,r.jsx)("sub",{children:"1"})," a ",(0,r.jsx)(s,{term:"variable",children:(0,r.jsx)("i",{children:"variable"})})," or ",(0,r.jsx)(s,{term:"slot",children:(0,r.jsx)("i",{children:"slot"})}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>c});var r=i(67294);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);