"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[80890],{36063:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var c=s(85893),i=s(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"acons"})," ",(0,c.jsx)(n.em,{children:"Function"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"acons"})," ",(0,c.jsx)(n.em,{children:"key datum alist \u2192 new-alist"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"key"}),"\u2014an ",(0,c.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"datum"}),"\u2014an ",(0,c.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"alist"}),"\u2014an ",(0,c.jsx)(n.em,{children:"association list"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"new-alist"}),"\u2014an ",(0,c.jsx)(n.em,{children:"association list"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:["Creates a ",(0,c.jsx)(n.em,{children:"fresh cons"}),", the ",(0,c.jsx)(n.em,{children:"cdr"})," of which is ",(0,c.jsx)(n.em,{children:"alist"})," and the ",(0,c.jsx)(n.em,{children:"car"})," of which is another ",(0,c.jsx)(n.em,{children:"fresh cons"}),", the ",(0,c.jsx)(n.em,{children:"car"})," of which is ",(0,c.jsx)(n.em,{children:"key"})," and the ",(0,c.jsx)(n.em,{children:"cdr"})," of which is ",(0,c.jsx)(n.em,{children:"datum"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:'\n(setq alist \u2019()) \u2192 NIL \n(acons 1 "one" alist) \u2192 ((1 . "one")) \nalist \u2192 NIL \n(setq alist (acons 1 "one" (acons 2 "two" alist))) \u2192 ((1 . "one") (2 . "two")) (assoc 1 alist) \u2192 (1 . "one") \n(setq alist (acons 1 "uno" alist)) \u2192 ((1 . "uno") (1 . "one") (2 . "two")) \n(assoc 1 alist) \u2192 (1 . "uno") \n\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"assoc"}),", ",(0,c.jsx)(n.strong,{children:"pairlis"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(n.p,{children:["(acons ",(0,c.jsx)(n.em,{children:"key datum alist"}),") ",(0,c.jsx)(n.em,{children:"\u2261"})," (cons (cons ",(0,c.jsx)(n.em,{children:"key datum"}),") ",(0,c.jsx)(n.em,{children:"alist"}),")"]})]})}function t(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}const o={title:"acons"},a="acons",l={id:"chap-14/be-c-dictionary/acons_function",title:"acons",description:"Expanded Reference: acons",source:"@site/docs/chap-14/be-c-dictionary/acons_function.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/acons_function",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/acons_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/acons_function.md",tags:[],version:"current",frontMatter:{title:"acons"},sidebar:"tutorialSidebar",previous:{title:"14.2 Conses Dictionary",permalink:"/cl-language-reference/docs/category/142-conses-dictionary"},next:{title:"adjoin",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/adjoin_function"}},d={},h=[{value:"Expanded Reference: acons",id:"expanded-reference-acons",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"acons",children:"acons"}),"\n","\n","\n",(0,c.jsx)(t,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-acons",children:"Expanded Reference: acons"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(acons )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var c=s(67294);const i={},r=c.createContext(i);function t(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);