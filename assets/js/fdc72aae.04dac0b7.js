"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[81509],{13634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=t(85893),r=t(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"butlast, nbutlast"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"butlast"})," ",(0,s.jsx)(n.em,{children:"list"})," &optional ",(0,s.jsx)(n.em,{children:"n \u2192 result-list"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"nbutlast"})," ",(0,s.jsx)(n.em,{children:"list"})," &optional ",(0,s.jsx)(n.em,{children:"n \u2192 result-list"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"list"}),"\u2014a ",(0,s.jsx)(n.em,{children:"list"}),", which might be a ",(0,s.jsx)(n.em,{children:"dotted list"})," but must not be a ",(0,s.jsx)(n.em,{children:"circular list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"n"}),"\u2014a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"result-list"}),"\u2014a ",(0,s.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"butlast"})," returns a copy of ",(0,s.jsx)(n.em,{children:"list"})," from which the last ",(0,s.jsx)(n.em,{children:"n"})," conses have been omitted. If ",(0,s.jsx)(n.em,{children:"n"})," is not supplied, its value is 1. If there are fewer than ",(0,s.jsx)(n.em,{children:"n"})," conses in ",(0,s.jsx)(n.em,{children:"list"}),", ",(0,s.jsx)(n.strong,{children:"nil"})," is returned and, in the case of ",(0,s.jsx)(n.strong,{children:"nbutlast"}),", ",(0,s.jsx)(n.em,{children:"list"})," is not modified."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"nbutlast"})," is like ",(0,s.jsx)(n.strong,{children:"butlast"}),", but ",(0,s.jsx)(n.strong,{children:"nbutlast"})," may modify ",(0,s.jsx)(n.em,{children:"list"}),". It changes the ",(0,s.jsx)(n.em,{children:"cdr"})," of the ",(0,s.jsx)(n.em,{children:"cons n"}),"+1 from the end of the ",(0,s.jsx)(n.em,{children:"list"})," to ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(setq lst \u2019(1 2 3 4 5 6 7 8 9)) \u2192 (1 2 3 4 5 6 7 8 9) \n(butlast lst) \u2192 (1 2 3 4 5 6 7 8) \n(butlast lst 5) \u2192 (1 2 3 4) \n(butlast lst (+ 5 5)) \u2192 NIL \nlst \u2192 (1 2 3 4 5 6 7 8 9) \n(nbutlast lst 3) \u2192 (1 2 3 4 5 6) \nlst \u2192 (1 2 3 4 5 6) \n(nbutlast lst 99) \u2192 NIL \nlst \u2192 (1 2 3 4 5 6) \n(butlast \u2019(a b c d)) \u2192 (A B C) \n(butlast \u2019((a b) (c d))) \u2192 ((A B)) \n(butlast \u2019(a)) \u2192 NIL \n(butlast nil) \u2192 NIL \n(setq foo (list \u2019a \u2019b \u2019c \u2019d)) \u2192 (A B C D) \n(nbutlast foo) \u2192 (A B C) \nfoo \u2192 (A B C) \n\n(nbutlast (list \u2019a)) \u2192 NIL \n(nbutlast \u2019()) \u2192 NIL \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"list"})," is not a ",(0,s.jsx)(n.em,{children:"proper list"})," or a ",(0,s.jsx)(n.em,{children:"dotted list"}),". Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"n"})," is not a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["(butlast ",(0,s.jsx)(n.em,{children:"list n"}),") ",(0,s.jsx)(n.em,{children:"\u2261"})," (ldiff ",(0,s.jsx)(n.em,{children:"list"})," (last ",(0,s.jsx)(n.em,{children:"list n"}),"))"]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}const c={},i="butlast, nbutlast",d={id:"chap-14/be-c-dictionary/butlast",title:"butlast, nbutlast",description:"Expanded Reference: butlast, nbutlast",source:"@site/docs/chap-14/be-c-dictionary/butlast.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/butlast",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/butlast",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/butlast.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"atom",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/atom"},next:{title:"car, cdr, caar, cadr, cdar, cddr, caaar, caadr, cadar, caddr, cdaar, cdadr, cddar, cdddr, caaaar, caaadr, caadar, caaddr, cadaar, cadadr, caddar, cadddr, cdaaar, cdaadr, cdadar, cdaddr, cddaar, cddadr, cdddar, cddddr",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/car"}},o={},h=[{value:"Expanded Reference: butlast, nbutlast",id:"expanded-reference-butlast-nbutlast",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"butlast-nbutlast",children:"butlast, nbutlast"}),"\n","\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-butlast-nbutlast",children:"Expanded Reference: butlast, nbutlast"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(butlast, nbutlast )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var s=t(67294);const r={},l=s.createContext(r);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);