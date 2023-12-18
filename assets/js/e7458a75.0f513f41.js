"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[55257],{31639:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var c=r(85893),s=r(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"upper-case-p, lower-case-p, both-case-p"})," ",(0,c.jsx)(n.em,{children:"Function"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"upper-case-p"})," ",(0,c.jsx)(n.em,{children:"character \u2192 generalized-boolean"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"lower-case-p"})," ",(0,c.jsx)(n.em,{children:"character \u2192 generalized-boolean"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"both-case-p"})," ",(0,c.jsx)(n.em,{children:"character \u2192 generalized-boolean"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"character"}),"\u2014a ",(0,c.jsx)(n.em,{children:"character"})," ."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,c.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:["These functions test the case of a given ",(0,c.jsx)(n.em,{children:"character"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"upper-case-p"})," returns ",(0,c.jsx)(n.em,{children:"true"})," if ",(0,c.jsx)(n.em,{children:"character"})," is an ",(0,c.jsx)(n.em,{children:"uppercase character"})," ; otherwise, returns ",(0,c.jsx)(n.em,{children:"false"}),". ",(0,c.jsx)(n.strong,{children:"lower-case-p"})," returns ",(0,c.jsx)(n.em,{children:"true"})," if ",(0,c.jsx)(n.em,{children:"character"})," is a ",(0,c.jsx)(n.em,{children:"lowercase character"})," ; otherwise, returns ",(0,c.jsx)(n.em,{children:"false"}),". ",(0,c.jsx)(n.strong,{children:"both-case-p"})," returns ",(0,c.jsx)(n.em,{children:"true"})," if ",(0,c.jsx)(n.em,{children:"character"})," is a ",(0,c.jsx)(n.em,{children:"character"})," with ",(0,c.jsx)(n.em,{children:"case"}),"; otherwise, returns ",(0,c.jsx)(n.em,{children:"false"}),". ",(0,c.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"\n\n(upper-case-p #\\A) \u2192 true \n\n(upper-case-p #\\a) \u2192 false \n\n(both-case-p #\\a) \u2192 true \n\n(both-case-p #\\5) \u2192 false \n\n(lower-case-p #\\5) \u2192 false \n\n(upper-case-p #\\5) \u2192 false \n\n;; This next example presupposes an implementation \n\n;; in which #\\Bell is an implementation-defined character. \n\n(lower-case-p #\\Bell) \u2192 false \n\n\n\n\n\n\n\n\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,c.jsxs)(n.p,{children:["Should signal an error of ",(0,c.jsx)(n.em,{children:"type"})," ",(0,c.jsx)(n.strong,{children:"type-error"})," if ",(0,c.jsx)(n.em,{children:"character"})," is not a ",(0,c.jsx)(n.em,{children:"character"})," ."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"char-upcase"}),", ",(0,c.jsx)(n.strong,{children:"char-downcase"}),", Section 13.1.4.3 (Characters With Case), Section 13.1.10 (Documentation of Implementation-Defined Scripts)"]})]})}function t(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}const p={},o="upper-case-p, lower-case-p, both-case-p",i={id:"chap-13/bd-c-dictionary/upper-case-p_lower-case-p_both-case-p_function",title:"upper-case-p, lower-case-p, both-case-p",description:"Expanded Reference: upper-case-p, lower-case-p, both-case-p",source:"@site/docs/chap-13/bd-c-dictionary/upper-case-p_lower-case-p_both-case-p_function.md",sourceDirName:"chap-13/bd-c-dictionary",slug:"/chap-13/bd-c-dictionary/upper-case-p_lower-case-p_both-case-p_function",permalink:"/cl-language-reference/docs/chap-13/bd-c-dictionary/upper-case-p_lower-case-p_both-case-p_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-13/bd-c-dictionary/upper-case-p_lower-case-p_both-case-p_function.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"standard-char",permalink:"/cl-language-reference/docs/chap-13/bd-c-dictionary/standard-char_type"},next:{title:"13.1 Character Concepts",permalink:"/cl-language-reference/docs/chap-13/bd-b-character-concepts"}},l={},d=[{value:"Expanded Reference: upper-case-p, lower-case-p, both-case-p",id:"expanded-reference-upper-case-p-lower-case-p-both-case-p",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"upper-case-p-lower-case-p-both-case-p",children:"upper-case-p, lower-case-p, both-case-p"}),"\n","\n","\n",(0,c.jsx)(t,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-upper-case-p-lower-case-p-both-case-p",children:"Expanded Reference: upper-case-p, lower-case-p, both-case-p"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(upper-case-p, lower-case-p, both-case-p )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>p,a:()=>t});var c=r(67294);const s={},a=c.createContext(s);function t(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);