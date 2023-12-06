"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[14802],{55171:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var r=s(85893),i=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"mask-field"})," ",(0,r.jsx)(n.em,{children:"Accessor"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"mask-field"})," ",(0,r.jsx)(n.em,{children:"bytespec integer ! masked-integer"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"(setf (mask-field"})," ",(0,r.jsx)(n.em,{children:"bytespec place"}),"**)** ",(0,r.jsx)(n.em,{children:"new-masked-integer"}),"**)**"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"bytespec"}),"\u2014a ",(0,r.jsx)(n.em,{children:"byte specifier"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"integer"}),"\u2014an ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"masked-integer"}),", ",(0,r.jsx)(n.em,{children:"new-masked-integer"}),"\u2014a non-negative ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"mask-field"})," performs a \u201cmask\u201d operation on ",(0,r.jsx)(n.em,{children:"integer"}),". It returns an ",(0,r.jsx)(n.em,{children:"integer"})," that has the same bits as ",(0,r.jsx)(n.em,{children:"integer"})," in the ",(0,r.jsx)(n.em,{children:"byte"})," specified by ",(0,r.jsx)(n.em,{children:"bytespec"}),", but that has zero-bits everywhere else."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setf"})," may be used with ",(0,r.jsx)(n.strong,{children:"mask-field"})," to modify a byte within the ",(0,r.jsx)(n.em,{children:"integer"})," that is stored in a given ",(0,r.jsx)(n.em,{children:"place"}),". The e\u21b5ect is to perform a ",(0,r.jsx)(n.strong,{children:"deposit-field"})," operation and then store the result back into the ",(0,r.jsx)(n.em,{children:"place"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:" \n\n(mask-field (byte 1 5) -1) \u2192 32 \n\n(setq a 15) \u2192 15 \n\n(mask-field (byte 2 0) a) \u2192 3 \n\na \u2192 15 \n\n(setf (mask-field (byte 2 0) a) 1) \u2192 1 \n\na \u2192 13 \n\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"byte"}),", ",(0,r.jsx)(n.strong,{children:"ldb"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["(ldb ",(0,r.jsx)(n.em,{children:"bs"})," (mask-field ",(0,r.jsx)(n.em,{children:"bs n"}),")) \u2261 (ldb ",(0,r.jsx)(n.em,{children:"bs n"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["(logbitp ",(0,r.jsx)(n.em,{children:"j"})," (mask-field (byte ",(0,r.jsx)(n.em,{children:"s p"}),") ",(0,r.jsx)(n.em,{children:"n"}),"))"]}),"\n",(0,r.jsxs)(n.p,{children:["\u2261 (and (>= ",(0,r.jsx)(n.em,{children:"j p"}),") (< ",(0,r.jsx)(n.em,{children:"j s"}),") (logbitp ",(0,r.jsx)(n.em,{children:"j n"}),"))"]}),"\n",(0,r.jsxs)(n.p,{children:["(mask-field ",(0,r.jsx)(n.em,{children:"bs n"}),") \u2261 (logand ",(0,r.jsx)(n.em,{children:"n"})," (dpb -1 ",(0,r.jsx)(n.em,{children:"bs"})," 0))"]})]})}function t(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const d={},l="mask-field",a={id:"chap-12/bc-c-dictionary/maskfield",title:"mask-field",description:"Expanded Reference: mask-field",source:"@site/docs/chap-12/bc-c-dictionary/maskfield.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/maskfield",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/maskfield",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/maskfield.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"make-random-state",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/makerandomstate"},next:{title:"max, min",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/max"}},o={},h=[{value:"Expanded Reference: mask-field",id:"expanded-reference-mask-field",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mask-field",children:"mask-field"}),"\n","\n","\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-mask-field",children:"Expanded Reference: mask-field"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(mask-field )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var r=s(67294);const i={},c=r.createContext(i);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);