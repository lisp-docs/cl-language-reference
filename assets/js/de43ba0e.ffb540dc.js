"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[56012],{81738:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var t=n(85893),o=n(11151);const l={},a="slot-makunbound-using-class",c={id:"meta-object-protocol/dictionary/slot-makunbound-using-class",title:"slot-makunbound-using-class",description:"Generic Function SLOT-MAKUNBOUND-USING-CLASS",source:"@site/docs/meta-object-protocol/dictionary/slot-makunbound-using-class.md",sourceDirName:"meta-object-protocol/dictionary",slug:"/meta-object-protocol/dictionary/slot-makunbound-using-class",permalink:"/cl-language-reference/meta-object-protocol/dictionary/slot-makunbound-using-class",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/dictionary/slot-makunbound-using-class.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"slot-makunbound-using-class-standard-class-standard-effective-slot-definition",permalink:"/cl-language-reference/meta-object-protocol/dictionary/slot-makunbound-using-class-standard-class-standard-effective-slot-definition"},next:{title:"slot-value-using-class-built-in-class",permalink:"/cl-language-reference/meta-object-protocol/dictionary/slot-value-using-class-built-in-class"}},i={},r=[{value:"<strong>slot-makunbound-using-class</strong> (<em>class</em> standard-class) <em>object</em> (<em>slot</em> standard-effective-slot-definition)\n<strong>slot-makunbound-using-class</strong> (<em>class</em> funcallable-standard-class) <em>object</em> (<em>slot</em> standard-effective-slot-definition)\n<strong>slot-makunbound-using-class</strong> (<em>class</em> built-in-class) <em>object</em> <em>slot</em>",id:"slot-makunbound-using-class-class-standard-class-object-slot-standard-effective-slot-definitionslot-makunbound-using-class-class-funcallable-standard-class-object-slot-standard-effective-slot-definitionslot-makunbound-using-class-class-built-in-class-object-slot",level:2}];function d(s){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,o.a)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"slot-makunbound-using-class",children:"slot-makunbound-using-class"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"Generic Function"})," ",(0,t.jsx)(e.strong,{children:"SLOT-MAKUNBOUND-USING-CLASS"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"slot-makunbound-using-class"})," ",(0,t.jsx)(e.em,{children:"class"})," ",(0,t.jsx)(e.em,{children:"object"})," ",(0,t.jsx)(e.em,{children:"slot"})," => ",(0,t.jsx)(e.em,{children:"object"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Arguments and values:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"class"})," -- A class metaobject. It is the class of the ",(0,t.jsx)(e.em,{children:"object"})," argument."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"object"})," -- An object."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"slot"})," -- An effective slot definition metaobject."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(e.p,{children:["This generic function implements the behavior of the",(0,t.jsx)(e.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_ma.htm",children:"slot-makunbound"})," function. It is called by ",(0,t.jsx)(e.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_ma.htm",children:"slot-makunbound"})," with the class of ",(0,t.jsx)(e.em,{children:"object"})," as its first argument and the pertinent effective slot definition metaobject as its third argument."]}),"\n",(0,t.jsxs)(e.p,{children:["The generic function ",(0,t.jsx)(e.code,{children:"slot-makunbound-using-class"})," restores a slot in an object to its unbound state. The interpretation of ``restoring a slot to its unbound state'' depends on the class metaobject class."]}),"\n",(0,t.jsxs)(e.p,{children:["The results are undefined if the ",(0,t.jsx)(e.em,{children:"class"})," argument is not the class of the ",(0,t.jsx)(e.em,{children:"object"})," argument, or if the ",(0,t.jsx)(e.em,{children:"slot"})," argument does not appear among the set of effective slots associated with the ",(0,t.jsx)(e.em,{children:"class"})," argument."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Methods:"})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsxs)(e.h2,{id:"slot-makunbound-using-class-class-standard-class-object-slot-standard-effective-slot-definitionslot-makunbound-using-class-class-funcallable-standard-class-object-slot-standard-effective-slot-definitionslot-makunbound-using-class-class-built-in-class-object-slot",children:[(0,t.jsxs)(e.a,{href:"/meta-object-protocol/slot-makunbound-using-class-standard-class-standard-effective-slot-definition",children:[(0,t.jsx)(e.strong,{children:"slot-makunbound-using-class"})," (",(0,t.jsx)(e.em,{children:"class"})," standard-class) ",(0,t.jsx)(e.em,{children:"object"})," (",(0,t.jsx)(e.em,{children:"slot"})," standard-effective-slot-definition)"]}),"\n",(0,t.jsxs)(e.a,{href:"/meta-object-protocol/slot-makunbound-using-class-funcallable-standard-class-standard-effective-slot-definition",children:[(0,t.jsx)(e.strong,{children:"slot-makunbound-using-class"})," (",(0,t.jsx)(e.em,{children:"class"})," funcallable-standard-class) ",(0,t.jsx)(e.em,{children:"object"})," (",(0,t.jsx)(e.em,{children:"slot"})," standard-effective-slot-definition)"]}),"\n",(0,t.jsxs)(e.a,{href:"/meta-object-protocol/slot-makunbound-using-class-built-in-class",children:[(0,t.jsx)(e.strong,{children:"slot-makunbound-using-class"})," (",(0,t.jsx)(e.em,{children:"class"})," built-in-class) ",(0,t.jsx)(e.em,{children:"object"})," ",(0,t.jsx)(e.em,{children:"slot"})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Comments and remarks:"})}),"\n",(0,t.jsx)(e.p,{children:"In cases where the class metaobject class does not distinguish unbound slots, true should be returned."})]})}function u(s={}){const{wrapper:e}={...(0,o.a)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(d,{...s})}):d(s)}},11151:(s,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var t=n(67294);const o={},l=t.createContext(o);function a(s){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(o):s.components||o:a(s.components),t.createElement(l.Provider,{value:e},s.children)}}}]);