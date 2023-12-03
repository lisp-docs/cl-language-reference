"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[90904],{69902:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var t=r(85893),i=r(11151);function c(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"bit-vector"})," ",(0,t.jsx)(n.em,{children:"System Class"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Class Precedence List:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"bit-vector"}),", ",(0,t.jsx)(n.strong,{children:"vector"}),", ",(0,t.jsx)(n.strong,{children:"array"}),", ",(0,t.jsx)(n.strong,{children:"sequence"}),", ",(0,t.jsx)(n.strong,{children:"t"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"bit vector"})," is a ",(0,t.jsx)(n.em,{children:"vector"})," the ",(0,t.jsx)(n.em,{children:"element type"})," of which is ",(0,t.jsx)(n.em,{children:"bit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"bit-vector"})," is a ",(0,t.jsx)(n.em,{children:"subtype"})," of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"vector"}),", for ",(0,t.jsx)(n.strong,{children:"bit-vector"})," means (vector bit)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Compound Type Specifier Kind:"})}),"\n",(0,t.jsx)(n.p,{children:"Abbreviating."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Compound Type Specifier Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:["(bit-vector [",(0,t.jsx)(n.em,{children:"size"}),"])"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Compound Type Specifier Arguments:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"size"}),"\u2014a non-negative ",(0,t.jsx)(n.em,{children:"fixnum"}),", or the ",(0,t.jsx)(n.em,{children:"symbol"})," ",(0,t.jsx)(n.strong,{children:"*"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Compound Type Specifier Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["This denotes the same ",(0,t.jsx)(n.em,{children:"type"})," as the ",(0,t.jsx)(n.em,{children:"type"})," (array bit (",(0,t.jsx)(n.em,{children:"size"}),")); that is, the set of ",(0,t.jsx)(n.em,{children:"bit vectors"})," of size ",(0,t.jsx)(n.em,{children:"size"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(n.p,{children:"Section 2.4.8.4 (Sharpsign Asterisk), Section 22.1.3.6 (Printing Bit Vectors), Section 15.1.2.2 (Required Kinds of Specialized Arrays)"})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const o={},d="bit-vector",l={id:"chap-15/bf-c-dictionary/bitvector",title:"bit-vector",description:"Expanded Reference: bit-vector",source:"@site/docs/chap-15/bf-c-dictionary/bitvector.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/bitvector",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/bitvector",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/bitvector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bit, sbit",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/bitaasbit"},next:{title:"bit-vector-p",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/bitvectorp"}},a={},h=[{value:"Expanded Reference: bit-vector",id:"expanded-reference-bit-vector",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bit-vector",children:"bit-vector"}),"\n","\n","\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-bit-vector",children:"Expanded Reference: bit-vector"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(bit-vector )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(67294);const i={},c=t.createContext(i);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);