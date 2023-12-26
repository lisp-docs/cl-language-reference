"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[4747],{5401:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>m});var s=r(85893),l=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components},{ClLinks:r,DictionaryLink:i,GlossaryTerm:o}=n;return r||c("ClLinks",!0),i||c("DictionaryLink",!0),o||c("GlossaryTerm",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"copy-symbol"})," ",(0,s.jsx)(o,{term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(i,{term:"copy-symbol",children:(0,s.jsx)("b",{children:"copy-symbol"})})," ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})})," &optional ",(0,s.jsx)(n.em,{children:"copy-properties \u2192 new-symbol"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),"\u2014a ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"copy-properties"}),"\u2014a ",(0,s.jsx)(o,{styled:!0,term:"generalized boolean",children:(0,s.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,s.jsx)(o,{term:"false",children:(0,s.jsx)("i",{children:"false"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"new-symbol"}),"\u2014a ",(0,s.jsx)(o,{term:"fresh",children:(0,s.jsx)("i",{children:"fresh"})}),", ",(0,s.jsx)(n.em,{children:"uninterned symbol"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(i,{term:"copy-symbol",children:(0,s.jsx)("b",{children:"copy-symbol"})})," returns a ",(0,s.jsx)(o,{term:"fresh",children:(0,s.jsx)("i",{children:"fresh"})}),", ",(0,s.jsx)(n.em,{children:"uninterned symbol"}),", the ",(0,s.jsx)(o,{term:"name",children:(0,s.jsx)("i",{children:"name"})})," of which is ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("b",{children:"string="})})," to and possibly the ",(0,s.jsx)(o,{term:"same",children:(0,s.jsx)("i",{children:"same"})})," as the ",(0,s.jsx)(o,{term:"name",children:(0,s.jsx)("i",{children:"name"})})," of the given ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"copy-properties"})," is ",(0,s.jsx)(o,{term:"false",children:(0,s.jsx)("i",{children:"false"})}),", the ",(0,s.jsx)(n.em,{children:"new-symbol"})," is neither ",(0,s.jsx)(o,{term:"bound",children:(0,s.jsx)("i",{children:"bound"})})," nor ",(0,s.jsx)(o,{term:"fbound",children:(0,s.jsx)("i",{children:"fbound"})})," and has a ",(0,s.jsx)(n.em,{children:"null property list"}),". If ",(0,s.jsx)(n.em,{children:"copy-properties"})," is ",(0,s.jsx)(o,{term:"true",children:(0,s.jsx)("i",{children:"true"})}),", then the initial ",(0,s.jsx)(o,{term:"value",children:(0,s.jsx)("i",{children:"value"})})," of ",(0,s.jsx)(n.em,{children:"new-symbol"})," is the ",(0,s.jsx)(o,{term:"value",children:(0,s.jsx)("i",{children:"value"})})," of ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),", the initial ",(0,s.jsx)(o,{term:"function",children:(0,s.jsx)("i",{children:"function"})})," definition of ",(0,s.jsx)(n.em,{children:"new-symbol"})," is the ",(0,s.jsx)(o,{styled:!0,term:"functional value",children:(0,s.jsx)("i",{children:"functional value"})})," of ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),", and the ",(0,s.jsx)(o,{styled:!0,term:"property list",children:(0,s.jsx)("i",{children:"property list"})})," of ",(0,s.jsx)(n.em,{children:"new-symbol"})," is a ",(0,s.jsx)(o,{term:"copy",children:(0,s.jsx)("i",{children:"copy"})}),(0,s.jsx)("sub",{children:"2"})," of the ",(0,s.jsx)(o,{styled:!0,term:"property list",children:(0,s.jsx)("i",{children:"property list"})})," of ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(setq fred \u2019fred-smith) \u2192 FRED-SMITH \n(setf (symbol-value fred) 3) \u2192 3 \n(setq fred-clone-1a (copy-symbol fred nil)) \u2192 #:FRED-SMITH \n(setq fred-clone-1b (copy-symbol fred nil)) \u2192 #:FRED-SMITH \n(setq fred-clone-2a (copy-symbol fred t)) \u2192 #:FRED-SMITH \n(setq fred-clone-2b (copy-symbol fred t)) \u2192 #:FRED-SMITH \n(eq fred fred-clone-1a) \u2192 false \n(eq fred-clone-1a fred-clone-1b) \u2192 false \n(eq fred-clone-2a fred-clone-2b) \u2192 false \n(eq fred-clone-1a fred-clone-2a) \u2192 false \n(symbol-value fred) \u2192 3 \n(boundp fred-clone-1a) \u2192 false \n(symbol-value fred-clone-2a) \u2192 3 \n(setf (symbol-value fred-clone-2a) 4) \u2192 4 \n(symbol-value fred) \u2192 3 \n(symbol-value fred-clone-2a) \u2192 4 \n(symbol-value fred-clone-2b) \u2192 3 \n(boundp fred-clone-1a) \u2192 false \n(setf (symbol-function fred) #\u2019(lambda (x) x)) \u2192 #<FUNCTION anonymous> \n(fboundp fred) \u2192 true \n(fboundp fred-clone-1a) \u2192 false \n(fboundp fred-clone-2a) \u2192 false \n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should signal an error of ",(0,s.jsx)(o,{term:"type",children:(0,s.jsx)("i",{children:"type"})})," ",(0,s.jsx)(i,{term:"type-error",children:(0,s.jsx)("b",{children:"type-error"})})," if ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})})," is not a ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(i,{term:"make-symbol",children:(0,s.jsx)("b",{children:"make-symbol"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["Implementors are encouraged not to copy the ",(0,s.jsx)(o,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," which is the ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),"\u2019s ",(0,s.jsx)(o,{term:"name",children:(0,s.jsx)("i",{children:"name"})})," unnecessarily. Unless there is a good reason to do so, the normal implementation strategy is for the ",(0,s.jsx)(n.em,{children:"new-symbol"}),"\u2019s ",(0,s.jsx)(o,{term:"name",children:(0,s.jsx)("i",{children:"name"})})," to be ",(0,s.jsx)(o,{term:"identical",children:(0,s.jsx)("i",{children:"identical"})})," to the given ",(0,s.jsx)(o,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),"\u2019s ",(0,s.jsx)(o,{term:"name",children:(0,s.jsx)("i",{children:"name"})}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const t={title:"copy-symbol"},d="copy-symbol",a={id:"chap-10/ba-c-dictionary/copy-symbol_function",title:"copy-symbol",description:"Expanded Reference: copy-symbol",source:"@site/docs/chap-10/ba-c-dictionary/copy-symbol_function.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/copy-symbol_function",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/copy-symbol_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/copy-symbol_function.md",tags:[],version:"current",frontMatter:{title:"copy-symbol"},sidebar:"tutorialSidebar",previous:{title:"boundp",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/boundp_function"},next:{title:"gensym-counter",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/gensym-counter_variable"}},h={},m=[{value:"Expanded Reference: copy-symbol",id:"expanded-reference-copy-symbol",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"copy-symbol",children:"copy-symbol"}),"\n","\n","\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-copy-symbol",children:"Expanded Reference: copy-symbol"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(copy-symbol )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var s=r(67294);const l={},i=s.createContext(l);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);