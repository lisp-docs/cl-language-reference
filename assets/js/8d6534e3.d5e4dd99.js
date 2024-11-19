"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[76108],{37321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=n(85893),s=n(11151);const a={},r="extract-specializer-names",c={id:"meta-object-protocol/dictionary/extract-specializer-names",title:"extract-specializer-names",description:"Function EXTRACT-SPECIALIZER-NAMES",source:"@site/docs/meta-object-protocol/dictionary/extract-specializer-names.md",sourceDirName:"meta-object-protocol/dictionary",slug:"/meta-object-protocol/dictionary/extract-specializer-names",permalink:"/cl-language-reference/meta-object-protocol/dictionary/extract-specializer-names",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/dictionary/extract-specializer-names.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"extract-lambda-list",permalink:"/cl-language-reference/meta-object-protocol/dictionary/extract-lambda-list"},next:{title:"defmethod expansion",permalink:"/cl-language-reference/meta-object-protocol/dictionary/fig-defmethod-1"}},l={},o=[];function d(e){const t={code:"code",em:"em",h1:"h1",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"extract-specializer-names",children:"extract-specializer-names"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Function"})," ",(0,i.jsx)(t.strong,{children:"EXTRACT-SPECIALIZER-NAMES"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"extract-specializer-names"})," ",(0,i.jsx)(t.em,{children:"specialized-lambda-list"})," => ",(0,i.jsx)(t.em,{children:"specializer-names"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Arguments and values:"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"specialized-lambda-list"})," -- A specialized lambda list as accepted by ",(0,i.jsx)(t.code,{children:"defmethod"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"specializer-names"})," -- A list of specializer names."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Description:"})}),"\n",(0,i.jsx)(t.p,{children:"This function takes a specialized lambda list and returns its specializer names. This is a non-destructive operation. Whether the result shares structure with the argument is unspecified. The results are undefined if the result of this function is modified."}),"\n",(0,i.jsxs)(t.p,{children:["The result of this function will be a list with a number of elements equal to the number of required arguments in ",(0,i.jsx)(t.em,{children:"specialized-lambda-list"}),". Specializers are defaulted to the symbol ",(0,i.jsx)(t.code,{children:"t"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If the ",(0,i.jsx)(t.em,{children:"specialized-lambda-list"})," argument does not have legal syntax, an error is signaled. This syntax checking does not check the syntax of the actual specializer names, only the syntax of the lambda list and where the specializers appear."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.p,{children:"(extract-specializer-names '((p position)))            ==> (POSITION)"}),"\n",(0,i.jsx)(t.p,{children:"(extract-specializer-names '((p position) x y))        ==> (POSITION T T)"}),"\n",(0,i.jsx)(t.p,{children:"(extract-specializer-names '(a (b (eql x)) c &rest i)) ==> (T (EQL X) T)"})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var i=n(67294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);