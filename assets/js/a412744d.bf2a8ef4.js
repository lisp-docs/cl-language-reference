"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[40170],{69373:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>a});var s=n(85893),t=n(11151);function c(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"reverse, nreverse"})," ",(0,s.jsx)(n,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"reverse",children:(0,s.jsx)("b",{children:"reverse"})})," ",(0,s.jsx)(r.em,{children:"sequence \u2192 reversed-sequence"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"nreverse",children:(0,s.jsx)("b",{children:"nreverse"})})," ",(0,s.jsx)(r.em,{children:"sequence \u2192 reversed-sequence"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"sequence"}),"\u2014a ",(0,s.jsx)(r.em,{children:"proper sequence"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"reversed-sequence"}),"\u2014a ",(0,s.jsx)(r.em,{children:"sequence"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"reverse",children:(0,s.jsx)("b",{children:"reverse"})})," and ",(0,s.jsx)(n,{styled:!0,term:"nreverse",children:(0,s.jsx)("b",{children:"nreverse"})})," return a new ",(0,s.jsx)(r.em,{children:"sequence"})," of the same kind as ",(0,s.jsx)(r.em,{children:"sequence"}),", containing the same ",(0,s.jsx)(n,{styled:!0,term:"element",children:(0,s.jsx)("i",{children:"elements"})}),", but in reverse order."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"reverse",children:(0,s.jsx)("b",{children:"reverse"})})," and ",(0,s.jsx)(n,{styled:!0,term:"nreverse",children:(0,s.jsx)("b",{children:"nreverse"})})," differ in that ",(0,s.jsx)(n,{styled:!0,term:"reverse",children:(0,s.jsx)("b",{children:"reverse"})})," always creates and returns a new ",(0,s.jsx)(r.em,{children:"sequence"}),", whereas ",(0,s.jsx)(n,{styled:!0,term:"nreverse",children:(0,s.jsx)("b",{children:"nreverse"})})," might modify and return the given ",(0,s.jsx)(r.em,{children:"sequence"}),". ",(0,s.jsx)(n,{styled:!0,term:"reverse",children:(0,s.jsx)("b",{children:"reverse"})})," never modifies the given ",(0,s.jsx)(r.em,{children:"sequence"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["For ",(0,s.jsx)(n,{styled:!0,term:"reverse",children:(0,s.jsx)("b",{children:"reverse"})}),", if ",(0,s.jsx)(r.em,{children:"sequence"})," is a ",(0,s.jsx)(n,{styled:!0,term:"vector",children:(0,s.jsx)("i",{children:"vector"})})," , the result is a ",(0,s.jsx)(r.em,{children:"fresh simple array"})," of ",(0,s.jsx)(n,{styled:!0,term:"rank",children:(0,s.jsx)("i",{children:"rank"})})," one that has the same ",(0,s.jsx)(r.em,{children:"actual array element type"})," as ",(0,s.jsx)(r.em,{children:"sequence"}),". If ",(0,s.jsx)(r.em,{children:"sequence"})," is a ",(0,s.jsx)(n,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),", the result is a ",(0,s.jsx)(r.em,{children:"fresh list"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["For ",(0,s.jsx)(n,{styled:!0,term:"nreverse",children:(0,s.jsx)("b",{children:"nreverse"})}),", if ",(0,s.jsx)(r.em,{children:"sequence"})," is a ",(0,s.jsx)(n,{styled:!0,term:"vector",children:(0,s.jsx)("i",{children:"vector"})})," , the result is a ",(0,s.jsx)(n,{styled:!0,term:"vector",children:(0,s.jsx)("i",{children:"vector"})})," that has the same ",(0,s.jsx)(r.em,{children:"actual array element type"})," as ",(0,s.jsx)(r.em,{children:"sequence"}),". If ",(0,s.jsx)(r.em,{children:"sequence"})," is a ",(0,s.jsx)(n,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),", the result is a ",(0,s.jsx)(n,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["For ",(0,s.jsx)(n,{styled:!0,term:"nreverse",children:(0,s.jsx)("b",{children:"nreverse"})}),", ",(0,s.jsx)(r.em,{children:"sequence"})," might be destroyed and re-used to produce the result. The result might or might not be ",(0,s.jsx)(n,{styled:!0,term:"identical",children:(0,s.jsx)("i",{children:"identical"})})," to ",(0,s.jsx)(r.em,{children:"sequence"}),". Specifically, when ",(0,s.jsx)(r.em,{children:"sequence"})," is a ",(0,s.jsx)(n,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),", ",(0,s.jsx)(n,{styled:!0,term:"nreverse",children:(0,s.jsx)("b",{children:"nreverse"})})," is permitted to ",(0,s.jsx)(n,{styled:!0,term:"setf",children:(0,s.jsx)("b",{children:"setf"})})," any part, ",(0,s.jsx)(n,{styled:!0,term:"car",children:(0,s.jsx)("b",{children:"car"})})," or ",(0,s.jsx)(n,{styled:!0,term:"cdr",children:(0,s.jsx)("b",{children:"cdr"})}),", of any ",(0,s.jsx)(n,{styled:!0,term:"cons",children:(0,s.jsx)("i",{children:"cons"})})," that is part of the ",(0,s.jsx)(r.em,{children:"list structure"})," of ",(0,s.jsx)(r.em,{children:"sequence"}),". When ",(0,s.jsx)(r.em,{children:"sequence"})]}),"\n",(0,s.jsxs)(r.p,{children:["is a ",(0,s.jsx)(n,{styled:!0,term:"vector",children:(0,s.jsx)("i",{children:"vector"})})," , ",(0,s.jsx)(n,{styled:!0,term:"nreverse",children:(0,s.jsx)("b",{children:"nreverse"})})," is permitted to re-order the elements of ",(0,s.jsx)(r.em,{children:"sequence"})," in order to produce the resulting ",(0,s.jsx)(n,{styled:!0,term:"vector",children:(0,s.jsx)("i",{children:"vector"})})," ."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:'\n(setq str "abc") \u2192 "abc" \n(reverse str) \u2192 "cba" \nstr \u2192 "abc" \n(setq str (copy-seq str)) \u2192 "abc" \n(nreverse str) \u2192 "cba" \nstr \u2192 implementation-dependent \n(setq l (list 1 2 3)) \u2192 (1 2 3) \n(nreverse l) \u2192 (3 2 1) \nl \u2192 implementation-dependent \n\n'})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(n,{styled:!0,term:"nreverse",children:(0,s.jsx)("b",{children:"nreverse"})})," might either create a new ",(0,s.jsx)(r.em,{children:"sequence"}),", modify the argument ",(0,s.jsx)(r.em,{children:"sequence"}),", or both. (",(0,s.jsx)(n,{styled:!0,term:"reverse",children:(0,s.jsx)("b",{children:"reverse"})})," does not modify ",(0,s.jsx)(r.em,{children:"sequence"}),".)"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(r.p,{children:["Should be prepared to signal an error of ",(0,s.jsx)(n,{styled:!0,term:"type",children:(0,s.jsx)("i",{children:"type"})})," ",(0,s.jsx)(n,{styled:!0,term:"type-error",children:(0,s.jsx)("b",{children:"type-error"})})," if ",(0,s.jsx)(r.em,{children:"sequence"})," is not a ",(0,s.jsx)(r.em,{children:"proper sequence"}),"."]})]})}function i(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}const d={title:"reverse, nreverse"},l="reverse, nreverse",h={id:"chap-17/bh-d-dictionary/reverse_nreverse_function",title:"reverse, nreverse",description:"Expanded Reference: reverse, nreverse",source:"@site/docs/chap-17/bh-d-dictionary/reverse_nreverse_function.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/reverse_nreverse_function",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/reverse_nreverse_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/reverse_nreverse_function.md",tags:[],version:"current",frontMatter:{title:"reverse, nreverse"},sidebar:"tutorialSidebar",previous:{title:"replace",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/replace_function"},next:{title:"search",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/search_function"}},o={},a=[{value:"Expanded Reference: reverse, nreverse",id:"expanded-reference-reverse-nreverse",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"reverse-nreverse",children:"reverse, nreverse"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(r.h2,{id:"expanded-reference-reverse-nreverse",children:"Expanded Reference: reverse, nreverse"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"(reverse, nreverse )\n"})})]})}function j(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>i});var s=n(67294);const t={},c=s.createContext(t);function i(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);