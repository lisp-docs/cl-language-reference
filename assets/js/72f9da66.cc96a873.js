"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[13237],{41555:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var i=s(85893),r=s(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"disassemble"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"disassemble"})," ",(0,i.jsx)(n.em,{children:"fn \u2192"})," ",(0,i.jsx)(n.strong,{children:"nil"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"fn"}),"\u2014an ",(0,i.jsx)(n.em,{children:"extended function designator"})," or a ",(0,i.jsx)(n.em,{children:"lambda expression"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"function"})," ",(0,i.jsx)(n.strong,{children:"disassemble"})," is a debugging aid that composes symbolic instructions or expressions in some ",(0,i.jsx)(n.em,{children:"implementation-dependent"})," language which represent the code used to produce the ",(0,i.jsx)(n.em,{children:"function"})," which is or is named by the argument ",(0,i.jsx)(n.em,{children:"fn"}),". The result is displayed to ",(0,i.jsx)(n.em,{children:"standard output"})," in an ",(0,i.jsx)(n.em,{children:"implementation-dependent"})," format."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"fn"})," is a ",(0,i.jsx)(n.em,{children:"lambda expression"})," or ",(0,i.jsx)(n.em,{children:"interpreted function"}),", it is compiled first and the result is disassembled."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"fn designator"})," is a ",(0,i.jsx)(n.em,{children:"function name"}),", the ",(0,i.jsx)(n.em,{children:"function"})," that it ",(0,i.jsx)(n.em,{children:"names"})," is disassembled. (If that ",(0,i.jsx)(n.em,{children:"function"})," is an ",(0,i.jsx)(n.em,{children:"interpreted function"}),", it is first compiled but the result of this implicit compilation is not installed.)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:" \n\n(defun f (a) (1+ a)) \u2192 F \n\n(eq (symbol-function \u2019f) \n\n(progn (disassemble \u2019f) \n\n(symbol-function \u2019f))) \u2192 true \n\n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"*standard-output*"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"type-error"})," if ",(0,i.jsx)(n.em,{children:"fn"})," is not an ",(0,i.jsx)(n.em,{children:"extended function designator"})," or a ",(0,i.jsx)(n.em,{children:"lambda expression"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const d={},a="disassemble",o={id:"chap-25/cf-c-dictionary/disassemble",title:"disassemble",description:"Expanded Reference: disassemble",source:"@site/docs/chap-25/cf-c-dictionary/disassemble.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/disassemble",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/disassemble",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/disassemble.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"describe-object",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/describeobject"},next:{title:"documentation, (setf documentation)",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/documentation"}},l={},h=[{value:"Expanded Reference: disassemble",id:"expanded-reference-disassemble",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"disassemble",children:"disassemble"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-disassemble",children:"Expanded Reference: disassemble"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(disassemble )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var i=s(67294);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);