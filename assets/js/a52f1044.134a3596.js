"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[91574],{20672:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>h,toc:()=>a});var i=n(85893),s=n(11151);function t(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"read-from-string"})," ",(0,i.jsx)(n,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{term:"read-from-string",children:(0,i.jsx)("b",{children:"read-from-string"})})," ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," &optional ",(0,i.jsx)(r.em,{children:"eof-error-p eof-value"})]}),"\n",(0,i.jsxs)(r.p,{children:["&key ",(0,i.jsx)(r.em,{children:"start end preserve-whitespace"})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.em,{children:"\u2192 object, position"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),"\u2014a ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"eof-error-p"}),"\u2014a ",(0,i.jsx)(r.em,{children:"generalized boolean"}),". The default is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"eof-value"}),"\u2014an ",(0,i.jsx)(n,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),". The default is ",(0,i.jsx)(n,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"start"}),", ",(0,i.jsx)(r.em,{children:"end"}),"\u2014",(0,i.jsx)(r.em,{children:"bounding index designators"})," of ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),". The defaults for ",(0,i.jsx)(r.em,{children:"start"})," and ",(0,i.jsx)(r.em,{children:"end"})," are 0 and ",(0,i.jsx)(n,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", respectively."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"preserve-whitespace"}),"\u2014a ",(0,i.jsx)(r.em,{children:"generalized boolean"}),". The default is ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),"\u2014an ",(0,i.jsx)(n,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," (parsed by the ",(0,i.jsx)(r.em,{children:"Lisp reader"})," ) or the ",(0,i.jsx)(r.em,{children:"eof-value"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"position"}),"\u2014an ",(0,i.jsx)(r.em,{children:"integer"})," greater than or equal to zero, and less than or equal to one more than the ",(0,i.jsx)(n,{term:"length",children:(0,i.jsx)("i",{children:"length"})})," of the ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(r.p,{children:["Parses the printed representation of an ",(0,i.jsx)(n,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," from the subsequence of ",(0,i.jsx)(r.em,{children:"string bounded"})," by ",(0,i.jsx)(r.em,{children:"start"})," and ",(0,i.jsx)(r.em,{children:"end"}),", as if ",(0,i.jsx)(n,{term:"read",children:(0,i.jsx)("b",{children:"read"})})," had been called on an ",(0,i.jsx)(r.em,{children:"input stream"})," containing those same ",(0,i.jsx)(n,{term:"character",children:(0,i.jsx)("i",{children:"characters"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.em,{children:"preserve-whitespace"})," is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),", the operation will preserve ",(0,i.jsx)(n,{term:"whitespace",children:(0,i.jsx)("i",{children:"whitespace"})}),(0,i.jsx)("sub",{children:"2"})," as ",(0,i.jsx)(n,{term:"read-preserving-whitespace",children:(0,i.jsx)("b",{children:"read-preserving-whitespace"})})," would do."]}),"\n",(0,i.jsxs)(r.p,{children:["If an ",(0,i.jsx)(n,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," is successfully parsed, the ",(0,i.jsx)(r.em,{children:"primary value"}),", ",(0,i.jsx)(r.em,{children:"object"}),", is the ",(0,i.jsx)(n,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," that was parsed. If ",(0,i.jsx)(r.em,{children:"eof-error-p"})," is ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})})," and if the end of the ",(0,i.jsx)(r.em,{children:"substring"})," is reached, ",(0,i.jsx)(r.em,{children:"eof-value"})," is returned."]}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.em,{children:"secondary value"}),", ",(0,i.jsx)(r.em,{children:"position"}),", is the index of the first ",(0,i.jsx)(n,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," in the ",(0,i.jsx)(r.em,{children:"bounded string"})," that was not read. The ",(0,i.jsx)(r.em,{children:"position"})," may depend upon the value of ",(0,i.jsx)(r.em,{children:"preserve-whitespace"}),". If the entire ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," was read, the ",(0,i.jsx)(r.em,{children:"position"})," returned is either the ",(0,i.jsx)(n,{term:"length",children:(0,i.jsx)("i",{children:"length"})})," of the ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," or one greater than the ",(0,i.jsx)(n,{term:"length",children:(0,i.jsx)("i",{children:"length"})})," of the ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:'(read-from-string " 1 3 5" t nil :start 2) \u2192 3, 5 \n(read-from-string "(a b c)") \u2192 (A B C), 7 \n'})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(r.p,{children:["If the end of the supplied substring occurs before an ",(0,i.jsx)(n,{term:"object",children:(0,i.jsx)("i",{children:"object"})})," can be read, an error is signaled if ",(0,i.jsx)(r.em,{children:"eof-error-p"})," is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),". An error is signaled if the end of the ",(0,i.jsx)(r.em,{children:"substring"})," occurs in the middle of an incomplete ",(0,i.jsx)(n,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{term:"read",children:(0,i.jsx)("b",{children:"read"})}),", ",(0,i.jsx)(n,{term:"read-preserving-whitespace",children:(0,i.jsx)("b",{children:"read-preserving-whitespace"})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(r.p,{children:["The reason that ",(0,i.jsx)(r.em,{children:"position"})," is allowed to be beyond the ",(0,i.jsx)(n,{term:"length",children:(0,i.jsx)("i",{children:"length"})})," of the ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," is to permit (but not require) the ",(0,i.jsx)(n,{term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})})," to work by simulating the effect of a trailing delimiter at the end of the ",(0,i.jsx)(r.em,{children:"bounded string"}),". When ",(0,i.jsx)(r.em,{children:"preserve-whitespace"})," is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),", the ",(0,i.jsx)(r.em,{children:"position"})," might count the simulated delimiter."]})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const d={title:"read-from-string"},l="read-from-string",h={id:"chap-23/cd-c-dictionary/read-from-string_function",title:"read-from-string",description:"Expanded Reference: read-from-string",source:"@site/docs/chap-23/cd-c-dictionary/read-from-string_function.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/read-from-string_function",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/read-from-string_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/read-from-string_function.md",tags:[],version:"current",frontMatter:{title:"read-from-string"},sidebar:"tutorialSidebar",previous:{title:"read-delimited-list",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/read-delimited-list_function"},next:{title:"read-suppress",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/read-suppress_variable"}},o={},a=[{value:"Expanded Reference: read-from-string",id:"expanded-reference-read-from-string",level:2}];function j(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"read-from-string",children:"read-from-string"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(r.h2,{id:"expanded-reference-read-from-string",children:"Expanded Reference: read-from-string"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:"(read-from-string )\n"})})]})}function x(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>c});var i=n(67294);const s={},t=i.createContext(s);function c(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);