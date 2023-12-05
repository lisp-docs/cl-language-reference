"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[11090],{31264:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>u});var s=r(85893),c=r(11151);function o(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"makunbound"})," ",(0,s.jsx)(e.em,{children:"Function"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"makunbound"})," ",(0,s.jsx)(e.em,{children:"symbol \u2192 symbol"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"symbol"}),"\u2014a ",(0,s.jsx)(e.em,{children:"symbol"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(e.p,{children:["Makes the ",(0,s.jsx)(e.em,{children:"symbol"})," be ",(0,s.jsx)(e.em,{children:"unbound"}),", regardless of whether it was previously ",(0,s.jsx)(e.em,{children:"bound"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:" \n\n\n\n(setf (symbol-value \u2019a) 1) \n\n\n\n(boundp \u2019a) *\u2192 true* \n\n\n\na *\u2192* 1 \n\n\n\n(makunbound \u2019a) *\u2192* A \n\n\n\n(boundp \u2019a) *\u2192 false* \n\n\n\n\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.em,{children:"value cell"})," of ",(0,s.jsx)(e.em,{children:"symbol"})," is modified."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(e.p,{children:["Should signal an error of ",(0,s.jsx)(e.em,{children:"type"})," ",(0,s.jsx)(e.strong,{children:"type-error"})," if ",(0,s.jsx)(e.em,{children:"symbol"})," is not a ",(0,s.jsx)(e.em,{children:"symbol"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"boundp"}),", ",(0,s.jsx)(e.strong,{children:"fmakunbound"})]})]})}function a(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}const d={},i="makunbound",t={id:"chap-10/ba-c-dictionary/makunbound",title:"makunbound",description:"Expanded Reference: makunbound",source:"@site/docs/chap-10/ba-c-dictionary/makunbound.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/makunbound",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/makunbound",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/makunbound.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"make-symbol",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/makesymbol"},next:{title:"remprop",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/remprop"}},l={},u=[{value:"Expanded Reference: makunbound",id:"expanded-reference-makunbound",level:2}];function p(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"makunbound",children:"makunbound"}),"\n","\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(e.h2,{id:"expanded-reference-makunbound",children:"Expanded Reference: makunbound"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:"(makunbound )\n"})})]})}function m(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>d,a:()=>a});var s=r(67294);const c={},o=s.createContext(c);function a(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:a(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);