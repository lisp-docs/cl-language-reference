"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[28520],{14968:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var r=c(85893),s=c(11151);function i(e){const n={em:"em",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"lcm"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"lcm"})," &rest ",(0,r.jsx)(n.em,{children:"integers \u2192 least-common-multiple"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"integer"}),"\u2014an ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"least-common-multiple"}),"\u2014a non-negative ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"lcm"})," returns the least common multiple of the ",(0,r.jsx)(n.em,{children:"integers"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If no ",(0,r.jsx)(n.em,{children:"integer"})," is supplied, the ",(0,r.jsx)(n.em,{children:"integer"})," 1 is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["If only one ",(0,r.jsx)(n.em,{children:"integer"})," is supplied, the absolute value of that ",(0,r.jsx)(n.em,{children:"integer"})," is returned."]}),"\n",(0,r.jsx)(n.p,{children:"For two arguments that are not both zero,"}),"\n",(0,r.jsxs)(n.p,{children:["(lcm a b) ",(0,r.jsx)(n.em,{children:"\u2261"})," (/ (abs (* a b)) (gcd a b))"]}),"\n",(0,r.jsx)(n.p,{children:"If one or both arguments are zero,"}),"\n",(0,r.jsxs)(n.p,{children:["(lcm a 0) ",(0,r.jsx)(n.em,{children:"\u2261"})," (lcm 0 a) ",(0,r.jsx)(n.em,{children:"\u2261"})," 0"]}),"\n",(0,r.jsx)(n.p,{children:"For three or more arguments,"}),"\n",(0,r.jsxs)(n.p,{children:["(lcm a b c ... z) ",(0,r.jsx)(n.em,{children:"\u2261"})," (lcm (lcm a b) c ... z)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsxs)(n.p,{children:["(lcm 10) ",(0,r.jsx)(n.em,{children:"\u2192"})," 10"]}),"\n",(0,r.jsxs)(n.p,{children:["(lcm 25 30) ",(0,r.jsx)(n.em,{children:"\u2192"})," 150"]}),"\n",(0,r.jsxs)(n.p,{children:["(lcm -24 18 10) ",(0,r.jsx)(n.em,{children:"\u2192"})," 360"]}),"\n",(0,r.jsxs)(n.p,{children:["(lcm 14 35) ",(0,r.jsx)(n.em,{children:"\u2192"})," 70"]}),"\n",(0,r.jsxs)(n.p,{children:["(lcm 0 5) ",(0,r.jsx)(n.em,{children:"\u2192"})," 0"]}),"\n",(0,r.jsxs)(n.p,{children:["(lcm 1 2 3 4 5 6) ",(0,r.jsx)(n.em,{children:"\u2192"})," 60"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal ",(0,r.jsx)(n.strong,{children:"type-error"})," if any argument is not an ",(0,r.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"gcd"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const t={},d="lcm",o={id:"chap-12/bc-c-dictionary/lcm",title:"lcm",description:"Expanded Reference: lcm",source:"@site/docs/chap-12/bc-c-dictionary/lcm.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/lcm",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/lcm",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/lcm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"integerp",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/integerp"},next:{title:"log",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/log"}},a={},h=[{value:"Expanded Reference: lcm",id:"expanded-reference-lcm",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"lcm",children:"lcm"}),"\n","\n","\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-lcm",children:"Expanded Reference: lcm"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(lcm )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>t,a:()=>l});var r=c(67294);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);