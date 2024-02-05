"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[62052],{73074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(85893),s=n(11151);const r={},i="extract-lambda-list",l={id:"meta-object-protocol/extract-lambda-list",title:"extract-lambda-list",description:"Function EXTRACT-LAMBDA-LIST",source:"@site/docs/meta-object-protocol/extract-lambda-list.md",sourceDirName:"meta-object-protocol",slug:"/meta-object-protocol/extract-lambda-list",permalink:"/cl-language-reference/meta-object-protocol/extract-lambda-list",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/extract-lambda-list.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eql-specializer-object",permalink:"/cl-language-reference/meta-object-protocol/eql-specializer-object"},next:{title:"extract-specializer-names",permalink:"/cl-language-reference/meta-object-protocol/extract-specializer-names"}},c={},o=[];function d(e){const t={code:"code",em:"em",h1:"h1",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"extract-lambda-list",children:"extract-lambda-list"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Function"})," ",(0,a.jsx)(t.strong,{children:"EXTRACT-LAMBDA-LIST"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"extract-lambda-list"})," ",(0,a.jsx)(t.em,{children:"specialized-lambda-list"})," => ",(0,a.jsx)(t.em,{children:"lambda-list"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Arguments and values:"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"specialized-lambda-list"})," -- A specialized lambda list as accepted by ",(0,a.jsx)(t.code,{children:"defmethod"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"lambda-list"})," -- An unspecialized lambda list."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Description:"})}),"\n",(0,a.jsx)(t.p,{children:"This function takes a specialized lambda list and returns the lambda list with the specializers removed. This is a non-destructive operation. Whether the result shares any structure with the argument is unspecified."}),"\n",(0,a.jsxs)(t.p,{children:["If the ",(0,a.jsx)(t.em,{children:"specialized-lambda-list"})," argument does not have legal syntax, an error is signaled. This syntax checking does not check the syntax of the actual specializer names, only the syntax of the lambda list and where the specializers appear."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(t.p,{children:"(extract-lambda-list '((p position)))             ==> (P)"}),"\n",(0,a.jsx)(t.p,{children:"(extract-lambda-list '((p position) x y))         ==> (P X Y)"}),"\n",(0,a.jsx)(t.p,{children:"(extract-lambda-list '(a (b (eql x)) c &rest i))  ==> (A B C &OPTIONAL I)"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Comments and remarks:"})}),"\n",(0,a.jsx)(t.p,{children:"The last example in the previous section is surprising, because there is no explanation for it."})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(67294);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);