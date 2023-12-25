"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[26884],{28349:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var t=i(85893),r=i(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["\u2217",(0,t.jsx)(i,{styled:!0,term:"print-lines",children:(0,t.jsx)("b",{children:(0,t.jsx)(n.em,{children:"print-lines"})})}),"\u2217 Variable"]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,t.jsxs)(n.p,{children:["a non-negative ",(0,t.jsx)(n.em,{children:"integer"})," , or ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["When the ",(0,t.jsx)(i,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"value"})})," of ",(0,t.jsx)(i,{styled:!0,term:"print-lines",children:(0,t.jsx)("b",{children:"*print-lines*"})})," is other than ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),", it is a limit on the number of output lines produced when something is pretty printed. If an attempt is made to go beyond that many lines, \u201c..\u201d is printed at the end of the last line followed by all of the suffixes (closing delimiters) that are pending to be printed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(let ((\\*print-right-margin\\* 25) (\\*print-lines\\* 3)) \n  (pprint \u2019(progn (setq a 1 b 2 c 3 d 4)))) \n\u25b7 (PROGN (SETQ A 1 \n\t       \u25b7 B 2 \n\t       \u25b7 C 3 ..)) \n*\u2192 \u27e8no values\u27e9* \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsx)(n.p,{children:"The \u201c..\u201d notation is intentionally different than the \u201c...\u201d notation used for level abbreviation, so that the two different situations can be visually distinguished."}),"\n",(0,t.jsxs)(n.p,{children:["This notation is used to increase the likelihood that the ",(0,t.jsx)(n.em,{children:"Lisp reader"})," will signal an error if an attempt is later made to read the abbreviated output. Note however that if the truncation occurs in a ",(0,t.jsx)(i,{styled:!0,term:"string",children:(0,t.jsx)("i",{children:"string"})}),', as in "This string has been trunc..", the problem situation cannot be detected later and no such error will be signaled.']})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const c={title:"print-lines"},a="*print-lines*",o={id:"chap-22/cc-e-dictionary/print-lines_variable",title:"print-lines",description:"Expanded Reference: \\print-lines\\",source:"@site/docs/chap-22/cc-e-dictionary/print-lines_variable.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/print-lines_variable",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/print-lines_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/print-lines_variable.md",tags:[],version:"current",frontMatter:{title:"print-lines"},sidebar:"tutorialSidebar",previous:{title:"print-length",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/print-length_variable"},next:{title:"print-miser-width",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/print-miser-width_variable"}},d={},p=[{value:"Expanded Reference: *print-lines*",id:"expanded-reference-print-lines",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"print-lines",children:"*print-lines*"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-print-lines",children:"Expanded Reference: *print-lines*"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"*print-lines*\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var t=i(67294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);