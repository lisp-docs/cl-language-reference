"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[81402],{78156:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>p});var s=r(85893),c=r(11151);function i(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"boundp"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"boundp"})," ",(0,s.jsx)(n.em,{children:"symbol \u2192 generalized-boolean"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,s.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.em,{children:"true"})," if ",(0,s.jsx)(n.em,{children:"symbol"})," is ",(0,s.jsx)(n.em,{children:"bound"}),"; otherwise, returns ",(0,s.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsxs)(n.p,{children:["(setq x 1) ",(0,s.jsx)(n.em,{children:"\u2192"})," 1"]}),"\n",(0,s.jsxs)(n.p,{children:["(boundp \u2019x) ",(0,s.jsx)(n.em,{children:"\u2192 true"})]}),"\n",(0,s.jsxs)(n.p,{children:["(makunbound \u2019x) ",(0,s.jsx)(n.em,{children:"\u2192"})," X"]}),"\n",(0,s.jsxs)(n.p,{children:["(boundp \u2019x) ",(0,s.jsx)(n.em,{children:"\u2192 false"})]}),"\n",(0,s.jsxs)(n.p,{children:["(let ((x 2)) (boundp \u2019x)) ",(0,s.jsx)(n.em,{children:"\u2192 false"})]}),"\n",(0,s.jsxs)(n.p,{children:["(let ((x 2)) (declare (special x)) (boundp \u2019x)) ",(0,s.jsx)(n.em,{children:"\u2192 true"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"symbol"})," is not a ",(0,s.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"set"}),", ",(0,s.jsx)(n.strong,{children:"setq"}),", ",(0,s.jsx)(n.strong,{children:"symbol-value"}),", ",(0,s.jsx)(n.strong,{children:"makunbound"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"function"})," ",(0,s.jsx)(n.strong,{children:"bound"})," determines only whether a ",(0,s.jsx)(n.em,{children:"symbol"})," has a value in the ",(0,s.jsx)(n.em,{children:"global environment"}),"; any ",(0,s.jsx)(n.em,{children:"lexical bindings"})," are ignored."]})]})}function o(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const d={},l="boundp",t={id:"chap-10/ba-c-dictionary/boundp",title:"boundp",description:"Expanded Reference: boundp",source:"@site/docs/chap-10/ba-c-dictionary/boundp.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/boundp",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/boundp",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/boundp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"10.2 Symbols Dictionary",permalink:"/cl-language-reference/docs/category/102-symbols-dictionary"},next:{title:"copy-symbol",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/copysymbol"}},a={},p=[{value:"Expanded Reference: boundp",id:"expanded-reference-boundp",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"boundp",children:"boundp"}),"\n","\n","\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-boundp",children:"Expanded Reference: boundp"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(boundp )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>o});var s=r(67294);const c={},i=s.createContext(c);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);