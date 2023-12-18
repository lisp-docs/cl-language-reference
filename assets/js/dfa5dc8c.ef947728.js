"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[3213],{83719:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=r(85893),a=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"array-element-type"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"array-element-type"})," ",(0,t.jsx)(n.em,{children:"array \u2192 typespec"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"array"}),"\u2014an ",(0,t.jsx)(n.em,{children:"array"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"typespec"}),"\u2014a ",(0,t.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns a ",(0,t.jsx)(n.em,{children:"type specifier"})," which represents the ",(0,t.jsx)(n.em,{children:"actual array element type"})," of the array, which is the set of ",(0,t.jsx)(n.em,{children:"objects"})," that such an ",(0,t.jsx)(n.em,{children:"array"})," can hold. (Because of ",(0,t.jsx)(n.em,{children:"array upgrading"}),", this ",(0,t.jsx)(n.em,{children:"type specifier"})," can in some cases denote a ",(0,t.jsx)(n.em,{children:"supertype"})," of the ",(0,t.jsx)(n.em,{children:"expressed array element type"})," of the ",(0,t.jsx)(n.em,{children:"array"}),".)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(array-element-type (make-array 4)) \u2192 T \n(array-element-type (make-array 12 :element-type \u2019(unsigned-byte 8))) \n\u2192 implementation-dependent \n(array-element-type (make-array 12 :element-type \u2019(unsigned-byte 5))) \n\u2192 implementation-dependent \n(array-element-type (make-array 5 :element-type \u2019(mod 5))) \ncould be (mod 5), (mod 8), fixnum, t, or any other type of which (mod 5) is a *subtype*. \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"implementation"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["Should signal an error of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"type-error"})," if its argument is not an ",(0,t.jsx)(n.em,{children:"array"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"array"}),", ",(0,t.jsx)(n.strong,{children:"make-array"}),", ",(0,t.jsx)(n.strong,{children:"subtypep"}),", ",(0,t.jsx)(n.strong,{children:"upgraded-array-element-type"})]})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const i={},l="array-element-type",d={id:"chap-15/bf-c-dictionary/arrayelementtype",title:"array-element-type",description:"Expanded Reference: array-element-type",source:"@site/docs/chap-15/bf-c-dictionary/arrayelementtype.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/arrayelementtype",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/arrayelementtype",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/arrayelementtype.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"array-displacement",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/arraydisplacement"},next:{title:"array-has-fill-pointer-p",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/arrayhasfillpointerp"}},p={},o=[{value:"Expanded Reference: array-element-type",id:"expanded-reference-array-element-type",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"array-element-type",children:"array-element-type"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-array-element-type",children:"Expanded Reference: array-element-type"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(array-element-type )\n"})})]})}function y(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var t=r(67294);const a={},s=t.createContext(a);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);