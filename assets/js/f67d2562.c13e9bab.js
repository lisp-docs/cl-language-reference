"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[48284],{92670:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=a(85893),n=a(11151);const l={},r="class-default-initargs",i={id:"meta-object-protocol/class-default-initargs",title:"class-default-initargs",description:"Generic Function CLASS-DEFAULT-INITARGS",source:"@site/docs/meta-object-protocol/class-default-initargs.md",sourceDirName:"meta-object-protocol",slug:"/meta-object-protocol/class-default-initargs",permalink:"/cl-language-reference/meta-object-protocol/class-default-initargs",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/class-default-initargs.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"class-default-initargs-standard-class",permalink:"/cl-language-reference/meta-object-protocol/class-default-initargs-standard-class"},next:{title:"class-direct-default-initargs-built-in-class",permalink:"/cl-language-reference/meta-object-protocol/class-direct-default-initargs-built-in-class"}},c={},o=[{value:"<strong>class-default-initargs</strong> (<em>class</em> standard-class)\n<strong>class-default-initargs</strong> (<em>class</em> funcallable-standard-class)\n<strong>class-default-initargs</strong> (<em>class</em> forward-referenced-class)\n<strong>class-default-initargs</strong> (<em>class</em> built-in-class)",id:"class-default-initargs-class-standard-classclass-default-initargs-class-funcallable-standard-classclass-default-initargs-class-forward-referenced-classclass-default-initargs-class-built-in-class",level:2}];function d(s){const e={a:"a",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,n.a)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"class-default-initargs",children:"class-default-initargs"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"Generic Function"})," ",(0,t.jsx)(e.strong,{children:"CLASS-DEFAULT-INITARGS"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"class-default-initargs"})," ",(0,t.jsx)(e.em,{children:"class"})," => ",(0,t.jsx)(e.em,{children:"initargs"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Arguments and values:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"class"})," -- A class metaobject."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"initargs"})," -- List of initialization arguments."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(e.p,{children:["Returns a list of the default initialization arguments for ",(0,t.jsx)(e.em,{children:"class"}),". Each element of this list is a canonicalized default initialization argument. The empty list is returned if ",(0,t.jsx)(e.em,{children:"class"})," has no default initialization arguments."]}),"\n",(0,t.jsxs)(e.p,{children:["During finalization",(0,t.jsx)(e.a,{href:"/meta-object-protocol/finalize-inheritance",children:"finalize-inheritance"})," calls ",(0,t.jsx)(e.a,{href:"/meta-object-protocol/compute-default-initargs",children:"compute-default-initargs"})," to compute the default initialization arguments for the class. That value is associated with the class metaobject and is returned by ",(0,t.jsx)(e.strong,{children:"class-default-initargs"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["This generic function signals an error if ",(0,t.jsx)(e.em,{children:"class"})," has not been finalized."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Methods:"})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsxs)(e.h2,{id:"class-default-initargs-class-standard-classclass-default-initargs-class-funcallable-standard-classclass-default-initargs-class-forward-referenced-classclass-default-initargs-class-built-in-class",children:[(0,t.jsxs)(e.a,{href:"/meta-object-protocol/class-default-initargs-standard-class",children:[(0,t.jsx)(e.strong,{children:"class-default-initargs"})," (",(0,t.jsx)(e.em,{children:"class"})," standard-class)"]}),"\n",(0,t.jsxs)(e.a,{href:"/meta-object-protocol/class-default-initargs-funcallable-standard-class",children:[(0,t.jsx)(e.strong,{children:"class-default-initargs"})," (",(0,t.jsx)(e.em,{children:"class"})," funcallable-standard-class)"]}),"\n",(0,t.jsxs)(e.a,{href:"/meta-object-protocol/class-default-initargs-forward-referenced-class",children:[(0,t.jsx)(e.strong,{children:"class-default-initargs"})," (",(0,t.jsx)(e.em,{children:"class"})," forward-referenced-class)"]}),"\n",(0,t.jsxs)(e.a,{href:"/meta-object-protocol/class-default-initargs-built-in-class",children:[(0,t.jsx)(e.strong,{children:"class-default-initargs"})," (",(0,t.jsx)(e.em,{children:"class"})," built-in-class)"]})]})]})}function u(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(d,{...s})}):d(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>i,a:()=>r});var t=a(67294);const n={},l=t.createContext(n);function r(s){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:r(s.components),t.createElement(l.Provider,{value:e},s.children)}}}]);