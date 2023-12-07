"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[95004],{47340:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=r(85893),s=r(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"return"})," ",(0,t.jsx)(n.em,{children:"Macro"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"return"})," [",(0,t.jsx)(n.em,{children:"result"}),"] \u2192"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"result"}),"\u2014a ",(0,t.jsx)(n.em,{children:"form"}),"; evaluated. The default is ",(0,t.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns, as if by ",(0,t.jsx)(n.strong,{children:"return-from"}),", from the ",(0,t.jsx)(n.em,{children:"block"})," named ",(0,t.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(block nil (return) 1) \u2192 NIL \n(block nil (return 1) 2) \u2192 1 \n(block nil (return (values 1 2)) 3) \u2192 1, 2 \n(block nil (block alpha (return 1) 2)) \u2192 1 \n(block alpha (block nil (return 1)) 2) \u2192 2 \n(block nil (block nil (return 1) 2)) \u2192 1 \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"block"}),", ",(0,t.jsx)(n.strong,{children:"return-from"}),", Section 3.1 (Evaluation)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["(return) ",(0,t.jsx)(n.em,{children:"\u2261"})," (return-from nil)"]}),"\n",(0,t.jsxs)(n.p,{children:["(return ",(0,t.jsx)(n.em,{children:"form"}),") ",(0,t.jsx)(n.em,{children:"\u2261"})," (return-from nil ",(0,t.jsx)(n.em,{children:"form"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"implicit blocks established"})," by ",(0,t.jsx)(n.em,{children:"macros"})," such as ",(0,t.jsx)(n.strong,{children:"do"})," are often named ",(0,t.jsx)(n.strong,{children:"nil"}),", so that ",(0,t.jsx)(n.strong,{children:"return"})," can be used to exit from such ",(0,t.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Data and Control"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"tagbody"})})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const l={},o="return",d={id:"chap-5/f-d-dictionary/return",title:"return",description:"Expanded Reference: return",source:"@site/docs/chap-5/f-d-dictionary/return.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/return",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/return",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/return.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"psetq",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/psetq"},next:{title:"return-from",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/returnfrom"}},a={},h=[{value:"Expanded Reference: return",id:"expanded-reference-return",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"return",children:"return"}),"\n","\n","\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-return",children:"Expanded Reference: return"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(return )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);