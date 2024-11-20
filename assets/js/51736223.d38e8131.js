"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[46044],{67740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var a=n(85893),i=n(11151);const s={},c="compute-default-initargs",r={id:"meta-object-protocol/dictionary/compute-default-initargs",title:"compute-default-initargs",description:"Generic Function COMPUTE-DEFAULT-INITARGS",source:"@site/docs/meta-object-protocol/dictionary/compute-default-initargs.md",sourceDirName:"meta-object-protocol/dictionary",slug:"/meta-object-protocol/dictionary/compute-default-initargs",permalink:"/cl-language-reference/meta-object-protocol/dictionary/compute-default-initargs",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/dictionary/compute-default-initargs.md",tags:[],version:"current",lastUpdatedBy:"daninus14",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"compute-default-initargs-standard-class",permalink:"/cl-language-reference/meta-object-protocol/dictionary/compute-default-initargs-standard-class"},next:{title:"compute-discriminating-function-standard-generic-function",permalink:"/cl-language-reference/meta-object-protocol/dictionary/compute-discriminating-function-standard-generic-function"}},l={},o=[{value:"<strong>compute-default-initargs</strong> (<em>class</em> standard-class)\n<strong>compute-default-initargs</strong> (<em>class</em> funcallable-standard-class)",id:"compute-default-initargs-class-standard-classcompute-default-initargs-class-funcallable-standard-class",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"compute-default-initargs",children:"compute-default-initargs"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Generic Function"})," ",(0,a.jsx)(t.strong,{children:"COMPUTE-DEFAULT-INITARGS"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"compute-default-initargs"})," ",(0,a.jsx)(t.em,{children:"class"})," => ",(0,a.jsx)(t.em,{children:"initargs"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Arguments and values:"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"class"})," -- A class metaobject."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"initargs"})," -- List of canonicalized default initialization arguments."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Description:"})}),"\n",(0,a.jsx)(t.p,{children:"This generic-function is called to determine the default initialization arguments for a class."}),"\n",(0,a.jsx)(t.p,{children:"The result is a list of canonicalized default initialization arguments, with no duplication among initialization argument names."}),"\n",(0,a.jsxs)(t.p,{children:["All methods on this generic function must compute the default initialization arguments as a function of only: (i) the class precedence list of ",(0,a.jsx)(t.em,{children:"class"}),", and (ii) the direct default initialization arguments of each class in that list. The results are undefined if the rules used to compute the default initialization arguments depend on any other factors."]}),"\n",(0,a.jsxs)(t.p,{children:["When a class is finalized,",(0,a.jsx)(t.a,{href:"/meta-object-protocol/finalize-inheritance",children:"finalize-inheritance"})," calls this generic function and associates the returned value with the class metaobject. The value can then be accessed by calling ",(0,a.jsx)(t.a,{href:"/meta-object-protocol/class-default-initargs",children:"class-default-initargs"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The list returned by this generic function will not be mutated by the implementation. The results are undefined if a portable program mutates the list returned by this generic function."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Methods:"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h2,{id:"compute-default-initargs-class-standard-classcompute-default-initargs-class-funcallable-standard-class",children:[(0,a.jsxs)(t.a,{href:"/meta-object-protocol/compute-default-initargs-standard-class",children:[(0,a.jsx)(t.strong,{children:"compute-default-initargs"})," (",(0,a.jsx)(t.em,{children:"class"})," standard-class)"]}),"\n",(0,a.jsxs)(t.a,{href:"/meta-object-protocol/compute-default-initargs-funcallable-standard-class",children:[(0,a.jsx)(t.strong,{children:"compute-default-initargs"})," (",(0,a.jsx)(t.em,{children:"class"})," funcallable-standard-class)"]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var a=n(67294);const i={},s=a.createContext(i);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);