"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[3615],{58482:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>a});var t=n(85893),i=n(11151);function l(e){const s={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"list"})," ",(0,t.jsx)(s.em,{children:"System Class"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Class Precedence List:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(n,{styled:!0,term:"list",children:(0,t.jsx)("b",{children:"list"})}),", ",(0,t.jsx)(n,{styled:!0,term:"sequence",children:(0,t.jsx)("b",{children:"sequence"})}),", ",(0,t.jsx)(n,{styled:!0,term:"t",children:(0,t.jsx)("b",{children:"t"})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(n,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," is a chain of ",(0,t.jsx)(s.em,{children:"conses"})," in which the ",(0,t.jsx)(n,{styled:!0,term:"car",children:(0,t.jsx)("i",{children:"car"})})," of each ",(0,t.jsx)(n,{styled:!0,term:"cons",children:(0,t.jsx)("i",{children:"cons"})})," is an ",(0,t.jsx)(n,{styled:!0,term:"element",children:(0,t.jsx)("i",{children:"element"})})," of the ",(0,t.jsx)(n,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})}),", and the ",(0,t.jsx)(n,{styled:!0,term:"cdr",children:(0,t.jsx)("i",{children:"cdr"})})," of each ",(0,t.jsx)(n,{styled:!0,term:"cons",children:(0,t.jsx)("i",{children:"cons"})})," is either the next link in the chain or a terminating ",(0,t.jsx)(n,{styled:!0,term:"atom",children:(0,t.jsx)("i",{children:"atom"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.em,{children:"proper list"})," is a chain of ",(0,t.jsx)(s.em,{children:"conses"})," terminated by the ",(0,t.jsx)(s.em,{children:"empty list"}),", (), which is itself a ",(0,t.jsx)(s.em,{children:"proper list"}),". A ",(0,t.jsx)(s.em,{children:"dotted list"})," is a ",(0,t.jsx)(n,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," which has a terminating ",(0,t.jsx)(n,{styled:!0,term:"atom",children:(0,t.jsx)("i",{children:"atom"})})," that is not the ",(0,t.jsx)(s.em,{children:"empty list"}),". A ",(0,t.jsx)(s.em,{children:"circular list"})," is a chain of ",(0,t.jsx)(s.em,{children:"conses"})," that has no termination because some ",(0,t.jsx)(n,{styled:!0,term:"cons",children:(0,t.jsx)("i",{children:"cons"})})," in the chain is the ",(0,t.jsx)(n,{styled:!0,term:"cdr",children:(0,t.jsx)("i",{children:"cdr"})})," of a later ",(0,t.jsx)(n,{styled:!0,term:"cons",children:(0,t.jsx)("i",{children:"cons"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Dotted lists"})," and ",(0,t.jsx)(s.em,{children:"circular lists"})," are also ",(0,t.jsx)(n,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"lists"})}),", but usually the unqualified term \u201clist\u201d within this specification means ",(0,t.jsx)(s.em,{children:"proper list"}),". Nevertheless, the ",(0,t.jsx)(n,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{styled:!0,term:"list",children:(0,t.jsx)("b",{children:"list"})})," unambiguously includes ",(0,t.jsx)(s.em,{children:"dotted lists"})," and ",(0,t.jsx)(s.em,{children:"circular lists"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For each ",(0,t.jsx)(n,{styled:!0,term:"element",children:(0,t.jsx)("i",{children:"element"})})," of a ",(0,t.jsx)(n,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," there is a ",(0,t.jsx)(n,{styled:!0,term:"cons",children:(0,t.jsx)("i",{children:"cons"})}),". The ",(0,t.jsx)(s.em,{children:"empty list"})," has no ",(0,t.jsx)(n,{styled:!0,term:"element",children:(0,t.jsx)("i",{children:"elements"})})," and is not a ",(0,t.jsx)(n,{styled:!0,term:"cons",children:(0,t.jsx)("i",{children:"cons"})}),". The ",(0,t.jsx)(n,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"types"})})," ",(0,t.jsx)(n,{styled:!0,term:"cons",children:(0,t.jsx)("b",{children:"cons"})})," and ",(0,t.jsx)(n,{styled:!0,term:"null",children:(0,t.jsx)("b",{children:"null"})})," form an ",(0,t.jsx)(s.em,{children:"exhaustive partition"})," of the ",(0,t.jsx)(n,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{styled:!0,term:"list",children:(0,t.jsx)("b",{children:"list"})}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(s.p,{children:"Section 2.4.1 (Left-Parenthesis), Section 22.1.3.5 (Printing Lists and Conses)"})]})}function r(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}const c={title:"list"},d="list",h={id:"chap-14/be-c-dictionary/list_system-class",title:"list",description:"Expanded Reference: list",source:"@site/docs/chap-14/be-c-dictionary/list_system-class.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/list_system-class",permalink:"/cl-language-reference/chap-14/be-c-dictionary/list_system-class",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/list_system-class.md",tags:[],version:"current",frontMatter:{title:"list"},sidebar:"tutorialSidebar",previous:{title:"list, list",permalink:"/cl-language-reference/chap-14/be-c-dictionary/list_list_function"},next:{title:"listp",permalink:"/cl-language-reference/chap-14/be-c-dictionary/listp_function"}},o={},a=[{value:"Expanded Reference: list",id:"expanded-reference-list",level:2}];function x(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"list",children:"list"}),"\n","\n","\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(s.h2,{id:"expanded-reference-list",children:"Expanded Reference: list"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:"(list )\n"})})]})}function j(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>r});var t=n(67294);const i={},l=t.createContext(i);function r(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);