"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[68247],{83381:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var i=r(85893),a=r(11151);function s(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...n.components},{DictionaryLink:r,GlossaryTerm:s}=e;return r||c("DictionaryLink",!0),s||c("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"array-in-bounds-p"})," ",(0,i.jsx)(s,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(r,{term:"array-in-bounds-p",children:(0,i.jsx)("b",{children:"array-in-bounds-p"})})," ",(0,i.jsx)(s,{term:"array",children:(0,i.jsx)("i",{children:"array"})})," &rest ",(0,i.jsx)(e.em,{children:"subscripts \u2192 generalized-boolean"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(s,{term:"array",children:(0,i.jsx)("i",{children:"array"})}),"\u2014an ",(0,i.jsx)(s,{term:"array",children:(0,i.jsx)("i",{children:"array"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"subscripts"}),"\u2014a list of ",(0,i.jsx)(e.em,{children:"integers"})," of length equal to the ",(0,i.jsx)(s,{term:"rank",children:(0,i.jsx)("i",{children:"rank"})})," of the ",(0,i.jsx)(s,{term:"array",children:(0,i.jsx)("i",{children:"array"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"generalized-boolean"}),"\u2014a ",(0,i.jsx)(s,{styled:!0,term:"generalized boolean",children:(0,i.jsx)("i",{children:"generalized boolean"})}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(e.p,{children:["Returns ",(0,i.jsx)(s,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," if the ",(0,i.jsx)(e.em,{children:"subscripts"})," are all in bounds for ",(0,i.jsx)(s,{term:"array",children:(0,i.jsx)("i",{children:"array"})}),"; otherwise returns ",(0,i.jsx)(s,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),". (If ",(0,i.jsx)(s,{term:"array",children:(0,i.jsx)("i",{children:"array"})})," is a ",(0,i.jsx)(s,{term:"vector",children:(0,i.jsx)("i",{children:"vector"})})," with a ",(0,i.jsx)(s,{styled:!0,term:"fill pointer",children:(0,i.jsx)("i",{children:"fill pointer"})})," , that ",(0,i.jsx)(s,{styled:!0,term:"fill pointer",children:(0,i.jsx)("i",{children:"fill pointer"})})," is ignored.)"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:"(setq a (make-array \u2019(7 11) :element-type \u2019string-char)) \n(array-in-bounds-p a 0 0) \u2192 true \n(array-in-bounds-p a 6 10) \u2192 true \n(array-in-bounds-p a 0 -1) \u2192 false \n(array-in-bounds-p a 0 11) \u2192 false \n(array-in-bounds-p a 7 0) \u2192 false \n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(r,{term:"array-dimensions",children:(0,i.jsx)("b",{children:"array-dimensions"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,i.jsx)(e.p,{children:"(array-in-bounds-p array subscripts)"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"\u2261"})," (and (not (some #\u2019minusp (list subscripts)))"]}),"\n",(0,i.jsx)(e.p,{children:"(every #\u2019< (list subscripts) (array-dimensions array)))"})]})}function t(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(s,{...n})}):s(n)}function c(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"array-in-bounds-p"},o="array-in-bounds-p",l={id:"chap-15/bf-c-dictionary/array-in-bounds-p_function",title:"array-in-bounds-p",description:"Expanded Reference: array-in-bounds-p",source:"@site/docs/chap-15/bf-c-dictionary/array-in-bounds-p_function.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/array-in-bounds-p_function",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-in-bounds-p_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/array-in-bounds-p_function.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{title:"array-in-bounds-p"},sidebar:"tutorialSidebar",previous:{title:"array-has-fill-pointer-p",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-has-fill-pointer-p_function"},next:{title:"array-rank-limit",permalink:"/cl-language-reference/chap-15/bf-c-dictionary/array-rank-limit_constant-variable"}},p={},h=[{value:"Expanded Reference: array-in-bounds-p",id:"expanded-reference-array-in-bounds-p",level:2}];function u(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"array-in-bounds-p",children:"array-in-bounds-p"}),"\n","\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(e.h2,{id:"expanded-reference-array-in-bounds-p",children:"Expanded Reference: array-in-bounds-p"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:"(array-in-bounds-p )\n"})})]})}function x(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>t});var i=r(67294);const a={},s=i.createContext(a);function t(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);