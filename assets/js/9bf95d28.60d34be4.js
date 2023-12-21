"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[7172],{97643:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var t=s(85893),i=s(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"listp"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"listp"})," ",(0,t.jsx)(n.em,{children:"object \u2192 generalized-boolean"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"object"}),"\u2014an ",(0,t.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,t.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns ",(0,t.jsx)(n.em,{children:"true"})," if ",(0,t.jsx)(n.em,{children:"object"})," is of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"list"}),"; otherwise, returns ",(0,t.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(listp nil) \u2192 true \n(listp (cons 1 2)) \u2192 true \n(listp (make-array 6)) \u2192 false \n(listp t) \u2192 false \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"consp"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"object"})," is a ",(0,t.jsx)(n.em,{children:"cons"}),", ",(0,t.jsx)(n.strong,{children:"listp"})," does not check whether ",(0,t.jsx)(n.em,{children:"object"})," is a ",(0,t.jsx)(n.em,{children:"proper list"}),"; it returns ",(0,t.jsx)(n.em,{children:"true"})," for any kind of ",(0,t.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["(listp ",(0,t.jsx)(n.em,{children:"object"}),") ",(0,t.jsx)(n.em,{children:"\u2261"})," (typep ",(0,t.jsx)(n.em,{children:"object"})," \u2019list) ",(0,t.jsx)(n.em,{children:"\u2261"})," (typep ",(0,t.jsx)(n.em,{children:"object"})," \u2019(or cons null))"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}const l={title:"listp"},o="listp",d={id:"chap-14/be-c-dictionary/listp_function",title:"listp",description:"Expanded Reference: listp",source:"@site/docs/chap-14/be-c-dictionary/listp_function.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/listp_function",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/listp_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/listp_function.md",tags:[],version:"current",frontMatter:{title:"listp"},sidebar:"tutorialSidebar",previous:{title:"list",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/list_system-class"},next:{title:"make-list",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/make-list_function"}},a={},p=[{value:"Expanded Reference: listp",id:"expanded-reference-listp",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"listp",children:"listp"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-listp",children:"Expanded Reference: listp"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(listp )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var t=s(67294);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);