"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[87763],{43263:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>y});var t=n(85893),a=n(11151);function i(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components},{ClLinks:n,GlossaryTerm:i}=r;return n||c("ClLinks",!0),i||c("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"array-element-type"})," ",(0,t.jsx)(n,{term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"array-element-type",children:(0,t.jsx)("b",{children:"array-element-type"})})," ",(0,t.jsx)(r.em,{children:"array \u2192 typespec"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"array",children:(0,t.jsx)("i",{children:"array"})}),"\u2014an ",(0,t.jsx)(n,{term:"array",children:(0,t.jsx)("i",{children:"array"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"typespec"}),"\u2014a ",(0,t.jsx)(i,{styled:!0,term:"type specifier",children:(0,t.jsx)("i",{children:"type specifier"})})," ."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:["Returns a ",(0,t.jsx)(i,{styled:!0,term:"type specifier",children:(0,t.jsx)("i",{children:"type specifier"})})," which represents the ",(0,t.jsx)(i,{styled:!0,term:"actual array element type",children:(0,t.jsx)("i",{children:"actual array element type"})})," of the array, which is the set of ",(0,t.jsx)(n,{term:"object",children:(0,t.jsx)("i",{children:"objects"})})," that such an ",(0,t.jsx)(n,{term:"array",children:(0,t.jsx)("i",{children:"array"})})," can hold. (Because of ",(0,t.jsx)(r.em,{children:"array upgrading"}),", this ",(0,t.jsx)(i,{styled:!0,term:"type specifier",children:(0,t.jsx)("i",{children:"type specifier"})})," can in some cases denote a ",(0,t.jsx)(n,{term:"supertype",children:(0,t.jsx)("i",{children:"supertype"})})," of the ",(0,t.jsx)(i,{styled:!0,term:"expressed array element type",children:(0,t.jsx)("i",{children:"expressed array element type"})})," of the ",(0,t.jsx)(n,{term:"array",children:(0,t.jsx)("i",{children:"array"})}),".)"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(array-element-type (make-array 4)) \u2192 T \n(array-element-type (make-array 12 :element-type \u2019(unsigned-byte 8))) \n\u2192 implementation-dependent \n(array-element-type (make-array 12 :element-type \u2019(unsigned-byte 5))) \n\u2192 implementation-dependent \n(array-element-type (make-array 5 :element-type \u2019(mod 5))) \ncould be (mod 5), (mod 8), fixnum, t, or any other type of which (mod 5) is a *subtype*. \n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(n,{term:"implementation",children:(0,t.jsx)("i",{children:"implementation"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(r.p,{children:["Should signal an error of ",(0,t.jsx)(n,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{term:"type-error",children:(0,t.jsx)("b",{children:"type-error"})})," if its argument is not an ",(0,t.jsx)(n,{term:"array",children:(0,t.jsx)("i",{children:"array"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"array",children:(0,t.jsx)("b",{children:"array"})}),", ",(0,t.jsx)(n,{term:"make-array",children:(0,t.jsx)("b",{children:"make-array"})}),", ",(0,t.jsx)(n,{term:"subtypep",children:(0,t.jsx)("b",{children:"subtypep"})}),", ",(0,t.jsx)(n,{term:"upgraded-array-element-type",children:(0,t.jsx)("b",{children:"upgraded-array-element-type"})})]})]})}function s(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function c(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"array-element-type"},d="array-element-type",p={id:"chap-15/bf-c-dictionary/array-element-type_function",title:"array-element-type",description:"Expanded Reference: array-element-type",source:"@site/docs/chap-15/bf-c-dictionary/array-element-type_function.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/array-element-type_function",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-element-type_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/array-element-type_function.md",tags:[],version:"current",frontMatter:{title:"array-element-type"},sidebar:"tutorialSidebar",previous:{title:"array-displacement",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-displacement_function"},next:{title:"array-has-fill-pointer-p",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-has-fill-pointer-p_function"}},o={},y=[{value:"Expanded Reference: array-element-type",id:"expanded-reference-array-element-type",level:2}];function h(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"array-element-type",children:"array-element-type"}),"\n","\n","\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-array-element-type",children:"Expanded Reference: array-element-type"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(array-element-type )\n"})})]})}function m(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>s});var t=n(67294);const a={},i=t.createContext(a);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);