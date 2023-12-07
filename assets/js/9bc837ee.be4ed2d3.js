"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[57408],{71685:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var c=s(85893),t=s(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"copy-alist"})," ",(0,c.jsx)(n.em,{children:"Function"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"copy-alist"})," ",(0,c.jsx)(n.em,{children:"alist \u2192 new-alist"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"alist"}),"\u2014an ",(0,c.jsx)(n.em,{children:"association list"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"new-alist"}),"\u2014an ",(0,c.jsx)(n.em,{children:"association list"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"copy-alist"})," returns a ",(0,c.jsx)(n.em,{children:"copy"})," of ",(0,c.jsx)(n.em,{children:"alist"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.em,{children:"list structure"})," of ",(0,c.jsx)(n.em,{children:"alist"})," is copied, and the ",(0,c.jsx)(n.em,{children:"elements"})," of ",(0,c.jsx)(n.em,{children:"alist"})," which are ",(0,c.jsx)(n.em,{children:"conses"})," are also copied (as ",(0,c.jsx)(n.em,{children:"conses"})," only). Any other ",(0,c.jsx)(n.em,{children:"objects"})," which are referred to, whether directly or indirectly, by the ",(0,c.jsx)(n.em,{children:"alist"})," continue to be shared."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:'\n(defparameter \\*alist\\* (acons 1 "one" (acons 2 "two" \u2019()))) \n\n\n\n\\*alist\\* \u2192 ((1 . "one") (2 . "two")) \n(defparameter \\*list-copy\\* (copy-list \\*alist\\*)) \n\\*list-copy\\* \u2192 ((1 . "one") (2 . "two")) \n(defparameter \\*alist-copy\\* (copy-alist \\*alist\\*)) \n\\*alist-copy\\* \u2192 ((1 . "one") (2 . "two")) \n(setf (cdr (assoc 2 \\*alist-copy\\*)) "deux") \u2192 "deux" \n\\*alist-copy\\* \u2192 ((1 . "one") (2 . "deux")) \n\\*alist\\* \u2192 ((1 . "one") (2 . "two")) \n(setf (cdr (assoc 1 \\*list-copy\\*)) "uno") \u2192 "uno" \n\\*list-copy\\* \u2192 ((1 . "uno") (2 . "two")) \n\\*alist\\* \u2192 ((1 . "uno") (2 . "two")) \n\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"copy-list"})})]})}function r(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}const o={},a="copy-alist",l={id:"chap-14/be-c-dictionary/copyalist",title:"copy-alist",description:"Expanded Reference: copy-alist",source:"@site/docs/chap-14/be-c-dictionary/copyalist.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/copyalist",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/copyalist",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/copyalist.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"consp",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/consp"},next:{title:"copy-list",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/copylist"}},d={},p=[{value:"Expanded Reference: copy-alist",id:"expanded-reference-copy-alist",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"copy-alist",children:"copy-alist"}),"\n","\n","\n",(0,c.jsx)(r,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-copy-alist",children:"Expanded Reference: copy-alist"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(copy-alist )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var c=s(67294);const t={},i=c.createContext(t);function r(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);