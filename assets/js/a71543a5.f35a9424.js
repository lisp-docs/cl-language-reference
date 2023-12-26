"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[43204],{8037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var i=t(85893),o=t(11151);function r(e){const n={em:"em",p:"p",strong:"strong",...(0,o.a)(),...e.components},{ClLinks:t,GlossaryTerm:r}=n;return t||c("ClLinks",!0),r||c("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"storage-condition"})," ",(0,i.jsx)(n.em,{children:"Condition Type"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Class Precedence List:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{styled:!0,term:"storage-condition",children:(0,i.jsx)("b",{children:"storage-condition"})}),", ",(0,i.jsx)(t,{styled:!0,term:"serious-condition",children:(0,i.jsx)("b",{children:"serious-condition"})}),", ",(0,i.jsx)(t,{styled:!0,term:"condition",children:(0,i.jsx)("b",{children:"condition"})}),", ",(0,i.jsx)(t,{styled:!0,term:"t",children:(0,i.jsx)("b",{children:"t"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(t,{styled:!0,term:"storage-condition",children:(0,i.jsx)("b",{children:"storage-condition"})})," consists of serious conditions that relate to problems with memory management that are potentially due to ",(0,i.jsx)(t,{styled:!0,term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})})," limits rather than semantic errors in ",(0,i.jsx)(r,{styled:!0,term:"conforming program",children:(0,i.jsx)("i",{children:"conforming programs"})}),", and that typically warrant entry to the debugger if not handled."]}),"\n",(0,i.jsxs)(n.p,{children:["Depending on the details of the ",(0,i.jsx)(t,{styled:!0,term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})}),", these might include such problems as stack overflow, memory region overflow, and storage exhausted."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["While some Common Lisp operations might signal ",(0,i.jsx)(n.em,{children:"storage-condition"})," because they are defined to create ",(0,i.jsx)(t,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"objects"})}),", it is unspecified whether operations that are not defined to create ",(0,i.jsx)(t,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"objects"})})," create them anyway and so might also signal ",(0,i.jsx)(t,{styled:!0,term:"storage-condition",children:(0,i.jsx)("b",{children:"storage-condition"})}),". Likewise, the evaluator itself might create ",(0,i.jsx)(t,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"objects"})})," and so might signal ",(0,i.jsx)(t,{styled:!0,term:"storage-condition",children:(0,i.jsx)("b",{children:"storage-condition"})}),". (The natural assumption might be that such ",(0,i.jsx)(t,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," creation is naturally inefficient, but even that is ",(0,i.jsx)(t,{styled:!0,term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})}),".) In general, the entire question of how storage allocation is done is ",(0,i.jsx)(t,{styled:!0,term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})}),", and so any operation might signal ",(0,i.jsx)(t,{styled:!0,term:"storage-condition",children:(0,i.jsx)("b",{children:"storage-condition"})})," at any time. Because such a ",(0,i.jsx)(t,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"condition"})})," is indicative of a limitation of the ",(0,i.jsx)(t,{styled:!0,term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," or of the ",(0,i.jsx)(n.em,{children:"image"})," rather than an error in a ",(0,i.jsx)(t,{styled:!0,term:"program",children:(0,i.jsx)("i",{children:"program"})}),", ",(0,i.jsx)(t,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"objects"})})," of ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(t,{styled:!0,term:"storage-condition",children:(0,i.jsx)("b",{children:"storage-condition"})})," are not of ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(t,{styled:!0,term:"error",children:(0,i.jsx)("b",{children:"error"})}),"."]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"storage-condition"},a="storage-condition",l={id:"chap-9/j-c-dictionary/storage-condition_condition-type",title:"storage-condition",description:"Expanded Reference: storage-condition",source:"@site/docs/chap-9/j-c-dictionary/storage-condition_condition-type.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/storage-condition_condition-type",permalink:"/cl-language-reference/chap-9/j-c-dictionary/storage-condition_condition-type",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/storage-condition_condition-type.md",tags:[],version:"current",frontMatter:{title:"storage-condition"},sidebar:"tutorialSidebar",previous:{title:"simple-warning",permalink:"/cl-language-reference/chap-9/j-c-dictionary/simple-warning_condition-type"},next:{title:"style-warning",permalink:"/cl-language-reference/chap-9/j-c-dictionary/style-warning_condition-type"}},h={},m=[{value:"Expanded Reference: storage-condition",id:"expanded-reference-storage-condition",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"storage-condition",children:"storage-condition"}),"\n","\n","\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-storage-condition",children:"Expanded Reference: storage-condition"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(storage-condition )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);