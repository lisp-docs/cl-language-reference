"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[93505],{95825:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var s=i(85893),t=i(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"make-list"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"make-list"})," ",(0,s.jsx)(n.em,{children:"size"})," &key ",(0,s.jsx)(n.em,{children:"initial-element \u2192 list"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"size"}),"\u2014a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"initial-element"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),". The default is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"list"}),"\u2014a ",(0,s.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns a ",(0,s.jsx)(n.em,{children:"list"})," of ",(0,s.jsx)(n.em,{children:"length"})," given by ",(0,s.jsx)(n.em,{children:"size"}),", each of the ",(0,s.jsx)(n.em,{children:"elements"})," of which is ",(0,s.jsx)(n.em,{children:"initial-element"}),". ",(0,s.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\n(make-list 5) *\u2192* (NIL NIL NIL NIL NIL) \n\n\n\n(make-list 3 :initial-element \u2019rah) *\u2192* (RAH RAH RAH) \n\n\n\n(make-list 2 :initial-element \u2019(1 2 3)) *\u2192* ((1 2 3) (1 2 3)) \n\n\n\n(make-list 0) *\u2192* NIL ;*i.e.*, () \n\n\n\n(make-list 0 :initial-element \u2019new-element) *\u2192* NIL \n\n\n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"size"})," is not a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"cons"}),", ",(0,s.jsx)(n.strong,{children:"list"})]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}const l={},a="make-list",d={id:"chap-14/be-c-dictionary/makelist",title:"make-list",description:"Expanded Reference: make-list",source:"@site/docs/chap-14/be-c-dictionary/makelist.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/makelist",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/makelist",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/makelist.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"listp",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/listp"},next:{title:"mapc, mapcar, mapcan, mapl, maplist, mapcon",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/mapc"}},o={},m=[{value:"Expanded Reference: make-list",id:"expanded-reference-make-list",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"make-list",children:"make-list"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-make-list",children:"Expanded Reference: make-list"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(make-list )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>c});var s=i(67294);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);