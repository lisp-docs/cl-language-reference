"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[505],{61463:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var n=t(85893),l=t(11151);const a={},i="setf-slot-value-using-class",c={id:"meta-object-protocol/dictionary/setf-slot-value-using-class",title:"setf-slot-value-using-class",description:"Generic Function (SETF SLOT-VALUE-USING-CLASS)",source:"@site/docs/meta-object-protocol/dictionary/setf-slot-value-using-class.md",sourceDirName:"meta-object-protocol/dictionary",slug:"/meta-object-protocol/dictionary/setf-slot-value-using-class",permalink:"/cl-language-reference/meta-object-protocol/dictionary/setf-slot-value-using-class",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/dictionary/setf-slot-value-using-class.md",tags:[],version:"current",lastUpdatedBy:"daninus14",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"setf-slot-value-using-class-standard-class-standard-effective-slot-definition",permalink:"/cl-language-reference/meta-object-protocol/dictionary/setf-slot-value-using-class-standard-class-standard-effective-slot-definition"},next:{title:"slot-boundp-using-class-built-in-class",permalink:"/cl-language-reference/meta-object-protocol/dictionary/slot-boundp-using-class-built-in-class"}},o={},r=[{value:"<strong>(setf slot-value-using-class)</strong> <em>new-value</em> (<em>class</em> standard-class) (<em>slot</em> standard-effective-slot-definition)\n<strong>(setf slot-value-using-class)</strong> <em>new-value</em> (<em>class</em> funcallable-standard-class) (<em>slot</em> standard-effective-slot-definition)\n<strong>(setf slot-value-using-class)</strong> <em>new-value</em> (<em>class</em> built-in-class) (<em>slot</em> standard-effective-slot-definition)",id:"setf-slot-value-using-class-new-value-class-standard-class-slot-standard-effective-slot-definitionsetf-slot-value-using-class-new-value-class-funcallable-standard-class-slot-standard-effective-slot-definitionsetf-slot-value-using-class-new-value-class-built-in-class-slot-standard-effective-slot-definition",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"setf-slot-value-using-class",children:"setf-slot-value-using-class"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Generic Function"})," ",(0,n.jsx)(s.strong,{children:"(SETF SLOT-VALUE-USING-CLASS)"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,n.jsxs)(s.p,{children:["(",(0,n.jsx)(s.code,{children:"setf"})," (",(0,n.jsx)(s.strong,{children:"slot-value-using-class"})," ",(0,n.jsx)(s.em,{children:"class"})," ",(0,n.jsx)(s.em,{children:"object"})," ",(0,n.jsx)(s.em,{children:"slot"}),") ",(0,n.jsx)(s.em,{children:"new-value"}),") => ",(0,n.jsx)(s.em,{children:"new-value"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments and values:"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"class"})," -- A class metaobject. It is the class of the ",(0,n.jsx)(s.em,{children:"object"})," argument."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"object"})," -- An object."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"slot"})," -- An effective slot definition metaobject."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"new-value"})," -- An object."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(s.p,{children:["The generic function ",(0,n.jsx)(s.code,{children:"(setf slot-value-using-class)"})," implements the behavior of the",(0,n.jsx)(s.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value",children:"(setf slot-value)"})," function. It is called by ",(0,n.jsx)(s.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_slt_va.htm#slot-value",children:"(setf slot-value)"})," with the class of ",(0,n.jsx)(s.em,{children:"object"})," as its second argument and the pertinent effective slot definition metaobject as its fourth argument."]}),"\n",(0,n.jsxs)(s.p,{children:["The generic function ",(0,n.jsx)(s.code,{children:"(setf slot-value-using-class)"})," sets the value contained in the given slot of the given object to the given new value; any previous value is lost."]}),"\n",(0,n.jsxs)(s.p,{children:["The results are undefined if the ",(0,n.jsx)(s.em,{children:"class"})," argument is not the class of the ",(0,n.jsx)(s.em,{children:"object"})," argument, or if the ",(0,n.jsx)(s.em,{children:"slot"})," argument does not appear among the set of effective slots associated with the ",(0,n.jsx)(s.em,{children:"class"})," argument."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Methods:"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"setf-slot-value-using-class-new-value-class-standard-class-slot-standard-effective-slot-definitionsetf-slot-value-using-class-new-value-class-funcallable-standard-class-slot-standard-effective-slot-definitionsetf-slot-value-using-class-new-value-class-built-in-class-slot-standard-effective-slot-definition",children:[(0,n.jsxs)(s.a,{href:"/meta-object-protocol/setf-slot-value-using-class-standard-class-standard-effective-slot-definition",children:[(0,n.jsx)(s.strong,{children:"(setf slot-value-using-class)"})," ",(0,n.jsx)(s.em,{children:"new-value"})," (",(0,n.jsx)(s.em,{children:"class"})," standard-class) (",(0,n.jsx)(s.em,{children:"slot"})," standard-effective-slot-definition)"]}),"\n",(0,n.jsxs)(s.a,{href:"/meta-object-protocol/setf-slot-value-using-class-funcallable-standard-class-standard-effective-slot-definition",children:[(0,n.jsx)(s.strong,{children:"(setf slot-value-using-class)"})," ",(0,n.jsx)(s.em,{children:"new-value"})," (",(0,n.jsx)(s.em,{children:"class"})," funcallable-standard-class) (",(0,n.jsx)(s.em,{children:"slot"})," standard-effective-slot-definition)"]}),"\n",(0,n.jsxs)(s.a,{href:"/meta-object-protocol/setf-slot-value-using-class-built-in-class",children:[(0,n.jsx)(s.strong,{children:"(setf slot-value-using-class)"})," ",(0,n.jsx)(s.em,{children:"new-value"})," (",(0,n.jsx)(s.em,{children:"class"})," built-in-class) (",(0,n.jsx)(s.em,{children:"slot"})," standard-effective-slot-definition)"]})]})]})}function u(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>i});var n=t(67294);const l={},a=n.createContext(l);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);