"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[31974],{78910:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var c=r(85893),t=r(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"vector"})," ",(0,c.jsx)(n.em,{children:"Function"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"vector"})," &rest ",(0,c.jsx)(n.em,{children:"objects \u2192 vector"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"object"}),"\u2014an ",(0,c.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"vector"}),"\u2014a ",(0,c.jsx)(n.em,{children:"vector"})," of ",(0,c.jsx)(n.em,{children:"type"})," (vector t *)."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:["Creates a ",(0,c.jsx)(n.em,{children:"fresh simple general vector"})," whose size corresponds to the number of ",(0,c.jsx)(n.em,{children:"objects"}),". The ",(0,c.jsx)(n.em,{children:"vector"})," is initialized to contain the ",(0,c.jsx)(n.em,{children:"objects"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsxs)(n.p,{children:["(arrayp (setq v (vector 1 2 \u2019sirens))) ",(0,c.jsx)(n.em,{children:"\u2192 true"})]}),"\n",(0,c.jsxs)(n.p,{children:["(vectorp v) ",(0,c.jsx)(n.em,{children:"\u2192 true"})]}),"\n",(0,c.jsxs)(n.p,{children:["(simple-vector-p v) ",(0,c.jsx)(n.em,{children:"\u2192 true"})]}),"\n",(0,c.jsxs)(n.p,{children:["(length v) ",(0,c.jsx)(n.em,{children:"\u2192"})," 3"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"make-array"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"vector"})," is analogous to ",(0,c.jsx)(n.strong,{children:"list"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"(vector a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>)"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"\u2261"})," (make-array (list ",(0,c.jsx)(n.em,{children:"n"}),") ",":element-type"," t"]}),"\n",(0,c.jsx)(n.p,{children:":initial-contents"}),"\n",(0,c.jsx)(n.p,{children:"(list a<sub>1</sub> a<sub>2</sub> ... a<i><sub>n</sub></i>))"})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(s,{...e})}):s(e)}const o={},d="vector",l={id:"chap-15/bf-c-dictionary/vector",title:"vector",description:"Expanded Reference: vector",source:"@site/docs/chap-15/bf-c-dictionary/vector.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/vector",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/vector",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/vector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"upgraded-array-element-type",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/upgradedarrayelementtype"},next:{title:"vectorp",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/vectorp"}},a={},p=[{value:"Expanded Reference: vector",id:"expanded-reference-vector",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"vector",children:"vector"}),"\n","\n","\n",(0,c.jsx)(i,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-vector",children:"Expanded Reference: vector"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(vector )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var c=r(67294);const t={},s=c.createContext(t);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);