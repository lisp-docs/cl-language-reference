"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[67080],{60298:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=r(85893),i=r(11151);function a(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"upgraded-array-element-type"})," ",(0,t.jsx)(r,{term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"upgraded-array-element-type",children:(0,t.jsx)("b",{children:"upgraded-array-element-type"})})," ",(0,t.jsx)(n.em,{children:"typespec"})," &optional ",(0,t.jsx)(n.em,{children:"environment \u2192 upgraded-typespec"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"typespec"}),"\u2014a ",(0,t.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"environment",children:(0,t.jsx)("i",{children:"environment"})}),"\u2014an ",(0,t.jsx)(n.em,{children:"environment object"}),". The default is ",(0,t.jsx)(r,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),", denoting the ",(0,t.jsx)(n.em,{children:"null lexical environment"})," and the current ",(0,t.jsx)(n.em,{children:"global environment"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"upgraded-typespec"}),"\u2014a ",(0,t.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the ",(0,t.jsx)(n.em,{children:"element type"})," of the most ",(0,t.jsx)(n.em,{children:"specialized array"})," representation capable of holding items of the ",(0,t.jsx)(r,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," denoted by ",(0,t.jsx)(n.em,{children:"typespec"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"typespec"})," is a ",(0,t.jsx)(r,{term:"subtype",children:(0,t.jsx)("i",{children:"subtype"})})," of (and possibly ",(0,t.jsx)(n.em,{children:"type equivalent"})," to) the ",(0,t.jsx)(n.em,{children:"upgraded-typespec"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"typespec"})," is ",(0,t.jsx)(r,{term:"bit",children:(0,t.jsx)("b",{children:"bit"})}),", the result is ",(0,t.jsx)(n.em,{children:"type equivalent"})," to bit. If ",(0,t.jsx)(n.em,{children:"typespec"})," is ",(0,t.jsx)(r,{term:"base-char",children:(0,t.jsx)("b",{children:"base-char"})}),", the result is ",(0,t.jsx)(n.em,{children:"type equivalent"})," to base-char. If ",(0,t.jsx)(n.em,{children:"typespec"})," is ",(0,t.jsx)(r,{term:"character",children:(0,t.jsx)("b",{children:"character"})}),", the result is ",(0,t.jsx)(n.em,{children:"type equivalent"})," to character."]}),"\n",(0,t.jsxs)(n.p,{children:["The purpose of ",(0,t.jsx)(r,{term:"upgraded-array-element-type",children:(0,t.jsx)("b",{children:"upgraded-array-element-type"})})," is to reveal how an implementation does its ",(0,t.jsx)(n.em,{children:"upgrading"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(r,{term:"environment",children:(0,t.jsx)("i",{children:"environment"})})," is used to expand any ",(0,t.jsx)(n.em,{children:"derived type specifiers"})," that are mentioned in the ",(0,t.jsx)(n.em,{children:"typespec"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{term:"array-element-type",children:(0,t.jsx)("b",{children:"array-element-type"})}),", ",(0,t.jsx)(r,{term:"make-array",children:(0,t.jsx)("b",{children:"make-array"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["Except for storage allocation consequences and dealing correctly with the optional ",(0,t.jsx)(n.em,{children:"environment argument"}),", ",(0,t.jsx)(r,{term:"upgraded-array-element-type",children:(0,t.jsx)("b",{children:"upgraded-array-element-type"})})," could be defined as:"]}),"\n",(0,t.jsx)(n.p,{children:"(defun upgraded-array-element-type (type &optional environment)"}),"\n",(0,t.jsxs)(n.p,{children:["(array-element-type (make-array 0 ",":element-type"," type)))"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}const s={title:"upgraded-array-element-type"},d="upgraded-array-element-type",l={id:"chap-15/bf-c-dictionary/upgraded-array-element-type_function",title:"upgraded-array-element-type",description:"Expanded Reference: upgraded-array-element-type",source:"@site/docs/chap-15/bf-c-dictionary/upgraded-array-element-type_function.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/upgraded-array-element-type_function",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/upgraded-array-element-type_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/upgraded-array-element-type_function.md",tags:[],version:"current",frontMatter:{title:"upgraded-array-element-type"},sidebar:"tutorialSidebar",previous:{title:"svref",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/svref_accessor"},next:{title:"vector-pop",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/vector-pop_function"}},p={},o=[{value:"Expanded Reference: upgraded-array-element-type",id:"expanded-reference-upgraded-array-element-type",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upgraded-array-element-type",children:"upgraded-array-element-type"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-upgraded-array-element-type",children:"Expanded Reference: upgraded-array-element-type"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(upgraded-array-element-type )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var t=r(67294);const i={},a=t.createContext(i);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);