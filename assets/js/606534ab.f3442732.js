"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[83385],{57431:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var t=d(85893),s=d(11151);const c={},r="add-dependent",a={id:"meta-object-protocol/add-dependent",title:"add-dependent",description:"Generic Function ADD-DEPENDENT",source:"@site/docs/meta-object-protocol/add-dependent.md",sourceDirName:"meta-object-protocol",slug:"/meta-object-protocol/add-dependent",permalink:"/cl-language-reference/meta-object-protocol/add-dependent",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/add-dependent.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"add-dependent-standard-generic-function",permalink:"/cl-language-reference/meta-object-protocol/add-dependent-standard-generic-function"},next:{title:"add-direct-method-class",permalink:"/cl-language-reference/meta-object-protocol/add-direct-method-class"}},o={},i=[{value:"<strong>add-dependent</strong> (<em>class</em> standard-class) <em>dependent</em>\n<strong>add-dependent</strong> (<em>class</em> funcallable-standard-class) <em>dependent</em>\n<strong>add-dependent</strong> (<em>generic-function</em> standard-generic-function) <em>dependent</em>",id:"add-dependent-class-standard-class-dependentadd-dependent-class-funcallable-standard-class-dependentadd-dependent-generic-function-standard-generic-function-dependent",level:2}];function l(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"add-dependent",children:"add-dependent"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Generic Function"})," ",(0,t.jsx)(n.strong,{children:"ADD-DEPENDENT"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"add-dependent"})," ",(0,t.jsx)(n.em,{children:"metaobject"})," ",(0,t.jsx)(n.em,{children:"dependent"})," => ",(0,t.jsx)(n.em,{children:"unspecified"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"metaobject"})," -- A class or a generic function metaobject."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"dependent"})," -- An object."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["This generic function adds ",(0,t.jsx)(n.em,{children:"dependent"})," to the dependents of ",(0,t.jsx)(n.em,{children:"metaobject"}),". If ",(0,t.jsx)(n.em,{children:"dependent"})," is already in the set of dependents it is not added again (no error is signaled)."]}),"\n",(0,t.jsxs)(n.p,{children:["The generic function",(0,t.jsx)(n.a,{href:"/meta-object-protocol/map-dependents",children:"map-dependents"})," can be called to access the set of dependents of a class or generic function. The generic function ",(0,t.jsx)(n.a,{href:"/meta-object-protocol/remove-dependent",children:"remove-dependent"})," can be called to remove an object from the set of dependents of a class or generic function. The effect of calling ",(0,t.jsx)(n.strong,{children:"add-dependent"})," or ",(0,t.jsx)(n.a,{href:"/meta-object-protocol/remove-dependent",children:"remove-dependent"})," while a call to ",(0,t.jsx)(n.a,{href:"/meta-object-protocol/map-dependents",children:"map-dependents"})," on the same class or generic function is in progress is unspecified."]}),"\n",(0,t.jsxs)(n.p,{children:["The situations in which ",(0,t.jsx)(n.strong,{children:"add-dependent"})," is called are not specified."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Methods:"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"add-dependent-class-standard-class-dependentadd-dependent-class-funcallable-standard-class-dependentadd-dependent-generic-function-standard-generic-function-dependent",children:[(0,t.jsxs)(n.a,{href:"/meta-object-protocol/add-dependent-standard-class",children:[(0,t.jsx)(n.strong,{children:"add-dependent"})," (",(0,t.jsx)(n.em,{children:"class"})," standard-class) ",(0,t.jsx)(n.em,{children:"dependent"})]}),"\n",(0,t.jsxs)(n.a,{href:"/meta-object-protocol/add-dependent-funcallable-standard-class",children:[(0,t.jsx)(n.strong,{children:"add-dependent"})," (",(0,t.jsx)(n.em,{children:"class"})," funcallable-standard-class) ",(0,t.jsx)(n.em,{children:"dependent"})]}),"\n",(0,t.jsxs)(n.a,{href:"/meta-object-protocol/add-dependent-standard-generic-function",children:[(0,t.jsx)(n.strong,{children:"add-dependent"})," (",(0,t.jsx)(n.em,{children:"generic-function"})," standard-generic-function) ",(0,t.jsx)(n.em,{children:"dependent"})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Remarks:"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/meta-object-protocol/dependent-maintenance-protocol",children:"``Dependent Maintenance Protocol'' section"})," for remarks about the use of this facility."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>a,a:()=>r});var t=d(67294);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);