"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[48906],{41823:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var s=r(85893),c=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"svref"})," ",(0,s.jsx)(n.em,{children:"Accessor"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"svref"})," ",(0,s.jsx)(n.em,{children:"simple-vector index \u2192 element"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"(setf (svref"})," ",(0,s.jsx)(n.em,{children:"simple-vector index"}),"**)** ",(0,s.jsx)(n.em,{children:"new-element"}),"**)**"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"simple-vector"}),"\u2014a ",(0,s.jsx)(n.em,{children:"simple vector"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"index"}),"\u2014a ",(0,s.jsx)(n.em,{children:"valid array index"})," for the ",(0,s.jsx)(n.em,{children:"simple-vector"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"element"}),", ",(0,s.jsx)(n.em,{children:"new-element"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"})," (whose ",(0,s.jsx)(n.em,{children:"type"})," is a ",(0,s.jsx)(n.em,{children:"subtype"})," of the ",(0,s.jsx)(n.em,{children:"array element type"})," of the ",(0,s.jsx)(n.em,{children:"simple-vector"}),")."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Accesses"})," the ",(0,s.jsx)(n.em,{children:"element"})," of ",(0,s.jsx)(n.em,{children:"simple-vector"})," specified by ",(0,s.jsx)(n.em,{children:"index"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"\n(simple-vector-p (setq v (vector 1 2 \u2019sirens))) \u2192 true \n(svref v 0) \u2192 1 \n(svref v 2) \u2192 SIRENS \n(setf (svref v 1) \u2019newcomer) \u2192 NEWCOMER \nv \u2192 #(1 NEWCOMER SIRENS) \n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"aref"}),", ",(0,s.jsx)(n.strong,{children:"sbit"}),", ",(0,s.jsx)(n.strong,{children:"schar"}),", ",(0,s.jsx)(n.strong,{children:"vector"}),", Section 3.2.1 (Compiler Terminology)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"svref"})," is identical to ",(0,s.jsx)(n.strong,{children:"aref"})," except that it requires its first argument to be a ",(0,s.jsx)(n.em,{children:"simple vector"})," . (svref ",(0,s.jsx)(n.em,{children:"v i"}),") ",(0,s.jsx)(n.em,{children:"\u2261"})," (aref (the simple-vector ",(0,s.jsx)(n.em,{children:"v"}),") ",(0,s.jsx)(n.em,{children:"i"}),")"]})]})}function t(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const l={},d="svref",o={id:"chap-15/bf-c-dictionary/svref",title:"svref",description:"Expanded Reference: svref",source:"@site/docs/chap-15/bf-c-dictionary/svref.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/svref",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/svref",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/svref.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"simple-vector-p",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/simplevectorp"},next:{title:"upgraded-array-element-type",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/upgradedarrayelementtype"}},a={},p=[{value:"Expanded Reference: svref",id:"expanded-reference-svref",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"svref",children:"svref"}),"\n","\n","\n",(0,s.jsx)(t,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-svref",children:"Expanded Reference: svref"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(svref )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var s=r(67294);const c={},i=s.createContext(c);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);