"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[8351],{5246:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>x});var c=r(85893),i=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:t}=n;return r||s("DictionaryLink",!0),t||s("GlossaryTerm",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"complex"})," ",(0,c.jsx)(t,{term:"function",children:(0,c.jsx)("i",{children:"Function"})})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(r,{term:"complex",children:(0,c.jsx)("b",{children:"complex"})})," ",(0,c.jsx)(n.em,{children:"realpart"})," &optional ",(0,c.jsx)(n.em,{children:"imagpart \u2192 complex"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"realpart"}),"\u2014a ",(0,c.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"imagpart"}),"\u2014a ",(0,c.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(t,{term:"complex",children:(0,c.jsx)("i",{children:"complex"})}),"\u2014a ",(0,c.jsx)(t,{term:"rational",children:(0,c.jsx)("i",{children:"rational"})})," or a ",(0,c.jsx)(t,{term:"complex",children:(0,c.jsx)("i",{children:"complex"})})," ."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(r,{term:"complex",children:(0,c.jsx)("b",{children:"complex"})})," returns a ",(0,c.jsx)(t,{term:"number",children:(0,c.jsx)("i",{children:"number"})})," whose real part is ",(0,c.jsx)(n.em,{children:"realpart"})," and whose imaginary part is ",(0,c.jsx)(n.em,{children:"imagpart"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["If ",(0,c.jsx)(n.em,{children:"realpart"})," is a ",(0,c.jsx)(t,{term:"rational",children:(0,c.jsx)("i",{children:"rational"})})," and ",(0,c.jsx)(n.em,{children:"imagpart"})," is the ",(0,c.jsx)(t,{term:"rational",children:(0,c.jsx)("i",{children:"rational"})})," number zero, the result of ",(0,c.jsx)(r,{term:"complex",children:(0,c.jsx)("b",{children:"complex"})})," is ",(0,c.jsx)(n.em,{children:"realpart"}),", a ",(0,c.jsx)(t,{term:"rational",children:(0,c.jsx)("i",{children:"rational"})}),". Otherwise, the result is a ",(0,c.jsx)(t,{term:"complex",children:(0,c.jsx)("i",{children:"complex"})})," ."]}),"\n",(0,c.jsxs)(n.p,{children:["If either ",(0,c.jsx)(n.em,{children:"realpart"})," or ",(0,c.jsx)(n.em,{children:"imagpart"})," is a ",(0,c.jsx)(t,{term:"float",children:(0,c.jsx)("i",{children:"float"})}),", the non-",(0,c.jsx)(t,{term:"float",children:(0,c.jsx)("i",{children:"float"})})," is converted to a ",(0,c.jsx)(t,{term:"float",children:(0,c.jsx)("i",{children:"float"})})," before the ",(0,c.jsx)(t,{term:"complex",children:(0,c.jsx)("i",{children:"complex"})})," is created. If ",(0,c.jsx)(n.em,{children:"imagpart"})," is not supplied, the imaginary part is a zero of the same ",(0,c.jsx)(t,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," as ",(0,c.jsx)(n.em,{children:"realpart"}),"; ",(0,c.jsx)(n.em,{children:"i.e."}),", (coerce 0 (type-of ",(0,c.jsx)(n.em,{children:"realpart"}),")) is effectively used."]}),"\n",(0,c.jsxs)(n.p,{children:["Type upgrading implies a movement upwards in the type hierarchy lattice. In the case of ",(0,c.jsx)(n.em,{children:"complexes"}),", the ",(0,c.jsx)(n.em,{children:"type-specifier"})," must be a subtype of (upgraded-complex-part-type ",(0,c.jsx)(n.em,{children:"type-specifier"}),"). If ",(0,c.jsx)(n.em,{children:"type-specifier1"})," is a subtype of ",(0,c.jsx)(n.em,{children:"type-specifier2"}),", then (upgraded-complex-element-type \u2019",(0,c.jsx)(n.em,{children:"type specifier1"}),") must also be a subtype of (upgraded-complex-element-type \u2019",(0,c.jsx)(n.em,{children:"type-specifier2"}),"). Two disjoint types can be upgraded into the same thing."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(complex 0) \u2192 0 \n(complex 0.0) \u2192 #C(0.0 0.0) \n(complex 1 1/2) \u2192 #C(1 1/2) \n(complex 1 .99) \u2192 #C(1.0 0.99) \n(complex 3/2 0.0) \u2192 #C(1.5 0.0) \n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(r,{term:"realpart",children:(0,c.jsx)("b",{children:"realpart"})}),", ",(0,c.jsx)(r,{term:"imagpart",children:(0,c.jsx)("b",{children:"imagpart"})}),", Section 2.4.8.11 (Sharpsign C)"]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const a={title:"complex"},o="complex",p={id:"chap-12/bc-c-dictionary/complex_function",title:"complex",description:"Expanded Reference: complex",source:"@site/docs/chap-12/bc-c-dictionary/complex_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/complex_function",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/complex_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/complex_function.md",tags:[],version:"current",frontMatter:{title:"complex"},sidebar:"tutorialSidebar",previous:{title:"cis",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/cis_function"},next:{title:"complex",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/complex_system-class"}},d={},x=[{value:"Expanded Reference: complex",id:"expanded-reference-complex",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"complex",children:"complex"}),"\n","\n","\n",(0,c.jsx)(l,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-complex",children:"Expanded Reference: complex"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(complex )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>l});var c=r(67294);const i={},t=c.createContext(i);function l(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);