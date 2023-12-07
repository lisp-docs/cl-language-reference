"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[43010],{77064:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(85893),i=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"array-has-fill-pointer-p"})," ",(0,a.jsx)(n.em,{children:"Function"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"array-has-fill-pointer-p"})," ",(0,a.jsx)(n.em,{children:"array \u2192 generalized-boolean"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"array"}),"\u2014an ",(0,a.jsx)(n.em,{children:"array"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,a.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(n.p,{children:["Returns ",(0,a.jsx)(n.em,{children:"true"})," if ",(0,a.jsx)(n.em,{children:"array"})," has a ",(0,a.jsx)(n.em,{children:"fill pointer"})," ; otherwise returns ",(0,a.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"\n(array-has-fill-pointer-p (make-array 4)) \u2192 implementation-dependent \n(array-has-fill-pointer-p (make-array \u2019(2 3))) \u2192 false \n(array-has-fill-pointer-p \n (make-array 8 \n\t     :fill-pointer 2 \n\t     :initial-element \u2019filler)) \u2192 true \n\n\n\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,a.jsxs)(n.p,{children:["Should signal an error of ",(0,a.jsx)(n.em,{children:"type"})," ",(0,a.jsx)(n.strong,{children:"type-error"})," if its argument is not an ",(0,a.jsx)(n.em,{children:"array"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"make-array"}),", ",(0,a.jsx)(n.strong,{children:"fill-pointer"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(n.p,{children:["Since ",(0,a.jsx)(n.em,{children:"arrays"})," of ",(0,a.jsx)(n.em,{children:"rank"})," other than one cannot have a ",(0,a.jsx)(n.em,{children:"fill pointer"})," , ",(0,a.jsx)(n.strong,{children:"array-has-fill-pointer-p"})," always returns ",(0,a.jsx)(n.strong,{children:"nil"})," when its argument is such an array."]})]})}function t(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}const l={},c="array-has-fill-pointer-p",o={id:"chap-15/bf-c-dictionary/arrayhasfillpointerp",title:"array-has-fill-pointer-p",description:"Expanded Reference: array-has-fill-pointer-p",source:"@site/docs/chap-15/bf-c-dictionary/arrayhasfillpointerp.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/arrayhasfillpointerp",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/arrayhasfillpointerp",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/arrayhasfillpointerp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"array-element-type",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/arrayelementtype"},next:{title:"array-in-bounds-p",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/arrayinboundsp"}},p={},d=[{value:"Expanded Reference: array-has-fill-pointer-p",id:"expanded-reference-array-has-fill-pointer-p",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array-has-fill-pointer-p",children:"array-has-fill-pointer-p"}),"\n","\n","\n",(0,a.jsx)(t,{}),"\n",(0,a.jsx)(n.h2,{id:"expanded-reference-array-has-fill-pointer-p",children:"Expanded Reference: array-has-fill-pointer-p"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"(array-has-fill-pointer-p )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var a=r(67294);const i={},s=a.createContext(i);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);