"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[15607],{80593:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var a=n(85893),t=n(11151);function l(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:l}=r;return n||i("DictionaryLink",!0),l||i("GlossaryTerm",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:(0,a.jsxs)(r.em,{children:["\u2217",(0,a.jsx)(n,{term:"readtable",children:(0,a.jsx)("b",{children:(0,a.jsx)(l,{term:"readtable",children:(0,a.jsx)("i",{children:"readtable"})})})}),"\u2217 Variable"]})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Value Type:"})}),"\n",(0,a.jsxs)(r.p,{children:["a ",(0,a.jsx)(l,{term:"readtable",children:(0,a.jsx)("i",{children:"readtable"})}),"."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Initial Value:"})}),"\n",(0,a.jsxs)(r.p,{children:["A ",(0,a.jsx)(l,{term:"readtable",children:(0,a.jsx)("i",{children:"readtable"})})," that conforms to the description of Common Lisp syntax in Chapter 2 (Syntax)."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(l,{term:"value",children:(0,a.jsx)("i",{children:"value"})})," of ",(0,a.jsx)(n,{term:"readtable",children:(0,a.jsx)("b",{children:"*readtable*"})})," is called the ",(0,a.jsx)(l,{styled:!0,term:"current readtable",children:(0,a.jsx)("i",{children:"current readtable"})}),". It controls the parsing behavior of the ",(0,a.jsx)(r.em,{children:"Lisp reader"})," , and can also influence the ",(0,a.jsx)(r.em,{children:"Lisp printer"})," (",(0,a.jsx)(r.em,{children:"e.g."}),", see the ",(0,a.jsx)(l,{term:"function",children:(0,a.jsx)("i",{children:"function"})})," ",(0,a.jsx)(n,{term:"readtable-case",children:(0,a.jsx)("b",{children:"readtable-case"})}),")."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lisp",children:"(readtablep \\*readtable\\*) \u2192 true \n\n(setq zvar 123) \u2192 123 \n(set-syntax-from-char #\\z #\\\u2019 (setq table2 (copy-readtable))) \u2192 T \nzvar \u2192 123 \n(setq \\*readtable\\* table2) \u2192 #<READTABLE> \nzvar \u2192 VAR \n(setq \\*readtable\\* (copy-readtable nil)) \u2192 #<READTABLE> \nzvar \u2192 123 \n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(n,{term:"compile-file",children:(0,a.jsx)("b",{children:"compile-file"})}),", ",(0,a.jsx)(n,{term:"load",children:(0,a.jsx)("b",{children:"load"})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(n,{term:"compile-file",children:(0,a.jsx)("b",{children:"compile-file"})}),", ",(0,a.jsx)(n,{term:"load",children:(0,a.jsx)("b",{children:"load"})}),", ",(0,a.jsx)(n,{term:"readtable",children:(0,a.jsx)("b",{children:"readtable"})}),", Section 2.1.1.1 (The Current Readtable)"]})]})}function c(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}function i(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"readtable"},s="*readtable*",o={id:"chap-23/cd-c-dictionary/readtable_variable",title:"readtable",description:"Expanded Reference: \\readtable\\",source:"@site/docs/chap-23/cd-c-dictionary/readtable_variable.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/readtable_variable",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/readtable_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/readtable_variable.md",tags:[],version:"current",frontMatter:{title:"readtable"},sidebar:"tutorialSidebar",previous:{title:"readtable",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/readtable_system-class"},next:{title:"readtablep",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/readtablep_function"}},h={},p=[{value:"Expanded Reference: *readtable*",id:"expanded-reference-readtable",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"readtable",children:"*readtable*"}),"\n","\n","\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(r.h2,{id:"expanded-reference-readtable",children:"Expanded Reference: *readtable*"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lisp",children:"*readtable*\n"})})]})}function b(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>c});var a=n(67294);const t={},l=a.createContext(t);function c(e){const r=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);