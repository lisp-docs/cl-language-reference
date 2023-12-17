"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[80898],{10781:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var t=r(85893),s=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"destructuring-bind"})," ",(0,t.jsx)(n.em,{children:"Macro"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"destructuring-bind"})," ",(0,t.jsx)(n.em,{children:"lambda-list expression {declaration}"}),"* ",(0,t.jsx)(n.em,{children:"{form}"}),"*"]}),"\n",(0,t.jsx)(n.p,{children:"\u2192 {result}*"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"lambda-list"}),"\u2014a ",(0,t.jsx)(n.em,{children:"destructuring lambda list"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"expression"}),"\u2014a ",(0,t.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"declaration"}),"\u2014a ",(0,t.jsx)(n.strong,{children:"declare"})," ",(0,t.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,t.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"results"}),"\u2014the ",(0,t.jsx)(n.em,{children:"values"})," returned by the ",(0,t.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"destructuring-bind"})," binds the variables specified in ",(0,t.jsx)(n.em,{children:"lambda-list"})," to the corresponding values in the tree structure resulting from the evaluation of ",(0,t.jsx)(n.em,{children:"expression"}),"; then ",(0,t.jsx)(n.strong,{children:"destructuring-bind"})," evaluates ",(0,t.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"lambda-list"})," supports destructuring as described in Section 3.4.5 (Destructuring Lambda Lists). ",(0,t.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:" \n(defun iota (n) (loop for i from 1 to n collect i)) ;helper \n(destructuring-bind ((a &amp;optional (b \u2019bee)) one two three) \n\u2018((alpha) ,@(iota 3)) \n(list a b three two one)) \u2192 (ALPHA BEE 3 2 1) \nData and Control \n\n\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["If the result of evaluating the ",(0,t.jsx)(n.em,{children:"expression"})," does not match the destructuring pattern, an error of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"error"})," should be signaled."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"macrolet"}),", ",(0,t.jsx)(n.strong,{children:"defmacro"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const c={},o="destructuring-bind",a={id:"chap-5/f-d-dictionary/destructuring-bind_macro",title:"destructuring-bind",description:"Expanded Reference: destructuring-bind",source:"@site/docs/chap-5/f-d-dictionary/destructuring-bind_macro.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/destructuring-bind_macro",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/destructuring-bind_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/destructuring-bind_macro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"defun",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/defun_macro"},next:{title:"destructuring-bind",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/destructuringbind"}},l={},u=[{value:"Expanded Reference: destructuring-bind",id:"expanded-reference-destructuring-bind",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"destructuring-bind",children:"destructuring-bind"}),"\n","\n","\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-destructuring-bind",children:"Expanded Reference: destructuring-bind"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(destructuring-bind )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>d});var t=r(67294);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);