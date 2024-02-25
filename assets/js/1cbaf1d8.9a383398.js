"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[31656],{35594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var c=n(85893),i=n(11151);const o={},s="compute-applicable-methods",r={id:"meta-object-protocol/dictionary/compute-applicable-methods",title:"compute-applicable-methods",description:"Generic Function COMPUTE-APPLICABLE-METHODS",source:"@site/docs/meta-object-protocol/dictionary/compute-applicable-methods.md",sourceDirName:"meta-object-protocol/dictionary",slug:"/meta-object-protocol/dictionary/compute-applicable-methods",permalink:"/cl-language-reference/meta-object-protocol/dictionary/compute-applicable-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/dictionary/compute-applicable-methods.md",tags:[],version:"current",lastUpdatedBy:"daninus14",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"compute-applicable-methods-using-classes",permalink:"/cl-language-reference/meta-object-protocol/dictionary/compute-applicable-methods-using-classes"},next:{title:"compute-class-precedence-list-class",permalink:"/cl-language-reference/meta-object-protocol/dictionary/compute-class-precedence-list-class"}},a={},l=[{value:"<strong>compute-applicable-methods</strong> (<em>generic-function</em> standard-generic-function) <em>arguments</em>",id:"compute-applicable-methods-generic-function-standard-generic-function-arguments",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"compute-applicable-methods",children:"compute-applicable-methods"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.em,{children:"Generic Function"})," ",(0,c.jsx)(t.strong,{children:"COMPUTE-APPLICABLE-METHODS"})]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"compute-applicable-methods"})," ",(0,c.jsx)(t.em,{children:"generic-function"})," ",(0,c.jsx)(t.em,{children:"arguments"})," => ",(0,c.jsx)(t.em,{children:"methods"})]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Arguments and values:"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.em,{children:"generic-function"})," -- A generic function metaobject."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.em,{children:"arguments"})," -- A list of objects."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.em,{children:"methods"})," -- A (possibly empty) list of method metaobjects."]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Description:"})}),"\n",(0,c.jsx)(t.p,{children:"This generic function determines the method applicability of a generic function given a list of required arguments. The returned list of method metaobjects is sorted by precedence order with the most specific method appearing first. If no methods are applicable to the supplied arguments the empty list is returned."}),"\n",(0,c.jsxs)(t.p,{children:["When a generic function is invoked, the discriminating function must determine the ordered list of methods applicable to the arguments. Depending on the generic function and the arguments, this is done in one of three ways: using a memoized value; calling",(0,c.jsx)(t.a,{href:"/meta-object-protocol/compute-applicable-methods-using-classes",children:"compute-applicable-methods-using-classes"}),"; or calling ",(0,c.jsx)(t.strong,{children:"compute-applicable-methods"}),". (Refer to the description of ",(0,c.jsx)(t.a,{href:"/meta-object-protocol/compute-discriminating-function",children:"compute-discriminating-function"})," for the details of this process.)"]}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.em,{children:"arguments"})," argument is permitted to contain more elements than the generic function accepts required arguments; in these cases the extra arguments will be ignored. An error is signaled if ",(0,c.jsx)(t.em,{children:"arguments"})," contains fewer elements than the generic function accepts required arguments."]}),"\n",(0,c.jsx)(t.p,{children:"The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function."}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Methods:"})}),"\n",(0,c.jsx)(t.hr,{}),"\n",(0,c.jsx)(t.h2,{id:"compute-applicable-methods-generic-function-standard-generic-function-arguments",children:(0,c.jsxs)(t.a,{href:"/meta-object-protocol/compute-applicable-methods-standard-generic-function",children:[(0,c.jsx)(t.strong,{children:"compute-applicable-methods"})," (",(0,c.jsx)(t.em,{children:"generic-function"})," standard-generic-function) ",(0,c.jsx)(t.em,{children:"arguments"})]})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var c=n(67294);const i={},o=c.createContext(i);function s(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);